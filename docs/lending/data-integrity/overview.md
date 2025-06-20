---
title: "Data Integrity"
description: "Learn about the feature that matches mutable accounting data with immutable banking data to increase confidence in financial data"
sidebar_label: "Overview"
image: "/img/banners/social/lending.png"
draft: true
---

Accounting data is rich and contextual, but is user-entered, and therefore potentially open to manipulation and fraud. Banking data lacks context and meaning, but it comes directly from a trusted source or a third party and is immutable.

Our Data Integrity feature automatically matches these data sources so you don't have to. It matches bank accounts and transactions reported in an accounting data source against bank accounts and transactions reported in banking data sources.

Data integrity helps lenders validate the accuracy of financial accounts and verify if fraud may have occurred.

The Data Integrity API consists of the following endpoints, called individually for each data type:

- [Status](/lending-api#/operations/get-data-integrity-status) endpoint exposes the information needed to usefully query results.
- [Summaries](/lending-api#/operations/get-data-integrity-summaries) endpoint exposes summary results, queryable in a granular way.
- [Details](/lending-api#/operations/list-data-integrity-details) endpoint exposes record-by-record information, queryable using the same parameters as the summary endpoint.

## How do we match data?

Companies need to have accounting and banking data sources linked.

Data Integrity is based on the mapping between one or multiple bank transactions in the banking source and a single bank transaction in the accounting source. The matching algorithm matches according to the data types synced.

To use this feature, the following data types need to be enabled:

- _banking-accounts_ for the banking data source.
- _banking-transactions_ for the banking data source.
- _bankAccounts_ for the accounting data source.
- _accountTransactions_ for the accounting data source.

## Matching

The matching algorithm will match _accountTransactions_ (accounting) with _banking-transactions_ (banking) and _bankAccounts_ (accounting) with _banking-accounts_ (banking).

The matching logic uses a multi-step approach that incrementally releases the mapping restrictions. It begins the comparison by searching for transactions that match strict conditions and relaxes these conditions with each comparison step to allow for more flexible matching. This ensures the maximum accuracy and trustworthiness of the provided match results.

The transaction data used to compare in the logic are:

- Transaction amount
- Currency
- Clearing Date
- Description
- Account data

For non-textual comparisons (like dates and numbers), the logic compares values to match them exactly or within a threshold.

For textual comparisons (like account description), a combination of _Jaro-Winkler_ similarity and _Overlap coefficient_ (with thresholds) is used to compare how closely the string values match.

In the event that the company has bank accounts with different currencies, those transactions will be matched with an accounting source with the same currency. For these companies, the matching percentage will be less accurate.
