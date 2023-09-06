---
title: "Banking overview"
sidebar_label: "Banking"
description: "Underwrite with accurate, real-time cash flows powered by bank transaction categorization"
---

import Products from "@components/global/Products";
import { IntegrationsList } from "@components/global/Integrations";
import { bankingIntegrations } from "@components/global/Integrations/integrations";

The **Banking** feature provides data from a linked company’s banking connections. Transactions are enriched with financial category and payment provider information.

## Use cases

Common uses of the Banking feature include:

1. **Liquidity assessment:** Determine the borrower's ability to cover short-term expenses and financial obligations.

2. **Financial obligation evaluation:** Assess the borrower's capability to meet debt payments and other financial commitments.

3. **Cash flow trend analysis:** Identify patterns and fluctuations in the borrower's cash flow to predict their future financial health.

4. **Revenue analysis:** Identify all revenue channels of a business using the [payment provider enrichment](/lending/features/banking-overview#feature-enrichments).

## Supported feature components

<iframe
  src="https://docs.google.com/spreadsheets/d/e/2PACX-1vQXnkKj3esBrzpD--pKV_tVTfTHxDPpxz8BBFe2SjcNt6kB2-qcTFDxEye3kxHWu91mYRzLoCjYfpHH/pubhtml?gid=1760315404&amp;single=true&amp;widget=true&amp;headers=false"
  frameborder="0"
  style={{ top: 0, left: 0, width: "100%", height: "200px" }}
></iframe>

## Feature enrichments

#### Transaction categories

Bank transactions lack useful context for underwriting. We have solved this problem by enriching bank transactions with the same financial categories you find on an income statement (profit and loss) and a balance sheet. Lenders can rebuild a cash-based profit and loss using bank data. This gives them a clear and reliable view of borrower affordability.

Next, you can view the supported transaction categories.

#### Payment provider

Businesses often sell across multiple channels, for example, brick and mortar, online or marketplace. We help lenders identify the total revenue of a business by identifying the payment providers in their bank transactions.

Next, you can view the supported payment providers.

## Supported outputs

You can retrieve the data pulled and enriched by the feature by [downloading a report in an Excel format](/lending/features/excel-download-overview) or calling the **Banking** [endpoints of our API](/lending-api#/).

## Get started

Once you have the Lending API enabled, configure your instance to work with the Banking feature. 

#### Configure data sources

Follow the respective guides to set up enable banking integrations that will serve as a data source:

<br />

<IntegrationsList integrations={bankingIntegrations} />

#### Enable data types and sync schedule

See how to [enable data types](/core-concepts/data-type-settings#override-the-default-sync-settings) and ensure the following data types have been switched on:

- Accounts `banking-accounts`
- Transactions `banking-transactions`
- Account balances `banking-accountBalances`

Configure the solution to refresh data when you need it by [setting a synchronization frequency](/core-concepts/data-type-settings#choose-a-synchronization-frequency). We recommend setting it to a daily or monthly sync.

---

## Read next
- [Sales](/lending/features/sales-overview)