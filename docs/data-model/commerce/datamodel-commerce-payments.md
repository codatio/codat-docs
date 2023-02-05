---
title: "Payments"
description: "Details of payments made by customers to a company"
createdAt: "2021-04-19T13:40:07.950Z"
updatedAt: "2022-11-22T13:00:17.737Z"
---

Explore the <a className="external" href="https://api.codat.io/swagger/index.html#/CommercePayments" target="_blank">Commerce Payments</a> endpoints in Swagger.

You can use data from the Payments endpoints to calculate key metrics, such as gross sales and monthly recurring revenue (MRR).

View the coverage for payments in the <a className="external" href="https://knowledge.codat.io/supported-features/commerce?view=tab-by-data-type&dataType=commerce-payments" target="_blank">Data coverage explorer</a>.

## Overview

Payments contain details of all payments made by customers to a company, including: amounts, currency used, payment method, payment provider, and payment status.

Refunds are recorded as separate, negative payments. Note that a refund can only occur in relation to a payment that has been completed (i.e. has a status of `Paid`). When a customer cancels an order _before_ a payment has been completed, the payment shows as `Cancelled`.

From the Payments endpoints you can retrieve:

- A list of all commerce payments available for a company  
  `GET /companies/{companyId}/connections/{connectionId}/data/commerce-payments`

- A single commerce payment for a given company  
  `GET /companies/{companyId}/connections/{connectionId}/data/commerce-payments/{paymentId}`

## Data model

[block:parameters]
{
"data": {
"h-0": "Field",
"h-1": "Type",
"h-2": "Description",
"0-0": "id",
"0-1": "_string_",
"0-2": "Identifier of the payment",
"1-0": "amount",
"1-1": "_decimal_",
"1-2": "Payment amount (including gratuity)",
"2-0": "currency",
"2-1": "_string_  
See [currency](https://docs.codat.io/docs/datamodel-shared-currency)",
"2-2": "Currency in which the payment was made",
"3-0": "paymentMethodRef",
"3-1": "See [Reference types](https://docs.codat.io/docs/datamodel-commerce-referencetypes#paymentmethodref)",
"3-2": "The [Payment Methods](https://docs.codat.io/docs/datamodel-commerce-paymentmethods) the payment is linked to in the commerce platform.",
"4-0": "type",
"4-1": "_string_",
"4-2": "Payment method:

_ `Unknown`  
_ `Cash`  
_ `Card`  
_ `Custom`  
_ `Invoice`  
_ `OnlineCard`  
_ `Swish`  
_ `Vipps`  
_ `Mobile`  
_ `StoreCredit`  
_ `Paypal`  
_ `Prepaid`",
"5-0": "status",
"5-1": "_string_",
"5-2": "Status of the payment:

_ `Unknown`  
_ `Pending`  
_ `Authorised`  
_ `Paid`  
_ `Failed`  
_ `Cancelled`",
"6-0": "paymentProvider",
"6-1": "_string_",
"6-2": "Service provider of the payment, if applicable.",
"7-0": "dueDate",
"7-1": "_string_  
See [date](https://docs.codat.io/docs/datamodel-shared-date)",
"7-2": "Date by which payment must be made",
"8-0": "createdDate",
"8-1": "_string_  
See [date](https://docs.codat.io/docs/datamodel-shared-date)",
"8-2": "Date on which the payment was made and recorded in the commerce or point of sale platform",
"9-0": "modifiedDate",
"9-1": "_string_  
See [date](https://docs.codat.io/docs/datamodel-shared-date)",
"9-2": "Date the payment was last updated in the Codat system",
"10-0": "sourceModifiedDate",
"10-1": "_string_  
See [date](https://docs.codat.io/docs/datamodel-shared-date)",
"10-2": "Date the payment was last changed in the commerce or point of sale platform"
},
"cols": 3,
"rows": 11,
"align": [
"left",
"left",
"left"
]
}
[/block]

## Example data

```json Payments - example data
{
  "id": "000951f2-81f5-4618-bb6f-684e6ec7a00b",
  "amount": 2.2,
  "currency": "CAD",
  "paymentMethodRef": {
    "id": "2e4aaf71-0784-4c26-b870-eb5e14b5ee6e",
    "name": "Stripe"
  },
  "status": "Failed",
  "paymentProvider": "Braintree",
  "dueDate": "2022-06-20T05:10:28",
  "createdDate": "2021-07-22T21:27:04",
  "modifiedDate": "2022-05-03T15:45:34Z",
  "sourceModifiedDate": "2021-07-22T21:27:04"
}
```

```json Payments: refund - example data
{
  "id": "f26a112b-d383-487e-8d66-62d3164f81f5",
  "amount": -6,
  "currency": "GBP",
  "paymentMethodRef": {
    "id": "ad23848c-5ee7-4e4a-b1d0-40ef402c3ad8",
    "name": "Square"
  },
  "type": "Vipps",
  "status": "Paid",
  "dueDate": "2021-10-18T16:26:27",
  "createdDate": "2021-10-11T16:26:27"
}
```
