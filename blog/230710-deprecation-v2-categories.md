---
title: "Upcoming 2023-07-10: Deprecation of legacy Account Categories and related features in Assess"
date: "2023-04-05"
tags: ["Deprecation"]
authors: e-donnelly
---

On the **10th July 2023**, we will be deprecating the legacy version of  `Account Categories` and all related features, including:

<u>On the Assess API:</u>
- [GET /data/assess/accounts/categories](/assess-api#/operations/list-available-account-categories)
- [GET /data/companies/{companyId}/connections/{connectionId}/assess/accounts/categories](/assess-api#/operations/list-accounts-categories)
- [GET /data/companies/{companyId}/connections/{connectionId}/assess/accounts/{accountId}/categories](/assess-api#/operations/get-account-category)
- [PATCH /data/companies/{companyId}/connections/{connectionId}/assess/accounts/categories](/assess-api#/operations/update-accounts-categories)
- [PATCH /data/companies/{companyId}/connections/{connectionId}/assess/accounts/{accountId}/categories](/assess-api#/operations/update-account-category)
- [GET /data/companies{companyId}/connections/{connectionId}/assess/enhancedBalanceSheet](/assess-api#/operations/get-enhanced-balance-sheet)
- [GET /data/companies{companyId}/connections/{connectionId}/assess/enhancedProfitandLoss](/assess-api#/operations/get-enhanced-profit-and-loss)  
- [GET /data/companies/{companyId}/connections/{connectionId}/assess/financialMetrics](/assess-api#/operations/get-enhanced-financial-metrics) 
- [GET /data/companies/{companyId}/connections/{connectionId}/assess/accountingMetrics/marketing](/assess-api#/operations/get-accounting-marketing-metrics)

<u>Assess in the Portal:</u>
- Profit and Loss
- Balance Sheet
- Marketing
- Categorize accounts (<i>Version 2 </i> only)

<u>Accounting API in the Portal:</u>
- Accounts > Categorize accounts

<u>Data export to Excel:</u>

The following sheets only:
- Account Categories
- Categorized Account Balances

## Action required​

Explore alternative options you can use in our [Migration Guide](/assess/guides/migration-guides/deprecation-account-categories)

## Expected impact if no action is taken​

After the **10th July 2023**, the deprecated endpoints will no longer work, the portal screens will be removed and Account Categories features will be removed from the data export to Excel.
