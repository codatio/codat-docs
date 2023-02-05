---
title: "Bills"
description: "An itemized record of goods or services purchased from a supplier"
createdAt: "2019-02-19T12:43:11.520Z"
updatedAt: "2022-11-16T09:31:15.849Z"
---

:::info Invoices or bills?

In Codat, bills are for accounts payable only. For the accounts receivable equivalent of bills, see [Invoices](https://docs.codat.io/docs/datamodel-accounting-invoices).
:::

Explore the <a className="external" href="https://api.codat.io/swagger/index.html#/Bills" target="_blank">Bills</a> endpoints in Swagger.

View the coverage for bills in the <a className="external" href="https://knowledge.codat.io/supported-features/accounting?view=tab-by-data-type&dataType=bills" target="_blank">Data coverage explorer</a>.

## Overview

In Codat, a bill contains details of:

- When the bill was recorded in the accounting system.
- How much the bill is for and the currency of the amount.
- Who the bill was received from — the _supplier_.
- What the bill is for — the _line items_.

Some accounting platforms give a separate name to purchases where the payment is made immediately, such as something bought with a credit card or online payment. One example of this would be QuickBooks Online's _expenses_.

You can find these types of transactions in our [Direct costs](https://docs.codat.io/docs/datamodel-accounting-directcosts) data model.

## Data model

[block:parameters]
{
"data": {
"h-0": "Field",
"h-1": "Type",
"h-2": "Description",
"0-0": "**id** ",
"0-1": "_string_",
"0-2": "Identifier for the bill, unique for the [company](https://docs.codat.io/docs/datamodel-accounting-company) in the accounting platform.",
"1-0": "**reference** ",
"1-1": "_string_",
"2-0": "**supplierRef** ",
"4-0": "**issueDate** ",
"5-0": "**dueDate** ",
"9-0": "**status**",
"10-0": "**subTotal** ",
"11-0": "**taxAmount** ",
"12-0": "**totalAmount** ",
"13-0": "**amountDue** ",
"14-0": "**modifiedDate**",
"1-2": "User-friendly reference for the bill.",
"2-1": "_[reference type](https://docs.codat.io/docs/datamodel-accounting-referencetypes)_",
"2-2": "Reference to the [supplier](https://docs.codat.io/docs/datamodel-accounting-suppliers) the bill was received from.",
"4-1": "_string_
See [date](https://docs.codat.io/docs/datamodel-shared-date)",
"5-1": "_string_
See [date](https://docs.codat.io/docs/datamodel-shared-date)",
"9-1": "_string_",
"9-2": "Current state of the bill, either:

- `Draft` — Bill is yet to be authorized and will not be used in any reports. It may contain incomplete line items. Not all platforms allow bills to be saved as draft, and may instead always appear initially as `Open`.

- `Open` — Bill is no longer a draft. For example, it may have been approved by a company's accounting or finance team. In this state, it will impact the ledger. It also has no payments made against it (**amountDue** == **totalAmount**).

- `PartiallyPaid` — The balance paid against the bill is positive, but less than the total bill amount (0 < **amountDue** < **totalAmount**).

- `Paid` — Bill is paid in full. This includes if the bill has been credited or overpaid. (**amountDue** == 0).

- `Void` — A Bill can become `Void` by being deleted, refunded, written off, or cancelled. A voided bill may still be partially paid and so all outstanding amounts on voided bills are removed from the accounts payable account.

- `Unknown`",
  "4-2": "Date of the bill as recorded in the accounting platform.",
  "5-2": "Date the supplier is due to be paid.",
  "10-1": "_decimal_",
  "10-2": "Total amount of the bill, excluding any taxes.",
  "11-1": "_decimal_",
  "11-2": "Amount of tax on the bill.",
  "12-1": "_decimal_",
  "12-2": "Amount of the bill, including tax.",
  "13-1": "_decimal_",
  "13-2": "Amount outstanding on the bill.",
  "14-1": "_string_
  See [date](https://docs.codat.io/docs/datamodel-shared-date)",
  "14-2": "Date the record was last updated in the Codat system.",
  "16-0": "**note** ",
  "16-1": "_string_ ",
  "16-2": "Any private, company notes about the bill, such as payment information.",
  "3-0": "**purchaseOrderRefs** ",
  "3-1": "_array_ ",
  "3-2": "List of references to the purchase orders for which the bill was issued.",
  "6-0": "**currency**",
  "6-1": "_string_
  See [currency](https://docs.codat.io/docs/datamodel-shared-currency)",
  "6-2": "Currency of the bill.",
  "7-0": "**currencyRate**",
  "7-1": "_decimal_
  See [currency rate](https://docs.codat.io/docs/datamodel-shared-currencyrate)",
  "7-2": "Rate for converting the total amount of the bill into the base currency for the [company](https://docs.codat.io/docs/datamodel-accounting-company).",
  "8-0": "**lineItems**",
  "8-2": "Array of [BillLineItems](#section-line-items).",
  "15-0": "**sourceModifiedDate**",
  "15-1": "_string_
  See [date](https://docs.codat.io/docs/datamodel-shared-date)",
  "15-2": "Date the record was last changed in the accounting system.",
  "8-1": "_array_ ",
  "17-0": "**paymentAllocations**",
  "17-1": "_array_",
  "17-2": "An array of [paymentAllocations](datamodel-accounting-bills#section-payment-allocations)."
  },
  "cols": 3,
  "rows": 18
  }
  [/block.

### Line items

[block:parameters]
{
"data": {
"h-0": "Field",
"h-1": "Type",
"h-2": "Description",
"0-0": "**description** ",
"0-1": "_string_",
"1-0": "**unitAmount** ",
"2-0": "**quantity** ",
"3-0": "**discountAmount** ",
"4-0": "**subTotal** ",
"5-0": "**taxAmount** ",
"6-0": "**totalAmount** ",
"7-0": "**accountRef** ",
"8-0": "**discountPercentage** ",
"9-0": "**taxRateRef** ",
"0-2": "Friendly name of the goods or services received.",
"1-1": "_decimal_",
"1-2": "Price of each unit of goods or services.",
"2-1": "_decimal_",
"2-2": "Number of units of goods or services received.",
"3-1": "_decimal_",
"3-2": "Numerical value of any discounts applied.

Do not use to apply discounts in Oracle NetSuite—see [Oracle NetSuite integration reference](https://docs.codat.io/docs/oracle-netsuite-integration-reference).",
"4-2": "Amount of the line, inclusive of discounts but exclusive of tax.",
"4-1": "_decimal_",
"5-1": "_decimal_",
"5-2": "Amount of tax for the line.",
"6-1": "_decimal_",
"6-2": "Total amount of the line, including tax.",
"7-1": "[Reference type](https://docs.codat.io/docs/datamodel-accounting-referencetypes)",
"7-2": "Reference to the [account](https://docs.codat.io/docs/datamodel-accounting-chartofaccounts) to which the line item is linked.",
"8-1": "_decimal_",
"8-2": "Percentage rate (from 0 to 100) of any discounts applied to the unit amount.

Do not use to apply discounts in Oracle NetSuite—see [Oracle NetSuite integration reference](https://docs.codat.io/docs/oracle-netsuite-integration-reference).",
"9-1": "[Reference type](https://docs.codat.io/docs/datamodel-accounting-referencetypes#section-taxrateref)",
"9-2": "Reference to the [tax rate](https://docs.codat.io/docs/datamodel-accounting-taxrates) to which the line item is linked.",
"10-0": "**itemRef** ",
"10-1": "[Reference type](https://docs.codat.io/docs/datamodel-accounting-referencetypes#section-itemref)",
"10-2": "Reference to the product, service type, or inventory item to which the line item is linked.",
"11-0": "**trackingCategoryRefs**",
"11-2": "Collection of [categories ](https://docs.codat.io/docs/datamodel-accounting-trackingcategories) against which this item is tracked.",
"11-1": "_array_ "
},
"cols": 3,
"rows": 12
}
[/block]

[block:callout]
{
"type": "info

[block:callout]
{
"type": "info

:::caution Requirements for reference fields
The reference fields **supplierRef**, **accountRef**, and **taxRateRef** are only populated if the corresponding data type has been synchronized. If you see null values for these fields, please complete a new sync for the corresponding data type. For example, sync the suppliers data type for [supplierRef](https://docs.codat.io/docs/datamodel-accounting-referencetypes#supplierref).
:::

### Payment allocations

[block:parameters]
{
"data": {
"h-0": "Field",
"h-1": "Type",
"h-2": "Description",
"0-0": "payment",
"1-0": "**id**",
"2-0": "**note**",
"3-0": "**reference**",
"4-0": "**accountRef**",
"5-0": "**currency**",
"6-0": "**currencyRate**",
"7-0": "**paidOnDate**",
"8-0": "**totalAmount**",
"9-0": "allocation",
"10-0": "**currency**",
"11-0": "**currencyRate**",
"12-0": "**allocatedOnDate**",
"13-0": "**totalAmount**",
"1-1": "_string_",
"2-1": "_string_",
"3-1": "_string_",
"4-1": "[_Reference type_](https://docs.codat.io/docs/datamodel-accounting-referencetypes#section-accountref)",
"5-1": "_string_
See [currency](https://docs.codat.io/docs/datamodel-shared-currency)",
"6-1": "_decimal_
See [currency rate](https://docs.codat.io/docs/datamodel-shared-currencyrate)",
"7-1": "_string_
See [date](https://docs.codat.io/docs/datamodel-shared-date)",
"8-1": "_decimal_",
"10-1": "_string_
See [currency](https://docs.codat.io/docs/datamodel-shared-currency)",
"11-1": "_number_
See [currency rate](https://docs.codat.io/docs/datamodel-shared-currencyrate)",
"12-1": "_string_
See [date](https://docs.codat.io/docs/datamodel-shared-date)",
"13-1": "_decimal_",
"1-2": "Identifier of the allocated payment.",
"2-2": "Notes attached to the allocated payment.",
"3-2": "Reference to the allocated payment.",
"4-2": "The account that the allocated payment is made from or to.",
"5-2": "Currency the payment has been made in.",
"6-2": "Conversion rate between the currency of the allocated payment and the currency of the company.",
"7-2": "The date the payment was paid.",
"8-2": "Total amount that was paid.",
"10-2": "The currency of the transaction.",
"11-2": "The conversion rate between the currency of the allocated payment and the currency of the transaction.",
"12-2": "The date the payment was allocated.",
"13-2": "The total amount that has been allocated."
},
"cols": 3,
"rows": 14
}
[/block]

## Example data

```
"results": [
  {
    "id": "f64ac382-14b6-4850-b5c3-0fe848342b1d",
    "reference": "57120",
    "supplierRef": {
      "id": "21C99A58-7565-4DC8-8FDF-BA7DF5280F25",
      "supplierName": "EDD"
    },
    "purchaseOrderRefs":  [
        {
      "id": "string",
      "purchaseOrderNumber": "string"
        }
      ]
    },
    "issueDate": "2020-04-18T00:00:00",
    "dueDate": "2021-08-07T00:00:00",
    "currency": "GBP",
    "currencyRate": 1,
    "lineItems": [
      {
        "description": "10,000 Lb anvil bought",
        "unitAmount": 45,
        "quantity": 2,
        "discountAmount": 0,
        "subTotal": 90,
        "taxAmount": 9,
        "totalAmount": 99,
        "accountRef": {
          "id": "13931cbf-ea06-4d6e-9538-a8457fa66011",
          "name": "Cost of Goods Sold"
        },
        "discountPercentage": 0,
        "taxRateRef": {
          "id": "6c88aff3-7cb9-4980-a3d3-443e72e02498",
          "name": "ACME Sales Tax (10%)",
          "effectiveTaxRate": 10
        },
        "itemRef": {
          "id": "1",
          "name": "Anvil (10,000lb)"
        },
        "trackingCategoryRefs": []
      },
      {
        "description": "10,000 Lb anvil bought",
        "unitAmount": 45,
        "quantity": 4,
        "discountAmount": 0,
        "subTotal": 180,
        "taxAmount": 18,
        "totalAmount": 198,
        "accountRef": {
          "id": "13931cbf-ea06-4d6e-9538-a8457fa66011",
          "name": "Cost of Goods Sold"
        },
        "discountPercentage": 0,
        "taxRateRef": {
          "id": "6c88aff3-7cb9-4980-a3d3-443e72e02498",
          "name": "ACME Sales Tax (10%)",
          "effectiveTaxRate": 10
        },
        "itemRef": {
          "id": "1",
          "name": "Anvil (10,000lb)"
        },
        "trackingCategoryRefs": []
      }
    ],
    "status": "Paid",
    "subTotal": 270,
    "taxAmount": 27,
    "totalAmount": 297,
    "amountDue": 0,
    "modifiedDate": "2021-04-08T09:15:56Z",
    "sourceModifiedDate": "2021-01-29T22:42:20",
    "note": "bill with 2 line items, totalling 297",
    "paymentAllocations": [
      {
        "payment": {
          "id": "ee9f6363-d6fd-4bb5-87e6-10d0d1bba6af",
          "note": "Bill Payment against bill",
          "accountRef": {
            "id": "dbcaf288-2b39-4b95-8ab3-42202ab15918",
            "name": "Business Current Account"
          },
          "currency": "GBP",
          "currencyRate": 1,
          "paidOnDate": "2020-10-18T00:00:00",
          "totalAmount": 297
        },
        "allocation": {
          "currency": "GBP",
          "currencyRate": 1,
          "allocatedOnDate": "2021-02-13T00:00:00",
          "totalAmount": -297
        }
      }
    ]
  }
```
