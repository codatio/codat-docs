---
title: "Categorizing accounts in the Portal"
description: "Categorization of accounts standardizes financial statements which are used to produce insights about your customers' financial health"
createdAt: "2022-04-13T12:10:47.847Z"
updatedAt: "2022-11-02T14:49:04.132Z"
---

:::caution Account categorization versions

There are two account categorization versions now available in the Codat Portal. 

_Version 2_ supports our classic [Enhanced Financials](/assess/reports/enhanced-financials/financials) endpoints. Continue using this version as your categories version if you are calling these endpoints, as described in this article.

_Version 3_ is a revised version of account categories that supports our new [Enhanced Financials for eCommerce Lenders](/assess/reports/enhanced-financials-ecommerce-lenders/financials) endpoints. Learn how to [categorize the accounts](/assess/reports/enhanced-financials-ecommerce-lenders/categorize-accounts) using _Version 3_ if you choose to use these endpoints.
:::

The chart of accounts defines the financial structure of a company by providing a list of all accounts used in the company's general ledger.

Every account is assigned one of Codat’s 162 categories. This allows Codat to produce insights about your SMB customers irrespective of the accounting data source they use. The assigned categories apply in the Codat platform only, not in the accounting data source.

You can obtain the latest list of Codat categories from our <a href="/assess-api#/operations/get-data-assess-accounts-categories">API reference</a> documentation by calling the following endpoint:

`GET /data/assess/accounts/categories`

#The benefits of categorizing accounts

1. Easy to identify comparable accounts across a company’s portfolio of businesses.
2. Codat uses the categorized data to produce additional insights, e.g. financial ratios and statements.
3. Saves time by automating decisioning including some of the first-level qualification criteria.
4. Allows you to use categories to populate your own internal credit templates or spreading tools.
5. Allows you to view the chart of accounts in our standard categorized model OR in the original format of the small business.
6. Improves monitoring as you can use this to create alerts for deteriorating trends.

#How are categories assigned?
Account categories have three sub-categories:

- Account type - the highest level classification of an account, e.g. Asset, Liability, etc.
- Account subtype - the category often used for traditional financial ratios, e.g. Current assets, Current liabilities, etc.
- Account detail type - the most granular level of categorization, e.g. Cash, Inventory, Depreciation, etc.

Categories are assigned in two ways. First, Codat automatically suggests categories for accounts. Second, you or your SMB customer [assigns a category](#how-to-categorize-accounts) in the Codat Portal.

Codat tries to suggest a category for every account but this is not always possible. You will be prompted to select categories for the accounts that Codat couldn’t categorize when you access Assess. This is done by selecting the appropriate category in Assess or following the [instructions to categorize accounts](#how-to-categorize-accounts) below.

Suggested categories need to be confirmed by you or your SMB customer. This guarantees the categories assigned to accounts are correct. If you disagree with the suggestion, you can select a different category. You can also **unset** a category which will revert back to its original suggestion.

#Uncategorized accounts
Codat tries to suggest a category for every account, but this is not always possible. If additional action is needed, the **Categorize accounts** button to the right of the company name will be replaced with a red **Categorization required** button. For example, this occurs if Codat can't successfully categorize the accounts. Note that categorization buttons display only if you have Assess enabled.

Clicking the button takes you to the **Account categorization** page which displays a list of all the uncategorized accounts. If you ignore the **Categorization required** button and click **Assess** in the left hand menu, a popup notifies you that the company has uncategorized accounts. This is because the Profit and Loss, and Balance Sheet metrics in Assess depend on fully categorized accounts. You can skip categorizing the accounts, but then these metrics will not display.

## Account Categorization

The tabs along the top of the page only show the account types, which is the highest level of classification, that have uncategorized accounts. An **Unknown** tab is also displayed if an account type could not be suggested for an account.

You can select the **Account type**, **Account subtype** and **Account detail** from drop down lists. The **Account name** field is not editable. A chosen **Account type** will have specific **Account subtypes** you can choose. Similarly, a chosen **Account subtype** will have specific **Account details** you can choose.

When you've categorized all uncategorized accounts under a tab, you can either click on any of the other tabs or you can click **Next** to move to the following tab. The **Save** button only becomes active after all accounts have been categorized.

Note that you can update account categories at any time by following the steps in [How to categorize accounts](#how-to-categorize-accounts).

#How often is a company’s account categories updated?
A company’s categories are updated each time it syncs. Previously-confirmed categories will not revert back to the suggested category unless a better suited category was added to Codat’s list of categories. You or your SMB customer will then confirm whether the suggested category is correct for the account.

#How to categorize accounts
You can review suggested category mappings in the Codat Portal and can confirm or re-categorize them if you find that some accounts have been miscategorized.

You can open the **Account Categorization** page by clicking the **Categorize accounts** button to the right of the company name. Follow steps 3 to 5 below to assign a category to an account.

Alternatively, you could follow these steps:

1. In the **Companies** tab, click the company and select **Accounting API** in the left hand menu.
2. In the `Data type` field, select **Accounting data > Accounts**, and click the **Categorize accounts** button (the button displays only if you have Assess enabled).

   You can learn more about **Account subtype** and **Account detail type** in the <a className="external" href="https://links.codat.io/account-categorisation/help" target="_blank">Terminology guide</a>.

3. Select **Categorize** next to the account category that contains the account type you want to set a category to.
4. Set an **Account type**, **Account subtype** and **Account detail** for each account listed.

   Note: Each **Account name**, which is not editable, has a clickable information icon showing the categories we suggest be used for the account.

5. Save your settings to confirm your categories.

#How to exclude a category from categorization
If you don't want to set a category for an account, access the **Account Categorization** page by following one of the methods described in the previous section and following steps 1 and 2. Check the **Unset** box next to the account and save your settings. The account will then be treated as an **Unconfirmed account** and will have a yellow circle next to it. You'll always be able to come back and revisit your settings later.

Note that applying the **Unset** option to an already confirmed category reverts it back to the category suggested by Codat. This means that when you open the mapping modal window again, the unset category boxes will not be empty, but will have the suggestion made by Codat and will have a yellow circle to indicate that the category is yet to be confirmed.

#How to export a categorized chart of accounts
You can export the chart of accounts in an Excel file:

1. To the right of the company name, click the **Export data** link then click **Create new report**.
2. When the file is generated or regenerated, click **Download** to download the file in XLSX format.

The downloaded Excel file contains:

- The **Categorized Account Balances** tab.
- The output of
  `GET /data/companies/{companyId}/connections/{connectionId}/assess/accounts/categories` endpoint in <a href="/assess-api#/operations/get-data-companies-companyId-connections-connectionId-assess-accounts-categories">API reference</a> listing the categories.
- A balance of the account category for every financial period available in the financial statements.
