---
title: "2024-03-14: Removing transfer In/Out transaction type from Sync for Expenses "
date: "2024-03-14"
tags: ["Deprecation"]
draft: true
authors: Amy-Roberts
---
On June 19,2024 we will be removing the Transfer In and Transfer Out transaction type from the Sync for Expenses expense-transaction endpoint. 

To represent a transfer for our expenses offering going forward you will need to use the [transfer-transaction endpoint](link). This endpoint will allow you to represent multi currency transfer, as well as single currency. You can read more information on multicurrency transfers [here](https://docs.codat.io/expenses/fx-management#transfers). 

## Action required

If you are currently using the Transfer In or Transfer Out transaction type, then you will need to map these transactions to then be created via the create transfer transaction endpoint instead. 

You will also still be able to utilise the same attachment endpoint to push a document alongside your transfer transaction. 

When a transfer is created via this new endpoint, the response will be a sync id, meaning a sync will be automatically initiated. You will not recieve a dataset id and therefore will not use it to initiate the syncing of transactions.  

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


