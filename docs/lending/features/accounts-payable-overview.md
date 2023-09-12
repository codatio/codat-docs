---
title: "Accounts payable overview"
sidebar_label: "Accounts payable"
description: "Get a detailed, real-time view of supplier invoices to assess creditor risk"
---

import Products from "@components/global/Products";
import { IntegrationsList } from "@components/global/Integrations";
import { accountingIntegrations } from "@components/global/Integrations/integrations";

Our **accounts payable** feature offers a thorough breakdown of a borrower's creditors ledger sourced from their accounting platform. You can examine the ledger in its entirety or delve into specific supplier histories, enabling full automation of the payables financing process.

## Use cases

Common uses of our accounts payable feature include:

- **Digital data collection:** get an ongoing feed of supplier invoices.

- **Supplier risk analysis:** gain insights into the borrower's relationship with the supplier including a fully history of bills, payment behaviour, and discounts provided on previous bills. 

## Supported feature components

<iframe
  src="https://docs.google.com/spreadsheets/d/e/2PACX-1vQXnkKj3esBrzpD--pKV_tVTfTHxDPpxz8BBFe2SjcNt6kB2-qcTFDxEye3kxHWu91mYRzLoCjYfpHH/pubhtml?gid=1075181493&amp;single=true&amp;widget=true&amp;headers=false"
  frameborder="0"
  style={{ top: 0, left: 0, width: "100%", height: "300px" }}
></iframe>

## Supported outputs

You can retrieve the data pulled and enriched by the feature by [downloading a report in an Excel format](/lending/features/excel-download-overview) or calling the **accounts payable** [endpoints of our API](/lending-api#/).

## Get started

Once you have the Lending API enabled, configure your instance to work with our accounts payable feature. 

#### Configure data sources

Follow the respective guides to set up and enable accounting integrations that will serve as a data source for the feature:

<IntegrationsList integrations={accountingIntegrations} />

#### Enable data types and sync schedule

See how to [enable data types](/core-concepts/data-type-settings#override-the-default-sync-settings) and ensure the following data types have been switched on:

- Suppliers `suppliers`
- Bills `bills`
- Bill payments `billPayments`
- Bill credit notes `billCreditNotes`

Configure the solution to refresh data when you need it by [setting a synchronization frequency](/core-concepts/data-type-settings#choose-a-synchronization-frequency). We recommend setting it to a daily or monthly sync.

#### Configure webhooks

We recommend you configure the following [webhooks](/using-the-api/webhooks/core-rules-types) to manage your data pipelines. These webhooks send a notification for each `dataType` separately.

- [Dataset status has changed to an error state](/using-the-api/webhooks/core-rules-types#dataset-status-has-changed-to-an-error-state)  

  If you receive a notification from this webhook, it means an issue occured when syncing the specified data type. Resolve the issue and [initiate the sync](/using-the-api/queueing-data-syncs#refresh-data) for this dataset again. 
 
- [Dataset data changed](/using-the-api/webhooks/core-rules-types#dataset-data-changed)  

  If you receive a notification from this webhook, it means data has been updated for the specified data type. This can include new, updated or deleted data. You should then refresh the data in your platform.

---

## Read next
- [Company info](/lending/features/company-info-overview)