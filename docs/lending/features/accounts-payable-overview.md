---
title: "Accounts payable overview"
sidebar_label: "Accounts payable"
description: "Enhance underwriting precision with streamlined accounts payable insights"
---

import Products from "@components/global/Products";
import { IntegrationsList } from "@components/global/Integrations";
import { accountingIntegrations } from "@components/global/Integrations/integrations";

The **Accounts payable** feature offers a thorough breakdown of a borrower's creditors ledger sourced from their accounting platform. You can examine the ledger in its entirety or delve into specific supplier histories, enabling full automation of the payables financing process.

## Use cases

Common uses of the Accounts payable feature include:

- **Digital data collection:** Get an ongoing feed of supplier invoices.

- **Supplier risk analysis:** Gain insights into the borrower's relationship with the supplier including a fully history of bills, payment behaviour, and discounts provided on previous bills. 

## Supported feature components

<iframe
  src="https://docs.google.com/spreadsheets/d/e/2PACX-1vQXnkKj3esBrzpD--pKV_tVTfTHxDPpxz8BBFe2SjcNt6kB2-qcTFDxEye3kxHWu91mYRzLoCjYfpHH/pubhtml?gid=1075181493&amp;single=true&amp;widget=true&amp;headers=false"
  frameborder="0"
  style={{ top: 0, left: 0, width: "100%", height: "300px" }}
></iframe>

## Supported outputs

You can retrieve the data pulled and enriched by the feature by [downloading a report in an Excel format](/lending/features/excel-download-overview) or calling the **Accounts payable** [endpoints of our API](/lending-api#/).

## Get started

Once you have the Lending API enabled, configure your instance to work with the Accounts payable feature. 

#### Configure data sources

Follow the respective guides to set up and enable accounting integrations that will serve as a data source for the Accounts payable feature:

<br />

<IntegrationsList integrations={accountingIntegrations} />

#### Enable data types and sync schedule

See how to [enable data types](/core-concepts/data-type-settings#override-the-default-sync-settings) and ensure the following data types have been switched on:

- Suppliers `suppliers`
- Bills `bills`
- Bill payments `billPayments`
- Bill credit notes `billCreditNotes`

Configure the solution to refresh data when you need it by [setting a synchronization frequency](/core-concepts/data-type-settings#choose-a-synchronization-frequency). We recommend setting it to a daily or monthly sync.

---

## Read next
- [Excel download](/lending/features/excel-download-overview)