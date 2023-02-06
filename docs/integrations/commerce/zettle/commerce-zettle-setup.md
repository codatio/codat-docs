---
title: "Set up the Zettle integration"
description: "Explore our API integration with Zettle"
createdAt: "2021-01-25T14:14:47.846Z"
updatedAt: "2023-01-06T17:01:17.148Z"
---

Before you can access commerce data from customers using Zettle, you need to set up a live integration. You'll need to:

- Sign in to the [Codat Portal](https://app.codat.io/).
- Create an app in the <a className="external" href="https://www.izettle.com/gb/developer" target="_blank">Zettle developer portal</a> and retrieve your secure credentials (API key and secret).
- Add your secure credentials to the Codat Portal and enable your Zettle integration.
- Check your sync settings.

To use the integration, you must be located in a market that is supported by Zettle.

## Create an app and retrieve your secure credentials

:::note Developer account details

- If you already have a Zettle developer account, have your account details to hand.

- If you don't, sign up to the <a href="https://www.izettle.com/gb/developer" target="_blank"> Zettle developer portal</a> before you start to create your application.
  :::

1. Go to the <a className="external" href="https://www.izettle.com/gb/developer" target="_blank">Zettle developer portal</a> and log in to your account.
2. Click **Create a new app** and go to Public API credentials.
3. Fill in the required details. In the OAuth Redirect URLs box, paste the following: `https://izettle.codat.io/oauth/callback`
4. Click **Get credentials** to save your changes. You'll be taken to the Your API credentials page with Client ID and secret generated. Keep this page open so you can retrieve your API keys in the next step.

## Add your secure credentials to the Codat Portal and enable your Zettle integration

1. Sign in to the Codat Portal.
2. On the navigation bar, select **Settings > Integrations > Commerce**.
3. Find **Zettle**, then select **Set up** to view the **Integration settings** page.
4. From the **API keys** page on the Zettle developer portal, copy and paste:

- **Client ID** value into **Client Key**
- **Client secret** value into **Client Secret**.

5. In the Codat Portal, click **Save**.

## Enable the Zettle integration

1. In the Codat Portal, go to the <a className="external" href="https://app.codat.io/settings/integrations/commerce" target="blank">**Commerce integrations**</a> page.
2. Locate **Zettle** and click the toggle to enable the integration.

You can also click **Manage** to view the integration's settings page, and then enable the integration from there.

## Check your sync settings in the Codat Portal

If this is your first commerce integration, update your [data type settings](/commerce-sync-settings) to enable commerce data types.

You're now ready to [set up companies](/portal-managing-companies#add-a-new-company) for your customers in the Codat Portal.
