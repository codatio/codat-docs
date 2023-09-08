---
title: "Banking overview"
sidebar_label: "Banking"
description: "Underwrite with accurate, real-time cash flows powered by bank transaction categorization"
---

import Products from "@components/global/Products";
import { IntegrationsList } from "@components/global/Integrations";
import { bankingIntegrations } from "@components/global/Integrations/integrations";

Our **banking** feature provides data from a linked company’s banking connections. Transactions are enriched with financial category and payment provider information.

## Use cases

Common uses of our banking feature include:

1. **Liquidity assessment:** determine the borrower's ability to cover short-term expenses and financial obligations.

2. **Financial obligation evaluation:** assess the borrower's capability to meet debt payments and other financial commitments.

3. **Cash flow trend analysis:** identify patterns and fluctuations in the borrower's cash flow to predict their future financial health.

4. **Revenue analysis:** identify all revenue channels of a business using the [payment provider enrichment](/lending/features/banking-overview#feature-enrichments).

## Feature components

Our banking feature consists of the following components, supported across a number of banking data sources.

1. **[Accounts:](https://docs.codat.io/lending-api#/operations/list-banking-accounts)** the SMB's bank accounts with rich data, such as balances, account numbers, and institutions holding the accounts

2. **[Transactions:](https://docs.codat.io/lending-api#/operations/list-banking-transactions)** balances for a bank account, including the end-of-day batch balance or running balances per transaction

3. **[Account balances:](https://docs.codat.io/lending-api#/operations/list-banking-account-balances)** transactions incurred by the bank account

4. **[Categorized bank statements:](https://docs.codat.io/lending-api#/operations/get-categorized-bank-statement)** all connected bank accounts and transactions with enrichments in a single endpoint.

<iframe
  src="https://docs.google.com/spreadsheets/d/e/2PACX-1vQXnkKj3esBrzpD--pKV_tVTfTHxDPpxz8BBFe2SjcNt6kB2-qcTFDxEye3kxHWu91mYRzLoCjYfpHH/pubhtml?gid=1760315404&amp;single=true&amp;widget=true&amp;headers=false"
  frameborder="0"
  style={{ top: 0, left: 0, width: "100%", height: "200px" }}
></iframe>

## Feature enrichments

We provide the following enrichments via our [categorized bank statement](/lending-api#/operations/get-categorized-bank-statement) component.

#### Transaction categories

Bank transactions lack useful context for underwriting. We have solved this problem by enriching bank transactions with the same financial categories you find on an income statement (profit and loss) and a balance sheet. Lenders can rebuild a cash-based profit and loss using bank data. This gives them a clear and reliable view of borrower affordability.

<details>
  <summary>View supported transaction categories</summary>

  <iframe
    src="https://docs.google.com/spreadsheets/d/e/2PACX-1vRkvocA0AjDFFHTyQ-ivddggN996pn2_FOhzE3iThrFje_RGnAvw1QqvaLKGhWNXHCOpgtekuFqb7xt/pubhtml?widget=true&amp;headers=false"
    frameborder="0"
    style={{ top: 0, left: 0, width: "100%", height: "660px" }}
  ></iframe>
</details>

#### Payment provider

Businesses often sell across multiple channels, for example, brick and mortar, online or marketplace. We help lenders identify the total revenue of a business by identifying the payment providers in their bank transactions.

<details>
  <summary>View supported payment providers</summary>

 <iframe
   src="https://docs.google.com/spreadsheets/d/e/2PACX-1vQXnkKj3esBrzpD--pKV_tVTfTHxDPpxz8BBFe2SjcNt6kB2-qcTFDxEye3kxHWu91mYRzLoCjYfpHH/pubhtml?gid=88475193&amp;single=true&amp;widget=true&amp;headers=false"
   frameborder="0"
   style={{ top: 0, left: 0, width: "100%", height: "660px" }}
 ></iframe>
</details>

## Supported outputs

You can retrieve the data pulled and enriched by the feature by [downloading a report in an Excel format](/lending/features/excel-download-overview) or calling the **banking** [endpoints of our API](/lending-api#/).

## Get started

Once you have the Lending API enabled, configure your instance to work with our banking feature. 

#### Configure data sources

Follow the respective guides to set up enable banking integrations that will serve as a data source:

<IntegrationsList integrations={bankingIntegrations} />

#### Enable data types and sync schedule

See how to [enable data types](/core-concepts/data-type-settings#override-the-default-sync-settings) and ensure the following data types have been switched on:

- Accounts `banking-accounts`
- Transactions `banking-transactions`
- Account balances `banking-accountBalances`

Configure the solution to refresh data when you need it by [setting a synchronization frequency](/core-concepts/data-type-settings#choose-a-synchronization-frequency). We recommend setting it to a daily or a monthly sync.

#### Configure webhooks

We recommend you configure the following [webhooks](/using-the-api/webhooks/core-rules-types) to manage your data pipelines. These webhooks send a notification for each `dataType` separately.

- [Dataset status has changed to an error state](/using-the-api/webhooks/core-rules-types#dataset-status-has-changed-to-an-error-state)  

  If you receive a notification from this webhook, it means an issue occured when syncing the specified data type. Resolve the issue and [initiate the sync](/using-the-api/queueing-data-syncs#refresh-data) for this dataset again. 
 
- [Dataset data changed](/using-the-api/webhooks/core-rules-types#dataset-data-changed)  

  If you receive a notification from this webhook, it means data has been updated for the specified data type. This can include new, updated or deleted data. You should then refresh the data in your platform.

---

## Read next
- [Sales](/lending/features/sales-overview)