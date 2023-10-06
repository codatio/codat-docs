---
title: "2024-01-10: Deprecation of `data` object returned when creating or updating records"
date: "2023-10-03"
tags: ["Deprecation"]
authors: dharries
---

import Diff from "@components/global/Diff"

On **January 10, 2024**, we will deprecate the `data` field that is currently returned in the response when creating or updating entities. Pushed data will also no longer be stored, so a refresh of data will be required for Codat to reflect any new or updated records.

<!--truncate-->

You can see a before and after examples of responses below:

<Diff
  showDiffOnly={false}
  oldCode={`{
  "changes": [
    {
      "type": "Unknown",
      "recordRef": {
        "id": "string",
        "dataType": "string"
      },
      "attachmentId": "string"
    }
  ],
  "data": { data type object being created or updated },
  "dataType": "string",
  "companyId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
  "pushOperationKey": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
  "dataConnectionKey": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
  "requestedOnUtc": "2023-06-26T07:48:36.066Z",
  "completedOnUtc": "2023-06-26T07:48:36.066Z",
  "timeoutInMinutes": 0,
  "status": "string",
  "errorMessage": "string",
  "validation": {
    "errors": [
      {
        "itemId": "string",
        "message": "string",
        "validatorName": "string"
      }
    ],
    "warnings": [
      {
        "itemId": "string",
        "message": "string",
        "validatorName": "string"
      }
    ]
  },
  "statusCode": 0
}`}
  newCode={`{
  "changes": [
    {
      "type": "Unknown",
      "recordRef": {
        "id": "string",
        "dataType": "string"
      },
      "attachmentId": "string"
    }
  ],
  "dataType": "string",
  "companyId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
  "pushOperationKey": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
  "dataConnectionKey": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
  "requestedOnUtc": "2023-06-26T07:48:36.066Z",
  "completedOnUtc": "2023-06-26T07:48:36.066Z",
  "timeoutInMinutes": 0,
  "status": "string",
  "errorMessage": "string",
  "validation": {
    "errors": [
      {
        "itemId": "string",
        "message": "string",
        "validatorName": "string"
      }
    ],
    "warnings": [
      {
        "itemId": "string",
        "message": "string",
        "validatorName": "string"
      }
    ]
  },
  "statusCode": 0
}`}
/>

## Action required​

If you currently make use of any properties in the `data` object of the push operation response, you will need to use the `changes.recordRef` object instead.

1. Use `changes.recordRef` to retrieve the record `datatype` and `id`.
2. Initiate a sync for the given data type or wait until the next scheduled sync.
3. After the sync is complete, make a `GET` call to the relevant endpoint to retrieve the full record if needed.

## Expected impact if no action is taken​

As of January 10, 2024, you will no longer be able to use the `data` object on the push operation responses.

You will not be able to use the returned `id` to pull data you have pushed until a subsequent sync is completed for the given data type.
