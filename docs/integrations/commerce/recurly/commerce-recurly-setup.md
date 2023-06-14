---
title: "Set up the Recurly integration"
description: "Explore our API integration with Recurly"
sidebar_label: Setup
---

Set up the [Recurly](/integrations/commerce/recurly/commerce-recurly) integration to retrieve recurring billing and subscriptions data from your SMB customers.

Before you can use the integration, your SMB customers (merchants who use Recurly) need to retrieve their secure API credentials from their Recurly account and enter them in [Link](/auth-flow/overview). Recurly does not require any global credentials for accessing the API.

To set up the integration, you perform these tasks:

- Enable the Recurly integration
- Create companies in Codat and then share the Link URL with your SMB customers

Next, the SMB customer performs this task:

- Connects their Recurly account to Codat

## Enable the Recurly integration

1. In the Codat Portal, go to the <a className="external" href="https://app.codat.io/settings/integrations/commerce" target="blank">**Commerce integrations**</a> page.
2. Locate **Recurly** and click the toggle to enable the integration.

You can also click **Manage** to view the integration's settings page, and then enable the integration from there.

## Create a company and share the Link URL with your SMB customers

:::note Options for SMB authentication

Using Link for SMB authentication is optional. You can also build your own authentication flow using the Codat API (the platform key for Recurly is required).
:::

In the <a className="external" href="https://app.codat.io" target="_blank">Codat Portal</a>:

1. Click **Companies > New company**.
2. In the **Add new company** dialog, enter a name for the company, then click **Add**. The Link URL is displayed.
3. Provide the Link URL to your SMB customers.

## SMB customer: Connects their Recurly account to Codat

Your SMB customer connects their Recurly account to Codat using Link. To authenticate with Codat, they need to get their _Private API key_ from Recurly.

For help with this procedure, see <a className="external" href="https://developers.recurly.com/api-v2/v2.29/index.html#section/Authentication" target="_blank">Authentication</a> in the Recurly documentation.

Your SMB customer performs the following steps:

1. Opens the Link URL in their browser.

2. On the Commerce step in Link , they select the **Recurly** tile, then click **Next**.

3. Reviews the requested permissions on the **Connect to Recurly** page, then clicks **Next**.

   The **Your Recurly API key** page is displayed.

   ![Your Recurly API key](/img/old/3df665f-your-recurly-api-key-masked.png "The Your Recurly API key page")

4. Opens a new browser tab, visits <a className="external" href="https://app.recurly.com/" target="_blank">app.recurly.com</a>, and signs in to their Recurly account.

5. In the side panel, clicks **Integrations** then **API Credentials**.

6. Clicks the eye icon to reveal the **Private API Key**.

7. Enters their key in the **Your Recurly API key** page.

8. Clicks **Continue**.

9. If the data connection was successful, they click **Finish** to close Link.

Your SMB customer has now connected their Recurly account to Codat.
