---
title: "Upcoming 2023-04-11: Deprecation of legacy bank account endpoints"
date: "2023-01-15"
tags: ["Deprecation", "Bank accounts"]
draft: false
authors: d-laing
---

On April 11, 2023, Codat will deprecate legacy `bankAccount` endpoints.

<!--truncate-->

Over recent months, we have extended and improved bank data handling in the Codat API, with new endpoints for accessing `bankAccount` and `bankTransaction` data.

The following endpoints will be deprecated:

```http 
GET /companies/{companyId}/data/bankAccounts
GET /companies/{companyId}/data/bankAccounts/{accountId}
GET /companies/{companyId}/data/bankAccounts/{accountId}/transactions
```

:::note Update - 2023/02/16

This was previously scheduled for 2023/04/10. This has been pushed back a day as this fell on a public holiday in the UK.
:::

## Action required

If you are using either of the above endpoints, you will need to instead use the following endpoints:  
```http
GET /companies/{companyId}/connections/{connectionId}/data/bankAccounts  
GET /companies/{companyId}/connections/{connectionId}/data/bankAccounts/{accountId}  
GET /companies/{companyId}/connections/{connectionId}/data/bankAccounts/{accountId}/bankTransactions
```

## Expected impact if no action is taken

After April 11, 2023, calls to the deprecated endpoints will return a 404 error.

```json
{
  "statusCode": 404,
  "service": "PublicApi",
  "error": "NotFound",
  "correlationId": "2b60a2bafedd3238702c2186a2dc833f",
  "canBeRetried": "Unknown",
  "detailedErrorCode": 0
}
```

> 📘
>
> You can get ahead of this change by enabling it now in the [Portal](https://app.codat.io/developers/api-deprecations). Learn how to do that [here](https://docs.codat.io/other/portal/developers), or read our [change policy](https://docs.codat.io/introduction/change-policy).
