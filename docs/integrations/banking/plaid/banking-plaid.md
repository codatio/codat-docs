---
title: "Plaid"
description: "Learn about our Plaid integration"
sidebar_label: Overview
---
<p>
<a class="external" href="https://plaid.com/" target="_blank">
  Plaid
</a> is a third-party provider of banking services with connections to bank accounts
at over 11,000 financial institutions across the US, Canada, UK, and Europe. Plaid's
services are regulated in the UK by the Financial Conduct Authority (FCA). </p>

Our banking integration with Plaid lets you securely connect to and retrieve your SMB customers' banking data in a standardized format.

:::info Supported financial institutions

You'll automatically gain access to any new financial institutions that Plaid adds to their platform.
:::

## Data type coverage

View the coverage of our Plaid integration in the <a className="external" href="https://knowledge.codat.io/supported-features/banking?view=tab-by-integration&integrationKey=suuo" target="_blank">Data coverage explorer</a>.

The following banking data is available through the integration:

- [Banking accounts](/banking-api#/schemas/Account)
- [Banking account balances](/banking-api#/schemas/AccountBalance)
- [Banking transactions](/banking-api#/schemas/Transactions)
- [Banking transaction categories](/banking-api#/schemas/TransactionCategory)

:::tip Instant Auth and Instant Match

Within our Plaid integration, we support [Instant Auth](https://plaid.com/docs/auth/coverage/instant/#instant-auth), and enable the fallback to [Instant Match](https://plaid.com/docs/auth/coverage/instant/#instant-match) as standard where Instant Auth is not available. These functionalities provide credential-based login for almost 7,000 financial institutions.
:::

## Data mappings between Plaid and Codat

Plaid's pricing tiers give you access to specific _products_ from your configured banking data sources. Depending on what data types you wish to fetch from Codat's API, you will need to have certain Plaid products enabled and available for use within your Plaid account.

The following table shows the Plaid Products required for each of Codat's banking data types:

|Codat data type|Associated Plaid product|
|----|----|
|[Bank accounts](/banking-api#/schemas/Account)|Auth, Identity, Institution|
|[Bank transactions](/banking-api#/schemas/Transactions)|Transactions|
|[Bank account balances](/banking-api#/schemas/AccountBalance)|Asset Reports|
|[Bank Transaction Categories](/banking-api#/schemas/TransactionCategory)|N/A. These categories are Codat-provided categories powered by Codat's categorization model. This does not use the categories provided by Plaid.|

## Sync Settings for Plaid

Because Plaid charges per API call for some endpoints, we recommend syncing data for [Account balances](/banking-api#/schemas/AccountBalance) no more frequently than daily. You may also wish to only sync other data types on demand, rather than on a schedule to reduce associated costs.

:::info Proxy access

If you need to access additional Plaid products, you can [enable proxy access to additional banking data](/integrations/banking/proxy-access-banking-data).

:::
