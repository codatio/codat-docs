---
title: "Company info"
description: "Commercial details about a linked company"
createdAt: "2021-04-28T13:51:11.845Z"
updatedAt: "2022-11-22T12:53:10.201Z"
---

Explore the <a className="external" href="https://api.codat.io/swagger/index.html#/CommerceInfo" target="_blank">Commerce Info</a> endpoint in Swagger.

View the coverage for company info in the <a className="external" href="https://knowledge.codat.io/supported-features/commerce?view=tab-by-data-type&dataType=companyInfo" target="_blank">Data coverage explorer</a>.

## Overview

In the Codat system, company information includes standard commercial details about a linked company, such as their address, phone number, and company registration.

## Data model

[block:parameters]
{
"data": {
"h-0": "Field",
"h-1": "Type",
"h-2": "Description",
"0-0": "**companyName** ",
"0-1": "_string_ ",
"0-2": "Name of the linked company.",
"1-0": "**companyLegalName** ",
"1-1": "_string_",
"1-2": "Registered legal name of the linked company.",
"2-0": "**addresses** ",
"2-1": "",
"2-2": "An array of [Addresses](#section-addresses).",
"3-0": "**phoneNumbers** ",
"3-1": "",
"3-2": "An array of [Phone numbers](#section-phone-numbers).",
"4-0": "**webLinks** ",
"4-1": "",
"4-2": "An array of [Web links](#section-web-links).",
"5-0": "**registrationNumber** ",
"5-1": "_string_",
"5-2": "Registration number given to the linked company by the companies authority in the country of origin. In the UK this is Companies House.",
"6-0": "**baseCurrency** ",
"6-1": "_string_  
See [currency](/datamodel-shared-currency)",
"6-2": "Currency set in the commerce platform of the linked company. Used by the [currency rate](/datamodel-shared-currencyrate).",
"7-0": "**accountBalances**",
"7-1": "",
"7-2": "An array of [Account balances](#section-account-balances).",
"8-0": "**sourceUrls** ",
"8-1": "_dictionary of strings_",
"8-2": "URL addresses for the source of commerce data.",
"9-0": "**createdDate** ",
"9-1": "_string_  
See [date](/datamodel-shared-date)",
"9-2": "Date the linked company was created in the commerce platform.",
"10-0": "**modifiedDate** ",
"10-1": "_string_  
See [date](/datamodel-shared-date)",
"10-2": "Date the record was last updated in the Codat system.",
"11-0": "**sourceModifiedDate** ",
"11-1": "_string_  
See [date](/datamodel-shared-date)",
"11-2": "Date the record was last changed in the commerce system."
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

### Addresses

[block:parameters]
{
"data": {
"h-0": "Field",
"h-1": "Type",
"h-2": "Description",
"0-0": "**type** ",
"0-1": "_string_",
"0-2": "Type of address, either:

- `Billing`
- `Delivery`
- `Unknown`",
  "1-0": "**line1** ",
  "1-1": "_string_",
  "1-2": "Line 1 of the address for the linked company.",
  "2-0": "**line2** ",
  "2-1": "_string_",
  "2-2": "Line 2 of the address for the linked company.",
  "3-0": "**city** ",
  "3-1": "_string_",
  "3-2": "City address of the linked company.",
  "4-0": "**region** ",
  "4-1": "_string_",
  "4-2": "Regional address of the linked company.",
  "5-0": "**country** ",
  "5-1": "_string_",
  "5-2": "Country address of the linked company.",
  "6-0": "**postalCode** ",
  "6-1": "_string_",
  "6-2": "Postal code or zip code address of the linked company."
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

### Phone numbers

[block:parameters]
{
"data": {
"h-0": "Field",
"h-1": "Type",
"h-2": "Description",
"0-0": "**number** ",
"0-1": "_string_",
"0-2": "Phone number of the linked company.",
"1-0": "**type** ",
"1-1": "_string_",
"1-2": "Type of phone number, either:

- `Primary`
- `Landline`
- `Mobile`
- `Fax`
- `Unknown`"
  },
  "cols": 3,
  "rows": 2,
  "align": [
  "left",
  "left",
  "left"
  ]
  }
  [/block]

### Web links

[block:parameters]
{
"data": {
"h-0": "Field",
"h-1": "Type",
"h-2": "Description",
"0-0": "**type** ",
"0-1": "_string_",
"0-2": "Type of web link, either:

- `Website`
- `Social`
- `Unknown`",
  "1-0": "**url** ",
  "1-1": "_string_",
  "1-2": "URL of a web link for a linked company."
  },
  "cols": 3,
  "rows": 2,
  "align": [
  "left",
  "left",
  "left"
  ]
  }
  [/block]

### Account balances

A company can have more than one account balance record as their balance is split by currency. There will only be one account balance record per currency.

| Field         | Type      | Description                                                                   |
| :------------ | :-------- | :---------------------------------------------------------------------------- |
| **available** | _decimal_ | The current balance. These funds are available to be transferred or paid out. |
| **pending**   | _decimal_ | Funds that are not yet available to be transferred or paid out.               |
| **reserved**  | _decimal_ | Funds reserved as holdings by the payment processor or gateway.               |
| **currency**  | _string_  | The currency of the balance.                                                  |

## Example data

```json Example respons for company info
{
  "companyInfo": {
    "companyName": "Default Test Account",
    "addresses": [
      {
        "type": "Unknown",
        "line1": "12 Downing St",
        "city": "London",
        "country": "GB",
        "postalCode": "SW1A 2AA"
      }
    ],
    "phoneNumbers": [
      {
        "number": "+442012345678",
        "type": "Unknown"
      }
    ],
    "webLinks": [
      {
        "type": "Website",
        "url": "https://codat.io"
      }
    ],
    "baseCurrency": "GBP",
    "accountBalances": [
      {
        "available": 100.0,
        "pending": 12.32,
        "reserved": 2.0,
        "currency": "GBP"
      }
    ],
    "sourceUrls": {
      "url1": "https://connect.sandbox.com/v2/customers",
      "url2": "https://connect.sandbox.com/v2/disputes"
    },
    "createdDate": "2021-04-28T15:25:17.119Z",
    "modifiedDate": "2021-04-28T15:25:17.119Z",
    "sourceModifiedDate": "2021-04-28T15:25:17.119Z"
  }
}
```
