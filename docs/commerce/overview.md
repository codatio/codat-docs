---
title: "Sync for Commerce overview"
description: "Embedded accounting integrations for PoS and eCommerce platforms"
sidebar_label: Sync for Commerce
displayed_sidebar: commerce
hide_title: true
hide_description: true
hide_table_of_contents: true
banner_title: Sync for Commerce
banner_class: commerce
banner_icon: "/img/logos/products/logo_sfc_clear.svg"
banner_image: "/img/banners/sfc-charts.png"
banner_text: "Embedded accounting integrations for Point of Sale, Payment, and eCommerce platforms"
video_url: "https://www.youtube.com/embed/4zLgo0iP6MI"
video_text: What is Sync for Commerce?
---

import {IntegrationsList} from '@components/global/Integrations'
import {sfcIntegrations} from '@components/global/Integrations/integrations'

Accounting for sales is a major pain point for merchants. It usually involves them manually replicating data from Point of Sale (POS), Payment, and eCommerce platforms in their accounting software. This is often done via multiple manual bulk data downloads and data manipulation in spreadsheets and in the software.

The labor-intensive nature of this work means it is typically done infrequently, leaving many merchants unable to leverage their accounting software to understand their business’s performance.

**Sync for Commerce automatically replicates and reconciles sales data from a merchant’s source PoS, Payments, and eCommerce systems into their accounting software. This eliminates manual processing by merchants and transforms their ability to run and grow their business.**

We do all the heavy lifting, integrating with merchant’s systems and mapping their data according to accounting best practices. As a result, it shows up in their accounting software in a way that is useful to them and their bookkeeper or accountant.

## Why use Sync for Commerce?

<ul className="card-container col-2">
<li className="card">
    <div class="header">
        <img src="/img/wp-icons/copy-feature-bullet.svg"
            class="mini-icon"/>
        <h3>Commerce and accounting expertise</h3>
    </div>
    <p>
       We translate sales and payment data into the right set of accounting entries. Sales, payments, gift cards, and more – Sync for Commerce handles all of these so you don’t have to.
    </p>
</li>

<li className="card">
    <div class="header">
        <img src="/img/wp-icons/copy-feature-bullet.svg"
            class="mini-icon"/>
        <h3>Fast, simple integration</h3>
    </div>
    <p>
        We integrate with the source sales data systems (POS, Payments and eCommerce) and with accounting software.
    </p>
</li>

<li className="card">
    <div class="header">
        <img src="/img/wp-icons/copy-feature-bullet.svg"
            class="mini-icon"/>
        <h3>Configurability</h3>
    </div>
    <p>
        All businesses work differently. We enable your merchants and their accountants to easily configure how their sales data should reflect in their accounting software to suit their needs.
    </p>
</li>

<li className="card">
    <div class="header">
        <img src="/img/wp-icons/copy-feature-bullet.svg"
            class="mini-icon"/>
        <h3>Ongoing sales data synchronization</h3>
    </div>
    <p>
        Automatic daily synchronization of data means your merchants' accounting software is always up to date with latest sales data.
    </p>
</li>

<li className="card">
    <div class="header">
        <img src="/img/wp-icons/copy-feature-bullet.svg"
            class="mini-icon"/>
        <h3>Real-world resilience</h3>
    </div>
    <p>
       We’ve handled sales data for tens of thousands of merchants over many years. As a result, we evolved Sync for Commerce to handle thousands of different scenarios that occur when operating a small business.
    </p>
</li>

<li className="card">
    <div class="header">
        <img src="/img/wp-icons/copy-feature-bullet.svg"
            class="mini-icon"/>
        <h3>Observability</h3>
    </div>
    <p>
       Nobody likes surprises when they’re working to close their books. Sync for Commerce's dashboard provides the merchant and your support team with real-time alerts when issues occur in the data sync process. 
    </p>
</li>
</ul>

## Supported integrations

<br/>

<IntegrationsList integrations={sfcIntegrations}/>

## How does Sync for Commerce work?

### 1. [Product setup](/commerce/setup)

To get started, Codat will deploy a small connector to your API that allows us to connect to your customers' data. Our Solutions Engineer will work with you to make this happen, usually completing within a few weeks.

If you don’t have an API already, our Professional Services team can help you to identify an alternative mechanism to connect to your customers' data, or even build you an API.

You will need to implement simple functionality that allows a merchant to set up their sales data synchronization, select the systems they would like to connect, and redirect users to Codat’s Sync configuration user interface.

You can customize branding, appearance, and content of the Sync configuration UI so it integrates seamlessly into your software.

### 2. [Merchant configuration](/commerce/merchant-configuration)

Once the access is authorized, your customers can determine how their sales data synchronization should work using the Sync configuration flow.

Once your customer lands on the Sync configuration flow UI, we will take them through an onboarding journey, allowing them to:

- Authorize access to the systems we need to connect to synchronise sales data.
- Tell us how they would like their sales data represented in their accounting software.

In the background, we will retrieve some basic information from their connected systems to allow us to customize Sync for Commerce to their specific PoS, Payments, eCommerce or accounting software characteristics.

### 3. [Data synchronization](/commerce/data-synchronization)

Once the Sync configuration is completed, we automatically synchronize sales data after the end of each calendar day. You can also trigger a sync at any time using our API.

### 4. Ongoing support

A user can update their configuration, stop or restart their automated sales data synchronization or revoke access to their systems at any time by revisiting the Sync configuration UI. They can also use it to view completed syncs and any errors that may have occurred.

Your support team can also view each merchant’s syncs and troubleshoot any errors using the Sync for Commerce Health site, accessed through the [Codat Portal](https://app.codat.io).

---

## Read next

- [Set up Sync for Commerce](/commerce/setup)