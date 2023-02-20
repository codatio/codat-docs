---
title: "Product update #2"
date: "2023-02-03"
tags: ["Product", "Update"]
draft: false
authors: mcclowes
---

A new product for easy syncing with bookkeeping software and ERPs, and other qualithy of life improvements.

<!--truncate-->

## What's new

### [Sync for Expenses](https://codat2.stoplight.io/docs/sync-for-expenses-v2/fjx7t6em0l1ux-overview)

Launch new accounting integrations faster and save on ongoing maintenance by standardizing how you sync with bookkeeping software and ERPs.

Sync for Expenses is an API and a set of supporting tools. It has been built to enable corporate card and expense management platforms to provide high-quality integrations with multiple accounting platforms through a standardized API.

[Read the docs...](https://codat2.stoplight.io/docs/sync-for-expenses-v2/fjx7t6em0l1ux-overview)

### Accounting API

- **New:** Support for pushing Direct Costs to FreeAgent
- **New:** Push payment/billPayment on Xero with a line link type paymentOnAccount
- **New:** Migrate FreeAgent tokens via PUT `/companies/{companyId}/connections/{connectionId}/authorization`

### Portal

- **New:** Companies chart on the dashboard

## Deprecations

Don't forget about our upcoming deprecations:

- [https://docs.codat.io/updates/230411-api-keys]
- [https://docs.codat.io/updates/230411-deletion-of-data]
- [https://docs.codat.io/updates/230411-legacy-bank-account-endpoints]

Stay on top of deprecations by checking out and subscribing to our deprecation calendar here: <https://docs.codat.io/introduction/change-policy>