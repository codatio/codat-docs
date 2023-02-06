---
title: "Invoices"
description: "An itemized record of goods sold or services provided"
createdAt: "2019-02-15T15:49:02.463Z"
updatedAt: "2022-11-21T11:37:33.073Z"
---

Explore the <a className="external" href="https://api.codat.io/swagger/index.html#/Invoices" target="_blank">Invoices</a> endpoints in Swagger.

View the coverage for invoices in the <a className="external" href="https://knowledge.codat.io/supported-features/accounting?view=tab-by-data-type&dataType=invoices" target="_blank">Data coverage explorer</a>.

## Overview

An invoice is an itemized record of goods sold or services provided to a [customer](/datamodel-accounting-customers).

In Codat, an invoice contains details of:

- The timeline of the invoice—when it was raised, marked as paid, last edited, and so on.
- How much the invoice is for, what portion of the invoice is tax or discounts, and what currency the amounts are represented in.
- Who the invoice has been raised to; the _customer_.
- The breakdown of what the invoice is for; the _line items_.
- Any [payments](/datamodel-accounting-payments) assigned to the invoice; the _payment allocations_.

:::note Invoices or bills?

In Codat, invoices represent accounts receivable only. For accounts payable invoices, see [Bills](/datamodel-accounting-bills).
:::

:::success Invoice PDF downloads

You can <a className="external" href="https://api.codat.io/swagger/index.html#/Invoices/get_companies__companyId__data_invoices__invoiceId__pdf" target="_blank">download a PDF version</a> of an invoice for supported integrations.

The filename will be invoice-{number}.pdf.
:::

## Data model

:::note Referencing an invoice in Sage 50 and ClearBooks

In Sage 50 and ClearBooks, you may prefer to use the **invoiceNumber** to identify an invoice rather than the invoice **id**. Each time a draft invoice is submitted or printed, the draft **id** becomes void and a submitted invoice with a new **id** exists in its place. In both platforms, the **invoiceNumber** should remain the same.
:::

