---
title: "Use the hosted app"
sidebar_label: "Use the hosted app"
description: "Use the hosted demo app to connect to sandbox data, then view and pay bills. To close the loop, see how payments are reconciled in QuickBooks"
---

### 🚀 In this section, you will:

- Connect the demo app to QuickBooks Online
- View bills
- Pay a bill

### Connect the demo app to QuickBooks Online

1. <a href="https://demo-bill-pay.vercel.app/" target="_blank">
     Open the demo app
   </a>
   .
2. On the **Bill Pay** start screen, click **Get Started**.
3. Create a new company.
4. Select the **Intuit QuickBooks Sandbox** integration.
5. In the login dialog, enter your Intuit account credentials and select any sandbox QuickBooks Online company.

6. The **Connection Successful** screen is displayed once you've connected your accounting software. Click **Launch Bills Portal** to open the demo app.

   ![bill-pay_launch-bills-portal-screen](/img/use-cases/bill-pay/bill-pay_launch-bills-portal-screen.png)

For more details about how the app creates a connection to QuickBooks Online via Hosted Link, see [Understand the auth flow](/payables/guides/bill-pay/how-the-demo-app-works#understand-the-auth-flow).

### View bills

Once you've connected your accounting software, you'll see a table of open and paid bills from the company you just connected. These are read from your sandbox QuickBooks Online company and ordered by issue date.

![bill-pay_app-view](/img/use-cases/bill-pay/bill-pay_app-view.png "Bill pay demo app UI")

1. If you can only see paid bills, use the **View unpaid bills only** toggle to filter the list.
2. Click **View** next to an unpaid bill to open the **Bill** view.

   This contains additional information about the bill, including the bill number, due date, and line items (if any).

   ![bill-pay_invoice-detail-dialog](/img/use-cases/bill-pay/bill-pay_bill-detail-dialog-renamed.png "The Bill view shows additional information about an unpaid bill.")

3. Click **Pay Bill** to make a payment against the bill.

### Pay a bill

Next, you can make a payment against a bill. When you do so, the app automatically writes a bill payment to the accounting software&mdash;in this case, QuickBooks Online. The payment is then reconciled against the source bill, which is marked as _paid_.

1. In the **Bill Payment** view, choose an account from the **Account name** dropdown. This is the account in QuickBooks Online to which you want to assign the bill payment.

   ![bill-pay_payment-view](/img/use-cases/bill-pay/bill-pay_payment-view.png "The Bill Payment view with the Account Name field highlighted.")

   :::info Accounts displayed
   Only banking accounts in the same currency as the bill are displayed.
   :::

2. (Optional) Enter mock payment card details.

   :::info Card details
   We've included the card details section to show how Codat can be used with other systems, such as payment providers, to enhance bill payment apps.
   :::

3. Click **Pay Bill** to pay the total amount of the bill.

You've now seen the app in action by viewing and paying bills.

### See the payment in QuickBooks

Optionally, you can check that your payment was reconciled correctly in QuickBooks Online. Bill payments are initially in a `pending` status, but this should change to `paid` after around a minute.

:::info Asynchronous write operation

In Codat, create and update operations are asynchronous, which means that writing data to an accounting software returns a write operation in `Pending` status. You can [read more](/using-the-api/push) about CUD operations in Codat. Our webhooks allow your solution to be notified of a [write operation change](/using-the-api/push#monitor-the-status-of-your-operation).

:::

1. Sign in to the <a href="https://developer.intuit.com/" target="_blank">Intuit Developer Portal</a>.
2. From the **API Docs & Tools** tab, open the sandbox company you connected to the demo app.
3. In the sidebar, select **Get paid & pay**.
4. Check the status of the bill you paid in the demo app:

   1. Select **Bills > Paid**.
   2. Select the bill and check the payment status is **Paid**.

   ![bill-pay_bill-status-paid](/img/use-cases/bill-pay/bill-pay_qbo-sandbox-company-bill-status-of-paid.png "A bill in QBO with a status of PAID.")

5. Check which bank account the payment was reconciled to:

   1. Go back to **Bills > Paid**.
   2. In the **Action** column, select **Show payments** to reveal the payment row.
   3. Click **View details** to open the bill payment that corresponds to the bill.
   4. Check the **Bank/Credit account** dropdown contains the account you assigned the payment to.

   ![bill-pay_bill-payment-status](/img/use-cases/bill-pay/bill-pay_bill-payment-mapping-account.png "A bill payment in QBO showing the Checking account in the Bank/Credit account dropdown.")

### Recap

You've used the demo app to view bills and make a payment. You also checked the source data in QuickBooks Online to understand the payment reconciliation process.

<hr />

### Read next

Now that you've tried out the demo app, you can:

- [Run the bill pay demo app locally](/payables/guides/bill-pay/run-demo-app-locally).
- Learn more about [how the demo app works](/payables/guides/bill-pay/how-the-demo-app-works).
