---
title: "Mollie integration reference"
description: "Things to know when pulling data from Mollie"
createdAt: "2022-05-27T14:07:23.367Z"
updatedAt: "2022-10-20T08:48:19.088Z"
---

:::info Data type coverage

View the coverage of our Mollie integration in the <a className="external" href="https://knowledge.codat.io/supported-features/commerce?view=tab-by-integration&integrationKey=dxfw" target="_blank">Data coverage explorer</a>.
:::

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

|Mollie record and field|Codat data type|Status|
|----|----|----|
|`Settlements.status`|[Transactions](/commerce-api#/schemas/transactions)|The transaction status in Codat does not reflect `open` or `pending` settlements in Mollie.|
|`Payments.method`|[Payments](/commerce-api#/schemas/payments) `Payments.method.type`|Only the `creditcard` and `paypal` payment methods are reflected in Codat. All other payment methods are shown as `Custom`.|
