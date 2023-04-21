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

## Bill pay app interface

The Bill Pay app displays a list of all paid and unpaid bills ordered by date. 

screenshot - annotated (view and pay)

You can filter by paid and unpaid, view a bill to see more detials of line items, and mock the process of paying a bill.

The UI shows this information:

- Bill Line item details, including invoice number, due date, issue date, supplier, reference, amount due, currency 
- The account name to map the payment to 
- TBC: Only "bank" and "credit card" accounts in USD are shown.

## Make a mock payment

Intro

You can make a payment against a bill. The demo app mocks the step of making the payment. The payment is then reconciled back to the accounting platform by pushing a Bill payment to QuickBooks.

These steps would be performed by the SMB user.

1. Click View next to the bill you want to pay.
2. In the Invoice window, click **Pay Bill**.
3. Choose an account to record the payment against from the **Account name** dropdown.
   You don't need to enter any card details.

4. Click **Pay Bill** to pay the total amount of the bill.

expanding box:
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