---
title: "2024-10-10: Deprecation of customer and supplier references in the 'tracking' property for NetSuite journal entries"
date: "2024-06-25"
tags: ["Deprecation", "NetSuite"]
authors: nargiz
---
On **October 10, 2024**, Codat will stop referencing customer and supplier information as part of `recordRefs` in the `tracking` property of NetSuite's journal entries that affect Accounts Receivable or Accounts Payable. Instead, we will reference them in the `contactRef` property.

<!--truncate-->

## Action required

If you are currently using journal entries with our NetSuite integration and obtain the customer and supplier information from the `tracking` property for transactions that affect Accounts Receivable or Accounts Payable, you need to implement changes to retrieve customer and supplier information from the `contactRef` property instead. You can review the journal entries data model in our [API reference](/using-the-api/overview).

## Expected impact if no action is taken

After **October 10, 2024**, you will not be able to retrieve customer and supplier reference information from the `tracking` property of NetSuite's journal entries.

:::note Get ahead

You can get ahead of this change by enabling it now in the [Portal](https://app.codat.io/developers/api-deprecations). Learn how to do that [here](https://docs.codat.io/configure/portal/developers) or read our [change policy](https://docs.codat.io/using-the-api/change-policy).

:::
