---
title: "Credit notes"
description: "Issued to a customer to reduce or cancel out one or more invoices when applied"
createdAt: "2019-03-05T13:17:08.631Z"
updatedAt: "2022-11-16T09:32:10.749Z"
---

Explore the <a className="external" href="https://api.codat.io/swagger/index.html#/CreditNotes" target="_blank">Credit Notes</a> endpoints in Swagger.

View the coverage for credit notes in the <a className="external" href="https://knowledge.codat.io/supported-features/accounting?view=tab-by-data-type&dataType=creditNotes" target="_blank">Data coverage explorer</a>.

## Overview

Think of a credit note as a voucher issued to a customer. It is a reduction that can be applied against one or multiple invoices. A credit note can either reduce the amount owed or cancel out an invoice entirely.

In the Codat system a credit note is issued to a [customer's](https://docs.codat.io/docs/datamodel-accounting-customers) accounts receivable.

It contains details of:

- The amount of credit remaining and its status.
- Payment allocations against the payments type, in this case an invoice.
- Which customers the credit notes have been issued to.

## Data model

[block:parameters]
{
"data": {
"h-0": "Field",
"h-1": "Type",
"h-2": "Description",
"0-0": "**id** ",
"1-0": "**creditNoteNumber** ",
"2-0": "**customerRef** ",
"3-0": "**totalAmount** ",
"8-0": "**remainingCredit** ",
"9-0": "**status** ",
"10-0": "**issueDate** ",
"12-0": "**currency** ",
"13-0": "**currencyRate** ",
"15-0": "**paymentAllocations** ",
"16-0": "**modifiedDate** ",
"2-2": "Reference to the [customer](https://docs.codat.io/docs/datamodel-accounting-customers) the credit note has been issued to.",
"3-1": "_decimal_",
"8-1": "_decimal_",
"13-1": "_decimal_
see [currency rate](https://docs.codat.io/docs/datamodel-shared-currencyrate)",
"0-1": "_string_",
"1-1": "_string_",
"9-1": "_string_",
"10-1": "_string_
see [date](https://docs.codat.io/docs/datamodel-shared-date)",
"12-1": "_string_
see [currency](https://docs.codat.io/docs/datamodel-shared-currency)",
"15-2": "An array of [CreditNotePaymentAllocations](#section-payment-allocations).",
"16-1": "_string_
see [date](https://docs.codat.io/docs/datamodel-shared-date)",
"0-2": "Identifier for the credit note, unique to the [company](https://docs.codat.io/docs/datamodel-accounting-company) in the accounting platform.",
"1-2": "Friendly reference for the credit note.",
"3-2": "Total amount of credit that has been applied to the [customer's](https://docs.codat.io/docs/datamodel-accounting-customers) accounts receivable.",
"9-2": "Current state of the credit note, either:

- `Draft` - Not yet confirmed in the accounting system

- `Submitted` - Confirmed and with an outstanding balance

- `Paid` - Allocated or refunded in full

- `PartiallyPaid` - Allocated or refunded in part

- `Void` - Invalid or void

- `Unknown`",
  "2-1": "_[reference type](https://docs.codat.io/docs/datamodel-accounting-referencetypes#section-customerref)_",
  "12-2": "Currency of the credit note.",
  "13-2": "Rate between the currency of the credit note and the base currency of the [company](https://docs.codat.io/docs/datamodel-accounting-company).",
  "8-2": "Unused balance of totalAmount originally raised.",
  "10-2": "Date of the credit note as recorded in the accounting system.",
  "17-0": "**sourceModifiedDate** ",
  "17-1": "_string_
  see [date](https://docs.codat.io/docs/datamodel-shared-date)",
  "16-2": "Date the record was last updated in the Codat system.",
  "17-2": "Date the record was last changed in the accounting system.",
  "14-0": "**lineItems**",
  "14-2": "An array of [CreditNoteLineItems](#section-line-items).",
  "18-0": "**note**",
  "18-1": "_string_ ",
  "18-2": "Any additional information about the credit note. Where possible, Codat links to a data field in the accounting platform that is publicly available. This means that the contents of the **note** field are included when a credit note is emailed from the accounting platform to the customer.",
  "4-0": "**totalDiscount** ",
  "4-1": "_decimal_",
  "4-2": "Any discounts applied to the credit note amount.",
  "5-0": "**subTotal** ",
  "5-1": "_decimal_",
  "5-2": "Value of the credit note, including discounts and excluding tax.",
  "6-0": "**totalTaxAmount**",
  "6-1": "_decimal_",
  "6-2": "Any tax applied to the credit note amount.",
  "7-0": "**discountPercentage** ",
  "7-1": "_decimal_",
  "7-2": "Percentage rate (from 0 to 100) of discounts applied to the credit note.",
  "11-0": "**allocatedOnDate** ",
  "11-1": "_string_
  see [date](https://docs.codat.io/docs/datamodel-shared-date)",
  "11-2": "Date on which the credit note was fully allocated."
  },
  "cols": 3,
  "rows": 19
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
"1-0": "**unitAmount** ",
"2-0": "**quantity** ",
"3-0": "**discountAmount** ",
"4-0": "**subTotal** ",
"5-0": "**taxAmount** ",
"6-0": "**totalAmount** ",
"7-0": "**accountRef** ",
"0-1": "_string_ ",
"1-1": "_decimal_ ",
"2-1": "_decimal_ ",
"3-1": "_decimal_ ",
"4-1": "_decimal_ ",
"5-1": "_decimal_ ",
"6-1": "_decimal_ ",
"8-0": "**discountPercentage** ",
"8-1": "_decimal_ ",
"9-0": "**taxRateRef** ",
"10-0": "**itemRef** ",
"11-0": "**trackingCategoryRef** ",
"0-2": "Friendly name of each line item. For example, the goods or service for which credit has been issued.",
"1-2": "Unit price of the goods or service.",
"2-2": "Number of units of the goods or service for which credit has been issued.",
"3-2": "Value of any discounts applied.",
"4-2": "Amount of credit associated with the line item, including discounts but excluding tax.",
"5-2": "Amount of tax associated with the line item.",
"6-2": "Total amount of the line item, including discounts and tax.",
"7-1": "_[reference type](https://docs.codat.io/docs/datamodel-accounting-referencetypes#section-accountref)_",
"9-1": "_[reference type](https://docs.codat.io/docs/datamodel-accounting-referencetypes#section-taxrateref)_",
"11-1": "_[reference type](https://docs.codat.io/docs/datamodel-accounting-referencetypes#section-trackingCategoryRef)_",
"10-1": "_[reference type](https://docs.codat.io/docs/datamodel-accounting-referencetypes#section-itemref)_",
"7-2": "Reference to the [account](https://docs.codat.io/docs/datamodel-accounting-chartofaccounts) to which the line item is linked.",
"8-2": "Percentage rate of any discount applied to the line item.",
"9-2": "Reference to the [tax rate](https://docs.codat.io/docs/datamodel-accounting-taxrates) to which the line item is linked.",
"10-2": "Reference to the [item](https://docs.codat.io/docs/datamodel-accounting-items) the line is linked to.",
"11-2": "Reference to the [tracking categories](https://docs.codat.io/docs/datamodel-accounting-trackingcategories) to which the line item is linked."
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
"10-1": "_string_
See [currency](https://docs.codat.io/docs/datamodel-shared-currency)",
"11-1": "_decimal_
See [currency rate](https://docs.codat.io/docs/datamodel-shared-currencyrate)",
"6-1": "_decimal_
See [currency rate](https://docs.codat.io/docs/datamodel-shared-currencyrate)",
"7-1": "_string_
See [date](https://docs.codat.io/docs/datamodel-shared-date)",
"12-1": "_string_
See [date](https://docs.codat.io/docs/datamodel-shared-date)",
"8-1": "_decimal_",
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

:::caution Requirements for reference fields
Reference fields are only populated if the corresponding data type has been synchronised. If you see null values for these fields, please complete a new sync for the corresponding data type. For example, sync the customers data type for **[customerRef](https://docs.codat.io/docs/datamodel-accounting-referencetypes#section-customerref)**.
:::

## Example data

```
[
  {
      "id": "0316bd24-8a01-4a3a-a0e5-a73f14ebcbec",
      "creditNoteNumber": "5239277",
      "customerRef": {
          "id": "b5511228-b9ef-4713-91b1-ad2cf60eadb1",
          "companyName": "Tool Hire Company"
      },
      "totalAmount": 550,
      "totalDiscount": 0,
      "subTotal": 0,
      "totalTaxAmount": 0,
      "discountPercentage": 0,
      "remainingCredit": 550,
      "status": "Submitted",
      "issueDate": "2018-03-28T21:28:58.249Z",
      "allocatedOnDate": null,
      "note": "ABC",
      "currency": "USD",
      "currencyRate": null,
      "lineItems": [
          {
              "description": "Anvil10000Lb",
              "unitAmount": 50,
              "quantity": 10,
              "discountAmount": 0,
              "subTotal": 500,
              "taxAmount": 50,
              "totalAmount": 550,
              "accountRef": {
                  "id": "3f267b10-757d-44c0-bef9-20f70cc8fbe3",
                  "name": null
              },
              "discountPercentage": null,
              "taxRateRef": {
                  "id": "6c88aff3-7cb9-4980-a3d3-443e72e02498",
                  "name": null
              },
              "itemRef": {
                  "id": "1",
                  "name": null
              }
          }
      ],
      "paymentAllocations": [],
      "modifiedDate": null,
      "sourceModifiedDate": null,
      "note": "More information available on request."
  }
]
```
