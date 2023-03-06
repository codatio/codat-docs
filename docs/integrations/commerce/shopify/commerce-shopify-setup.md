---
title: "Set up Shopify using public apps"
description: "Learn how to set up the Shopify integration using the public apps approach to merchant data connection"
createdAt: "2021-01-14T16:41:39.945Z"
updatedAt: "2023-01-06T16:44:14.501Z"
---

Set up the Shopify integration to retrieve commerce data from customers who sell their products on Shopify's ecommerce platform.

This article explains how to set up the Shopify integration using the _public apps_ approach.

## Before you begin

Before setting up the integration, make sure that you:

- Understand [how public apps work](/integrations/commerce/shopify/commerce-shopify#about-public-apps)
- Build an app that meets the [Requirements for public apps](/integrations/commerce/shopify/commerce-shopify-requirements-public-apps)

## Summary

Perform the following tasks in Shopify and the Codat Portal:

- [Create a Shopify app](/integrations/commerce/shopify/commerce-shopify-setup#create-a-shopify-app)
- [Submit your app to Shopify for approval](/integrations/commerce/shopify/commerce-shopify-setup#submit-your-app-to-shopify-for-approval)
- [Add your app's credentials to the Shopify integration](/integrations/commerce/shopify/commerce-shopify-setup#add-your-apps-credentials-to-the-shopify-integration)
- [Enable the Shopify integration](/integrations/commerce/shopify/commerce-shopify-setup#enable-the-shopify-integration)
- [Check the commerce sync settings](/integrations/commerce/shopify/commerce-shopify-setup#check-the-commerce-sync-settings)

## Create a Shopify public app

When the app is created you can view the secure app credentials.

1. Log in to the [Shopify Partners](https://developers.shopify.com/) site using your Shopify partner account credentials.

   :::note Shopify partner account
   [Create a partner account](https://partners.shopify.com/signup/developer) if you don't already have one.
   :::

2. In the side panel, click **Apps**.
3. On the **Apps** page, click **Create app**.
4. In the **Use Shopify Partners** box, click **Create app manually**.
5. On the **Create an app manually** page, enter the requested information:
   - **App name:** Enter a name for your app. Do not use _Shopify_ as part of the app name.
   - **App URL:** Enter a URL for your app. Do not use _Shopify_ as part of the URL. Use the same URL when you submit your app to Shopify for review in the next procedure.
   - **Allowed redirection URL(s):** Enter `https://commerceintegration.codat.io/oauth/callback`
6. Click **Create app**. Your app is created and the app page is displayed.
7. In the side panel, click **App setup** to view the app's configuration settings.
8. Optional: On the **App setup** page, if you need to access over 60 days' of orders, do the following:
   1. In the **Read all orders** box, click **Request access**.
   2. Enter the details requested in the dialog, then submit your request to Shopify.
9. In the **GDPR mandatory webhooks** section, enter the following Codat webhook URLs:
   - **Customer data request endpoint:** `https://commerceintegration.codat.io/webhooks/customer/request`
   - **Customer data erasure endpoint:** `https://commerceintegration.codat.io/webhooks/customer/redact`
   - **Shop data erasure endpoint:** `https://commerceintegration.codat.io/webhooks/shop/redact`
10. Click the **Save** button that appears at the top of the page.

Your app's **API key** and **API secret key** are shown in the **App credentials** section of the App setup page. You'll need these when you [add your app's credentials to the integration](/integrations/commerce/shopify/commerce-shopify-setup#add-your-apps-credentials-to-the-shopify-integration).

## Submit your app to Shopify for approval

Your public app must be approved by Shopify before you can use the integration with a Production Store. The review and approval process might take up to two weeks.

In the Shopify Partners site:

1. Click the name of your app.
2. In the side panel, click **Distribution**.
3. On the **Distribution** page, click **Choose Shopify App Store** then confirm your selection in the dialog that appears.

<img src="/img/old/386725f-choose-shopify-app-store.png" />

4. Click **Create listing**.
5. Select your Shopify partner account at the authentication prompt. The **App listing** page for your app opens.
6. Click **App visibility**.
7. In the **Manage app visibility** dialog, select **Unlisted**, unless you want your app to be visible in the public Shopify App Store, then click **Save**.

   :::note Differences between listed and unlisted apps

   You can choose whether to make your Shopify app _listed_ (fully visible in the Shopify App Store) or _unlisted_ (it will not appear in Shopify App Store search engines or results). Both types of apps have a public Shopify App Store URL.

   :::

8. Click **Start listing**. The **English listing** page is displayed.
9. Enter all the required listing information and then save the form.
10. On the **App listing** page, click the **Submit app** button at the top right. The button is not available until you've completed all the required listing information.

Your app is sent to Shopify for review and approval.

## Add your app's credentials to the Shopify integration

In the Codat Portal, add the secure credentials for your Shopify app to the integration.

1. On the navigation bar, select **Settings > Integrations > Commerce**.

2. Click **Set up** next to the **Shopify** integration.

   The **Integration settings** page is displayed.

3. Enter your app's credentials from Shopify (to find these, see [Create a Shopify public app](/integrations/commerce/shopify/commerce-shopify-setup#create-a-shopify-public-app)).
   - For **Client ID**, enter the **API key** from Shopify.
   - For **Client secret**, enter the **API secret key** from Shopify.

4. If you requested access to over 60 days of orders and your access was approved, turn on **Has request to read all orders**. Otherwise leave this setting turned off.

   ![Shopify integration settings](/img/integrations/commerce/shopify/76d5c94-Shopify_integration_settings.png "The 'Has request to read all orders' checkbox on the Shopify integration settings page.")

5. Under **Access to company data**, configure the permitted sync frequency for the integration. Select **Allow one-off data sync…** or **Allow continuous data sync**.

6. Click **Save**.

## Enable the Shopify integration

1. In the Codat Portal, go to the <a className="external" href="https://app.codat.io/settings/integrations/commerce" target="blank">**Commerce integrations**</a> page.
2. Locate **Shopify** and click the toggle to enable the integration.

You can also click **Manage** to view the integration's settings page, and then enable the integration from there.

## Check the commerce sync settings

All commerce data types must be enabled before you can pull commerce transactions from Shopify to Codat. Follow the steps in [Commerce sync settings](/integrations/commerce/commerce-sync-settings); you only need to do this once.

## Next steps

[Test your Shopify integration](test-shopify) before sending Link URLs to merchants.