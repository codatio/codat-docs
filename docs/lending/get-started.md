---
title: "Get started with Lending API"
sidebar_label: Get started
description: "Learn how to perform the initial setup for the Lending API product"
image: "/img/banners/social/lending.png"
---

import { IntegrationsList } from "@components/global/Integrations";
import { accountingIntegrations, bankingIntegrations, commerceIntegrations } from "@components/global/Integrations/integrations";

:::tip Your lending journey

Our Lending API supports the data collection step of your lending journey, which starts in your own web application. Enable Lending API and configure it, then embed our [Link SDK](/auth-flow/authorize-embedded-link) in your app to handle the auth flow. Determine where the collected data will be stored and manage the subsequent steps of the lending process in your app. 

:::

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

### Authorization flow

As part of using the Lending API, you will need your customers to authorize your access to their data. To do so, use Link - our pre-built, conversion-optimized, and white-labelled authorization flow. 

We recommend you fully embed the Link auth flow in your experience by using our [Embedded Link](/auth-flow/authorize-embedded-link) SDK in your front-end code. You can also choose our out-of-the-box [Hosted Link](/auth-flow/authorize-hosted-link) auth flow option to get up and running as quick as possible. 

The solution lets you tailor the authorization journey to your business needs. You can:

* [Customize Link settings](/auth-flow/customize/customize-link)
* [Set up company branding](/auth-flow/customize/branding)
* [Set up redirects](/auth-flow/customize/set-up-redirects)

### Data types

Set the minimum set of [data types](/core-concepts/data-type-settings#override-the-default-sync-settings) required for the Lending API to `fetch on first link`. Each feature may also have additional data type requirements, so be sure to review these for the feature you want to use.

In the <a href="https://app.codat.io" target="_blank">Codat Portal</a>, navigate to **Settings > Integrations > Data types**. As a minimum, you need the following data types enabled:

|  Data source          | Accounting                                                                                                                                                                                            | Banking                                                                                                                                                                             | Commerce                                                                                                     |
|------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------|
| Data types | `company`<br/>`chartOfAccounts`<br/>`balanceSheet`<br/>`profitAndLoss`<br/>`bankAccounts`<br/>`bankTransactions` | `banking-accounts`<br/>`banking-transactions`<br/>`banking-transactionCategories`<br/>`banking-accountBalances` | `commerce-companyInfo`<br/>`commerce-customers`<br/>`commerce-orders` |

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

Before you can collect your SMB customer's data, you need to create a Codat [company](../terms/company) and connect it to a data source (for example, an accounting platform). You can do that in two ways:

* In the [Codat Portal](https://app.codat.io) by navigating to **Companies > Create company**
* By calling the [Create company](/lending-api#/operations/create-company) endpoint of our API

Remember to [authenticate](/using-the-api/authentication) if you are making calls to our API. Navigate to **Developers > API keys** in the Portal to pick up your authorization header.

To establish a connection to a data source and sync business data, your customer must grant you access. They can do so using our [Link auth flow](/auth-flow/overview) solution, which we recommend you use in your app.

Once the connection is established, Codat will retrieve data for the data types you have previously set up to fetch on first link. You can use the `New company synchronised` [webhook](/using-the-api/webhooks/core-rules-types#new-company-synchronized) to get notified once these initial syncs are complete, and at least one of them is successful.

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

- [Bank statements](/lending/features/bank-statements-overview)
- [Sales](/lending/features/sales-overview)
- [Financial statements](/lending/features/financial-statements-overview)
- [Liabilities](/lending/features/liabilities-overview)
- [Accounts receivable](/lending/features/accounts-receivable-overview)
- [Accounts payable](/lending/features/accounts-payable-overview)
