---
title: "2024-07-05: Transaction Currency Mapping in Netsuite Integration"
date: "2024-10-10"
tags: ["Deprecation"]
authors: codat-sean
---

We are updating our approach to handling transaction currencies in Netsuite journal entry mapping. Previously, transactions were mapped in the currency in which they were made, which could vary. From now on, we will use the base currency associated with the company for all transactions. This shift will enhance consistency and accuracy in our journal entry mappings across all integrations.

## Action required

- Review and update any custom integrations or workflows that rely on the old currency mapping behavior.

-  Test the updated mapping to ensure accurate financial data representation in the base currency.

## Expected impact if no action is taken

- Inconsistent financial reporting.

:::note Get ahead

You can get ahead of this change by enabling it now in the [Portal](https://app.codat.io/developers/api-deprecations). Learn how to do that [here](https://docs.codat.io/configure/portal/developers), or read our [change policy](https://docs.codat.io/using-the-api/change-policy).

:::