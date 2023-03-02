---
title: "Upcoming 2023-07-10: Deprecation of the use of bankAccount and bankTransaction data types for banking data connections"
date: "2023-07-10"
tags: ["Deprecation"]
draft: true
authors: d-laing
---

On July 10, 2023, Codat will deprecate the use of bankAccount and bankTransaction data types for syncing banking data.

Requests made to the following endpoints for banking data connections will no longer trigger a sync:

- `https://api.codat.io/swagger/index.html#/Data/post_companies__companyId__data_queue__dataType_`
- `GET /companies/{companyId}/connections/{connectionId}/data/bankAccounts`
- `GET /companies/{companyId}/connections/{connectionId}/data/bankTransactions`

After the change is implemented, a call to either of these endpoints with bankAccount and bankTransaction data types for a data connection ID pertaining to a banking data connection will return a 400 response. 

## Action required​

Switch to using the banking data types: [Account](https://docs.codat.io/banking-api#/schemas/Account) and [Transaction](https://docs.codat.io/banking-api#/schemas/Transaction). Enable these in your settings in the Portal.

You will also need to update any parts of your code that expect the response body from the Accounts and Transaction endpoints. 
For examples of the new response bodies for these data types, refer to the API reference.

## Expected impact if no action is taken​

After July 10, 2023, calls made using the deprecated data types for banking data connections will return a 400 error:

```json
{
  "statusCode": 400,
  "service": "PullApi",
  "error": "Datatype 'bankAccounts' not supported by platform baecf6cb-402c-4611-ae02-b0b5f7e3384f",
  "correlationId": "1f0ab3dcd57fe1de9c93b0a138fa56e5",
  "canBeRetried": "Unknown",
  "detailedErrorCode": 0
}
```
