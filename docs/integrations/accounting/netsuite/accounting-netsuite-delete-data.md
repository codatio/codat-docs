---
title: "Delete data from Oracle NetSuite"
createdAt: "2022-12-09T17:06:02.593Z"
updatedAt: "2023-01-04T09:51:42.874Z"
---

:::note

We're rolling out support for deleting other data types in the coming months - for details, see our <a className="external" href="https://portal.productboard.com/codat/7-public-product-roadmap/tabs/46-accounting-api" target="_blank">Accounting API Public Product Roadmap</a>.
:::

You can delete Bill payments from Oracle NetSuite using the new _Delete object_ endpoint:

```http
DELETE /companies/{companyId}/connections/{connectionId}/push/billPayments/{billPaymentId}
```

Where `billPaymentId` is the Codat ID of the Bill Payment you want to delete.

This is useful if you need to remove a Bill payment that was pushed to NetSuite with errors.

## Deletion handling in NetSuite

Depending on the original data that was pushed, a Bill payment is represented in NetSuite as one of the following objects:

- Bill Payment
- Vendor Prepayment Application (when applied to one or more Bills)
- Bill Credit (when applied to one or more Bills)
- Deposit (only Deposit lines affecting Accounts Payable originate from Bill payments)

NetSuite handles the deletion of each of these differently.

Bill Payments and Vendor Prepayment Applications (when applied to Bills) are removed from NetSuite.

If you specify a `billPaymentId` that corresponds to a Bill Credit in NetSuite, the Bill Credit object itself is not deleted. The Bill Credit is updated so that it no longer applies to any Bills, and is shown as _Unapplied_. For example:

<img src="/img/old/5bc9146-netsuite-bill-credit-unapplied.jpg" />

If you specify a Bill payment ID that corresponds to a Deposit in NetSuite, only Deposit lines that affect Accounts Payable are deleted. These lines are displayed in the **Other Deposits** and **Cash Back** tabs on the Deposit:

<img src="/img/old/5a8b826-netsuite-deposit-other-deposits-lines.png" />

## Example of deleting a Bill payment

This simple example shows deleting a Bill payment with ID 296687 from NetSuite.

1. Make the following `DELETE` request to the Codat API:

   ```http
   DELETE
   https://api.codat.io/companies/{companyId}/connections/{connectionId}/push/billPayments/296687
   ```

   The ID of the Bill payment must be in a format that's accepted by NetSuite, either:

   - A numeric string with no hyphens, e.g. `123456`; or
   - Two numeric strings separated by a hyphen, e.g. `12345-67890`.

2. Next, list the push operations for the company using `GET /companies/{companyId}/push`. A `Success` status means the Bill Payment object was deleted.

3. Go to the NetSuite UI and check that the Bill Payment object no longer exists.
