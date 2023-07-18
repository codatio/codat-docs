---
title: "Enhanced Cash Flow"
description: "Introduction to Enhanced Cash Flow"
sidebar_label: "Overview"
---

The **Enhanced Cash Flow** endpoint returns categorized banking transactions that gives lenders the insights to accurately forecast a company's cash flow.

Accounts and transactions data are obtained from a company's banking data sources and categorized along with the confidence score for each categorization.

## Enhanced Cash Flow Transactions

:::info Categorization engine
The categorization engine uses machine learning and has been fully trained against Plaid and TrueLayer banking data sources. It is not fully trained against the Basiq banking data source.
:::

The **Enhanced Cash Flow Transactions** endpoint provides a fully categorized list of banking transactions for a company. Accounts and transaction data are obtained from the company's banking data sources.

The endpoint is available in our <a href="/assess-api#/operations/get-companies-companyId-reports-enhancedCashFlow-transactions">API reference</a>.

`GET /companies/{companyId}/reports/enhancedCashFlow/transactions`