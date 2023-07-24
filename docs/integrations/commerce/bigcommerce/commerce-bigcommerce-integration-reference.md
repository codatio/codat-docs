---
title: "BigCommerce integration reference"
description: "Things to know when pulling data from BigCommerce"
sidebar_label: Reference
---

Note the following information when building your application using Codat's BigCommerce integration.

## Commerce Orders

The order status is not available in Orders pulled from BigCommerce. You can review the status of the associated payment using the `Payments.status` field.

:::note Transaction limit on orders

Orders containing more than 250 transactions (payments), are unable to to be fetched for our commerce-payments or commerce-orders datatypes correctly due to limitations of BigCommerce's API.
:::

## Payments methods

The `sourceModifiedDate` is not available for Payment Methods pulled from BigCommerce.
