---
title: Managing suppliers
description: "Create and update suppliers using the Sync for Payables API"
---

In the Sync for Payables API, a [supplier](/sync-for-payables-api#/schemas/Supplier) represents a business or sole trader that provides goods or services to a company.

Suppliers are relevant for the bill pay use case as each bill is associated with a supplier - suppliers also have important information such as addresses and contact details which could be used to notify a supplier once a payment is made.

#### Retrieve a list of suppliers

You can get a [list of suppliers](/sync-for-payables-api#/operations/list-suppliers) using the Sync for Payables API

```http request title="List suppliers"
GET https://api.codat.io/companies/{companyId}/data/suppliers?page=1&pageSize=100
```

Query parameters can also be used to narrow the list of suppliers e.g.
- `status=Active` returns only active suppliers
- `defaultCurrency=USD` returns suppliers that provide goods or services in dollars
- `supplierName=Acme` returns suppliers with a name that matches the query

:::tip Supplier balances
Currently, the Sync for Payables API does not expose supplier balances on the supplier endpoint, however, you can access these by
- Aggregating bills by supplier
- Using the [Aged debtors](/sync-for-payables-api#/operations/get-aged-debtors-report) report
:::

### Creating a new supplier

In some cases, a company may do business with a new supplier for the first time, when this happens you should [create the supplier](/sync-for-payables-api#/operations/create-supplier) first before creating a bill against the supplier.

```http request title="Create supplier"
POST https://api.codat.io/companies/{companyId}/connections/{connectionId}/push/suppliers
```

### Updating an existing supplier

If a supplier changes address or business name, you may want to reflect this change in the company's accounting software by [updating the supplier](/sync-for-payables-api#/operations/put-supplier).

```http request title="Update supplier"
PUT https://api.codat.io/companies/{companyId}/connections/{connectionId}/push/suppliers/{supplierId}
```