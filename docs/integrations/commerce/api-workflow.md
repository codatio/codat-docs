---
title: "Commerce API workflow"
description: "After you've set up an integration, follow this process to use Codat's API to enable, link, and pull your customers' commerce data"
createdAt: "2020-10-02T14:07:18.839Z"
updatedAt: "2022-10-20T10:13:39.906Z"
---

You'll need to:

- Update your data type settings to enable commerce data types.
- Create a company and data connection for your customer.
- Pull commerce data sets.

## Enable and update commerce sync settings

Update your [commerce sync settings](/integrations/commerce/commerce-sync-settings#update-commerce-sync-settings-via-the-api) to automatically retrieve data from a company when they authorise your connection to their data.

## Create a company and data connection

Create a Codat company and data connection for your customer.

1. Open the [Create a company](/codat-api#/operations/create-company) endpoint.
2. Enter a **companyName** and **platformType** and submit your request.
   The response returned includes:
   
   - The **linkUrl** which allows your customer to authorise your connection to their data.
   - The data connection **id** which allows you to sync the company's data.

3. Copy the **linkUrl** and send it to your customer.

```json
{
"name": "john",
"platformType": "woocommerce",
"createdByUserId": "3fa85f64-5717-4562-b3fc-2c963f66afa6"
}
```

```json
{
"id": "fc0043b0-8c40-4c5b-b92f-f155cb720451",
"name": "john",
"platform": "WooCommerce",
"redirect": "https://link-uat.codat.io/company/fc0043b0-8c40-4c5b-b92f-f155cb720451",
"status": "PendingAuth",
"dataConnections": [
  {
    "id": "f124c782-166a-4911-85c6-e5db8dd5c992",
    "integrationId": "8cbe957a-8337-463b-9353-2186c372e083",
    "sourceId": "1feb821a-cb05-4375-9b53-cd6367e9fb60",
    "platformName": "WooCommerce",
    "linkUrl": "https://link-api-uat.codat.io/companies/fc0043b0-8c40-4c5b-b92f-f155cb720451/connections/f124c782-166a-4911-85c6-e5db8dd5c992/start",
    "status": "PendingAuth",
    "created": "2021-05-04T15:28:09.3409951Z",
    "sourceType": "Commerce"
  }
],
"created": "2021-05-04T15:28:09.2805505Z"
}
```

## Pull commerce data sets

When your customer authorises your connection to their company data, Codat automatically fetches their datasets. You can pull these datasets from the following endpoints. Use the company and data connection **id** that you've already created. See above.

`GET /companies/{{companyId}}/connections/{{connectionId}}/data/commerce-customers`

`GET /.../commerce-disputes`

`GET /.../commerce-info`

`GET /.../commerce-orders`

`GET /.../commerce-payments`

`GET /.../commerce-products`

`GET /.../commerce-transactions`

:::info Sync status

Before you can view data using one of the commerce endpoints, you must wait for the data synchronization to complete. To check the status of any dataset, see the [sync status](/core-concepts/status) documentation.
:::
