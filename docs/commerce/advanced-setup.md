---
title: "Advanced product configuration features"
description: "Learn about additional configuration features available with Sync for Commerce"
sidebar_label: "Configuration"
displayed_sidebar: commerce
---

Once you have understood and performed the initial setup of our Sync for Commerce product, you can use its advanced features to enhance your merchant's experience of syncing sales data. 

## Custom redirect

When your user finishes configuring their sales data synchronization settings in the Sync configuration UI, they will see a success message to indicate the end of the journey. Instead, you can redirect the merchant to a custom URL of your choice.

Append a `redirectUrl` query parameter and the absolute URL as its value when calling the API to request a Sync configuration URL:

```http
GET config/sync/commerce/lqai/{platformKey}/start?merchantIdentifier={companyId}&redirectUrl=app.codat.io
```

The resulting Sync flow URL will include the redirect URL as shown in this example:

```json
{
  "url": "https://sync-flow.codat.io/06de067c-1d6c-416a-8e61-676e6c135e68/lqai/gbol/start?merchantIdentifier=CoPay&otp=615853&redirectUrl=app.codat.io"
}
```

## Authorize access on behalf of your customer

When setting up Sync for Commerce, Codat will deploy a connector to your API that allows us to access your merchants' data in your systems. By default, we use your API's authentication method (for example, OAuth 2.0) to request your customers to grant us access to that data. 

Since the user begins their configuration journey within your system, you may deem this step unnecessary. Instead, you may choose to grant Codat access to your merchants' data on their behalf. The resulting Sync flow is represented on the diagram below.

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

To authorize on behalf of your customers, create a record of your customer within Codat and provide associated authorization details needed to access their data. Then, you need to redirect them to the Sync configuration URL, as explained in step [3. Handle the integration selection](/commerce/setup#3-handle-the-integration-selection) of our setup guide.

If you would like to authorize access on behalf of your customer, please discuss this with your Solutions Engineer before deploying Codat’s connector to your API.

### 1. Create a company

Use our [Create company](/sync-for-commerce-api#/operations/create-company) endpoint to create a record of your customer within Codat. 

```http
POST /companies
```
The `name` property in the request body must be your unique customer identifier. You can also populate the customer’s name as the description. 

```json
{
  "name": "12345678"    // Unique identifier for your customer
  "description": ""     // Optionally include the customer name
}
```
In response, we will provide a `companyId`, returned by this endpoint as `id`. Retain this because it will be required in subsequent steps.

```json
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

### 2. Create a connection

Once you have created a company to represent your customer, you need to create a connection that represents the connectivity to your system for this customer. To do this, use our [Create connections](/sync-for-commerce-api#/operations/create-connection) endpoint:

```http
POST /companies/{companyId}/connections
```

The `platformKey` property in the request body is the key that identifies Codat's connector to your API, as explained in step [3. Handle the integration selection](/commerce/setup#3-handle-the-integration-selection) of our setup guide. Your Solutions Engineer can provide this value to you. 

```json title="Example request body"
{
  platformKey: "dfxm"    // Identifies the Codat connector linked to your API
}
```

In response, we will provide a `connectionId`, returned by this endpoint as `id`. Retain this because it will be required in subsequent steps.

```json
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

## 3. Pass the authorization information to Codat

Now that you created a company and a connection, you can pass the authorization information required to access your customer’s data to Codat via our API. To do this, use our [Update authorization](/sync-for-commerce-api#/operations/update-connection-authorization) endpoint:

```http
PUT /companies/{companyId}/connections/{connectionId}/authorization
```

You need to confirm the request body with your Solutions Engineer as part of deploying the Codat connector to your API. 

In response, we will return an updated `connection` object, same as the one returned in the previous step:

```json
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
Notice that the `status` has changed to `Linked`, indicating that the authorization information we received allowed Codat to connect to your customers' data. 

Next, you can obtain the Sync configuration URL, as instructed in step [3. Handle the integration selection](/commerce/setup#3-handle-the-integration-selection) of our setup guide. Use the `companyId` value returned when creating the company as the `merchantIdentifier` parameter value. 

Now Codat will not ask your user to authenticate with your system as part of the Sync configuration UI. 

### Marketplace app listing

This configuration assumes that your customers will initiate the setup process for their sales data synchronization within your system. In some cases, it is also possible for the user to initiate this journey from their accounting or commerce system's app marketplace.

We are able to support this for selected accounting packages and commerce platforms. Please consult your Solutions Engineer for more information on this functionality.

---

## Read next

- [Merchant configuration](/commerce/merchant-configuration)