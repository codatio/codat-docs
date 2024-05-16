---
title: "Create and update expenses"
sidebar_label: "Expenses"
description: Record and update expense transactions that represent your customers' spend
---

import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem"

## Overview

An expense is a transaction that represents the purchase made by your customer and the context behind that purchase. It usually includes the following details:

- Transaction type, e.g. whether it's a payment or a refund
- General ledger account the transaction should be reconciled to
- Associated tax rates
- Applicable tracking categories

With Sync for Expenses, you need to create the expense or transfer transactions first and push that dataset to Codat. We will describe options available to you on this page. 

Then, you need to [sync expenses](/expenses/sync-process/syncing-expenses) to reflect these in your customer's accounting platform. Finally, once these transactions have been synced, you can [upload attachments](/expenses/sync-process/uploading-receipts) to associate receipts with the transaction.

This process is summarized on the diagram below.

``` mermaid
sequenceDiagram
  User->>+You: Approve expenses with receipt
  You-)+Codat: Post expense transaction
  You-)+Codat: Initiate sync
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

```json title="Expense transaction request body"
[
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
    "bankAccountRef": {
      "id": "an-id-to-a-bank-or-credit-card-account"
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

```

Next, you need to follow up with an expense sync to reflect this item of spend in the customer's accounting platform. We cover this in detail in [Sync expenses](/expenses/sync-process/syncing-expenses).

### Draft transactions

Some accounting platforms allow expense transactions to be created in a draft state instead of posting directly to the ledger. This means the user can review the expense in the accounting platform before finalizing and posting it prior to reconciliation. 

To create an expense as a draft, set the `postAsDraft` property on the transaction to `true`. For platforms without this feature, the `postAsDraft` property should be ignored or set to `false`.

:::info Compatible integrations

This functionality is currently only available for Microsoft Dynamics. 

:::

### Billable expenses

Your customer may want to mark an expense as billable so that they can easily identify and allocate costs to specific customers or projects. This simplifies the process of invoicing clients for reimbursable expenses.

To mark an expense as billable, set the `invoiceTo` property to `customer`. The expense will then reference the customer in the line item.

:::info Compatible integrations

This functionality is currently only available for QuickBooks Online and QuickBooks Desktop. 

:::

### Multicurrency expense transactions

Sync for Expenses validates each expense transaction involving foreign currency. We ensure that the combination of participating currencies will be accepted by the target accounting platform as a valid expense. You can read more about [expenses in foreign currency](/expenses/fx-management) and platform support for different transaction types.
 
### Default tax rates

If you need to remove an associated tax rate from an expense, use one of the following default values that have no impact on the expense:

| Platform          | Default tax rate                 |
|-------------------|----------------------------------|
| QuickBooks Online | `NON`                            |
| Xero              | `NONE`                           |
| Oracle NetSuite   | `-7`                             |
| Dynamics 365      | Set up and apply a `0%` tax rate | 
| QuickBooks Desktop| Null                             | 

### Transaction types

Sync for Expenses maps and processes expense transactions based on the following transaction types:

| Transaction type | Description                                                                                                                                                                                                                                               |
|------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `payment`        | Represents any   spend that takes place on the account and interest on credit purchases.                                                                                                                                                                  |
| `refund`         | Represents any refunds and returns on an original transaction.                                                                                                                                                                                            |
| `reward`         | Represents reward redemptions, such as cashback.                                                                                                                                                                                                          |
| `chargeback`     | Similarly to a refund, represents a return of a transaction or a payment   sum which may have been disputed.                                                                                                                                              |
| `transferIn`     | **Transaction type to be deprecated in June 2024.** <br/>  A transfer that decreases the   balance of the credit card account or increases the balance of a bank   account. <br/>  Represents a   top-up of debit card account, a pay-down of a credit card account, or a   balance transfer to another credit card.|
| `transferOut`    | **Transaction type to be deprecated in June 2024.**  <br/> A transfer that increases the   balance of the credit account or decreases the balance of a bank account.   <br/>  Represents cash   withdrawals or a balance transfer to another credit card.                                                            |
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
