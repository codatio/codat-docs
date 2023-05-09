---
title: "Bill pay demo app guide"
sidebar_label: "Introduction"
description: "Use this guide and the accompanying demo app to build solutions that streamline your customers' Accounts Payable processes"
---

:::tip Who is this guide for?

This guide is for developers building bill pay and other Accounts Payable applications with Codat's API. If you're a general user, use the hosted version of the bill pay demo app to try out the functionality we've implemented. 

:::

### Summary

🎯 With Codat's Accounting API, you can build solutions to streamline and automate the Accounts Payable process for your SMB customers&mdash;saving them countless hours of manual admin. Our *bill pay demo app* showcases a simple and powerful AP automation workflow, built using standard endpoints and data types in our Accounting API. It aims to help you understand the core tasks involved in a bill pay use case and how they can be implemented with Codat.

🛠️ The demo project is a web app, built using Next.js and React, that interacts with the Codat API. You can run it as a Node application on your local machine, or use a version hosted on Vercel. It uses [Hosted Link](/auth-flow/authorize-hosted-link) for authorization. The code is stored in a [public GitHub repository](https://github.com/codatio/demo-bill-pay).

⏳ Estimated time to complete: 20&ndash;30 minutes.

### What you'll need

The demo app works with sandbox data synced from Codat's Accounting API. To access this data, you must enable **Fetch on first link** for the Bills, Bill Payments, and Companies data types in the Codat Portal.

npm version 16.9.0 is required to [run the demo app locally](/accounting-api/guides/bill-pay/)

You can [use the hosted app](#use-the-hosted-app) as an alternative.

### ✔️ Dive into the demo app...

This guide is meant to be used alongside the [demo app project](https://github.com/codatio/demo-bill-pay) on GitHub. By completing the tasks and exploring the code as you go along, you'll understand the approach we've taken in the demo app. We've included sample API requests made by the app.

The demo app illustrates three common tasks in a typical bill pay workflow, as follows:

### 1 - Connect to your customers' accounting platforms

- Hosted Link handles user authorization and accounting software connection.

### 2 - Visualize bills

Enable your customers to:

- Access a consolidated view of paid and unpaid bills, standardized to Codat's accounting data model.
- Get an accurate picture of what they owe, including bill amounts, due dates, line items, suppliers, and more.

### 3 - Paying bills

Enable your customers to:

- Select a mapping account: the account the bill payment should originate from.
- Pay bills, which triggers the demo app to push bill payments to Codat. 

Your customers can see that payments were reconciled against bills as expected in their accounting platform.

:::tip Invoices or bills?
Codat's data model distinguishes between invoices where the company *owes money* and invoices where the company *is owed money*. If the company has received an invoice and owes money to someone else (accounts payable) we call this a bill. In Codat's data model, a [Bill](/accounting-api#/schemas/Bill) is an itemised record of goods purchased from or services provided by a supplier.

See [Invoices](/accounting-api#/schemas/Invoice) for the accounts receivable equivalent of bills.
:::

### Use the hosted app

Use the [hosted app](https://demo-bill-pay.vercel.app/) to quickly see the demo app in action without having to run the code locally.

### Recap

You've understood the functionality of the bill pay demo app and what you'll need to get started.

<hr />

### Read next

Now that you know the focus and purpose of our demo app and its guide:

- [Set up and run the bill pay demo app](/accounting-api/guides/bill-pay/run-demo-app-locally)
