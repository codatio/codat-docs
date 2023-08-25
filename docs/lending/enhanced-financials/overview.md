---
title: "Enhanced Financials"
description: "Introduction to Enhanced Financials"
sidebar_label: "Overview"
---

Our latest version of Enhanced Financials reduces the need for highly manual, time-consuming, and repetitive interpretation of SMB account names. 

With Codat, lenders can automate financial statement analysis using our fully standardized profit and loss statement and balance sheet.

The [Enhanced Profit and Loss Accounts](/assess-api#/operations/get-companies-companyId-reports-enhancedProfitAndLoss-accounts) and [Enhanced Balance Sheet Accounts](/assess-api#/operations/get-companies-companyId-reports-enhanced/assess-api#/operations/get-companies-companyId-reports-enhancedBalanceSheet-accounts) endpoints return a list of accounts enriched with the latest version of categorization. 


## Enhanced Profit and Loss Accounts

The Enhanced Profit and Loss Accounts endpoint returns a list of categorized accounts that appear on a company’s Profit and Loss. It also includes a balance per the financial statement date.

Codat suggests a category for each account automatically, but you can [change it](/assess/enhanced-financials/categorize-accounts) to a more suitable one. 

Explore the _Enhanced Profit and Loss Accounts_ endpoint in in our [Assess API reference](/assess-api#/operations/get-companies-companyId-reports-enhancedProfitAndLoss-accounts).

`GET /companies/{companyId}/reports/enhancedProfitAndLoss/accounts`

## Enhanced Balance Sheet Accounts

The Enhanced Balance Sheet Accounts endpoint returns a list of categorized accounts that appear on a company’s Balance Sheet along with a balance per financial statement date.

Codat suggests a category for each account automatically, but you can [change it](/assess/enhanced-financials/categorize-accounts) to a more suitable one. 

Explore the _Enhanced Balance Sheet Accounts_ endpoint in our [Assess API reference](/assess-api#/operations/get-companies-companyId-reports-enhanced/assess-api#/operations/get-companies-companyId-reports-enhancedBalanceSheet-accounts).

`GET /companies/{companyId}/reports/enhancedBalanceSheet/accounts`

---

## Read next

- [How to recategorize accounts](/assess/enhanced-financials/categorize-accounts)
