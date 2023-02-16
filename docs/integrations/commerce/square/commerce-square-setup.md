---
title: "Set up the Square integration"
description: "Explore our API integration with Square"
createdAt: "2020-09-18T08:57:56.490Z"
updatedAt: "2023-01-06T16:45:24.060Z"
---

Set up the Square integration to access commerce data from customers who use Square to accept payments.

The following page explains how to set up both the Sandbox and the production integrations. [Test your Square integration](/integrations/commerce/square/test-square) explains how to use the Square Sandbox integration to pull sample data into Codat.

## Supported environments

Two Square integrations are available in the Codat Portal:

- **Square Sandbox** for connecting to applications in the Square Sandbox.
- **Square** for connecting to applications in the Square production environment.

You set the environment on a per-application basis using the **Sandbox** and **Production** buttons in an application's configuration settings. These buttons are located at the top of every page in an application's settings:

<img src="/img/old/77b4e8a-square-sandbox-test-app.png" />

An application's credentials are different depending on whether the Square Sandbox or production is enabled for the application. To enable full production access for an application, you must first activate your Square account.

Your Square Developer account includes a default _Sandbox test account_ containing sample data, such as customers, transactions, and items. You can create up to four Sandbox test accounts in addition to the default test account. For guidance on how to create sample data in the Square Sandbox using a Sandbox test account, see the <a href="https://developer.squareup.com/docs/devtools/sandbox/overview" target="_blank">Sandbox Overview</a> section of the Square documentation.

We recommend starting with the Square Sandbox, so you can retrieve and check sample data. You can also make sure you're happy with the Link flow journey before sending the Link URL to your customers.

## Create a Square application and get your credentials

Create an application in Square, enable sandbox or production, and then retrieve the secure application credentials to use in Codat. If you plan to [test the integration](/integrations/commerce/square/test-square), make sure you enable sandbox rather than production.

1. Visit <a className="external" href="https://developer.squareup.com/" target="_blank">Square Developer</a> and sign in to your Square account.

2. Click **Account > Developer Dashboard** to view the **Applications** page.

3. Click **Create your first application** or the plus symbol.

4. In the **Create an application** dialog, enter a name for your application, then click **Save**.

5. On the **Applications** page, click **Open** on the application you created.

6. Use the **Sandbox** and **Production** buttons to select which environment to configure the application in.

7. In the left pane, click **OAuth**.

8. On the **OAuth** page, enter the following URL into the **Sandbox Redirect URL** box or the **Production Redirect URL** box:  
   `https://square.codat.io/oauth/callback`

9. Click **Show** in the **Sandbox Application secret** box or the **Production Application secret** box.

10. Click **Save**.

Keep the **OAuth** page open in your browser to help with the next procedure.

## Add your app's secure credentials to the integration

Next, add the secure credentials for your Square app to the corresponding Square integration in the Codat Portal.

In the <a className="external" href="https://app.codat.io" target="_blank">Codat Portal</a>:

1. On the navigation bar, select **Settings > Integrations > Commerce**.

2. Select the correct integration depending on whether you're configuring your app in the Square Sandbox or production.

   - For sandbox, click **Set up** next to the **Square Sandbox** integration.
   - For production, click **Set up** next to the **Square** integration.
     The **Integration settings** page is displayed.

3. Under **Access to company data**, configure the permitted sync frequency for the integration. Select **Allow one-off data sync…** or **Allow continuous data sync**.

4. Enter the application ID for your Square app in the **Application ID** box.

   - For sandbox, enter the **Sandbox Application ID** from Square.
   - For production, enter the **Production Application ID** from Square.

5. Enter the application secret for your Square app in the **Application Secret** box.

   - For sandbox, enter the **Sandbox Application secret** from Square.
   - For production, enter the **Production Application secret** from Square.

6. Click **Save**.

## Enable the Square integration

1. In the Codat Portal, go to the <a className="external" href="https://app.codat.io/settings/integrations/commerce" target="blank">**Commerce integrations**</a> page.
2. Locate **Square** or **Square Sandbox** and click the toggle to enable the integration.

You can also click **Manage** to view the integration's settings page, and then enable the integration from there.

## Check the commerce sync settings

Syncing of all commerce data types must be enabled before you can pull commerce transactions from Square to Codat. Follow the steps in [Commerce sync settings](/integrations/commerce/commerce-sync-settings); you only need to do this once.
