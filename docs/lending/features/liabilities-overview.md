---
title: "Liabilities overview"
sidebar_label: "Liabilities"
description: "Comprehensive loan insights and credit history analysis"
image: "/img/banners/social/lending.png"
---

import Products from "@components/global/Products";
import { IntegrationsList } from "@components/global/Integrations";
import { accountingIntegrations, bankingIntegrations, commerceIntegrations } from "@components/global/Integrations/integrations";

Our **liabilities** feature simplifies the evaluation of a borrower's financial obligations. Machine learning models automatically identify loans from connected sources and provide lenders with a clear overview of a borrower's outstanding loans and their repayment history.

## Use cases

Common uses of our liabilities feature include:

- **Risk assessment:** helps assess the borrower's risk profile and repayment reliability.

- **Debt capacity:** evaluates if the business can handle more debt without financial strain.

- **Repayment behaviour:** indicates if the borrower makes payments on time or defaults.

- **Loan structuring:** tailors new loan terms to fit the borrower's financial situation.

## Feature components

<iframe
  src="https://docs.google.com/spreadsheets/d/e/2PACX-1vQXnkKj3esBrzpD--pKV_tVTfTHxDPpxz8BBFe2SjcNt6kB2-qcTFDxEye3kxHWu91mYRzLoCjYfpHH/pubhtml?gid=554962936&amp;single=true&amp;widget=true&amp;headers=false"
  frameborder="0"
  style={{ top: 0, left: 0, width: "100%", height: "660px" }}
></iframe>

## Supported outputs

You can retrieve the data pulled by the feature by [downloading a report in an Excel format](/lending/features/excel-download-overview) or calling the **liabilities** [endpoints of our API](/lending-api#/).

## Get started

Once you have the Lending API enabled, configure your instance to work with our liabilities feature. 

#### Configure data sources

Follow the respective guides to set up and enable at least one accounting, banking, or commerce integration that will serve as a data source for the feature:

##### Accounting

<IntegrationsList filter={['Dynamics 365 Business Central', 'Exact Online', 'FreshBooks', 'MYOB Business', 'Oracle NetSuite', 'QuickBooks Online', 'QuickBooks Desktop', 'Sage 50', 'Sage Business Cloud Accounting', 'Xero']} />

##### Commerce

<IntegrationsList filter={['Stripe', 'Zettle']} />

#### Enable data types and sync schedule

See how to [enable data types](/core-concepts/data-type-settings#override-the-default-sync-settings) and ensure the following data types have been switched on:

- Proft and loss `profitAndLoss`
- Balance sheet `balanceSheet`
- Chart of accounts `chartOfAccounts`
- Journal entries `journalEntries`
- Accounts `banking-accounts`
- Transactions `banking-transactions`
- Transactions `commerce-transactions`

Configure the solution to refresh data when you need it by [setting a synchronization frequency](/core-concepts/data-type-settings#choose-a-synchronization-frequency). We recommend setting it to a daily or a monthly sync.

#### Configure webhooks

We recommend you configure the following [webhooks](/using-the-api/webhooks/core-rules-types) to manage your data pipelines. These webhooks send a notification for each `dataType` separately.

- [Dataset status has changed to an error state](/using-the-api/webhooks/core-rules-types#dataset-status-has-changed-to-an-error-state)  

  If you receive a notification from this webhook, it means an issue occured when syncing the specified data type. Resolve the issue and [initiate the sync](/using-the-api/queueing-data-syncs#refresh-data) for this dataset again. 
 
- [Dataset data changed](/using-the-api/webhooks/core-rules-types#dataset-data-changed)  

  If you receive a notification from this webhook, it means data has been updated for the specified data type. This can include new, updated or deleted data. You should then refresh the data in your platform.

---

## Read next
- [Accounts receivable](/lending/features/accounts-receivable-overview)