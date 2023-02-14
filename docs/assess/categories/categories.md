---
title: "Account categorization"
description: "Categorization standardizes financial statements which are used to produce insights about your customers' financial health"
createdAt: "2022-02-21T13:57:52.224Z"
updatedAt: "2022-11-02T14:38:07.399Z"
---

:::caution Account category versions
This categorization of accounts via only applies to our classic [Enhanced Financials](/assess/reports/enhanced-financials/financials). For our revised categorization aimed at eCommerce lenders, explore [Enhanced Financials for eCommerce lenders](/assess/reports/enhanced-financials-ecommerce-lenders/financials).
:::

The chart of accounts defines the financial structure of a company by providing a list of all accounts used in the company's general ledger.

Every account is assigned one of Codat’s 162 categories. This allows Codat to produce insights about your SMB customers irrespective of the accounting data source they use. The assigned categories apply in the Codat platform only, not in the accounting data source.

You can obtain the latest list of Codat categories from our <a className="external" href="https://api.codat.io/swagger/index.html#/Assess/get_data_assess_accounts_categories" target="_blank">Swagger</a> documentation by calling the following endpoint:
`GET ​/data​/assess​/accounts​/categories`

# The benefits of categorizing accounts

1. Easy to identify comparable accounts across a company’s portfolio of businesses.
2. Codat uses the categorized data to produce additional insights, e.g. financial ratios and statements.
3. Saves time by automating decisioning including some of the first-level qualification criteria.
4. Allows you to use categories to populate your own internal credit templates or spreading tools.
5. Allows you to view the chart of accounts in our standard categorized model OR in the original format of the small business.
6. Improves monitoring as you can use this to create alerts for deteriorating trends.

# How are categories assigned to accounts?
Account categories have three sub-categories:

- Account type - the highest level classification of an account, e.g. Asset, Liability, etc.
- Account subtype - the category often used for traditional financial ratios, e.g. Current assets, Current liabilities, etc.
- Account detail type - the most granular level of categorization, e.g. Cash, Inventory, Depreciation, etc.

Categories are assigned in two ways. First, Codat automatically suggests categories for accounts. Second, you assign a category to an account. Categories can be assigned via our [Categorization of accounts API](/assess/categories/api-categorization-of-accounts) or through Codat's Portal (see [How to categorize accounts](/assess/portal/categorization-of-accounts#account-categorization)).

## Uncategorised accounts

Codat tries to suggest a category for every account, but this is not always possible. All accounts need to be categorized to produce accurate metrics.

You can confirm categories using the <a className="external" href="https://api.codat.io/swagger/index.html#/Assess/patch_data_companies__companyId__connections__connectionId__assess_accounts_categories" target="_blank">PATCH</a> method or Codat’s <a className="external" href="https://app.codat.io/" target="_blank">no code</a> feature in the Portal. This guarantees the categories assigned to accounts are correct. If you disagree with a suggestion, you can assign a different category.

# How often is a company’s account categories updated?
A company’s categories are updated each time it syncs to Codat. Previously-confirmed categories will not revert back to the suggested category unless a better suited category was added to Codat’s list of categories. You will then confirm whether the suggested category is correct for the account.
