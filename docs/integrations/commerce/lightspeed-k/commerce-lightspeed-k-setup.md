---
title: "Set up the Lightspeed Restaurant integration"
description: "Explore our API integration with Lightspeed Restaurant - K Series"
createdAt: "2022-09-21T08:52:47.797Z"
updatedAt: "2023-01-06T16:38:03.123Z"
---

Set up the [LightSpeed Restaurant](https://docs.codat.io/docs/commerce-lightspeed-k) integration to retrieve sales and order information from your customers who use Lightspeed Restaurant - K Series to run their food or hospitality business.

Before you can use the integration, you'll need to join the LightSpeed partner programme to get access to their APIs. You can read more about the program on their <a className="external" href="https://www.lightspeedhq.co.uk/partners/" target="_blank">website</a>.

To set up the integration, you'll need to perform these tasks:

- Sign up to be a Lightspeed Partner, then apply for API credentials
- Retrieve your credentials and enter them into the Codat developer portal
- Enable the integration
- Create companies in Codat and then share the Link URL with your SMB customers

## Register as a Lightspeed Development Partner

To register as a partner, you'll first need to complete the <a className="external" href="https://www.lightspeedhq.com/partners/partner-application/" target="_blank">Partner Application form</a>. When asked how you plan to earn revenue as a Lightspeed Partner, choose **Integrate to Lightspeed POS** or **Build an App**, and then complete the rest of the fields accordingly.

:::note Which Lightspeed product?

If you're asked which product you intend to integrate with, make sure you select **Restaurant**. Codat's integration does not work with Lightspeed Retail products at this time.
:::

## Receive your development credentials

Once your partner application has been approved, you should receive details of how to access a form that allows you to request API Credentials. You'll first need to ask for a Staging client, which will be used for testing and to demonstrate your app to your Lightspeed contact, who will then advise when to apply for a Production client.

When completing the form you may be asked for the following information:

- **Redirect URI**: This should be `https://lightspeedk.codat.io/oauth/callback`
- **Scopes**: Please select `Financial`, `Items`, and `Order & Pay`.
- **Test POS Account**: Select this option if you would like a test Lightspeed K account to use for your testing. This account will only be able to connect to your staging app.

## Add your app's secure credentials to the integration

Once your application has been processed, you should be sent your credentials to the specified email address. Next, you will need to add these into the <a href="https://app.codat.io" target="_blank">Codat Portal</a>:

1. On the navigation bar, select **Settings > Integrations > Commerce**.

2. Select the correct integration depending on whether you're configuring your app for testing or use by live clients

   - For testing, click **Set up** next to the **Lightspeed K Trial** integration.
   - For production, click **Set up** next to the **Lightspeed K** integration.  
     The **Integration settings** page is displayed.

3. Under **Access to company data**, configure the permitted sync frequency for the integration. Select **Allow one-off data sync…** or **Allow continuous data sync**.

4. Enter the provided Client ID for your Lightspeed K app in the **Client ID** box.

   - For testing, enter the **Staging Client ID** from Lightspeed.
   - For production, enter the **Production Client ID** from Lightspeed.

5. Enter the application secret for your Lightspeed K app in the **Client Secret** box.

   - For testing, enter the **Staging Client secret** from Lightspeed.
   - For production, enter the **Production Client secret** from Lightspeed.

6. Click **Save**

## Enable the Lightspeed Restaurant integration

1. In the Codat Portal, go to the <a className="external" href="https://app.codat.io/settings/integrations/commerce" target="blank">**Commerce integrations**</a> page.
2. Locate **Lightspeed K** or **Lightspeed K Trial** and click the toggle to enable the integration.

You can also click **Manage** to view the integration's settings page, and then enable the integration from there.

## Check the commerce sync settings

Syncing of all commerce data types must be enabled before you can pull commerce transactions from Square to Codat. Follow the steps in [Commerce sync settings](https://docs.codat.io/docs/commerce-sync-settings); you only need to do this once.
