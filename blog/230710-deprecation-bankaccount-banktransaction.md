---
title: "Upcoming 2023-07-10: Deprecation of the use of bankAccounts and bankTransactions data types for banking data connections"
date: "2023-03-03"
tags: ["Deprecation"]
authors: GraceCodat
---

On July 10, 2023, Codat will deprecate the use of `bankAccounts` and `bankTransactions` data types for syncing banking data connections via Plaid, TrueLayer and Basiq. The use of these data types for accounting data connections will remain unchanged.

<!--truncate-->

Requests made to the following endpoints for banking data connections will no longer trigger a sync:

- `POST /companies/{companyId}/data/queue/bankAccounts`
- `POST /companies/{companyId}/data/queue/bankTransactions`

After the change is implemented, a call to either of these endpoints for a Plaid, TrueLayer, or Basiq data connection ID will return a 400 response. 

## Action required​

If you haven't already done so, switch to using the banking data types: [`banking-accounts`](https://docs.codat.io/banking-api#/schemas/Account) and [`banking-transactions`](https://docs.codat.io/banking-api#/schemas/Transaction). Enable these in your settings in the Portal.

You will also need to update any parts of your code that expect the response body from the `banking-accounts` and `banking-transactions` endpoints. 
For examples of the new response bodies for these data types, refer to the API reference.

## Expected impact if no action is taken​

After July 10, 2023, calls made using `bankAccounts` and `bankTransactions` data types for a Plaid, TrueLayer or Basiq data connection ID will return a 400 error:

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
