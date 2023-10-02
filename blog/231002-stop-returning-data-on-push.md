---
title: "2024-01-10: Deprecation of returned data object on push"
date: "2023-10-02"
tags: ["Deprecation"]
authors: dharries
---

On **January 10, 2024**, we will deprecate the data field that is currently returned on all push operation responses. Pushed data will also no longer be stored and so a sync will be required to be able to pull any new or updated records you have pushed.

<!--truncate-->
<details>
<summary> Before change</summary>
```json
{
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
  "data": "string",
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
}
```
</details>

<details>
<summary> After change</summary>
```json
{
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
}
```
</details>

## Action required​

If you currently make use of any properties in the data object of the push operation response, you will need to use the changes.recordRef object instead.

1. Use changes.recordRef to retrieve the record datatype and id.
2. Initiate a sync for the given data type or wait until the next scheduled sync.
3. After the sync is complete, make a GET call to the relevant endpoint to retrieve the full record if needed.

## Expected impact if no action is taken​

As of January 10, 2024, you will no longer be able to use the data object on the push operation responses.

You will not be able to use the returned id to pull data you have pushed until a subsequent sync is completed for the given data type.
