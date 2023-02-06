---
title: "Reference types"
description: "Accounting reference types link between data types in the Codat accounting data model"
createdAt: "2019-02-19T11:26:11.465Z"
updatedAt: "2022-11-22T11:47:31.000Z"
---

For commerce reference types, see [Reference types](/datamodel-commerce-referencetypes) in the Commerce section.

## accountRef

Links to the [Accounts](/datamodel-accounting-chartofaccounts) data type.

:::note Financial Reports
Profit & Loss and Balance Sheet reports do not have an `accountRef` object but do have an `accountId` field on each line which can be used to link to the `accounts` data type.
:::

Found on:

- [Bill](/datamodel-accounting-bills) line items
- [Invoice](/datamodel-accounting-invoices) line items
- [Journal entries](/datamodel-accounting-journalentries)
- [Payments](/datamodel-accounting-payments)

```json
"accountRef": {
   "id": "string",  // 'id' from the Accounts data type
   "name": "string" // 'name' from the Accounts data type
}
```

## bankAccountRef

Links to the [Account transactions](/datamodel-accounting-account-transactions) data type.

```json
"bankAccountRef": {
     "id": "35",           // bank account ID for the account transaction
     "name": "Checking"    // bank account name for the account transaction
},
```

## contactRef

Links to the [Customers](/datamodel-accounting-customers) and [Suppliers](/datamodel-accounting-suppliers) data types.

Found on:

- [Direct costs](/datamodel-accounting-directcosts)
- [Direct incomes](/datamodel-accounting-directincomes)
- [Transfers](/datamodel-accounting-transfers)

```json
"contactRef": {
	"id": "ddcf351f-c931-46fb-b6d9-e53cbf238847",
	"dataType": "customers"
},
```

## customerRef

Links to the [Customers](/datamodel-accounting-customers) data type.

Found on:

- [Invoices](/datamodel-accounting-invoices)
- [Credit notes](/datamodel-accounting-creditnotes)
- [Payments](/datamodel-accounting-payments)

```json
"customerRef": {
    "id": "string",         // 'id' from the 'customers' data type
    "companyName": "string" // 'customerName' from the 'customer' data type
}
```

## itemRef

Links to the [Items](/datamodel-accounting-items) data type.

Found on:

- [Invoices](/datamodel-accounting-invoices)
- [Bills](/datamodel-accounting-bills)

```json
"itemRef": {
    "id": "string",  // 'id' from the 'items' data type
    "name": "string" // 'name' from the 'items' data type
}
```

## journalRef

Links [journal entries](/datamodel-accounting-journalentries) to the relevant [journal](/journals) in accounting integrations that use multi-book accounting (multiple journals).

```json
"journalRef": {
   "id": "string", // GUID of the underlying journal
   "name": "string" // Journal name, 256 characters max
}
```

## paymentMethodRef

Links to the [Payment Method](/datamodel-accounting-paymentmethods) data type.

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

- [Journal entries](/datamodel-accounting-journalentries)
- [Account transactions](/datamodel-accounting-account-transactions)
- [Invoices](/datamodel-accounting-invoices)
- [Transfers](/datamodel-accounting-transfers)

```json
"recordRef": {
    "id": "string",      // 'id' of the underlying record or data type
    "dataType": "string" // Name of the 'dataType'
}
```

## supplierRef

Links to the [Suppliers](/datamodel-accounting-suppliers) data type.

Found on:

- [Bills](/datamodel-accounting-bills)
- [Bill payments](/datamodel-accounting-billpayments)

```json
"supplierRef": {
    "id": "string",          // 'id' from the 'suppliers' data type
    "supplierName": "string" // 'supplierName' from the 'suppliers' data type
}
```

## taxRateRef

Links to the [Tax Rates](/datamodel-accounting-taxrates) data type.

Found on:

- [Bill](/datamodel-accounting-bills) line items
- [Bill Credit Note](/datamodel-accounting-billcreditnotes) line items
- [Credit Note](/datamodel-accounting-creditnotes) line items
- [Direct incomes](/datamodel-accounting-directincomes) line items
- [Invoice](/datamodel-accounting-invoices) line items
- [Items](/datamodel-accounting-items)

```json
"taxRateRef": {
    "id": "string",  // 'id' from the 'taxRates' data type
    "name": "string", // 'name' from the 'taxRates' data type
    "effectiveTaxRate": "decimal" // applicable tax rate
}
```

## trackingCategoryRef

Links to the [Tracking Categories](/datamodel-accounting-trackingcategories) data type.

Found on:

- [Bill credit notes](/datamodel-accounting-billcreditnotes)
- [Bills](/datamodel-accounting-bills)
- [Invoices](/datamodel-accounting-invoices)
- [Purchase orders](/datamodel-accounting-purchaseorders)

```json
"trackingCategoryRef": {
    "id": "string",  // 'id' from the 'trackingCategories' data type
    "name": "string" // 'name' from the 'trackingCategories' data type
}
```
