---
title: "Items"
description: "Details of a product or service that is bought or sold"
createdAt: "2020-02-25T17:44:16.751Z"
updatedAt: "2022-11-21T11:41:08.083Z"
---

Explore the <a className="external" href="https://api.codat.io/swagger/index.html#/Items" target="_blank">Items</a> endpoints in Swagger.

View the coverage for items in the <a className="external" href="https://knowledge.codat.io/supported-features/accounting?view=tab-by-data-type&dataType=items" target="_blank">Data coverage explorer</a>.

## Overview

**Items** allow your customers to save and track details of the products and services that they buy and sell.

## Data model

### Item

Details of a product or service that a customer buys from a supplier or sells to another company or individual.

[block:parameters]
{
"data": {
"h-0": "Field",
"h-1": "Type",
"h-2": "Description",
"0-0": "**id** ",
"0-1": "_string_",
"0-2": "Identifier for the item that is unique to a [company](/datamodel-accounting-company) in the accounting platform.",
"1-0": "**name** ",
"1-1": "_string_",
"1-2": "Name of the item in the accounting platform.",
"2-0": "**code** ",
"2-1": "_string_",
"2-2": "Friendly reference for the item.",
"3-0": "**modifiedDate** ",
"3-1": "_string_  
See [date](/datamodel-shared-date)",
"3-2": "Date when the record was last updated in the Codat system.",
"4-0": "**sourceModifiedDate** ",
"4-1": "_string_  
See [date](/datamodel-shared-date)",
"4-2": "Date when the record was last updated in the accounting platform.",
"5-0": "**itemStatus** ",
"5-1": "_string_",
"5-2": "Current state of the item, either:

- `Active`: Available for use

- `Archived`: Unavailable

- `Unknown` <sup>[Note 1](#footnote-1)</sup>",
  "6-0": "**type** ",
  "6-1": "_string_ ",
  "6-2": "Type of the item:

- `Inventory`

- `NonInventory`

- `Service`

- `Unknown`",
  "7-0": "**isBillItem** ",
  "7-1": "_boolean_",
  "7-2": "Whether you can use this item for bills.",
  "8-0": "**billItem** ",
  "8-1": "_object, string_",
  "8-2": "Item details that are only for bills.",
  "9-0": "**isInvoiceItem** ",
  "9-1": "_boolean_",
  "9-2": "Whether you can use this item for invoices.",
  "10-0": "**invoiceItem** ",
  "10-1": "_object, string_",
  "10-2": "Item details that are only for invoices."
  },
  "cols": 3,
  "rows": 11,
  "align": [
  "left",
  "left",
  "left"
  ]
  }
  [/block]

<sup id="footnote-1">Note 1</sup> [Due to a limitation in Xero's API](/xero-faq#section-5-why-do-all-of-my-items-from-xero-have-their-status-as-unknown),
all items from Xero are mapped as `Unknown`.

### Bill item

Details of the product or service when it is bought from a supplier.

| Field           | Type                                                                                                  | Description                                                                                                              |
| :-------------- | :---------------------------------------------------------------------------------------------------- | :----------------------------------------------------------------------------------------------------------------------- |
| **description** | _string_                                                                                              | Short description of the product or service that has been bought by the customer.                                        |
| **unitPrice**   | _decimal_                                                                                             | Unit price of the product or service.                                                                                    |
| **accountRef**  | _[reference type](/datamodel-accounting-referencetypes#section-accountref)_ | Reference of the [account](/datamodel-accounting-chartofaccounts) to which the item is linked. |
| **taxRateRef**  | _[reference type](/datamodel-accounting-referencetypes#section-taxrateref)_ | Reference of the [tax rate](/datamodel-accounting-taxrates) to which the item is linked.       |

### Invoice item

Details of the product or service when it is sold to a customer.

| Field           | Type                                                                                                  | Description                                                                                                              |
| :-------------- | :---------------------------------------------------------------------------------------------------- | :----------------------------------------------------------------------------------------------------------------------- |
| **description** | _string_                                                                                              | Short description of the product or service that is provided by the customer.                                            |
| **unitPrice**   | _decimal_                                                                                             | Unit price of the product or service.                                                                                    |
| **accountRef**  | _[reference type](/datamodel-accounting-referencetypes#section-accountref)_ | Reference of the [account](/datamodel-accounting-chartofaccounts) to which the item is linked. |
| **taxRateRef**  | _[reference type](/datamodel-accounting-referencetypes#section-taxrateref)_ | Reference of the [tax rate](/datamodel-accounting-taxrates) to which the item is linked.       |

### Item reference

Data types that reference an item, for example bills and invoices, use an **itemRef** that includes the **id** and **name** of the linked item.

| Field    | Type     | Description                                                |
| :------- | :------- | :--------------------------------------------------------- |
| **id**   | _string_ | Unique identifier for the item in the accounting platform. |
| **name** | _string_ | Name of the item in the accounting platform.               |

## Example data

```json
[
  {
    "id": "1",
    "name": "Anvil10000Lb",
    "code": "158",
    "sourceModifiedDate": "2018-10-01T08:42:41.491Z",
    "modifiedDate": "2018-10-01T08:42:41.491Z",
    "itemStatus": "Active",
    "type": "Unknown",
    "isBillItem": true,
    "billItem": {
      "description": "10,000 Lb anvil bought",
      "unitPrice": 45,
      "accountRef": {
        "id": "367f8daa-1464-4152-bf4e-21548696f916",
        "name": "Purchases"
      },
      "taxRateRef": {
        "id": "6c88aff3-7cb9-4980-a3d3-443e72e02498",
        "name": "ACME Sales Tax (10%)",
        "effectiveTaxRate": 0
      }
    },
    "isInvoiceItem": true,
    "invoiceItem": {
      "description": "10,000 Lb anvil sold",
      "unitPrice": 50,
      "accountRef": {
        "id": "3f267b10-757d-44c0-bef9-20f70cc8fbe3",
        "name": "Sales"
      },
      "taxRateRef": {
        "id": "6c88aff3-7cb9-4980-a3d3-443e72e02498",
        "name": "ACME Sales Tax (10%)",
        "effectiveTaxRate": 0
      }
    }
  },
  {
    "id": "2",
    "name": "ACMEDynamite",
    "code": "142",
    "sourceModifiedDate": "2018-10-01T08:42:41.491Z",
    "modifiedDate": "2018-10-01T08:42:41.491Z",
    "itemStatus": "Active",
    "isBillItem": true,
    "billItem": {
      "description": "Acme dynamite bought",
      "unitPrice": 7,
      "accountRef": {
        "id": "367f8daa-1464-4152-bf4e-21548696f916",
        "name": "Purchases"
      },
      "taxRateRef": {
        "id": "6c88aff3-7cb9-4980-a3d3-443e72e02498",
        "name": "ACME Sales Tax (10%)",
        "effectiveTaxRate": 0
      }
    },
    "isInvoiceItem": true,
    "invoiceItem": {
      "description": "Acme dynamite sold",
      "unitPrice": 10.5,
      "accountRef": {
        "id": "3f267b10-757d-44c0-bef9-20f70cc8fbe3",
        "name": "Sales"
      },
      "taxRateRef": {
        "id": "6c88aff3-7cb9-4980-a3d3-443e72e02498",
        "name": "ACME Sales Tax (10%)",
        "effectiveTaxRate": 0
      }
    }
  }
]
```
