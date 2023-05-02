---
title: "Use the bill pay demo app"
sidebar_label: "Use the demo app"
description: "See Hosted Link in action, then use the demo app to view bills and make mock payments. See how payments are reconciled in QuickBooks to close the loop."
---

### 🚀 In this section, you will:

- Authorize access to your accounting data in QuickBooks Online
- Learn what information is available in the bill pay demo app UI
- Make mock payments against bills and learn how the data is represented in Codat
- Check your payment was reconciled as expected in your sandbox QuickBooks Online company
- Review the push history in the Codat Portal

To understand the underlying API requests that the app makes to Codat, review the "API" sections. These also highlight additional functionality that you might include in your own bill pay solution.

### Authorize access to accounting data in QuickBooks

Now you're going to see [Hosted Link](/auth-flow/authorize-hosted-link) in action. You'll follow the steps your customers would take to authorize access to their accounting data for use in your bill pay application.

1. From the **Bill Pay** start screen, click **Get Started**.
2. Follow the instructions in the UI to:
   1. Create a company in Codat.
   2. Connect to **Intuit QuickBooks Sandbox**. 
   3. Authorize the demo app to access data from your sandbox QuickBooks Online company. This creates a data connection to QuickBooks Online Sandbox.
   4. Click **Launch Bills Portal** to open the bill pay demo app. Behind the scenes, the demo app redirects you to the redirect URL you set earlier.

![bill-pay_launch-bills-portal-screen](/img/use-cases/bill-pay/bill-pay_launch-bills-portal-screen.png)

### API: Pull accounts payable

