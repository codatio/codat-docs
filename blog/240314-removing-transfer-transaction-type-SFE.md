---
title: "Upcoming 2024-03-14: Removing 'Transfer in/out' transaction types from Sync for Expenses"
date: "2024-03-14"
tags: ["Deprecation"]
draft: true
authors: Amy-Roberts
---
On June 19, 2024 we will be removing the Transfer In and Transfer Out transaction type from the Sync for Expenses expense-transaction endpoint. 

To represent a transfer for our expenses offering going forward you will need to use the [transfer-transaction endpoint](link). This endpoint will allow you to represent multi currency transfer, as well as single currency. You can read more information on multicurrency transfers [here](https://docs.codat.io/expenses/fx-management#transfers). 

## Action required

If you are currently using the `Transfer in` or `Transfer out` transaction type, you will need to create these transactions via the [Create transfer transaction](link) endpoint instead. To create document attachments alongside your transfer transaction, you can continue using the [ENDPOINT NAME](link) endpoint.

You will also still be able to utilise the same attachment endpoint to push a document alongside your transfer transaction. 

When creating a transfer,  [Create transfer transaction](link) endpoint initiates a sync automatically and will respond with a `syncId`. You do not need to initiate the transaction sync yourself, and you will not receive a `datasetId` in the response.

## Expected impact if no action is taken

If you continue to use the Transfer In/Out transaction type, the syncs fail and will result in the following error message:

```JSON

{
    "statusCode": 400,
    "service": "PublicApi",
    "error": "Tansfer In/Out transaction type is no longer supported. Please use the 'Create transfer transactions' endpoint.",
    "correlationId": "string",
    "validation": {
        "errors": [],
        "warnings": [],
        "_errors": [],
        "_warnings": [],
        "_internals": []
    },
    "canBeRetried": "Unknown",
    "detailedErrorCode": 0
}


