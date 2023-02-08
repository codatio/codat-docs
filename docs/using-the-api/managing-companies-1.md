---
title: "Managing companies"
slug: "managing-companies-1"
description: "Learn how to manage companies, their connections, and their data via API"
createdAt: "2022-11-07T19:57:50.555Z"
updatedAt: "2022-12-21T06:24:11.564Z"
---

## User onboarding

Use the following process to onboard users to the Codat API. You can either onboard users:

- When they first create an account with your service
- At the first point you wish to create a connection to their accounting data

## Create a Codat company

To create a new company, use the `POST /companies` endpoint and provide a name you want to attribute to it in the request body. Parameter `name` is a required parameter to execute this request.

:::Note Company name

The name of the company doesn't have to be unique. It's just there to help you identify the company in the portal. Make sure to [avoid forbidden characters](/core-concepts/companies).
:::

You can also add the `platformType` parameter to specify an integration platform you would like to set up for the new company. [Retrieve the platform key](/your-first-call-to-the-api-using-api-explorer#retrieve-platform-keys) first and then use it in your request.

```json Sample request
{
  "name": "Platypus Properties",
  "platformType": "gbol"
}
```

```json Sample response
{
  "id": "8f74269c-6cbf-4c5e-9b93-599965a7fd49",
  "name": "Platypus Properties",
  "platform": "Xero",
  "redirect": "https://link.codat.io/company/8f74269c-6cbf-4c5e-9b93-599965a7fd49",
  "dataConnections": []
}
```

You can also find accounting platform keys [here](/accounting-platform-keys) and commerce platform keys [here](/commerce-platform-keys).

:::Caution Retain the company ID

The `id` property that you receive in the response is the unique Codat identifier for this company. We recommend that you retain it for future reference.
:::

## Redirect the user

Send the user to the `redirect` URL returned in the previous step. They will be sent to [Link](/authorize-hosted-link) where they can select their accounting software and complete the linking process.

Once the user has completed the Link flow, the Codat platform will redirect them to the redirect URL you have configured in the **Settings > Auth flow > Link** in the Codat Portal. This URL can include the Codat `companyId` as well as any other custom query parameters.

:::Note Redirect parameter settings

For more information on setting your redirect URL, refer to [this document](/redirect-urls).
:::

Once your user is redirected to the redirect URL page, the linking process is complete and their accounting data has begun synchronizing.

## Pulling data

## Check data freshness

Use the `GET /companies/{companyId}/dataStatus` endpoint to check the [last time each data type was synchronized](/data-status).

In this request, `companyId` is [the unique ID that you have received in a response to creating this company](/using-the-api/managing-companies-1#create-a-codat-company).

When you’re pulling data for the first time, use this endpoint to check if the sync was successful.

### Response for a successful first sync

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

### Response for an unsuccessful first sync

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

## Queue a new data sync (Optional)

If there are datasets which are not as up-to-date as you require, you can queue a data sync as described [here](/queueing-data-syncs).

Once you've queued the sync, you can poll the [GET /companies/{companyId}/dataStatus](/codat-api#/operations/get-companies-companyId-dataStatus) endpoint (as described above) to [monitor progress of the sync](/data-status).

:::Note

You can configure a sync schedule in the Codat portal to keep each data type at an acceptable freshness. For more information, please refer to your onboarding docs or contact [support@codat.io](mailto:support@codat.io).
:::

## Request a specific data type

Codat exposes endpoints for easily querying each of the supported data types; each of these endpoints is detailed in our Swagger documentation.

For example, when querying invoices, you can use the [GET /companies/{companyId}/data/invoices](/accounting-api#/operations/list-invoices) endpoint, with query string parameters as below:

- `pageSize` – the size of page you wish to retrieve
- `page` – which page number you wish to retrieve
- `orderBy` – the property you wish to order the response by
- `query` – any filter you wish to perform on the returned data (see [Querying](/using-the-api/querying) for details)

## Re-linking a company

Occasionally the Data Connections of a Codat company will go into a _deauthorized_ state. This indicates that Codat’s link to the platform is no longer valid, and you will not be able to queue any further data syncs for that connection. You will still be able to query data previously retrieved from the platform.

Data Connections can become _deauthorized_ by the user revoking access within their accounting software or due to platform limitations such as Xero's limited access period for non-partner companies.

To enable you to sync new data, you will need to ask the user to complete the auth flow in Link again.

:::Caution Re-linking and usage costs

Creating a new company may cause additional data to be pulled from the platform and is likely to incur additional usage costs.
:::

## Redirect the user to complete the auth flow

Get a `redirect` URL for the company by following the process [here](/authorize-hosted-link). Send the user to the `redirect` URL. They will be prompted to select their accounting software and complete the linking process using the [Link flow](/auth-flow/overview).

Once the user finishes the Link flow, they will be redirected back to the Redirect URL, as described [earlier in this guide](/using-the-api/managing-companies-1#redirect-the-user). At this point the re-authorization process is complete and their data has begun synchronizing again.
