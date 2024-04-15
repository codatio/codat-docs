---
title: Sync for Expenses overview
sidebar_label: Sync for Expenses
description: Push categorized expenses and attachments to all major accounting platforms, handling the complexities of expense reconciliation
displayed_sidebar: expenses
image: "/img/sync-for-expenses/sfe-banner.png"
hide_title: true
hide_description: true
hide_table_of_contents: true
tags: [overview, syncforexpense]
banner_title: Sync for Expenses
banner_class: expenses
banner_icon: "/img/logos/products/logo_expenses_clear.svg"
banner_image: "/img/banners/sfe-flow.png"
banner_text: "Push categorized expenses and attachments to all major accounting platforms, handling the complexities of expense reconciliation"
// video_url: "https://www.youtube.com/embed/4zLgo0iP6MI"
// video_text: What is Sync for Expenses?
---

import {IntegrationsList} from '@components/global/Integrations'
import {integrationsFilterExpenses} from '@components/global/Integrations/integrations'
import ClientLibraries from "@components/global/ClientLibraries";
import Products from "@components/global/Products";

## What is it?

**Sync for Expenses** is a standardized API-based product that makes it easy to build and maintain accounting integrations and an end-to-end expense management process that customers love. 

With **58% of small businesses** saying they choose one spending solution over another based on **quality of their accounting integrations**, Sync for Expenses enables you to push categorized expenses and attachments to your customers' accounting software via our high-quality accounting integrations. 

It includes built-in logic so you can easily handle all of the complexities of expense reconciliation, such as refunds, accounting for multiple currencies, and allowing users to correct errors.

## Who is it for?

With Sync for Expenses, corporate card providers, expense management providers, and neobanks can easily embed accounting automation features in their solution that would otherwise take months or even years to design, build, and maintain from scratch. 

## Why use it?

<ul className="card-container col-2">
  <li className="card">
    <div class="header">
      <img
        src="/img/wp-icons/copy-feature-bullet.svg"
        class="mini-icon"
      />
      <h3>Increase share of wallet</h3>
    </div>
    <p>
      Make your card your customers' favorite way to spend through hassle-free accounting integrations that save them time on tedious financial admin.
    </p>
  </li>

  <li className="card">
    <div class="header">
      <img
        src="/img/wp-icons/copy-feature-bullet.svg"
        class="mini-icon"
      />
      <h3>Go to market quickly</h3>
    </div>
    <p>
      Ship robust expense management integrations with leading accounting platforms six times faster via our single, streamlined API.
    </p>
  </li>

  <li className="card">
    <div class="header">
      <img
        src="/img/wp-icons/copy-feature-bullet.svg"
        class="mini-icon"
      />
      <h3>Free up development resources</h3>
    </div>
    <p>
      Run your accounting integrations on our infrastructure proven at scale without the hassle of ongoing API maintenance and optimization.
    </p>
  </li>

  <li className="card">
    <div class="header">
      <img
        src="/img/wp-icons/copy-feature-bullet.svg"
        class="mini-icon"
      />
      <h3>Get standardized data</h3>
    </div>
    <p>
      Sync for Expenses is completely standardized with a data model based on the experience of expense card providers. 
    </p>
  </li>

  <li className="card">
    <div class="header">
      <img
        src="/img/wp-icons/copy-feature-bullet.svg"
        class="mini-icon"
      />
      <h3>Capture receipts</h3>
    </div>
    <p>
      Easily upload receipts against an expense, providing your SMB customer with a full audit trail for each transaction.
    </p>
  </li>

  <li className="card">
    <div class="header">
      <img
        src="/img/wp-icons/copy-feature-bullet.svg"
        class="mini-icon"
      />
      <h3>Two-way sync</h3>
    </div>
    <p>
      Sync for Expenses stays in touch with the SMB customer’s general ledger so that your integrations are more robust and reliable.
    </p>
  </li>

</ul>

## How does it work?

With Sync for Expenses, you can build a solution that covers all the key steps of expense management.

### [Configure customer](/expenses/configure-customer)

Start by creating a [company](../terms/company) to represent your SMB customer in Codat. Then, establish its [connection](/core-concepts/connections) to the customer's accounting platform. We will handle the authorization and linking to that platform - all we need is for your SMB to approve this access via our [auth flow](/auth-flow/overview).

### [Map customer transactions](/expenses/config-and-categorize)

Create expense configuration for your customer's company so that Sync for Expenses can attribute their spend to the correct accounts, suppliers, and customers. 

Expenses can also be categorized according to your SMB's bookkeeping. Provide your customer with the opportunity to choose the accounts, tracking categories, and tax rates that their expenses will be mapped to. 

### [Create and update transactions](/expenses/sync-process/expense-transactions)

Once the customer has categorized their expenses using the mapping options, use Sync for Expenses to push their everyday purchases to the SMB's accounting platform. Sync for Expenses also enables SMB customers to push attachments for a complete audit trail.

You can also create [transfers](/expenses/sync-process/transfer-transactions) and [reimbursements](/expenses/sync-process/reimbursable-expense-transactions).

### [Sync expense transactions](/expenses/sync-process/syncing-expenses)

Once you create a categorized expense transaction, we automatically initiate a sync of these transactions. The sync processes the expenses you created, maps them into the format required by the accounting platform, and records them in that platform. 

### [Upload attachments](/expenses/sync-process/uploading-receipts)

When creating an expense transaction, allow your SMB customer to save a copy of the associated receipt in their accounting platform. 

## Supported integrations

<IntegrationsList filter={integrationsFilterExpenses}/>
<br/>
<details>
<summary> Supported expense types per integration</summary>

| Expenses                    | Payment | Refund | Reward | Chargeback | Adjustment in | Adjustment out | Transfer | Reimbursable expense |
|---------------------|---------|--------|--------|------------|-------------|--------------|---------------|---------------|
| Xero                | ✔️       | ✔️      | ✔️      | ✔️          | ✔️           | ✔️            |              |              |
| QuickBooks   Online | ✔️       | ✔️      | ✔️      | ✔️          | ✔️           | ✔️            | ✔️             | ✔️            | 
| Dynamics   365      | ✔️       | ✔️      | ✔️      | ✔️          |             |              |               |              |
| Oracle   NetSuite   | ✔️       | ✔️      |        |            |             |              |               |              |
| QuickBooks Desktop  | ✔️       | ✔️  (credit card only)    |        |            |             |              |✔️              | ✔️            |
</details>

## Build with client libraries

Use our [comprehensive SDKs](/get-started/libraries) to kick-start and simplify your developers' journey automating the expense management process for your customers. The SDKs come in multiple languages and provide sample requests and responses for the full range of spend management scenarios.

<ClientLibraries productName={"sync-for-expenses"} />

---

## Read next

* [Start building](/expenses/getting-started) with Sync for Expenses
