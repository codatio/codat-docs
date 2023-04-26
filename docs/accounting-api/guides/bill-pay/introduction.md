---
title: "Our bill pay guide"
sidebar_label: "Introduction"
description: "Use this guide and the accompanying demo app to build solutions that streamline your customers' Accounts Payable processes"
---

:::tip Who is this guide for?

This guide is for tech-savvy developers who know how to use an API. The accompanying app includes a simple UI, so you'll need some frontend development experience to build a similar UI in your own bill pay solution.

:::

### Summary

🎯 With Codat's Accounting API, you can build solutions to streamline and automate the Accounts Payable process for your SMB customers&mdash;saving them countless hours of manual admin. Our *bill pay demo app* showcases a simple and powerful AP automation workflow, built using standard endpoints and data types in our Accounting API. Run the demo app to understand the core tasks involved in bill pay, from viewing and paying bills to reconciling payments in the customer's accounting platform.

The demo app uses [Hosted Link](/auth-flow/authorize-hosted-link) to show how quickly your SMB customers can authorize access to their accounting data. In this guide, we connect to a QuickBooks Online sandbox company, but you could use a different integration. The demo app retrieves consented data from the customer's accounting platform to provide a consolidated view of paid and unpaid bills.

⏳ Estimated time to complete: 20&ndash;30 minutes.

🛠️ The demo project is implemented in JavaScript as a backend API and a frontend React (???) web app. You can run the demo app locally as a Node application, or use a version that's hosted on Vercel. Either way, you'll need to create a free QuickBooks Online account and sandbox company to follow along with the tasks in this guide. The code for the demo app is hosted in a [public GitHub repository](https://github.com/codatio/demo-bill-pay).

### What you'll need

To access and use the bill pay demo app, you need to:

- Have a [QuickBooks Online](https://quickbooks.intuit.com/) account.
- Set up the **QuickBooks Online Sandbox** integration (brief instructions are given in [Set up and run the bill pay demo app](/accounting-api/guides/bill-pay/setting-up)).
- Make sure the Bills, Bill Payments, and Companies data types are set to **Fetch on first link** in the Codat Portal.

This guide includes sample API requests made by the app. If you want to clone the repository and explore the code in more depth, you'll need to use an IDE or text editor.

### ✔️ Dive into the demo app...

This guide is meant to be used alongside the [demo app project](https://github.com/codatio/demo-bill-pay) on GitHub. By completing the tasks and exploring the code as you go along, you'll understand the approach we've taken in the demo app.

### 1 - Pull standardized Accounts Payable data

- View all paid and unpaid bills from a QuickBooks Online sandbox company, standardized to our accounting data model.
- See amounts, due dates, bill line items, vendor and supplier details to get an accurate picture of payments due.

### 2 - Understand payment account mapping

- Select a QuickBooks mapping account - the account from which the payment should originate from.
- Pay a bill using a mock payment UI to trigger the app to push a bill payment to Codat. 

### 3 - See how to reconcile payments

- Check the bill payment that was pushed to QuickBooks Online was reconciled correctly against the bill.



### Run the demo app

Add info from setting up page

### How the Bill pay app works

(Sequence diagram - flow of data between front-end and back-end. Show the order things happen in)

### What you'll need

Prerequisites

### Recap

Text here

<hr />

### Read next

- [Set up and run the bill pay demo app](/accounting-api/guides/bill-pay/setting-up)
