---
title: "Suppliers"
description: "A person or organization that provides a product or service"
createdAt: "2019-02-21T09:09:32.935Z"
updatedAt: "2022-11-21T12:45:14.536Z"
---

Explore the <a className="external" href="https://api.codat.io/swagger/index.html#/Suppliers" target="_blank">Suppliers</a> endpoints in Swagger.

View the coverage for suppliers in the <a className="external" href="https://knowledge.codat.io/supported-features/accounting?view=tab-by-data-type&dataType=suppliers" target="_blank">Data coverage explorer</a>.

## Overview

From the **Suppliers** endpoints, you can retrieve a list of [all the suppliers for a company](https://api.codat.io/swagger/index.html#/Suppliers/get_companies__companyId__data_suppliers). Suppliers' data links to accounts payable [bills](/datamodel-accounting-bills).

## Data model

[block:parameters]
{
"data": {
"h-0": "Field",
"h-1": "Type",
"h-2": "Description",
"0-0": "**id** ",
"0-1": "_string_ ",
"0-2": "Identifier for the supplier, unique to the [company](/datamodel-accounting-company) in the accounting platform.",
"1-0": "**supplierName** ",
"1-1": "_string_",
"1-2": "Name of the supplier as recorded in the accounting system, typically the company name.",
"2-0": "**contactName** ",
"2-1": "_string_",
"2-2": "Name of the main contact for the supplier.",
"3-0": "**emailAddress** ",
"3-1": "_string_",
"3-2": "Email address that the supplier may be contacted on.",
"4-0": "**phone** ",
"4-1": "_string_",
"4-2": "Phone number that the supplier may be contacted on.",
"5-0": "**addresses** ",
"5-1": "",
"5-2": "An array of [Addresses](#section-addresses).",
"6-0": "**registrationNumber** ",
"6-1": "_string_",
"6-2": "Company number of the supplier. In the UK, this is typically the company registration number issued by Companies House.",
"7-0": "**taxNumber** ",
"7-1": "_string_",
"7-2": "Supplier's company tax number.",
"8-0": "**defaultCurrency** ",
"8-1": "_string_  
See [currency](/datamodel-shared-currency)",
"8-2": "Default currency the supplier's transactional data is recorded in.",
"9-0": "**status** ",
"9-1": "_string_",
"9-2": "Status of the supplier,either:

- `Unknown`
- `Active`
- `Archived`",
  "10-0": "**modifiedDate** ",
  "10-1": "_string_  
  See [date](/datamodel-shared-date)",
  "10-2": "Date the record was last updated in the Codat system.",
  "11-0": "**sourceModifiedDate** ",
  "11-1": "_string_  
  See [date](/datamodel-shared-date)",
  "11-2": "Date the record was last changed in the accounting system."
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

## Addresses

[block:parameters]
{
"data": {
"h-0": "Field",
"h-1": "Type",
"h-2": "Description",
"0-0": "**type** ",
"0-1": "_string_",
"0-2": "Type of the address, either:

- `Unknown`
- `Billing`
- `Delivery`",
  "1-0": "**line1** ",
  "1-1": "_string_",
  "1-2": "Line 1 of the supplier address.",
  "2-0": "**line2** ",
  "2-1": "_string_",
  "2-2": "Line 2 of the supplier address.",
  "3-0": "**city** ",
  "3-1": "_string_",
  "3-2": "City address of the supplier.",
  "4-0": "**region** ",
  "4-1": "_string_",
  "4-2": "Regional address of the supplier.",
  "5-0": "**country** ",
  "5-1": "_string_",
  "5-2": "Country address of the supplier.",
  "6-0": "**postalCode** ",
  "6-1": "_string_",
  "6-2": "Postal code or zip code."
  },
  "cols": 3,
  "rows": 7,
  "align": [
  "left",
  "left",
  "left"
  ]
  }
  [/block]

## Supplier reference

Data types that reference a supplier, for example bills and bill payments, use a **supplierRef** that includes the ID and name of the linked supplier.

| Field    | Type     | Description                                                    |
| :------- | :------- | :------------------------------------------------------------- |
| **id**   | _string_ | Unique identifier for the supplier in the accounting platform. |
| **name** | _string_ | Name of the supplier in the accounting platform.               |

## Example data

```json
{
  "results": [
    {
      "id": "C520FFD4-F6F6-4FC2-A6D2-5D7088B2B14F",
      "supplierName": "Kelly's Industrial Supplies",
      "contactName": "Kelly's Industrial Supplies",
      "emailAddress": "sales@kellysupplies.com",
      "phone": "07999 999999",
      "addresses": [
        {
          "type": "Billing",
          "line1": "Unit 51",
          "line2": "Bakersfield Industrial Estate",
          "city": "Bakersfield",
          "region": "California",
          "country": "USA",
          "postalcode": "93308"
        }
      ],
      "registrationNumber": "8409314368",
      "taxNumber": "6845012202",
      "status": "Active"
    },
    {
      "id": "21C99A58-7565-4DC8-8FDF-BA7DF5280F25",
      "supplierName": "EDD",
      "contactName": "EDD",
      "emailAddress": "support@edd.com",
      "phone": null,
      "addresses": [
        {
          "type": "Billing",
          "line1": "3731 Burwell Heights Road",
          "line2": "",
          "city": "Nederland",
          "region": "Texas",
          "country": "USA",
          "postalcode": "77627"
        },
        {
          "type": "Delivery",
          "line1": "2760 Lynn Ogden Lane",
          "line2": "",
          "city": "Nederland",
          "region": "Texas",
          "country": "USA",
          "postalcode": "77627"
        }
      ],
      "registrationNumber": "5562326086",
      "taxNumber": "7413198580",
      "status": "Active"
    }
  ],
  "pageNumber": 1,
  "pageSize": 100,
  "totalResults": 2,
  "_links": {
    "current": {
      "href": "/companies/919371ab-763c-4bc7-99a4-9723cade34d3/data/suppliers?page=1"
    },
    "self": {
      "href": "/companies/919371ab-763c-4bc7-99a4-9723cade34d3/data/suppliers"
    }
  }
}
```
