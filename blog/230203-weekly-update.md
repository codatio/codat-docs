---
title: "Changelog - February 2023"
date: "2023-02-03"
tags: ["Product", "Update"]
authors: mcclowes
---

A new product for easy syncing with bookkeeping software and ERPs, and other qualithy of life improvements.

<!--truncate-->

## What's new

### [Sync for Expenses](https://docs.codat.io/expenses/overview)

Launch new accounting integrations faster and save on ongoing maintenance by standardizing how you sync with bookkeeping software and ERPs.

Sync for Expenses is an API and a set of supporting tools. It has been built to enable corporate card and expense management platforms to provide high-quality integrations with multiple accounting software through a standardized API.

[Read the docs...](https://docs.codat.io/expenses/overview)

### Accounting API

- **New:** Support for writing Direct Costs to FreeAgent
- **New:** Write payment/billPayment on Xero with a line link type paymentOnAccount
- **New:** Migrate FreeAgent tokens via PUT `/companies/{companyId}/connections/{connectionId}/authorization`

### Portal

- **New:** Companies chart on the dashboard

## Deprecations

Don't forget about our upcoming deprecations:

- [https://docs.codat.io/updates/230411-api-keys](https://docs.codat.io/updates/230411-api-keys)
- [https://docs.codat.io/updates/230411-deletion-of-data](https://docs.codat.io/updates/230411-deletion-of-data)
- [https://docs.codat.io/updates/230411-legacy-bank-account-endpoints](https://docs.codat.io/updates/230411-legacy-bank-account-endpoints)

Stay on top of deprecations by checking out and subscribing to our deprecation calendar here: [https://docs.codat.io/using-the-api/change-policy](https://docs.codat.io/using-the-api/change-policy)