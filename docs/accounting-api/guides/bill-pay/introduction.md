---
title: "Our bill pay guide"
sidebar_label: "Introduction"
description: "Use this guide and the accompanying demo app to build solutions that streamline your customers' Accounts Payable processes"
---

:::tip Who is this guide for?

This guide is for tech-savvy backend developers who know how to use an API. The accompanying app includes a simple UI, so you'll need some frontend development experience to build a similar UI in your own bill pay solution.

:::

### Summary

🎯 With Codat's Accounting API and integrations, you can build solutions to streamline and automate the Accounts Payable process for your SMB customers &mdash; saving them countless hours of manual admin. Bill pay is an important part of AP automation. Our Bill Pay demo app includes core tasks such as viewing and paying bills, and reconciling payments against bills in the customer's accounting platform.

To showcase how easily SMBs can authorize access to live accounting data, we use hosted Link to connect to a QuickBooks Online sandbox company. The demo app retrieves this consented data to provide a consolidated view of paid and unpaid bills.

⏳ Estimated time to complete: 20-30 minutes.

🛠️ The demo project is implemented in JavaScript as a backend API and a simple React(?) web app. You can run the demo app locally as a Node application, or use a version that's hosted on Vercel. Either way, you'll need to create a free QuickBooks Online account and access its sandbox company to follow along with the tasks in this guide.

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

### How the Bill pay app works

(Sequence diagram - flow of data between front-end and back-end. Show the order things happen in)

### What you'll need

Prerequisites

### Recap

Text here

<hr />

### Read next

- [Set up and run the bill pay demo app](/accounting-api/guides/bill-pay/setting-up)
