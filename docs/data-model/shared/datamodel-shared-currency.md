---
title: "Currency"
description: "The code representing a currency"
createdAt: "2019-02-19T11:33:06.539Z"
updatedAt: "2022-11-22T13:57:37.493Z"
---

The currency data type in Codat is the [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) currency code. e.g. _GBP_.

## Unknown currencies

In line with the ISO 4217 specification, the code _XXX_ is used when the data source does not return a currency for a transaction.

There are only a very small number of edge cases where this currency code is returned by the Codat system.
