---
title: "Orders"
description: "Transaction details for products sold"
createdAt: "2020-09-17T09:23:34.384Z"
updatedAt: "2022-11-22T12:59:33.891Z"
---

Explore the <a className="external" href="https://api.codat.io/swagger/index.html#/CommerceOrders" target="_blank">Commerce Orders</a> endpoints in Swagger.

You can use data from the Orders endpoints to calculate key metrics, such as gross sales values and monthly recurring revenue (MRR).

View the coverage for orders in the <a className="external" href="https://knowledge.codat.io/supported-features/commerce?view=tab-by-data-type&dataType=commerce-orders" target="_blank">Data coverage explorer</a>.

## Overview

Orders contain the transaction details for all products sold by the company, and include details of any payments, service charges, or refunds related to each order.

From the Orders endpoints you can retrieve:

- A list of all the orders for a commerce company:  
  `GET /companies/{companyId}/connections/{connectionId}/data/commerce-orders`.
- The details of an individual order:  
  `GET /companies/{companyId}/connections/{connectionId}/data/commerce-orders/{orderId}`.

Note that for refunds `quantity` is a negative value and `unitPrice` is a positive value.

## Data model

[block:parameters]
{
"data": {
"h-0": "Field",
"h-1": "Type",
"h-2": "Description",
"0-0": "**id**",
"0-1": "_string_",
"0-2": "Identifier of the order, unique to the [company](/datamodel-commerce-companyinfo).",
"1-0": "**orderNumber**",
"1-1": "_string_ ",
"1-2": "Friendly reference for the order in the commerce or point of sale platform.",
"2-0": "**country**",
"2-1": "_string_",
"2-2": "ISO code for the country where the order was placed.",
"3-0": "**currency**",
"3-1": "_string_  
See [currency](/datamodel-shared-currency)",
"3-2": "Currency in which the order was placed.",
"4-0": "**createdDate**",
"4-1": "_string_  
See [date](/datamodel-shared-date)",
"4-2": "Date on which the order was first recorded in the commerce or point of sale platform.",
"5-0": "**closedDate**",
"5-1": "_string (optional)_",
"5-2": "Date on which order was closed after the product was shipped, paid for, and any refund period had elapsed.",
"6-0": "**totalAmount**",
"6-1": "_decimal_",
"6-2": "Total amount of the order, including tax, net of any discounts and refunds.",
"7-0": "**totalRefund**",
"7-1": "_decimal_",
"7-2": "Total amount refunded issued by a merchant on an order (always a negative value).",
"8-0": "**totalTaxAmount**",
"8-1": "_decimal_",
"8-2": "Total amount of tax applied to the order.",
"9-0": "**totalDiscount**",
"9-1": "_decimal_",
"9-2": "Total amount of discount applied to the order.",
"10-0": "**totalGratuity**",
"10-1": "_decimal_",
"10-2": "Extra amount added to a bill.",
"11-0": "**orderLineItems**",
"11-1": "_array_  
See [order line items](#section-order-line-items)",
"11-2": "Line items relating to the order.",
"12-0": "**payments**",
"12-1": "_array_  
See [payments](/datamodel-commerce-payments)",
"12-2": "Payments for this order.",
"13-0": "**serviceCharges**",
"13-1": "_array_  
See [serviceCharges](#section-service-charges)",
"13-2": "Service charges for this order.",
"14-0": "**locationRef**",
"14-1": "_[reference type](/datamodel-commerce-referencetypes#section-locationref)_",
"14-2": "Reference to the geographic location where the order was placed.",
"15-0": "**customerRef**",
"15-1": "_[reference type](/datamodel-commerce-referencetypes#section-customerref)_",
"15-2": "Reference to the customer that placed the order.",
"16-0": "**modifiedDate** ",
"16-1": "_string_  
See [date](/datamodel-shared-date)",
"16-2": "Date the order was last updated in the Codat system.",
"17-0": "**sourceModifiedDate** ",
"17-1": "_string_  
See [date](/datamodel-shared-date)",
"17-2": "Date the order was last changed in the commerce or point of sale platform."
},
"cols": 3,
"rows": 18,
"align": [
"left",
"left",
"left"
]
}
[/block]

## Order line items

[block:parameters]
{
"data": {
"h-0": "Field",
"h-1": "Type",
"h-2": "Description",
"0-0": "**id** ",
"0-1": "_string_ ",
"0-2": "Identifier of the line item, unique to the order.",
"1-0": "**quantity**",
"1-1": "_decimal_",
"1-2": "Number of units of the product sold.

For refunds, quantity is a negative value.",
"2-0": "**taxPercentage**",
"2-1": "_decimal_",
"2-2": "Percentage rate (from 0 to 100) of any sale tax applied to the unit amount.",
"3-0": "**totalAmount**",
"3-1": "_decimal_",
"3-2": "Total price of the line item, including discounts, tax and minus any refunds.",
"4-0": "**totalTaxAmount**",
"4-1": "_decimal_",
"4-2": "Total amount of tax applied to the line item.",
"5-0": "**unitPrice**",
"5-1": "_decimal_",
"5-2": "Price per unit of goods or service.",
"6-0": "**productRef**",
"6-1": "_[reference type](/datamodel-commerce-referencetypes#section-productref)_",
"6-2": "Reference that links the line item to the correct product details.",
"7-0": "**productVariantRef**",
"7-1": "_[reference type](/datamodel-commerce-referencetypes#section-productvariantref)_",
"7-2": "Reference that links the line item to the specific version of product that has been ordered.",
"8-0": "**discountAllocations**",
"8-1": "_array_  
See [discountAllocations](#section-discount-allocations).",
"8-2": "Discounts applied to this line item."
},
"cols": 3,
"rows": 9,
"align": [
"left",
"left",
"left"
]
}
[/block]

### Discount allocations

Details or any discounts applied to an order line item.

| Field           | Type      | Description                                                     |
| :-------------- | :-------- | :-------------------------------------------------------------- |
| **name**        | _string_  | Name of the discount in the commerce or point of sale platform. |
| **totalAmount** | _decimal_ | Total amount of discount applied.                               |

## Payments

Details of a customer's payment for their order.  
See [payments](/datamodel-commerce-payments).

## Service charges

Details of any service charges applied to the order.

[block:parameters]
{
"data": {
"h-0": "Field",
"h-1": "Type",
"h-2": "Description",
"0-0": "**description** ",
"0-1": "_string_ ",
"0-2": "Description of the service charge.",
"1-0": "**totalAmount**",
"1-1": "_decimal_",
"1-2": "Total service charge, including taxes.",
"2-0": "**taxPercentage**",
"2-1": "_decimal_",
"2-2": "Percentage rate (from 0 to 100) of any tax applied to the service charge.",
"3-0": "**taxAmount**",
"3-1": "_decimal_",
"3-2": "Amount of the service charge that is tax.",
"4-0": "**quantity**",
"4-1": "_integer_",
"4-2": "Number of times the service charge is applied to a purchase.",
"5-0": "**type**",
"5-1": "_string_",
"5-2": "Type of service charge applied:

_ `Unknown`  
_ `Generic`  
_ `Shipping`  
_ `Overpayment`"
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
  "id": "01e63721-1205-478e-8503-9d8bf8a93f44",
  "orderNumber": "99123956",
  "country": "CAN",
  "currency": "CAD",
  "createdDate": "2021-03-28T03:00:14",
  "totalAmount": 12.0,
  "totalRefund": 0,
  "totalTaxAmount": 2.0,
  "totalDiscount": 0,
  "totalGratuity": 1.0,
  "orderLineItems": [
    {
      "id": "116113a6-54d3-4624-ba73-26a77a5ffd51",
      "quantity": 1,
      "taxPercentage": 20,
      "totalAmount": 12.0,
      "totalTaxAmount": 2.0,
      "unitPrice": 10.0,
      "productRef": {
        "id": "ac186646-41f2-4280-afea-1012c59459ab",
        "name": "Intelligent Concrete Salad"
      },
      "productVariantRef": {
        "id": "f9ca9de5-9e31-460d-ac81-368f4e7c8fc0",
        "name": "Small Incredible Wooden Soap"
      },
      "discountAllocations": []
    }
  ],
  "payments": [
    {
      "id": "defdceb6-83a3-4b7d-a74e-e9ef947d5f48",
      "amount": 12.0,
      "currency": "CAD",
      "type": "Paypal",
      "status": "Unknown",
      "dueDate": "2021-04-04T03:00:14",
      "createdDate": "2021-03-28T03:00:14",
      "modifiedDate": "2022-02-02T11:02:45"
    }
  ],
  "serviceCharges": [
    {
      "description": "Service Charge",
      "totalAmount": 1.2,
      "taxPercentage": 20,
      "taxAmount": 0.2,
      "quantity": 1,
      "type": "Generic"
    }
  ],
  "locationRef": {
    "id": "47bbffc7-c045-4b0f-a3bb-ecf1f669edfa"
  },
  "customerRef": {
    "id": "2634d180-7205-43f0-a73d-84af6443a005",
    "name": "Emmy Roberts"
  },
  "modifiedDate": "2022-02-02T11:02:45Z",
  "sourceModifiedDate": "2021-03-28T03:00:14"
}
```
