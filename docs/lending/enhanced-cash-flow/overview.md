---
title: "Enhanced Cash Flow"
description: "Introduction to the Enhanced Cash Flow Transactions report"
sidebar_label: "Enhanced Cash Flow"
---

The **Get enhanced cash flow transactions** endpoint returns a fully categorized list of banking transactions for a company, giving lenders the insights to accurately forecast a company's cash flow. Refer to our [API reference](/lending-api#/operations/get-enhanced-cash-flow-transactions) to try it out, or use the following path:

`GET /companies/{companyId}/reports/enhancedCashFlow/transactions`

Account and transaction data are obtained from a company's banking data sources and categorized, presented along with the confidence score for each categorization.

## Enhanced Cash Flow Transactions

:::info Categorization engine
The categorization engine uses machine learning and has been fully trained against Plaid and TrueLayer banking data sources. It is not fully trained against the Basiq banking data source.
:::
