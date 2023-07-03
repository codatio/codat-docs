---
title: "Updating Expenses"
description: "Ensure your expense metadata is correct across your expense management platform and your booking keeping records"
---

import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";

Once you have synced an expense transaction to your accounting platform, you can make alterations to a single transaction's metadata. The change will be reflected across your expense management or corporate card platform and your accounting software/ERP.

This saves your SMB customers’ time and helps reduce errors, because they won’t need to make changes to their expense management platform and their accounting package separately. 

Use our [Endpoint name](endpoint link to API ref) to edit the following expense transaction metadata:
- Net expense amount 
- Tax amount of the spend
- Tax rate reference associated with the spend
- Expense bank account reference
- Tracking category objects
- Description & notes

```http title="Update an expense transaction"
PUT  https://api.codat.io/companies/{companyId}/sync/expenses/expense-transactions
```

:::info Compatible integrations
At the moment you can update expenses only for Xero.
:::

To update an attachment or receipt, you first need to delete it and then create a new dataset for the updated transaction attachment. After that, you can sync the expense to the accounting platform. Check out our guidance on [uploading receipts](/sync-for-expenses/sync-process/uploading-receipts).
