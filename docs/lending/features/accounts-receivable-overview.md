---
title: "Accounts receivable overview"
sidebar_label: "Accounts receivable"
description: "Assessing debtor risk in real time with accounts receivable insights"
---

import Products from "@components/global/Products";
import { IntegrationsList } from "@components/global/Integrations";
import { accountingIntegrations, bankingIntegrations } from "@components/global/Integrations/integrations";

Our **accounts receivable** feature offers a thorough breakdown of a borrower's debtors ledger sourced from their accounting platform. You can examine the ledger in its entirety or delve into specific customer histories, enabling full automation of the receivables financing process.

## Use cases

Common uses of our accounts receivable feature include:

- **Digital data collection:** get a ongoing feed of customer invoices.

- **Debtor risk analysis:** gain insights into a debtor's history, including customer details and comprehensive relationship history spanning invoices, payments, and credit notes.

- **Invoice reconciliation:** automatically match invoice payments with bank transactions.

- **Collections performance evaluation:** assess customer payment timeliness, gauge bad debt levels, and monitor outstanding customer receivables balances.

## Feature components

<iframe
  src="https://docs.google.com/spreadsheets/d/e/2PACX-1vQXnkKj3esBrzpD--pKV_tVTfTHxDPpxz8BBFe2SjcNt6kB2-qcTFDxEye3kxHWu91mYRzLoCjYfpHH/pubhtml?gid=1688137158&amp;single=true&amp;widget=true&amp;headers=false"
  frameborder="0"
  style={{ top: 0, left: 0, width: "100%", height: "660px" }}
></iframe>

## Feature enrichments

#### Reconciled invoices

The **reconciled invoices** component of this feature streamlines the often tedious and error-prone process of matching invoice payments with bank transactions. By automating this crucial task, it ensures that lenders can confidently validate the accuracy and authenticity of invoice payments in real-time, minimizing the risk of errors and fraud. 

A quick and easy test is to filter for invoices which have a status of ‘Paid’ but do not have a matching bank transaction. 

Call our [Get reconciled invoices](/lending-api#/operations/get-reconciled-invoices) endpoint to use this feature component. You must have have both an accounting and a banking source connected. 

## Supported outputs

You can retrieve the data pulled and enriched by the feature by [downloading a report in an Excel format](/lending/features/excel-download-overview) or or calling the the **accounts receivable** [endpoints of our API](/lending-api#/).

## Get started

Once you have the Lending API enabled, configure your instance to work with our accounts receivable feature. 

#### Configure data sources

Follow the respective guides to set up and enable at least one accounting and one banking integration that will serve as a data source for the accounts receivable feature:

##### Accounting
<br />

<IntegrationsList integrations={accountingIntegrations} />

##### Banking
<br />

<IntegrationsList integrations={bankingIntegrations} />

#### Enable data types and sync schedule

See how to [enable data types](/core-concepts/data-type-settings#override-the-default-sync-settings) and ensure the following data types have been switched on:

- Customers `customers`
- Invoices `invoices`
- Payments `payments`
- Credit Notes `creditNotes`
- Account transactions `accountTransactions`
- Direct costs `directCosts`
- Direct incomes `directIncomes`
- Transfers `transfers`
- Accounts `banking-accounts`
- Transactions `banking-transactions`

Configure the solution to refresh data when you need it by [setting a synchronization frequency](/core-concepts/data-type-settings#choose-a-synchronization-frequency). We recommend setting it to a daily or a monthly sync.

#### Configure webhooks

We recommend you configure the following [webhooks](/using-the-api/webhooks/core-rules-types) to manage your data pipelines. These webhooks send a notification for each `dataType` separately.

- [Dataset status has changed to an error state](/using-the-api/webhooks/core-rules-types#dataset-status-has-changed-to-an-error-state)  

  If you receive a notification from this webhook, it means an issue occured when syncing the specified data type. Resolve the issue and [initiate the sync](/using-the-api/queueing-data-syncs#refresh-data) for this dataset again. 
 
- [Dataset data changed](/using-the-api/webhooks/core-rules-types#dataset-data-changed)  

  If you receive a notification from this webhook, it means data has been updated for the specified data type. This can include new, updated or deleted data. You should then refresh the data in your platform.

---

## Read next
- [Accounts payable](/lending/features/accounts-payable-overview)