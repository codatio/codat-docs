---
title: "2024-10-10: Deprecation of `Adjustment in/out` transaction types for Sync for Expenses"
date: "2024-06-10"
tags: ["Deprecation"]
authors: Amy-Roberts
---

On **October 10, 2024**, we will remove the `Adjustment in` and `Adjustment out` transaction types from the Sync for Expenses [Create expense transaction](/sync-for-expenses-api#/operations/create-expense-transaction) endpoint.

<!--truncate-->

After the change, you will need to use the [Create adjustment transaction](/sync-for-expenses-api#/operations/create-adjustment-transaction) endpoint to represent an adjustment when syncing expenses.

This endpoint is currently only available for our QuickBooks Desktop integration.

## Action required

If you are currently using the `Adjustment in` or `Adjustment out` transaction types, you will need to create these transactions via the [Create adjustment transaction](/sync-for-expenses-api#/operations/create-adjustment-transaction) endpoint instead.

To create document attachments alongside your adjustment transaction, you can continue using the [Upload attachment](/sync-for-expenses-api#/operations/upload-expense-attachment) endpoint.

When creating an adjustment, the [Create adjustment transaction](https://docs.codat.io/sync-for-expenses-api#/operations/create-adjustment-transaction) endpoint initiates a sync automatically and will respond with a `syncId`. You do not need to initiate the transaction sync yourself, and you will not receive a `datasetId` in the response.

## Expected impact if no action is taken

If you try to use the `Adjustment in` and `Adjustment out` transaction types with the [Create expense transaction](/sync-for-expenses-api#/operations/create-expense-transaction) endpoint after **October 10, 2024**, the syncs will fail with a `400` status code and return the following error message:

`Adjustment In/Out transaction type is no longer supported. Please use the 'Create transfer transactions' endpoint.`
