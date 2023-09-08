---
title: "Financial statements overview"
sidebar_label: "Financial statements"
description: "Automate financial statement & ratio analysis with a fully standardised profit & loss and balance sheet"
---

import Products from "@components/global/Products";
import { IntegrationsList } from "@components/global/Integrations";
import { accountingIntegrations } from "@components/global/Integrations/integrations";

The **Financial statements** feature provides lenders with access to a borrower's comprehensive financial data, including profit and loss, balance sheet, and operating cash flow statements. Statements are categorized to a single chart of accounts allowing ratio analysis to be automated.

## Use cases

Common uses of the Financial statements feature include:

- **Financial statement analysis:** Identify potential red flags, such as declining profitability or increasing debt levels of your borrower, that could signal financial distress.

- **Ratio analysis:** Examine key ratios that offer insights into the borrower's financial strength, efficiency, and profitability.

- **Monitoring:** Continuously monitor the borrower's financial statements to track changes in their financial health over time.

## Supported feature components

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

You can help improve the suggestions our model supplies by confirming them or providing a more applicable category.

You can view all available categories proposed for accounts and, where relevant, recategorize them in the [Codat Portal](https://app.codat.io/).

## Supported outputs

You can retrieve the data pulled and enriched by the Sales feature by [downloading a report in an Excel format](/lending/features/excel-download-overview) or calling the **Financial statements** [endpoints of our API](/lending-api#/).
- [Get cash flow statement](/lending-api#/operations/get-accounting-cash-flow-statement)

## Get started

Once you have the Lending API enabled, configure your instance to work with the Financial statements feature. 

#### Configure data sources

Follow the respective guides to set up and enable accounting integrations that will serve as a data source for the feature:

<br />

<IntegrationsList integrations={accountingIntegrations} />


#### Enable data types and sync schedule

See how to [enable data types](/core-concepts/data-type-settings#override-the-default-sync-settings) and ensure the following data types have been switched on:

- Proft and loss `profitAndLoss`
- Balance sheet `balanceSheet`
- Cash flow statement `cashFlowStatement`
- Chart of accounts `chartOfAccounts`

Configure the solution to refresh data when you need it by [setting a synchronization frequency](/core-concepts/data-type-settings#choose-a-synchronization-frequency). We recommend setting it to a daily or monthly sync.

---

## Read next
- [Liabilities](/lending/features/liabilities-overview)