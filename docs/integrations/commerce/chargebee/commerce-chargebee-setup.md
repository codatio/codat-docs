---
title: "Set up the Chargebee integration"
description: "Explore our API integration with Chargebee"
createdAt: "2022-08-02T16:15:07.583Z"
updatedAt: "2023-01-06T16:34:35.590Z"
---

Set up the [Chargebee](https://docs.codat.io/docs/commerce-chargebee) integration to retrieve recurring billing and subscriptions data from your SMB customers.

Before you can use the integration, your SMB customers (merchants who use Chargebee) need to retrieve their secure API credentials from their Chargebee account and enter them in [Link](https://docs.codat.io/docs/auth-flow). Chargebee does not require any global credentials for accessing the API.

To set up the integration, you perform these tasks:

- Enable the Chargebee integration
- Create companies in Codat and then share the Link URLs with your SMB customers

Next, the SMB customer performs this task:

- Connects their Chargebee account to Codat

## Enable the Chargebee integration

1. In the Codat Portal, go to the <a className="external" href="https://app.codat.io/settings/integrations/commerce" target="blank">**Commerce integrations**</a> page.
2. Locate **Chargebee** and click the toggle to enable the integration.

You can also click **Manage** to view the integration's settings page, and then enable the integration from there.

## Create a company and share the Link URL with your SMB customers

:::note Options for SMB authentication

Using Link for SMB authentication is optional. You can also build your own authentication flow using the Codat API (the platform key for Chargebee is required).
:::

In the <a className="external" href="https://app.codat.io" target="_blank">Codat Portal</a>:

1. Click **Companies > New company**.
2. In the **Add new company** dialog, enter a name for the company, then clicks **Add**. The Link URL is displayed.
3. Provide the Link URL to your SMB customers.

## SMB customer: Connects their Chargebee account to Codat

Your SMB customer connects their Chargebee account to Codat using Link. To authenticate with Codat, they need to get their _API Key_ from Chargebee.

For help with this procedure, see <a className="external" href="https://www.chargebee.com/docs/2.0/api_keys.html#creating-an-api-key" target="_blank">Creating an API key</a> in the Chargebee documentation.

Your SMB customer performs the following steps:

1. Opens the Link URL in their browser.

2. On the Commerce step in Link, they select the **Chargebee** tile, then clicks **Next**.

3. Reviews the requested permissions on the **Connect to Chargebee** page, then clicks **Next**.

   The **Your Chargebee credentials** page is displayed.

   ![Your Chargebee credentials](https://files.readme.io/678461b-your-chargebee-credentials-final-masked.png "The Your Chargebee credentials page")

4. Opens a new browser tab and signs in to their Chargebee account.

5. In the side panel, clicks **Settings** then clicks **Configure Chargebee**.

6. In the **API Keys and Webhooks** section, clicks **API Keys** to view their API key.

7. On the **Your Chargebee credentials** page, they enter the following details:

   - Chargebee site name. This is part of the URL, for example, `https://site-name.chargebee.com`.
   - Chargebee API key.

8. Clicks **Continue**.

9. If the data connection was successful, they click **Finish** to close Link.

Your SMB customer has now connected their Chargebee account to Codat.
