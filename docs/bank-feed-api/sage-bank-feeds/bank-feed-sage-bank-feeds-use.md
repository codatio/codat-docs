---
title: "Use your Sage Bank Feeds integration"
description: "Learn how to push your SMB users' bank transactions to Codat via our Sage Bank Feeds integration"
createdAt: "2022-10-06T10:41:35.980Z"
updatedAt: "2023-01-10T14:18:49.033Z"
---

When you've set up the Sage Bank Feeds integration and your SMB customer has connected a source bank account to a Sage product, you can start to push bank transactions to a target bank account.

## View bank account details

To view details of the source bank accounts for a specified data connection, use the <a className="external" href="https://api.codat.io/swagger/index.html#/Connection/get_companies__companyId__connections__connectionId__connectionInfo_bankFeedAccounts" target="_blank">GET /bankFeedAccounts</a> endpoint.

```http
GET /companies/{companyId}/connections/{connectionId}/connectionInfo/bankFeedAccounts
```

The response contains a list of bank accounts with a status of either `pending` or `connected`. For `connected` bank accounts, the `feedStartDate` property is set to the current time in UTC.

### Example response

```json
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

## Push bank transactions from a source bank account

You can push [Bank transactions](/datamodel-accounting-banktransactions) from `connected` source bank accounts to target accounts in supported Sage products. The integration routes these transactions through the Sage Banking Service Provider API.

In the user's Sage package, new bank transactions for the target account will appear on the **Incoming Bank Transactions** UI.

:::note Bank feeds must be pushed to Codat

Transactions are not automatically downloaded to Sage when the user successfully connects a bank account.
:::

Make the following requests to the Codat API. All push requests are asynchronous.

1. Push bank transactions to a target bank account using the <a className="external" href="https://api.codat.io/swagger/index.html#/BankAccounts/post_companies__companyId__connections__connectionId__push_bankAccounts__accountId__bankTransactions" target="_blank">Create bank transactions</a> endpoint. Note that:

   - You can only push bank transactions to one target account at a time.
   - Bank transactions must be pushed in chronological order.
   - Bank transactions can't be older than the most recent transaction available on the destination bank account.
   - Bank transactions must have a `date` set to the current day or earlier.
   - Up to 1000 bank transactions can be pushed at a time.

   ```http
   POST https://api.codat.io/companies/COMPANY_ID/connections/CONNECTION_ID/push/bankAccounts/ACCOUNT_ID/bankTransactions
   ```

   Where `ACCOUNT_ID` is the `id` of a connected source bank account (returned from `GET /connectionInfo/BankFeedAccounts`).

   Example request body (all fields are mandatory):

   ```json
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

   :::note

   > The status might remain as `Pending` for some time while Sage processes the bank transactions.

3. Repeat the request for the remainder of the SMB customer's connected bank accounts.
