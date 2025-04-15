---
title: Expenses overview
sidebar_label: Expenses
description: Write categorized expenses and attachments to all major accounting software, handling the complexities of expense reconciliation
displayed_sidebar: expenses
image: "/img/sync-for-expenses/sfe-banner.png"
hide_title: true
hide_description: true
hide_table_of_contents: true
tags: [overview, syncforexpense]
banner_title: Expenses
banner_class: expenses
banner_icon: "/img/logos/products/logo_expenses_clear.svg"
banner_image: "/img/banners/bank-feeds.png"
banner_text: "Write categorized expenses and attachments to all major accounting software, handling the complexities of expense reconciliation"
// video_url: "https://www.youtube.com/embed/4zLgo0iP6MI"
// video_text: What is Expenses?
---

import {IntegrationsList} from '@components/Integrations'
import {integrationsFilterExpenses} from '@components/Integrations/integrations'
import ClientLibraries from "@components/ClientLibraries";
import Products from "@components/Products";

## What is it?

**Expenses** is a standardized API-based solution that makes it easy to build and maintain accounting integrations and an end-to-end expense management process that customers love. 

With **58% of small businesses** saying they choose one spending solution over another based on **quality of their accounting integrations**, Expenses enables you to write categorized expenses and attachments to your customers' accounting software via our high-quality accounting integrations. 

It includes built-in logic so you can easily handle all of the complexities of expense reconciliation, such as refunds, accounting for multiple currencies, and allowing users to correct errors.

## Who is it for?

With Expenses, corporate card providers, expense management providers, and neobanks can easily embed accounting automation features in their solution that would otherwise take months or even years to design, build, and maintain from scratch. 

## Why use it?

<ul className="card-container col-2">
  <li className="card">
    <div className="header">
      <img
        src="/img/wp-icons/copy-feature-bullet.svg"
        className="mini-icon"
      />
      <h3>Increase share of wallet</h3>
    </div>
    <p>
      Make your card your customers' favorite way to spend through hassle-free accounting integrations that save them time on tedious financial admin.
    </p>
  </li>

  <li className="card">
    <div className="header">
      <img
        src="/img/wp-icons/copy-feature-bullet.svg"
        className="mini-icon"
      />
      <h3>Go to market quickly</h3>
    </div>
    <p>
      Ship robust expense management integrations with leading accounting software six times faster via our single, streamlined API.
    </p>
  </li>

  <li className="card">
    <div className="header">
      <img
        src="/img/wp-icons/copy-feature-bullet.svg"
        className="mini-icon"
      />
      <h3>Free up development resources</h3>
    </div>
    <p>
      Run your accounting integrations on our infrastructure proven at scale without the hassle of ongoing API maintenance and optimization.
    </p>
  </li>

  <li className="card">
    <div className="header">
      <img
        src="/img/wp-icons/copy-feature-bullet.svg"
        className="mini-icon"
      />
      <h3>Get standardized data</h3>
    </div>
    <p>
      Expenses is completely standardized with a data model based on the experience of expense card providers. 
    </p>
  </li>

  <li className="card">
    <div className="header">
      <img
        src="/img/wp-icons/copy-feature-bullet.svg"
        className="mini-icon"
      />
      <h3>Capture receipts</h3>
    </div>
    <p>
      Easily upload receipts against an expense, providing your SMB customer with a full audit trail for each transaction.
    </p>
  </li>

  <li className="card">
    <div className="header">
      <img
        src="/img/wp-icons/copy-feature-bullet.svg"
        className="mini-icon"
      />
      <h3>Two-way sync</h3>
    </div>
    <p>
      Expenses stays in touch with the SMB customer’s general ledger so that your integrations are more robust and reliable.
    </p>
  </li>

</ul>

## How does it work?

With Expenses, you can build a solution that covers all the key steps of expense management.

### [Configure customer](/expenses/configure-customer)

Start by creating a [company](../terms/company) to represent your SMB customer in Codat. Then, establish its [connection](/core-concepts/connections) to the customer's accounting software. We will handle the authorization and linking to that platform - all we need is for your SMB to approve this access via our [auth flow](/auth-flow/overview).

### [Map customer transactions](/expenses/config-and-categorize)

Create expense configuration for your customer's company so that Expenses can attribute their spend to the correct accounts, suppliers, and customers. 

Expenses can also be categorized according to your SMB's bookkeeping. Provide your customer with the opportunity to choose the accounts, tracking categories, and tax rates that their expenses will be mapped to. 

### [Create and update transactions](/expenses/sync-process/expense-transactions)

Once the customer has categorized their expenses using the mapping options, use Expenses to write their everyday purchases to the SMB's accounting software. Expenses also enables SMB customers to write attachments for a complete audit trail.

You can also create [transfers](/expenses/sync-process/transfer-transactions) and [reimbursements](/expenses/sync-process/reimbursable-expense-transactions).

### [Sync expense transactions](/expenses/sync-process/syncing-expenses)

Once you create a categorized expense transaction, we automatically initiate a sync of these transactions. The sync processes the expenses you created, maps them into the format required by the accounting software, and records them in that platform. 

### [Upload attachments](/expenses/sync-process/uploading-receipts)

When creating an expense transaction, allow your SMB customer to save a copy of the associated receipt in their accounting software. 

## Supported integrations

<IntegrationsList filter={integrationsFilterExpenses}/>
<br/>
<details>
<summary> Supported integrations by endpoint</summary>

|Integration          | expense-transactions | reimbursable-expense-transactions | transfer-transactions | adjustment-transactions |
|---------------------|----------------------|-----------------------------------|-----------------------|-------------------------|
| Dynamics   365      | ✔️                  |                                   |                       | ✔️                      |
| FreeAgent           | ✔️                  | ✔️                                | ✔️                   |                         |
| Oracle   NetSuite   | ✔️                  | ✔️                                |                      |                          |             
| QuickBooks Desktop  | ✔️                  | ✔️                                | ✔️                   | ✔️                      |
| QuickBooks   Online | ✔️                  | ✔️                                | ✔️                   | ✔️                      |
| Sage Intacct        | ✔️ (credit card only)                  |                                   |                       |                         | 
| Xero                | ✔️                  |                                   | ✔️                    | ✔️                     | 
| Zoho Books          | ✔️                  | ✔️                                |                      |                          |   
</details>

<details>
<summary> Supported integrations by transaction type</summary>

| Integration                   | Payment | Refund                | Reward                | Chargeback             |
|---------------------|---------|-----------------------|-----------------------|------------------------|
| Dynamics   365      | ✔️     | ✔️                    | ✔️                    | ✔️                    |
| FreeAgent           | ✔️     |                       |                        |                       | 
| Oracle   NetSuite   | ✔️     | ✔️                    | ✔️                    | ✔️                    |
| QuickBooks Desktop  | ✔️     | ✔️ (credit card only) | ✔️ (credit card only) | ✔️ (credit card only) |
| QuickBooks   Online | ✔️     | ✔️                    | ✔️                    | ✔️                    |
| Sage Intacct  | ✔️ (credit card only)    | ✔️ (credit card only) |            |                       |
| Xero                | ✔️     | ✔️                    | ✔️                    | ✔️                    |           
| Zoho Books          | ✔️     |                       |                        |                       |      
</details>

## Build with client libraries

Use our [comprehensive SDKs](/get-started/libraries) to kick-start and simplify your developer journey automating the expense management process for your customers. The SDKs come in multiple languages and provide sample requests and responses for the full range of spend management scenarios.

<ClientLibraries productName={"sync-for-expenses"} />

---

## Read next

* [Start building](/expenses/getting-started) with the Expenses solution
