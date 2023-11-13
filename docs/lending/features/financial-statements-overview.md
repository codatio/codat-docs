---
title: "Financial statements overview"
sidebar_label: "Financial statements"
description: "Automate financial statement and ratio calculation with a fully standardized profit and loss and balance sheet"
image: "/img/banners/social/lending.png"
---

import Products from "@components/global/Products";
import { IntegrationsList } from "@components/global/Integrations";
import { accountingIntegrations } from "@components/global/Integrations/integrations";

Our **financial statements** feature provides lenders with a comprehensive view of a borrower's financial data, including profit and loss, balance sheet, and operating cash flow statements. Statements are categorized to a single chart of accounts allowing ratio analysis to be automated.

## Use cases

Common uses of our financial statements feature include:

- **Financial statement analysis:** identify potential red flags, such as declining profitability or increasing debt levels of your borrower, that could signal financial distress.

- **Ratio analysis:** examine key ratios that offer insights into the borrower's financial strength, efficiency, and profitability.

- **Monitoring:** continuously monitor the borrower's financial statements to track changes in their financial health over time.

## Feature components

<iframe
  src="https://docs.google.com/spreadsheets/d/e/2PACX-1vQXnkKj3esBrzpD--pKV_tVTfTHxDPpxz8BBFe2SjcNt6kB2-qcTFDxEye3kxHWu91mYRzLoCjYfpHH/pubhtml?gid=1364518639&amp;single=true&amp;widget=true&amp;headers=false"
  frameborder="0"
  style={{ top: 0, left: 0, width: "100%", height: "450px" }}
></iframe>

## Feature enrichments

#### Categorized financial accounts

Businesses often have unique line items on their financial statements, which can pose challenges for comparison and automation. To address this, we've introduced a standardized set of financial categories called "account categories" for lenders. These categories enable seamless comparisons between companies. When connecting a company, our machine learning models predict the most suitable category for each account, drawing from extensive training on tens of thousands of accounts.

Each account category consists of up to five levels, with the most relevant level populated for each account.

<details>
  <summary>Supported account categories</summary>

  <iframe
    src="https://docs.google.com/spreadsheets/d/e/2PACX-1vRkvocA0AjDFFHTyQ-ivddggN996pn2_FOhzE3iThrFje_RGnAvw1QqvaLKGhWNXHCOpgtekuFqb7xt/pubhtml?widget=true&amp;headers=false"
    frameborder="0"
    style={{ top: 0, left: 0, width: "100%", height: "660px" }}
  ></iframe>
</details>

#### Recategorizing accounts

You can help improve the suggestions our model supplies by confirming them or providing a more applicable category. View all available categories proposed for accounts and, where relevant, recategorize them in the [Codat Portal](https://app.codat.io/).

<details>
  <summary>Recategorizing accounts in the Portal</summary>

1. Navigate to **Companies**, then click the company that requires recategorization. Select **Lending** in the side menu and choose **Categorize accounts** to view the categories for each account.  

  These are ordered by _impact_ by default, which is determined by the current account balance and our confidence in our automatic categorization. 

  :::info Impact

  Impact represents the effect of uncertainty associated with each individual account. It is defined as the current account balance multiplied by one minus the confidence. Where an account is confirmed, the confidence becomes 100% and the resulting impact therefore      will be zero.

  `Impact = Balance * (1-Confidence)`

  :::

  ![An image of the Lending Categorization view in the Portal](/img/lending/acct-categorization-v3-2.png)

2. To change the category of an account, select the accounts using the checkbox and click **Recategorize**. 

   Choose an appropriate category from the proposed five levels and click **Recategorize**.  This saves the newly assigned category. 

  ![An image of the Lending Categorization view in the Portal with an account in process of recategorizing](/img/lending/acct-categorization-v3-3.png)

That's it! Financial statements will return the updated category for the accounts going forward.

</details>

## Supported outputs

You can retrieve the data pulled and enriched by this feature by [downloading a report in an Excel format](/lending/features/excel-download-overview) or calling the **financial statements** [endpoints of our API](/lending-api#/).

## Get started

Once you have the Lending API enabled, configure your instance to work with our financial statements feature. 

#### Configure data sources

Follow the respective guides to set up and enable accounting integrations that will serve as a data source for the feature:

<IntegrationsList integrations={accountingIntegrations} />

#### Enable data types and sync schedule

See how to [enable data types](/core-concepts/data-type-settings#override-the-default-sync-settings) and ensure the following data types have been switched on:

- Proft and loss `profitAndLoss`
- Balance sheet `balanceSheet`
- Cash flow statement `cashFlowStatement`
- Chart of accounts `chartOfAccounts`

Configure the solution to refresh data when you need it by [setting a synchronization frequency](/core-concepts/data-type-settings#choose-a-synchronization-frequency). We recommend setting it to a daily or a monthly sync.

#### Configure webhooks

We recommend you configure the following [webhooks](/using-the-api/webhooks/core-rules-types) to manage your data pipelines. These webhooks send a notification for each `dataType` separately.

- [Dataset status has changed to an error state](/using-the-api/webhooks/core-rules-types#dataset-status-has-changed-to-an-error-state)  

  If you receive a notification from this webhook, it means an issue occurred when syncing the specified data type. Resolve the issue and [initiate the sync](/using-the-api/queueing-data-syncs#refresh-data) for this dataset again. 

- [Dataset data changed](/using-the-api/webhooks/core-rules-types#dataset-data-changed)  

  If you receive a notification from this webhook, it means data has been updated for the specified data type. This can include new, updated or deleted data. You should then refresh the data in your platform.

- [Account categories updated](/using-the-api/webhooks/core-rules-types#account-categories-updated)

  If you receive a notification from this webhook, it means categories associated with accounts have been updated for the [categorized profit and loss statement](https://docs.codat.io/lending-api#/operations/get-enhanced-profit-and-loss-accounts) and the [categorized balance sheet statement](https://docs.codat.io/lending-api#/operations/get-enhanced-balance-sheet-accounts) components. 
  
  This update may be done automatically by Codat updating `suggested` categories, or manually by a user updating `confirmed` categories.
---

## Read next
- [Liabilities](/lending/features/liabilities-overview)
