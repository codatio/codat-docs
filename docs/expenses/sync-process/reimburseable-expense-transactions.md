---
title: "Create and update reimburseable expenses"
sidebar_label: "Create reimbursements"
description: Record and update reimburseable expense transactions that represent your customers' spend
---

import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem"

## Overview

A reimburseable expense is a cost incurred by a employee which is then eligible to be refunded or compenstated by an employer or by another party. Reimburseable expenses are represented in the accounting system as a Bill, which goes against the employee who is the supplier.

:::info Compatible integrations

Check our [supported expense types](expenses/overview#supported-integrations) for an up-to-date list of integrations that support this functionality.

:::

With Sync for Expenses, you need to create the reimburseable expense transactions first. Creating the transaction will initiate the [sync](/expenses/sync-process/syncing-expenses) to then reflect these in your customer's accounting platform. Finally, once these transactions have been synced, you can [upload attachments](/expenses/sync-process/uploading-receipts) to associate receipts with the transaction.

This process is summarized on the diagram below.

``` mermaid
sequenceDiagram
  User->>+You: Approve reimburseable expense with receipt
  You-)+Codat: Post reimburseable expense transaction
  Note over You,Codat: Initiate sync
  Codat --> Codat: Sync request added to queue
  Codat-->>You: syncId
  Codat-)Accounting: Sync reimburseable expense transaction from queue
  Codat->>-You: Sync Complete webhook event
  You->>Codat: Check transactions
  Codat-->>You: 
  par Each successful reconciliation
    You->>+Codat: Post attachment
    Codat->>Accounting: Upload attachment
    Codat-->>-You: Success
  end
  You->>-User: reimburseable expense marked as uploaded
```

## Create reimburseable expenses

To create a new resimburseable expense transaction in Codat, use the [create reimburseable expense transaction](LINK) endpoint. 

In the request URL, make sure that the transaction's `id` is unique as it serves as an idempotence key. Codat validates the `id` to ensure that it's unique to a company, preventing the creation of duplicate transactions in your SMB's accounting software. 

```json title="Reimburseable expense request body"
{
  "items": [
    {
      "id": "{{$guid}}",
      "reference": "101",
      "contactRef": {
          "id": "341"
          },
            "issueDate": "{{today}}",
            "dueDate": "{{today}}",
            "currency": "GBP",
            "notes": "Reimbursable Expense Demo",
            "lines": [
                {
                  "netAmount": 50,
                  "taxAmount": 10,
                  "taxRateRef": {
                    "id": "3_Bills"
                    },
                    "accountRef": {
                    "id": "19"
                    },
                    "description": "Subscriptions",
                    "trackingRefs": [
                        {
                          "id": "CLASS_5100000000000040021",
                          "dataType": "trackingCategories"
                        },
                        {
                          "id": "DEPARTMENT_5",
                          "dataType":"trackingCategories"
                        }
                    ]
                }
            ]
        }
    ]
  }
```

### Multicurrency transfer transactions

Sync for Expenses validates each transfer transaction involving foreign currency. We ensure that the combination of participating currencies will be accepted by the target accounting platform as a valid expense. You can read more about [transfers in foreign currency](/expenses/fx-management#transfers) and platform support for different expense type.

Note that for reimburseable expenses, the currency of the expense is the currency of the supplier (the currency that the employee will be reimbursed in). If the employee needed to be reimbursed in a different currency, then they would need to set up a new supplier for the employee for each different currency needed.

### Default tax rates

If you need to remove an associated tax rate from a reimburseable expense, use one of the following default values that have no impact on the expense:

| Platform          | Default tax rate                 |
|-------------------|----------------------------------|
| QuickBooks Online | `NON`                            |

### Updating reimburseable expenses

In some cases, your customer may want to update a reimburseable expense transaction that was previously synced to their accounting platform. Use our [Update reimburseable expense transactions](/sync-for-expenses-api#/operations/update-reimburseable-expense-transaction) endpoint to edit the following parameters and reflect the change in the SMB's accounting software: 

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

