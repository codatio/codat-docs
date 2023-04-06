---
title: "Push bank transactions from Codat to QuickBooks Online"
description: "Learn how to push your SMB users' bank transactions via our QuickBooks Online Bank Feeds integration"
sidebar_label: "Push bank transactions to QBO"
---

When an SMB user has [connected their bank accounts](/bank-feeds-api/qbo-bank-feeds/qbo-bank-feeds-smb-user), you're ready to push bank transactions from a source bank account to QuickBooks Online (QBO). You can push transactions from any account that has a status of `connected` when you [retrieve bank account status and information](/bank-feeds-api/qbo-bank-feeds/qbo-bank-feeds-setup#retrieve-bank-account-status-and-information).

Note the following requirements before pushing bank transactions to QBO.

## Ordered by cleared on date

To be pushed successfully, bank transactions must be cleared (not pending) and have a `clearedOnDate` of the current or prior day. In the [Create bank transactions](/accounting-api#/operations/create-bank-transactions) endpoint, the `clearedOnDate` is set in the `date` field.

Bank transactions must be ordered chronologically (from earliest to latest) by the `clearedOnDate`.

:::caution Cleared on date field names

The `clearedOnDate` is returned by the [List bank transactions for a bank account](/accounting-api#/operations/list-bank-account-transactions) endpoint. However, when pushing transactions with [Create bank transactions](/accounting-api#/operations/create-bank-transactions), you must supply the value of the `clearedOnDate` in the `date` field.

:::

## Historic transactions

You can push historic transactions of up to seven days based on the _feed start date_, as chosen by the SMB user in the QBO UI.

Codat sends bank transactions to QBO for a maximum of the past seven days.

:::caution Future bank feeds not supported

Pushing future (future-dated) bank transactions to QBO is not supported.

:::

## Other requirements

Note the following requirements for pushing bank transactions to QBO.

- You can only push bank transactions from one source bank account at a time.
- Bank transactions must be pushed in chronological order.
- A bank transaction can't be older than the most recent transaction available in the target bank account.
- Up to 1000 bank transactions can be pushed at a time.

## How often to push transactions

QBO requires that bank transactions are sent from Codat in chronological order. Therefore, we recommend you post seven days of historic transactions on the initial push. For subsequent pushes, we recommend you post daily transaction data, which will be sent to QBO on a daily schedule.

## Push bank transactions to QuickBooks Online

Make the following requests to the Codat API. All push requests are asynchronous.

1. Push bank transactions from an SMB user's connected source bank account using the [Create bank transactions](/accounting-api#/operations/create-bank-transactions) endpoint.

   ```http
   POST https://api.codat.io/companies/COMPANY_ID/connections/CONNECTION_ID/push/bankAccounts/ACCOUNT_ID/bankTransactions
   ```

   ```json title="Example request body (all fields are mandatory)"
   {
     "accountId": "482342-acc-001",
     "transactions": [
       {
         "id": "7832323211-GIF",
         "amount": 450,
         "balance": 2000,
         "date": "2022-08-30T17:05:12.191Z", // clearedOnDate, time is optional
         "description": "events-hospitality"
       },
       {
         "id": "7832323211-SDC",
         "amount": 730,
         "balance": 2730,
         "date": "2022-08-31T11:06:49.191Z", // clearedOnDate, time is optional
         "description": "corporate-training"
       }
     ]
   }
   ```

   The balance of the last bank transaction in the array is used to update the balance of the specified bank account.

2. If the data is valid, the endpoint returns a push operation with a `status` of `Pending` (202). If the push completes successfully, this changes to `Success`.

3. Repeat the request for the remainder of the SMB user's source bank accounts.

## Transactions reference

The following table details how each property in the `transactions` array is handled when pushing bank transactions to QBO. For more details, see the [Bank account transactions](/accounting-api#/schemas/BankTransactions) data type.

| **Property in the `transactions` array**   | **Status**                                       |
|--------------------------------------------|--------------------------------------------------|
| id                                         | Required                                         |
| date                                       | Required                                         |
| description                                | Required                                         |
| counterparty                               | Not supported; ignored if pushed                 |
| reference                                  | Not supported; ignored if pushed                 |
| reconciled                                 | Not supported; ignored if pushed                 |
| amount                                     | Required                                         |
| balance                                    | Required                                         |
| transactionType                            | Optional, either `Credit`, `Debit`, or `Unknown` |
| modifiedDate                               | Populated automatically on push                  |
| sourceModifiedDate                         | Populated automatically on push                  |