When launched, the demo app [retrives a list of all bills](/accounting-api#/operations/list-bills) from your sandbox QuickBooks Online company, in descending order of issue date.

```http title="List bills request"
GET https://<YOUR_DOMAIN>/companies/<COMPANY_ID>/data/bills?page=1&pageSize=100&orderBy=-issueDate
```

```json title="List bills response example"
{
  "results": [
    {
      "id": "181",
      "supplierRef": {
        "id": "41",
        "supplierName": "Mark Howard"
      },
      "purchaseOrderRefs": [],
      "issueDate": "2023-04-01T00:00:00",
      "dueDate": "2023-04-01T00:00:00",
      "currency": "GBP",
      "currencyRate": 1,
      "lineItems": [
        {
          "description": "monthly office rent",
          "unitAmount": 1250,
          "quantity": 1,
          "discountAmount": 0,
          "subTotal": 1250,
          "taxAmount": 250,
          "totalAmount": 1500,
          "accountRef": {
            "id": "41",
            "name": "Rent Expense"
          },
          "taxRateRef": {
            "id": "3_Bills",
            "name": "20.0% S Bills",
            "effectiveTaxRate": 20
          },
          "trackingCategoryRefs": [],
          "tracking": {
            "categoryRefs": [],
            "isBilledTo": "Unknown",
            "isRebilledTo": "NotApplicable"
          },
          "isDirectCost": false
        }
      ],
      "withholdingTax": [],
      "status": "Open",
      "subTotal": 1250,
      "taxAmount": 250,
      "totalAmount": 1500,
      "amountDue": 1500,
      "modifiedDate": "2023-05-02T10:35:04Z",
      "sourceModifiedDate": "2023-03-27T23:30:01Z",
      "paymentAllocations": [],
      "metadata": {
        "isDeleted": false
      }
    },
    # ...
  ],
  "pageNumber": 1,
  "pageSize": 100,
  "totalResults": 8,
  "_links": {
    "current": {
      "href": "/companies/0f655a48-f6c2-43b4-857b-f2d6793f90b8/data/bills?page=1&pageSize=100&orderBy=-issueDate"
    },
    "self": {
      "href": "/companies/0f655a48-f6c2-43b4-857b-f2d6793f90b8/data/bills"
    }
  }
}
```

:::info View unpaid bills query

When the **View unpaid bills only toggle** is selected in the UI, the `&query=status=Open` query is appended to the request URL as a [Codat query string](/using-the-api/querying). This returns only unpaid bills.

:::

### Bill pay demo app UI

When you launch the demo app, you'll see a table of all paid and unpaid bills. These are pulled from your sandbox QuickBooks Online company and ordered by issue date. 

![Bill pay demo app UI](/img/use-cases/bill-pay/bill-pay_demo-bill-interface.png "The Bill pay demo app UI.")

For each unpaid bill, you can view the issue date, the supplier of the goods or services received, the reference number, and the amount due.

Select the **View unpaid bills only** toggle to filter the table.

To access additional information for an unpaid bill, click **View** to display the **Invoice** dialog:

![bill-pay_invoice-detail-dialog](/img/use-cases/bill-pay/bill-pay_invoice-detail-dialog.png "The Invoice dialog shows additional information about an unpaid bill.")

This contains the following additional information:

- The Bill number, currency, and due date.
- The individual line items, if contained on the original bill.
- The **Account Name** of the nominal account in QuickBooks.

Next, you can click **Pay Bill** to make a mock payment against the bill.

### Make a mock payment

The demo app provides functionality for making mock payments against bills. When you "pay" a bill, the app automatically pushes a bill payment to the accounting platform&mdash;in this case, QuickBooks Online. There, it's reconciled against the source bill, which is marked as *paid*.

1. Click **View** next to an unpaid bill, then click **Pay Bill**.

2. Choose an account from the **Account name** dropdown. This is the "mapping account" in your sandbox QuickBooks Online company&mdash;the account the payment should be reconciled to.
   
   :::info Accounts
   Only bank accounts in the same currency as the bill are displayed.
   :::
   
3. Click **Pay Bill** to pay the total amount. You don't need to enter any card details to make a mock payment.

### API: Pull bank accounts

At step 2 in "Make a mock payment", the demo app [retrieves the company's latest accounts](/accounting-api#/operations/list-accounts) and queries the results by account type and currency.

```http
ADD REQUEST HERE
```

### API: Post a Bill payment to the accounting platform

When you make a mock payment, the demo app pushes a Bill payment to QuickBooks for the total amount of the bill. This reconciles the payment against the outstanding bill.

```http
ADD REQUEST HERE
```

### See that the payment was reconciled in QuickBooks

Next, check that your payment was reconciled correctly in QuickBooks Online.

1. Open your sandbox QuickBooks Online company from the **API Docs & Tools** tab in the Intuit Developer Portal.
2. In the sidebar, select **Get paid & pay**.
3. Check the status of the bill you paid:
   1. Select **Bills**, then select the **Paid** tab.
   2. Select the bill and check the payment status is set to **Paid**.
   
   ![bill-pay_bill-status-paid](/img/use-cases/bill-pay/bill-pay_qbo-sandbox-company-bill-status-of-paid.png "A bill in QBO with a status of PAID.")

4. Check which bank account the payment was reconciled to:
   1. Go back to **Bills > paid**.
   2. In the **Action** column, select **Show payments** to reveal the payment row.
   3. Click **View details** to open the bill payment that corresponds to the bill.
   4. Check the **Bank/Credit account** dropdown contains the account you chose to map your mock payment to. 
   
   ![bill-pay_bill-payment-status](/img/use-cases/bill-pay/bill-pay_bill-payment-mapping-account.png "A bill payment in QBO showing the Checking account in the Bank/Credit account dropdown.")

### Review the push history in Codat

You can check your pushed Bill payments are reflected in the Codat Portal.

1. On the navigation bar, select **Companies**.
2. Select the company you connected via the demo app.
3. Select **Data > Push history**.
4. Review the push history. Look for the recent  `billPayments` push operation and check that it completed successfully.

### 💪 Ready for more?

Try these suggestions to make the most of your experience with the demo app:

- **Access sandbox data for a different region**  
  You can set up a sandbox QuickBooks Online company that contains data for a different region, then run through the demo app guide again. For more information, see [Create and test with a sandbox company](https://developer.intuit.com/app/developer/qbo/docs/develop/sandboxes/manage-your-sandboxes) in the Intuit developer documentation.
  
- **Use a company's real data**  
  Go one step further and access consented financial data from an accounting platform. Set up the [integration](/integrations/accounting/overview) you plan to use, and connect to it while following the auth flow.
  
- **Further reading**  
  Explore accounting automation topics in the [Codat Blog](https://www.codat.io/blog/category/accounting-automation/). 

### Recap

You tried out the demo app by viewing bills and making mock payments. By doing so, you learned the underlying API calls made to the Codat API. Finally, you checked the source data in QuickBooks Online to understand the payment reconciliation process.

Next, you can find out more about the [Accounting API](/accounting-api/overview), or explore other [use cases](/usecases/overview).