---
title: Sync for Expenses overview
sidebar_label: Sync for Expenses
description: Embedded accounting integrations for corporate card providers
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
banner_text: "Embedded accounting integrations for corporate card providers."
// video_url: "https://www.youtube.com/embed/4zLgo0iP6MI"
// video_text: What is Sync for Expenses?
---

import {IntegrationsList} from '@components/global/Integrations'
import {integrationsFilterExpenses} from '@components/global/Integrations/integrations'
import ClientLibraries from "@components/global/ClientLibraries";
import Products from "@components/global/Products";

## What is it?

Sync for Expenses is an API and a set of supporting tools. It has been built to enable corporate card and expense management platforms to provide high-quality integrations with multiple accounting platforms through a standardized API.

[![Run in Postman](https://run.pstmn.io/button.svg)](https://god.gw.postman.com/run-collection/9514766-9427cfd1-d3f9-4857-b3f1-d488fb6de5a6?action=collection%2Ffork&collection-url=entityId%3D9514766-9427cfd1-d3f9-4857-b3f1-d488fb6de5a6%26entityType%3Dcollection%26workspaceId%3Dc6d087b0-fc80-4d14-a903-a9017e1b54e0)

What is it?
Sync for expenses allows corporate card, expense management providers and neobanks to easily embed accounting automation features in their solution. Our simple API enables you to pull accounts and categories from customers' accounting systems and push categorised expenses and attachments ready for reconciliation against the bank feed.
Our standardised expenses model allows you push data in the same format to any of the major accounting & ERP systems, and includes built-in logic so you can easily handle all of the complexities of expense reconciliation such as refunds, accounting for multiple currencies and allowing users to correct errors.

## Who is it for?


## Why use it?



Why use it?
Increase share of wallet
Make your card your customers' favorite way to spend through high quality accounting integrations that save them time on tedious financial admin. Boost customer retention and grow interchange revenue.
Go to market quickly
Ship robust and feature-rich expense management integrations with leading accounting platforms six times faster via a single, streamlined API
Free up development resources
Run your accounting integrations on infrastructure proven at scale without the hassle of ongoing API maintenance and optimization.

## Supported integrations

<IntegrationsList filter={integrationsFilterExpenses}/>

<details>
<summary>Transaction types supported per integration</summary>

| Transaction type                    | Payment | Refund | Reward | Chargeback | Transfer in | Transfer out | Adjustment in | Adjustment out |
|---------------------|---------|--------|--------|------------|-------------|--------------|---------------|----------------|
| Xero                | ✔️       | ✔️      | ✔️      | ✔️          | ✔️           | ✔️            | ✔️             | ✔️              |
| QuickBooks   Online | ✔️       | ✔️      | ✔️      | ✔️          | ✔️           | ✔️            | ✔️             | ✔️              |
| Dynamics   365      | ✔️       | ✔️      | ✔️      | ✔️          |             |              |               |                |
| Oracle   NetSuite   | ✔️       | ✔️      |        |            |             |              |               |                |

</details>

## Features

<ul className="card-container col-3">
  <li className="card">
    <div class="header">
      <img
        src="/img/wp-icons/copy-feature-bullet.svg"
        class="mini-icon"
      />
      <h3>Standardized data</h3>
    </div>
    <p>
      Sync for Expenses is completely standardized with a data model based on expense card providers. 
    </p>
  </li>

  <li className="card">
    <div class="header">
      <img
        src="/img/wp-icons/copy-feature-bullet.svg"
        class="mini-icon"
      />
      <h3>Receipt capture</h3>
    </div>
    <p>
      Easily upload receipts against an expense, enabling full auditability for your SMB customer.
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
      Sync for Expenses stays in touch with the SMB’s general ledger so your integrations are more robust and reliable.
    </p>
  </li>

</ul>

## How does it work?

### [Connect to your SMB's accounting platform](/expenses/getting-started)

Codat handles authorization and linking to your SMB's accounting platform and takes into account intricate details such as rate limits.

### [Categorize and tag expenses](/expenses/config-and-categorize)

Expenses can be categorized according to your SMB's bookkeeping.

Sync for Expenses attributes the spend to the correct chart of accounts and enables further categorization via tracking categories which can represent departments and locations.

### [Push any expenses easily](/expenses/sync-process/expense-transactions)

Everyday purchases can be pushed to the SMB's accounting platform where they are represented with an expense. Sync for Expenses also enables SMB users to push attachments for complete auditability.

### [Synchronize and map expenses with control](/expenses/sync-process/sync-process-explained)

Once a categorized expense has been pushed, a sync can be initiated. The sync processes the expenses and maps them into the format required by the accounting platform.


### [Create expense-transactions datasets](expense-transactions)

After the company has categorized their expenses using the mapping options, you can create expense-transaction datasets, in the response you will receive a `datasetId`.

```http title="Create expense dataset"
POST https://api.codat.io/companies/{companyId}/sync/expenses/expense-transactions
```

### [Initiate sync](syncing-expenses)

You can then initiate the sync process for multiple datasets by making an API request to the [sync endpoint](/sync-for-expenses-api#/operations/intiate-sync).

```http title="Initiate a sync of expense datasets"
POST  https://api.codat.io/companies/{companyId}/sync/expenses/syncs
```
A `syncId` will be returned to the response payload.

You can initiate multiple syncs at once. Codat will manage the queueing of these syncs and push the data to the accounting platform.

### Check sync status

There are three ways to check the status of the sync:

1.  Using webhooks and the `sync completed` rule

2.  Polling the [sync status endpoint](/sync-for-expenses-api#/operations/get-sync-by-id)

3.  Using the Sync Health Site for Sync for Expenses



### Check transactions

Once the sync has completed, you should check whether the transactions were successfully synced to the accounting package. This can be done via the [transaction metadata endpoint](/sync-for-expenses-api#/operations/get-sync-transactions)

```http title="Transaction status"
GET https://api.codat.io/companies/{companyId}/sync/expenses/syncs/{syncId}/transactions
```

### [Upload Receipts](uploading-receipts)

To post the attachment for each `transactionId` with a status of `Completed` and integrationType of `expense`, call the [attachment endpoint](/sync-for-expenses-api#/operations/upload-expense-attachment)

```http title="Upload receipt"
POST https://api.codat.io/companies/{companyId}/sync/expenses/syncs/{syncId}/transactions/{transactionId}/attachments
```


## Build with client libraries

Use our [comprehensive SDKs](/get-started/libraries) to kick-start and simplify your developers' journey automating the collection of your customers' financial data and making an assessment of a small business's financial health and performance. The SDKs come in multiple languages and provide sample requests and responses for the full range of lending and underwriting scenarios.

<ClientLibraries productName={"lending"} />

---

## Read next