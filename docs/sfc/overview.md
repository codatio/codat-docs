---
title: "Sync for Commerce overview"
description: "Embedded accounting integrations for PoS and eCommerce platforms."
# sidebar_label: Sync for Commerce
# displayed_sidebar: sfc
# hide_title: true
# hide_description: true
# hide_table_of_contents: true
# banner_title: Sync for Commerce
# banner_class: sfc
# banner_icon: "/logos/products-clear/sfc.svg"
# banner_image: "/img/banners/sfc-charts.png"
# banner_text: "Embedded accounting integrations for PoS and eCommerce platforms."
---

**Building to lots of different APIs does not scale. With Sync for Commerce, you can send a merchant's data to their accounting platform without worrying about which one they use.**

Sync for Commerce allows you to push merchants' data from your ecommerce or point-of-sale (POS) platform into each merchant's accounting platform.

We do all the heavy lifting, mapping your merchants' data according to accounting best-practices and features available within each accounting platform.

Your merchants can seamlessly reconcile their ecommerce and accounting data, allowing them to spend more time on growing their business.

:::caution Beta testing

Sync for Commerce is in beta. If you are interested in building with Sync for Commerce, please [get in touch](mailto:sync-for-commerce@codat.io).
:::

## Why use Sync for Commerce?

<ul className="card-container col-2">
    <li className="card">
        <div class="header">
            <img src="/img/wp-icons/copy-feature-bullet.svg"
                class="mini-icon"/>
            <h3>Standardization</h3>
        </div>
        <p>
            We handle the mapping and standardization of ecommerce and POS data to different accounting platforms via a single integration.
        </p>
    </li>

<li className="card">
        <div class="header">
            <img src="/img/wp-icons/copy-feature-bullet.svg"
                class="mini-icon"/>
            <h3>Configurability</h3>
        </div>
        <p>
            We provide flexible configuration, allows merchants to choose exactly how their data will be synchronized.
        </p>
</li>

   <li className="card">
        <div class="header">
            <img src="/img/wp-icons/copy-feature-bullet.svg"
                class="mini-icon"/>
            <h3>Ongoing synchronization</h3>
        </div>
        <p>
           Enable the ongoing synchronization of data, including sales, refunds, and payments, aggregated on a daily basis.
        </p>
    </li>

   <li className="card">
        <div class="header">
            <img src="/img/wp-icons/copy-feature-bullet.svg"
                class="mini-icon"/>
            <h3>Fast, simple integration</h3>
        </div>
        <p>
           We meet your merchants' core needs, saving them time and effort when reconciling data.
        </p>
    </li>
</ul>

## How does Sync for Commerce work?

### 1. [Accounting platform selection](/sfc/build-with-sync-for-commerce/sync-platform-selection)

Your merchant will need to select and authorize their accounting platform through the Platform selection flow.

1. A merchant has to authorize access to their accounting platform. They are presented with a UI that features a list of accounting platforms that they can connect to.

2. The merchant selects one of them and is directed to their accounting platform UI where they authorize access to their accounting data.

### 2. [Merchant configuration](/sfc/build-with-sync-for-commerce/implementing-codats-no-code-merchant-configuration)

Once the access is authorized, the merchant can set how the synchronization should work through the Sync configuration flow.

1. A Codat Company is created, and an accounting Connection is established.
2. Codat automatically pulls all the [accounting data required to enable the merchant configuration](/sfc/build-with-sync-for-commerce/sync-for-commerce-prerequisites).
3. A configuration JSON document is submitted to Codat. It includes information about how the data will be mapped to the accounting platform.

   The configuration is based on the options selected by the merchant as they complete the Sync Flow.

### 3. Data pushing

After the configuration is successfully submitted, you can start pushing the merchant’s data to Codat. Once the data is received, we handle its grouping and mapping according to the submitted configuration.

Next, the data is queued to be sent to the merchant’s accounting platform.

We continue handling the data that’s pushed to us automatically so that merchants can enjoy effortless and seamless daily reconciliation of their commerce data.

:::info Successfully synced data
To see how the data displays in the accounting platform after a successful synchronization via Sync for Commerce, read our [Mapping specifications](/sfc/mapping-specifications/overview).
:::

Validation and error messages provide the merchant with detailed instructions on how to resolve common issues. Your support teams investigate any issues with the merchant settings using Codat’s Sync Health site.
