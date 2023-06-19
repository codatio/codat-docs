---
title: "TrueLayer"
description: "Learn about our TrueLayer integration"
sidebar_label: Overview
---

Our banking integration with <a  class="external" href="https://truelayer.com/" target="_blank">TrueLayer</a> lets you securely connect to and retrieve your SMB customers' banking data in a standardized format.

## Data type coverage

View the coverage of our TrueLayer integration in the <a className="external" href="https://knowledge.codat.io/supported-features/banking?view=tab-by-integration&integrationKey=evqv" target="_blank">Data coverage explorer</a>.

The following banking data is available through the integration:

- [Banking accounts](/banking-api#/schemas/banking-accounts)
- [Banking account balances](/banking-api#/schemas/banking-account-balances)
- [Banking transactions](/banking-api#/schemas/banking-transactions)
- [Banking transaction categories](/banking-api#/schemas/banking-transaction-categories)

Before you can set up the integration, you need to [register with TrueLayer](/integrations/banking/truelayer/register-for-truelayer) either directly or through Codat.

:::caution Data synced from TrueLayer might be limited

If over 5 minutes has elapsed since a company was linked to TrueLayer, then the integration only fetches the **previous 90 days' worth of data**. Otherwise, the integration fetches all data. 

We strongly advise you enable [fetch on first link](/core-concepts/data-type-settings#use-fetch-on-first-link) when using TrueLayer to ensure all data requested is fetched within the 5 minute period.

:::
