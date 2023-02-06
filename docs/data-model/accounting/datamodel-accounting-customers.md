---
title: "Customers"
description: "A person or an organization that buys goods or services from a company"
createdAt: "2019-02-19T10:50:04.772Z"
updatedAt: "2022-11-21T11:12:02.020Z"
---

Explore the <a className="external" href="https://api.codat.io/swagger/index.html#/Customers" target="_blank">Customers</a> endpoints in Swagger.

View the coverage for customers in the <a className="external" href="https://knowledge.codat.io/supported-features/accounting?view=tab-by-data-type&dataType=customers" target="_blank">Data coverage explorer</a>.

## Overview

A customer is a person or organisation that buys goods or services. From the Customers endpoints, you can retrieve a [list of all the customers of a company](https://api.codat.io/swagger/index.html#/Customers/get_companies__companyId__data_customers).

Customers' data links to accounts receivable [invoices](/datamodel-accounting-invoices).

## Data model

[block:parameters]
{
"data": {
"h-0": "Field",
"h-1": "Type",
"h-2": "Description",
"0-0": "**id** ",
"0-1": "_string_",
"0-2": "Identifier for the customer, unique to the [company](/datamodel-accounting-company) in the accounting platform.",
"1-0": "**customerName** ",
"1-1": "_string_",
"1-2": "Name of the customer as recorded in the accounting system, typically the company name.",
"2-0": "**contactName** ",
"2-1": "_string_",
"2-2": "Name of the main contact for the identified customer.",
"3-0": "**emailAddress** ",
"3-1": "_string_",
"3-2": "Email address the customer can be contacted by.",
"4-0": "**defaultCurrency** ",
"4-1": "_string_  
See [currency](/datamodel-shared-currency)",
"4-2": "Default currency the transactional data of the customer is recorded in.",
"5-0": "**phone** ",
"5-1": "_string_",
"5-2": "Phone number the customer can be contacted by.",
"6-0": "**addresses** ",
"6-1": "",
"6-2": "An array of [Addresses](#section-addresses).",
"7-0": "**contacts** ",
"7-1": "",
"7-2": "An array of [Contacts](#contacts).",
"8-0": "**registrationNumber** ",
"8-1": "_string_",
"8-2": "Company number. In the UK, this is typically the Companies House company registration number.",
"9-0": "**taxNumber** ",
"9-1": "_string_",
"9-2": "Company tax number.",
"10-0": "**status** ",
"10-1": "_string_",
"10-2": "Current state of the customer, either:

- `Unknown`
- `Active`
- `Archived`",
  "11-0": "**modifiedDate** ",
  "11-1": "_string_  
  See [date](/datamodel-shared-date)",
  "11-2": "Date the record was last updated in the Codat system.",
  "12-0": "**sourceModifiedDate** ",
  "12-1": "_string_  
  See [date](/datamodel-shared-date)",
  "12-2": "Date the record was last changed in the accounting system."
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

### Addresses

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
  "1-2": "Line 1 of the customer address.",
  "2-0": "**line2** ",
  "2-1": "_string_ ",
  "2-2": "Line 2 of the customer address.",
  "3-0": "**city** ",
  "3-1": "_string_ ",
  "3-2": "City of the customer address.",
  "4-0": "**region** ",
  "4-1": "_string_ ",
  "4-2": "Region of the customer address.",
  "5-0": "**country** ",
  "5-1": "_string_ ",
  "5-2": "Country of the customer address.",
  "6-0": "**postalCode** ",
  "6-1": "_string_ ",
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

### Contacts

[block:parameters]
{
"data": {
"h-0": "Field",
"h-1": "Type",
"h-2": "Description",
"0-0": "**name** ",
"0-1": "_string_",
"0-2": "Name of a contact for a customer.",
"1-0": "**email** ",
"1-1": "_string_",
"1-2": "Email of a contact for a customer.",
"2-0": "**phone** ",
"2-1": "",
"2-2": "An array of [Phone](#section-phone-numbers) numbers.",
"3-0": "**address** ",
"3-1": "",
"3-2": "An object of [Address](#section-addresses) information.",
"4-0": "**status** ",
"4-1": "_string_",
"4-2": "Status of customer contacts, either:

- `Active`
- `Archived`
- `Unknown`

Customers can have multiple contacts."
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

### Phone numbers

[block:parameters]
{
"data": {
"h-0": "Field",
"h-1": "Type",
"h-2": "Description",
"0-0": "**number** ",
"0-1": "_string_",
"0-2": "Phone number for a customer contact.",
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

### Customer reference

Data types that reference a customer, for example invoices, credit notes and payments, use a [customer reference](/datamodel-accounting-referencetypes#customerref) that includes the ID and name of the linked customer.

| Field    | Type     | Description                                                    |
| :------- | :------- | :------------------------------------------------------------- |
| **id**   | _string_ | Unique identifier for the customer in the accounting platform. |
| **name** | _string_ | Name of the customer in the accounting platform.               |

## Example data

```json
{
  "results": [
    {
      "id": "71",
      "customerName": "Wile E. Coyote",
      "contactName": "Mr W.E. Coyote",
      "emailAddress": "w.coyote@warnerbros.com",
      "defaultCurrency": "USD",
      "phone": null,
      "addresses": [],
      "contacts": [
        {
          "name": "Mr W.E. Coyote",
          "email": "w.coyote@warnerbros.com",
          "phone": [],
          "address": {
            "type": "Billing",
            "line1": "Coyote Bungalow",
            "line2": "",
            "city": "Mohave Valley",
            "region": "Arizona",
            "country": "USA",
            "postalcode": "86440"
          },
          "status": "Active",
          "modifiedDate": null
        }
      ],
      "registrationNumber": "12345",
      "taxNumber": "1357924680123456",
      "status": "Unknown",
      "modifiedDate": null,
      "sourceModifiedDate": null
    }
  ],
  "pageNumber": 1,
  "pageSize": 100,
  "totalResults": 1,
  "_links": {
    "current": {
      "href": "/companies/919371ab-763c-4bc7-99a4-9723cade34d3/data/customers?page=1"
    },
    "self": {
      "href": "/companies/919371ab-763c-4bc7-99a4-9723cade34d3/data/customers"
    }
  }
}
```
