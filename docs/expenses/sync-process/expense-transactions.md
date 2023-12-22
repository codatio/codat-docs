---
title: "Create and update expenses"
sidebar_label: "Create expenses"
description: Record and update expense transactions that represent your customers' spend
---

import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem"

## Overview

An [expense](/sync-for-expenses-api#/operations/create-expense-transaction) is a transaction that represents the purchase made by your customer and the context behind that purchase. It usually includes the following details:

- Transaction type, e.g. whether it's a payment or a refund
- General ledger account the transaction should be reconciled to
- Associated tax rates
- Applicable tracking categories

With Sync for Expenses, you need to create the expense transactions first and push that dataset to Codat. We will describe options available to you on this page. 

Then, you need to [sync expenses](/expenses/sync-process/syncing-expenses) to reflect these in your customer's accounting platform. Finally, once these transactions have been synced, you can [upload attachments](/expenses/sync-process/uploading-receipts) to associate receipts with the transaction.

This process is summarized on the diagram below.

``` mermaid
sequenceDiagram
  User->>+You: Approve expenses with receipt
  You-)+Codat: Post expense transaction
  Codat-->>-You: datasetId
  You-)+Codat: Initiate sync
  Note over You,Codat: Specify datasetIds to sync
  Codat --> Codat: Sync request added to queue
  Codat-->>You: syncId
  Codat-)Accounting: Sync expense transaction from queue
  Codat->>-You: Sync Complete webhook event
  You->>Codat: Check transactions
  Codat-->>You: 
  par Each successful reconciliation
    You->>+Codat: Post attachment
    Codat->>Accounting: Upload attachment
    Codat-->>-You: Success
  end
  You->>-User: Expense marked as uploaded
```

## Create expenses

To create a new expense transaction in Codat, use the [Create expense transaction](/sync-for-expenses-api#/operations/create-expense-transaction) endpoint. 

In the request, make sure that the transaction's `id` is unique as it serves as an idempotence key. Codat validates the `id` to ensure that it's unique to a company, preventing the creation of duplicate transactions in your SMB's accounting software. 

Next, you need to follow up with an expense sync to reflect this item of spend in the customer's accounting platform. We cover this in detail in [Sync expenses](/expenses/sync-process/syncing-expenses).

```json title="Expense transaction request body"
{
  "items": [
    {
      "id": "08ca1f02-0374-11ed-b939-0242ac120002",
      "type": "Payment",
      "issueDate": "2023-12-13T00:00:00+00:00",
      "currency": "GBP",
      "currencyRate": 1.26,
      "contactRef":{
          "id":"an-id-to-a-suppliers-record",
          "type": "Supplier"
      },
      "postAsDraft": false,
      "merchantName": "Amazon UK",
      "lines": [
        {
          "netAmount": 110.42,
          "taxAmount": 14.43,
          "taxRateRef": {
            "id": "an-id-to-a-taxRates-record"
          },
          "accountRef": {
            "id": "id-of-the-expense-nominal-account"
          },
          "trackingRefs": [
            {
              "id": "an-id-to-a-trackingCategories-record",
              "dataType": "trackingCategories"
            }
          ],
          "invoiceTo": {
              "id": "an-id-to-a-customers-record",
              "dataType": "customers"
          }
        }
      ],
      "notes": "Amazon UK | Online Purchase | Order 123XX45"
    }
  ]
}
```
### Draft transactions

:::info Compatible integrations

Check our [API reference](/sync-for-expenses-api#/operations/create-expense-transaction) for an up-to-date list of integrations that support this functionality.

:::

Some accounting platforms allow expense transactions to be created in a draft state. This means the user can review the expense in the software before finalizing and posting it prior to reconciliation. 

In the request body, use the `postAsDraft` flag to define whether the expense should be posted in its draft or final state. When set to `true`, the expense is posted as a draft. 

### Default tax rates

If you need to remove an associated tax rate from an expense, use one of the following default values that have no impact on the expense:

| Platform          | Default tax rate                 |
|-------------------|----------------------------------|
| QuickBooks Online | `NON`                            |
| Xero              | `NONE`                           |
| Oracle NetSuite   | `-7`                             |
| Dynamics 365      | Set up and apply a `0%` tax rate | 

### Transaction types

Sync for Expenses maps and processes expense transactions based on the following transaction types:

| Transaction type | Description                                                                                                                                                                                                                                               |
|------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `payment`        | Represents any   spend that takes place on the account and interest on credit purchases.                                                                                                                                                                  |
| `refund`         | Represents any refunds and returns on an original transaction.                                                                                                                                                                                            |
| `reward`         | Represents reward redemptions, such as cashback.                                                                                                                                                                                                          |
| `chargeback`     | Similarly to a refund, represents a return of a transaction or a payment   sum which may have been disputed.                                                                                                                                              |
| `transferIn`     | A transfer that decreases the   balance of the credit card account or increases the balance of a bank   account. <br/>  Represents a   top-up of debit card account, a pay-down of a credit card account, or a   balance transfer to another credit card. |
| `transferOut`    | A transfer that increases the   balance of the credit account or decreases the balance of a bank account.   <br/>  Represents cash   withdrawals or a balance transfer to another credit card.                                                            |
| `adjustmentIn`   | An adjustment that decreases the   balance of the credit account or increases the balance of a bank account.   <br/> Represents write-offs and transaction adjustments, such as   foreign exchange adjustments.                                           |
| `adjustmentOut`  | An adjustment that increases the   balance of the credit account or decreases the balance of a bank account.   <br/> Represents write-offs and transaction adjustments, such as   foreign exchange adjustments.                                           |

## Update expenses

:::info Compatible integrations

Check our [API reference](/sync-for-expenses-api#/operations/update-expense-transaction) for an up-to-date list of integrations that support this functionality.

:::

In some cases, your customer may want to update an expense transaction that was previously synced to their accounting platform. Use our [Update expense transactions](/sync-for-expenses-api#/operations/update-expense-transaction) endpoint to edit the following parameters and reflect the change in the SMB's accounting software: 

- Net expense amount 
- Tax amount of the spend
- Tax rate reference associated with the spend
- Expense bank account reference
- Tracking category objects
- Description and notes

```http title="Update an expense transaction"
PUT  https://api.codat.io/companies/{companyId}/sync/expenses/expense-transactions
```

---
## Read next

- [Sync the expenses](/expenses/sync-process/syncing-expenses) to reflect the spend in the accounting platform and monitor the progress of the synchronization.