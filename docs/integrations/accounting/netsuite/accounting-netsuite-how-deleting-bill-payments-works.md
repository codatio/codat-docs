---
title: "How deleting Bill payments works"
sidebar_label: "Delete Bill payments"
description: "Learn how deleting Bill payments works in NetSuite."
---

Depending on the original data that was pushed, a Codat Bill payment is created in NetSuite as one of the following objects:

- Bill Payment
- Vendor Prepayment Application (when applied to one or more Bills)
- Bill Credit (when applied to one or more Bills)
- Deposit (only Deposit lines affecting Accounts Payable originate from Bill payments)

NetSuite handles the deletion of each of these differently.

Bill Payments and Vendor Prepayment Applications (when applied to Bills) are removed from NetSuite.

If you specify a `billPaymentId` that corresponds to a Bill Credit in NetSuite, the Bill Credit object itself is not deleted. The Bill Credit is updated so that it no longer applies to any Bills, and is shown as _Unapplied_. For example:

<img src="/img/old/5bc9146-netsuite-bill-credit-unapplied.jpg" />

If you specify a `billPaymentId` that corresponds to a Deposit in NetSuite, only Deposit lines that affect Accounts Payable are deleted. These lines are displayed in the **Other Deposits** and **Cash Back** tabs on the Deposit:

![Image](/img/integrations/accounting/netsuite/netsuite_deposite-other-deposits.png "A NetSuite Deposit with the Other Deposits and Cash Back tabs highlighted.")

:::info Support for object deletion

To check which data types and platforms support object deletion, call the [List integrations](/codat-api#/operations/list-integrations) endpoint. 

We're increasing support for object deletion across various accounting platforms and data types. You can check our [Accounting API Public Product Roadmap](https://portal.productboard.com/codat/7-public-product-roadmap/tabs/46-accounting-api) for the latest status.

:::
