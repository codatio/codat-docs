---
title: "BigCommerce integration reference"
description: "Things to know when pulling data from BigCommerce"
createdAt: "2022-07-18T14:18:56.217Z"
updatedAt: "2022-10-19T16:19:39.964Z"
---

Note the following information when building your application using Codat's BigCommerce integration.

## Commerce Orders

The order status is not available in Orders pulled from BigCommerce. You can review the status of the associated payment using the `Payments.status` field.

## Payments methods

The `sourceModifiedDate` is not available for Payment Methods pulled from BigCommerce.
