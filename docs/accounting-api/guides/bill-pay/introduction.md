---
title: "Bill pay demo app guide"
sidebar_label: "Introduction"
description: "Use this guide and the accompanying demo app to build solutions that streamline your customers' Accounts Payable processes"
---

:::tip Who is this guide for?

This guide is for developers building bill pay and other Accounts Payable applications with Codat's API. The app is intended for demo use only.

:::

### Summary

🎯 With Codat's Accounting API, you can build solutions to streamline and automate the Accounts Payable process for your SMB customers&mdash;saving them countless hours of manual admin. Our *bill pay demo app* showcases a simple AP automation workflow, built using standard endpoints in our Accounting API. It aims to help you understand the core tasks involved in a bill pay use case and how you might implement them using Codat.

🛠️ The demo app is built using Next.js and React. You can use a hosted version or run the code locally as a Node application. The code is stored in a [public GitHub repository](https://github.com/codatio/demo-bill-pay). [Hosted Link](/auth-flow/authorize-hosted-link) is used for authorization.

⏳ Estimated time to complete: 20&ndash;30 minutes.

### What you'll need

In this guide, we use the demo app with sandbox data from QuickBooks Online. If you don't already have a QuickBooks account, you can sign up for one at <a href="https://quickbooks.intuit.com/" target="_blank">quickbooks.intuit.com</a>.

### Get started

To get started, [use the hosted demo app](/accounting-api/guides/bill-pay/use-bill-pay-demo-app) with data from a QuickBooks Online sandbox company. <a href="https://demo-bill-pay.vercel.app/" target="_blank">Click here to access the hosted demo app</a>.

Add a screenshot here

<p><a href="https://github.com/codatio/demo-bill-pay" target="_blank">Click here</a> to check out the code for the demo app app. By following this guide and exploring the code as you go along, you'll understand the approach taken in the demo app.</p>

### What functionality does the app provide?

The demo app illustrates three common tasks in a typical bill pay workflow, as follows:

#### 1 - Connect to your customers' accounting platforms

#### 2 - Visualize bills

Enable your customers to:

- Access a consolidated view of paid and unpaid bills, standardized to Codat's accounting data model.
- Get an accurate picture of what they owe, including bill amounts, due dates, line items, suppliers, and more.

#### 3 - Pay bills

Enable your customers to:

- Select an account in their accounting software to assign the bill payment to.
- Pay bills.

After paying bills, your customers can see that payments were reconciled against bills as expected in their accounting platform.

:::tip Invoices or bills?
Codat's data model distinguishes between invoices where the company *owes money* and invoices where the company *is owed money*. If the company has received an invoice and owes money to someone else (accounts payable) we call this a bill. In Codat's data model, a [Bill](/accounting-api#/schemas/Bill) is an itemised record of goods purchased from or services provided by a supplier.

See [Invoices](/accounting-api#/schemas/Invoice) for the accounts receivable equivalent of bills.
:::

### Recap

You've understood the functionality of the bill pay demo app and what you'll need to get started.

<hr />

### Read next

Now that you know the focus and purpose of our demo app and its guide:

- [Use the hosted bill pay demo app](/accounting-api/guides/bill-pay/use-bill-pay-demo-app)
