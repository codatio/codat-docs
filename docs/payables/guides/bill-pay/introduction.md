---
title: "Bill pay build guide"
description: "Use this guide and the accompanying demo app to streamline your customers' Accounts Payable processes"
---

:::tip Who is this guide for?

This guide is for developers building a bill payment solution or other applications using Accounts Payable data. The app is intended for demo use only.

:::

### Summary

🎯 Our *bill pay demo app* showcases a simple AP automation workflow, built using standard endpoints of [Sync for Payables](/payables/overview). It help you understand the core features of a bill payment solution and how you can build your own solutions to streamline and automate the Accounts Payable (AP).

🛠️ The demo app is built using Next.js and React. You can use a hosted version or run the code locally. The code is stored in a [public GitHub repository](https://github.com/codatio/demo-bill-pay). [Hosted Link](/auth-flow/authorize-hosted-link) is used for the authorization flow.

⏳ Estimated time to complete: 
- 5&ndash;10 minutes to try out the hosted version of the app 
- 20&ndash;30 minutes to complete the full guide and run the app locally

### What you need

To use this guide, you need a free [QuickBooks Online (QBO)](https://quickbooks.intuit.com/) account. You'll need to enter your account credentials when connecting the demo app to QuickBooks Online.

Your account will include a US sandbox company containing sample data. You can open this company and take a look at some bills, bill payments, and other relevant sandbox data.

### Aims of the guide

This guide aims to help you implement your own bill payment solution using Codat's API. It walks you through [using the hosted version of the demo app](/payables/guides/bill-pay/use-bill-pay-demo-app) with data from a QuickBooks Online sandbox company. 

After using the hosted version, you can clone the repository and [run the demo app on your local machine](/payables/guides/bill-pay/run-demo-app-locally). Finally, you can learn [how the demo app works](/payables/guides/bill-pay/how-the-demo-app-works).

### About the demo app

<p><a href="https://github.com/codatio/demo-bill-pay" target="_blank">Click here</a> to check out the code for the demo app. Explore the code as you go along so that you understand the approach we've taken in the demo app.</p>

The app illustrates three common tasks in a typical bill payment workflow:

1. Connect to your customer's accounting platform.

2. Visualize bills.

3. Pay bills.

### Recap

You've understood the functionality of the bill pay demo app and what you'll need to get started.

---

### Read next

- [Use the hosted app](/payables/guides/bill-pay/use-bill-pay-demo-app) to discover bill pay
