---
title: "Set up the SumUp Integration"
slug: "set-up-sumup-in-production-1"
description: "Explore our API integration with SumUp"
createdAt: "2021-05-28T11:20:25.586Z"
updatedAt: "2023-01-06T16:59:13.488Z"
---

Before you can pull commerce data from companies using SumUp, you will need to set up the integration in Codat's Portal. You'll need to:

- Log in to the <a className="external" href="https://app.codat.io" target="_blank">Codat portal</a>.
- Create a SumUp live app in the <a className="external" href="https://me.sumup.com/en-gb/login/" target="_blank">SumUp portal</a> and retrieve your secure credentials (API key and secret).
- Add your SumUp account to the Codat Portal in Production and enable the SumUp integration.
- Check your sync settings.

## Create a SumUp app and retrieve your secure credentials

:::note SumUp account details

If you already have a SumUp account, have your account details at hand. If not, visit <a href="https://sumup.co.uk/">SumUp</a> to sign up for an account.
:::

1. Visit <a className="external" href="https://sumup.co.uk/" target="_blank">SumUp</a> and log in to the SumUp portal.
2. Select **Profile** > **For Developers** and go to the **Affiliate Key** section.
3. In the **Create client credentials** window, paste the following URL: `https://sumup.codat.io/oauth/callback`, and fill out the required information.
4. Click **Save** to save your changes.

## Add your secure credentials to the Codat Portal and enable the SumUp integration

1. Sign in to the <a href="https://app.codat.io" target="_blank">Codat Portal</a>.
2. On the navigation bar, select **Settings > Integrations > Commerce**.
3. Find the **SumUp** integration, then select **Set up** to view the **Integration settings** page.
4. Choose what [type of access to company data](/data-sync-settings) you wish to have for this integration: one-off or continuous.
5. From the **OAuth - Create Client Credentials** section, copy and paste.

- **Client ID** value into **Client Id**.

6. From the **OAuth - Create Client Credentials** section, download and then copy and paste

- **client_secret** value into **Client Secret**.

5. In the Codat Portal, select **Save**.

## Enable the SumUp integration

1. In the Codat Portal, go to the <a className="external" href="https://app.codat.io/settings/integrations/commerce" target="blank">**Commerce integrations**</a> page.
2. Locate **SumUp** and click the toggle to enable the integration.

You can also click **Manage** to view the integration's settings page, and then enable the integration from there.

## Check your sync settings in the Codat Portal

If this is your first commerce integration, update your [data type settings](/integrations/commerce/commerce-sync-settings) to enable commerce data types.

You're now ready to [set up companies](/other/portal/companies#add-a-new-company) for your customers in the Codat Portal.
