---
title: "Product categories"
description: "Groupings of products into categories"
createdAt: "2022-09-16T08:11:50.575Z"
updatedAt: "2022-11-22T13:11:10.437Z"
---

Explore the <a className="external" href="https://api.codat.io/swagger/index.html#/CommerceProductCategories" target="_blank">Commerce Product Categories</a> endpoints in Swagger.

View the coverage for products in the <a className="external" href="https://knowledge.codat.io/supported-features/commerce?view=tab-by-data-type&dataType=commerce-productCategories" target="_blank">Data coverage explorer</a>.

## Overview

Product categories are used to classify a group of [products](/datamodel-commerce-products) together, either by type (eg "Furniture"), or sometimes by tax profile.

## Data Model

[block:parameters]
{
"data": {
"h-0": "Field",
"h-1": "Type",
"h-2": "Description",
"0-0": "**id**",
"0-1": "_string_",
"0-2": "The unique identifier of the product category",
"1-0": "**name**",
"1-1": "_string_",
"1-2": "The name of the product category",
"2-0": "**ancestorRefs**",
"2-1": "_array of [ancestor Refs](#section-ancestor-refs)_",
"2-2": "A collection of parent product categories implicitly ordered with the immediate parent last in the list.",
"3-0": "**hasChildren**",
"3-1": "_boolean_",
"3-2": "A boolean indicating whether there are other product categories beneath this one in the hierarchy.",
"4-0": "**modifiedDate**",
"4-1": "_string_  
See [date](/datamodel-shared-date)",
"4-2": "The date the record was last updated in Codat's cache.",
"5-0": "**sourceModifiedDate**",
"5-1": "_string_  
See [date](/datamodel-shared-date)",
"5-2": "Date the product was last changed in the commerce or point of sale platform."
},
"cols": 3,
"rows": 6,
"align": [
"left",
"left",
"left"
]
}
[/block]

## Ancestor Refs

Information about the hierarchy the product category sits within.

| Field    | Type     | Description                             |
| :------- | :------- | :-------------------------------------- |
| **id**   | _string_ | The id of the parent product category   |
| **name** | _string_ | The name of the parent product category |

## Example Data

```json
{
  "productCategories": [
    {
      "id": "100",
      "name": "Entertainment",
      "ancestorRefs": [],
      "hasChildren": true,
      "modifiedDate": "2022-01-01T12:00:00Z",
      "sourceModifiedDate": "2021-10-01T12:53:21Z"
    },
    {
      "id": "101",
      "name": "Cinema",
      "ancestorRefs": [
        {
          "id": "100",
          "name": "Entertainment"
        }
      ],
      "hasChildren": true,
      "modifiedDate": "2022-01-01T12:00:00Z",
      "sourceModifiedDate": "2021-10-01T12:55:02Z"
    },
    {
      "id": "102",
      "name": "Movie",
      "ancestorRefs": [
        {
          "id": "100",
          "name": "Entertainment"
        },
        {
          "id": "101",
          "name": "Cinema"
        }
      ],
      "hasChildren": false,
      "modifiedDate": "2022-01-01T12:00:00Z",
      "sourceModifiedDate": "2021-12-25T12:00:00Z"
    }
  ]
}
```
