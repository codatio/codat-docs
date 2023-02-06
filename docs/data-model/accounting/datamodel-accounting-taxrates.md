---
title: "Tax rates"
description: "The percentage a corporation or an individual is taxed"
createdAt: "2019-03-15T13:44:59.284Z"
updatedAt: "2022-11-22T11:17:04.026Z"
---

Explore the <a className="external" href="https://api.codat.io/swagger/index.html#/TaxRates" target="_blank">Tax Rates</a> endpoints in Swagger.

View the coverage for tax rates in the <a className="external" href="https://knowledge.codat.io/supported-features/accounting?view=tab-by-data-type&dataType=taxRates" target="_blank">Data coverage explorer</a>.

## Overview

Accounting systems typically store a set of taxes and associated rates within the accounting package. This means that users don't have to look up or remember the rates for each type of tax. For example: Applying the tax "UK sales VAT" to line items of an invoice adds the correct rate of 20%.

### Tax components

In some cases, a tax is made up of multiple sub taxes, often called _components_ of the tax. For example: You may have an item that is charged a tax rate called "City import tax (8%)" that has two components:

- A city tax of 5%.
- An import tax of 3%.

:::note Effective tax rates

- Where there are multiple components of a tax, each component may be calculated on the original amount and added together. Alternatively, one tax may be calculated on the sub-total of the original amount plus another tax, which is referred to as _compounding_. When there is compounding, the effective tax rate is the rate that, if applied to the original amount, would result in the total amount of tax with compounding.  
  **Example:**
  A tax has two components. Both components have a rate of 10%, and one component is compound. In this case, there is a total tax rate of 20% but an effective tax rate of 21%. [Also see _Compound tax example_](#section-compound-tax-example).
- For QuickBooks Online, Codat doesn't use compound rates. Instead, the calculated effective tax rate for each component is shown. This means that the effective and total rates are the same because the total tax rate is a sum of the component rates.
  :::

## Data model

[block:parameters]
{
"data": {
"h-0": "Field",
"h-1": "Type",
"h-2": "Description",
"0-0": "**id** ",
"0-1": "_string_ ",
"0-2": "Identifier for the tax rate, unique for the [company](/datamodel-accounting-company) in the accounting platform.",
"1-0": "**name** ",
"1-1": "_string_",
"1-2": "Codat-augmented name of the tax rate in the accounting platform.",
"2-0": "**code** ",
"2-1": "_string_",
"2-2": "Code for the tax rate from the accounting platform.",
"3-0": "**status**",
"3-1": "_string_",
"3-2": "Status of the tax rate in the accounting platform.

_ Active - An active tax rate in use by a company.  
_ Archived - A tax rate that has been archived or is inactive in the accounting platform.  
\\\* Unknown - Where the status of the tax rate cannot be determined from the underlying platform.",
"4-0": "**effectiveTaxRate** ",
"4-1": "_decimal_",
"4-2": "See _Effective tax rates_ description in the _[Overview](#overview)_.",
"5-0": "**totalTaxRate** ",
"5-1": "_decimal_",
"5-2": "Total (not compounded) sum of the components of a tax rate.",
"6-0": "**components** ",
"6-1": "",
"6-2": "A tax rate can be made up of multiple sub taxes, often called components of the tax. These are shown in the [TaxRateComponents](#section-components) array.",
"7-0": "**modifiedDate** ",
"7-1": "_string_  
See [date](/datamodel-shared-date)",
"7-2": "Date the record was last updated in the Codat system.",
"8-0": "**sourceModifiedDate** ",
"8-1": "_string_  
See [date](/datamodel-shared-date)",
"8-2": "Date the record was last changed in the accounting system."
},
"cols": 3,
"rows": 9,
"align": [
"left",
"left",
"left"
]
}
[/block]

## Components

A tax rate can be made up of multiple sub taxes, often called components of the tax.

[block:parameters]
{
"data": {
"h-0": "Field",
"h-1": "Type",
"h-2": "Description",
"0-0": "**name** ",
"0-1": "_string_",
"0-2": "Name of the tax rate component.",
"1-0": "**rate** ",
"1-1": "_decimal_",
"1-2": "The rate of the tax rate component, usually a percentage.",
"2-0": "**isCompound** ",
"2-1": "_boolean_",
"2-2": "See _Effective tax rates_ description in the _[Overview](#overview)_.

For QuickBooks Online the calculated effective tax rate for each component is shown."
},
"cols": 3,
"rows": 3,
"align": [
"left",
"left",
"left"
]
}
[/block]

## Tax rate reference

Data types that reference a tax rate, for example invoice and bill line items, use a **taxRateRef** that includes the ID and name of the linked tax rate.

| Field    | Type     | Description                                                    |
| :------- | :------- | :------------------------------------------------------------- |
| **id**   | _string_ | Unique identifier for the tax rate in the accounting platform. |
| **name** | _string_ | Name of the tax rate in the accounting platform.               |

## Example data

```json 5 tax rates with a mix of compound and non-compounded rates
{
    "results": [
        {
            "id": "6c88aff3-7cb9-4980-a3d3-443e72e02498",
            "name": "ACME Sales Tax (10%)",
            "code": "110",
            "status" : "Active",
            "effectiveTaxRate": 10,
            "totalTaxRate": 10,
            "components": [
              {
                "name": "ACME 10%",
                "rate": 10,
                "isCompound": false
              }
            ]
          },
          {
            "id": "b31871d0-e0f8-4d0e-a464-cdf78bc45396",
            "name": "ACME Sales Tax (20%)",
            "code": "115",
            "status" : "Active",
            "effectiveTaxRate": 20,
            "totalTaxRate": 20,
            "components": [
              {
                "name": "ACME 20%",
                "rate": 20,
                "isCompound": false
              }
            ]
          },
          {
            "id": "a1d971c1-0699-41f6-b547-3f9930f45b5f",
            "name": "ACME Tax Exempt",
            "code": "120",
            "status" : "Archived",
            "effectiveTaxRate": 0,
            "totalTaxRate": 0,
            "components": [
              {
                "name": "ACME 0%",
                "rate": 0,
                "isCompound": false
              }
            ]
          },
          {
            "id": "e9e2db36-4966-4f5c-85a8-e3c297a7dd37",
            "name": "2 component",
            "code": "125",
            "status" : "Active",
            "effectiveTaxRate": 20,
            "totalTaxRate": 20,
            "components": [
              {
                "name": "2 component 10%",
                "rate": 10,
                "isCompound": false
              },
              {
                "name": "2 component 10%",
                "rate": 10,
                "isCompound": false
              }
            ]
          },
          {
            "id": "d606732b-db18-44d7-823b-7f15f42c32ea",
            "name": "2 component compound",
            "code": "130",
            "status" : "Active",
            "effectiveTaxRate": 21,
            "totalTaxRate": 20,
            "components": [
              {
                "name": "compound 10%",
                "rate": 10,
                "isCompound": true
              },
              {
                "name": "non-compound 10%",
                "rate": 10,
                "isCompound": false
              }
            ]
          }
        ],
        "modifiedDate": "2019-03-25T15:44:29.087Z",
        "sourceModifiedDate": "2019-03-25T15:44:29.087Z"
      }
    ],
    "pageNumber": 1,
    "pageSize": 5,
    "totalResults": 5,
    "_links": {
         "current": {
        "href": "/companies/85c10664-b6cc-49dd-b369-0cd1cef69031/data/journalEntries?page=1&pageSize=5"
      },
      "self": {
        "href": "/companies/85c10664-b6cc-49dd-b369-0cd1cef69031/data/journalEntries"
      }
}
```

## Compound tax example

| Item amount | $100    |
| :---------- | :------ |
| GST (5%)    | $5      |
| Subtotal    | $105    |
| PST (10%)   | $10.50  |
| Total       | $115.50 |
