---
title: Solution kit for the bill pay scenario
sidebar_label: Bill pay kit
displayed_sidebar: payables
description: "View and create bills using Sync for Payables"
---

## Overview

What's the purpose of this kit? what is the difference from the main Payables product? what does it simplify, why do we want to use it instead of the main one



## Prerequisites

When implementing your Sync for Payables solution, you need to create your SMB customer as a [company](../terms/company) in Codat before registering their accounting platform as a connection. You can do that when the customer starts interacting with your application.  


1. Create a company 

Within Sync for Payables, a company represents your SMB customer that pays and manages their bills using your application. To create it, use our [Create company](/sync-for-payables-v2-api#/operations/create-company) endpoint. It returns the company schema containing the ID that you will use to establish a connection to an accounting platform.

2. Create a connection

Next, use the [Create connection](/sync-for-payables-v2-api#/operations/create-connection) endpoint to connect the company to an accounting data source via one of our integrations. This will allow you to synchronize data with that source, fetching or creating suppliers, bills, and payment methods. 

For a more in-depth dive into creating companies and connections, see how to [Configure customer in Codat](/payables/configure-customer).

:::tip Authorize your API calls
Remember to [authenticate](/using-the-api/authentication) when making calls to our API. Navigate to **Developers > API keys** in the Portal to pick up your authorization header.
:::


## Manage a bill





## Pay a bill


## Master data

Suppliers
Bank accounts

---
## Read next

