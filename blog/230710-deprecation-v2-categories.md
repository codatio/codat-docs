---
title: "Completed 2023-07-24: Deprecation of legacy Account Categories and related features in Assess"
date: "2023-04-05"
tags: ["Deprecation"]
authors: e-donnelly
---

On the **24th July 2023**, we will be deprecating the legacy version of  `Account Categories` and all related features, including:

<!--truncate-->

#### On the Lending API

- [GET /data/lending/accounts/categories](/assess-api#/operations/list-available-account-categories)
- [GET /data/companies/{companyId}/connections/{connectionId}/lending/accounts/categories](/assess-api#/operations/list-accounts-categories)
- [GET /data/companies/{companyId}/connections/{connectionId}/lending/accounts/{accountId}/categories](/assess-api#/operations/get-account-category)
- [PATCH /data/companies/{companyId}/connections/{connectionId}/lending/accounts/categories](/assess-api#/operations/update-accounts-categories)
- [PATCH /data/companies/{companyId}/connections/{connectionId}/lending/accounts/{accountId}/categories](/assess-api#/operations/update-account-category)
- [GET /data/companies{companyId}/connections/{connectionId}/lending/enhancedBalanceSheet](/assess-api#/operations/get-enhanced-balance-sheet)
- [GET /data/companies{companyId}/connections/{connectionId}/lending/enhancedProfitandLoss](/assess-api#/operations/get-enhanced-profit-and-loss)  
- [GET /data/companies/{companyId}/connections/{connectionId}/lending/financialMetrics](/assess-api#/operations/get-enhanced-financial-metrics) 
- [GET /data/companies/{companyId}/connections/{connectionId}/lending/accountingMetrics/marketing](/assess-api#/operations/get-accounting-marketing-metrics)

#### Assess in the Portal

- Profit and Loss
- Balance Sheet
- Marketing
- Categorize accounts (<i>Version 2 </i> only)

#### Accounting API in the Portal

- Accounts > Categorize accounts

#### Data export to Excel

The following sheets only:
- Account Categories
- Categorized Account Balances

## Action required

Explore alternative options you can use in our [Migration Guide`](/lending/overview)

## Expected impact if no action is taken

After the **24th July 2023**, the deprecated endpoints will no longer work, the portal screens will be removed and Account Categories features will be removed from the data export to Excel.


:::caution Update: July 24, 2023

**Deprecation compelted**
:::

:::caution Update: July 13, 2023

**Deprecation date has changed**

We have extended the deprecation date from July 10th, 2023 to July 24th, 2023. On that date, the features listed below will no longer be available.
:::