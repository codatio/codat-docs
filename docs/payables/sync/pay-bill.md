---
title: Solution kit for the bill pay scenario
sidebar_label: Pay single bills
displayed_sidebar: payables
description: "Simplify the deployment of the bill pay process to your app with our solution kit"
---

## Pay a bill

With the Bill pay kit, your customer can create a new bill or view and choose a bill from a list of unpaid bills from their accounting software. 

### Create a bill

Use the [Create bill](/sync-for-payables-v2-api#/operations/create-bill) endpoint to create a new bill in your SMB customer's accounting software. Ensure you have the following detail:

1. Tax rate and a nominal account

    You  need to provide a tax rate and a nominal account that the bill will be recorded against. Call our [Get bill mapping options](/sync-for-payables-v2-api#/operations/get-mapping-options-bills) endpoint to get this detail from your customer's accounting software. 

2. Supplier record

    Bills should always correspond to a supplier that issued them. Use the [List suppliers](https://docs.codat.io/sync-for-payables-v2-api#/operations/list-suppliers) endpoint to check that the relevant supplier exists and then associate it with the bill. You can use querying to retrieve only active suppliers or suppliers created within a specific timeframe. If the supplier doesn't exist, you can create it using the [Create supplier](https://docs.codat.io/sync-for-payables-v2-api#/operations/create-suppliers) endpoint.

Use the [Upload bill attachment](https://docs.codat.io/sync-for-payables-v2-api#/operations/upload-bill-attachment) endpoint to assign an attachment against a specific `billId`. This ensures your accounts payable flow has a full audit trail for your SMB and confirms the legitimacy and accuracy of the transaction in the accounting software. 

### Retrieve a bill

When the [List bills](/sync-for-payables-v2-api#/operations/list-bills) endpoint is called, you will receive a list of all outstanding bills. We define outstanding bills as those with the status of `Open` and `Partially paid`. 

Alongside these bills, you can also view attachments for a specific bill using the [List bill attachments](/sync-for-payables-v2-api#/operations/list-bill-attachments) endpoint and download them by calling the [Download bill attachment](/sync-for-payables-v2-api#/operations/download-bill-attachment) endpoint.

## Record a payment 

When an SMB pays their bill in your application, use the [Create bill payment](/sync-for-payables-v2-api#/operations/create-bill-payment) endpoint to represent an allocation of money within any of your customer's accounts payable accounts. 

To create the payment, your SMB customer must set the bank account used to process the payment. You can retrieve and display a list of relevant accounts using the [Get payment mapping options](/sync-for-payables-v2-api#/operations/get-mapping-options-payments) endpoint.

:::tip Partial payments

The kit is built for the scenario where a single bill is paid in full. If you need to record a partial payment, use the same [Create bill payment](/sync-for-payables-v2-api#/operations/create-bill-payment) endpoint and adjust the values to reflect the amount of the partial payment.

:::