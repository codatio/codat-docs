---
title: "Set up the Mollie integration"
description: "Explore our API integration with Mollie"
createdAt: "2022-02-15T14:09:36.746Z"
updatedAt: "2023-01-06T16:39:29.498Z"
---

Set up the Mollie integration to access commerce data from customers who use Mollie to accept payments.

The following page explains how to set up both the Test and the Production integrations. [Test your Mollie integration](/commerce-mollie-test) explains how to use the Test integration to pull sample data into Codat.

## Supported environments

Two Mollie integrations are available in the Codat Portal:

- **Mollie Test** for pulling test commerce data from your production Mollie account.
- **Mollie** for pulling live commerce data from your production Mollie account.

We recommend starting with the Test integration, so you can retrieve and check sample data. You can also make sure you're happy with the Link flow journey before sending the Link URL to your customers.

You need to add sample data to Mollie first because it does not provide any readily available test data.

## Create a Mollie app and get your credentials

1. Visit <a className="external" href="https://www.mollie.com/en" target="_blank">Mollie</a> and sign in to your Mollie merchant account.
2. In your Mollie Dashboard, navigate to **Developers > Your apps** to view applications.
3. Click **Create application**.
4. Enter an app name and description.
5. Enter the following URL in the **Redirect URL** box: `https://mollie.codat.io/oauth/callback`
6. Click **Save**.
7. Return to the **Your apps** page and locate your app.
8. Copy the **Client ID** and **Client Secret** for your app to a text file or similar.

<img src="https://files.readme.io/051e9fd-36001_Mollie_-_client_id.PNG" />

## Add your app's secure credentials to the integration

Next, add the secure credentials for your Mollie app to the corresponding Mollie integration in the Codat Portal.

In the <a className="external" href="https://app.codat.io" target="_blank">Codat Portal</a>:

1. On the navigation bar, select **Settings > Integrations > Commerce**.
2. Select the correct integration depending on whether you're testing the integration or building for production.

   - If you want to test the integration and pull sample data, click **Set up** next to the **Mollie Test** integration.
   - If you want to build for production and pull live data, click **Set up** next to the **Mollie** integration.

   The **Integration settings** page is displayed.

3. Under **Access to company data**, configure the permitted sync frequency for the integration. Select **Allow one-off data sync…** or **Allow continuous data sync**.
4. Enter the **Client Id** for your Mollie app in the **Client Id** box.
5. Enter the **Client Secret** for your Mollie app in the **Client Secret** box.
6. Click **Save**.

## Enable the Mollie integration

1. In the Codat Portal, go to the <a className="external" href="https://app.codat.io/settings/integrations/commerce" target="blank">**Commerce integrations**</a> page.
2. Locate **Mollie** or **Mollie Test** and click the toggle to enable the integration.

You can also click **Manage** to view the integration's settings page, and then enable the integration from there.

## Check the commerce sync settings

Syncing of all commerce data types must be enabled before you can pull commerce transactions from Mollie into Codat.

Follow the steps in [Update commerce sync settings in the Codat Portal](/commerce-sync-settings#update-commerce-sync-settings-in-the-codat-portal). You only need to do this once.
