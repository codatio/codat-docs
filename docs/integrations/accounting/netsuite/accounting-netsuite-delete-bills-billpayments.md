---
title: "Delete Bills and Bill payments from NetSuite"
description: "Learn how to delete Bills and Bill payments using the dedicated delete object endpoints."
createdAt: "2022-12-09T17:06:02.593Z"
updatedAt: "2023-01-04T09:51:42.874Z"
---

:::info Future support for deleting data

To check the data types and platforms for which we plan to add support for deleting data, see the [Accounting API Public Product Roadmap](https://portal.productboard.com/codat/7-public-product-roadmap/tabs/46-accounting-api).

:::

The _Delete bill_ and _Delete bill payment_ endpoints allow you to delete specified Bills and Bill payments from Oracle NetSuite.

1. Make a `DELETE` request to the relevant endpoint, specifying the _Codat ID_ of the Bill or Bill payment to be deleted in the request URL:
   
   ```http title="Delete a Bill"
   DELETE /companies/{companyId}/connections/{connectionId}/push/bills/{billId}
   ```
   
   ```http title="Delete a Bill payment"
   DELETE /companies/{companyId}/connections/{connectionId}/push/billPayments/{billPaymentId}
   ```

   :::info Bill payment IDs   
   
   If deleting a Bill payment, the format of the ID must be either:

   - A numeric string.
   - Two numeric strings separated by a hyphen, e.g. `12345-67890`.

   :::

2. [List push operations](/codat-api#/operations/get-companies-companyId-push) for the company. A `Success` status for the push operation means the Bill or Bill payment object was deleted from NetSuite.

3. Go to the NetSuite UI and check that the Bill or Bill Payment object no longer exists.

## Deleting Bills linked to Bill payments

To delete a Bill that's already linked to a Bill payment, you must delete the linked Bill payment first.

## How deleting Bill payments works

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

<img src="/img/old/5a8b826-netsuite-deposit-other-deposits-lines.png" />

