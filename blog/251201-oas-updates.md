---
title: "OpenAPI Specification Updates"
date: 2025-12-01
tags: ["Update", "Changelog"]
authors: "codat-bot"
---

This update summarizes recent changes made to our OpenAPI Specifications.

<!--truncate-->


## Codat-Lending

View the full API reference: [Codat-Lending](https://docs.codat.io/lending-api#/)


### Modified Endpoints

- [`/companies/{companyId}/reports/creditModel/{reportId}/excel`](https://docs.codat.io/lending-api#/operations/download-credit-model-excel)
- [`/companies/{companyId}/connections/{connectionId}/connectionInfo/bankFeedAccounts`](https://docs.codat.io/lending-api#/operations/create-source-account)
- [`/companies/{companyId}/reports/creditModel/{reportId}/financialSummary`](https://docs.codat.io/lending-api#/operations/get-financial-summary)

### New Models

- `FinancialSummary`

### Removed Models

- `ClosedBooksIndicator`

## Codat-Bank-Feeds

View the full API reference: [Codat-Bank-Feeds](https://docs.codat.io/bank-feeds-api#/)


### Modified Endpoints

- [`/companies/{companyId}/connections/{connectionId}/connectionInfo/bankFeedAccounts`](https://docs.codat.io/bank-feeds-api#/operations/create-source-account)

## Codat-Platform

View the full API reference: [Codat-Platform](https://docs.codat.io/platform-api#/)


### Modified Endpoints

- [`/companies/{companyId}/products/{productIdentifier}/refresh`](https://docs.codat.io/platform-api#/operations/refresh-product-data)

## Codat-Spend-Insights


### Modified Endpoints

- `/companies/{companyId}/reports/spendAnalysis/{reportId}/suppliers`
- `/companies/{companyId}/reports/spendAnalysis/{reportId}/paymentMethods`

## Codat-Sync-Expenses-v1


### Modified Endpoints

- `/companies/{companyId}/sync/expenses/expense-transactions/{transactionId}`

## Codat-Sync-Expenses

View the full API reference: [Codat-Sync-Expenses](https://docs.codat.io/sync-for-expenses-api#/)


### Modified Endpoints

- [`/companies/{companyId}/sync/expenses/reimbursable-expense-transactions`](https://docs.codat.io/sync-for-expenses-api#/operations/create-reimbursable-expense-transaction)

## Codat-Sync-Payables

View the full API reference: [Codat-Sync-Payables](https://docs.codat.io/sync-for-payables-v2-api#/)


### Modified Endpoints

- [`/companies/{companyId}/connections/{connectionId}/payables/bills/{billId}/attachments`](https://docs.codat.io/sync-for-payables-v2-api#/operations/list-bill-attachments)
- [`/companies/{companyId}/connections/{connectionId}/payables/bankAccounts`](https://docs.codat.io/sync-for-payables-v2-api#/operations/create-bank-account)
