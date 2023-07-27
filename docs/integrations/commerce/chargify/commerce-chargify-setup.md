---
title: "Set up the Maxio integration"
description: "Explore our API integration with Maxio"
sidebar_label: Setup
---

Set up the [Maxio](/integrations/commerce/chargify/commerce-chargify) integration to retrieve recurring billing and subscriptions data from your SMB customers.

Before you can use the integration, your SMB customers (merchants who use Maxio) need to retrieve their secure API credentials from their Maxio account and enter them in [Link](/auth-flow/overview). Maxio does not require any global credentials for accessing the API.

To start pulling data from Chargebee:
- [ ] Enable the Chargebee integration
- [ ] Create companies in Codat and then share the Link URLs with your SMB customers
- [ ] Ask you customer to connect their Chargebee account to Codat

## Enable the Maxio integration

1. In the Codat Portal, go to the <a className="external" href="https://app.codat.io/settings/integrations/commerce" target="blank">**Commerce integrations**</a> page.
2. Locate **Maxio** and click the toggle to enable the integration.

You can also click **Manage** to view the integration's settings page, and then enable the integration from there.

## Create a company and share the Link URL with your SMB customers

:::note Options for SMB authentication

Using Link for SMB authentication is optional. You can also build your own authentication flow using the Codat API (the platform key for Maxio is required).
:::

In the <a className="external" href="https://app.codat.io" target="_blank">Codat Portal</a>:

1. Click **Companies > New company**.
2. In the **Add new company** dialog, enter a name for the company, then click **Add**. The Link URL is displayed.
3. Provide the Link URL to your SMB customers.

## SMB customer: Connects their Maxio account to Codat

Your SMB customer connects their Maxio account to Codat using Link. To authenticate with Codat, they get their _API Key_ from Maxio.

For help with this procedure, see <a className="external" href="https://maxio-chargify.zendesk.com/hc/en-us/articles/5405281550477#api" target="_blank">API Keys</a> in the Maxio Help centre.

Your SMB customer performs the following steps:

1. Opens the Link URL in their browser.

2. On the Commerce step in Link, they select the **Maxio** tile, then click **Next**.

3. Reviews the requested permissions on the **Connect to Maxio** page, then clicks **Next**.

   The **Your Maxio credentials** page is displayed.

   ![Your Maxio credentials](/img/old/66cdc91-your-chargify-credentials-final-masked.png "The Your Maxio credentials page")

4. Opens a new browser tab, visits <a className="external" href="https://app.chargify.com/" target="_blank">app.chargify.com</a>, and signs in to their Maxio account.

5. In the side panel, clicks **Config** then **Integrations**.

6. Clicks **API Keys** to view all API keys.

7. Enters the API key in the **Your Maxio credentials** page in Link. The API key must have admin permissions enabled.

8. Clicks **Continue**.

9. If the data connection was successful, they click **Finish** to close Link.

Your SMB customer has now connected their Maxio account to Codat.
