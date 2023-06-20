---
title: Sync for Expenses overview
sidebar_label: Sync for Expenses
displayed_sidebar: sfe
hide_title: true
hide_description: true
hide_table_of_contents: true
description: Embedded accounting integrations for corporate card providers
tags: [overview, syncforexpense]
banner_title: Sync for Expenses
banner_class: sfe
banner_icon: "/logos/products-clear/sfe.svg"
banner_image: "/img/banners/sfe-flow.png"
banner_text: "Embedded accounting integrations for corporate card providers."
---

import {IntegrationsList} from '@components/global/Integrations'
import {sfeIntegrations} from '@components/global/Integrations/integrations'

<Head>
  <meta property="og:image" content="/img/sync-for-expenses/sfe-banner.png"/>
</Head>

# Overview

Sync for Expenses is an API and a set of supporting tools. It has been built to enable corporate card and expense management platforms to provide high-quality integrations with multiple accounting platforms through a standardized API.

[![Run in Postman](https://run.pstmn.io/button.svg)](https://god.gw.postman.com/run-collection/9514766-9427cfd1-d3f9-4857-b3f1-d488fb6de5a6?action=collection%2Ffork&collection-url=entityId%3D9514766-9427cfd1-d3f9-4857-b3f1-d488fb6de5a6%26entityType%3Dcollection%26workspaceId%3Dc6d087b0-fc80-4d14-a903-a9017e1b54e0)

## Compatible integrations

<br/>

<IntegrationsList integrations={sfeIntegrations}/>

## Features

<ul className="card-container col-3">
  <li className="card">
    <div class="header">
      <img
        src="/img/wp-icons/copy-feature-bullet.svg"
        class="mini-icon"
      />
      <h3>Standardised API</h3>
    </div>
    <p>
      The Sync for Expenses API is completely standardised with a datamodel based on expense card providers. 
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

### [Connect to your SMB's accounting platform](gettingstarted)

Codat handles authorization and linking to your SMB's accounting platform and takes into account intricate details such as rate limits.

### [Categorize and tag expenses](configandcategorize)

Expenses can be categorized according to your SMB's bookkeeping.

Sync for Expenses attributes the spend to the correct chart of accounts and enables further categorization via tracking categories which can represent departments and locations.

### [Push any expenses easily](sync-process/expense-transactions)

Everyday purchases can be pushed to the SMB's accounting platform where they are represented with an expense. Sync for Expenses also enables SMB users to push attachments for complete auditability.

### [Synchronize and map expenses with control](sync-process/sync-process-explained)

Once a categorized expense has been pushed, a sync can be initiated. The sync processes the expenses and maps them into the format required by the accounting platform.

