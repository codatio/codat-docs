---
title: "Advanced setup features"
description: "DESCRIPTION PLEASE"
---

## Custom re-direct
Once a user has set up their sales data synchronization in the Sync Configuration UI, they will see a success message. You can instead re-direct the merchant to a custom URL of your choice.

Append a redirectUrl query parameter and the absolute URL as the value when calling the API to request a Sync Configuration URL.

`GET config/sync/commerce/lqai/{platformKey}/start?merchantIdentifier={companyId}&redirectUrl=app.codat.io`

The resulting Sync Flow URL will include the redirect URL as shown in this example:

```
{
  "url": "https://sync-flow.codat.io/06de067c-1d6c-416a-8e61-676e6c135e68/lqai/gbol/start?merchantIdentifier=CoPay&otp=615853&redirectUrl=app.codat.io"
}
```

## Authorizing access to your customer’s data on behalf of your customer
As part of your set up, Codat will deploy a connector to your API, allowing us to access your customers data in your systems. By default, we will, leverage your API’s authentication method (e.g. Oauth2) to request that your customers grant access to their data in your system.

Given the user begins the journey to set up their sales data synchronization within your system, you may deem this to be an unnecessary step, and choose instead to grant Codat access to your customers data on their behalf. This can be achieved by creating a record of your customer wintin Codat, and providing associated authorization data for accessing their data, before redirecting them to the Sync Configuration URL (see step 3. of the set up).

If this is the desired implementation, please ensure this is discussed with your Solutions Engineer before the deployment of Codat’s connector to your API.

### Authorizing access to your customer's data on behalf of your customer

``` mermaid
  sequenceDiagram
    participant you as You 
    participant codat as Codat
    participant customer as Your customer
    you ->> codat: Get branding for the integrations
    codat ->> you: Branding content
    you ->> customer: Render the integrations
    customer ->> you: Select integration
    you ->> you: Retain platfrom key
    opt Optional: Authorizing access to your customer's data on behalf of your customer
        you ->> codat: Create company
        codat ->> you: Company Id
        you ->> codat: Create connection
        codat ->> you: Connection Id
        you ->> codat: Authorization info
        codat ->> you: OK
    end
    you ->> codat: Get Sync configuration URL
    codat ->> you: Sync configuration URL
    you ->> customer: Redirect to Sync configuration URL
    customer ->> codat: Complete Sync configuration UI
```

## 1. Create a Company
This step creates a record of your customer within Codat. To do this, call our POST /companies endpoint

`POST /companies`

The name property in the request body must be your unique customer identifier; you can also populate the customer’s name as the description. Example request body: 

```
{
  name: "12345678"    // unique identifier for your customer
  description: ""     // optionally include the customer name
}
```
We'll return a companyId (returned here as id):

```
{
  "id": "0498e921-9b53-4396-a412-4f2f5983b0a2",
  "name": "string",
  "platform": "string",
  "redirect": "https://link.codat.io/company/27628208-459c-46a2-a705-5641ce25f739",
  "lastSync": "2022-01-01T12:00:00.000Z",
  "created": "2022-01-01T12:00:00.000Z",
  "createdByUserName": "string",
  "dataConnections": []
}
```

You must retain this `companyId` as it will be required in the following steps.

## 2. Create a connection

Once you have created a Company to represent your customer, you can create a Connection, to represent the connectivity to your system for this customer. To do this, call our POST /connections endpoint

`POST /companies/{companyId}/connections`

The `platformKey` property in the request body is the `platformKey` that identifies the Codats connector to your API. (See step 3. of the set up). Your Solutions Engineer an provide this to you. Example request body: 
```
{
  platformKey: "dfxm"    // identifies Codat connector to your API
}
```

We'll return a connectionId for you to retain (returned here as id):
```
{
  "id": "ee2eb431-c0fa-4dc9-93fa-d29781c12bcd",
  "integrationId": "bf083d72-62c7-493e-aec9-81b4dbba7e2c",
  "integrationKey": "dfxm",
  "sourceId": "bdd831ce-eebd-4896-89a7-20e5ee8989ee",
  "platformName": "Accounting Package",
  "linkUrl": "https://link-api.codat.io/companies/86bd88cb-44ab-4dfb-b32f-87b19b14287f/connections/ee2eb431-c0fa-4dc9-93fa-d29781c12bcd/start",
  "status": "pendingAuth",
  "lastSync": "2022-10-27T10:22:43.6464237Z",
  "created": "2022-10-27T09:53:29Z",
  "sourceType": "Accounting"
}
```
You must retain this `connectionId` as it will be required in the following steps.

## 3. Pass the required Authorization information to Codat

Once you have created  Company and a Connection you can pass to Codat the authorization information that is required to access your customer’s data via our API.

To do this, call our PUT /authorization endpoint:

`PUT /companies/{companyId}/connections/{connectionId}/authorization`

The request body will be agreed with your Solutions Engineer as part of deploying the Codat connector to your API. 

We'll return an updated `connection` object (the same as step 2. above):

```
{
  "id": "ee2eb431-c0fa-4dc9-93fa-d29781c12bcd",
  "integrationId": "bf083d72-62c7-493e-aec9-81b4dbba7e2c",
  "integrationKey": "dfxm",
  "sourceId": "bdd831ce-eebd-4896-89a7-20e5ee8989ee",
  "platformName": "Accounting Package",
  "linkUrl": "https://link-api.codat.io/companies/86bd88cb-44ab-4dfb-b32f-87b19b14287f/connections/ee2eb431-c0fa-4dc9-93fa-d29781c12bcd/start",
  "status": "Linked",
  "lastSync": "2022-10-27T10:22:43.6464237Z",
  "created": "2022-10-27T09:53:29Z",
  "sourceType": "Accounting"
}
```

Note the `status` has changed to `Linked`, indicating that the authorization information we received has allowed Codat to connect to to your customers data. 

You can then get a Sync Configuration URL, as described in Step 3. of the set up, above, specifying the `merchantIdentifier` parameter as the `companyId` that was returned after creating the Company. Codat will not ask your user to authenticate with your system as part of the Sync configuration UI. 

## Marketplace App listing

The set up assumes that your customers will initiate the process of setting up their sales data synchronization within your system. In some cases, it is possible for this journey to be initiated by the user from their Accounting or Commerce systems’ app marketplace – we are able to support this for selected Accounting packages and Commerce platforms; please consult your Solutions Engineer for more information.

---

## Read next