---
title: "TrueLayer implementation"
draft: true
---


1. Initiates process

You can build the authorisation process into any stage of your workflow:

Onboarding form for new customers
Link from a dashboard for existing clients

It’s recommended to capture at least Company Name at the initial stage.

2. Link Site

The authorisation is handled via a “Link Site” powered by the Codat API.

Recommended Features:

List of banking sources: selectable list including names and logos of supported providers
Data Access Guidelines: provide users with visibility of the type of data you will be pulling
Help and Support: details of support, whether user guides or contact details for your support team.

Display a list of supported banking sources for the end user to choose from. The API provides an endpoint to view your enabled providers and their logoUrl.

Note: Banking integrations have a ‘sourceType’ of Banking.

GET: /integrations

Example Response:

{
        "key": "natwest_uk",
        "logoUrl": "https://static.codat.io/public/platforms/natwest_uk.png",
        "name": "NatWest",
        "enabled": false,
        "sourceId": "41ccee2f-1a79-4e1b-abc8-98b99887b57a",
        "integrationId": "268c557b-b2bf-4213-b594-1fb9474cbaf0",
        "sourceType": "Banking"
}

3. Selects banking provider

The user will select their banking source from the list you provide.

Note: if you only plan to offer a single banking source you can bypass the selection stage and hardcode the platformType in the next stage.

4. Request Company creation

POST: /companies

Example body:

{
  "name": "Demo Company",
  "platformType": "natwest_uk"
}

The possible values for platformType are available from the GET /integrations endpoint as the “key” for the relevant banking source. Filter by integrationType to limit to only 'Accounting' or 'Banking' datatypes.

5. Create Company

The key fields from POST /companies are the company id which id the unique company identifier throughout the flow and the redirectUrl.

Example response:

{
  "id": "1234-5678-1234-5678",
  "name": "Demo Company",
  "platform": "natwest_uk",
  "redirect": "https://link-uat.codat.io/link/start/1234-5678-1234-5678",
  "status": "PendingAuth",
  "dataConnections": [{
      "id": "8765-4321-8765-4321",
      "integrationId": "8765-4321-8765-4321",
      "sourceId": "8765-4321-8765-4321",
      "platformName": "NatWest",
      "linkUrl": " https://link-uat.codat.io/link/start/1234-5678-1234-5678",
      "status": "PendingAuth",
      "created": "2020-03-24T18:00:35.2450831Z"
    }]
}

6. Redirected to the banking integration

The Company is redirected to the Banking Integration provider (e.g. TrueLayer) via the linkUrl where they need to authorise the sharing of banking data.

7. Redirected to the banking source

The Company is now re-directed to their banks authorisation page. At this stage the flow is dictated by the banking source and will differ by provider.

8. Authorises connection

Once the connection has been authorised the Company will be redirected to a location of your choice (configurable in the Codat Portal under redirection URL).

9. Synchronises data

By default, the initial synchronisation will begin after successful authorisation.

The process of the sync can be tracked via the Portal or endpoints.

GET: /companies/{companyId}/dataStatus

Synchronisation

Additional synchronisation can be scheduled (from hourly to monthly) or requested adhoc via the Codat Portal or endpoints.

POST: /companies/{companyId}/data/queue/{dataType}

Will queue a synchronisation of the specified data type dataType is the key of the data type e.g. invoices.

POST: /companies/{companyId}/data/queue/all

Will queue a synchronisation of all data types supported by linked data connections to this company.

10. Pull data from Codat

The data is now available via the Portal or using the Codat API endpoints (API Explorer)