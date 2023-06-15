---
title: "QuickBooks Online integration reference"
description: "Things to know when synchronizing data with QuickBooks Online."
sidebar_label: Reference
---

Note the following information when building your application using our QuickBooks Online integration.

## Direct Incomes

Direct Incomes includes Sales Receipts and Refund Receipts from QuickBooks Online.

When pushing Direct Incomes to QuickBooks Online, you must enter Sales Receipts as positive amounts and Refund Receipts as negative amounts.

## Invoice Line Items

When pushing an Invoice to QBO, you can create line items without referring to existing items in QBO. However, if you do not specify an existing item with an existing `itemID` for the invoice line item, Codat uses the _Default Item_ that is set for the company. This will also use the default `AccountRef` associated with the Default Item.

## Payment Methods

When pulling Payment Methods from QuickBooks Online, the Payment Method `type` is always `Unknown`.

## Field coverage for supported data types

Codat's data model supports a wide range of fields within each data type.

Sometimes a provider's API does not grant access to a field that exists in a Codat data type. Conversely, our data model sometimes does not support all the relevant fields on an object in a provider's API.

The following table highlights selected fields that are not available in data pulled and pushed from QuickBooks Online.

### Unavailable provider fields

| Codat data type and field | Status                                                      |
| :------------------------ | :---------------------------------------------------------- |
| Bank Transactions         | Bank account number is not available in the provider's API. |

:::caution Item bundles in QBO

_Item bundles_ in QuickBooks Online are supported for Direct Incomes, Invoices, and Credit Notes only.
:::
