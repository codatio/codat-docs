---
title: "The sync process explained"
description: "The end to end sync process for pushing expenses to your customers accounting software"
---

import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";

``` mermaid
  sequenceDiagram
    User->>+You: User Approves Expenses with receipt
    You-)+Codat: POST expense-transaction
    Codat-->>-You: datasetId
    You-)+Codat: initiate sync
    Note over You,Codat: specify datasetId's to sync
    Codat-->>You: syncId
    Codat-)Accounting: Sync expense-transaction
    Codat->>-You: Sync Complete webhook event
    You->>Codat: Check transactions
    Codat-->>You: 
    par Each Succesfull Reconciliation
        You->>+Codat: POST attachment
        Codat->>Accounting: Upload Attachment
        Codat-->>-You: success
    end
    You->>-User: Expense marked as uploaded
```

### [Create expense-transactions datasets](expense-transactions)

After the company has categorised their expenses using the mapping options, you can create expense-transaction datasets, in the response you will receive a `datasetId`.

```http title="Create expense dataset"
POST https://expensesync.codat.io/companies/{companyId}/expense-reconciliations
```

### [Initiate Sync](syncing-expenses)

You can then initiate the sync process for multiple datasets by making an api request to the [sync endpoint](/sync-for-expenses-api#/operations/intiate-sync).

```http title="Initiate a sync of expense datasets"
POST  https://expensesync.codat.io/companies/{companyId}/data/expense-transactions
```
A `syncId` will be returned to the response payload.

### Check sync status

There are three ways to check the status of the sync:

1.  Using webhooks and the `sync completed` rule

2.  Polling the [sync status endpoint](sync-for-expenses-api#/operations/get-sync-by-id)

3.  Using the Sync Health Site for Sync for Expenses

### Check transactions

Once the sync has completed, you should check whether the transactions were successfully synced to the accounting package. This can be done via the [transaction metadata endpoint](/sync-for-expenses-api#/operations/get-sync-transactions)

```http title="Transaction status"
GET https://expensesync.codat.io/companies/{companyId}/syncs/{syncId}/transactions
```

### [Upload Receipts](uploading-receipts)

To post the attachment for each transactionId. with a status of `Completed` and integrationType of `expense` they can then call the [attachment endpoint](/sync-for-expenses-api#/operations/upload-attachment)

```http title="Upload receipt"
POST https://expensesync.codat.io/companies/{companyId}/syncs/{syncId}/transactions/{transactionId}/attachments
```
