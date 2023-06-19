---
title: "Sage Intacct integration reference"
description: "Things to know when synchronizing data with Sage Intacct."
sidebar_label: Reference
---

Note the following information when building your application using Codat's Sage Intacct integration.

## Bill Credit Notes

Bill Credit Notes are mapped from the [AP Adjustments](https://developer.intacct.com/api/accounts-payable/ap-adjustments/) (debit memos) object in Sage Intacct.

To use the "Intacct Daily Rate" exchange rate when pushing a Bill Credit Note in a different currency, you must:

- Omit the `currencyRate` field from the request body.
- Specify the transaction currency in the `currency` field.

## Bill Payments

Bill Payments are mapped from the [AP Payments](https://developer.intacct.com/api/accounts-payable/ap-payments/) object in Sage Intacct.

### Currencies in Bill payments

If you don't provide a `currency` in the push request body of a Bill payment, it's set to the default bill payment currency in Sage Intacct. This is the currency of the account to which the bill payment is linked.

This might cause unexpected behavior if the bill being paid off is in a different currency to the account in Sage Intacct.

### Pushing unapproved Bill Payments to Sage Intacct

In Sage Intacct it's possible to configure whether approval for Bill Payments is required. By default, payments that are _not_ approved are not included in the Bill Payments dataset when pulling from Sage Intacct.

If a Bill Payment that requires approval is pushed to Sage Intacct, the push succeeds and the Bill Payment is added to the dataset in Codat. However, if the Bill Payment is not approved before the next pull, it is removed from the dataset at this point.

This information is shown as a warning on the completed push operation when pushing unapproved Bill Payments to Sage Intacct.

## Customers

When pulling and pushing Customers, only the _primary contact_ associated with the Customer in Sage Intacct is available.

## Credit Notes

Credit Notes are mapped from the [AR Adjustments](https://developer.intacct.com/api/accounts-receivable/ar-adjustments/) (credit memos) object in Sage Intacct.

To use the "Intacct Daily Rate" exchange rate when pushing a Credit Note in a different currency, you must:

- Omit the `currencyRate` field from the request body.
- Specify the transaction currency in the `currency` field.

Negative invoices are pulled from Sage Intacct as Credit Notes.

## Direct Incomes

Direct Incomes are mapped from the [Other Receipts](https://developer.intacct.com/api/cash-management/other-receipts/#create-other-receipt-legacy) object in Sage Intacct. Direct Incomes does not include _earned interest_, which is represented in the [Bank Interest Income / Charges](https://developer.intacct.com/api/cash-management/bank-interest-charges/) object, because there is no `POST` method to create these objects.

When pushing Direct Incomes to Sage Intacct, the required `otherreceipt.payee` field is populated with the value of `directIncomes.reference`. The `otherreceipt.payee` field is not associated with a customer or contact.

## Invoices

Pushing negative invoices to Sage Intacct is not supported; you can push a Credit Note to achieve this functionality.

You can push invoices to Sage Intact as either [Invoices](https://developer.intacct.com/api/accounts-receivable/invoices/#create-invoice-legacy) or [Sales Invoices](https://developer.intacct.com/api/order-entry/order-entry-transactions/#create-order-entry-transaction-legacy).

- To push a Sales Invoice, specify an item ID in the `lineItems.itemRef.id` field.
- To push an Invoice, _do not_ specify an item ID in the `lineItems.itemRef.id` field.

You can't push an Invoice if Item IDs are defined for some line items but not for others.

Note that _vendor invoices_ in Sage Intact are mapped to Bills.

### Auto-sequencing

When pushing invoices, _auto-sequencing_ in Sage Intacct's AR configuration affects how the invoices are numbered.

- If auto-sequencing is turned on, Sage Intacct overrides any values in the `invoiceNumber` field with auto-sequenced values.
- If auto-sequencing is turned off, you must enter a value for `invoiceNumber` or an error is returned.

### Invoice currencies

To push an invoice in the base currency, leave the `currency` and `currencyRate` fields blank.

To push an invoice in a different currency using a custom exchange rate, set the `currency` to the desired currency and the `currencyRate` to a numeric value (rate).

To use the "Intacct Daily Rate" exchange rate, you must:

- Specify the transaction currency in the `currency` field.
- Leave the `currencyRate` field blank.

### Invoice tax rates

Sage Intacct does not accept invoices where one or more lines do not have a tax rate specified. Codat supports pushing single tax rates per line item. Sales Invoice lines cannot have a tax rate.

### Sales Invoice Units

All Sales Invoice Item Lines are pushed to Sage Intacct with `Unit` values of `Each`. As a result, only Items with `Unit of Measure=Count` can be created in Sage Intacct. (Unit values of `Each`, `Pair`, and `Dozen` are not supported.)

### Invoice PDFs

Sage Intacct can only generate attachment PDFs for 'Order Entity' type invoices. If the `pdf` endpoint for a different type of invoice is called, Codat returns a 404 error because is no document associated with those invoices.

## Payments

To push payments to Sage Intacct, _Automatic Payment Summaries_ must be configured.

Pulling a payment against a specific line item of an invoice or debit memo is not supported. Pushing a payment to a specific line item of an invoice is not supported.

### Refunds

Pushing payment refunds is not currently supported because of a limitation in the underlying provider's API.

## Transfers

Reversal transactions for voided transfers are positive amounts in Codat and have a `status` of `void`.

## Attachments

To push attachments to Sage Intacct, you must provide the following two form parameters as part of your request:

- `file`: The file that you're uploading.
- `attachment`: A JSON object containing information about how Sage Intacct should store the uploaded file.
  - `id`: This is displayed in the Sage Intacct UI.
  - `name`: The folder or subfolder in which to store the file.

Example of a successful request in curl:

```curl
--location --request POST 'https://api.codat.io/companies/{CompanyID}/connections/{ConnectionID}/push/directCosts/{DirectCostId}/attachment' \
--header 'Authorization: Basic {Token}' \
--form 'file=@"/C:/{FileLocation}/{FileToUpload}"' \
--form 'attachment="{"id":"ID", "name":"Folder/SubFolder"}"'
```

## Field coverage for supported data types

Codat's data model supports a wide range of fields within each data type.

Sometimes a provider's API does not grant access to a field that exists in a Codat data type. Conversely, our data model sometimes does not support all the relevant fields on an object in a provider's API.

The following table highlights selected fields that are not available in data pulled and pushed from Sage Intacct.

### Unavailable provider fields

|Codat data type and field|Status|
|----|----|
|`creditNotes.discountPercentage`|Not available in the provider's API.|


### Unavailable Codat fields

|Sage Intacct record and field|Codat data type|Status|
|----|----|----|
|`otherreceipt.paymentmethod` (Required)|[Direct Incomes](/accounting-api#/directincomes)|[Payment methods](/accounting-api#/paymentmethods) is not supported for the direct incomes data type. When pushing direct incomes to Sage Intacct, the `paymentmethod` is always set to `Cash`.|

