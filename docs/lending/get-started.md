---
title: "Get started with Lending API"
sidebar_label: Get started
description: "Learn how to perform the initial setup for the Lending API product"
---
import { IntegrationsList } from "@components/global/Integrations";
import { accountingIntegrations, bankingIntegrations, commerceIntegrations } from "@components/global/Integrations/integrations";

## Enable Lending API

1. Open the <a href="https://app.codat.io" target="_blank">Codat Portal</a> and sign in.
2. Click on **Settings > Organizational settings > Products**.
3. In the list of products, find _Lending API_ and click **Enable**. Then, follow the on-screen prompt.

## Configure Lending API

### Data sources

In the <a href="https://app.codat.io" target="_blank">Codat Portal</a>, navigate to **Settings > Integrations** to enable and set up the integrations that will serve as a data source for the product. Follow the respective guides for integration-specific instructions. 

Data source coverage varies by feature, so be sure to review the coverage for the features you want to use. 

#### Accounting

<IntegrationsList integrations={accountingIntegrations} />

#### Banking

<IntegrationsList integrations={bankingIntegrations} />

#### Commerce

<IntegrationsList integrations={commerceIntegrations} />

### Data types

Enable the minimum set of [data types](/core-concepts/data-type-settings#override-the-default-sync-settings) required for the Lending API. Each feature may also have additional data type requirements, so be sure to review these for the feature you want to use.

In the <a href="https://app.codat.io" target="_blank">Codat Portal</a>, navigate to **Settings > Integrations > Data types**. As a minimum, you need the following data types enabled:

|  Data source          | Accounting                                                                                                                                                                                            | Banking                                                                                                                                                                             | Commerce                                                                                                     |
|------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------|
| Data types | - Company `company`<br/>- Chart of Accounts `chartOfAccounts`<br/>- Balance Sheet `balanceSheet`<br/>- Profit and Loss `profitAndLoss`<br/>- Bank Accounts `bankAccounts`<br/>- Bank Transactions `bankTransactions` | - Accounts   `banking-accounts`<br/>- Transactions `banking-transactions`<br/>- Transaction Categories `banking-transactionCategories`<br/>- Account Balances `banking-accountBalances` | - Company Info   `commerce-companyInfo`<br/>-  Customers   `commerce-customers`<br/>- Orders `commerce-orders` |

Configure the solution to refresh data when you need it by [setting a synchronization frequency](/core-concepts/data-type-settings#choose-a-synchronization-frequency) on the same screen. We recommend setting it to a daily or a monthly sync.

### Webhooks

Codat supports a range of [webhooks](/using-the-api/webhooks/core-rules-types) to help you manage your data pipelines. Many of these webhooks send a notification for each `dataType` separately.

In the <a href="https://app.codat.io" target="_blank">Codat Portal</a>, navigate to **Settings > Webhooks > Rules** and click **Create new rule** to set up the following webhooks and get the most out of Lending API:

- [Dataset status has changed to an error state](/using-the-api/webhooks/core-rules-types#dataset-status-has-changed-to-an-error-state)  

  If you receive a notification from this webhook, it means an issue occured when syncing the specified data type. Resolve the issue and [initiate the sync](/using-the-api/queueing-data-syncs#refresh-data) for this dataset again. 
 
- [Dataset data changed](/using-the-api/webhooks/core-rules-types#dataset-data-changed)  

  If you receive a notification from this webhook, it means data has been updated for the specified data type. This can include new, updated or deleted data. You should then refresh the data in your platform.

- [Account categories updated](/using-the-api/webhooks/core-rules-types#account-categories-updated)

  If you receive a notification from this webhook, it means categories associated with accounts have been updated for the [categorized profit and loss statement](https://docs.codat.io/lending-api#/operations/get-enhanced-profit-and-loss-accounts) and the [categorized balance sheet statement](https://docs.codat.io/lending-api#/operations/get-enhanced-balance-sheet-accounts) components. 
  

## Use Lending API

<ul className="card-container col-2">
  <li className="card">
    <div class="header">
      <img
        src="/img/wp-icons/copy-feature-bullet.svg"
        class="mini-icon"
      />
      <h3>Underwriters</h3>
    </div>
    <p>
      Make use of our <a href="/lending/features/excel-download-overview">Excel export reports</a> to audit source data and perform underwriting with confidence.
    </p>
  </li>
  
  <li className="card">
    <div class="header">
      <img
        src="/img/wp-icons/copy-feature-bullet.svg"
        class="mini-icon"
      />
      <h3>Developers</h3>
    </div>
    <p>
      Interact with our <a href="/lending/features/excel-download-overview">Lending API reference</a> to understand required body parameters, responses, and errors. Use our <a href="/get-started/libraries">client SDKs</a> to simplify your implementation journey.
    </p>
  </li>

  </ul>

--- 

## Read next

Explore the features that make up our Lending API:

- [Banking](/lending/features/banking-overview)
- [Sales](/lending/features/sales-overview)
- [Financial statements](/lending/features/financial-statements-overview)
- [Liabilities](/lending/features/liabilities-overview)
- [Accounts receivable](/lending/features/accounts-receivable-overview)
- [Accounts payable](/lending/features/accounts-payable-overview)
