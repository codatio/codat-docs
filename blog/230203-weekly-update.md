---
title: "Product update #2"
date: "2023-02-03"
tags: ["Update", "Product"]
draft: false
authors: mcclowes
link: "https://docs.codat.io/updates"
---

A new product for easy syncing with bookkeeping software and ERPs, and other qualithy of life improvements.

<!--truncate-->

### What's new

#### [Sync for Expenses](https://codat2.stoplight.io/docs/sync-for-expenses-v2/fjx7t6em0l1ux-overview)

Launch new accounting integrations faster and save on ongoing maintenance by standardizing how you sync with bookkeeping software and ERPs.

Sync for Expenses is an API and a set of supporting tools. It has been built to enable corporate card and expense management platforms to provide high-quality integrations with multiple accounting platforms through a standardized API.

[Read the docs...](https://codat2.stoplight.io/docs/sync-for-expenses-v2/fjx7t6em0l1ux-overview)

#### Accounting API

- **New:** Support for pushing Direct Costs to FreeAgent
- **New:** Push payment/billPayment on Xero with a line link type paymentOnAccount
- **New:** Migrate FreeAgent tokens via PUT `/companies/{companyId}/connections/{connectionId}/authorization`

#### Portal

- **New:** Companies chart on the dashboard
