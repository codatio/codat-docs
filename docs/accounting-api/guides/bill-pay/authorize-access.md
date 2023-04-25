---
title: "Authorize access to accounting data using Link"
sidebar_label: "Authorize access"
description: "Using Hosted Link, try out the steps your SMB customers would follow to authorize access to their accounts payable data"
---

After running the demo app, you'll use [Hosted Link](/auth-flow/authorize-hosted-link) to create a company in Codat and authorize access to your QuickBooks Online sandbox company. This lets you see the kind of authorization flow you might build into your own bill pay solution. 

An SMB user would do this in a production scenario.

1. From the Bill Pay app start screen, click **Get Started**.

   ![bill-pay_app-start-screen](/img/use-cases/bill-pay/bill-pay_app-start-screen-get-started.png)

2. Follow the instructions in the Link UI to:
   - Create a company.
   - Authorize the bill pay demo app to access required data from your QuickBooks Online sandbox company. 
   - Launch the bill pay demo app UI.

:::tip Which integration should I choose?

In this guide, we're connecting to a QuickBooks Online sandbox company. If you're following along, select the **Intuit QuickBooks Sandbox** tile when prompted to select your accounting software.

:::

If the connection to your QuickBooks Online sandbox company was successful, you're redirected to the URL you specified in the Codat Portal earlier. Behind the scenes, the demo app created a data connection to QuickBooks Online.

*Technical box:*
When the app loads, it makes a request to the Get Bills endpoint to retieve all paid and unpaid bills from your QBO Sandbox account. (Pulls accounts payable)
Also calls the GET accounts endpoint to retrieve the bank accounts for mapping when you pay a bill.

companies/{companyId}/data/accounts

Does Not call bankAccounts endpoint. Your own app could include functionality for creating an account, if one does not already exist.

### Recap

You've seen Link in action and tried out the authorization process, granting the app access to data in your QuickBooks Online sandbox company. 

<hr />

### Read next

- [Use the bill pay demo app](/accounting-api/guides/bill-pay/use-bill-pay-demo-app)
