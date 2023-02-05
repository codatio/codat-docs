---
title: "Reference types"
description: "Accounting reference types link between data types in the Codat accounting data model"
createdAt: "2019-02-19T11:26:11.465Z"
updatedAt: "2022-11-22T11:47:31.000Z"
---

For commerce reference types, see [Reference types](https://docs.codat.io/docs/datamodel-commerce-referencetypes) in the Commerce section.

## accountRef

Links to the [Accounts](https://docs.codat.io/docs/datamodel-accounting-chartofaccounts) data type.

:::note Financial Reports
Profit & Loss and Balance Sheet reports do not have an `accountRef` object but do have an `accountId` field on each line which can be used to link to the `accounts` data type.
:::

Found on:

- [Bill](https://docs.codat.io/docs/datamodel-accounting-bills) line items
- [Invoice](https://docs.codat.io/docs/datamodel-accounting-invoices) line items
- [Journal entries](https://docs.codat.io/docs/datamodel-accounting-journalentries)
- [Payments](https://docs.codat.io/docs/datamodel-accounting-payments)

```json
"accountRef": {
   "id": "string",  // 'id' from the Accounts data type
   "name": "string" // 'name' from the Accounts data type
}
```

## bankAccountRef

Links to the [Account transactions](https://docs.codat.io/docs/datamodel-accounting-account-transactions) data type.

```json
"bankAccountRef": {
     "id": "35",           // bank account ID for the account transaction
     "name": "Checking"    // bank account name for the account transaction
},
```

## contactRef

Links to the [Customers](https://docs.codat.io/docs/datamodel-accounting-customers) and [Suppliers](https://docs.codat.io/docs/datamodel-accounting-suppliers) data types.

Found on:

- [Direct costs](https://docs.codat.io/docs/datamodel-accounting-directcosts)
- [Direct incomes](https://docs.codat.io/docs/datamodel-accounting-directincomes)
- [Transfers](https://docs.codat.io/docs/datamodel-accounting-transfers)

```json
"contactRef": {
	"id": "ddcf351f-c931-46fb-b6d9-e53cbf238847",
	"dataType": "customers"
},
```

## customerRef

Links to the [Customers](https://docs.codat.io/docs/datamodel-accounting-customers) data type.

Found on:

- [Invoices](https://docs.codat.io/docs/datamodel-accounting-invoices)
- [Credit notes](https://docs.codat.io/docs/datamodel-accounting-creditnotes)
- [Payments](https://docs.codat.io/docs/datamodel-accounting-payments)

```json
"customerRef": {
    "id": "string",         // 'id' from the 'customers' data type
    "companyName": "string" // 'customerName' from the 'customer' data type
}
```

## itemRef

Links to the [Items](https://docs.codat.io/docs/datamodel-accounting-items) data type.

Found on:

- [Invoices](https://docs.codat.io/docs/datamodel-accounting-invoices)
- [Bills](https://docs.codat.io/docs/datamodel-accounting-bills)

```json
"itemRef": {
    "id": "string",  // 'id' from the 'items' data type
    "name": "string" // 'name' from the 'items' data type
}
```

## journalRef

Links [journal entries](https://docs.codat.io/docs/datamodel-accounting-journalentries) to the relevant [journal](https://docs.codat.io/docs/journals) in accounting integrations that use multi-book accounting (multiple journals).

```json
"journalRef": {
   "id": "string", // GUID of the underlying journal
   "name": "string" // Journal name, 256 characters max
}
```

## paymentMethodRef

Links to the [Payment Method](https://docs.codat.io/docs/datamodel-accounting-paymentmethods) data type.

Found on bill payments and payments.

```json
"paymentMethodRef": {
    "id": "string",  // 'id' from the 'paymentMethods' data type
    "name": "string" // 'name' from the 'paymentMethods' data type
}
```

## recordRef

Links to the underlying record or data type.

Found on:

- [Journal entries](https://docs.codat.io/docs/datamodel-accounting-journalentries)
- [Account transactions](https://docs.codat.io/docs/datamodel-accounting-account-transactions)
- [Invoices](https://docs.codat.io/docs/datamodel-accounting-invoices)
- [Transfers](https://docs.codat.io/docs/datamodel-accounting-transfers)

```json
"recordRef": {
    "id": "string",      // 'id' of the underlying record or data type
    "dataType": "string" // Name of the 'dataType'
}
```

## supplierRef

Links to the [Suppliers](https://docs.codat.io/docs/datamodel-accounting-suppliers) data type.

Found on:

- [Bills](https://docs.codat.io/docs/datamodel-accounting-bills)
- [Bill payments](https://docs.codat.io/docs/datamodel-accounting-billpayments)

```json
"supplierRef": {
    "id": "string",          // 'id' from the 'suppliers' data type
    "supplierName": "string" // 'supplierName' from the 'suppliers' data type
}
```

## taxRateRef

Links to the [Tax Rates](https://docs.codat.io/docs/datamodel-accounting-taxrates) data type.

Found on:

- [Bill](https://docs.codat.io/docs/datamodel-accounting-bills) line items
- [Bill Credit Note](https://docs.codat.io/docs/datamodel-accounting-billcreditnotes) line items
- [Credit Note](https://docs.codat.io/docs/datamodel-accounting-creditnotes) line items
- [Direct incomes](https://docs.codat.io/docs/datamodel-accounting-directincomes) line items
- [Invoice](https://docs.codat.io/docs/datamodel-accounting-invoices) line items
- [Items](https://docs.codat.io/docs/datamodel-accounting-items)

```json
"taxRateRef": {
    "id": "string",  // 'id' from the 'taxRates' data type
    "name": "string", // 'name' from the 'taxRates' data type
    "effectiveTaxRate": "decimal" // applicable tax rate
}
```

## trackingCategoryRef

Links to the [Tracking Categories](https://docs.codat.io/docs/datamodel-accounting-trackingcategories) data type.

Found on:

- [Bill credit notes](https://docs.codat.io/docs/datamodel-accounting-billcreditnotes)
- [Bills](https://docs.codat.io/docs/datamodel-accounting-bills)
- [Invoices](https://docs.codat.io/docs/datamodel-accounting-invoices)
- [Purchase orders](https://docs.codat.io/docs/datamodel-accounting-purchaseorders)

```json
"trackingCategoryRef": {
    "id": "string",  // 'id' from the 'trackingCategories' data type
    "name": "string" // 'name' from the 'trackingCategories' data type
}
```
