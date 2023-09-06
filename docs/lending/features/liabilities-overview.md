---
title: "Liabilities overview"
sidebar_label: "Liabilities"
description: "Comprehensive loan insights and credit history analysis"
---

import Products from "@components/global/Products";
import { IntegrationsList } from "@components/global/Integrations";
import { accountingIntegrations, bankingIntegrations, commerceIntegrations } from "@components/global/Integrations/integrations";

The **Liabilities** feature simplifies the evaluation of a borrower's financial obligations. Machine learning models automatically identify loans from connected sources and provide lenders with a clear overview of a borrower's outstanding loans and their repayment history.

## Use cases

Common uses of the Liabilities feature include:

- **Risk assessment:** Helps assess the borrower's risk profile and repayment reliability.

- **Debt capacity:** Evaluates if the business can handle more debt without financial strain.

- **Repayment behaviour:** Indicates if the borrower makes payments on time or defaults.

- **Loan structuring:** Tailors new loan terms to fit the borrower's financial situation.

## Supported feature components

<iframe
  src="https://docs.google.com/spreadsheets/d/e/2PACX-1vQXnkKj3esBrzpD--pKV_tVTfTHxDPpxz8BBFe2SjcNt6kB2-qcTFDxEye3kxHWu91mYRzLoCjYfpHH/pubhtml?gid=554962936&amp;single=true&amp;widget=true&amp;headers=false"
  frameborder="0"
  style={{ top: 0, left: 0, width: "100%", height: "660px" }}
></iframe>

## Supported outputs

You can retrieve the data pulled by the feature by [downloading a report in an Excel format](/lending/features/excel-download-overview) or calling the **Liabilities** [endpoints of our API](/lending-api#/).

## Get started

Once you have the Lending API enabled, configure your instance to work with the Liabilities feature. 

#### Configure data sources

Follow the respective guides to set up and enable at least one accounting, banking, or commerce integration that will serve as a data source for the feature:

##### Accounting
<br />

<IntegrationsList integrations={accountingIntegrations} />

##### Banking
<br />

<IntegrationsList integrations={bankingIntegrations} />

##### Commerce
<br />

<IntegrationsList integrations={commerceIntegrations} />

#### Enable data types and sync schedule

See how to [enable data types](/core-concepts/data-type-settings#override-the-default-sync-settings) and ensure the following data types have been switched on:

- Proft and loss `profitAndLoss`
- Balance sheet `balanceSheet`
- Chart of accounts `chartOfAccounts`
- Journal entries `journalEntries`
- Accounts `banking-accounts`
- Transactions `banking-transactions`
- Transactions `commerce-transactions`

Configure the solution to refresh data when you need it by [setting a synchronization frequency](/core-concepts/data-type-settings#choose-a-synchronization-frequency). We recommend setting it to a daily or monthly sync.

---

## Read next
- [Accounts receivable](/lending/features/accounts-receivable-overview)