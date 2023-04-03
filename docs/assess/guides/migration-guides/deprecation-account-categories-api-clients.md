---
title: "Clients who have built to the API"
description: "Detailed instructions on how you can migrate from the features you're using today"
sidebar_label: "Clients using the API"
createdAt: "2022-10-06T08:32:16.232Z"
updatedAt: "2022-11-10T14:01:08.149Z"
---

## What will happen on deprecation?
The following endpoints will stop working:

    GET /data/assess/accounts/categories
    GET /data/companies/{companyId}/connections/{connectionId}/assess/accounts/categories
    GET /data/companies/{companyId}/connections/{connectionId}/assess/accounts/{accountId}/categories
    PATCH /data/companies/{companyId}/connections/{connectionId}/assess/accounts/categories
    PATCH /data/companies/{companyId}/connections/{connectionId}/assess/accounts/{accountId}/categories
    GET /data/companies{companyId}/connections/{connectionId}/assess/enhancedBalanceSheet
    GET /data/companies{companyId}/connections/{connectionId}/assess/enhancedProfitandLoss
    GET /data/companies/{companyId}/connections/{connectionId}/assess/financialMetrics
    GET /data/companies/{companyId}/connections/{connectionId}/assess/accountingMetrics/marketing



## Instructions for migration

Identify the endpoints you are using today and the alternative solutions available to you:

| Current endpoint 	| Alternative 	|
|---|---|
| GET /data/assess/accounts/categories 	| The supported categories have changed - you can find the latest list [here](assess/enhanced-financials/supported-account-categories).  	|
| GET /data/companies/{companyId}/connections<br />/{connectionId}/assess/accounts/categories; and  <br /><br />GET /data/companies/{companyId}/connections<br />/{connectionId}/assess/accounts/{accountId}/categories 	| We will not be replicating this functionality in the latest version as it’s possible for an account to have more than one category depending on the financial period e.g. a bank account could have a positive balance in one financial period and be categorized as an Asset and a negative balance due to it being overdrawn in another period and therefore categorized as a Liability. You can retrieve the categories per account and financial period via the these endpoints: <br />[GET /companies/{companyId}/data/financials/profitAndLoss/accounts](/assess-api#/operations/get-accounts-for-enhanced-profit-and-loss) <br />[GET /companies/{companyId}/data/financials/balanceSheet/accounts](/assess-api#/operations/get-accounts-for-enhanced-balance-sheet) 	|
| PATCH /data/companies/{companyId}/connections<br />/{connectionId}/assess/accounts/categories; and <br /><br />PATCH /data/companies/{companyId}/connections<br />/{connectionId}/assess/accounts/{accountId}/categories 	| If you want to recategorize accounts so the model learns and improves for your companies: </br>Log into the Codat portal > Select a company on the Companies page > Click 'Categorize Accounts' button > Set the 'Version' drop down on the top right to Version 3. </br>We have revamped this screen including some new features which make it easier to categorize accounts including Confidence level.  </br></br> If you are recategorizing accounts because the Enhanced Profit and Loss / Balance Sheet was not being returned due to uncategorized accounts: The latest endpoints does not have this restriction. If you do not care about the model learning for your companies, you do not need to recategorize via Codat and can make amendments in your own environment. </br></br>Note: We are no longer supporting recategorization via API in the latest version. 	|
| GET /data/companies{companyId}/connections<br />/{connectionId}/assess/enhancedBalanceSheet 	| [GET /companies/{companyId}/data/financials/balanceSheet/accounts](/assess-api#/operations/get-accounts-for-enhanced-balance-sheet) Note: the response schema has changed. 	|
| GET /data/companies{companyId}/connections<br />/{connectionId}/assess/enhancedProfitandLoss 	| [GET /companies/{companyId}/data/financials/profitAndLoss/accounts](/assess-api#/operations/get-accounts-for-enhanced-profit-and-loss) Note: the response schema has changed. 	|
| GET /data/companies/{companyId}/connections<br />/{connectionId}/assess/financialMetrics; *and <br /><br />GET /data/companies/{companyId}/connections<br />/{connectionId}/assess/accountingMetrics/marketing 	| We are no longer supporting the precalculated metrics available on this endpoint. You can calculate these using your own formulas from our new endpoints: <br />[GET /companies/{companyId}/data/financials/profitAndLoss/accounts](/assess-api#/operations/get-accounts-for-enhanced-profit-and-loss) <br />[GET /companies/{companyId}/data/financials/balanceSheet/accounts](/assess-api#/operations/get-accounts-for-enhanced-balance-sheet)</br>If you would like to continue using the same formulas for the precalculated metrics we offered, you can find the formulas [here](https://docs.google.com/spreadsheets/d/1xpyQHOTQWHybOZpSnfXx54tkag0qmJ1mR76bQt9wink/edit?usp=sharing)  	|

