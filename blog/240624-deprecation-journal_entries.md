---
title: "2024-10-10: Deprecation of customers and suppliers tracking information in Journal Entries"
date: "2024-06-24"
tags: ["Deprecation"]
authors: nargiz
---
Following the update, Journal Entries that affect Accounts Receivable or Accounts Payable will reference customer and supplier information as `contactRef` instead of `tracking`.

<!--truncate-->

This change will be effective from **October 10, 2024** for the Netsuite integration.

## Action required

If you are currently getting journal entries from NetSuite, obtain customer and supplier information from the contactRef property for transactions affecting Accounts Receivable or Accounts Payable. This information is no longer referenced in tracking.

## Expected impact if no action is taken

You will no longer be able to retrieve customer and supplier information from the `tracking` property in journal entries that affect Accounts Receivable or Accounts Payable.

:::note Get ahead

You can get ahead of this change by enabling it now in the [Portal](https://app.codat.io/developers/api-deprecations). Learn how to do that [here](https://docs.codat.io/configure/portal/developers), or read our [change policy](https://docs.codat.io/using-the-api/change-policy).

:::