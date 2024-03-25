---
title: Solution kit for the bill pay scenario
sidebar_label: Bill pay kit
displayed_sidebar: payables
description: "Simplify the employment of the bill pay process to your app with pur solution kit"
---

## Overview

The Bill Pay Kit is a standarized and synchronous API-based solution designed to effortlessly integrate bill pay capabilities into your SMB accounting platforms.

A key difference between the kit and the Sync for Payables offering is its synchronous functionality, a crucial distinction that ensures real-time synchronization between your platform and your SMBs' accounting systems. In today's fast-paced industry landscape, this feature enables our clients to meet the ever-evolving demands of users by delivering a seamless, near-real-time experience.

For instance, with our kit, the creation of a bill in your platform seamlessly aligns with the bill in the SMBs' accounting platform, enhancing operational efficiency and customer satisfaction.

The kit is designed to help neobanks and B2B payment providers in this space, provide an MVP integrated flow to their SMBs as quickly as possible. We have streamlined and built-in logic to our kits endpoints to reduce the complexities of designing, building an maintiain accounting integrations from scratch. It's ideal for facilitating essential bill payment processes within your SMB accounting platforms, focusing on simplicity and efficiency rather than complex procurement functionalities and use cases.

QUESTION - Should we add a diagram here to show the flow it could cover?

:::tip Client libraries

Use our comprehensive [libraries](/get-started/libraries) in multiple languages to kick-start and simplify your build.

:::

## Supported integrations

QUESTION - How should we show supported platforms?
Just Xero now. QBO coming soon.

## Prerequisites

When implementing your Sync for Payables solution, you need to create your SMB customer as a [company](../terms/company) in Codat before registering their accounting platform as a connection. You can do that when the customer starts interacting with your application.  

1. Create a company 

Within Sync for Payables, a company represents your SMB customer that pays and manages their bills using your application. To create it, use our [Create company](/sync-for-payables-v2-api#/operations/create-company) endpoint. It returns the company schema containing the ID that you will use to establish a connection to an accounting platform.

2. Create a connection

Next, use the [Create connection](/sync-for-payables-v2-api#/operations/create-connection) endpoint to connect the company to an accounting data source via one of our integrations. This will allow you to synchronize data with that source, fetching or creating suppliers, bills, and payment methods. 

For a more in-depth dive into creating companies and connections, see how to [Configure customer in Codat](/payables/configure-customer), or read more about the concepts of a [company](/core-concepts/companies) and a [connection](/core-concepts/connections).

:::tip Authorize your API calls
Remember to [authenticate](/using-the-api/authentication) when making calls to our API. Navigate to **Developers > API keys** in the Portal to pick up your authorization header.
:::


## Create a bill

view only the relevant mapping options I need to create a bill required in the application and my accounting platform’

Use the [Create bill](/sync-for-payables-v2-api#/operations/create-bill) endpoint to

upload a bill attachment into the Revolut platform, which will then create an open bill within my associated accounting platform


[Get bill mapping options](/sync-for-payables-v2-api#/operations/get-mapping-options-bills)

[List bills](/sync-for-payables-v2-api#/operations/list-bills)

when I first link my accounting platform to Revolut, I want to be able to pull in all unpaid bills, so that I can see what bills are outstanding and require action


### Attachments

I want to be able to add an attachment to a bill I have created, so I verifying the legitimacy and accuracy of the transaction in the accounting platform.

Use the [Upload attachment](/sync-for-payables-v2-api#/operations/upload-bill-attachment) to

You can also view attachments for a specific bill using the [List bill attachments](/sync-for-payables-v2-api#/operations/list-bill-attachments) endpoint and download them by calling [Download bill attachment](/sync-for-payables-v2-api#/operations/download-bill-attachment).


## Pay a bill


Use the [Create bill payment](/sync-for-payables-v2-api#/operations/create-bill-payment) to

when I successfully pay a bill in the application, I want to represent the payment in my accounting platform, so my accounts payables is up to date



[Get payment mapping options](/sync-for-payables-v2-api#/operations/get-mapping-options-payments)



- limitations? I think it was mentioned it only does single-bill payments?

## Record a payment 




## Master data

[List suppliers](/sync-for-payables-v2-api#/operations/list-suppliers) returns a ist of active suppliers, but you can [query](/using-the-api/querying) it to view those with unpaid bills only, or those that were recently created.

I want to be able search for a supplier which is associated with a draft or open bill, to make sure that the supplier details from the accounting platform are up to date

[Create bank account](/sync-for-payables-v2-api#/operations/create-bank-account) 


---
## Read next

- [Bill pay kit API reference](/sync-for-payables-v2-api#/)
