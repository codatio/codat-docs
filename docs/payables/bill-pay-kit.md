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


## Pay a bill

The bill pay kit gives you the option to either create a bill or retireve a list of unpaid bills from an SMBs accounting platform.

### Creating a bill

When creating a bill, you will also need to set a tax rate and nominal account in which the bill will go against. You can call our [Get bill mapping options](/sync-for-payables-v2-api#/operations/get-mapping-options-bills) endpoint in order get these options from the accounting platform. 

Bills should always correspond to a supplier that issuesd them. Ensure the relevant suppier exists before creating a new bill. You are able to retrieve a list of active [suppliers](https://docs.codat.io/sync-for-payables-v2-api#/operations/list-suppliers) to then associate against the bill. This list of suppliers can be queried to only retrieve suppliers associated with unpaid bills (i.e. 'balance>0') or if a suppleir has been created within a specificc timeframe.  

The [upload bill attachment] endpoint(https://docs.codat.io/sync-for-payables-v2-api#/operations/upload-bill-attachment) ensures your accounts payable flow has a full audit trail for your SMB, whilst verifying the legitimacy and accuracy of the transaction in the accounting platform. This is assigned against a specififc bill ('billId'). 

### Retrieving a bill

When the [List bills](/sync-for-payables-v2-api#/operations/list-bills) endpoint is called, you will recieve a list of all outstandig bills (i.e. bills with a status of 'Open' & 'Partially paid'). 

Alongside these bills, you can also view attachments for a specific bill using the [List bill attachments](/sync-for-payables-v2-api#/operations/list-bill-attachments) endpoint and download them by calling [Download bill attachment](/sync-for-payables-v2-api#/operations/download-bill-attachment).

## Record a payment 

When an SMBs bill has been paid in the application, a [bill payment](/sync-for-payables-v2-api#/operations/create-bill-payment) is then created which represents an allocation of money within any of your customer's accounts payable (AP) accounts. 

To create the bill payment, the SMB must set the bank account used to process the payment against. A list of the relevent accounts can be retrieved using the [Mapping Options - Payments](/sync-for-payables-v2-api#/operations/get-mapping-options-payments) endpoint.

The kit allows for a single bill payment. In case of partial payments, use the same endpoint and adjust the amount values according to the amount of the partial payment.


---
## Read next

- [Bill pay kit API reference](/sync-for-payables-v2-api#/)
