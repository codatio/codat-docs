---
title: "Direct costs"
createdAt: "2021-05-28T01:56:14.132Z"
updatedAt: "2022-11-02T19:03:23.525Z"
---

:::info Language tip
Direct costs may also be referred to as **Spend transactions**, **Spend money transactions**, or **Payments** in various accounting platforms.
:::

Explore the <a className="external" href="https://api.codat.io/swagger/index.html#/DirectCosts" target="_blank">Direct Costs</a> endpoints in Swagger.

View the coverage for direct costs in the <a className="external" href="https://knowledge.codat.io/supported-features/accounting?view=tab-by-data-type&dataType=directCosts" target="_blank">Data coverage explorer</a>.

## Overview

Direct costs include:

- Purchasing an item and paying it off at the point of the purchase
- Receiving cash from a refunded item if the refund is made by the supplier
- Withdrawing money from a bank account
- Writing a cheque

From the Direct Costs endpoints, you can:

- [Get a list of all direct costs for a specific company ](https://api.codat.io/swagger/index.html#/DirectCosts/get_companies__companyId__connections__connectionId__data_directCosts)
- [Get a single direct cost for a specific company ](https://api.codat.io/swagger/index.html#/DirectCosts/get_companies__companyId__connections__connectionId__data_directCosts__directCostId_)
- [Add a new direct cost to a specific company's accounting package](https://api.codat.io/swagger/index.html#/DirectCosts/post_companies__companyId__connections__connectionId__push_directCosts)

Direct costs is a child data type of [account transactions](https://docs.codat.io/docs/datamodel-accounting-account-transactions).

## Data model

[block:parameters]
{
"data": {
"h-0": "Field",
"h-1": "Type",
"h-2": "Description",
"0-0": "**id** ",
"2-0": "**note**",
"4-0": "**issueDate**",
"5-0": "**currency**",
"6-0": "**currencyRate**",
"7-0": "**lineItems**",
"8-0": "**paymentAllocations** ",
"12-0": "**modifiedDate** ",
"13-0": "**sourceModifiedDate** ",
"12-1": "_string_
See [date](https://docs.codat.io/docs/datamodel-shared-date)",
"12-2": "Date the record was last updated in the Codat system.",
"13-1": "_string_
See [date](https://docs.codat.io/docs/datamodel-shared-date)",
"13-2": "Date the record was last changed in the accounting system.",
"0-1": "_string_ ",
"2-1": "_string_",
"4-1": "_string_
See [Date](https://docs.codat.io/docs/datamodel-shared-date)",
"5-1": "_string_
See [currency](https://docs.codat.io/docs/datamodel-shared-currency)",
"6-1": "_decimal_
See [currency rate](https://docs.codat.io/docs/datamodel-shared-currencyrate)",
"7-1": "_array_",
"8-1": "_array_ ",
"4-2": "Date of the direct cost as recorded in the accounting platform.",
"8-2": "An array of [paymentAllocations](datamodel-accounting-directcosts#section-payment-allocations).",
"5-2": "Currency of the direct cost.",
"6-2": "Conversion rate between the currency of the direct costs and the base currency of the company.",
"7-2": "An array of [directCostslineItems](datamodel-accounting-directcosts#section-direct-costs-line-items).",
"0-2": "Identifier of the direct cost, unique for the company.",
"2-2": "A note attached to the direct cost.",
"1-0": "**reference** ",
"3-0": "**contactRef** ",
"9-0": "**subTotal** ",
"10-0": "**taxAmount** ",
"11-0": "**totalAmount** ",
"9-1": "_decimal_",
"9-2": "The total amount of the direct costs, excluding any taxes.",
"11-1": "_decimal_",
"11-2": "The amount of the direct costs, inclusive of tax.",
"3-1": "[_Reference type_](https://docs.codat.io/docs/datamodel-accounting-referencetypes#section-contactref)",
"3-2": "A customer or supplier associated with the direct cost.",
"1-2": "User-friendly reference for the direct cost.",
"10-2": "The total amount of tax on the direct costs.",
"1-1": "_string_",
"10-1": "_decimal_"
},
"cols": 3,
"rows": 14
}
[/block.

### Direct costs line items

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
"5-0": "**subTotal** ",
"6-0": "**taxAmount** ",
"7-0": "**totalAmount** ",
"8-0": "**accountRef**",
"9-0": "**taxRateRef**",
"0-2": "Friendly name of the goods or services.",
"1-1": "_decimal_",
"1-2": "Price of each unit of goods or services.
_Note_: If the platform does not provide this information, the unit amount will be mapped to the total amount.",
"2-1": "_decimal_",
"2-2": "Number of units of goods or services received.

_Note_: If the platform does not provide this information, the quantity will be mapped as 1.",
"5-2": "Amount of the line, inclusive of discounts but exclusive of tax.",
"5-1": "_decimal_",
"6-1": "_decimal_",
"6-2": "Amount of tax for the line.",
"7-1": "_decimal_",
"7-2": "Total amount of the line, including tax.",
"8-1": "[_Reference type_](https://docs.codat.io/docs/datamodel-accounting-referencetypes#section-accountreff)",
"8-2": "Reference to the account to which the line item is linked.",
"9-1": "[_Reference type_](https://docs.codat.io/docs/datamodel-accounting-referencetypes#section-taxrateref)",
"9-2": "Reference to the tax rate to which the the line item is linked.",
"10-0": "**itemRef**",
"10-1": "[_Reference type_](https://docs.codat.io/docs/datamodel-accounting-referencetypes#section-itemref)",
"10-2": "Reference to the product, service type, or inventory item to which the direct cost is linked.",
"11-0": "**trackingCategoryRefs**",
"11-2": "Collection of [categories](https://docs.codat.io/docs/datamodel-accounting-referencetypes#section-trackingcategoryref) against which this direct cost is tracked.",
"11-1": "_array_ ",
"3-0": "**discountAmount**",
"3-1": "_decimal_",
"3-2": "Discount amount for the line before tax.",
"4-0": "**discountPercentage**",
"4-1": "_decimal_",
"4-2": "Discount percentage for the line before tax."
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
"1-0": "**id** ",
"8-0": "**totalAmount** ",
"9-0": "allocation",
"10-0": "**currency** ",
"12-0": "**allocatedOnDate** ",
"13-0": "**totalAmount** ",
"1-1": "_string_",
"9-1": "",
"12-1": "_string_
See [date](https://docs.codat.io/docs/datamodel-shared-date)",
"13-1": "_decimal_",
"8-1": "_decimal_",
"10-1": "_string_
See [currency](https://docs.codat.io/docs/datamodel-shared-currency)",
"1-2": "Identifier of the allocated payment.",
"8-2": "Total amount that was paid.",
"9-2": "",
"10-2": "The currency of the transaction.",
"12-2": "The date the payment was allocated.",
"13-2": "The total amount that has been allocated.",
"2-0": "**note**",
"2-1": "_string_",
"2-2": "Notes attached to the allocated payment.",
"3-0": "**reference** ",
"3-1": "_string_",
"4-0": "**accountRef** ",
"5-0": "**currency**",
"5-1": "See [currency](https://docs.codat.io/docs/datamodel-shared-currency)",
"5-2": "Currency the payment has been made in.",
"6-0": "**currencyRate**",
"6-1": "_decimal_
See [currency rate](https://docs.codat.io/docs/datamodel-shared-currencyrate)",
"6-2": "Conversion rate between the currency of the allocated payment and the currency of the company.",
"7-0": "**paidOnDate** ",
"11-0": "**currencyRate**",
"11-1": "_number_
See [currency rate](https://docs.codat.io/docs/datamodel-shared-currencyrate)",
"11-2": "The conversion rate between the currency of the allocated payment and the currency of the transaction.",
"3-2": "Reference to the allocated payment.",
"4-2": "The account that the allocated payment is made from or to.",
"4-1": "[_Reference type_](https://docs.codat.io/docs/datamodel-accounting-referencetypes#section-accountref)",
"7-2": "The date the payment was paid.",
"7-1": "_string_
See [date](https://docs.codat.io/docs/datamodel-shared-date)",
"0-0": "payment"
},
"cols": 3,
"rows": 14
}
[/block]

## Example data

````
[
  {
      "id": "310285b0-80b1-406e-9ea6-4f2987175255",
      "contactRef": {
          "id": "f559658a-68da-42b1-81ae-42a96b6c6953",
          "dataType": "suppliers"
      },
      "reference": "Refund",
      "issueDate": "2021-05-21T00:00:00",
      "currency": "GBP",
      "currencyRate": 1.0,
      "lineItems": [
          {
              "description": "Refund",
              "unitAmount": 4.17,
              "quantity": -1.00,
              "discountAmount": 0,
              "discountPercentage": 0,
              "subTotal": -4.17,
              "taxAmount": -0.83,
              "totalAmount": -5.00,
              "accountRef": {
                  "id": "127f3b99-8dc2-4b7e-854c-91ef9bd2757b",
                  "name": "Purchases"
              },
              "taxRateRef": {
                  "id": "INPUT2"
              },
              "trackingCategoryRefs": [
                  {
                      "id": "9d8ad8f6-0d0f-41e0-8851-ef47e8b54ae6",
                      "name": "Eastside"
                  }
              ]
          }
      ],
      "paymentAllocations": [
          {
              "payment": {
                  "id": "310285b0-80b1-406e-9ea6-4f2987175255",
                  "accountRef": {
                      "id": "bd9e85e0-0478-433d-ae9f-0b3c4f04bfe4",
                      "name": "Business Bank Account"
                  },
                  "currency": "GBP",
                  "currencyRate": 1.0,
                  "paidOnDate": "2021-05-21T00:00:00",
                  "totalAmount": -5.00
              },
              "allocation": {
                  "currency": "GBP",
                  "currencyRate": 1.0,
                  "allocatedOnDate": "2021-05-21T00:00:00",
                  "totalAmount": -5.00
              }
          }
      ],
      "subTotal": -4.17,
      "taxAmount": -0.83,
      "totalAmount": -5.00,
      "modifiedDate": "2021-05-21T13:07:11.54",
      "sourceModifiedDate": "2021-05-21T13:07:11.54"
  },
  {
      "id": "a9baa633-e3e9-41ef-b4aa-741de0720b02",
      "contactRef": {
          "id": "f559658a-68da-42b1-81ae-42a96b6c6953",
          "dataType": "suppliers"
      },
      "issueDate": "2021-05-10T00:00:00",
      "currency": "GBP",
      "currencyRate": 1.0,
      "lineItems": [
          {
              "description": "Expense",
              "accountRef": {
                  "id": "f96c9458-d724-47bf-8f74-a9d5726465ce",
                  "name": "General Expenses"
              },
              "taxRateRef": {
                  "id": "INPUT2"
              },
              "unitAmount": 57.92,
              "quantity": 1.00,
              "subTotal": 57.92,
              "taxAmount": 11.58,
              "totalAmount": 69.50,
              "trackingCategoryRefs": [
                  {
                      "id": "9d8ad8f6-0d0f-41e0-8851-ef47e8b54ae6",
                      "name": "Eastside"
                  }
              ]
          }
      ],
      "paymentAllocations": [
          {
              "payment": {
                  "id": "a9baa633-e3e9-41ef-b4aa-741de0720b02",
                  "accountRef": {
                      "id": "bd9e85e0-0478-433d-ae9f-0b3c4f04bfe4",
                      "name": "Business Bank Account"
                  },
                  "currency": "GBP",
                  "currencyRate": 1.0,
                  "paidOnDate": "2021-05-10T00:00:00",
                  "totalAmount": 69.50
              },
              "allocation": {
                  "currency": "GBP",
                  "currencyRate": 1.0,
                  "allocatedOnDate": "2021-05-10T00:00:00",
                  "totalAmount": 69.50
              }
          }
      ],
      "subTotal": 57.92,
      "taxAmount": 11.58,
      "totalAmount": 69.50,
      "modifiedDate": "2021-01-03T22:31:43.45",
      "sourceModifiedDate": "2021-01-03T22:31:43.45"
  }
]```

````
