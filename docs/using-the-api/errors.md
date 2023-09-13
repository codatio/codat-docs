---
title: "Status codes and errors"
description: "Learn about status codes and errors of Codat's APIs"
createdAt: "2019-03-14T11:06:10.705Z"
updatedAt: "2022-11-07T19:55:15.033Z"
---

The following page describes the status codes and standard error responses used in the Codat API.

## Status codes

| Status code 	| Explanation 	|
|---	|---	|
| 200 	| **Success** 	|
| 202 	| **Accepted** (pending) 	|
| 400 	| **Bad Request:** The server can't process the request because of an apparent client-side error. 	|
| 401 	| **Unauthorized:** The supplied Codat API key is incorrect. 	|
| 402 	| **Payment Required:** An account limit has been reached. The type of account limit is described in the `error` property:  <br/>- `Company limit exceeded`: You have exceeded the 50-company limit that applies to a Free plan. We recommend that you delete any companies you no longer need and retry the request.  <br/>- `SyncSettingsValidationException: Sync schedule not allowed`: You have requested an _hourly_ sync schedule; this functionality is not included in the Free plan.  <br/>- `Payment Required`: Your Free account is older than 365 days and has expired. Please contact our [solutions team](mailto:solutions@codat.io) to upgrade your plan.  <br/>For example responses, see [Example account limit errors](doc:status-codes#example-account-limit-errors). 	|
| 403 	| **Forbidden:** This error is returned in the following scenarios:  <br/>You're using an outdated API key or a key not associated with that resource.<br/>- The requested endpoint is for administrators only.  <br/>- A downstream endpoint can't be accessed. 	|
| 404 	| **Not Found:** This error is returned in the following scenarios:  <br/>- The requested resource could not be found.  <br/>- The data type is not supported by the underlying platform.  <br/>    In this case, the error message is: "Datatype [name] not supported by platform(s) [name]". 	|
| 405 	| **Method Not Allowed:** You are attempting to use an unauthorized method. 	|
| 409 	| **Conflict:** The resource is not ready.  <br/>If syncing a data set, this could mean that either:  <br/>- The data set has not been requested.  <br/>- The syncing of data set has not been completed. 	|
| 429 	| **Too Many Requests:** You have made too many requests in a given amount of time; please retry later. 	|
| 500 	| **Internal Server Error:** There is a problem with our server. Please try again later. 	|
| 503 	| **Service Unavailable:** The Codat API is temporarily offline for maintenance. Please try again later. 	|

## Example account limit errors

When an API request causes an account limit to be exceeded, you'll receive a 402 response code. The response body indicates which account limit was exceeded.

### 50-company limit

Error response from [POST /companies](/platform-api#/operations/create-company) when you have exceeded the 50-company limit that applies to the Free plan.

For example:

```json
{
"statusCode": 402,
"service": "PublicApi",
"error": "CompanyValidationException: Company limit exceeded",
"correlationId": "00000000-0000-0000-0000-000000000000",
"validation": {
  "errors": [
    {
      "itemId": "Company",
      "message": "Company limit exceeded. Learn more at https://docs.codat.io/using-the-api/errors",
      "validatorName": "CreateCompany"
    }
  ],
  "warnings": []
}
}
```
### 365 day free account limit

Error response when your account has expired and you make a request to any endpoint. This error is returned if your Free account is older than 365 days and has expired.

```json
{
  "statusCode": 402,
  "service": "PublicApi",
  "error": "Payment Required",
  "correlationId": "00000000-0000-0000-0000-000000000000",
  "validation": {
    "errors": [
      {
        "message": "Account expired. Learn more at https://docs.codat.io/using-the-api/errors",
      }
    ],
    "warnings": []
  }
}
```

## Correlation IDs in error responses

The content of an error response includes a more detailed error message and a `correlationId`, which can be used to identify a particular response. Please include the `correlationId` in text format if you are contacting Codat support regarding an error.

```json
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

:::tip Recap
You've learned about error codes you might encounter while using the API.
:::

---

## Read next

- [Creating and updating data](/using-the-api/push)
