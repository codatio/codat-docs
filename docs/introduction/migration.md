---
title: "Migrate to Codat"
description: "Learn how to migrate existing authorization tokens from your existing integrations to Codat"
createdAt: "2020-08-26T13:23:10.920Z"
updatedAt: "2022-11-25T13:10:30.057Z"
---


import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem"


If you're new to Codat but have already built and use an OAuth application with one of our supported integrations, you're in the right place. Codat's token migration process allows you to seamlessly migrate your customers' connections from a self-managed integration to Codat — without your customers needing to reconnect.

This page describes the information we'll need from you, and provides an overview of the migration process.

## Self service migrations

Codat's API allows you to provide tokens for a subset of our integrations which will allow you to self-manage a migration.

Self service token migration is currently supported for over twenty of our integrations, with more being added in the coming months. To view an up-to-date list, check out the available integrations in the **OAuth Token Migrations** section of our <a href="https://postman.codat.io/#88a1864c-60e8-4105-bea9-e55314d6b74d" target="_blank" class="external">Postman collection</a>.

Before you migrate a token, the company and data connection must be created. This is required because the `companyId` and `connectionId` are parameters in the PUT token migration URL (see below). You can create the company using a POST call to the [Create company](/codat-api#/operations/create-company) endpoint. The connection can be created using the [Create connection](/codat-api#/operations/create-data-connection) endpoint.

To migrate, use the PUT connections endpoint. You will need to provide the integration specific information such as the organization ID and OAuth tokens that Codat should use. Because these are different for each integration, examples of the format required for the integrations available are listed in the Postman Collection linked above.

<Tabs>

<Tabitem value="Request URL" label="Request URL">

```http request title="Authorize connection"
  PUT /companies/{companyId}/connections/{connectionId}/authorization
```

</Tabitem>

<Tabitem value="Request Body" label="Request Body">

```json
{
  "accessToken": "0000-0000",
  "businessId": "test-business-1234"
}
```

</Tabitem>

</Tabs>


:::caution Syncing data post-migration

After successfully updating a connection with valid credentials, you'll need to initiate a sync manually using the `POST ​/companies​/{companyId}​/data​/all` endpoint.

_Fetch on first link_ isn't supported when performing self-service token migrations using the `PUT /companies/{companyId}/connections/{connectionId}/authorization` endpoint.
:::

## Managed migrations

For other platforms where we do not yet support the self service migration route, or if you have special considerations or concerns, Codat's solutions team offers a managed migration pathway.

:::note Supported integrations

We currently have supported migrations from the following platforms: FreeAgent, FreshBooks, QuickBooks Online, Shopify, Wave, Xero, and Zoho Books.

We don't have a standard migration process for our other integrations, but are happy to explore possible solutions. Please get in touch with your solutions engineer if you need to discuss migrating one of these integrations.
:::

You need to supply:

- A spreadsheet - `.xls` or `.csv` file - that includes names of the companies that Codat need to migrate, and their token details.
- Secure credentials for your application, for example, client ID and client secret.

The exact details of tokens and credentials varies between different platforms. Please contact your solutions engineer or our [support team](mailto:support@codat.io) to discuss the specific details requirements for your migration.

The migration process usually involves the following steps. We recommend that you don’t start migration until you've set up the integration in Codat, and done some initial testing.

:::success Plan your migration

Every migration is different so please make sure you talk to your solutions engineer, or contact our [support team](mailto:support@codat.io) as early as possible to discuss and plan your migration.
:::

| Step                                         | Details                                                                                                                                                                  | Responsibility                          |
| -------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | --------------------------------------- |
| **1. Supply migration and platform details** | Supply a spreadsheet, with the [details described above](/introduction/migration#managed-migrations), to the Codat support team. | Your company                            |
| **2. Schedule the migration**                | Agree a time when the migration can take place. Based on your company's data, Codat's support team estimates how long the migration will take.                           | Your company and the Codat support team |
| **3. Update your application details**       | Add Codat’s callback URL to the application registered with your platform provider.                                                                                      | Your company                            |
| **4. Disable data syncing**                  | Disable data syncing in your existing application for all companies that you have chosen to migrate. This is to prevent tokens from becoming invalid.                    | Your company                            |
| **5. Migrate first company**                 | Codat's support team imports the name and token for a single company and performs an end-to-end test to make sure: <br/> - No reauthorization is required.<br/> - Data syncs complete correctly. | Codat support team |
| **6. Complete migration** | Codat's support team:<br/>- Migrates the remaining companies.<br/>- Performs end-to-end tests.<br/>- Completes a handover. | Codat support team |
