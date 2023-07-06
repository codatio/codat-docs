---
title: "Set up the PayPal Integration"
description: "Explore our API integration with PayPal"
sidebar_label: Setup
---

Before you can access your customers' commerce data from PayPal, you need to set up your integration.

:::caution

Before you begin, read the Provider requirements on the [PayPal](/integrations/commerce/paypal/commerce-paypal) page.
:::

You'll need to:

- Sign in to the [Codat Portal](https://app.codat.io/).
- Register as a Third Party Provider (TPP) to access PayPal’s X2SA API and request your sandbox credentials. PayPal will require you to provide them with either an eIDAS QWAC or OBWAC (i.e. an Open Banking certification)
- Add your secure credentials to the Codat Portal and enable your test PayPal integration.
- Check your sync settings.

## Register as a Third Party Provider and request your live credentials

1. Go to the <https://www.paypal.com/partnerexp/tppLanding/> and register as a Third Party Provider (TPP) for PayPal’s X2SA API
2. Enter `https://paypal.codat.io/oauth/callback` in the "Your return URL" field.
3. After submitting the form, your credentials (`Client ID` and `Client Secret`) are available to download. Note:  
   a) PayPay need to enable the credentials after they are created. **This may take a number of days; until this is completed by PayPal, you will not be able to access the PayPal X2SA API through Codat**.  
   b) You can contact PayPal for help at dl-pp-tpp@paypal.com

:::caution Keep your live credentials safe

Make sure you keep your live credentials safe; it is not normally possible to retrieve this information from PayPal again after it has been initially requested.
:::

## Add your app to the Codat Portal

1. Sign in to the [Codat Portal](https://app.codat.io/).
2. On the navigation bar, select **Settings > Integrations > Commerce**.
3. Find **PayPal**, then select **Set up** to view the **Integration settings** page.
4. Copy the `Client ID` and `Client Secret` values obtained from PayPal in the previous step and paste into the Client ID and Client Secret fields in the Codat Portal.
5. Select **Save**.

## Enable the PayPal integration

1. In the Codat Portal, go to the <a className="external" href="https://app.codat.io/settings/integrations/commerce" target="blank">**Commerce integrations**</a> page.
2. Locate **PayPal** and click the toggle to enable the integration.

You can also click **Manage** to view the integration's settings page, and then enable the integration from there.

## Check your sync settings in the Codat Portal

If this is your first commerce integration, update your [data type settings](/integrations/commerce/commerce-sync-settings) to enable commerce data types.
