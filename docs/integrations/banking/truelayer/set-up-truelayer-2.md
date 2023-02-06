---
title: "Set up your TrueLayer integration"
slug: "set-up-truelayer-2"
description: "Explore our API integration with TrueLayer"
createdAt: "2020-07-21T10:07:43.941Z"
updatedAt: "2022-12-23T10:58:43.275Z"
---

Before you can access your SMB customers' banking data from TrueLayer, you need to set up the integration.

You'll need to:

- Retrieve your secure keys from TrueLayer
- Update your TrueLayer settings
- Add your secure keys to Codat and enable TrueLayer
- Manage TrueLayer banking sources
- Check banking data type settings

:::note Testing the TrueLayer integration

If you use TrueLayer's live environment, you can test TrueLayer using either the Demo Bank data source, or live bank accounts. For more information, see [Test your TrueLayer integration](/test-truelayer).
:::

## Retrieve your secure keys from TrueLayer

1. Sign in to your [TrueLayer account](https://console.truelayer.com), or create a new account, and access the live console.

   > If you're setting up an account for the first time, you're prompted to add a unique value to your **client_id** and to download your client secret. You'll need this when you add your secure keys to Codat.

2. In the TrueLayer console, select **DATA API** from the left panel.
3. If you're using a new account, click **GO TO LIVE ENV**. If you're using an existing account, select **LIVE** from the top menu.

![](https://files.readme.io/6281165-TL_Live_Environment.png "TL_Live_Environment.png")

4. In the left panel, select the settings icon.

![](https://files.readme.io/d0a240b-TL_Apps.png "TL_Apps.png")

The **APP SETTINGS** page is displayed.

5. In the **Identifiers** panel, find your **client_id** and copy it to a text file or similar. If you already had a TrueLayer account, and you've forgotten your **client_secret**, select the refresh icon next to it to download a new one.

Stay on this page and continue to the following task.

## Update your TrueLayer settings

Next, you need to add your redirect URI to TrueLayer. This is the location your customers are sent to after they authorize your connection to their banking data.

1. On the **APP SETTINGS** page, in the **Allowed redirect URIs** panel, delete any existing URIs.
2. Click the plus icon.
3. Enter `https://truelayer.codat.io/oauth/callback`, then click the checkmark.

Your TrueLayer configuration is complete.

## Add your secure keys to Codat and enable TrueLayer

You need to configure the TrueLayer integration in the [Codat Portal](https://app.codat.io).

1. On the navigation bar, select **Settings > Integrations > Banking**.
2. Click **Set up** on the **TrueLayer** tile.  
   The **Integration settings** page for TrueLayer is displayed.
3. Find the [secure keys you retrieved from TrueLayer](/set-up-truelayer-2#retrieve-your-secure-keys-from-truelayer).
4. On the **Integration settings** page, enter your secure keys from TrueLayer:
   - Enter the **client_id** in the **Client ID** box.
   - Enter the **client_secret** in the **Client Secret** box.
5. Under **Access to company data**, select whether you want to continuously sync company data, or sync once only when the company authorizes.
6. Click **Save**.
7. Return to **Settings > Integrations > Banking**.  
   **TrueLayer** should now be enabled. You can click the toggle next to **TrueLayer** to toggle the integration between **Enabled** and **Disabled**.

## Manage TrueLayer banking sources

Manage the banking sources that you can connect to through the integration.

1. On the navigation bar, select **Settings > Integration > Banking**.
2. Click **Set up** on the **TrueLayer** tile.  
   The **Integration settings** page for TrueLayer is displayed.
3. Click **Manage banking sources**.
4. All banking sources are enabled by default, if the TrueLayer integration is enabled. Use the toggles to disable any banking sources that you don't want to connect to.
5. Optional: Disable **Demo Bank** if you don't want to use a demo bank account containing test data.  
   Changes are saved automatically.

## Check banking data type settings

To view test data from linked bank accounts, configure your data type settings in the Codat Portal.

1. On the navigation bar, select **Settings > Data types**.
2. Set **Fetch on first link** to **On** for the following banking data types:
   - Banking - Account Balances
   - Banking - Accounts
   - Banking - Transaction Categories
   - Banking - Transactions
3. Select **Save Changes** to update your data type settings.
