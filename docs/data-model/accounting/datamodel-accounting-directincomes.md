---
title: "Direct incomes"
description: "Income from payments received at the point of sale, cash refunds or deposits into a bank account"
createdAt: "2021-05-28T01:57:18.036Z"
updatedAt: "2023-01-13T04:42:53.523Z"
---

:::note Language tip

Direct incomes may also be referred to as **Receive transactions**, **Receive money transactions**, **Sales receipts**, or **Cash sales** in various accounting platforms.
:::

Explore the <a className="external" href="https://api-uat.codat.io/swagger/index.html#/DirectIncomes" target="_blank">Direct Incomes</a> endpoints in Swagger.

View the coverage for direct incomes in the <a className="external" href="https://knowledge.codat.io/supported-features/accounting?view=tab-by-data-type&dataType=directIncomes" target="_blank">Data coverage explorer</a>.

## Overview

Direct incomes include:

- Selling an item directly to a contact, and receiving payment at the point of the sale.
- Refunding an item in cash to a contact.
- Depositing money into a bank account.

From the Direct Incomes endpoints, you can:

- [Get a list of all direct incomes for a specific company](https://api-uat.codat.io/swagger/index.html#/DirectIncomes/get_companies__companyId__connections__connectionId__data_directIncomes)
- [Get a single direct income for a specific company and connection](https://api-uat.codat.io/swagger/index.html#/DirectIncomes/get_companies__companyId__connections__connectionId__data_directIncomes__directIncomeId_)
- [Add a new direct income to a specific company's accounting package](https://api-uat.codat.io/swagger/index.html#/DirectIncomes/post_companies__companyId__connections__connectionId__push_directIncomes)

Direct incomes is a child data type of [account transactions](https://docs.codat.io/docs/datamodel-accounting-account-transactions).

## Data model

[block:parameters]
{
"data": {
"h-0": "Field",
"h-1": "Type",
"h-2": "Description",
"0-0": "**id** ",
"0-1": "_string_ ",
"0-2": "Identifier of the direct income, unique for the company.",
"1-0": "**reference** ",
"1-1": "_string_",
"1-2": "User-friendly reference for the direct income.",
"2-0": "**contactRef**",
"2-1": "[_Reference type_](https://docs.codat.io/docs/datamodel-accounting-referencetypes#section-contactref)",
"2-2": "A customer or supplier associated with the direct income.",
"3-0": "**issueDate**",
"3-1": "_string_  
See [date](https://docs.codat.io/docs/datamodel-shared-date)",
"3-2": "The date of the direct income as recorded in the accounting platform.",
"4-0": "**currency**",
"4-1": "_string_  
See [currency](https://docs.codat.io/docs/datamodel-shared-currency)",
"4-2": "The currency of the direct income.",
"5-0": "**currencyRate**",
"5-1": "_decimal_  
See [currency rate](https://docs.codat.io/docs/datamodel-shared-currencyrate)",
"5-2": "The conversion rate between the currency of the direct incomes and the base currency of the company.",
"6-0": "**lineItems**",
"6-1": "_array_",
"6-2": "An array of [directIncomelineItems](datamodel-direct-income#section-direct-income-line-items).",
"7-0": "**paymentAllocations** ",
"7-1": "_array_ ",
"7-2": "An array of [paymentAllocations](datamodel-direct-income#section-payment-allocations).",
"8-0": "**subTotal** ",
"8-1": "_decimal_",
"8-2": "The total amount of the direct incomes, excluding any taxes.",
"9-0": "**taxAmount** ",
"9-1": "_decimal_",
"9-2": "The total amount of tax on the direct incomes.",
"10-0": "**totalAmount** ",
"10-1": "_decimal_",
"10-2": "The amount of the direct incomes, inclusive of tax.",
"11-0": "**modifiedDate**",
"11-1": "_string_  
See [date](https://docs.codat.io/docs/datamodel-shared-date)",
"11-2": "The date the record was last updated in the Codat system.",
"12-0": "**sourceModifiedDate** ",
"12-1": "_string_  
See [date](https://docs.codat.io/docs/datamodel-shared-date)",
"12-2": "The date the record was last changed in the accounting system."
},
"cols": 3,
"rows": 13,
"align": [
"left",
"left",
"left"
]
}
[/block]

### Direct income line items

[block:parameters]
{
"data": {
"h-0": "Field",
"h-1": "Type",
"h-2": "Description",
"0-0": "**description** ",
"0-1": "_string_",
"0-2": "A user-friendly name of the goods or services.",
"1-0": "**accountRef** ",
"1-1": "[_Reference type_](https://docs.codat.io/docs/datamodel-accounting-referencetypes#section-accountreff)",
"1-2": "Reference to the account to which the line item is linked.",
"2-0": "**unitAmount** ",
"2-1": "_decimal_",
"2-2": "The price of each unit of goods or services.  
_Note_: If the platform does not provide this information, the unit amount will be mapped to the total amount.",
"3-0": "**quantity** ",
"3-1": "_decimal_",
"3-2": "The number of units of goods or services received.

_Note_: If the platform does not provide this information, the quantity will be mapped as 1.",
"4-0": "**discountAmount**",
"4-1": "_decimal_",
"4-2": "Discount amount for the line before tax.",
"5-0": "**discountPercentage**",
"5-1": "_decimal_",
"5-2": "Discount percentage for the line before tax.",
"6-0": "**subTotal** ",
"6-1": "_decimal_",
"6-2": "The amount of the line, inclusive of discounts, but exclusive of tax.",
"7-0": "**taxAmount** ",
"7-1": "_decimal_",
"7-2": "The amount of tax for the line.  
_Note_: If the platform does not provide this information, the quantity will be mapped as 0.00",
"8-0": "**totalAmount** ",
"8-1": "_decimal_",
"8-2": "The total amount of the line, including tax.",
"9-0": "**taxRateRef**",
"9-1": "[_Reference type_](https://docs.codat.io/docs/datamodel-accounting-referencetypes#section-taxrateref)",
"9-2": "Reference to the tax rate to which the line item is linked.",
"10-0": "**itemRef**",
"10-1": "[_Reference type_](https://docs.codat.io/docs/datamodel-accounting-referencetypes#section-itemref)",
"10-2": "Reference to the product, service type, or inventory item to which the direct cost is linked.",
"11-0": "**trackingCategoryRefs**",
"11-1": "_array_ ",
"11-2": "An array of [categories](https://docs.codat.io/docs/datamodel-accounting-referencetypes#section-trackingcategoryref) against which this direct cost is tracked."
},
"cols": 3,
"rows": 12,
"align": [
"left",
"left",
"left"
]
}
[/block]

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
"1-0": "**id** ",
"1-1": "_string_",
"1-2": "The identifier of the allocated payment.",
"2-0": "**accountRef** ",
"2-1": "[_Reference type_](https://docs.codat.io/docs/datamodel-accounting-referencetypes#section-accountref)",
"2-2": "The account that the allocated payment is made from or to.",
"3-0": "**currency**",
"3-1": "See [currency](https://docs.codat.io/docs/datamodel-shared-currency)",
"3-2": "The currency the payment has been made in.",
"4-0": "**currencyRate**",
"4-1": "_decimal_  
See [currency rate](https://docs.codat.io/docs/datamodel-shared-currencyrate)",
"4-2": "The conversion rate between the currency of the allocated payment and the currency of the company.",
"5-0": "**paidOnDate** ",
"5-1": "_string_  
See [date](https://docs.codat.io/docs/datamodel-shared-date)",
"5-2": "The date the payment was made.",
"6-0": "**totalAmount** ",
"6-1": "_decimal_",
"6-2": "The total amount that was paid.",
"7-0": "allocation",
"7-1": "",
"7-2": "",
"8-0": "**currency** ",
"8-1": "_string_  
See [currency](https://docs.codat.io/docs/datamodel-shared-currency)",
"8-2": "The currency of the transaction.",
"9-0": "**currencyRate**",
"9-1": "_number_  
See [currency rate](https://docs.codat.io/docs/datamodel-shared-currencyrate)",
"9-2": "The conversion rate between the currency of the allocated payment and the currency of the transaction.",
"10-0": "**allocatedOnDate** ",
"10-1": "_string_  
See [date](https://docs.codat.io/docs/datamodel-shared-date)",
"10-2": "The date the payment was allocated.",
"11-0": "**totalAmount** ",
"11-1": "_decimal_",
"11-2": "The total amount that has been allocated."
},
"cols": 3,
"rows": 12,
"align": [
"left",
"left",
"left"
]
}
[/block]

## Example data

```json
{
    "directIncomes": [
        {
            "id": "f3a0edb6-4c53-49ea-83ed-b6fc63f16a9a",
            "reference": "ref_test_income",
            "contactRef" : {
                "id" : "00000-0000-00001",
                "dataType" : "customers"
            }
            "issueDate": "2021-06-11T00:00:00",
            "currency": "GBP",
            "currencyRate": 1.0,
            "lineItems": [
                {
                    "description": "line item desription",
                    "accountRef": {
                        "id": "6c05cfb6-1d36-4c5c-895b-4ad999ad94ae",
                        "name": "Plant & Machinery"
                    },
                    "unitAmount": 100.00,
                    "quantity": 1.00,
                    "discountAmount": 0,
                    "discountPercentage": 0,
                    "subTotal": 100.00,
                    "taxAmount": 0.00,
                    "totalAmount": 100.00,
                    "itemRef": {
                        "id": "1dbc92da-ca7b-4ad3-baa0-24e2f30c8a1f",
                        "name": "Golf balls - white 9 pack"
                    },
                    "trackingCategoryRefs": []
                }
            ],
            "paymentAllocations": [
                {
                    "payment": {
                        "id": "f3a0edb6-4c53-49ea-83ed-b6fc63f16a9a",
                        "accountRef": {
                            "id": "bd9e85e0-0478-433d-ae9f-0b3c4f04bfe4",
                            "name": "Business Bank Account"
                        },
                        "currency": "GBP",
                        "currencyRate": 1.0,
                        "paidOnDate": "2021-06-11T00:00:00",
                        "totalAmount": 100.00
                    },
                    "allocation": {
                        "currency": "GBP",
                        "currencyRate": 1.0,
                        "allocatedOnDate": "2021-06-11T00:00:00",
                        "totalAmount": 100.00
                    }
                }
            ],
              "subTotal": 100.00,
            "taxAmount": 0.00,
            "totalAmount": 100.00,
            "modifiedDate": "2021-06-11T13:52:45.18",
            "sourceModifiedDate": "2021-06-11T13:52:45.18"
        },
```
