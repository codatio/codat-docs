---
title: "Xero Bank Feeds - complete"
sidebar_label: Overview
displayed_sidebar: bankfeeds
description: "Learn about our Xero Bank Feeds integration"
---

## Overview

Our Xero Bank Feeds integration allows you to set up a bank feed from a bank account in your application (the source account) to an account within Xero (the target account). Once the feed connection is established, you can then push Bank transactions from the source account to the target account.

_add flow diagram_

With access to bank feeds, your customers can more easily reconcile bank transactions against accounting entries, like invoices and bills.

## Supported data types and operations​

Bank feeds are represented as streams of [Bank account transactions](/accounting-api#/schemas/BankTransactions) pushed to Codat in chronological order.

## How it works​

1. Create your Xero app. Ensure that you have Xero approval for Bank Feeds.
2. CROSSREF TO Set up the integration.
3. Your end user can set up a bank feed either by starting from within your UI, or from Xero's "Add bank account" functionality by searching for the client name where they will then be redirected to your UI.
4. After authentication, end users will be able to create account mappings and feed connections using the Codat-provided UI. // also refer to managing and deleting connections.

   
   :::info
   Alternatively, you can build your own mapping and feed management UI (Note: This option will become available in an upcoming release).
   :::

5. You push transactions for authenticated users to Codat using the [Create bank transactions](/bank-feeds-api#/operations/create-bank-transactions) endpoint - see CROSSREF TO Use your Xero Bank Feeds integration for details.

## Read next​

See CROSS REF TO Set up the Xero Bank Feeds integration to learn how to set up and enable the integration.

<hr />

# Set up the Xero Bank Feeds integration
Description: Set up our integration with Xero Bank Feeds and get your SMB users connected

Before you can push customer bank transactions to target bank accounts in Xero, you need to set up the integration for testing or production use.

This page explains how to:

- Create a company and data connection.
- Provide Codat with the source bank accounts you would like to make available for connection.

When you've completed those tasks, your SMB customers can connect their accounts to Xero using the Codat mapping UI.

## Prerequisites

- You have CROSS REF: set up your Xero app and turned on the Xero integration in Codat (Note: Xero Bank Feeds uses the same integration as the Xero accounting integration (platformKey: `gbol`) >> Important enough to go in the Overview as well.
- You have [joined the Xero App Partner Program](/accounting/xero/xero-app-partner-program).
- Xero must have enabled the Xero Bank Feeds API for your registered app.

### Create a company and data connection, then add bank accounts​

1. Using [POST /companies](/codat-api#/operations/create-company), create a company to represent your SMB user:

   ```http title="Create a company"
   POST https://api.codat.io/companies
   ```

   ```json title="Request body"
   {
     "name": "COMPANY_NAME"
   }
   ```
   
   The endpoint returns a JSON response containing the company id and the redirect URL.

2. Using [POST /companies/{companyId}/connections](/codat-api#/operations/create-data-connection), create a data connection to Xero for the Company you added. Specify the `companyId` in the URL path:

   ```http title="Create connection"
   POST https://api.codat.io/companies/{companyId}/connections
   ```

   In the request body specify the following `platformKey`:
   
   ```json title="Request body"
   {
     "platformKey": "gbol"
   } 
   ```

   The endpoint returns a `200` code and a `dataConnection` object in `PendingAuth` status.

   ```json title="Response example"
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

3. Using [PUT / bankFeedAccounts](/bank-feeds-api#/operations/create-bank-feed), add one or more source bank accounts to make available to the SMB user.

   ```http title="Create bank feed bank accounts"
   PUT /companies/{companyId}/connections/{connectionId}/connectionInfo/bankFeedAccounts
   ```
   
4. In the request body, specify a list of bank accounts. For example, to add two credit card accounts, send the following request (all fields shown are required):

   ```json title="Request body"
   [
     {
       "id": "acc-002", // set to desired unique ID
       "accountName": "account-081",
       "sortCode": "123456",
       "accountType": "Credit",
       "accountNumber": "12345670",
       "currency": "GBP",
       "balance": 99.99 // can be 0
     },
     {
       "id": "acc-003",
       "accountName": "account-095",
       "sortCode": "123456",
       "accountType": "Credit",
       "accountNumber": "12345671",
       "currency": "GBP",
       "balance": 100.09
     }
   ]
   ```
   :::caution
   Xero approves Bank Feeds applications only for specific account types only ("BANK" or "CREDITCARD" in Xero terminology). It is important to use the correct accountType when setting up bank feed accounts, namely "Debit" for type "BANK" and "Credit" for type "CREDITCARD".
   :::

5. The endpoint returns a `200` code and the list of created bank accounts.

## Read next

See CROSSREF TO: SMB user account connection flow to learn...

<hr />

# SMB user connects accounts

After setting up the company, data connection and bank feed accounts (Define "bank feed accounts" earlier in the document, such as in the introduction to this article / page.), you should redirect the user to the linkUrl provided in the dataConnection response.

:::info Link URL expiry
For security reasons, the `linkUrl` will expire one hour after it was generated.
:::

_Repeat the information about being able to build your own mapping UI in a future release._

After authenticating with their Xero account, the user will be redirected to a mapping screen provided by Codat.

_add screenshot of mapping UI_

This allows the user to:
- Select source accounts (i.e. the accounts you provided via the `PUT /bankFeedAccounts` endpoint)
- Map them to target accounts in Xero (this can be either an existing account or the user can choose to create a new account)
- Select a feed start date
- Create the feed connection

You can allow users to return to this screen in the future by providing a fresh `linkUrl`, to allow them to manage and delete existing connections.

## Read next

See CROSSREF TO: Push bank transactions to Xero to...

<hr />

# Push bank transactions to Xero

## View bank account details

Once the user has completed the mapping, you can view details of the source bank accounts for a specified data connection by using the [GET /bankFeedAccounts](/bank-feeds-api#/operations/get-bank-feeds) endpoint.

```http title="List bank feed bank accounts"
GET /companies/{companyId}/connections/{connectionId}/connectionInfo/bankFeedAccounts
```

The response contains a list of bank accounts with a status of either `pending`, `connected`, or `disconnected`. For connected bank accounts, the `feedStartDate` property is set to the current time in UTC (needs further explanation.).

```json title="Example response"
[
  {
    "id": "acc-002",
    "accountName": "account-081",
    "accountType": "Credit",
    "accountNumber": "12345670",
    "sortCode": "123456",
    "currency": "GBP",
    "balance": 99.99,
    "modifiedDate": "2023-01-09T13:46:59.4019628Z",
    "status": "pending"
  },
  {
    "id": "acc-003",
    "accountName": "account-095",
    "accountType": "Credit",
    "accountNumber": "12345671",
    "sortCode": "123456",
    "currency": "GBP",
    "balance": 100.09,
    "modifiedDate": "2023-01-09T13:46:59.4019628Z",
    "status": "connected",
    "feedStartDate": "2023-01-09T14:56:43.773Z" // only for connected accounts
  }
]
```

## Push bank transactions

You can push [Bank transactions](/accounting-api#/schemas/BankTransactions) for `connected` source bank accounts. In the user's Xero package, new bank transactions for the target account will appear on the Incoming Bank Transactions UI.

:::info Bank feeds must be pushed to Codat
Transactions are not automatically downloaded to Xero when the user successfully connects a bank account.
:::

To push bank transactions to Codat, make the following requests to the Codat API. All push requests are asynchronous.

1. Push bank transactions to a target bank account using the [Create bank transactions](/accounting-api#/operations/create-bank-transactions) endpoint. Note that:

- You can only push bank transactions to one target account at a time.
- Bank transactions must be pushed in chronological order.
- Bank transactions can't be older than the most recent transaction available on the destination bank account.
- Bank transactions must have a `date` set to the current day or earlier.
- Up to 1000 bank transactions can be pushed at a time.

   ```http title="Create bank transactions"
   POST https://api.codat.io/companies/COMPANY_ID/connections/CONNECTION_ID/push/bankAccounts/ACCOUNT_ID/bankTransactions
   ```

   Where `ACCOUNT_ID` is the ID of a connected source bank account (returned from
`GET /connectionInfo/BankFeedAccounts`).

   Example request body (all fields are mandatory):

   ```json title="Request body"
   {
     "accountId": "482342-acc-001",
     "transactions": [
       {
         "id": "7832323211-GIF",
         "amount": 450,
         "balance": 2000,
         "date": "2022-08-30T17:05:12.191Z",
         "description": "events-hospitality",
         "transactionType": "Debit"
       },
       {
         "id": "7832323211-SDC",
         "amount": 730,
         "balance": 2730,
         "date": "2022-08-31T11:06:49.191Z",
         "description": "corporate-training",
         "transactionType": "Debit"
       }
     ]
   }
   ```
   
   The balance of the last bank transaction in the array is used to update the balance of the specified bank account.

2. If the data is valid, the endpoint returns a push operation with a `status` of `Pending` (202). The status changes to `Success` if the push operation completes successfully.

:::info Pending status
The status might remain as `Pending` for some time while Xero processes the bank transactions.
:::

3. Repeat the request for the remainder of the SMB customer's connected bank accounts.
