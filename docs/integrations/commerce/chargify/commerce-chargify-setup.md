---
title: "Set up the Chargify integration"
description: "Explore our API integration with Chargify"
createdAt: "2022-08-08T13:28:16.586Z"
updatedAt: "2023-01-06T16:35:29.843Z"
---

Set up the [Chargify](/integrations/commerce/chargify/commerce-chargify) integration to retrieve recurring billing and subscriptions data from your SMB customers.

Before you can use the integration, your SMB customers (merchants who use Chargify) need to retrieve their secure API credentials from their Chargify account and enter them in [Link](/auth-flow/overview). Chargify does not require any global credentials for accessing the API.

To set up the integration, you perform these tasks:

- Enable the Chargify integration
- Create companies in Codat and then share the Link URL with your SMB customers

Then, the SMB customer performs this task:

- Connects their Chargify account to Codat

## Enable the Chargify integration

1. In the Codat Portal, go to the <a className="external" href="https://app.codat.io/settings/integrations/commerce" target="blank">**Commerce integrations**</a> page.
2. Locate **Chargify** and click the toggle to enable the integration.

You can also click **Manage** to view the integration's settings page, and then enable the integration from there.

## Create a company and share the Link URL with your SMB customers

:::note Options for SMB authentication

Using Link for SMB authentication is optional. You can also build your own authentication flow using the Codat API (the platform key for Chargify is required).
:::

In the <a className="external" href="https://app.codat.io" target="_blank">Codat Portal</a>:

1. Click **Companies > New company**.
2. In the **Add new company** dialog, enter a name for the company, then click **Add**. The Link URL is displayed.
3. Provide the Link URL to your SMB customers.

## SMB customer: Connects their Chargify account to Codat

Your SMB customer connects their Chargify account to Codat using Link. To authenticate with Codat, they get their _API Key_ from Chargify.

For help with this procedure, see <a className="external" href="https://maxio-chargify.zendesk.com/hc/en-us/articles/5405281550477#api" target="_blank">API Keys</a> in the Chargify Help centre.

Your SMB customer performs the following steps:

1. Opens the Link URL in their browser.

2. On the Commerce step in Link, they select the **Chargify** tile, then click **Next**.

3. Reviews the requested permissions on the **Connect to Chargify** page, then clicks **Next**.

   The **Your Chargify credentials** page is displayed.

   ![Your Chargify credentials](/img/old/66cdc91-your-chargify-credentials-final-masked.png "The Your Chargify credentials page")

4. Opens a new browser tab, visits <a className="external" href="https://app.chargify.com/" target="_blank">app.chargify.com</a>, and signs in to their Chargify account.

5. In the side panel, clicks **Config** then **Integrations**.

6. Clicks **API Keys** to view all API keys.

7. Enters the API key in the **Your Chargify credentials** page in Link. The API key must have admin permissions enabled.

8. Clicks **Continue**.

9. If the data connection was successful, they click **Finish** to close Link.

Your SMB customer has now connected their Chargify account to Codat.
