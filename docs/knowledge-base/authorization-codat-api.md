---
title: "Authorisation using the Codat API"
draft: true
---

Integrating with the Codat API allows you to develop your own user journey within your application, to your exact specification, powered by Codat API.

You can build the authorisation process into any stage of your workflow:

Onboarding form for new customers
Link from a dashboard for existing clients

It’s recommended to capture at least the company name at the initial stage.

![](/img/knowledge-base/auth-flow-codat-api.png)

Selects platform
Create a new Company
Authorise access
View data
1. Selects platform

The company should be presented a list of accounting, banking or commerce platforms to select from.

Recommended features
List of platforms selectable list including names and logos of supported platforms
Data access guidelines visibility of the type of data being collected and why
Help and support details of support including users guides and contact details
Implementation

The integrations API provides a list of supported platforms, including name, type and logo URL:

GET

	/integrations
Example
response	
{
  "key": "xero",
  "logoUrl": "https://static.codat.io/public/platforms/xero.png",
  "name": "Xero",
  "enabled": true,
  "sourceId": "8a156a5a-39cb-4f9d-856e-76ef9b9a9607",
  "integrationId": "0f20c943-12d0-4800-9f6c-d218f62d494c",
  "sourceType": "Accounting"
}

Note: if you only plan to offer a single accounting platform you can bypass the selection stage and hardcode the platformType in the next stage.

2. Create a new company

When a company is created, via the Codat Portal or API, a unique company Id and link URL is generated to redirect the company to their platform of choice.

POST

	/companies
Example request
body	
{
  "name": "Demo Company",
  "platformType": "xero"
}

Example
response	
{
  "id": "1234-5678-1234-5678",
  "name": "Demo Company",
  "platform": "Xero",
  "redirect": "https://link-uat.codat.io/link/start/1234-5678-1234-5678",
  "status": "PendingAuth",
  "dataConnections": [{
       "id": "8765-4321-8765-4321",
       "integrationId": "8765-4321-8765-4321",
       "sourceId": "8765-4321-8765-4321",
       "platformName": "Xero",
       "linkUrl": " https://link-uat.codat.io/link/start/1234-5678-1234-5678",
       "status": "PendingAuth",
       "created": "2020-03-24T18:00:35.2450831Z"
  }]
}




The key fields from POST /companies are:

id: the unique company identifier assigned by Codat
linkURL: the URL to redirect company to their chosen accounting platform. Note a company may have multiple linkURLs under dataConnections, one for each accounting, banking and commerce connection if selected.

The possible values for platformType are available from the GET /integrations endpoint as the “key” for the relevant accounting platform. Filter by integrationType to limit to only 'Accounting' or 'Banking' datatypes.

See Alternative API Workflow for pushing temporary “dummy” names to be replaced at a later stage.




3. Authorise access

The company should be redirected to their platform of choice via the linkURL. At this stage the process is dictated by the platform and will differ by provider.

Cloud accounting platforms

The company will likely be re-directed to their accounting platform login, once logged in they will be asked to Authorise the connection. Example of Xero’s:

	
On Premise platforms

An install will automatically download. Once the company has installed, they should enter their license key (this is also their Company Id in Codat).

Recommend features
A reminder note that the connector MUST be installed on the same computer as the accounting platform.
Installing the connector – details on how to find and open the desktop connector installation wizard.
The license key (company id) the user will need to enter into the connector
Confirmation page
Based on requirements from the accounting platforms we recommend, after authorising, the end user is presented with a screen confirming the Company Name of the account they linked.
This gives the user the chance to confirm they have linked the correct account as the final stage.
The Company Name can easily be recalled from the info endpoint:

GET

	/companies/{companyId}/data/info




4. View data

Once a company has authorised access the first synchronisation will begin by default.

Company status

Once the company has successfully linked their platform their status will change to Linked. The status can be retrieved from GET /companies endpoint.

Blank: the company has not opened the link or selecting an accounting platform
PendingAuth: the company has selected an accounting platform, but has not completed the authorisation process
Linked: the company has successfully linked their accounting platform and the link is still active to request data updates
Deauthorised: the company has previously successfully linked their accounting platform, but the connection has now been deauthorised and is no longer active – to reauthorise the company will need to recomplete the authorise process via their unique linkURL.
Monitoring

The process of the sync can be tracked via the Portal or endpoints.

GET

	/companies/{companyId}/dataStatus

Synchronisation

Additional synchronisations  can be scheduled (from hourly to monthly) or requested adhoc via the Codat Portal or endpoints.

To request a sync for a specific data type:

POST

	/companies/{companyId}/data/queue/{dataType}

To request a sync of all data types:

POST

	/companies/{companyId}/data/queue/all

Viewing data
Portal: see our Portal guide
API: see our API Swagger docs for a complete list of available endpoints.

Alternative API workflow
Temporary Company name

Creating a company with a temporary “dummy” name to be replaced after synchronisation.

![](/img/knowledge-base/auth-flow-codat-api-alternative.png)


1. Request Company creation

POST

	/companies


Example Request Body

	
{
  "name": "Dummy name",
  "platformType": "xero"
}

Instead of pushing the company name you can push a “dummy” name. If using this method it is suggested you still use a meaningful identifier (e.g. session time or unique id) you can easily refer to at a later date.

2. Create Company

The key fields remain the same as the main workflow. From POST /companies the company id which id the unique company identifier throughout the flow and the redirect url.

3. Pull data from Codat

Once the synchronisation is successful you will want to access the Company name in the accounting platform. You have the option of companyName and/or companyLegalName.

GET

	/companies/{companyId}/data/info
Example
response	
{
  "companyName": "Sandbox Company_US_1",
  "accountingPlatformRef": "123146221125654",
  "companyLegalName": "Sandbox Company_US_1",
  …
}

4. Replace company name

PUT

	/companies


Example request
body

	
{ 
  "name": "Sandbox Company_US_1" 
}




Temporary Company Name

Creating a company with a temporary “dummy” name to be replaced after synchronisation.

1. Request Company creation

POST: /companies

Example body:

{ 
"name": "Dummy name",
"platformType": "xero"
}

Instead of pushing the company name you can push a “dummy” name. If using this method it is suggested you still use a meaningful identifier (e.g. session time or unique id) you can easily refer to at a later date.

2. Create Company

The key fields remain the same as the main workflow. From POST /companies the company id which id the unique company identifier throughout the flow and the redirect url.

3. Pull data from Codat

Once the synchronisation is successful you will want to access the Company name in the accounting platform. You have the option of companyName and/or companyLegalName.

GET: /companies/{companyId}/data/info

Example response:

{
    "companyName": "Sandbox Company_US_1",
    "accountingPlatformRef": "123146221125654",
    "companyLegalName": "Sandbox Company_US_1",
…
}
4. Replace company name

PUT:/companies/{companyId}/

Example body:

{ "name": "Sandbox Company_US_1" }



