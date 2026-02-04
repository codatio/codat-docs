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

The merchant is asked to create and install a custom app in their Shopify admin account and provide the store name, client ID, and client secret from the app.

The UI includes a **Find your Shopify credentials** section that guides the merchant through the process. For more detail, see the Shopify docs on <a class="external" href="https://help.shopify.com/en/manual/apps/custom-apps" target="_blank">Custom apps</a> (**Create a custom app** and **Install a custom app**) and <a class="external" href="https://shopify.dev/docs/apps/launch/distribution/select-distribution-method" target="_blank">Select a distribution method</a>. The merchant needs to complete the following steps.

### Create and configure the custom app

1. From your Shopify admin, go to **Settings** > **Apps**.

2. Click **Develop apps**.

3. Click **Build apps in Dev Dashboard**.

4. From your Dev Dashboard, click **Create app**.

5. In the **Start from Dev Dashboard** section, name your app, and then click **Create**.

6. Create a version for your app:
   - **App URL**: `https://shopify.dev/apps/default-app-home`
   - Uncheck **Embed app in Shopify admin**
   - In the **Access** section, enter these app scopes:
     ```
     read_customers, read_inventory, read_orders, read_products,
     read_shopify_payments_payouts, read_shopify_payments_disputes
     ```
   - Click **Release**
   - (Optional) Enter a version name and a version message
   - Click **Release**

### Select Custom distribution and install the app

7. Go to **App Home** > **Distribution** and click **Select distribution method**.

8. Choose **Custom distribution** and click **Select**.

9. In **Store domain**, paste your store domain and click **Generate link**.

10. Copy the generated link and open it in your browser.

11. Choose your store and click **Install**.

### Get the client ID and secret

12. Go back to the app and go to **Settings** > **Credentials** to find your client ID and secret.

### Complete the connection in Codat Link

Next, the merchant needs to:

1. Enter their store name in the **Shopify store name** field (the part before `.myshopify.com`—for example, `my-store-name`).

2. Enter the **Shopify client ID** from the app’s **Settings** > **Credentials**.

3. Enter the **Shopify client secret** from the app’s **Settings** > **Credentials**.

4. Click **Continue** to submit the store name, client ID, and client secret to Codat.

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

- Any <a class="external" href="https://help.shopify.com/en/manual/your-account/staff-accounts/staff-permissions" target="_blank">staff permissions</a> required by the access scopes listed in **Create and configure the custom app**.

## Configure the Shopify integration for use with custom apps

To configure the Shopify integration for use with the _custom apps_ approach:

1. In the Codat Portal, go to the <a class="external" href="https://app.codat.io/settings/integrations/commerce" target="blank">**Commerce integrations**</a> page.

2. Locate **Shopify** and select **Manage** to view the **Integration settings** page.

3. Leave the **App URL**, **Client ID**, and **Client secret** fields blank.

4. Leave the **Has request to read all orders** toggle switched off.

   :::note Orders read by default
   All orders are available to read from Shopify by default when using the custom apps connection method.
   :::

5. Click **Save**.

6. Enable the integration by setting the toggle to **Enabled**.

If the integration was enabled successfully, the **Shopify Custom App enabled** message is displayed at the top right:

![](/img/integrations/commerce/shopify/73719b7-shopify-custom-apps-enabled-toast.png)

## Check the commerce sync settings

All commerce data types must be enabled before you can read commerce transactions from Shopify to Codat. Follow the steps in [Commerce sync settings](/integrations/commerce/commerce-sync-settings); you only need to do this once.

## Next steps

[Test your Shopify integration](/integrations/commerce/shopify/test-shopify) before sending Link URLs to merchants.
