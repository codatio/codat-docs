---
title: "Use the bill pay demo app"
description: "Connect to your customer's accounting platform, then view and pay bills in the demo app"
---

Intro

Run through the process of connecting to your customer's accounting platform, in this case QuickBooks Online Sandbox.

## Try out the authorization process in Hosted Link

Maybe this doesn't need a full procedure? Could just say "we built this using Hosted Link".
These steps would be performed by the SMB user.

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

![bill-pay_invoice-detail-dialog](\img\use-cases\bill-pay\bill-pay_invoice-detail-dialog.png "The Invoice dialog shows additional information about an unpaid bill.")

You can view the following additional information about the bill:

- Bill number, currency, and due date
- Individual line items, if contained on the original bill
- The account name in the accounting platform

You can click **Pay Bill** to make a mock payment against the bill.

## Make a mock payment

The demo app provides functionality for making mock payments against bills. To show how a payment can be reconciled back to the original bill, the app pushes a Bill payment to the accounting platform (QuickBooks Online in this guide).

1. Click **View** next to an unpaid bill.
2. In the **Invoice** dialog, click **Pay Bill**.
3. Choose a "mapping" account from the **Account name** dropdown. This is the account in your accounting platform (QuickBooks Online in this guide) that the payment should be reconciled to.

   Only bank accounts in the same currency as the bill are shown. (Add technical box - the app calls the get bank accounts endoint using query parameters for account type and currency.)

4. Click **Pay Bill** to pay the total amount. You don't need to enter any card details.

technical box:

The app pushes a Bill payment to QuickBooks for the amount of the bill. This reconciles the payment against the outstanding bill.
(API: Reconcile a Bill payment against a bill)

## Check the bill and bill payment in QuickBooks

Next, go to your QuickBooks Online Sandbox company and check the status of the bill and the bank account that the payment was mapped from.

1. In the sidebar, select **Get paid & pay**.
2. Select **Bills**.
3. On the **Bills** page, select the **Paid** tab.
4. Locate the bill that was paid.
5. In the Actions column, click **Show payments > View details** to view the bill payment. The bill payment shows the account that the payment is mapped to.
6. Go back to the **Bills** page.
7. Click the down arrow dropdown and select View/edit bill.
8. In the bill window, check the status is Paid.

screenshot showing PAID status

## Check the push history in the Codat Portal

1. On the Companies tab, select the company you created in the app.
2. Select **Data > Push history**.
3. Check that the push operation for `billPayments` was successful.



screenshot

<hr/>

- Run the app - using **Run in Vercel** button and/or on local machine using node?
- Connect to your customer's accounting platform (select **QBO Sandbox** in Link flow)
- Authorize access
- Click **Launch bills portal**.
- (API: Retrieve a list of bank accounts)
- Select a bank account to reconcile payments to
- View all unpaid bills
- Pay a bill
- (API: Reconcile a Bill payment against a bill)
- (API: Post a Bill payment to the accounting platform)
- (API: Check the push model for posting a Bill payment)
- Check the push history in the Codat Portal
- Check the status of the bill in the accounting platform