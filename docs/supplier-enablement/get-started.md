---
title: "Get started with Supplier Enablement"
sidebar_label: Get started
description: "Learn how we perform the initial setup for the Supplier Enablement product"
displayed_sidebar: supplierEnablement
---

import { IntegrationsList } from "@components/global/Integrations";
import { integrationsFilterSupplierEnablement } from "@components/global/Integrations/integrations";

## Enable Supplier Enablement

If you want to use our Supplier Enablement product, reach out to your account manager so that we can enable it for you and get you started. In the process, we will set up your Codat instance for you. 

Read on if you want to know more about the configuration we make on your behalf or change the settings yourself. 

## Configure Supplier Enablement

### Data sources

First, we need to set up and enable the integrations that will serve as a data source for the product. This will allow us to pull financial data from your customers' accounting platforms. 

To configure, navigate to **Settings > Integrations** in the <a href="https://app.codat.io" target="_blank">Codat Portal</a>. We provide guides with specific instructions for each integration. Click the tiles below to navigate to the relevant guide. 

<IntegrationsList filter={integrationsFilterSupplierEnablement} />

### Authorization flow

As another prerequisite to Codat pulling your customers' data, they will need to authorize your access to that data. 

To do so, Supplier Enablement uses [Link](/auth-flow/overview) - our conversion-optimized white-label authorization flow. It lets your clients share their supplier and spend data directly and securely from their ERP or accounting system in a few minutes.

We tailor the authorization journey to your business needs with a variety of UI settings:

* [Customize Link settings](/auth-flow/customize/customize-link)
* [Set up company branding](/auth-flow/customize/branding)

These branding settings will also apply to the [data request emails](/supplier-enablement/guides/manage-relationships) sent out by the [Relationship Manager Portal](https://banking-ui.codat.io/).

### Data types

Data types required for Supplier Enablement should be enabled by default when we activate the product for you. To check or change the settings, navigate to **Settings > Integrations > Data types** in the <a href="https://app.codat.io" target="_blank">Codat Portal</a>. 

Enable the [data types](/core-concepts/data-type-settings#override-the-default-sync-settings) required for Supplier Enablement and set them to `Fetch on first link`: 

| Data source | Data types                                                                                                                                                                     |
|-------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Accounting  | `bills`<br/> `billPayments`<br/> `company`<br/> `paymentMethods`<br/> `suppliers`|

Your bank analyst or relationship manager can then sync these data types manually any time they want to see the most up-to-date information. We describe the refresh process in our [Keep data fresh](/supplier-enablement/) user guide.

### Webhooks

Codat supports a range of webhook [event types](/using-the-api/webhooks/event-types) you can listen to that help you manage your data pipelines. Many of these events send a message for each data type separately.

For example, you may want to set up a webhook for the `NewCompanySynchronized` event. This will trigger when the data fully syncs for a newly created company, and you can inform the corresponding analyst that it's available to them. 

You may also benefit from listening to the `DataSyncCompleted` and `DataSyncStatusChangedToError` events depending on your internal needs and processes. 

In the <a href="https://app.codat.io" target="_blank">Codat Portal</a>, navigate to **Settings > Webhooks > Create consumer** and click **Add endpoint** to add a new [webhook consumer endpoint](/using-the-api/webhooks/overview). 

## Use Supplier Enablement

Before you can collect and analyze your SMB customer's data, you need to create a [company](../terms/company) that represents your customer in Codat. Your Bank Analyst or Relationship Manager can do so in the [Relationship Manager Portal](https://banking-ui.codat.io/).

They will use this Portal to do the following:

- View the companies and relationships they are responsible for.
- Create and onboard new companies.
- Request a company's accounts payable data and download the resulting reports.
- Synchronize the accounts payable data to ensure its freshness.

![An image of the Relationship Manager Portal user interface with five companies listed as examples](/img/supplier-enablement/0054-se-rm-portal.png)

When a company is created in the Relationship Manager Portal, it is created in the [Codat Portal](https://app.codat.io/) at the same time. If you already have some companies in the Codat Portal, they will also be available in the Relationship Manager to be assigned to an analyst.

To establish a connection to a data source and sync business data, your customer must grant you access. We request this access during the onboarding process. Once the connection is established, Codat will automatically retrieve data for the relevant data types set up to fetch on first link.

--- 

## Read next

The following user guides are available to share with your organization's Relationship Managers and Analysts:

- [Manage relationships](/supplier-enablement/guides/manage-relationships)
- [Check spend data](/supplier-enablement/guides/analyze-spend)
- [Keep data fresh](/supplier-enablement/guides/refresh-data)
