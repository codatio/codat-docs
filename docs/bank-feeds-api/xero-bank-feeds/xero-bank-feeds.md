---
title: "Xero Bank Feeds - complete"
sidebar_label: Overview
displayed_sidebar: bankfeeds
description: "Learn about our Xero Bank Feeds integration"
---

## Overview

Our Xero Bank Feeds integration allows you to set up a bank feed from a bank account in your application (the source bank account) to an account within Xero (the target bank account). After a feed connection is established, you can push bank transactions from the source account to the target account.

![xero-bank-feeds-flowchart](/img/bank-feeds-api/xero-bank-feeds/xero-bank-feeds-flowchart.png "Flowchart showing bank transactions pushed from your application to Xero")

With access to bank feeds, your customers can more easily reconcile bank transactions against accounting entries, like invoices and bills.

Bank feeds functionality is part of our existing [Xero accounting integration](/integrations/accounting/xero/accounting-xero).

## Supported data types and operations​

Bank feeds are represented as streams of [Bank account transactions](/accounting-api#/schemas/BankTransactions) pushed to Codat in chronological order. Target bank accounts are represented as [Bank feed accounts](/bank-feeds-api#/schemas/BankFeedAccount).

Bank feeds are pushed to Xero immediately, not on a schedule.

## How it works​

1. To start, create a Xero app in the <a href="https://developer.xero.com/" target="_blank">Xero developer portal</a>.

   :::caution Approval required
   You'll need to obtain Xero's approval for Bank Feeds.
   :::

2. CROSSREF TO Set up the integration.

3. Your SMB users set up their bank feeds. They can start this process directly from your app's UI, or use the "Add bank account" feature in Xero to search for the name of your institution and then launch your UI. See CROSS-REF: SMB user account connection.

4. After authenticating with Xero, SMB users create account mappings and feed connections using the Codat-provided _account mapping UI_.

   :::info Coming soon: Build your own UI
   In a future release, you'll be able to build your own UI for account mapping and feed management for Xero Bank Feeds.
   :::

5. Using the [Create bank transactions](/bank-feeds-api#/operations/create-bank-transactions) endpoint, you push bank transactions to Codat for authenticated users. See CROSSREF: Push bank transactions to Xero.

6. Users can manage and delete existing feed connections using the account mapping UI.

## Read next​

CROSS REF: Set up the Xero Bank Feeds integration

<hr />

# Set up the Xero Bank Feeds integration
`Description: Set up our integration with Xero Bank Feeds and get your SMB users connected`

Before you can push bank feeds to Xero, you need to set up the [Xero accounting integration](/integrations/accounting/xero/accounting-xero) in the Codat Portal.

This article explains how to:

- Create a company and a data connection to Xero.
- Provide Codat with source bank accounts you want to make available for your SMB users to connect to.
- Redirect the user to the Codat-provided account mapping UI, where they can connect their source bank accounts to target bank accounts in Xero.

## Prerequisites

Before setting up the integration, make sure that:

- You've [joined the Xero App Partner Program](/accounting/xero/xero-app-partner-program).

- You've [set up the Xero integration](/integrations/accounting/xero/accounting-xero-setup#create-a-xero-app-and-configure-the-redirect-uri). The main tasks are as follows:
   - In the Xero Developer portal, [create and configure a Xero app](/integrations/accounting/xero/accounting-xero-setup#create-a-xero-app-and-configure-the-redirect-uri).
   - [Retrieve your app's secure keys](/integrations/accounting/xero/accounting-xero-setup#retrieve-your-apps-secure-keys) and then add them to the integration.
   - [Enable the Xero integration](/integrations/accounting/xero/accounting-xero-setup#enable-the-xero-integration).

   Bank feeds functionality is part of our existing Xero accounting integration. To configure the integration to access bank feeds, use the same Redirect URI and ensure the **Enable bank feeds** toggle is selected.
   
- Xero have enabled the _Xero Bank Feeds API_ for your registered app.

### Create a company and data connection, then add bank accounts​

1. Using [POST /companies](/codat-api#/operations/create-company), create a company to represent your SMB user:

   ```http title="Create a company"
   POST https://api.codat.io/companies
   ```

   ```json title="Request body"
   {
     "name": "<COMPANY_NAME>"
   }
   ```
   
   The endpoint returns a JSON response containing the company ID (`id`) and the redirect URL (`redirect`).

2. Using [POST /companies/<COMPANY_ID>/connections](/codat-api#/operations/create-data-connection), create a data connection to Xero for the company you added. Specify the company ID in the URL path and the Xero platform key in the body:

   ```http title="Create connection"
   POST https://api.codat.io/companies/<COMPANY_ID>/connections
   ```
   
   ```json title="Request body - Xero"
   {
     "platformKey": "gbol"
   } 
   ```
   
   The endpoint returns a `dataConnection` object, in `PendingAuth` status, containing a connection `id` and a `linkUrl`. Later, you'll use the `linkUrl` to redirect the SMB user to the account mapping UI.

   ```json title="Response example (200)"
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

3. Using [PUT / bankFeedAccounts](/bank-feeds-api#/operations/create-bank-feed), add one or more source bank accounts:
   
   ```http title="Create bank feed bank accounts"
   PUT /companies/<COMPANY_ID>/connections/<CONNECTION_ID>/connectionInfo/bankFeedAccounts
   ```
   
   For the `<CONNECTION_ID>`, use the connection `id` in the response from `POST /companies`.
   
   In the request body, specify a list of source bank accounts to make available to the SMB user. For example, to add two credit card accounts send the following request:

   ```json title="Request body (all fields are required)"
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
   :::caution Specific account types
   Xero approves Bank Feeds applications only for "BANK" or "CREDITCARD" account types (in Xero's terminology). Therefore, it's important to use the correct `accountType` value when setting up source bank accounts, namely "Debit" for type "BANK" and "Credit" for type "CREDITCARD".
   :::

4. The endpoint returns a `200` code and the list of created bank accounts.

## Read next

See CROSSREF TO: SMB user account connection to learn...

<hr />

# SMB user account connection

After setting up a company, data connection, and one or more source bank accounts, redirect your SMB user to the `linkUrl` . The URL was returned from `POST /companies/<COMPANY_ID>/connections`.

:::info Link URL expiry
For security reasons, the `linkUrl` will expire one hour after it was generated.
:::

## Account mapping UI

After authenticating with their Xero account, the SMB user is redirected to a generic account-mapping UI provided by Codat. This lets them map and connect their source bank accounts to Xero, creating _bank feed connections_.

![xero-bank-feeds_mapping-screen-example](/img/bank-feeds-api/xero-bank-feeds/xero-bank-feeds_mapping-screen-example.png "Codat UI for connecting and mapping bank feed accounts to Xero.")

The SMB user can do the following:
- Add one or more source bank accounts (the accounts you provided through the `PUT /bankFeedAccounts` endpoint).
- Map a source bank account to an existing target bank account in Xero.
- Select **Create New Account** to map a source bank account to a new target bank account in Xero.
- Select the **Feed start date**&mdash;the date a bank feed connection should start from.
- Connect the selected bank accounts to create bank feed connections.

:::info Target account names
If the user chooses the **Create New Account** option, the target bank account is created with the same name as the source bank account it is mapped to. Bank account names can be changed in Xero at any time.
:::

:::caution Bank feeds must be pushed to Codat
Transactions are not automatically downloaded to Xero when the user successfully connects a bank account. You need to CROSSREF: Push bank transactions.
:::

## Connection management
To allow your SMB users to view and manage their existing bank feed connections, you can direct them to a newly-generated `linkUrl`. When they open this URL and revisit the account mapping UI, their existing connections are displayed in the **Manage your connected accounts** panel:

![xero-bank-feeds_account-mapping-ui-manage-feed-connections](/img/bank-feeds-api/xero-bank-feeds/xero-bank-feeds_account-mapping-ui-manage-feed-connections.png "Codat-provided account mapping UI showing several connected accounts in the bottom panel.")

To disconnect a source bank account, the SMB user hovers over the **connected** status icon and selects **Disconnect**. This immediately disables the bank feed connection. The disconnected account will display in the source bank account dropdown menu when the user next refreshes the page.


## Read next

Now that your SMB users have mapped and connected their bank accounts, you're ready to CROSSREF TO: Push bank transactions to Xero.

<hr />

# Push bank transactions to Xero
When your SMB users have connected their bank accounts, you're ready to push bank transactions from source bank accounts to Xero.

This article explains how to:

- View the details of source bank accounts, including their connection statuses.
- Push bank transactions for connected source bank accounts.

## Prerequisites

- You've CROSSREF set up the Xero Bank Feeds integration

## View bank account details

To get ready to push bank transactions, call  [GET connectionInfo/bankFeedAccounts](/bank-feeds-api#/operations/get-bank-feeds) to view details of the source bank accounts for a specified data connection.

The response shows you whether the SMB user has completed the step of mapping and connecting accounts.

```http title="List bank feed bank accounts"
GET /companies/<COMPANY_ID>/connections/<CONNECTION_ID>/connectionInfo/bankFeedAccounts
```

The response contains a list of source bank accounts with a status of either `pending`, `connected`, or `disconnected`. The `feedStartDate` property is returned for `connected` bank accounts only.

```json title="Response example (200)"
[
  {
    "id": "acc-002", // the ID of the source bank account
    "accountName": "account-081",
    "accountType": "Credit",
    "accountNumber": "12345670",
    "sortCode": "123456",
    "currency": "GBP",
    "balance": 99.99,
    "modifiedDate": "2023-01-09T13:46:59.4019628Z",
    "status": "pending" // bank account connection status
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

You can push [Bank transactions](/accounting-api#/schemas/BankTransactions) to Xero for `connected` source bank accounts. Transactions are pushed to the target Xero bank account to which the source account is mapped.

In the SMB user's Xero package, new bank transactions for the target account will appear on the **Incoming Bank Transactions** UI.

Bank feeds are pushed to Xero immediately, not on a schedule.

:::info Bank feeds must be pushed to Codat
Transactions are not automatically downloaded to Xero when the user successfully connects a bank account.
:::

To push bank transactions to Codat, make the following requests to the Codat API. All push requests are asynchronous.

### Requirements for bank transactions pushed to Xero

- You can only push bank transactions to one target account at a time.
- Bank transactions must be pushed in chronological order.
- Bank transactions can't be older than the most recent transaction available on the destination bank account.
- Bank transactions must have a `date` set to the current day or earlier.
- Up to 1000 bank transactions can be pushed at a time.

To push bank transactions to Xero:

1. Push bank transactions to a target bank account using the [Create bank transactions](/accounting-api#/operations/create-bank-transactions) endpoint. 

   ```http title="Create bank transactions"
   POST https://api.codat.io/companies/<COMPANY_ID>/connections/<CONNECTION_ID>/push/bankAccounts/<ACCOUNT_ID>/bankTransactions
   ```
   
   Where `ACCOUNT_ID` is the ID of a connected source bank account (returned from
   `GET /connectionInfo/BankFeedAccounts`).  
   
   ```json title="Example request body (all fields are required)"
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
   The push operation status might remain as `Pending` for some time while Xero processes the bank transactions.
   :::
   
3. Repeat the Create bank transactions request for the rest of the user's source bank accounts.
