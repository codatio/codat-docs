---
title: "Bill pay build guide"
sidebar_label: "Introduction"
description: "Use this guide and the accompanying demo app to build solutions that streamline your customers' Accounts Payable processes"
displayed_sidebar: "docs"
---

:::tip Who is this guide for?

This guide is for developers building a bill payment solution or other applications using Accounts Payable data. The demo app is intended for demo use only.

:::

### Summary

🎯 With Codat's Accounting API, you can build solutions to streamline and automate the Accounts Payable (AP) process for your SMB customers&mdash;saving them countless hours of manual admin. Our *bill pay demo app* showcases a simple AP automation workflow, built using standard endpoints in our Accounting API. It aims to help you understand the core features of a bill payment solution and how you can implement them using Codat's API.

🛠️ The demo app is built using Next.js and React. You can use a hosted version or run the code locally. The code is stored in a [public GitHub repository](https://github.com/codatio/demo-bill-pay). [Hosted Link](/auth-flow/authorize-hosted-link) is used for the authorization flow.

⏳ Estimated time to complete: 5&ndash;10 minutes to try out the hosted version of the app; 20&ndash;30 minutes to complete the full guide and run the app locally.

### What you'll need

<p>To use this guide, you need a free QuickBooks Online (QBO) account from <a href="https://quickbooks.intuit.com/" target="_blank">quickbooks.intuit.com</a></p>

### Aims of the guide

Together with the demo app, this guide aims to help you implement your own bill payment solution using Codat's API.

It walks you through [using the hosted version of the demo app](/accounting-api/guides/bill-pay/use-bill-pay-demo-app) with data from a QuickBooks Online sandbox company. After using the hosted version, you can clone the repository and [run the demo app on your local machine](/accounting-api/guides/bill-pay/run-demo-app-locally). Finally, you can learn [how the demo app works](/accounting-api/guides/bill-pay/how-the-demo-app-works).

### About the demo app

<p><a href="https://github.com/codatio/demo-bill-pay" target="_blank">Click here</a> to check out the code for the demo app. By exploring the code as you go along, you'll understand the approach we've taken in the demo app.</p>

### What functionality does the app provide?

The demo app illustrates three common tasks in a typical bill payment workflow, as follows:

#### 1 - Connect to your customer's accounting platform

#### 2 - Visualize bills

#### 3 - Pay bills

### Recap

You've understood the functionality of the bill pay demo app and what you'll need to get started.

<hr />

### Read next

- [Use the hosted app](/accounting-api/guides/bill-pay/use-bill-pay-demo-app)
