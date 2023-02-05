---
title: "Locations"
description: "Location data relating to where stocks are held and where orders are placed"
createdAt: "2021-10-20T13:08:50.780Z"
updatedAt: "2022-11-22T12:58:54.808Z"
---

Explore the <a className="external" href="https://api.codat.io/swagger/index.html#/CommerceLocations" target="_blank">Commerce Locations</a> endpoints in Swagger.

You can use data from the Locations endpoints to get information on:

- A geographic location where [Product inventory](https://docs.codat.io/docs/datamodel-commerce-products#section-product-variant-inventory) is held.
- A geographic location where an [Order](https://docs.codat.io/docs/datamodel-commerce-orders) was placed.

View the coverage for locations in the <a className="external" href="https://knowledge.codat.io/supported-features/commerce?view=tab-by-data-type&dataType=commerce-locations" target="_blank">Data coverage explorer</a>.

## Overview

The Locations datatype holds information on geographic locations at which stocks of products may be held, as referenced in the [Products data type](https://docs.codat.io/docs/datamodel-commerce-products#section-product-variant-inventory).

Locations also holds information on geographic locations where orders were placed, as referenced in the [Orders data type](https://docs.codat.io/docs/datamodel-commerce-orders).

From the Locations endpoints you can retrieve:

- A list of all the Locations of a commerce company: `GET/companies/{companyId}/connections/{connectionId}/data/commerce-locations`.
- The details of an individual location:  
  `GET /companies/{companyId}/connections/{connectionId}/data/commerce-locations/{locationId}`.

## Data model

[block:parameters]
{
"data": {
"h-0": "Field",
"h-1": "Type",
"h-2": "Decription",
"0-0": "**id** ",
"0-1": "_string_ ",
"0-2": "Unique identifier for the location.",
"1-0": "**name**",
"1-1": "_string_ ",
"1-2": "Name of the location.",
"2-0": "**type**",
"2-1": "[_address_](#section-address)",
"2-2": "Addresses of the location.",
"3-0": "**modifiedDate** ",
"3-1": "_string_  
See [date](https://docs.codat.io/docs/datamodel-shared-date)",
"3-2": "Date the location details were last updated in the Codat system.",
"4-0": "**sourceModifiedDate** ",
"4-1": "_string_  
See [date](https://docs.codat.io/docs/datamodel-shared-date)",
"4-2": "Date the location details were last changed in the commerce or point of sale platform."
},
"cols": 3,
"rows": 5,
"align": [
"left",
"left",
"left"
]
}
[/block]

## Address

Address details for a location.

[block:parameters]
{
"data": {
"h-0": "Field",
"h-1": "Type",
"h-2": "Description",
"0-0": "**addressType**",
"0-1": "_string_",
"0-2": "Type of location address:  
`billing` — billing address  
`delivery` — delivery address  
`inventory` — address of a location where inventory is held",
"1-0": "**line1**",
"1-1": "_string_",
"1-2": "First line of the location address.",
"2-0": "**line2** ",
"2-1": "_string_",
"2-2": "Second line of the location address.",
"3-0": "**city** ",
"3-1": "_string_",
"3-2": "City of the location address.",
"4-0": "**region** ",
"4-1": "_string_",
"4-2": "Region of the location address.",
"5-0": "**country** ",
"5-1": "_string_",
"5-2": "Country of the location address.",
"6-0": "**postalCode** ",
"6-1": "_string_",
"6-2": "Postal code or zip code of the location address."
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

## Example data

```json
{
  	"id": "15",
    "name": "London Warehouse",
    "address": {
        "type": "Inventory"
        "line1": "Warner House",
        "line2": "98 Theobald's Road",
        "city": "London",
        "region": "",
        "country": "United Kingdom",
        "postalCode": "WC1X 8WB"
    },
		"modifiedDate":null,
		"sourceModifiedDate":"2020-08-12T14:37:37"
}
```
