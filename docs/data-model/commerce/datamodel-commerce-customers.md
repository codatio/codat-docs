---
title: "Customers"
description: "Details of a company's customers"
createdAt: "2020-09-16T16:17:54.202Z"
updatedAt: "2022-11-22T12:55:14.847Z"
---

Explore the <a className="external" href="https://api.codat.io/swagger/index.html#/CommerceCustomers" target="_blank">Commerce Customers</a> endpoints in Swagger.

You can use the data from the Customers endpoints to calculate key metrics, such as customer churn.

View the coverage for customers in the <a className="external" href="https://knowledge.codat.io/supported-features/commerce?view=tab-by-data-type&dataType=commerce-customers" target="_blank">Data coverage explorer</a>.

## Overview

When a customer places an order with the connected commerce store their details are added to the Customers dataset.

From the Customers endpoints you can retrieve:

- A list of all the customers of a commerce company: `GET/companies/{companyId}/connections/{connectionId}/data/commerce-customers`.
- The details of an individual customer:  
  `GET /companies/{companyId}/connections/{connectionId}/data/commerce-customers/{customerId}`.

## Data model

[block:parameters]
{
"data": {
"h-0": "Field",
"h-1": "Type",
"h-2": "Decription",
"0-0": "**id** ",
"0-1": "_string_ ",
"0-2": "Identifier for the account, unique for the [company](/datamodel-commerce-companyinfo).",
"1-0": "**customerName** ",
"1-1": "_string_ ",
"1-2": "Name of the customer.",
"2-0": "**emailAddress** ",
"2-1": "_string_ ",
"2-2": "Email address the customer can be contacted on.",
"3-0": "**defaultCurrency**",
"3-1": "_string_  
See [currency](/datamodel-shared-currency)",
"3-2": "Default currency of any transactional data for the customer, for example, orders or payments.",
"4-0": "**phone**",
"4-1": "_string_",
"4-2": "Phone number the customer can be contacted on.",
"5-0": "**addresses**",
"5-1": "_array_  
See [addresses](#section-addresses)",
"5-2": "Addresses associated with the customer.",
"6-0": "**note**",
"6-1": "_string_",
"6-2": "Any additional information about the customer.",
"7-0": "**createdDate**",
"7-1": "_string_  
See [date](/datamodel-shared-date)",
"7-2": "Date on which the customer details were created in the commerce or point of sale platform.",
"8-0": "**modifiedDate** ",
"8-1": "_string_  
See [date](/datamodel-shared-date)",
"8-2": "Date the customer details were last updated in the Codat system.",
"9-0": "**sourceModifiedDate** ",
"9-1": "_string_  
See [date](/datamodel-shared-date)",
"9-2": "Date the customer details were last changed in the commerce or point of sale platform."
},
"cols": 3,
"rows": 10,
"align": [
"left",
"left",
"left"
]
}
[/block]

## Addresses

Address details for a customer.

[block:parameters]
{
"data": {
"h-0": "Field",
"h-1": "Type",
"h-2": "Description",
"0-0": "**type**",
"0-1": "_string_",
"0-2": "Type of customer address:  
`billing` — billing address  
`delivery` — delivery address  
`unknown` — unknown on the type of the address",
"1-0": "**line1**",
"1-1": "_string_",
"1-2": "First line of the customer address.",
"2-0": "**line2** ",
"2-1": "_string_",
"2-2": "Second line of the customer address.",
"3-0": "**city** ",
"3-1": "_string_",
"3-2": "City of the customer address.",
"4-0": "**region** ",
"4-1": "_string_",
"4-2": "Region of the customer address.",
"5-0": "**country** ",
"5-1": "_string_",
"5-2": "Country of the customer address.",
"6-0": "**postalCode** ",
"6-1": "_string_",
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

## Example data

```json
{
  "customers": [
    {
      "id": "15",
      "customerName": "Daffy Duck",
      "emailAddress": "d.duck@warnerbros.com",
      "defaultCurrency": "GBP",
      "phone": "(877) 492-8687",
      "addresses": [
        {
          "type": "billing",
          "line1": "301 Duck Pond",
          "line2": "28 Green Street",
          "city": "London",
          "region": "England",
          "country": "United Kingdom",
          "postalCode": "WX1X 0BE"
        },
        {
          "type": "delivery",
          "line1": "Bread Street",
          "line2": "Bird Avenue",
          "city": "Paris",
          "region": "France",
          "country": "France",
          "postalCode": "WDF 123"
        }
      ],
      "note": "Regular customer",
      "createdDate": "0001-01-01T00:00:00",
      "modifiedDate": null,
      "sourceModifiedDate": "2020-09-15T23:52:28"
    },
    {
      "id": "18",
      "customerName": "Tasmanian Devil",
      "emailAddress": "t.devil@warnerbros.com",
      "defaultCurrency": "GBP",
      "phone": "+1-202-555-0181",
      "addresses": [
        {
          "type": "billing",
          "line1": "101 Fire Rooms",
          "line2": "Engine Street",
          "city": "London",
          "region": "England",
          "country": "United Kingdom",
          "postalCode": "WC1X 0BE"
        }
      ],
      "note": "Handle with care",
      "createdDate": "0001-01-01T00:00:00",
      "modifiedDate": null,
      "sourceModifiedDate": "2020-04-16T02:41:52"
    },
    {
      "id": "a99f5e0c-a4db-452f-8d2c-8fd15482b384",
      "customerName": "Bugs Bunny",
      "emailAddress": "b.bunny@warnerbros.com",
      "defaultCurrency": "GBP",
      "phone": "",
      "addresses": [
        {
          "type": "billing",
          "line1": "301 Carrot Street",
          "line2": "Orange Town",
          "city": "Yorkshire",
          "region": "England",
          "country": "United Kingdom",
          "postalCode": "WF1X 0BE"
        },
        {
          "type": "delivery",
          "line1": "424 Field Street",
          "line2": "The Meadow",
          "city": "Paris",
          "region": "France",
          "country": "France",
          "postalCode": "WDF 123"
        }
      ],
      "note": "Regular customer",
      "createdDate": "0001-01-01T00:00:00",
      "modifiedDate": null,
      "sourceModifiedDate": "2020-08-12T14:37:37"
    }
  ]
}
```
