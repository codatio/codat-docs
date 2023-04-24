---
title: "Use the bill pay demo app"
description: "Learn how the demo app works by making mock payments then checking the source data in QuickBooks Online."
---

Intro

Run through the process of connecting to your customer's accounting platform, in this case QuickBooks Online Sandbox.

## Try out the authorization process in Hosted Link

Maybe this doesn't need a full procedure? Could just say "we built this using Hosted Link".
These steps would be performed by the SMB user.

Text: Connect to your customer's accounting platform (select **QBO Sandbox** in Link flow). Authorize access.

1. From the app start screen, click **Get Started**.

screenshot

2. Enter your company name, then click **Next**.

screenshot

expanding box:
Makes a request to the Create a company endpoint.

Request body - important

3. Hosted Link loads 

screenshot

4. On the **Select your accounting software** screen, select **Intuit QuickBooks Sandbox**, then click **Next**.

5. Authorize your Codat client to access your QuickBooks Online Sandbox account by clicking **Connect**. You will be able to access the data shown in the gray panel.

6. In the QuickBooks OAuth dialog, read the information and then click **Connect** to authorize access.

screenshot

7. The Connection Successful screen is displayed. Click **Next**.

You are redirected to the redirect URL specified in the Portal. The connection successful screen.

8. Click **Finish**, then click **Launch Bills Portal**

expanding box:
Makes a request to the Get Bills endpoint to retieve all paid and unpaid bills from your QBO Sandbox account. (Pulls accounts payable)
Also calls the GET accounts endpoint to retrieve the bank accounts for mapping when you pay a bill.

companies/{companyId}/data/accounts

Does Not call bankAccounts endpoint. Your own app could include functionality for creating an account, if one does not already exist.

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