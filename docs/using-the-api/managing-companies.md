---
title: "Managing companies"
description: "Learn how to manage companies, their connections, and their data via API"
createdAt: "2022-11-07T19:57:50.555Z"
updatedAt: "2022-12-21T06:24:11.564Z"
---

## Onboarding your users

Your users or customers are [companies](/core-concepts/companies). To access their data you'll need to onboard them.

To onboard a new user or customer:
1. Create a company
2. Authorize access to sources of data
3. Pull the data

You can either onboard users:

- When they first create an account with your service
- At the first point you want to retrieve their financial data

### Create a company

To create a new company, use the `POST /companies` endpoint and provide a name you want to attribute to it in the request body. Parameter `name` is a required parameter to execute this request. You can also provide a `description` to store additional information about the company.

`POST /companies`

```json title="Sample request body"
{
  "name": "Platypus Properties",
  "description": "Platypuses are venomous mammals"
}
```

```json title="Sample response"
{
  "id": "8f74269c-6cbf-4c5e-9b93-599965a7fd49",
  "name": "Platypus Properties",
  "description": "Platypuses are venomous mammals",
  "redirect": "https://link.codat.io/company/8f74269c-6cbf-4c5e-9b93-599965a7fd49",
  "dataConnections": []
}
```
:::caution Retain the company ID

The `id` property that you receive in the response is the unique Codat identifier for this company. **We recommend that you retain it for future reference.**
:::

:::note Company name

The name of the company doesn't have to be unique. It's just there to help you identify the company in the portal. Make sure to [avoid forbidden characters](/core-concepts/companies).
:::

### Authorize access to company data

Once you've created the company, they'll need to give you permission to pull their data from a given source, like their accounting platform. There are several approaches to doing this, but for simplicity we've just covered our out-of-the-box [hosted link](/auth-flow/authorize-hosted-link) approach.

Send the user to the `redirect` URL returned in the previous step. They will be sent to [Link](/auth-flow/authorize-hosted-link) where they can select their accounting software and complete the linking process.

Once the user has completed the Link flow, the Codat platform will redirect them to the redirect URL you have configured in the **Settings > Auth flow > Link** in the Codat Portal. This URL can include the Codat `companyId` as well as any other custom query parameters.

:::note Redirect parameter settings

For more information on setting your redirect URL, refer to [this document](/auth-flow/customize/set-up-redirects).
:::

Once your user is redirected to the redirect URL page, they'll be able to authorize access to their data. Once this is successful, the linking process is complete and their data can be pulled.

## Pulling data

Now the company is onboarded, you can start retrieving their financial data.

### Check data freshness

Use the `GET /companies/{companyId}/dataStatus` endpoint to check the [last time each data type was synchronized](/core-concepts/status).

In this request, `companyId` is [the unique ID that you have received in a response to creating this company](/using-the-api/managing-companies#create-a-codat-company).

When you’re pulling data for the first time, use this endpoint to check if the sync was successful.

#### Response for a successful first sync

```json 
{
  "suppliers": {
    "dataType": "suppliers",
    "lastSuccessfulSync": "2019-06-11T13:26:54.6884704Z",
    "currentStatus": "Complete",
    "latestSyncId": "31632c48-23dc-4cb1-b3ff-0829343c8e85",
    "latestSuccessfulSyncId": "31632c48-23dc-4cb1-b3ff-0829343c8e85"
  },
  ...
}
```

#### Response for an unsuccessful first sync

```json
{
  "suppliers": {
    "dataType": "suppliers”
    "currentStatus": "FetchError",
    "latestSyncId": "31632c48-23dc-4cb1-b3ff-0829343c8e85",
  },
  ...
}
```

### Queue a new data sync (Optional)

If there are datasets which are not as up-to-date as you require, you can queue a data sync as described [here](/using-the-api/queueing-data-syncs).

Once you've queued the sync, you can poll the [GET /companies/{companyId}/dataStatus](/codat-api#/operations/get-company-data-status) endpoint (as described above) to [monitor progress of the sync](/core-concepts/status).

:::note Configuring the sync schedule

You can configure a sync schedule in the Codat portal to keep each data type at an acceptable freshness. For more information, please refer to your onboarding docs or contact [support@codat.io](mailto:support@codat.io).
:::

## Request a specific data type

Codat exposes endpoints for easily querying each of the supported data types.

For example, when querying invoices, you can use the [GET /companies/{companyId}/data/invoices](/accounting-api#/operations/list-invoices) endpoint, with query string parameters as below:

- `pageSize` – the size of page you wish to retrieve
- `page` – which page number you wish to retrieve
- `orderBy` – the property you wish to order the response by
- `query` – any filter you wish to perform on the returned data (see [Querying](/using-the-api/querying) for details)

## Re-linking a company

Occasionally the Data Connections of a Codat company will go into a _deauthorized_ state. This indicates that Codat’s link to the platform is no longer valid, and you will not be able to queue any further data syncs for that connection. You will still be able to query data previously retrieved from the platform.

Data Connections can become _deauthorized_ by the user revoking access within their accounting software or due to platform limitations such as Xero's limited access period for non-partner companies.

To enable you to sync new data, you will need to ask the user to complete the auth flow in Link again.

:::caution Re-linking and usage costs

Creating a new company may cause additional data to be pulled from the platform and is likely to incur additional usage costs.
:::

## Redirect the user to complete the auth flow

Get a `redirect` URL for the company by following the process [here](/auth-flow/authorize-hosted-link). Send the user to the `redirect` URL. They will be prompted to select their accounting software and complete the linking process using the [Link flow](/auth-flow/overview).

Once the user finishes the Link flow, they will be redirected back to the Redirect URL, as described [earlier in this guide](/using-the-api/managing-companies#redirect-the-user). At this point the re-authorization process is complete and their data has begun synchronizing again.

## Deleting companies

You can delete companies in the Portal in the table in **Companies**.

:::tip Recap
You've learned:
- How to create a company and authroize access to their data
- The basics of pulling data
- Managing companies
:::

---

## Read next

- [Managing companies](/using-the-api/querying)