[block:parameters]
{
"data": {
"h-0": "Field",
"h-1": "Type",
"h-2": "Description",
"0-0": "**id** ",
"0-1": "_string_",
"0-2": "Identifier for the invoice, unique to the [company](/datamodel-accounting-company) in the accounting platform.",
"1-0": "**invoiceNumber** ",
"1-1": "_string_",
"1-2": "Friendly reference for the invoice. If available, this appears in the file name of invoice attachments.",
"2-0": "**customerRef** ",
"2-1": "_[reference type](/datamodel-accounting-referencetypes#section-customerref)_",
"2-2": "Reference to the [customer](/datamodel-accounting-customers) the invoice has been issued to.",
"3-0": "**salesOrderRefs**",
"3-1": "_array_",
"3-2": "List of references to related [Sales orders](/datamodel-accounting-sales-orders).",
"4-0": "**issueDate** ",
"4-1": "_string_  
See [date](/datamodel-shared-date)",
"4-2": "Date of the invoice as recorded in the accounting system.",
"5-0": "**dueDate** ",
"5-1": "_string_  
See [date](/datamodel-shared-date)",
"5-2": "Date the customer is due to be paid by.",
"6-0": "**modifiedDate** ",
"6-1": "_string_  
See [date](/datamodel-shared-date)",
"6-2": "Date the record was last modified in Codat in any way.

For example, the `modifiedDate` changes if the invoice was modified in the accounting system, or if the underlying mappings to our data model have changed.

The `modifiedDate` does not change when you sync an unmodified invoice from the accounting system.",
"7-0": "**sourceModifiedDate** ",
"7-1": "_string_  
See [date](/datamodel-shared-date)",
"7-2": "Date the record was last changed in the accounting system.",
"8-0": "**paidOnDate** ",
"8-1": "_string_  
See [date](/datamodel-shared-date)",
"8-2": "Date the invoice was marked as paid in the accounting system. If this field is not available from the accounting software, it is calculated by Codat using associated payments.",
"9-0": "**currency** ",
"9-1": "_string_  
See [currency](/datamodel-shared-currency)",
"9-2": "Currency of the invoice.",
"10-0": "**currencyRate** ",
"10-1": "_number_  
See [currency rate](/datamodel-shared-currencyrate)",
"10-2": "Rate between the currency of the invoice and the base currency of the [company](/datamodel-accounting-company).",
"11-0": "**lineItems** ",
"11-1": "",
"11-2": "An array of [InvoiceLineItems](#section-line-items).",
"12-0": "**paymentAllocations** ",
"12-1": "",
"12-2": "An array of [InvoicePaymentAllocation](#section-payment-allocations).",
"13-0": "**totalDiscount** ",
"13-1": "_decimal_",
"13-2": "Numerical value of discounts applied to the invoice.",
"14-0": "**subTotal** ",
"14-1": "_decimal_",
"14-2": "Total amount of the invoice excluding any taxes.",
"15-0": "**totalTaxAmount** ",
"15-1": "_decimal_",
"15-2": "Amount of tax on the invoice.",
"16-0": "**totalAmount** ",
"16-1": "_decimal_",
"16-2": "Amount of the invoice, inclusive of tax.",
"17-0": "**amountDue** ",
"17-1": "_decimal_",
"17-2": "Amount outstanding on the invoice.",
"18-0": "**discountPercentage** ",
"18-1": "_decimal_",
"18-2": "Percentage rate (from 0 to 100) of discounts applied to the invoice. For example: A 5% discount will return a value of `5`, not `0.05`.",
"19-0": "**status** ",
"19-1": "_string_",
"19-2": "Current state of the invoice:

- `Draft` - Invoice hasn't been submitted to the supplier. It may be in a pending state or is scheduled for future submission, for example by email.

- `Submitted` - Invoice is no longer a draft. It has been processed and, or, sent to the customer. In this state, it will impact the ledger. It also has no payments made against it (**amountDue** == **totalAmount**).

- `PartiallyPaid` - The balance paid against the invoice is positive, but less than the total invoice amount (0 \\< **amountDue** \\< **totalAmount**).

- `Paid` - Invoice is paid in full. This includes if the invoice has been credited or overpaid  
  (**amountDue** == 0).

- `Void` - An invoice can become `Void` when it's deleted, refunded, written off, or cancelled. A voided invoice may still be `PartiallyPaid`, and so all outstanding amounts on voided invoices are removed from the accounts receivable account.",
  "20-0": "**note** ",
  "20-1": "_string_",
  "20-2": "Any additional information about the invoice. Where possible, Codat links to a data field in the accounting platform that is publicly available. This means that the contents of the **note** field are included when an invoice is emailed from the accounting platform to the customer.",
  "21-0": "additionalTaxAmount",
  "21-1": "",
  "21-2": "",
  "22-0": "additionalTaxPercentage",
  "22-1": "",
  "22-2": ""
  },
  "cols": 3,
  "rows": 23,
  "align": [
  "left",
  "left",
  "left"
  ]
  }
  [/block]

### Line items

