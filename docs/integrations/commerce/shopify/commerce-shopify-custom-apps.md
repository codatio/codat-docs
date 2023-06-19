---
title: "Set up Shopify using custom apps"
description: "Learn how to set up the Shopify integration using the custom apps approach to merchant data connection"
sidebar_label: Custom apps
---

This article explains how to set up the Shopify integration using the _custom apps_ approach for enabling your merchants to connect and share their commerce data. 

Before you start, make sure you understand the merchant connection flow when using custom apps.

## Merchant connection flow using a custom app

When the integration is enabled with the _custom apps_ approach, merchants are directed to a Shopify store connection UI during the Codat Link flow.

_Shopify store connection UI_

![An image of the Shopify store connection UI](/img/integrations/commerce/shopify/7a2c893-shopify-code-connect-your-shopify-store-custom-apps.png)

The merchant is asked to create and install a custom app in their Shopify admin account and get its API access token.

The UI contains a link to the  <a class="external" href="https://help.shopify.com/en/manual/apps/custom-apps" target="_blank">Custom apps</a> page in the Shopify Help Center. The merchant needs to complete the following tasks in the Help article:

1. Enable custom app development from the Shopify admin

2. Create and install a custom app  

3. Create the app

4. Select API scopes

      The merchant must assign the following API scopes to their custom app:

   ```
   read_customers, read_inventory, read_orders, read_products, read_shopify_payments_disputes,
   read_shopify_payments_payouts
   ```

5. Install the app and get the API access tokens

Next, the merchant needs to:

1. Enter their store name in the **Shopify store name** field in the store connection UI.

2. In Shopify, copy the **Admin API access token** for the custom app that they created.

3. Enter the token in the **Shopify access token** field in the store connection UI. 

4. Click **Continue** to submit the store name and access token to Codat.

The Link success screen is displayed if the custom app was connected successfully.

## Overview of integration setup

To set up the Shopify integration using custom apps, you'll need to:

- Check the required permissions for merchants.
- Configure the Shopify integration without entering any credentials, and then enable it.
- Check the commerce sync settings
- Send Link URLs to your merchants.

## Required permissions for merchants

Merchants must have the following permissions to connect their Shopify store and share commerce data.

- The **Enable app development** permission (required to enable custom app development).

- The **Develop apps** permission.

- Any <a class="external" href="https://help.shopify.com/en/manual/your-account/staff-accounts/staff-permissions" target="_blank">staff permissions</a> which are required by the required API scopes (see step four in the merchant connection flow above).

## Configure the Shopify integration for use with custom apps

To configure the Shopify integration for use with the _custom apps_ approach:

1. In the Codat Portal, go to the <a class="external" href="https://app.codat.io/settings/integrations/commerce" target="blank">**Commerce integrations**</a> page.

2. Locate **Shopify** and select **Manage** to view the **Integration settings** page.

3. Leave the **App URL**, **Client ID**, and **Client secret** fields blank.

4. Leave the **Has request to read all orders** toggle switched off.

   :::note Orders pulled by default 
   All orders are available to pull from Shopify by default when using the custom apps connection method.
   :::

5. Click **Save**.

6. Enable the integration by setting the toggle to **Enabled**.

If the integration was enabled successfully, the **Shopify Custom App enabled** message is displayed at the top right:

![](/img/integrations/commerce/shopify/73719b7-shopify-custom-apps-enabled-toast.png)

## Check the commerce sync settings

All commerce data types must be enabled before you can pull commerce transactions from Shopify to Codat. Follow the steps in [Commerce sync settings](/integrations/commerce/commerce-sync-settings); you only need to do this once.

## Next steps

[Test your Shopify integration](/integrations/commerce/shopify/test-shopify) before sending Link URLs to merchants.