---
title: "Setup SumUp in UAT"
hidden: true
createdAt: "2021-05-28T11:18:15.425Z"
updatedAt: "2021-08-06T10:38:03.547Z"
---

Before you can access commerce data from customers using SumUp, you need to set up a SumUp integration in the Codat Portal in UAT. You'll need to:

- Login to the [Codat Portal in UAT](https://portal-uat.codat.io/).
- Create an app in the [SumUp portal](https://me.sumup.com/en-gb/login/) and retrieve your secure credentials (API key and secret).
- Add your secure credentials to the Codat Portal and enable your SumUp test integration.
- Check your sync settings.

## Create an app and retrieve your secure credentials

:::info SumUp account details

- If you already have a SumUp account, have your account details to hand.

- If you don't, sign up to the [SumUp portal](https://me.sumup.com/en-gb/login/) before you start to create your application.
  :::

1. Go to the [SumUp portal](https://me.sumup.com/en-gb/login/) and log in to your account.
2. Select **Profile** > **For Developers** and go to **Affiliate Key** section.
3. In the **Create client credentials** window, paste the following URL: `https://sumup-uat.codat.io/oauth/callback`, and fill out the required information.
4. **Save** your changes.

## Add your secure credentials to the Codat Portal and enable your SumUp integration

1. Open the Codat Portal in UAT and log in.
2. Go to **Integrations > Commerce**.
3. Find **SumUp** and select the **Manage** button next to it.
4. Choose what [type of access to company data](https://docs.codat.io/docs/sync-settings-for-online-platforms) you wish to have for this integration: one-off or continuous.
5. From the **OAuth - Create Client Credentials** section, copy and paste

- **Client ID** value into **Client Id**.

6. From the **OAuth - Create Client Credentials** section, download and then copy and paste

- **client_secret** value into **Client Secret**.

5. In the Codat Portal, select **Save**.
6. Go back to **Integrations > Commerce**, and use the toggle to update the SumUp integration from **Disabled** to **Enabled**.

## Check your sync settings in the Codat Portal

If this is your first commerce integration, update your [sync settings](https://docs.codat.io/docs/commerce-sync-settings) to enable commerce data types.

Now follow the instructions in [Test SumUp](https://docs.codat.io/docs/test-sumup) to test your setup.