| Field                    | Type                                                                                                           | Description                                                                                                                                                                                |
| :----------------------- | :------------------------------------------------------------------------------------------------------------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **description**          | _string_                                                                                                       | Friendly name of the goods or services provided.                                                                                                                                           |
| **unitAmount**           | _decimal_                                                                                                      | Price of each unit of goods or services.                                                                                                                                                   |
| **quantity**             | _decimal_                                                                                                      | Number of units of goods or services provided.                                                                                                                                             |
| **discountAmount**       | _decimal_                                                                                                      | Numerical value of any discounts applied.                                                                                                                                                  |
| **subTotal**             | _decimal_                                                                                                      | Amount of the line, inclusive of discounts but exclusive of tax.                                                                                                                           |
| **taxAmount**            | _decimal_                                                                                                      | Amount of tax for the line.                                                                                                                                                                |
| **totalAmount**          | _decimal_                                                                                                      | Total amount of the line, including tax. When pushing invoices to Xero, the total amount is exclusive of tax to allow automatic calculations if a tax rate or tax amount is not specified. |
| **accountRef**           | [reference type](/datamodel-accounting-referencetypes#section-accountref)            | Reference to the [account](/datamodel-accounting-chartofaccounts) to which the line item is linked.                                                              |
| **discountPercentage**   | _decimal_                                                                                                      | Percentage rate (from 0 to 100) of any discounts applied to the unit amount.                                                                                                               |
| **taxRateRef**           | [reference type](/datamodel-accounting-referencetypes#section-taxrateref)            | Reference to the [tax rate](/datamodel-accounting-taxrates) to which the line item is linked.                                                                    |
| **itemRef**              | [reference type](/datamodel-accounting-referencetypes#section-itemref)               | Reference to the [item](/datamodel-accounting-items) the line is linked to.                                                                                      |
| **trackingCategoryRefs** | _[reference type](/datamodel-accounting-referencetypes#section-trackingcategoryref)_ | Reference to the [tracking categories](/datamodel-accounting-trackingcategories) to which the line item is linked.                                               |

### Payment allocations

[block:parameters]
{
"data": {
"h-0": "Field",
"h-1": "Type",
"h-2": "Description",
"0-0": "payment",
"0-1": "",
"0-2": "",
"1-0": "**id**",
"1-1": "_string_",
"1-2": "Identifier of the allocated payment.",
"2-0": "**note**",
"2-1": "_string_",
"2-2": "Notes attached to the allocated payment.",
"3-0": "**reference**",
"3-1": "_string_",
"3-2": "Reference to the allocated payment.",
"4-0": "**accountRef**",
"4-1": "[_Reference type_](/datamodel-accounting-referencetypes#section-accountref)",
"4-2": "The account that the allocated payment is made from or to.",
"5-0": "**currency**",
"5-1": "_string_  
See [currency](/datamodel-shared-currency)",
"5-2": "Currency the payment has been made in.",
"6-0": "**currencyRate**",
"6-1": "_decimal_  
See [currency rate](/datamodel-shared-currencyrate)",
"6-2": "Conversion rate between the currency of the allocated payment and the currency of the company.",
"7-0": "**paidOnDate**",
"7-1": "_string_  
See [date](/datamodel-shared-date)",
"7-2": "The date the payment was paid.",
"8-0": "**totalAmount**",
"8-1": "_decimal_",
"8-2": "Total amount that was paid.",
"9-0": "allocation",
"9-1": "",
"9-2": "",
"10-0": "**currency**",
"10-1": "_string_  
See [currency](/datamodel-shared-currency)",
"10-2": "The currency of the transaction.",
"11-0": "**currencyRate**",
"11-1": "_decimal_  
See [currency rate](/datamodel-shared-currencyrate)",
"11-2": "The conversion rate between the currency of the allocated payment and the currency of the transaction.",
"12-0": "**allocatedOnDate**",
"12-1": "_string_  
See [date](/datamodel-shared-date)",
"12-2": "The date the payment was allocated.",
"13-0": "**totalAmount**",
"13-1": "_decimal_",
"13-2": "The total amount that has been allocated."
},
"cols": 3,
"rows": 14,
"align": [
"left",
"left",
"left"
]
}
[/block]

:::caution Requirements for reference fields

The reference fields **customerRef**, **accountRef**, and **taxRateRef** are only populated if the corresponding data type has been synchronised. If you see null values for these fields, please complete a new sync for the corresponding data type. For example, sync the customers data type for [customerRef](/datamodel-accounting-referencetypes#section-customerref).
:::

## Example data

```json
{
  "results": [
    {
      "id": "e55b7c0d-9084-4113-9379-515d0a4a07a3",
      "invoiceNumber": "30018481",
      "customerRef": {
        "id": "06bf0258-4a11-4a44-b141-a991fcb1d7c7",
        "companyName": "Speedy Gonzales"
      },
      "salesOrderRefs": [
        {
          "id": "29d85e65-e54d-4a36-b141-0078175b620d",
          "dataType": "salesOrders"
        }
      ],
      "issueDate": "2018-10-04T22:40:50Z",
      "dueDate": "2018-10-08T22:40:50Z",
      "modifiedDate": "2019-02-19T12:06:58Z",
      "sourceModifiedDate": "2018-10-04T22:40:50Z",
      "paidOnDate": null,
      "currency": "USD",
      "currencyRate": null,
      "lineItems": [
        {
          "description": "ACMEIndestructoSteelBall",
          "unitAmount": 80,
          "quantity": 8,
          "discountAmount": 0,
          "subTotal": 640,
          "taxAmount": 64,
          "totalAmount": 704,
          "accountRef": {
            "id": "77df77d7-777b-4455-af51-a6b563733842",
            "name": "Sales"
          },
          "discountPercentage": null,
          "taxRateRef": {
            "id": "8c88aff8-7cb9-8888-a8d8-443e72e02498",
            "name": "ACME Sales Tax (10%)"
          },
          "itemRef": {
            "id": "3",
            "name": "ACME Construction"
          },
          "trackingCategoryRefs": [
            {
              "id": "costcode9",
              "name": "ACME Site One"
            }
          ]
        },
        {
          "description": "Anvil10000Lb",
          "unitAmount": 50,
          "quantity": 7,
          "discountAmount": 0,
          "subTotal": 350,
          "taxAmount": 35,
          "totalAmount": 385,
          "accountRef": {
            "id": "77df77d7-777b-4455-af51-a6b563733842",
            "name": "Sales"
          },
          "discountPercentage": null,
          "taxRateRef": {
            "id": "8c88aff8-7cb9-8888-a8d8-443e72e02498",
            "name": "ACME Sales Tax (10%)"
          },
          "itemRef": {
            "id": "4",
            "name": "ACME Tools"
          }
        },
        {
          "description": "ACMEStraitJacketEjectingBazooka",
          "unitAmount": 52,
          "quantity": 6,
          "discountAmount": 0,
          "subTotal": 312,
          "taxAmount": 31.2,
          "totalAmount": 343.2,
          "accountRef": {
            "id": "77df77d7-777b-4455-af51-a6b563733842",
            "name": "Sales"
          },
          "discountPercentage": null,
          "taxRateRef": {
            "id": "8c88aff8-7cb9-8888-a8d8-443e72e02498",
            "name": "ACME Sales Tax (10%)"
          },
          "itemRef": {
            "id": "5",
            "name": "ACME Defence"
          }
        },
        {
          "description": "ACMEIntegratingPistol",
          "unitAmount": 44,
          "quantity": 10,
          "discountAmount": 0,
          "subTotal": 440,
          "taxAmount": 44,
          "totalAmount": 484,
          "accountRef": {
            "id": "77df77d7-777b-4455-af51-a6b563733842",
            "name": "Sales"
          },
          "discountPercentage": null,
          "taxRateRef": {
            "id": "8c88aff8-7cb9-8888-a8d8-443e72e02498",
            "name": "ACME Sales Tax (10%)"
          },
          "itemRef": {
            "id": "3",
            "name": "ACME Defence"
          }
        }
      ],
      "paymentAllocations": [],
      "totalDiscount": 0,
      "subTotal": 1742,
      "totalTaxAmount": 174.2,
      "totalAmount": 1916.2,
      "amountDue": 1916.2,
      "discountPercentage": null,
      "status": "Draft",
      "note": "Details of breakdown available on request."
    }
  ],
  "pageNumber": 1,
  "pageSize": 1,
  "totalResults": 1456,
  "_links": {
    "current": {
      "href": "/companies/85c10664-b6cc-49dd-b369-0cd1cef69031/data/invoices?page=1&pageSize=1"
    },
    "self": {
      "href": "/companies/85c10664-b6cc-49dd-b369-0cd1cef69031/data/invoices"
    },
    "next": {
      "href": "/companies/85c10664-b6cc-49dd-b369-0cd1cef69031/data/invoices?page=1&pageSize=2"
    }
  }
}
```
