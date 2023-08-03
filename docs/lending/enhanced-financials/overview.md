---
title: "Enhanced Financials"
description: "Introduction to Enhanced Financials"
sidebar_label: "Overview"
displayed_sidebar: lending
---

Our updated version of Enhanced Financials reduces the need for highly manual, time-consuming, and repetitive interpretation of SMB account names. 

With Codat, lenders can automate financial statement analysis using our fully standardized profit and loss statement and balance sheet.

The [Enhanced Profit and Loss Accounts](/lending-api#/operations/get-companies-companyId-reports-enhancedProfitAndLoss-accounts) and [Enhanced Balance Sheet Accounts](/lending-api#/operations/get-companies-companyId-reports-enhancedBalanceSheet-accounts) endpoints return a list of accounts enriched with the latest version of categorization. 

## Accounts and account categories

Our Enhanced Financials map each business's financial statements to a single standard chart of accounts, which we call account categories.

Each category comprises up to 5 levels. We will populate the lowest level deemed relevant to each account.

<details>
  <summary>Supported account categories</summary>

  <iframe
    src="https://docs.google.com/spreadsheets/d/e/2PACX-1vRkvocA0AjDFFHTyQ-ivddggN996pn2_FOhzE3iThrFje_RGnAvw1QqvaLKGhWNXHCOpgtekuFqb7xt/pubhtml?widget=true&amp;headers=false"
    frameborder="0"
    style={{ top: 0, left: 0, width: "100%", height: "660px" }}
  ></iframe>
</details>

### Categorize accounts

Our updated version of Enhanced Financials reduces the need for highly manual, time-consuming, and repetitive interpretation of SMB account names. 

With Codat, lenders can automate financial statement analysis using our fully standardized profit and loss statement and balance sheet.

Our _Enhanced Profit and Loss Accounts_ and _Enhanced Balance Sheet Accounts_ endpoints return a list of accounts enriched with a suggested category for each account.

If you feel there is a more accurate category that represents an account, you can provide this feedback to us and we will incorporate this into our model training and you will see this improve in the future. 

You can explore this further in [Categorize accounts in the Portal](/lending/portal/categorize-accounts)

---

## Endpoints

### Enhanced Profit and Loss Accounts

`GET /companies/{companyId}/reports/enhancedProfitAndLoss/accounts`

The Enhanced Profit and Loss Accounts endpoint returns a list of categorized accounts that appear on a company’s Profit and Loss. It also includes a balance per the financial statement date.

Codat suggests a category for each account automatically, but you can [change it](#categorize-accounts) to a more suitable one. 

Explore the _Enhanced Profit and Loss Accounts_ endpoint in our [Lending API reference](/lending-api#/operations/get-companies-companyId-reports-enhancedProfitAndLoss-accounts).

### Enhanced Balance Sheet Accounts

`GET /companies/{companyId}/reports/enhancedBalanceSheet/accounts`

The Enhanced Balance Sheet Accounts endpoint returns a list of categorized accounts that appear on a company’s Balance Sheet along with a balance per financial statement date.

Codat suggests a category for each account automatically, but you can [change it](#categorize-accounts) to a more suitable one. 

Explore the _Enhanced Balance Sheet Accounts_ endpoint in our [Lending API reference](/lending-api#/operations/get-companies-companyId-reports-enhancedBalanceSheet-accounts).
