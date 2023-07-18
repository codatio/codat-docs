---
title: "Set up the QuickBooks Online Bank Feeds integration"
description: "Set up our integration with QuickBooks Online Bank Feeds"
sidebar_label: Set up
---

Set up the QuickBooks Online Bank Feeds integration to let your SMB customers connect source bank accounts in your application to target accounts in QuickBooks Online (QBO).

## Prerequisites

Before setting up the integration, make sure that:

- Your Solutions Engineer has provided you with access to the QuickBooks Online Bank Feeds integration.
- SMB users who will connect to QBO Bank Feeds are located in the US and Canada only.
- In the Codat Portal, you've enabled [Bank accounts](/accounting-api#/schemas/BankAccount) and [Bank transactions](/accounting-api#/schemas/BankTransactions) in your [Data type settings](/core-concepts/data-type-settings).
- You've customized the QBO Bank Feeds Link UI for your institution.

## Enable the QBO Bank Feeds integration

1. In the Codat Portal, go to **Settings > Integrations > Bank feeds** to view the [**Bank feeds integrations**](https://app.codat.io/settings/integrations/bankfeeds) page.
2. Click **Set up** next to **QuickBooks Online Bank Feeds**.
3. Use the toggle to set the integration to **Enabled**.

:::info Integration won't appear in Link flow

Enabling the integration won't make it visible in the Link flow. Instead, SMB users connect directly via a Link URL.

:::

## Add a custom callout to the Link Site

You can add a custom text callout, in both French and English, to the QBO Bank Feeds Link UI. These can provide additional guidance to your SMB users on connecting their bank accounts to QBO.

1. In the Codat Portal, go to **Settings > Integrations > Bank feeds** to view the [**Bank feeds integrations**](https://app.codat.io/settings/integrations/bankfeeds) page.
2. Click **Manage** next to **QuickBooks Online Bank Feeds**.
3. Enter text in the **Callout title** and **Callout body** fields (maximum of 50 and 150 characters respectively). Only plain text is supported.

   :::info Localization options

   You can also enter French translations for the callout title and body.

   :::

4. Click **Save**.

The callout is displayed in a gray box at the bottom of the QBO Bank Feeds Link UI, above the **Get credentials** button. For example:

![QBO Bank Feeds Link site showing custom callout text above the "Get credentials" button.](/img/old/b822e27-qbo-bank-feeds_link-site-callout-text.png)

## Add a "Connect bank feeds" button to your application

Next, add a button or link to your application that prompts your SMB users to connect their bank accounts to QBO. Use an appropriate call-to-action, such as _Connect account to QuickBooks_.

See the next procedure for details on the functionality to provide.

## Create a company and data connection, then add bank accounts

1. When the SMB user clicks the button or link you added, create a company for them using the [Create company](/codat-api#/operations/create-company) endpoint:

   ```http
   POST https://api.codat.io/companies
   ```

   ```json title="Request body"
   {
     "name": "COMPANY_NAME"
   }
   ```

   The endpoint returns a JSON response containing the company `id` and the `redirect` URL.

2. Using the [Create a data connection](/codat-api#/operations/create-data-connection) endpoint, create a data connection to QBO Bank Feeds for the company.

   ```http
   POST https://api.codat.io/companies/COMPANY_ID/connections
   ```

   In the request body specify `hcws` as the `platformKey`:

   ```json
   {
     "platformKey": "hcws"
   }
   ```

   The endpoint returns a `200` response. The body contains a `dataConnection` object in `PendingAuth` status and a `linkUrl` containing a one-time password (`otp`) that expires after one hour. 

   ```json
   {
     "id": "7baba7cc-4ae0-48fd-a617-98d55a6fc008",
     "integrationId": "6b113e06-e818-45d7-977b-8e6bb3d01269",
     "sourceId": "56e6575a-3f1f-4918-b009-f7535555f0d6",
     "platformName": "QuickBooks Online Bank Feeds",
     "linkUrl": "https://link-api.codat.io/companies/COMPANY_ID/connections/CONNECTION_ID/start?otp=742271",  //  expires after 1h
     "status": "PendingAuth",
     "created": "2022-09-01T10:21:57.0807447Z",
     "sourceType": "BankFeed"
   }
   ```

3. Using the [POST /bankFeedAccounts](/bank-feeds-api#/operations/create-bank-feed) endpoint, add one or more source bank accounts. These are the accounts the SMB user will be able to connect to QBO.

   ```http
   POST /companies/{companyId}/connections/{connectionId}/connectionInfo/bankFeedAccounts
   ```

   In the request body, specify a list of bank accounts (all fields shown are required):

   ```json title="Example request body: add two checking accounts"
     {
       "id": "ac-001",
       "accountName": "account-001",
       "accountType": "checking",
       "accountNumber": "12345670",
       "sortCode": "12-34-56",
       "currency": "USD",
       "balance": 4002 // can be 0
     }
   ```

   The endpoint returns a `200` response and the list of created bank accounts.

4. Redirect the SMB user to the `linkUrl` returned in the response from the [Create a data connection](/codat-api#/operations/create-data-connection) endpoint (see step 2).

   :::caution Link URL expiry

   For security reasons, the `linkUrl` will expire one hour after it was generated. 

   :::

5. The SMB user opens the `linkUrl` in their browser to load the QBO Bank Feeds Link UI.

6. They can now [connect their chosen bank accounts to QuickBooks Online](/integrations/bank-feeds/qbo-bank-feeds/qbo-bank-feeds-smb-user).

:::caution Do not hardcode the Link URL

Do _not_ hardcode the `linkUrl` into your application code. It is unique to the originating customer and must not be shared with other users.
:::

## Retrieve bank account status and information

You can use the [GET /connectionInfo/bankFeedAccounts](/bank-feeds-api#/operations/get-bank-feeds) endpoint to view the following information for a data connection:

- Available source bank accounts—the accounts that the SMB user can connect to QBO.
- The connection status of the available source bank accounts (either `pending`, `connected`, or `disconnected`).
- The number of connected bank accounts for a particular data connection.

```http
GET /connections/{connectionId}/connectionInfo/bankFeedAccounts
```

## Update an existing bank account for a company

You can use the [PATCH /connectionInfo/bankFeedAccounts/{bankAccountId}](/bank-feeds-api#/operations/update-bank-feed) endpoint to update an existing bank account for a company and data connection.

Provide the bank account details you want to update as request parameters.

```http
PATCH /companies/{companyId}/connections/{connectionId}/connectionInfo/bankFeedAccounts/{bankAccountId}
```

```json title="Example request body: update account name"
{
  "id": "acc-002", // required id of bank account to update
  "accountName": "updated-account-name",
  "sortCode": "123456",
  "accountType": "Credit",
  "accountNumber": "12345670",
  "currency": "USD",
  "balance": 99.99
}
```

## Add new source bank accounts for a company

You can add new source bank accounts to an existing company and data connection. This makes those bank accounts available to the SMB user to connect to.

1. Send a request to the [PUT /connectionInfo/bankFeedAccounts](/bank-feeds-api#/operations/create-bank-feed) endpoint and specify the bank accounts you want to add in the request body.

   ```http
   PUT /companies/{companyId}/connections/{connectionId}/connectionInfo/bankFeedAccounts
   ```

   Request body:

   ```json
   [
     {
       "id": "acc-003",
       "accountName": "account-0003",
       "sortCode": "123456",
       "accountType": "Debit",
       "accountNumber": "987654",
       "currency": "GBP",
       "balance": 219.23,
     }
  ]
   ```

2. The original `linkURL` for the company and data connection contained an `otp` with a one hour expiration window. If this has passed, you'll need to generate a new `linkUrl`. To do this, call the [List connections](/codat-api#/operations/list-company-connections) endpoint to obtain a new `linkUrl` for the specified company and data connection.

3. Redirect the SMB user to the new `linkUrl` to enable them to connect the new bank account to QBO.

---

## Read next

Understand how the [SMB user connects their accounts](/integrations/bank-feeds/qbo-bank-feeds/qbo-bank-feeds-smb-user) to QBO.
