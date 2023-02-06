---
title: "Banking transactions"
description: "A record of money that moved in and out of your bank account"
createdAt: "2022-03-12T12:36:22.835Z"
updatedAt: "2022-11-22T11:55:24.120Z"
---

The Banking Transactions data type provides an immutable source of up-to-date information on income and expenditure.

Explore the <a className="external" href="https://api.codat.io/swagger/index.html#/BankingTransactions" target="_blank">Banking Transactions</a> endpoints in Swagger.

View the coverage for banking transactions in the <a className="external" href="https://knowledge.codat.io/supported-features/banking?view=tab-by-data-type&dataType=banking-transactions" target="_blank">Data coverage explorer</a>.

# Overview

From the Banking Transactions endpoint, you can retrieve a list of all bank account transactions:  
`GET /companies/{companyId}/connections/{connectionId}/data/banking-transactions`

Responses are paged, so you should provide `page` and `pageSize` query parameters in your request. See [Pagination](/pagination) for details.

# Data model

[block:parameters]
{
"data": {
"h-0": "Field",
"h-1": "Type",
"h-2": "Description",
"0-0": "id",
"0-1": "_string_",
"0-2": "The unique identifier of the bank transaction.",
"1-0": "accountId",
"1-1": "_string_",
"1-2": "The unique identifier of the bank account.",
"2-0": "description",
"2-1": "_string_",
"2-2": "The description of the bank transaction.",
"3-0": "amount",
"3-1": "_decimal_",
"3-2": "The amount of the bank transaction.",
"4-0": "currency",
"4-1": "_string_",
"4-2": "The currency of the bank transaction.",
"5-0": "postedDate",
"5-1": "_date_  
See [Date](/datamodel-shared-date)",
"5-2": "YYYY-MM-DDT00:00:00Z

The date the bank transaction was cleared.",
"6-0": "authorizedDate",
"6-1": "_date_  
See [Date](/datamodel-shared-date)",
"6-2": "YYYY-MM-DDT00:00:00Z

The date the bank transaction was authorized.",
"7-0": "merchantName",
"7-1": "_string_",
"7-2": "The name of the merchant.",
"8-0": "transactionCategoryRef",
"8-1": "See [Transaction category reference](#transaction-category-reference)",
"8-2": "An object of bank transaction category reference data.",
"9-0": "modifiedDate",
"9-1": "_date_  
See [Date](/datamodel-shared-date)",
"9-2": "YYYY-MM-DDT00:00:00Z

The date the record was last updated in Codat's cache.",
"10-0": "sourceModifiedDate",
"10-1": "_date_  
See [Date](/datamodel-shared-date)",
"10-2": "YYYY-MM-DDT00:00:00

The date the record was last changed in the originating system."
},
"cols": 3,
"rows": 11,
"align": [
"left",
"left",
"left"
]
}
[/block]

## Transaction category reference

| Field | Type     | Description                                                |
| :---- | :------- | :--------------------------------------------------------- |
| id    | _string_ | The unique category reference id for the bank transaction. |
| name  | _string_ | The category name reference for the bank transaction.      |

# Example data

```json
{
      "id": "0130b5bb-1419-40f6-8a27-7362d0381229",
      "accountId": "1703194f-7805-4da8-bac0-2ba5da4a4216",
      "description": "Payments for direct income ce149943-c157-43fc-aac7-42a716b655b6",
      "amount": 5062.39,
      "currency": "GBP",
      "postedDate": "2021-07-06T00:00:00",
      "authorizedDate": "2021-07-06T00:00:00",
      "merchantName": "New Look",
      "transactionCategoryRef": {
        "id": "health-and-fitness-sports"
      },
      "modifiedDate": "2022-05-23T16:32:50Z",
      "sourceModifiedDate": "2021-06-28T10:48:12"
    },
    {
      "id": "014a36ad-9694-4f02-9632-52889862d85a",
      "accountId": "1703194f-7805-4da8-bac0-2ba5da4a4216",
      "description": "Payment to supplier 0o31BcAHVh",
      "amount": -9051.15,
      "currency": "GBP",
      "postedDate": "2021-10-17T00:00:00",
      "authorizedDate": "2021-10-17T00:00:00",
      "merchantName": "IKEA",
      "transactionCategoryRef": {
        "id": "personal-care-laundry"
      },
      "modifiedDate": "2022-05-23T16:32:50Z",
      "sourceModifiedDate": "2022-05-01T05:43:12"
    }
```
