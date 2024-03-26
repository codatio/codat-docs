---
title: "Create and update reimbursable expenses"
sidebar_label: "Reimbursements"
description: Record and update reimbursable expense transactions that represent your customers' repayable spend
---

import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem"

## Overview

A reimbursable expense is a cost incurred by an employee which is eligible to be refunded or compensated by their employer or another party. In accounting systems, reimbursable expenses are represented as bills that are listed against the employee as the supplier.

:::info Compatible integrations

Check our [supported expense types](expenses/overview#supported-integrations) for an up-to-date list of integrations that support this functionality.

:::

With Sync for Expenses, you need to create the reimbursable expense transactions first. 

This will initiate the [sync](/expenses/sync-process/syncing-expenses) to reflect these in your customer's accounting platform. Finally, once these transactions have been synced, you can [upload attachments](/expenses/sync-process/uploading-receipts) to associate receipts with the transaction.

This process is summarized on the diagram below.

``` mermaid
sequenceDiagram
  User->>+You: Approve reimbursable expense with receipt
  You-)+Codat: Post reimbursable expense transaction
  Note over You,Codat: Initiate sync
  Codat --> Codat: Sync request added to queue
  Codat-->>You: syncId
  Codat-)Accounting: Sync reimbursable expense transaction from queue
  Codat->>-You: Sync Complete webhook event
  You->>Codat: Check transactions
  Codat-->>You: 
  par Each successful reconciliation
    You->>+Codat: Post attachment
    Codat->>Accounting: Upload attachment
    Codat-->>-You: Success
  end
  You->>-User: Reimbursable expense marked as uploaded
```

## Create reimbursable expenses

To create a new reimbursable expense transaction in Codat, use the [Create reimbursable expense transaction](/sync-for-expenses#/operations/create-reimbursable-expense-transaction) endpoint. 

In the request URL, make sure that the transaction's `id` is unique as it serves as an idempotence key. Codat validates the `id` to ensure that it's unique to a company, preventing the creation of duplicate transactions in your SMB's accounting software. 

```json title="Reimbursable expense request body"
{
   "items":[
      {
         "id":"81539597-e681-40c9-a4dd-ec2fffcde572",
         "reference":"101",
         "contactRef":{
            "id":"341"
         },
         "issueDate":"2022-04-29T00:00:00",
         "dueDate":"2022-04-29T00:00:00",
         "currency":"GBP",
         "notes":"Reimbursable Expense Demo",
         "lines":[
            {
               "netAmount":50,
               "taxAmount":10,
               "taxRateRef":{
                  "id":"3_Bills"
               },
               "accountRef":{
                  "id":"19"
               },
               "description":"Subscriptions",
               "trackingRefs":[
                  {
                     "id":"CLASS_5100000000000040021",
                     "dataType":"trackingCategories"
                  },
                  {
                     "id":"DEPARTMENT_5",
                     "dataType":"trackingCategories"
                  }
               ]
                "invoiceTo":{
                  "id":"an-id-to-a-customers-record",
                  "dataType":"customers"
               }
            }
         ]
      }
   ]
}
```

### Billable reimbursable expenses

Your customer may want to mark an expense as billable so that they can easily identify and allocate costs to specific customers or projects. This simplifies the process of invoicing clients for reimbursable expenses.

To mark an expense as billable, set the `invoiceTo` property to `customer`. The expense will then reference the customer in the line item.

### Multicurrency transactions

Sync for Expenses validates each reimbursable expense transaction involving foreign currency. We ensure that the combination of participating currencies will be accepted by the target accounting platform as a valid expense. You can read more about [expenses in foreign currency](/expenses/fx-management) and platform support for different transaction types.

For reimbursable expenses, the currency of the expense is the currency of the supplier (so the currency that the employee will be reimbursed in). If the employee needs to be reimbursed in a different currency, they need to be set up as a new supplier for each required currency.

### Default tax rates

If you need to remove an associated tax rate from a reimbursable expense, use one of the following default values that have no impact on the expense:

| Platform          | Default tax rate                 |
|-------------------|----------------------------------|
| QuickBooks Online | `NON`                            |

## Update reimbursable expenses

In some cases, your customer may want to update a reimbursable expense transaction that was previously synced to their accounting platform. Use our [Update reimbursable expense transactions](/sync-for-expenses-api#/operations/update-reimbursable-expense-transaction) endpoint to edit the following parameters and reflect the change in the SMB's accounting software: 

- Net expense amount 
- Tax amount of the spend
- Tax rate reference associated with the spend
- Expense bank account reference
- Tracking category objects
- Description and notes

```http title="Update an expense transaction"
PUT  https://api.codat.io/companies/{companyId}/sync/expenses/reimburseable-expense-transactions
```

---
## Read next

- [Sync the expenses](/expenses/sync-process/syncing-expenses) to reflect the spend in the accounting platform and monitor the progress of the synchronization.

