---
title: "Shared types"
description: "Used where the same data structure occurs in more than one data type"
createdAt: "2020-11-17T20:38:10.509Z"
updatedAt: "2022-11-22T11:49:00.239Z"
---

Shared types are used where the same structure of data appears in more than one data type. While you could consider our reference types as a shared type, they are detailed on their own page: [Reference types](https://docs.codat.io/docs/datamodel-accounting-referencetypes).

## Address

Represent a location to send something, such as a bill, invoice or delivery.

Addresses appear on the following data types:

- [Company info](https://docs.codat.io/docs/datamodel-accounting-company)
- [Customers](https://docs.codat.io/docs/datamodel-accounting-customers)
- [Purchase orders](https://docs.codat.io/docs/datamodel-accounting-purchaseorders)
- [Suppliers](https://docs.codat.io/docs/datamodel-accounting-suppliers)

[block:parameters]
{
"data": {
"h-0": "Field",
"h-1": "Type",
"h-2": "Description",
"0-0": "**type** ",
"0-1": "_string_ ",
"0-2": "Type of the address, either:

- `Unknown`
- `Billing`
- `Delivery`",
  "1-0": "**line1** ",
  "1-1": "_string_ ",
  "1-2": "Line 1 of the address.",
  "2-0": "**line2** ",
  "2-1": "_string_ ",
  "2-2": "Line 2 of the address.",
  "3-0": "**city** ",
  "3-1": "_string_ ",
  "3-2": "City of the address.",
  "4-0": "**region** ",
  "4-1": "_string_ ",
  "4-2": "Region of the address.",
  "5-0": "**country** ",
  "5-1": "_string_",
  "5-2": "Country of the address.",
  "6-0": "**postalCode** ",
  "6-1": "_string_ ",
  "6-2": "Postal code or zip code of the address."
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
