---
title: "Manage companies with our API"
sidebar_label: Via API
description: "Learn about creating and managing companies, their connections, and their data via API"
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

## Re-authorizing access

Occasionally the Data Connections of a Codat company will go into a _deauthorized_ state. This indicates that Codat’s link to the platform is no longer valid, and you will not be able to queue any further data syncs for that connection. You will still be able to query data previously retrieved from the platform.

Data Connections can become _deauthorized_ by the user revoking access within their accounting software or due to platform limitations such as Xero's limited access period for non-partner companies.

To enable you to refresh the company's data, you will need to ask the user to complete the auth flow in Link again.

:::caution Re-linking and usage costs

Creating a new company may cause additional data to be pulled from the platform and is likely to incur additional usage costs.
:::

### Redirect the user to complete the auth flow

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
