---
title: "Data integrity"
sidebar_label: Overview
description: "Matching mutable accounting data with immutable banking data to increase confidence in financial data"
createdAt: "2022-01-18T14:55:56.434Z"
updatedAt: "2022-11-02T14:46:09.812Z"
---

Accounting data is rich and contextual, but is user-entered, and therefore potentially open to manipulation and fraud. Banking data lacks context and meaning, but comes directly from a trusted source or a third party, and is immutable.

Our Data Integrity feature automatically matches these data sources for you so you don't have to. Data Integrity matches bank accounts and transactions reported in an accounting data source against bank accounts and transactions reported in banking data sources.

In principle this validation can support many use cases, e.g. lending decision-making (perhaps lenders have more confidence in lending to businesses with highly accurate books), fraud detection, and invoice financing.

## How do we match data?

Companies need to have accounting and banking data sources linked.

Data Integrity is based on mapping between one or multiple bank transactions in the banking source and a single bank transaction in the accounting source. The matching algorithm matches according to the data types synced.

To use this feature the following data types need to be enabled:

- _banking-accounts_ for the banking data source.
- _banking-transactions_ for the banking data source.
- _bankAccounts_ for the accounting data source.
- _accountTransactions_ for the accounting data source.

:::info Deprecation notice

Matching also works with the _bankAccounts_ (banking data source) and _bankTransactions_ (banking data source). Note that these data types will be deprecated in the future.

It is recommended that you use _banking-accounts_ and _banking-transactions_ data types to get the most out of Data Integrity.

:::

## Matching

The matching algorithm will match _accountTransactions_ (accounting) with _banking-transactions_ (banking) and _bankAccounts_ (accounting) with _banking-accounts_ (banking).

The matching logic uses a multi-step approach that incrementally releases the mapping restrictions. It begins the comparison by searching for transactions that match strict conditions, and relaxes these conditions with each comparison step to allow for more flexible matching. This ensures the maximum accuracy and trustworthiness of the provided match results.

The transaction data used to compare in the logic are:

- Transaction amount
- Currency
- Clearing Date
- Description
- Account data

For non-textual comparisons (like dates and numbers), the logic compares values to match them exactly or within a threshold.

For textual comparisons (like account description), a combination of _Jaro-Winkler_ similarity and _Overlap coefficient_ (with thresholds) is used to compare how closely the string values match.

In the event where the company has bank accounts with different currencies, those transactions will be matched with an accounting source with the same currency. For these companies, the matching percentage will be less accurate. This is on our roadmap to fix.
