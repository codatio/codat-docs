---
title: "The sync process explained"
---

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

After the company has categorized their expenses using the mapping options, you can post the reconciliations to **POST** `/companies/{companyId}/expense-reconciliations` - in the response you will receive a `datasetId`.

### [Initiate Sync](syncing-expenses)

You can then initiate the sync process for multiple datasets by making an api request to **POST** `/companies/{companyId}/data/expense-transactions`. A `syncId` will be returned in the response payload.

### Check sync status

There are three ways that you can check the status of the sync:

1.  Using webhooks and the `sync completed` rule

2.  Polling the sync status endpoint **GET** `/companies/{companyId}/syncs/{syncId}/status`

3.  Using the Sync Health Site for Sync for Expenses

### Check transactions

Once the sync has completed, you should check whether the transactions were successfully sync'd to the accounting package - this can be done via the transaction metadata endpoint

- **GET** `/companies/{companyId}/syncs/{syncId}/transactions`

### [Upload Receipts](uploading-receipts)

To post the attachment for each transactionId. with a status of `Completed` and integrationType of `expense` they can then call the attachment endpoint

- **POST** `/companies/{companyId}/expense-reconciliations/{reconciliationId}/attachments`
