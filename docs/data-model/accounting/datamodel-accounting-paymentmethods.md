---
title: "Payment Methods"
description: "The payment method used to pay a bill"
createdAt: "2021-10-21T08:22:20.013Z"
updatedAt: "2022-11-21T12:26:52.235Z"
---

Explore the <a className="external" href="https://api.codat.io/swagger/index.html#/PaymentMethods" target="_blank">Payment Methods</a> endpoints in Swagger.

View the coverage for payment methods in the <a className="external" href="https://knowledge.codat.io/supported-features/accounting?view=tab-by-data-type&dataType=paymentMethods" target="_blank">Data coverage explorer</a>.

## Overview

A Payment Method represents the payment method(s) used to pay a Bill. Payment Methods are referenced on [Bill Payments](/datamodel-accounting-billpayments) and [Payments](/datamodel-accounting-payments).

From the Payment Methods endpoints you can retrieve:

- A list of all the Payment Methods used by a company: `GET/companies/{companyId}/data/paymentMethods`.
- The details of an individual Payment Method:  
  `GET /companies/{companyId}/data/paymentMethods/{paymentMethodId}`.

## Data model

[block:parameters]
{
"data": {
"h-0": "Field",
"h-1": "Type",
"h-2": "Decription",
"0-0": "**id** ",
"0-1": "_string_ ",
"0-2": "Unique identifier for the payment method.",
"1-0": "**name**",
"1-1": "_string_ ",
"1-2": "Name of the payment method.",
"2-0": "**type**",
"2-1": "_string_",
"2-2": "Method of payment:

- `Cash`
- `Check`
- `CreditCard`
- `DebitCard`
- `BankTransfer`
- `Unknown`
- `Other`",
  "3-0": "**status**",
  "3-1": "_string_",
  "3-2": "Status of the Payment Method:
- `Active`: Available for use
- `Archived`: Unavailable
- `Unknown`",
  "4-0": "**modifiedDate** ",
  "4-1": "_string_  
  See [date](/datamodel-shared-date)",
  "4-2": "Date the payment method details were last updated in the Codat system.",
  "5-0": "**sourceModifiedDate** ",
  "5-1": "_string_  
  See [date](/datamodel-shared-date)",
  "5-2": "Date the payment method details were last changed in the accounting system."
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

## Example data

```json
{
  "id": "15",
  "name": "Team Credit Card",
  "type": "CreditCard",
  "status": "Active",
  "modifiedDate": null,
  "sourceModifiedDate": "2020-08-12T14:37:37"
}
```
