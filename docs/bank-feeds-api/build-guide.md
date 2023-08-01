---
title: "Build guide for bank feeds"
description: "Set up a bank feeds integration"
sidebar_label: Build guide
displayed_sidebar: bankfeeds
---

A guide on how to set up a Bank Feeds integration to let your SMB customers connect source bank accounts in your application to target accounts in accounting platform.

## Prerequisites

Before setting up a bank feed, make sure that you have met the integrations prerequisites:

- ####Link to Xero#####
- ####Link to FreeAgent###
- ####Link to QBO###
- ####Link to Sage###

## Create a company and data connection, then add bank accounts

1. Create a company for your SMB using the [Create company](/codat-api#/operations/create-company) endpoint:

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

   In the request body specify the `platformKey`, for example, for Xero, this should be `gbol`:

   ```json
   {
     "platformKey": "gbol"
   }
   ```

   The `platformKey` for the bank feeds integrations are as follows:
    - Xero: `gbol`
    - FreeAgent: `fbrh`
    - QBO: `hcws`
    - Sage: `olpr`

   The endpoint returns a `200` response. The body contains a `dataConnection` object in `PendingAuth` status and a `linkUrl`. 

   ```json
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

3. Using the [POST /bankFeedAccounts](/bank-feeds-api#/operations/create-bank-feed) endpoint, add a source bank account. These are the accounts the SMB user will be able to connect to the accounting platform.

   ```http
   POST /companies/{companyId}/connections/{connectionId}/connectionInfo/bankFeedAccounts
   ```

   In the request body, specify a bank account (all fields shown are required):

   ```json title="Example request body: add a debit account"
     {
       "id": "ac-001",
       "accountName": "account-001",
       "accountType": "Debit",
       "accountNumber": "12345670",
       "currency": "GBP",
       "balance": 4002 // can be 0
     }
   ```

   The endpoint returns a `200` response and the created bank account.

   :::note UK specific requirements

   For UK bank accounts, `sortCode` is also a required field. 

   :::

4. Redirect the SMB user to the `linkUrl` returned in the response from the [Create a data connection](/codat-api#/operations/create-data-connection) endpoint (see step 2).

   :::caution Link URL expiry

   For security reasons, the `linkUrl` will expire one hour after it was generated. 

   :::

5. The SMB user opens the `linkUrl` in their browser to load the link flow for the integration.

   :::note Sage bank feeds link flow

   For Sage bank feeds, the link flow must originate in Sage itself, not Codat. For more info, see here ###link to sage flow####

   :::

:::caution Do not hardcode the Link URL

Do _not_ hardcode the `linkUrl` into your application code. It is unique to the originating customer and must not be shared with other users.
:::



## Account mapping

To allow the pushing of bank transactions, it is neccessary to link the source accounts that you have provided, to a target account in the accounting platform. When pushing bank transactions, you will specify the source account you want to push against, Codat will then push those transactions to the chosen target account.

Account mapping happens differently in different integrations:

- Xero and FreeAgent bank feeds use the account mapping UI to allow users to specify which source accounts link to which target accounts, for more info see: [Account mapping](/bank-feeds-api/account-mapping).
- QBO and Sage bank feeds account mapping is handled within the integration itself.

## Pushing bank transactions

Once you have setup a bank feeds connection, it is possible to start pushing bank transactions.

### Requirements for pushing bank transactions

When pushing bank transactions:

- The source bank account must be in a state of connected
- You can only push bank transactions to one account at a time.
- Transactions must be pushed in chronological order.
- Transactions can't be older than the most recent transaction available on the destination bank account.
- Transactions must have a `date` set to the current day or earlier, but be aware of the limitation described in "Pushing historic transactions", below.
- A maximum of 1000 transactions can be pushed at a time.

:::note Pushing historic transactions
Historic transactions are handled differently in differen integrations ####Finish this#####
:::

### How to push bank transactions

To push bank transactions for a `connected` source bank account, make the following requests to the Codat API. All push requests are asynchronous. Bank feeds transactions are sent to Xero immediately, not on a schedule.

1. Post the bank transactions using the [POST /push/bankAccounts/<ACCOUNT_ID>/bankTransactions](/accounting-api#/operations/create-bank-transactions) endpoint:

   ```http title="Create bank transactions"
   POST https://api.codat.io/companies/<COMPANY_ID>/connections/<CONNECTION_ID>/push/bankAccounts/<ACCOUNT_ID>/bankTransactions
   ```

   For the `ACCOUNT_ID`, supply the ID of a `connected` source bank account (returned from the `GET /connectionInfo/BankFeedAccounts` request).  

   ```json title="Example request body (all fields are required)"
   {
     "accountId": "482342-acc-001", // source bank account ID
     "transactions": [
       {
         "id": "7832323211-GIF",
         "amount": -450,
         "balance": 2000,
         "date": "2022-08-30T17:05:12.191Z", // max. 1 year old
         "description": "events-hospitality",
         "transactionType": "Debit"
       },
       {
         "id": "7832323211-SDC",
         "amount": -730,
         "balance": 2730,
         "date": "2022-08-31T11:06:49.191Z",
         "description": "corporate-training",
         "transactionType": "Debit"
       }
     ]
   }
   ```

   The balance of the last bank transaction in the array is used to update the balance of the specified bank account.
   
   :::note Positive and negative transactions
   Credit transactions are positive and debit transactions are negative, so it's important that the sign of the transaction `amount` is consistent with the `transactionType`. A warning is returned from Codat if, for example, a $100 transaction is sent to Xero as a `Debit`.
   :::
   
2. If the data is valid, the endpoint returns a push operation with a `status` of `Pending` (202). The status changes to `Success` if the push operation completes successfully.

   :::info Pending status
   The push operation status might remain in `Pending` for some time while the accounting integration processes the bank transactions.
   :::

3. Repeat the `POST /push/bankAccounts/<ACCOUNT_ID>/bankTransactions` request for the remainder of the user's source bank accounts.

In the SMB user's accounting package, new bank transactions for the target account will appear on the relevant UI.

:::caution QBO bank feeds transaction sync

Bank transaction push operations for QBO bank feeds will have a status of success once they have passed validation and have been stored by Codat. They will only be availble to the SMB in their accounting package once QBO syncs transactions with Codat. Users can manually sync from the QBO UI, QBO will also poll Codat once a day to update bank transactions. For more info see #####QBO pushing####
:::
