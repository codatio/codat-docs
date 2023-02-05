---
title: "Bill credit notes"
description: "A supplier issues a bill credit note to their customer to record a credit"
createdAt: "2020-01-22T02:14:17.533Z"
updatedAt: "2022-11-16T09:31:27.099Z"
---

:::info Bill credit notes or credit notes?
In Codat, bill credit notes represent accounts payable only. For accounts receivable, see [Credit notes](https://docs.codat.io/docs/datamodel-accounting-creditnotes).
:::

Explore the <a className="external" href="https://api.codat.io/swagger/index.html#/BillCreditNotes" target="_blank">Bill Credit Notes</a> endpoints in Swagger.

View the coverage for bill credit notes in the <a className="external" href="https://knowledge.codat.io/supported-features/accounting?view=tab-by-data-type&dataType=billCreditNotes" target="_blank">Data coverage explorer</a>.

## Overview

A bill credit note is issued by a supplier for the purpose of recording credit. For example, if a supplier was unable to fulfil an order that was placed by a business, or delivered damaged goods, they would issue a bill credit note. A bill credit note reduces the amount a business owes to the supplier. It can be refunded to the business or used to pay off future bills.

In the Codat API, a bill credit note is an accounts payable record issued by a [supplier](https://docs.codat.io/docs/datamodel-accounting-suppliers).

A bill credit note includes details of:

- The original and remaining credit.
- Any allocations of the credit against other records, such as [bills](https://docs.codat.io/docs/datamodel-accounting-bills).
- The supplier that issued the bill credit note.

## Data model

[block:parameters]
{
"data": {
"h-0": "Field",
"h-1": "Type",
"h-2": "Description",
"0-0": "**id** ",
"1-0": "**billCreditNoteNumber** ",
"2-0": "**supplierRef** ",
"3-0": "**totalAmount** ",
"13-0": "**currencyRate** ",
"15-0": "**paymentAllocations** ",
"16-0": "**modifiedDate** ",
"2-2": "[Supplier](https://docs.codat.io/docs/datamodel-accounting-suppliers) that issued the bill credit note.",
"3-1": "_decimal_",
"13-1": "_decimal_
See [currency rate](https://docs.codat.io/docs/datamodel-shared-currencyrate)",
"0-1": "_string_ ",
"1-1": "_string_",
"15-2": "An array of [CreditNotePaymentAllocations](#section-payment-allocations).",
"16-1": "_string_
See [date](https://docs.codat.io/docs/datamodel-shared-date)",
"0-2": "Identifier for the bill credit note that is unique to a [company](https://docs.codat.io/docs/datamodel-accounting-company) in the accounting platform.",
"1-2": "Friendly reference for the bill credit note.",
"3-2": "Total amount of credit that has been applied to the business' account with the [supplier](https://docs.codat.io/docs/datamodel-accounting-suppliers), including discounts and tax.",
"2-1": "_[reference type](https://docs.codat.io/docs/datamodel-accounting-referencetypes)_",
"13-2": "Conversion rate between the currency of the bill credit note and the base currency of the [company](https://docs.codat.io/docs/datamodel-accounting-company).",
"17-0": "**sourceModifiedDate** ",
"17-1": "_string_
See [date](https://docs.codat.io/docs/datamodel-shared-date)",
"16-2": "Date the record was last updated in the Codat system.",
"17-2": "Date the record was last updated in the accounting system.",
"14-0": "**lineItems** ",
"14-2": "An array of [BillCreditNoteLineItems](#section-line-items).",
"4-0": "**totalDiscount** ",
"4-1": "_decimal_",
"4-2": "Total value of any discounts applied.",
"5-0": "**subTotal** ",
"5-1": "_decimal_",
"5-2": "Total amount of the bill credit note, including discounts but excluding tax.",
"6-0": "**totalTaxAmount** ",
"6-1": "_decimal_",
"6-2": "Amount of tax included in the bill credit note.",
"7-0": "**discountPercentage** ",
"7-1": "_decimal_",
"7-2": "Percentage rate of any discount applied to the bill credit note.",
"8-0": "**remainingCredit** ",
"8-1": "_decimal_",
"8-2": "Amount of the bill credit note that is still outstanding.",
"9-0": "**status** ",
"9-1": "_string_",
"9-2": "Current state of the bill credit note, either:

- `Draft` - Not yet confirmed in the accounting system

- `Submitted` - Confirmed and with an outstanding balance

- `Paid` - Allocated or refunded in full

- `PartiallyPaid` - Allocated or refunded in part

- `Void` - Invalid or void

- `Unknown`",
  "10-0": "**issueDate** ",
  "10-1": "_string_
  See [date](https://docs.codat.io/docs/datamodel-shared-date)",
  "10-2": "Date the bill credit note was issued by the [supplier](https://docs.codat.io/docs/datamodel-accounting-suppliers).",
  "11-0": "**allocatedOnDate** ",
  "11-1": "_string_
  See [date](https://docs.codat.io/docs/datamodel-shared-date)",
  "11-2": "Date the bill credit note was fully refunded or allocated.",
  "12-0": "**currency** ",
  "12-1": "_string_
  See [currency](https://docs.codat.io/docs/datamodel-shared-currency)",
  "12-2": "Currency of the bill credit note.",
  "18-0": "**note** ",
  "18-1": "_string_",
  "18-2": "Any additional information about the bill credit note."
  },
  "cols": 3,
  "rows": 19
  }
  [/block.

### Line items

Details of each line of the bill credit note.
[block:parameters]
{
"data": {
"h-0": "Field",
"h-1": "Type",
"h-2": "Description",
"0-0": "**description** ",
"1-0": "**unitAmount** ",
"3-0": "**discountAmount** ",
"0-1": "_string_",
"1-1": "_decimal_",
"3-1": "_decimal_",
"0-2": "Friendly name of each line item. For example, the goods or service for which credit has been received.",
"1-2": "Unit price of the goods or service.",
"3-2": "Value of any discounts applied.",
"2-0": "**quantity** ",
"2-1": "_decimal_",
"2-2": "Number of units of the goods or service for which credit has been received.",
"4-0": "**subTotal** ",
"4-1": "_decimal_",
"4-2": "Amount of credit associated with the line item, including discounts but excluding tax.",
"5-0": "**taxAmount** ",
"5-1": "_decimal_",
"5-2": "Amount of tax associated with the line item.",
"6-0": "**totalAmount** ",
"6-1": "_decimal_",
"6-2": "Total amount of the line item, including discounts and tax.",
"8-0": "**discountPercentage** ",
"8-1": "_decimal_",
"8-2": "Percentage rate of any discount applied to the line item.",
"9-0": "**taxRateRef** ",
"9-1": "_[reference type](https://docs.codat.io/docs/datamodel-accounting-referencetypes#section-taxrateref)_",
"9-2": "Reference to the [tax rate](https://docs.codat.io/docs/datamodel-accounting-taxrates) to which the line item is linked.",
"10-0": "**itemRef** ",
"10-1": "_[reference type](https://docs.codat.io/docs/datamodel-accounting-referencetypes#section-itemref)_",
"10-2": "Reference to the [item](https://docs.codat.io/docs/datamodel-accounting-items) the line is linked to.",
"11-0": "**trackingCategoryRefs** ",
"11-1": "_[reference type](https://docs.codat.io/docs/datamodel-accounting-referencetypes#section-trackingCategoryRef)_",
"11-2": "Reference to the [tracking categories](https://docs.codat.io/docs/datamodel-accounting-trackingcategories) to which the line item is linked.",
"7-0": "**accountRef** ",
"7-1": "_[reference type](https://docs.codat.io/docs/datamodel-accounting-referencetypes#section-accountref)_",
"7-2": "Reference to the [account](https://docs.codat.io/docs/datamodel-accounting-chartofaccounts) to which the line item is linked."
},
"cols": 3,
"rows": 12
}
[/block.

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
"11-1": "_decimal_
See [currency rate](https://docs.codat.io/docs/datamodel-shared-currencyrate)",
"12-1": "_string_
See [date](https://docs.codat.io/docs/datamodel-shared-date)",
"10-1": "_string_
See [currency](https://docs.codat.io/docs/datamodel-shared-currency)",
"7-1": "_string_
See [date](https://docs.codat.io/docs/datamodel-shared-date)",
"8-1": "_decimal_",
"13-1": "_decimal_"
},
"cols": 3,
"rows": 14
}
[/block]

:::caution Requirements for reference fields

The reference fields **customerRef**, **accountRef**, and **taxRateRef** are only populated if the corresponding data type has been synchronised. If you see null values for these fields, please complete a new sync for the corresponding data type. For example, sync the customers data type for [customerRef](https://docs.codat.io/docs/datamodel-accounting-referencetypes#section-customerref).
:::

## Example data

```
{
  "id": "6a0e9dfb-87b0-47d3-aaaf-9753ae9e757d",
  "billCreditNoteNumber": "14763237",
  "totalAmount": 693,
  "remainingCredit": 693,
  "status": "Submitted",
  "issueDate": "2019-02-18T16:03:07.268Z",
"note": "Track separately",
  "currency": "USD",
  "lineItems": [
    {
      "description": "AcmeMagnet",
      "unitAmount": 25,
      "discountAmount": 0,
      "quantity": 4,
      "subTotal": 100,
      "taxAmount": 10,
      "totalAmount": 110,
      "itemRef": {
        "id": "3"
      },
      "taxRateRef": {
        "id": "6c88aff3-7cb9-4980-a3d3-443e72e02498"
      },
      "accountRef": {
        "id": "3f267b10-757d-44c0-bef9-20f70cc8fbe3"
      },
      "trackingCategoryRefs": [
        {
          "id": "department_1",
          "name": "ACMERockets"
        },
        {
          "id": "costcode_2",
          "name": "ACM2-ACMESigns"
        }
      ]
    },
    {
      "description": "ACMEDisintegratingPistol",
      "unitAmount": 25,
      "discountAmount": 0,
      "quantity": 3,
      "subTotal": 75,
      "taxAmount": 7.5,
      "totalAmount": 82.5,
      "itemRef": {
        "id": "3abf0883-03f7-44c6-bc15-1372522d25e1"
      },
      "taxRateRef": {
        "id": "6c88aff3-7cb9-4980-a3d3-443e72e02498"
      },
      "accountRef": {
        "id": "3f267b10-757d-44c0-bef9-20f70cc8fbe3"
      }
    },
    {
      "description": "ACMEWhippedCreamDispenser",
      "unitAmount": 52,
      "discountAmount": 0,
      "quantity": 6,
      "subTotal": 312,
      "taxAmount": 31.2,
      "totalAmount": 343.2,
      "itemRef": {
        "id": "3691f3d9-0ff7-4358-8a93-bed31c1b4b03"
      },
      "taxRateRef": {
        "id": "6c88aff3-7cb9-4980-a3d3-443e72e02498"
      },
      "accountRef": {
        "id": "3f267b10-757d-44c0-bef9-20f70cc8fbe3"
      }
    },
    {
      "description": "ACMEJetPropelledPogoStick",
      "unitAmount": 130,
      "discountAmount": 0,
      "quantity": 1,
      "subTotal": 130,
      "taxAmount": 27.3,
      "totalAmount": 157.3,
      "itemRef": {
        "id": "075410d4-7edc-4936-ba52-9e1e43cbe300"
      },
      "taxRateRef": {
        "id": "d606732b-db18-44d7-823b-7f15f42c32ea"
      },
      "accountRef": {
        "id": "3f267b10-757d-44c0-bef9-20f70cc8fbe3"
      }
    }
  ],
  "supplierRef": {
    "id": "67C6A7A1-5E84-4AC4-B950-24A114E379D0",
    "supplierName": "Chin's Gas and Oil"
  }
}
```
