---
title: "Set up the Clover integration"
description: "Explore our API integration with Clover"
createdAt: "2022-01-26T13:31:32.440Z"
updatedAt: "2023-01-06T16:36:12.403Z"
---

Before you can access commerce data from customers using Clover, you need to set up the integration. You'll need to:

- Create an app in the Clover developer portal and retrieve your secure credentials (API key and secret).
- Log in to the [Codat Portal](https://app.codat.io/).
- Add your secure credentials to the Codat Portal and enable your Clover integration.
- Check your data type settings.

## Create an app and retrieve your secure credentials

:::note Developer account details

- If you already have a Clover developer account, have your account details to hand.

- If you don't, sign up to the Clover developer portal before you start to create your application. Note that Clover's market currently covers many geographic regions and each is assigned a different domain. Create your developer portal by choosing your geographic area first:

  - [US and Canada](https://www.clover.com)
  - [UK and Republic of Ireland/Europe](https://www.eu.clover.com)

- If you require a Clover sandbox for testing purposes, sign up to the [Clover Sandbox developer portal](https://sandbox.dev.clover.com/developer-home/create-account) before you start to create your application

:::

1. Go to the Clover developer portal and log in to your account.
2. Select **Create App** to create an app and get API credentials.
3. Fill in the required details for your app:

   - Under **Requested Permissions**, tick "Read" for Customers, Inventory, Merchant, Orders, and Payments.
   - Set the** App type** to Web.
   - Under **REST Configuration** enter `https://clover.codat.io/oauth/callback`

You'll be taken to your API credentials page with App ID and secret generated. Keep this page open so you can retrieve your API keys in the next step.

## Add your secure credentials to the Codat Portal and enable your Clover integration

1. Sign in to the [Codat Portal](https://app.codat.io/).
2. On the navigation bar, select **Settings > Integrations > Commerce**.
3. Find **Clover**, then select **Set up** to view the **Integration settings** page.
4. Choose what [type of access to company data](/core-concepts/data-type-settings) you wish to have for this integration: one-off or continuous.
5. From the **API keys** page on the Clover developer portal, copy and paste:

   - **App ID** value into **Client Id**
   - **App secret** value into **Client Secret**.

6. In the Codat Portal, click **Save**.

## Enable the Clover integration

1. In the Codat Portal, go to the <a className="external" href="https://app.codat.io/settings/integrations/commerce" target="blank">**Commerce integrations**</a> page.
2. Locate **Clover** and click the toggle to enable the integration.

You can also click **Manage** to view the integration's settings page, and then enable the integration from there.

## Check your sync settings in the Codat Portal

If this is your first commerce integration, update your [data type settings](/integrations/commerce/commerce-sync-settings) to enable commerce data types.

You're now ready to test your Clover integration, or skip straight to [setting up companies](/other/portal/companies#add-a-new-company) for your customers in the Codat Portal.
