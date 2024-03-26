---
title: "Upcoming 2024-07-10: Removing 'Transfer in/out' transaction types from Sync for Expenses"
date: "2024-03-26"
tags: ["Deprecation"]
authors: Amy-Roberts
---
On **July 10, 2024**, we will remove the `Transfer in` and `Transfer out` transaction types from the Sync for Expenses [Create expense transaction](/sync-for-expenses-api#/operations/create-expense-transaction) endpoint. 

<!--truncate-->

After the change, you will need to use the [Create transfer transaction](/sync-for-expenses-api#/operations/create-transfer-transaction) endpoint to represent a transfer when syncing expenses. This endpoint allows you to represent multicurrency and single-currency transfers. You can read more about multicurrency transfers in our [Expenses in foreign currency](https://docs.codat.io/expenses/fx-management#transfers) documentation.

## Action required

If you are currently using the `Transfer in` or `Transfer out` transaction types, you will need to create these transactions via the [Create transfer transaction](/sync-for-expenses-api#/operations/create-transfer-transaction) endpoint instead. To create document attachments alongside your transfer transaction, you can continue using the [Upload attachment](/sync-for-expenses-api#/operations/upload-expense-attachment) endpoint.

When creating a transfer, the [Create transfer transaction](https://docs.codat.io/sync-for-expenses-api#/operations/create-transfer-transaction) endpoint initiates a sync automatically and will respond with a `syncId`. You do not need to initiate the transaction sync yourself, and you will not receive a `datasetId` in the response.

## Expected impact if no action is taken

If you try to use the `Transfer in` and `Transfer out` transaction types with the [Create expense transaction](/sync-for-expenses-api#/operations/create-expense-transaction) endpoint after **July 10, 2024**, the syncs will fail with a `400` status code and return the following error message:
`Transfer In/Out transaction type is no longer supported. Please use the 'Create transfer transactions' endpoint.`
