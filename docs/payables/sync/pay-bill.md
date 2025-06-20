---
title: Create bill payments
sidebar_label: Pay a bill
displayed_sidebar: payables
description: "Record and reconcile bill payments in the SMB's accounting software"
---

## Overview

Finally, your SMB customer will make a payment from your application, which you should then record and reconcile back to the SMB's accounting software. A **bill payment** represents an allocation of money within any of your customer's accounts payable (AP) accounts.

:::tip Bill type coverage
Our **sync Bill Pay** solution focuses on providing a fast implementation experience and streamlined recording of payments. As a result, it supports payments of **single bills only**. If you want to cover more bill types, review our [async Bill Pay solution](/payables/async/payments).
:::

## Manage payment accounts

:::tip Foreign currency payments

If you facilitate payments in a foreign currency, you should convert the payment to the currency of the account or create a new account in that currency.

:::

Your SMB customers may have multiple bank accounts they can use to pay for a bill. In your application, enable them to set the bank account the payment should originate from.

### Retrieve accounts

If your SMB customer is making payments from an existing bank account, retrieve a list of their accounts and allow them to map payment methods against each one. Use the [Get payment mapping options](/sync-for-payables-v2-api#/operations/get-mapping-options-payments) endpoint to do so.

By default, this endpoint returns a list of active bank accounts. You can use [querying](/using-the-api/querying) to change that.

### Create account

If the SMB customer plans to make payments from a new payment method or account that you provide, create the new account in their accounting software using our simplified [Create bank account](/sync-for-payables-v2-api#/operations/create-bank-account) endpoint. The account will contain their transactions, making the SMB's payment reconciliation workflows easier.

## Record a payment

:::tip Partial payments

Our sync Bill Pay solution supports payments where a singe bill is paid **in full**. To record a partial payment, use the same endpoint and adjust the values to reflect the amount of the partial payment.

:::

When an SMB pays their bill in your application, use the [Create bill payment](/sync-for-payables-v2-api#/operations/create-bill-payment) endpoint to represent this allocation of money in your customer's accounting software. This endpoint uses a simplified bill payment model, requiring only the following fields: `amount`, `date`, `reference`, `accountRef`, and `currencyRate`.

:::tip Recap

This concludes the bill pay process supported by our synchronous Bill Pay solution. You have provided your customer with their suppliers, bills, and bank accounts and enabled them to choose relevant payment methods. You have reflected the bill payments in their accounting system.

As a result, the customer will see these bills marked as paid in their software and their accounts payable liability and supplier balances reduced.

:::
