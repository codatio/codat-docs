---
title: "2024-07-08: Journal Entry Currency Mapping in Netsuite Integration"
date: "2024-10-10"
tags: ["Deprecation"]
authors: codat-sean
---

We're refining our approach to currency handling in Netsuite journal entry mappings. Previously, entries were recorded in the currency of the transaction. Now, we'll standardize this by using the company's base currency for all entries, ensuring we are keeping consistent and accurate across all integrations.

## Action required

- Review and update any application logic or workflows that rely on the old currency mapping behavior.

## Expected impact if no action is taken

- Inconsistent financial reporting.

:::note Get ahead

You can get ahead of this change by enabling it now in the [Portal](https://app.codat.io/developers/api-deprecations). Learn how to do that [here](https://docs.codat.io/configure/portal/developers), or read our [change policy](https://docs.codat.io/using-the-api/change-policy).

:::