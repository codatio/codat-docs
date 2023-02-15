---
title: "Push bank transactions from Codat to QuickBooks Online"
description: "Learn how to push your SMB users' bank transactions via our QuickBooks Online Bank Feeds integration."
createdAt: "2022-09-06T09:59:07.201Z"
updatedAt: "2023-01-11T15:59:49.369Z"
---

When an SMB user has [connected one or more bank accounts to QuickBooks Online](/bank-feeds-api/qbo-bank-feeds/qbo-bank-feeds-smb-customer-steps), you can push bank transactions from a connected account to QuickBooks Online (one account at a time). To identify a user's connected bank accounts, see [Retrieve bank account status and information](bank-feeds-api/qbo-bank-feeds/qbo-bank-feeds-setup#retrieve-bank-account-status-and-information).

:::caution Pushing historic and future bank feeds

Codat does not currently support pushing historic (backdated) or future (future-dated) bank feeds to QBO.
:::

## Recommendations for pushing bank transactions

Because of the way bank transactions work, we recommend you post seven days of transactions on the initial push. For subsequent pushes, we recommend you post daily transaction data.

## Push bank transactions to QuickBooks Online

Make the following requests to the Codat API. All push requests are asynchronous.

1. Push bank transactions from an SMB user's connected bank account using the <a className="external" href="/accounting-api#/operations/post-bank-transactions" target="_blank">Create bank transactions</a> endpoint. Note that:

   - You can only push bank transactions from one connected account at a time.
   - Bank transactions must be pushed in chronological order.
   - Bank transactions can't be older than the most recent transaction available on the destination bank account.
   - QBO fetches bank transactions for a maximum of the past seven days.
   - Bank transactions must have a `date` set to the prior or current day.
   - Up to 1000 bank transactions can be pushed at a time.

   ```http
   POST https://api.codat.io/companies/COMPANY_ID/connections/CONNECTION_ID/push/bankAccounts/ACCOUNT_ID/bankTransactions
   ```

   Example request body (all fields are mandatory):

   ```json
   {
     "accountId": "482342-acc-001",
     "transactions": [
       {
         "id": "7832323211-GIF",
         "amount": 450,
         "balance": 2000,
         "date": "2022-08-30T17:05:12.191Z", // time value is optional
         "description": "events-hospitality"
       },
       {
         "id": "7832323211-SDC",
         "amount": 730,
         "balance": 2730,
         "date": "2022-08-31T11:06:49.191Z", // time value is optional
         "description": "corporate-training"
       }
     ]
   }
   ```

   The balance of the last bank transaction in the array is used to update the balance of the specified bank account.

2. If the data is valid, the endpoint returns a push operation with a `status` of `Pending` (202). If the push completes successfully, this changes to `Success`.

3. Repeat the request for the remainder of the SMB user's connected bank accounts.
