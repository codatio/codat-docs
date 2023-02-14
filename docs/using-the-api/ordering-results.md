---
title: "Ordering results"
description: "Basics and examples of ordering in Codat's APIs"
createdAt: "2020-02-27T01:32:43.041Z"
updatedAt: "2022-11-07T20:00:50.251Z"
---

In addition to [queries](/using-the-api/querying-1), you can limit response data using the `orderBy` parameter to specify the ordering of records in the response.

The API can return results in ascending order or descending order. You can also order results returned from custom queries.

## Sorting in ascending order

By default, results are sorted in ascending order. For example, if you want to return a [list of invoices](/accounting-api#/operations/list-invoices) in ascending order, oldest first, use the following syntax: `{parameter}={value}`. In this case, `orderBy=issueDate`.

```
GET /companies/{companyId}/data/invoices?page=1&orderBy=issueDate
```

## Sorting in descending order

To return results sorted in descending order you simply prepend a `-` to the parameter value. For example, to return the same [list of invoices](/accounting-api#/operations/list-invoices), this time with the newest invoice first, use the following syntax: `orderBy=-issueDate`.

```
GET /companies/{companyId}/data/invoices?page=1&orderBy=-issueDate
```

## Ordering results from a custom query

You can also order the results returned by any custom queries that you've written. For example, you might regularly run a query that returns all [outstanding bills](/accounting-api#/operations/list-bills):

```
GET /companies/{companyId}/data/bills?query=amountDue%3E0
```

To see the same list sorted in ascending order, that is the oldest outstanding bills first, you add the following syntax: `orderBy=dueDate`. The query becomes:

```
GET /companies/{companyId}/data/bills?query=amountDue%3E0&orderBy=dueDate
```

To see the same list sorted in descending order, that is the newest outstanding bills first, prepend `-` to the parameter value `dueDate`:

```
GET /companies/{companyId}/data/bills?query=amountDue%3E0&orderBy=-dueDate
```
