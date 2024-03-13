---
title: "Clients who have built to the API"
description: "Detailed instructions on how you can migrate from the features you're using today"
sidebar_label: "Clients using the API"
createdAt: "2022-10-06T08:32:16.232Z"
updatedAt: "2022-11-10T14:01:08.149Z"
draft: true
---

## What will happen on deprecation?
The following endpoints will stop working:

    GET /data/lending/accounts/categories
    GET /data/companies/{companyId}/connections/{connectionId}/lending/accounts/categories
    GET /data/companies/{companyId}/connections/{connectionId}/lending/accounts/{accountId}/categories
    PATCH /data/companies/{companyId}/connections/{connectionId}/lending/accounts/categories
    PATCH /data/companies/{companyId}/connections/{connectionId}/lending/accounts/{accountId}/categories
    GET /data/companies{companyId}/connections/{connectionId}/lending/enhancedBalanceSheet
    GET /data/companies{companyId}/connections/{connectionId}/lending/enhancedProfitandLoss
    GET /data/companies/{companyId}/connections/{connectionId}/lending/financialMetrics
    GET /data/companies/{companyId}/connections/{connectionId}/lending/accountingMetrics/marketing

## Instructions for migration

1. Map to the new endpoints
2. Review the changes in behaviour

### Map to the new endpoints

Identify the endpoints you are using today and the recommended alternative solutions:

| Current endpoint 	| Alternative 	|
|---|---|
| [List account categories](/assess-api#/operations/list-available-account-categories) 	| The supported categories have changed - you can find the latest list [here](/lending/enhanced-financials/overview#accounts-and-account-categories).  	|
| [List suggested and confirmed account categories](/assess-api#/operations/list-accounts-categories)  <br/><br/> [Get suggested and/or confirmed categories for a specific account](/assess-api#/operations/get-account-category)  	| We will not be replicating this functionality in the latest version as it’s possible for an account to have more than one category depending on the financial period.<br/>For example, a bank account could have a positive balance in one period and be categorized as an Asset, and a negative balance due to it being overdrawn in another and therefore categorized as a Liability. <br/>You can retrieve the categories per account and financial period via these endpoints:<br/>[Enhanced profit and loss accounts](/assess-api#/operations/get-accounts-for-enhanced-profit-and-loss) <br/>[Enhanced balance sheet accounts](/assess-api#/operations/get-accounts-for-enhanced-balance-sheet) 	|
| [Confirm categories for accounts](/assess-api#/operations/update-accounts-categories) <br/><br/> [Confirm account category for a specific account](/assess-api#/operations/update-account-category)  	| You may want to recategorize accounts so that the model learns and improves for your companies. To do so:<br/>1. Log into the Codat portal <br/>2. Select a company on the **Companies** page <br/>3. Click the **Categorize Accounts** button <br/>4. Ensure the **Version** drop-down on the top right is set to _Version 3_ <br/><br/>We have revamped this screen and included new features that simplify account categorization, including Confidence level. <br/><br/> If you used to recategorize because the Enhanced Profit and Loss / Balance Sheet was not being returned due to uncategorized accounts, note that the latest endpoints do not have this restriction. <br/>If you do not need the model to learn for your companies, you do not need to recategorize via Codat and can make amendments in your own environment. <br/><br/>**Note**: In the latest version we no longer support recategorization via API. 	|
| [Enhanced Profit and Loss](/assess-api#/operations/get-enhanced-profit-and-loss)  	| [Enhanced profit and loss accounts](/assess-api#/operations/get-accounts-for-enhanced-profit-and-loss) <br/>Note: the response schema has changed. 	|
| [Enhanced Balance sheet](/assess-api#/operations/get-enhanced-balance-sheet)  	| [Enhanced balance sheet accounts](/assess-api#/operations/get-accounts-for-enhanced-balance-sheet) <br/>Note: the response schema has changed. 	|
| [List financial metrics](/assess-api#/operations/get-enhanced-financial-metrics) <br/><br/> [Get the marketing metrics from an accounting source](/assess-api#/operations/get-accounting-marketing-metrics) 	| We are no longer supporting the precalculated metrics available on these endpoints. You can calculate these using your own formulas from our new endpoints: <br/>[Enhanced profit and loss accounts](/assess-api#/operations/get-accounts-for-enhanced-profit-and-loss) <br/>[Enhanced balance sheet accounts](/assess-api#/operations/get-accounts-for-enhanced-balance-sheet) <br/><br/>If you would like to continue using the same formulas for the precalculated metrics we offered, you can find the formulas [here](https://docs.google.com/spreadsheets/d/1xpyQHOTQWHybOZpSnfXx54tkag0qmJ1mR76bQt9wink/edit?usp=sharing)  	|


### Changes in behaviour

The behaviour changes below apply to the latest endpoints only, the behaviour on the endpoints being deprecated has not changed.

1. Our **supported categories** have changed - you will need to map to the [latest categories](/lending/enhanced-financials/overview#accounts-and-account-categories).
2. We no longer require the balance sheet to balance. This means if <i>Assets - Liabilities</i> does not equal <i> Equity</i> , we will still return data via the endpoint. If you require this validation, we recommend you implement these rules in your own environment.
3. The response schema has changed from a recursive model to a flat list of accounts per financial period.
4. We now support <i>up to</i> 5 levels of categories per account. We will populate suggestions to the lowest relevant level and we do not require all levels to be populated to return a response.
5. The <i>period length</i> parameter is no longer supported on the latest **Enhanced profit and loss accounts** and **Enhanced balance sheet accounts** endpoints; all data is returned in monthly increments. If you require data to be grouped by periods, we recommend you do this in your own environment.