---
title: "Set up the Xero Bank Feeds integration"
sidebar_label: Set up
description: "Set up our integration with Xero Bank Feeds"
---

Before you can push bank feeds to Xero, you need to set up the [Xero accounting integration](/integrations/accounting/xero/accounting-xero) in the Codat Portal.

This article explains how to:

- Create a company and a data connection to Xero.
- Provide Codat with source bank accounts you want to make available for your SMB users to connect to.
- Redirect the user to the Codat-provided account mapping UI, where they can connect their source bank accounts to target bank accounts in Xero.

## Prerequisites

Before setting up the integration, make sure that:

- You've [joined the Xero App Partner Program](/integrations/accounting/xero/xero-app-partner-program).
- You've [set up the Xero integration](/integrations/accounting/xero/accounting-xero-setup#create-a-xero-app-and-configure-the-redirect-uri). The main tasks are as follows:
   - In the Xero Developer portal, [create and configure a Xero app](/integrations/accounting/xero/accounting-xero-setup#create-a-xero-app-and-configure-the-redirect-uri).
   - [Retrieve your app's secure keys](/integrations/accounting/xero/accounting-xero-setup#retrieve-your-apps-secure-keys) and then add them to the integration.
   
   Bank feeds functionality is part of our existing Xero accounting integration and uses the same Redirect URI.
   
   - [Enable the Xero integration](/integrations/accounting/xero/accounting-xero-setup#enable-the-xero-integration).   
- Xero have enabled the _Xero Bank Feeds API_ for your registered app.

### Create a company and data connection, then add bank accounts​

1. Using the [`POST /companies`](/platform-api#/operations/create-company) endpoint, create a company to represent your SMB user:

   ```http title="Create a company"
   POST https://api.codat.io/companies
   ```

   ```json title="Request body"
   {
     "name": "<COMPANY_NAME>"
   }
   ```
   
   The endpoint returns a JSON response containing the company ID (`id`) and the redirect URL (`redirect`).

2. Using the [`POST /companies/{companyId}/connections`](/platform-api#/operations/create-connection) endpoint, create a data connection to Xero for the company you added. Specify the company ID in the URL path and the Xero platform key in the body:

   ```http title="Create connection"
   POST https://api.codat.io/companies/{companyId}/connections
   ```
   
   ```json title="Request body - Xero"
   {
     "platformKey": "gbol"
   } 
   ```
   
   The endpoint returns a `dataConnection` object in `PendingAuth` status, containing a connection `id` and a `linkUrl`. Later, you'll use the `linkUrl` to redirect the SMB user to the account mapping UI.

   ```json title="Response example - Create connection (200)"
   {
     "id": "9d0703c1-fc71-43b7-b4e0-37cd7a863644",
     "integrationId": "0f20c943-12d0-4800-9f6c-d218f62d494c",
     "integrationKey": "gbol",
     "sourceId": "8a156a5a-39cb-4f9d-856e-76ef9b9a9607",
     "platformName": "Xero",
     "linkUrl": "https://link-api.codat.io/companies/...",
     "status": "PendingAuth",
     "created": "2023-05-10T08:40:26.0000000Z",
     "sourceType": "Accounting"
   } 
   ```

3. Using the [`POST /bankFeedAccounts`](/bank-feeds-api#/operations/create-bank-feed) endpoint, add one or more source bank accounts:
   
   ```http title="Create bank feed bank accounts"
   POST /companies/{companyId}/connections/{connectionId}/connectionInfo/bankFeedAccounts
   ```
   
   For the `{connectionId}`, use the connection `id` you received in the response from `POST /connection` request.
   
   In the request body, specify a source bank account to make available to the SMB user. For example, to add a credit card account send the following request:

   ```json title="Request body (all fields are required)"
   
   {
     "id": "acc-002", // set to desired unique ID
     "accountName": "account-081",
     "sortCode": "123456",
     "accountType": "Debit",
     "accountNumber": "12345670",
     "currency": "GBP",
     "balance": 99.99 // can be 0
   }
   ```
   :::caution Specific account types
   Xero approves Bank Feeds applications only for "BANK" or "CREDITCARD" account types (in Xero's terminology). Therefore, it's important to use the correct `accountType` value when setting up source bank accounts, namely "Debit" for type "BANK" and "Credit" for type "CREDITCARD".
   :::

4. The endpoint returns a `200` code and the created bank account.

## Read next

Learn how your SMB users can [connect their bank accounts to Xero](/integrations/bank-feeds/xero-bank-feeds/xero-bank-feeds-smb-user) using the account connection UI.
