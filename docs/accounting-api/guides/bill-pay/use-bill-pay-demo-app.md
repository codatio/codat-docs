---
title: "Use the hosted bill pay demo app"
sidebar_label: "Use the hosted app"
description: "Use the hosted demo app to connect to sandbox data, then view and pay bills. To close the loop, see how payments are reconciled in QuickBooks"
---

### 🚀 In this section, you will:

- Connect the demo app to QuickBooks Online
- View bills
- Pay a bill
- Check payment reconciliation in QuickBooks Online

### Prerequisites

Before using the demo app, sign up for a QuickBooks Online account at <a href="https://quickbooks.intuit.com/" target="_blank">https://quickbooks.intuit.com</a>. You'll need to enter your account credentials when connecting the demo app to QuickBooks Online.

Your account will include a US sandbox company containing sample data; you can open this company and take a look at some bills, bill payments, and other relevant sandbox data.

### Connect the demo app to QuickBooks Online

First, launch the demo app and complete the authorization flow.

1. <a href="https://demo-bill-pay.vercel.app/" target="_blank">Open the hosted demo app</a>.
2. On the **Bill Pay** start screen, click **Get Started**.
3. Create a new company.
4. Select the **Intuit QuickBooks Sandbox** integration.   
5. In the login dialog, enter your Intuit account credentials and select any sandbox QuickBooks Online company. 

6. The **Connection Successful** screen is displayed once you've connected your accounting platform:

   ![bill-pay_launch-bills-portal-screen](/img/use-cases/bill-pay/bill-pay_launch-bills-portal-screen.png)

   Click **Launch Bills Portal** to open the demo app.

For more details about how the app creates a connection to QuickBooks Online via Hosted Link, see [Understand the authorization flow](/accounting-api/guides/bill-pay/how-the-demo-app-works#understand-the-authorization-flow).

### View bills

When you launch the demo app, you'll see a table of open and paid bills from the company you just connected. These are pulled from your sandbox QuickBooks Online company and ordered by issue date. 

![Bill pay demo app UI](/img/use-cases/bill-pay/bill-pay_demo-bill-interface.png "The Bill pay demo app UI.")

For each unpaid bill, you can view the issue date, the supplier of goods or services received, the account name (in the **Reference** column), and the amount due.

1. If you can only see paid bills, use the **View unpaid bills only** toggle to filter the list.
2. Click **View** next to an unpaid bill to open the **Bill** dialog.
   
   ![bill-pay_invoice-detail-dialog](/img/use-cases/bill-pay/bill-pay_invoice-detail-dialog.png "The Invoice dialog shows additional information about an unpaid bill.")
   
   This contains additional information about the bill, including the bill number, due date, and line items (if any).
   
3. Click **Pay Bill** to make a payment against the bill in the **Bill Payment** dialog.

### Pay a bill

Next, you can make a payment against a bill. When you do so, the app automatically pushes a bill payment to the accounting platform&mdash;in this case, QuickBooks Online. The payment is then reconciled against the source bill, which is marked as *paid*.

1. In the **Bill Payment** dialog, choose an account from the **Account name** dropdown. This is the account in QuickBooks Online to which you want to assign the bill payment.
   
   :::info Accounts displayed
   Only banking accounts in the same currency as the bill are displayed.
   :::
   
2. Click **Pay Bill** to pay the total amount of the bill.

### See that the payment was reconciled in QuickBooks

Next, check that your payment was reconciled correctly in QuickBooks Online. Bill payments are initially in a pending status, but this should change to "paid" after about a minute. 

1. Sign in to the <a href="https://developer.intuit.com/" target="_blank">Intuit Developer Portal</a>.
2. From the **API Docs & Tools** tab, open the sandbox company you connected to the demo app.
2. In the sidebar, select **Get paid & pay**.
3. Check the status of the bill you paid in the demo app:
   1. Select **Bills > Paid**.
   2. Select the bill and check the payment status is **Paid**.
   
   ![bill-pay_bill-status-paid](/img/use-cases/bill-pay/bill-pay_qbo-sandbox-company-bill-status-of-paid.png "A bill in QBO with a status of PAID.")

4. Check which bank account the payment was reconciled to:
   1. Go back to **Bills > Paid**.
   2. In the **Action** column, select **Show payments** to reveal the payment row.
   3. Click **View details** to open the bill payment that corresponds to the bill.
   4. Check the **Bank/Credit account** dropdown contains the account you assigned the payment to. 
   
   ![bill-pay_bill-payment-status](/img/use-cases/bill-pay/bill-pay_bill-payment-mapping-account.png "A bill payment in QBO showing the Checking account in the Bank/Credit account dropdown.")

### Recap

You used the hosted demo app to view bills and make a payment.  You also checked the source data in QuickBooks Online to understand the payment reconciliation process.

<hr />

### Read next

Now that you've tried out the demo app, you can:

- [Run the bill pay demo app locally](/accounting-api/guides/bill-pay/run-demo-app-locally)
- Learn more about [How the demo app works](/accounting-api/guides/bill-pay/how-the-demo-app-works)