---
title: "Bank statements overview"
description: "Underwrite with accurate, real-time cash flows enriched with detailed spend and income transaction categories"
displayed_sidebar: "lending"
image: "/img/banners/social/lending.png"
---

import Products from "@components/Products";
import { IntegrationsList } from "@components/Integrations";
import { bankingIntegrations } from "@components/Integrations/integrations";

Our **bank statements** feature provides data from a linked company’s banking connections. Transactions are enriched with financial category and payment provider information.

## Use cases

Common uses of our bank statements feature include:

1. **Liquidity assessment:** determine the borrower's ability to cover short-term expenses and financial obligations.

2. **Financial obligation evaluation:** assess the borrower's capability to meet debt payments and other financial commitments.

3. **Cash flow trend analysis:** identify patterns and fluctuations in the borrower's cash flow to predict their future financial health.

4. **Revenue analysis:** identify all revenue channels of a business using the payment provider enrichment.

## Feature components

Our banking feature consists of the following components, supported across a number of banking data sources.

1. **[Accounts:](/lending-api#/operations/list-banking-accounts)** detailed information on a business’ bank accounts including balances, account numbers, and institutions holding the accounts

2. **[Transactions:](/lending-api#/operations/list-banking-transactions)** transactions incurred by the bank account

3. **[Account balances:](/lending-api#/operations/list-banking-account-balances)** balances for a bank account, including the end-of-day batch balance or running balances per transaction

4. **[Categorized bank statements:](/lending-api#/operations/get-categorized-bank-statement-transactions)** all connected bank accounts and transactions with enrichments in a single report.

<iframe
  src="https://docs.google.com/spreadsheets/d/1VEE7uUH_Q4ZGReonOqfZVT6V4-C40rwsMNEp2K7hOhQ/pubhtml?gid=1760315404&amp;single=true&amp;widget=true&amp;headers=false"
  frameborder="0"
  className="googleSheets"
  style={{ height: "200px" }}
/>

## Feature enrichments

We provide the following enrichments via our [categorized bank statement](/lending-api#/operations/get-categorized-bank-statement-transactions) component.

#### Transaction categories

Bank transactions lack useful context for underwriting. We have solved this problem by enriching bank transactions with the same financial categories you find on an income statement (profit and loss) and a balance sheet. Lenders can rebuild a cash-based profit and loss using bank data. This gives them a clear and reliable view of borrower affordability.

<details>
  <summary>View supported transaction categories</summary>

  <iframe
    src="https://docs.google.com/spreadsheets/d/1VEE7uUH_Q4ZGReonOqfZVT6V4-C40rwsMNEp2K7hOhQ/pubhtml?gid=340133827&amp;single=true&amp;widget=true&amp;headers=false"
    frameborder="0"
    className="googleSheets"
    style={{ height: "660px" }}
  />
</details>

#### Payment provider

Businesses often sell across multiple channels, for example, brick and mortar, online or marketplace. We help lenders identify the total revenue of a business by identifying the payment providers in their bank transactions.

<details>
  <summary>View supported payment providers</summary>

 <iframe
   src="https://docs.google.com/spreadsheets/d/1VEE7uUH_Q4ZGReonOqfZVT6V4-C40rwsMNEp2K7hOhQ/pubhtml?gid=88475193&amp;single=true&amp;widget=true&amp;headers=false"
   frameborder="0"
   className="googleSheets"
   style={{ height: "660px" }}
 />
</details>

## Supported outputs

You can retrieve the data read and enriched by the feature by [downloading a report in an Excel format](/lending/features/excel-download-overview) or calling the **categorized bank statement** endpoints of our API.

The categorized bank statement is generated asynchronously, so request the report first and wait until it is complete:

1. [Generate the report](/lending-api#/operations/generate-report) with `POST /companies/{companyId}/reports/categorizedBankStatement`.

2. Wait for the `reports.categorizedBankStatement.generate.successful` webhook, or [check the report status](/lending-api#/operations/get-report-status) with `GET /companies/{companyId}/reports/categorizedBankStatement/latest/status`.

3. Get the [transactions](/lending-api#/operations/get-categorized-bank-statement-transactions) and [accounts](/lending-api#/operations/list-categorized-bank-statement-accounts) of the latest report, or [download it in an Excel format](/lending-api#/operations/download-categorized-bank-statement-excel).

For example, add up the amounts of the transactions whose category starts with `Liability.Current.Debt.LoansPayable` to calculate the current position of the company's outstanding loans.

## Get started

Once you have the Lending solution enabled, configure your instance to work with our bank statements feature.

#### Configure data sources

Follow the respective guides to set up enable banking integrations that will serve as a data source:

<IntegrationsList integrations={bankingIntegrations} />

:::tip Already have a banking integration?

If you have an existing banking integration, you can use our [data upload](/lending/functions/data-upload) functionality to manually upload records that will be used as a source for bank statement categorization.

:::

#### Enable data types and sync schedule

See how to [enable data types](/core-concepts/data-type-settings#override-the-default-sync-settings) and ensure the following data types have been switched on:

- Accounts `banking-accounts`
- Transactions `banking-transactions`
- Account balances `banking-accountBalances`

Configure the solution to refresh data when you need it by [setting a synchronization frequency](/core-concepts/data-type-settings#choose-a-synchronization-frequency). We recommend setting it to a daily or a monthly sync.

#### Configure webhooks

We recommend you [configure webhook consumers](/using-the-api/webhooks/create-consumer) with the following [event types](/using-the-api/webhooks/event-types) to manage your data pipelines. These webhooks send a message for each `dataType` separately.

- [Dataset status has changed to an error state](/using-the-api/webhooks/event-types)

  This means an issue occurred when syncing the specified data type. Resolve the issue and [initiate the sync](/using-the-api/queueing-data-syncs#refresh-data) for this dataset again.

- [Dataset data changed](/using-the-api/webhooks/event-types)

  This means data has been updated for the specified data type. This can include new, updated or deleted data. You should then refresh the data in your platform.

---

## Read next

- [Sales](/lending/features/sales-overview)
