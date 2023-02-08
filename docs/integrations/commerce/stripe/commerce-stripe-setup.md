---
title: "Set up the Stripe integration"
description: "Explore our API integration with Stripe"
createdAt: "2021-02-04T11:21:44.725Z"
updatedAt: "2023-01-06T16:46:47.528Z"
---

Set up the Stripe integration to access commerce data from customers who use <a className="external" href="https://stripe.com/" target="_blank">Stripe</a> to accept payments.

Our integration uses <a className="external" href="https://stripe.com/docs/connect" target="_blank">Stripe Connect</a> to establish OAuth connections to Stripe, so you'll need to register as a Stripe Connect platform as described below. Connected Standard accounts, which represent your SMB customers in Stripe's API, are created automatically as part of the Link authorization flow.

:::Note Test and live integrations

This page explains how to set up both the Stripe Test and the Stripe integrations (see [Available integrations](/commerce-stripe#available-integrations) for more details).
:::

To set up the Stripe integration, you'll need to:

1. Register as a Stripe Connect platform
2. Request read-only permissions
3. Configure Stripe Connect and get your credentials
4. Add your Stripe Connect credentials to the integration
5. Enable the integration
6. Check the commerce sync settings

## Register as a Stripe Connect platform

Complete your Connect Platform profile to register for Stripe Connect. When your profile is complete and your business details are approved, you can access your live platform credentials. To access your test credentials, you only need to complete steps 1–6.

1. Visit <a className="external" href="https://stripe.com/" target="_blank">Stripe</a> and sign in to your developer account.

2. In the top menu of the dashboard, click **Connect**.

3. Click **Get started with Connect**.

4. Select **Platform or marketplace** in the pop-up window, then click **Continue**.

   The **Get started with Connect** page is displayed.

5. Under **Complete your platform profile**, click **Start**.

6. Answer the multiple-choice questions about your business and then submit your responses.

   Stripe recommends the optimal type of connected account for your business: either _Standard_, _Express_, or _Custom_. **Do not create a connected account, either manually or through the Stripe API.** Connected Standard accounts representing your SMB customers will be created automatically as part of the Link flow.

7. Return to the **Get started with Connect** page.

8. Under **Add business details to activate your account**, click **Start now**.

9. Complete the requested information to activate your account. All responses are reviewed by Stripe.

:::Note

Our integration works with connected Standard accounts only.
:::

## Request read-only permissions

Before enabling the live integration, we recommend you contact <a className="external" href="https://support.stripe.com/" target="_blank">Stripe Support</a> to request the `read_only` scope (permission) for your Stripe Connect platform. The integration only requires read-only access and is configured to request the `read_only` scope by default.

If your request is declined, you can configure the integration to request the `read_write` scope—see "Add your secure credentials to the integration" for details. However, be aware that only one third-party platform with `read_write` access is allowed to connect to your Stripe account.

## Configure Stripe Connect and get your credentials

Configure Stripe Connect to connect to our Stripe integration, and access your Stripe Connect platform credentials (these are your client ID and secret key for either test or live mode).

### Prerequisites

To access your live credentials in Stripe, you must have [added your business details](/commerce-stripe-setup#register-as-a-stripe-connect-platform) as described in the preceding task.

1. Go to the <a className="external" href="https://dashboard.stripe.com/settings/connect" target="_blank">Connect settings</a> page.

2. Use the **Test mode** switch at the top right to switch between live mode or test mode.

   - Enable _test mode_ if you're setting up the Stripe Test integration.
   - Enable _live mode_ if you're setting up the Stripe integration.

3. Enter your **Business name** in the **Business details** section.

4. Next to **Appearance**, upload your company icon and customize the colors. These settings are used to customize the authentication pages that your SMB customers will see in the Link flow.

5. Next to **OAuth settings**, select **OAuth for Standard accounts**.

6. Next to **Redirects**, click **Add URI** and then enter the following Codat redirect URL:

   ```http
   https://stripe.codat.io/oauth/callback
   ```

7. Copy your client ID from the **Integration** section and paste it to a text file or similar.

   - In test mode, copy the **Test mode client ID**.
   - In live mode, copy the **Live mode client ID**.

8. Click **Developers > API keys** to access your test Secret key (in test mode) or live Secret key (in live mode).

   Leave this tab open in your browser so you can use the key in the next task.

If you need to add or change a key in future, search for _API Keys_ from the Stripe Developers Dashboard.

## Add your Stripe Connect credentials to the integration

Add your Stripe Connect platform credentials, for test or live mode, to the corresponding integration.

In the <a className="external" href="https://app.codat.io/" target="_blank">Codat Portal</a>:

1. Select **Settings > Integrations > Commerce**.

2. Click **Set up** next to the **Stripe** or **Stripe Test** integration.

   The **Integration settings** page is displayed.

3. In the **Client ID** box, enter your client ID for your Stripe Connect platform.

   - For the **Stripe Test** integration, enter the **Test mode client ID**.
   - For the **Stripe** integration, enter the **Live mode client ID**.

4. In the **Secret key** box, enter the value of your **test key** or **live key**.

5. Assuming you requested the `read_only` scope for Stripe Connect, leave the **Use read-write scope** toggle deselected.

   ![Read Write Scope toggle](/img/old/18021fe-use-read-write-scope-toggle.png "The Use read-write scope toggle, deselected by default.")

   If you're using the `read_write` scope (the Stripe default), then select the **Use read-write scope** toggle.

6. Under **Access to company data**, configure the sync frequency for the integration. Select **Allow one-off data sync when company authorizes connection** or **Allow continuous data sync**.

7. Click **Save**.

## Enable the Stripe integration

1. In the Codat Portal, go to the <a className="external" href="https://app.codat.io/settings/integrations/commerce" target="blank">**Commerce integrations**</a> page.
2. Locate **Stripe** or **Stripe Test** and click the toggle to enable the integration.

You can also click **Manage** to view the integration's settings page, and then enable the integration from there.

## Check the commerce sync settings

Syncing of all commerce data types must be enabled before you can pull commerce transactions from Stripe to Codat. Follow the steps in [Commerce sync settings](/commerce-sync-settings); you only need to do this once.

## Test the integration

[Test your Stripe integration](/test-stripe) explains how to use the Stripe Test integration to pull test data into Codat.
