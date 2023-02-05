---
title: "Tax components"
hidden: true
createdAt: "2022-05-20T08:21:20.070Z"
updatedAt: "2022-07-21T14:47:20.441Z"
---

Explore the Tax Components endpoint in <a href="https://api.co......" target="_blank">Swagger</a>.

## Overview

The Tax Components endpoint returns tax rates from the commerce platform.

#Data model
[block:parameters]
{
"data": {
"h-0": "Field",
"h-1": "Type",
"h-2": "Description",
"0-0": "**id**",
"1-0": "**name**",
"2-0": "**rate**",
"3-0": "**isCompound**",
"4-0": "**sourceModifiedDate**",
"0-1": "_string_",
"1-1": "_string_",
"2-1": "_decimal_",
"3-1": "_boolean_",
"0-2": "The unique identifier for the Tax Rate Component, unique to the source commerce platform.",
"1-2": "The name of the Tax Rate Component in the source commerce platform.",
"2-2": "The rate represented between 0-1 range as a fraction.",
"3-2": "The Boolean flag to indicate when a Tax Rate Component compounds on a sale.",
"4-2": "Date the product was last changed in the commerce or point of sale platform.",
"4-1": "_string_
See [date](https://docs.codat.io/docs/datamodel-shared-date)"
},
"cols": 3,
"rows": 5
}
[/block]

```
{
  "taxComponents": [
      {
          "id": "85b32439-37a0-4085-b710-054732bbcea2",
          "name": "Sales Tax (10%)",
          "rate": 0.1,
          "isCompound": false,
          "sourceModifiedDate": "2021-08-06T06:00:27"
      },
      {
          "id": "687e67ae-80f2-44e0-b17a-6a3e1f9c00f9",
          "name": "Sales Tax (15%)",
          "rate": 0.15,
          "isCompound": false,
          "sourceModifiedDate": "2022-04-25T02:45:27"
      },
      {
          "id": "9b827a3b-c9aa-4135-be39-20c898f9216d",
          "name": "Sales Tax (20%)",
          "rate": 0.2,
          "isCompound": false,
          "sourceModifiedDate": "2021-03-05T10:53:27"
      },
      {
          "id": "cf993fff-db15-4d8a-a7de-f72f4ac0a6cc",
          "name": "Tax Exempt",
          "rate": 0,
          "isCompound": false,
          "sourceModifiedDate": "2021-01-23T12:42:27"
      }
  ]
}
```
