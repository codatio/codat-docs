---
title: "Xero integration reference"
description: "Things to know when synchronizing data with Xero."
createdAt: "2022-10-13T08:51:19.534Z"
updatedAt: "2022-11-11T10:22:37.675Z"
---

Note the following information when building your application using Codat's Xero integration.

## Items

When pushing Items to Xero, the `type` of the items must be either `Inventory` or `Unknown`. When pushing `Inventory` items, Codat looks up a pre-existing Inventory Account from Xero. This account is used for inventory tracking in Xero when an item is bought or sold.

The validity of the `taxRateRef.id` property on the Item depends on the value of the associated `accountRef.id` on the bill item or invoice item. Some tax rates can only be associated with certain types of accounts; for example, Asset, Liability, Income, Expense, or Equity.

## Accounts

When pulling account balances from Xero, the balance and the currency always use the company's base currency in Codat. This applies even if the source nominal accounts are in a foreign currency. This is how the information is retrieved from the Xero API.
