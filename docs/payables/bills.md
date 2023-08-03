---
title: Accounts Payable
description: "Retrieve and create bills using the Sync for Payables API"
---

### Accounts payable

In Codat's API a [Bill](/sync-for-payables-api#/schemas/Bill) represents an invoice from a [supplier](/sync-for-payables-api#/schemas/Supplier), for this use case bills can be [retrieved](/sync-for-payables-api#/operations/list-bills) from the Sync for Payables API, or you can create bills within your platform and [post](https://docs.codat.io/sync-for-payables-api#/operations/create-bill) them to your customers' accounting software.

### Managing suppliers

In the Sync for Payables API, a [supplier](/sync-for-payables-api#/schemas/Supplier) represents a business or sole trader that provides goods or services to a company.

Suppliers are relevant for the bill pay use case as each bill is associated with a supplier - suppliers also have important information such as addresses and contact details which could be used to notify a supplier once a payment is made.

#### Retrieve a list of suppliers

You can get a [list of suppliers](/sync-for-payables-api#/operations/list-suppliers) using the Sync for Payables API

```http request
GET https://api.codat.io/companies/{companyId}/data/suppliers?page=1&pageSize=100
```

query parameters can also be used to narrow the list of suppliers e.g.
- `status=Active` returns only active suppliers
- `defaultCurrency=USD` returns suppliers that provide goods or services in dollars
- `supplierName=Acme` returns suppliers with a name that matches the query

:::tip Supplier Balances
Currently, the Sync for Payables API does not expose supplier balances on the supplier endpoint, however, you can access these by
- Aggregating bills by supplier
- Using the [Aged debtors](/sync-for-payables-api#/operations/get-aged-debtors-report) report
:::

#### Creating a new supplier

In some cases, a company may do business with a new supplier for the first time, when this happens you should [create the supplier](/sync-for-payables-api#/operations/create-supplier) first before creating a bill against the supplier.

```http request
POST https://api.codat.io/companies/{companyId}/connections/{connectionId}/push/suppliers
```

#### Updating a supplier

If a supplier changes address or business name, you may want to reflect this change in the company's accounting software by [updating the supplier](/sync-for-payables-api#/operations/put-supplier).

```http request
PUT https://api.codat.io/companies/{companyId}/connections/{connectionId}/push/suppliers/{supplierId}
```

### Bills

Bills can either be created in the company's accounting software and then queried through the Sync for Payables API, or bills can be created in your application and then posted to the company's accounting software.

#### Get a list of bills

You can [get a list of bills](/sync-for-payables-api#/operations/list-bills) for a company from the Sync for Payables API

```http request
GET https://api.codat.io/companies/{companyId}/data/bills?page=1&pageSize=100
```

Query parameters can be used to filter and narrow the returned results e.g.
- `supplierRef.supplierName=acme inc` returns only bills associated to the specified supplier
- `dueDate>2023-06-01&&dueDate<2023-06-30` returns only bills due for payment between June 1st and June 30th
- `amountDue>0` returns only outstanding bills with due amounts

You can also retrieve any associated [attachments](/sync-for-payables-api#/operations/download-bill-attachment) for a given bill such as a pdf copy of the invoice issued by the supplier.

#### Create a bill

You can also [create a new bill](/sync-for-payables-api#/operations/create-bill) in your company's accounting software to represent goods or services purchased from a supplier.

```http request
POST https://api.codat.io/companies/{companyId}/connections/{connectionId}/push/bills
```

#### Upload a copy of the invoice

In some cases where a bill is being created in your application, the company may also want to save a copy of the pdf invoice against the bill in their accounting software. This can be supported via the [bill attachments endpoint](/sync-for-payables-api#/operations/upload-bill-attachments)

```http request
POST https://api.codat.io/companies/{companyId}/connections/{connectionId}/push/bills/{billId}/attachments
```

---

## Read next

- [Payment mapping](/usecases/bill-pay/mapping) - Enable SMBs to choose how to make payments
