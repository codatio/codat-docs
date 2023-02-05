---
title: "Example requests for additional banking data"
description: "Example proxy requests to the Plaid and TrueLayer APIs"
createdAt: "2021-12-03T10:18:50.094Z"
updatedAt: "2022-10-20T10:48:46.937Z"
---

Use the following examples to help you make requests to Plaid or TrueLayer endpoints through the proxy.

## Example request to Plaid

All requests to the Plaid API use POST; the actual method is defined as a path parameter. This example shows a proxy request to the `/item/get` endpoint in the Plaid API.

```
POST /companies/{companyId}/connections/{connectionId}/data/proxy?endpoint=item/get
```

- `companyId`: The ID of a company for which you are authorized to access banking data through the Plaid integration.

- `connectionId`: Connection ID of a linked data connection for the specified company.

If successful, a list of [Plaid items](https://plaid.com/docs/quickstart/glossary/#item) associated with the connection is returned.

## Example request to TrueLayer

This example shows a proxy request to the `/direct-debits` endpoint in the TrueLayer Data API.

1. Get an account ID from the [Bank accounts](https://api.codat.io/swagger/index.html#/BankAccounts/get_companies__companyId__connections__connectionId__data_bankAccounts) endpoint in the Codat API:

```
GET /companies/{companyId}/connections/{connectionId}/data/bankAccounts
```

- `companyId`: The ID of a company for which you are authorized to access banking data through the TrueLayer integration.

- `connectionId`: Connection ID of a linked data connection for the specified company.

2. Make a GET request to the `/direct_debits` endpoint in the TrueLayer API:

```
GET /companies/{companyId}/connections/{connectionId}/data/proxy?endpoint=accounts/{account_id}/direct_debits
```

- `account_id`: The ID of the account in TrueLayer to retrieve direct debits for.

If successful, a list of direct debits associated with the account is returned.

:::info Errors

Errors returned through the proxy from the Plaid or TrueLayer API always contain a `canBeRetried: “Unknown”` parameter in the response. This parameter can be ignored.
:::
