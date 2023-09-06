---
title: "Accounts receivable overview"
sidebar_label: "Accounts receivable"
description: "Assessing debtor risk in real time with accounts receivable insights"
---

import Products from "@components/global/Products";
import { IntegrationsList } from "@components/global/Integrations";
import { accountingIntegrations, bankingIntegrations } from "@components/global/Integrations/integrations";

The **Accounts receivable** feature offers a thorough breakdown of a borrower's debtors ledger sourced from their accounting platform. You can examine the ledger in its entirety or delve into specific customer histories, enabling full automation of the receivables financing process.

## Use cases

Common uses of the Accounts receivable feature include:

- **Digital data collection:** Get a ongoing feed of customer invoices.

- **Debtor risk analysis:** Gain insights into a debtor's history, including customer details and comprehensive relationship history spanning invoices, payments, and credit notes.

- **Invoice reconciliation:** Automatically match invoice payments with bank transactions.

- **Collections performance evaluation:** Assess customer payment timeliness, gauge bad debt levels, and monitor outstanding customer receivables balances.

## Supported feature components

<iframe
  src="https://docs.google.com/spreadsheets/d/e/2PACX-1vQXnkKj3esBrzpD--pKV_tVTfTHxDPpxz8BBFe2SjcNt6kB2-qcTFDxEye3kxHWu91mYRzLoCjYfpHH/pubhtml?gid=1688137158&amp;single=true&amp;widget=true&amp;headers=false"
  frameborder="0"
  style={{ top: 0, left: 0, width: "100%", height: "660px" }}
></iframe>

## Feature enrichments

#### Invoice to payment reconciliation

The invoice verification element of this feature streamlines the often tedious and error-prone process of matching invoice payments with bank transactions. By automating this crucial task, it ensures that lenders can confidently validate the accuracy and authenticity of invoice payments in real-time, minimizing the risk of errors and fraud. 

A quick and easy test is to filter for invoices which have a status of ‘Paid’ but do not have a matching bank transaction. 

You must have have both an accounting and a banking source connected to use this feature component. 


## Supported outputs

You can retrieve the data pulled and enriched by the feature by [downloading a report in an Excel format](/lending/features/excel-download-overview) or or calling the the **Accounts receivable** [endpoints of our API](/lending-api#/).

## Get started

Once you have the Lending API enabled, configure your instance to work with the Accounts receivable feature. 

#### Configure data sources

Follow the respective guides to set up and enable at least one accounting and one banking integration that will serve as a data source for the Accounts receivable feature:

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

Configure the solution to refresh data when you need it by [setting a synchronization frequency](/core-concepts/data-type-settings#choose-a-synchronization-frequency). We recommend setting it to a daily or monthly sync.

---

## Read next
- [Accounts payable](/lending/features/accounts-payable-overview)