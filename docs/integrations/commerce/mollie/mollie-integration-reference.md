---
title: "Mollie integration reference"
description: "Things to know when pulling data from Mollie"
createdAt: "2022-05-27T14:07:23.367Z"
updatedAt: "2022-10-20T08:48:19.088Z"
---

Note the following information when building your application using Codat's Mollie integration.

## Disputes

Disputes are mapped from the Mollie chargebacks API. The dispute `status` is not available for chargebacks retrieved from Mollie.

:::info Chargebacks in Mollie

In Mollie, a chargeback is a payment reversal issued to a customer who raised a dispute about a payment or order. For more information, see <a href="https://help.mollie.com/hc/en-us/articles/115001470869-What-are-chargebacks-" target="_blank">What are chargebacks?</a> in the Mollie knowledge base.
:::

## Orders

When pulling orders from Mollie, line items of type `shipping_fee` and `surcharge` are shown as service charges in Codat (indicated in the `Orders.serviceCharges` field).

## Transactions

Transactions include Mollie settlements, which are indicated in Codat with the transaction type of `Payout`. They are retrieved from the Mollie settlements API.

:::info Settlements in Mollie

In Mollie, settlements are monies paid from a company’s Mollie balance to their own bank account. They show the included payments and any deductions for refunds, chargebacks, and so on.
:::

## Field coverage for supported data types

Codat's data model supports a wide range of fields within each data type.

Sometimes a provider's API does not grant access to a field that exists in a Codat data type. Conversely, our data model sometimes does not support all the relevant fields on an object in a provider's API.

The following table highlights selected fields that are not available in data pulled from Mollie.

### Unavailable Codat fields

[block:parameters]
{
"data": {
"h-0": "Mollie record and field",
"h-1": "Codat data type",
"h-2": "Status",
"0-0": "`Settlements.status`",
"0-1": "[Transactions](/data-model/commerce/-transactions)",
"0-2": "The transaction status in Codat does not reflect `open` or `pending` settlements in Mollie.",
"1-0": "`Payments.method`",
"1-1": "[Payments](/data-model/commerce/-payments)

`Payments.method.type`",
"1-2": "Only the `creditcard` and `paypal` payment methods are reflected in Codat. All other payment methods are shown as `Custom`."
},
"cols": 3,
"rows": 2
}
[/block]
