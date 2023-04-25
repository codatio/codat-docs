---
title: "Use the bill pay demo app"
sidebar_label: "Use the demo app"
description: "Learn how the demo app works by making mock payments and then checking the source data in QuickBooks Online"
---

### 🚀 In this section, you will:

- Learn what information is available in the bill pay demo app UI
- Make a mock payment against a bill, learning how the data is represented in Codat
- Check that your payment was reconciled as expected in your QuickBooks Online sandbox company
- Review the push history in the Codat Portal

Blue expandable boxes highlight the underlying API requests the app makes to the Codat API. They also highlight additional requests your own solution could make to provide richer functionality.

### Bill pay demo app UI

When you launch the demo app, you'll see a table of all paid and unpaid bills pulled from your QuickBooks Online sandbox company, ordered by issue date. 

![Bill pay demo app UI](/img/use-cases/bill-pay/bill-pay_demo-bill-interface.png "The Bill pay demo app UI.")

For each unpaid bill, you can view the issue date, the supplier of the goods or services received, the reference number, and the amount due.

Select the **View unpaid bills only** toggle to filter the table.

To access additional information for an unpaid bill, click **View** to display the **Invoice** dialog:

![bill-pay_invoice-detail-dialog](/img/use-cases/bill-pay/bill-pay_invoice-detail-dialog.png "The Invoice dialog shows additional information about an unpaid bill.")

This contains the following additional information:

- The Bill number, currency, and due date.
- The individual line items, if contained on the original bill.
- The account name in the accounting platform. [???]

Next, you can click **Pay Bill** to make a mock payment against the bill.

### Make a mock payment

The demo app provides functionality for making mock payments against bills. When you "pay" a bill, the app automatically pushes a bill payment to the accounting platform &mdash; in this case, QuickBooks Online &mdash; where it's reconciled against the source bill, which is marked as *paid*.

To make a mock payment:

1. Click **View** next to an unpaid bill, then click **Pay Bill**.

   screenshot

2. Choose an account from the **Account name** dropdown. This is the "mapping account" in your QuickBooks Online sandbox company &mdash;  the account the payment should be reconciled to.

   Only bank accounts in the same currency as the bill are shown. (Add technical box - the app calls the get bank accounts endoint using query parameters for account type and currency.)

3. Click **Pay Bill** to pay the total amount. You don't need to enter any card details.

technical box:

When you make a mock payment, the demo app pushes a Bill payment to QuickBooks for the total amount of the bill. This reconciles the payment against the outstanding bill.
(API: Post a Bill payment to the accounting platform)

### Check payment reconciliation in QuickBooks

To help you understand the process, check that payment reconciliation happened as expected in QuickBooks Online.

1. Open your Sandbox company in QuickBooks Online.. 
2. In the sidebar, select **Get paid & pay**.
3. Check the status of the bill you paid:
   1. Select **Bills**, then select the **Paid** tab.
   2. Select the bill and check the payment status is **Paid**.
   
   ![bill-pay_bill-status-paid](/img/use-cases/bill-pay/bill-pay_qbo-sandbox-company-bill-status-of-paid.png "A bill in QBO with a status of PAID.")

4. Check which bank account the payment was reconciled to:
   1. Go back to **Bills > paid**.
   2. In the **Action** column, select **Show payments** to reveal the payment row.
   3. Click **View details** to open the bill payment object.
   4. Check the **Bank/Credit account** dropdown contains the account you chose to map your mock payment to.
   
   ![bill-pay_bill-payment-status](/img/use-cases/bill-pay/bill-pay_bill-payment-mapping-account.png "A bill payment in QBO showing the Checking account in the Bank/Credit account dropdown.")

### Review the push history in Codat

You can check your pushed Bill payments are reflected in the Codat Portal.

1. Select **Companies**.
2. Click the company you connected via the demo app.
3. Select **Data > Push history**.
4. Review the push history to check the recent  `billPayments` push operation completed successfully.

### Recap

You tried out the demo app by viewing bills and making mock payments. By doing so, you learned the underlying API calls made to the Codat API. Finally, you checked the source data in QuickBooks Online to understand the account reconciliation process.

Next, you can find out more about the [Accounting API](/accounting-api/overview), or explore other use cases.