---
title: "Overview"
description: "Connect to your SMB customers' banking data through our partner providers"
sidebar_label: Banking
displayed_sidebar: integrationsBanking
---

import { IntegrationsList } from "@components/global/Integrations";

Our integrations with <a class="external" href="https://plaid.com/" target="_blank">Plaid</a>, <a  class="external" href="https://truelayer.com/" target="_blank">TrueLayer</a>, and <a class="external" href="https://basiq.io/" target="_blank">Basiq</a> enable you to retrieve up-to-date account and transaction data from your SMB customers' banks. 

<IntegrationsList sourceType="banking"/>

To view and compare banking data coverage by integration, use the <a  class="external" href="https://knowledge.codat.io/supported-features/banking?view=tab-by-data-type&integrationKey=evqv&dataType=bankAccounts" target="_blank">Data coverage explorer</a> and select the **Banking API** product.

## Banking sandbox

For testing and evaluation, you can use our Banking Sandbox integration to explore the data you can work with. This doesn't need any setup apart from enabling the integration itself.

## Access additional banking data through proxy

You can [access additional banking data types](/integrations/banking/proxy-access-banking-data) through a proxy.

## Set up a banking integration

You can choose to enable:

- [Plaid](/integrations/banking/plaid/banking-plaid)
- [TrueLayer](/integrations/banking/truelayer/banking-truelayer)
- [Basiq](/integrations/banking/basiq/banking-basiq-setup) (AU and NZ clients only)

You'll need to register with your chosen provider before you can access banking data from their platform via our integration.

## Banking integrations in the authorization flow

You should only enable one of the banking integrations at a time. This ensures optimal use of Hosted or Embedded Link, as each integration is represented differently in the auth flow. Combining multiple approaches may confuse users and lead to reduced auth completion rates.

- **Plaid** integration appears pre-selected for the user, and they are able to select the correct bank account once they continue linking to Plaid. 
- **TrueLayer** integration appears in the auth flow as a set of banks that it supports, ready for the user to choose. 
- **Basiq** integration appears in the auth flow as an integration tile, and the bank account selection happens when the flow directs to Basiq.

## Platform keys

Each integration has a unique 4-character key that identifies it in our APIs. For reference, a list of all banking integration platform keys can be found below.

:::note TrueLayer

TrueLayer works differently to our other integrations, and each banking provider has its own platform key. These have not yet been included in the table below.
:::

<iframe
  src="https://knowledge.codat.io/embeds/integrations/platform-keys?integrationType=Banking"
  frameborder="0"
  style={{ top: 0, left: 0, background: "white", borderRadius: "4px", overflow: "hidden", width: "100%", height: "305px" }}
></iframe>