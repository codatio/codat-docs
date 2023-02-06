---
title: "Banking account balances"
description: "Balances for a bank account"
createdAt: "2022-03-12T12:39:06.539Z"
updatedAt: "2022-11-22T11:54:34.145Z"
---

Explore the <a className="external" class="external" href="https://api.codat.io/swagger/index.html#/BankingAccountBalances" target="_blank">Banking Account Balances</a> endpoint in Swagger.

View the coverage for banking account balances in the <a className="external" href="https://knowledge.codat.io/supported-features/banking?view=tab-by-data-type&dataType=banking-accountBalances" target="_blank">Data coverage explorer</a>.

# Overview

The Banking Account Balances data type provides a list of balances for a bank account including end-of-day batch balance or running balances per transaction.

:::caution How often should I pull Account Balances?

Because the balances on the banking-accountBalances data type are closing balances, we recommend you pull Account Balances no more frequently than daily. If you require a live intraday balance, this can be found for each account on the [banking-bankAccounts](#data-model-banking-banking-accounts) data type.

Whilst you can choose to sync hourly, this may incur usage charges from Plaid or TrueLayer.
:::

From the Banking Account Balances endpoint, you can retrieve a list of all bank account balances:  
`GET /companies/{companyId}/connections/{connectionId}/data/banking-accountBalances`

Responses are paged, so you should provide `page` and `pageSize` query parameters in your request. See [Pagination](/pagination) for details.

# Data model

[block:parameters]
{
"data": {
"h-0": "Field",
"h-1": "Type",
"h-2": "Description",
"0-0": "accountId",
"0-1": "_string_",
"0-2": "The unique identifier of the account.",
"1-0": "balance",
"1-1": "See [Balance](#balance)",
"1-2": "An object containing bank balance data.",
"2-0": "date",
"2-1": "_string_  
See [Date](/datamodel-shared-date)",
"2-2": "Date of the balance.",
"3-0": "modifiedDate",
"3-1": "_string_  
See [Date](/datamodel-shared-date)",
"3-2": "Date the balance was last changed in the Codat's cache.",
"4-0": "sourceModified",
"4-1": "_string_  
See [Date](/datamodel-shared-date)",
"4-2": "Date the balance was last updated in the underlying open banking provider's data."
},
"cols": 3,
"rows": 5,
"align": [
"left",
"left",
"left"
]
}
[/block]

## Balance

| Field     | Type      | Description                                              |
| :-------- | :-------- | :------------------------------------------------------- |
| available | _decimal_ | The funds available to withdraw from the bank account.   |
| current   | _decimal_ | The funds in or owed by the bank account.                |
| limit     | _decimal_ | The credit limit or overdraft limit of the bank account. |

_Depending on the data provided by the underlying bank, not all balances are always available._

# Example data

```json
{
  "accountBalances": [
    {
      "accountId": "cce404db-27f7-4286-95db-622b53596cf4",
      "balance": {
        "available": 714374.48,
        "current": 714374.57,
        "limit": 5000.0
      },
      "date": "2021-03-18T00:00:00"
    },
    {
      "accountId": "cce404db-27f7-4286-95db-622b53596cf4",
      "balance": {
        "available": 714374.48,
        "current": 714374.57,
        "limit": 5000.0
      },
      "date": "2021-03-19T00:00:00"
    },
    {
      "accountId": "cce404db-27f7-4286-95db-622b53596cf4",
      "balance": {
        "available": 714195.66,
        "current": 714204.39,
        "limit": 5000.0
      },
      "date": "2021-03-22T00:00:00"
    },
    {
      "accountId": "2f593774-1075-4805-a552-84eecc7eb264",
      "balance": {
        "available": -644945.42,
        "current": -644925.84,
        "limit": 0
      },
      "date": "2022-03-09T00:00:00"
    }
  ]
}
```
