---
title: "Create and update transfers"
sidebar_label: "Transfers"
description: Record and update transfer transactions that represent the movement of your customer's money
---

import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem"

## Overview

Transfers are used to record the movement of money between two bank accounts. They represent transactions such as top-ups of debit card accounts, pay-downs of a credit card account, or a balance transfer to another credit card. 

With Sync for Expenses, you need to create the transfer transactions first. Creating the transaction will initiate the [sync](/expenses/sync-process/syncing-expenses) to then reflect these in your customer's accounting platform. Finally, once these transactions have been synced, you can [upload attachments](/expenses/sync-process/uploading-receipts) to associate receipts with the transaction.

This process is summarized on the diagram below.

``` mermaid
sequenceDiagram
  User->>+You: Approve transfer with receipt
  You-)+Codat: Put transfer transaction
  Note over You,Codat: Initiate sync
  Codat --> Codat: Sync request added to queue
  Codat-->>You: syncId
  Codat-)Accounting: Sync transfer transaction from queue
  Codat->>-You: Sync Complete webhook event
  You->>Codat: Check transactions
  Codat-->>You: 
  par Each successful reconciliation
    You->>+Codat: Post attachment
    Codat->>Accounting: Upload attachment
    Codat-->>-You: Success
  end
  You->>-User: Transfer marked as uploaded
```

## Create transfers

To create a new transfer transaction in Codat, use the [Create transfer transaction](/sync-for-expenses-api#/operations/create-transfer-transaction) endpoint. You can also use this endpoint to update an existing transfer.

In the request URL, make sure that the transaction's `id` is unique as it serves as an idempotence key. Codat validates the `id` to ensure that it's unique to a company, preventing the creation of duplicate transactions in your SMB's accounting software. 

```json title="Transfer transaction request body"
{
  "Description": "Sample transfer description",
  "Date": "2024-02-14T00:00:00Z",
  "From": {
    "AccountRef": {
      "Id": "a6980b6f-29dc-4c28-9596-f6c75e29f3b6"
    },
    "Amount": 1000.00
  },
  "To": {
    "AccountRef": {
      "Id": "a352b2f9-d47c-46ee-9561-731c6acff930"
    },
    "Amount": 1000.00
  }
}
```
:::tip Currency rate
We infer the `currencyRate` of the transfer transaction from the 'from.Amount' and 'to.Amount' values.
:::

### Multicurrency transfer transactions

Sync for Expenses validates each transfer transaction involving foreign currency. We ensure that the combination of participating currencies will be accepted by the target accounting platform as a valid expense. You can read more about [transfers in foreign currency](/expenses/fx-management#transfers) and platform support for different expense types.

---
## Read next

- [Sync the expenses](/expenses/sync-process/syncing-expenses) to reflect the spend in the accounting platform and monitor the progress of the synchronization.
