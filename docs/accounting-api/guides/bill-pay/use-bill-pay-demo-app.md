---
title: "Use the bill pay demo app"
sidebar_label: "Use the demo app"
description: "Learn how the demo app works by making mock payments then checking the source data in QuickBooks Online."
---

Introduction

## Bill pay app UI

The main page of the Bill Pay app displays a list of all paid and unpaid bills pulled from the accounting platform, ordered by issue date. 

![Bill pay demo app UI](/img/use-cases/bill-pay/bill-pay_demo-bill-interface.png "The Bill pay demo app UI.")

For each unpaid bill, you can view the issue date, the supplier of the goods or services received, the reference number, and the amount due.

Select the **View unpaid bills only** toggle to view only paid or unpaid bills. The **View** and **Pay** buttons appear next to unpaid bills only.

Click **View** to access additional information about a bill in the **Invoice** dialog:

![bill-pay_invoice-detail-dialog](/img/use-cases/bill-pay/bill-pay_invoice-detail-dialog.png "The Invoice dialog shows additional information about an unpaid bill.")

You can view the following additional information about the bill:

- Bill number, currency, and due date
- Individual line items, if contained on the original bill
- The account name in the accounting platform

You can click **Pay Bill** to make a mock payment against the bill.

## Make a mock payment

The demo app provides functionality for making mock payments against bills. When you "pay" a bill, the app automatically pushes a bill payment to the accounting platform, where it's reconciled against the source bill, which is marked as paid.

To make a mock payment:

1. Click **View** next to an unpaid bill.
2. In the **Invoice** dialog, click **Pay Bill**.
3. Choose an account from the **Account name** dropdown. This is the "mapping account" in your accounting platform -  the account the payment should be reconciled to.

   Only bank accounts in the same currency as the bill are shown. (Add technical box - the app calls the get bank accounts endoint using query parameters for account type and currency.)

4. Click **Pay Bill** to pay the total amount. You don't need to enter any card details.

technical box:

The app pushes a Bill payment to QuickBooks for the amount of the bill. This reconciles the payment against the outstanding bill.
(API: Post a Bill payment to the accounting platform)

## Check payment reconciliation in QuickBooks

Next, you can check that payment reconciliation happened as expected in QuickBooks Online.

1. Open your Sandbox company in QuickBooks Online.

2. In the sidebar, select **Get paid & pay**.

3. Check the status of the bill you paid:
   1. Select **Bills**, then select the **Paid** tab.
   3. Select the bill and check the payment status is **Paid**.
   
   ![bill-pay_bill-status-paid](/img/use-cases/bill-pay/bill-pay_qbo-sandbox-company-bill-status-of-paid.png "A bill in QBO with a status of PAID.")

7. Check which bank account the payment was reconciled to:
   1. Go back to **Bills > paid**.
   2. In the **Action** column, select **Show payments** to reveal the payment row.
   3. Click **View details** to open the bill payment.
   4. Check the **Bank/Credit account** dropdown contains the account you chose to map your mock payment to.
   
   ![bill-pay_bill-payment-status](/img/use-cases/bill-pay/bill-pay_bill-payment-mapping-account.png "A bill payment in QBO showing the Checking account in the Bank/Credit account dropdown.")

## Check the push history

You can check your pushed Bill payments are reflected in the Codat Portal.

1. Select **Companies**.
2. Click the company you connected via the demo app.
3. Select **Data > Push history**.
4. Check the recent  `billPayments` push operation completed successfully.

## Recap

You've now reviewed the authorization process your SMB customers would use to authorize access to their accounting data; tried out the demo app; and checked the source data in QuickBooks Online.