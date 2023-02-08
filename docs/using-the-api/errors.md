---
title: "Status codes and errors"
description: "Learn about status codes and errors of Codat's APIs"
createdAt: "2019-03-14T11:06:10.705Z"
updatedAt: "2022-11-07T19:55:15.033Z"
---

The following page describes the status codes and standard error responses used in the Codat API.

## Status codes


{
"data": {
"h-0": "Status code",
"h-1": "Explanation",
"2-0": "400",
"3-0": "401",
"5-0": "403",
"6-0": "404",
"7-0": "405",
"10-0": "500",
"11-0": "503",
"2-1": "**Bad Request:** The server can't process the request because of an apparent client-side error.",
"3-1": "**Unauthorized:** The supplied Codat API key is incorrect.",
"5-1": "**Forbidden:** This error is returned in the following scenarios:

- The requested endpoint is for administrators only.

- A downstream endpoint can't be accessed.",
  "6-1": "**Not Found:** This error is returned in the following scenarios:

- The requested resource could not be found.

- The data type is not support by the underlying platform.
  In this case, the error message is: "Datatype [name] not supported by platform(s) [name]".",
  "7-1": "**Method Not Allowed:** You are attempting to use an unauthorized method.",
  "10-1": "**Internal Server Error: **There is a problem with our server. Please try again later.",
  "11-1": "**Service Unavailable:** The Codat API is temporarily offline for maintenance. Please try again later.",
  "4-0": "402",
  "4-1": "**Payment Required:** An account limit has been reached. The type of account limit is described in the `error` property:

- `Company limit exceeded`: You have exceeded the 50-company limit that applies to a Free or Test plan. We recommend that you delete any companies you no longer need and retry the request.

- `SyncSettingsValidationException: Sync schedule not allowed`: You have requested an _hourly_ sync schedule; this functionality is not included in the Free plan.

- `Payment Required`: Your Free account is older than 365 days and has expired. Please contact our [solutions team](mailto:solutions@codat.io) to upgrade your plan.

For example responses, see [Example account limit errors](/status-codes#example-account-limit-errors).",
"8-0": "409",
"8-1": "**Conflict:** The resource is not ready.

If syncing a data set, this could mean that either:

- The data set has not been requested.

- The syncing of data set has not been completed.",
  "0-0": "200",
  "1-0": "202",
  "0-1": "**Success** ",
  "1-1": "**Accepted** (pending)",
  "9-0": "429",
  "9-1": "**Too Many Requests:** You have made too many requests in a given amount of time; please retry later."
  },
  "cols": 2,
  "rows": 12
  }
  

## Example account limit errors

When an API request causes an account limit to be exceeded, you'll receive a 402 response code. The response body indicates which account limit was exceeded.

### 50-company limit

Error response from [POST /companies](https://api.codat.io/swagger/index.html#/Companies/post_companies) when you have exceeded the 50-company limit that applies to the Free plan.

For example:

```
{
"statusCode": 402,
"service": "PublicApi",
"error": "CompanyValidationException: Company limit exceeded",
"correlationId": "00000000-0000-0000-0000-000000000000",
"validation": {
  "errors": [
    {
      "itemId": "Company",
      "message": "Company limit exceeded. Learn more at https://docs.codat.io/docs/environments-1",
      "validatorName": "CreateCompany"
    }
  ],
  "warnings": []
}
}
```

### Sync frequency limit

Error response from [POST /profile/syncSettings](https://api.codat.io/swagger/index.html#/Profile/post_profile_syncSettings) when the `syncSchedule` is set to less than `24`. This error is returned if you request an _hourly_ sync schedule, which is not supported on the Free plan.

```
{
  "statusCode": 402,
  "service": "ClientsApi",
  "error": "SyncSettingsValidationException: Sync schedule not allowed",
  "correlationId": "00000000-0000-0000-0000-000000000000",
  "validation": {
    "errors": [
      {
        "itemId": "SyncSettings",
        "message": "Sync schedule is not allowed for this client.",
        "validatorName": "SyncSettings"
      }
    ],
    "warnings": []
  }
}
```

### 365 day free account limit

Error response when your account has expired and you make a request to any endpoint. This error is returned if your Free account is older than 365 days and has expired.

```
{
  "statusCode": 402,
  "service": "PublicApi",
  "error": "Payment Required",
  "correlationId": "00000000-0000-0000-0000-000000000000",
  "validation": {
    "errors": [
      {
        "message": "Account expired. Learn more at https://docs.codat.io/docs/environments-1",
      }
    ],
    "warnings": []
  }
}
```

## Correlation IDs in error responses

The content of an error response includes a more detailed error message and a `correlationId`, which can be used to identify a particular response. Please include the `correlationId` in text format if you are contacting Codat support regarding an error.

```
{
"statusCode": 404,
"service": "QuickbooksOnline",
"error": "InvoicePdfNotFoundException: Invoice not found for company 360cb9b3-d9cf-4f66-b8db-8a3523fe3dc5 and invoice ID 12345",
"correlationId": "131f0225-5467-421a-b179-4531d6b4a942"
}
```

## Status codes in asynchronous push responses

Status codes for push operations created in the Codat API might be different from the status codes returned in the responses from the service providers.

When a push operation is created in the API, some service providers may use a `202 Accepted` code, which implies that the request has been accepted for processing, but the processing has not completed. However, the push API may return a 200 Success code for the push operation successfully created in the Codat API.
