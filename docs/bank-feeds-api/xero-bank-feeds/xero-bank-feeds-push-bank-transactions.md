---
title: "Push bank transactions to Xero"
sidebar_label: Push bank transactions to Xero
description: "Learn how to push your SMB users' bank transactions via our Xero Bank Feeds integration"
---

When an SMB user has set up a bank feed connection, you can push bank transactions for source bank accounts to Xero. The source account must have  `connected` status, where the SMB user has completed the step of mapping and connecting the account.

:::caution Auto-download not supported
Transactions are not automatically downloaded to Xero when the user successfully connects a bank account. They must be pushed as described later in this article.
:::

This article explains how to:

- View the details of source bank accounts, including their connection statuses.
- Push bank transactions to a target bank account in Xero.

## Prerequisites

- You've [set up the Xero Bank Feeds integration](/bank-feeds-api/xero-bank-feeds/xero-bank-feeds-setup).

## View bank account details

Call  [GET connectionInfo/bankFeedAccounts](/bank-feeds-api#/operations/get-bank-feeds) to view details of the source bank accounts for a specified company and data connection.

```http title="List bank feed bank accounts"
GET /companies/<COMPANY_ID>/connections/<CONNECTION_ID>/connectionInfo/bankFeedAccounts
```

The response lists all source bank accounts and their statuses&mdash;either `pending`, `connected`, or `disconnected`. The `feedStartDate` property is returned for `connected` bank accounts only.

```json title="Response example - List bank feed bank accounts (200)"
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

## Requirements for pushing bank transactions to Xero

When pushing bank transactions to Xero:

- You can only push bank transactions to one target account at a time.
- Transactions must be pushed in chronological order.
- Transactions can't be older than the most recent transaction available on the destination bank account.
- Transactions must have a `date` set to the current day or earlier, but be aware of the limitation described in "Pushing historic transactions", below.
- A maximum of 1000 transactions can be pushed at a time.

:::note Pushing historic transactions
You can push bank transactions to Xero which are dated up to one year prior to the current date. Pushes containing bank transactions dated older than one year will fail.

The `date` of a historic transaction must be later than the `feedStartDate` on the source bank account, which is determined by the **Feed start date** selected by the SMB user in the account mapping UI.
:::

## Push bank transactions to Xero

To push bank transactions for a `connected` source bank account, make the following requests to the Codat API. All push requests are asynchronous. Bank feeds are sent to Xero immediately, not on a schedule.

1. Post the bank transactions using the [Create bank transactions](/accounting-api#/operations/create-bank-transactions) endpoint:

   ```http title="Create bank transactions"
   POST https://api.codat.io/companies/<COMPANY_ID>/connections/<CONNECTION_ID>/push/bankAccounts/<ACCOUNT_ID>/bankTransactions
   ```

   For the `ACCOUNT_ID`, supply the ID of a `connected` source bank account (returned from
   `GET /connectionInfo/BankFeedAccounts`).  

   ```json title="Example request body (all fields are required)"
   {
     "accountId": "482342-acc-001", // source bank account ID
     "transactions": [
       {
         "id": "7832323211-GIF",
         "amount": 450,
         "balance": 2000,
         "date": "2022-08-30T17:05:12.191Z", // max. 1 year old
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
   The push operation status might remain in `Pending` for some time while Xero processes the bank transactions.
   :::

3. Repeat the Create bank transactions request for the remainder of the user's source bank accounts.

In the SMB user's Xero package, new bank transactions for the target account will appear on the **Incoming Bank Transactions** UI.
