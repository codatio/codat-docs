---
title: "Overview"
description: "Connect to your SMB customers' banking data through our partner providers"
sidebar_label: Banking
displayed_sidebar: integrationsBanking
---

import { IntegrationsList } from "@components/Integrations";

Our integrations with <a class="external" href="https://plaid.com/" target="_blank">Plaid</a> and <a  class="external" href="https://truelayer.com/" target="_blank">TrueLayer</a> enable you to retrieve up-to-date account and transaction data from your SMB customers' banks.

<IntegrationsList sourceType="banking" />

## Banking sandbox

For testing and evaluation, you can use our Banking Sandbox integration to explore the data you can work with. This doesn't need any setup apart from enabling the integration itself.

## Access additional banking data through proxy

You can [access additional banking data types](/integrations/banking/proxy-access-banking-data) through a proxy.

## Set up a banking integration

You can choose to enable:

- [Plaid](/integrations/banking/plaid/banking-plaid)
- [TrueLayer](/integrations/banking/truelayer/banking-truelayer)

You'll need to register with your chosen provider before you can access banking data from their platform via our integration.

## Banking integrations in the authorization flow

You should only enable one of the banking integrations at a time. This ensures optimal use of Link, as each integration is represented differently in the auth flow. Combining multiple approaches may confuse users and lead to reduced auth completion rates.

- **Plaid** integration appears pre-selected for the user, and they are able to select the correct bank account once they continue linking to Plaid.
- **TrueLayer** integration appears in the auth flow as a set of banks that it supports, ready for the user to choose.

## Platform keys

Each integration has a unique 4-character key that identifies it in our APIs. For reference, a list of all banking integration platform keys can be found below:

| Platform name | Platform key |
| ------------- | ------------ |
| Plaid         | suuo         |
| TrueLayer     | upvr         |
