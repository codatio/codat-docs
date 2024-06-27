---
title: "QuickBooks Online integration reference"
description: "Things to know when synchronizing data with QuickBooks Online"
sidebar_label: Reference
---

Note the following information when building your application using our QuickBooks Online integration.

## Direct Incomes

Direct Incomes includes Sales Receipts and Refund Receipts from QuickBooks Online.

When pushing Direct Incomes to QuickBooks Online, you must enter Sales Receipts as positive amounts and Refund Receipts as negative amounts.

## Direct Costs

When creating direct costs in QuickBooks Online for GB, FR, IE, CA, and AU locales, records with a tax amount specified on the line item will be classified as `Tax Exclusive`. Specifically for CA, if there are no tax amounts specified on any line items or all line items have a tax amount of zero, the expense will be pushed as `Out Of Scope Of Tax`.

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

## QBO app hosting

To access your production credentials in QuickBooks Online, you need to confirm where your app is hosted. Since Codat interacts directly with QBO, you need to include our IPs and hosting locations as well as your own (if applicable).

:::note Dynamic IPs
Our IPs are dynamic. The set of IPs included below is correct as of Q3 2024.
:::

**Country**: United Kingdom of Great Britain and Northern Ireland

| IP address type  | Start        | End            |
|------------------|--------------|----------------|
| IP address range | 20.77.152.0  | 20.77.153.255  |
| Single IP        | 51.104.28.73 |                |
| IP address range | 51.132.44.0  | 51.132.47.255  |
| IP address range | 51.132.155.0 | 51.132.159.255 |

## Attachments

When creating attachments, QuickBooks Online requires that the multipart/form-data request used to upload the files includes a `Content-Type` header. The header must be contained within each boundary-separated part of the request body. The header should be a MIME type that reflects the file type being uploaded. QBO will not accept `application/octet-stream` as the header value.

```http title="Example multipart/form-data with a Content-Type header"
--boundaryxxxxxxxxxxxxxxxxxxxxxxxxxxxx
Content-Disposition: form-data; name="test"; filename="test1.pdf"
Content-Type: application/pdf

 ## binary file data
--boundaryxxxxxxxxxxxxxxxxxxxxxxxxxxxx--
```
