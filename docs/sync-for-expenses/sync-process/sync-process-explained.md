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
  Codat --> Codat: Sync request added to queue
  Codat-->>You: syncId
  Codat-)Accounting: Sync expense-transaction from Queue
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

After the company has categorized their expenses using the mapping options, you can create expense-transaction datasets, in the response you will receive a `datasetId`.

```http title="Create expense dataset"
POST https://api.codat.io/companies/{companyId}/sync/expenses/expense-transactions
```

### [Initiate sync](syncing-expenses)

You can then initiate the sync process for multiple datasets by making an API request to the [sync endpoint](/sync-for-expenses-api#/operations/intiate-sync).

```http title="Initiate a sync of expense datasets"
POST  https://api.codat.io/companies/{companyId}/sync/expenses/syncs
```
A `syncId` will be returned to the response payload.

### Check sync status

There are three ways to check the status of the sync:

1.  Using webhooks and the `sync completed` rule

2.  Polling the [sync status endpoint](/sync-for-expenses-api#/operations/get-sync-by-id)

3.  Using the Sync Health Site for Sync for Expenses

<details>
  <summary>Sync status codes</summary>

| Code | Reason                                        |
| :--- | :-------------------------------------------- |
| 1000 | In Progress                                   |
| 1010 | In Progress (Long running - over ten minutes) |
| 2000 | Success (Data pushed)                         |
| 2040 | Success (No data pushed)                      |
| 4000 | Configuration Error                           |
| 4040 | Company deleted/de-authorized                 |
| 4220 | Company deleted/de-authorized                 |
| 4260 | Accounting platform billing expiry            |
| 5000 | Generic Server error                          |
| 5080 | Duplication protection                        |
| 5120 | Data processing error                         |
| 5130 | Data push error                               |

</details>

### Check transactions

Once the sync has completed, you should check whether the transactions were successfully synced to the accounting package. This can be done via the [transaction metadata endpoint](/sync-for-expenses-api#/operations/get-sync-transactions)

```http title="Transaction status"
GET https://api.codat.io/companies/{companyId}/sync/expenses/syncs/{syncId}/transactions
```

### [Upload Receipts](uploading-receipts)

To post the attachment for each `transactionId` with a status of `Completed` and integrationType of `expense`, call the [attachment endpoint](/sync-for-expenses-api#/operations/upload-attachment)

```http title="Upload receipt"
POST https://api.codat.io/companies/{companyId}/sync/expenses/syncs/{syncId}/transactions/{transactionId}/attachments
```

  
