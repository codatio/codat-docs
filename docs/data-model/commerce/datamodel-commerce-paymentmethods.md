---
title: "Payment Methods"
description: "Details of a commerce integration's payment methods"
createdAt: "2022-03-29T12:14:02.633Z"
updatedAt: "2022-11-22T13:08:39.831Z"
---

Explore the <a className="external" href="https://api.codat.io/swagger/index.html#/CommercePaymentMethods" target="_blank">Commerce Payment Methods</a> endpoints in Swagger.

View the coverage for payment methods in the <a className="external" href="https://knowledge.codat.io/supported-features/commerce?view=tab-by-data-type&dataType=commerce-paymentMethods" target="_blank">Data coverage explorer</a>.

## Overview

A Payment Method represents the payment method(s) used to make payments.

From the Payment Methods endpoints you can retrieve:

- A list of all payment methods from a data connection:  
  `GET /companies​/{companyId}​/connections​/{connectionId}​/data​/commerce-paymentMethods`
- The details of an individual payment method:  
  `GET ​/companies​/{companyId}​/connections​/{connectionId}​/data​/commerce-paymentMethods/{paymentMethodId}`

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
"2-0": "**status**",
"2-1": "_string_",
"2-2": "Status of the Payment Method:  
_ `Active`: Available for use  
_ `Archived`: Unavailable  
\\\* `Unknown`",
"3-0": "**modifiedDate**",
"3-1": "_string_  
See [date](https://docs.codat.io/docs/datamodel-shared-date)",
"3-2": "Date the payment method details were last updated in the Codat system.",
"4-0": "**sourceModifiedDate** ",
"4-1": "_string_  
See [date](https://docs.codat.io/docs/datamodel-shared-date)",
"4-2": "Date the payment method details were last changed in the commerce system."
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

## Example data

```json
{
	"id": "ac003a22-0813-4763-9203-6f94046188ae",
	"name": "Alipay",
	"status": "Active",
        "modifiedDate" : "2022-01-01T00:00:00Z"
	"sourceModifiedDate": "2022-03-18T02:17:50Z"
}
```
