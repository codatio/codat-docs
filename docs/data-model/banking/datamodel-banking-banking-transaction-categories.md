---
title: "Banking transaction categories"
description: "List of hierarchical categories associated with a transaction"
createdAt: "2022-03-12T12:40:31.126Z"
updatedAt: "2022-11-22T12:13:36.408Z"
---

Explore the <a className="external" href="https://api.codat.io/swagger/index.html#/BankingTransactionCategories" target="_blank">Banking Transaction Categories</a> endpoints in Swagger.

View the coverage for banking transaction categories in the <a className="external" href="https://knowledge.codat.io/supported-features/banking?view=tab-by-data-type&dataType=banking-transactionCategories" target="_blank">Data coverage explorer</a>.

# Overview

The Banking Transaction Categories data type provides a list of hierarchical categories associated with a transaction for greater contextual meaning to transaction activity.

From the Banking Transaction Categories endpoint, you can retrieve:

- A list of all banking transaction categories:  
  `GET /companies/{companyId}/connections/{connectionId}/data/banking-transactionCategories`

- Details of a single banking transaction category under a specific category ID:  
  `GET /companies/{companyId}/connections/{connectionId}/data/banking-transactionCategories/{transactionCategoryId}`

  Note that in this endpoint example, _auto-and-transport_ is a transaction category.

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
"0-2": "The unique identifier of the bank transaction category.",
"1-0": "name",
"1-1": "_string_",
"1-2": "The name of the bank transaction category.",
"2-0": "parentId",
"2-1": "_string_",
"2-2": "The unique identifier of the parent bank transaction category.",
"3-0": "hasChildren",
"3-1": "_boolean_",
"3-2": "A Boolean indicating whether there are other bank transaction categories beneath this one in the hierarchy.",
"4-0": "status",
"4-1": "_string_",
"4-2": "Status of the bank transaction category, i.e. "active", "archived", "unknown".",
"5-0": "modifiedDate",
"5-1": "_string_  
See [Date](/datamodel-shared-date)",
"5-2": "YYYY-MM-DDT00:00:00Z

The date the record was last updated in Codat's cache.",
"6-0": "sourceModifiedDate",
"6-1": "_string_  
See [Date](/datamodel-shared-date)",
"6-2": "YYYY-MM-DDT00:00:00

The date the record was last changed in the originating system.",
"7-0": "subcategories",
"7-1": "_array_

See [Transaction category for a specific ID](#example-data-for-transaction-category-for-a-specific-category-id)",
"7-2": "Only returned for banking transaction category for a specific category id endpoint.

A collection of subcategories that are nested beneath this category."
},
"cols": 3,
"rows": 8,
"align": [
"left",
"left",
"left"
]
}
[/block]

# Example data for transaction categories

```json
{
  "results": [
    {
      "id": "auto-and-transport",
      "name": "Auto & Transport",
      "hasChildren": true,
      "status": "Active",
      "modifiedDate": "2022-05-23T16:32:50",
      "sourceModifiedDate": "2021-04-24T07:59:10"
    },
    {
      "id": "auto-and-transport-auto-insurance",
      "name": "Auto Insurance",
      "parentId": "auto-and-transport",
      "hasChildren": false,
      "status": "Active",
      "modifiedDate": "2022-05-23T16:32:50",
      "sourceModifiedDate": "2022-02-28T11:47:10"
    },
    {
      "id": "auto-and-transport-auto-payment",
      "name": "Auto Payment",
      "parentId": "auto-and-transport",
      "hasChildren": false,
      "status": "Active",
      "modifiedDate": "2022-05-23T16:32:50",
      "sourceModifiedDate": "2021-09-17T01:24:10"
    }
  ]
```

# Example data for transaction category for a specific category ID

```json
{
  "id": "entertainment",
  "name": "Entertainment",
  "hasChildren": true,
  "status": "Active",
  "modifiedDate": "2022-03-23T16:12:28Z",
  "sourceModifiedDate": "2020-11-13T10:41:31",
  "subcategories": [
    {
      "id": "entertainment-arts",
      "name": "Arts",
      "parentId": "entertainment",
      "hasChildren": false,
      "status": "Active",
      "modifiedDate": "2022-03-23T16:12:28",
      "sourceModifiedDate": "2020-11-17T22:50:31",
      "subcategories": []
    },
    {
      "id": "entertainment-dating",
      "name": "Dating",
      "parentId": "entertainment",
      "hasChildren": false,
      "status": "Active",
      "modifiedDate": "2022-03-23T16:12:28",
      "sourceModifiedDate": "2021-10-22T07:32:31",
      "subcategories": []
    },
    {
      "id": "entertainment-games",
      "name": "Games",
      "parentId": "entertainment",
      "hasChildren": false,
      "status": "Active",
      "modifiedDate": "2022-03-23T16:12:28",
      "sourceModifiedDate": "2021-09-24T09:57:31",
      "subcategories": []
    },
    {
      "id": "entertainment-newspaper-and-magazines",
      "name": "Newspaper & Magazines",
      "parentId": "entertainment",
      "hasChildren": false,
      "status": "Active",
      "modifiedDate": "2022-03-23T16:12:28",
      "sourceModifiedDate": "2021-07-19T20:13:31",
      "subcategories": []
    },
    {
      "id": "entertainment-social-club",
      "name": "Social Club",
      "parentId": "entertainment",
      "hasChildren": false,
      "status": "Active",
      "modifiedDate": "2022-03-23T16:12:28",
      "sourceModifiedDate": "2021-03-14T03:48:31",
      "subcategories": []
    },
    {
      "id": "entertainment-sport",
      "name": "Sport",
      "parentId": "entertainment",
      "hasChildren": false,
      "status": "Active",
      "modifiedDate": "2022-03-23T16:12:28",
      "sourceModifiedDate": "2021-11-15T07:27:31",
      "subcategories": []
    }
  ]
}
```
