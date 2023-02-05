---
title: "Prerequisites"
description: "Prerequisites to get started with Sync for Commerce."
createdAt: "2022-08-03T12:22:19.576Z"
updatedAt: "2022-11-28T11:26:51.853Z"
---

:::caution Beta testing

Sync for Commerce is in beta. If you are interested in building with Sync for Commerce, please [get in touch](mailto:sync-for-commerce@codat.io).
:::

Sync for Commerce must be enabled for your account. You can enable products in the Portal via [**Settings > Products**](https://app.codat.io/settings/products) as an Admin or Developer user.

### Authentication

[Authenticate](https://docs.codat.io/reference/authentication) with the Codat API using your API key.

### Enable a supported platform

You need to set up one or more of the supported accounting platforms:

- [Xero](https://docs.codat.io/docs/accounting-xero)
- [QuickBooks Online](https://docs.codat.io/docs/accounting-quickbooksonline)
- [FreeAgent](https://docs.codat.io/docs/accounting-freeagent)

### Required data types

The following data types are required (and are enabled by default):

#### Accounting

- [Company info](https://docs.codat.io/docs/datamodel-accounting-company)
- [Accounts](https://docs.codat.io/docs/datamodel-accounting-chartofaccounts)
- [Tax rates](https://docs.codat.io/docs/datamodel-accounting-taxrates)
- [Customers](https://docs.codat.io/docs/datamodel-accounting-customers)
- [Suppliers](https://docs.codat.io/docs/datamodel-accounting-suppliers)

#### Commerce

- [Orders](https://docs.codat.io/docs/datamodel-commerce-orders)
- [Transactions](https://docs.codat.io/docs/datamodel-commerce-transactions)
- [Payments](https://docs.codat.io/docs/datamodel-commerce-payments)
