   ---
title: "Test your Shopify integration"
description: "Test your Shopify integration by pulling sample data to a test Company"
createdAt: "2021-01-14T13:50:30.467Z"
updatedAt: "2022-10-20T09:22:23.459Z"
---

Test your Shopify integration by pulling commerce data from a Development Store to a test company in Codat. This lets you test the Link flow that your SMB customers will see when they share their commerce data from Shopify.

## Prerequisites

- Set up your Shopify integration using either the custom apps or public apps connection method.
- Update your [Commerce data type settings](/integrations/commerce/commerce-sync-settings) to enable commerce data types.

## Add a test company

In the Codat Portal:

1. Click **Companies > New company**.
1. In the **Add new company** dialog, enter a name for your test company, like `shopify-test`, then click **Add**. The Link URL for your test company is displayed.

Keep the **Companies** page open in your browser.

## Create a Development Store and sample data

1. Log in to the <a href="https://developers.shopify.com/" target="_blank">Shopify Partners</a> site with your partner account credentials.
2. Select **Stores > Add store**.
3. On the **Add store** page, select **Development store**.
4. Enter all the requested details and make a note of the **Store URL**.

   Ensure the **Create store with transfer disabled to use a developer preview** checkbox is selected, and then choose **Shopify Markets** from the dropdown list:

   <img src="/img/old/e6d56b7-Screenshot_2022-09-21_170904.png" />

5. Click **Save**.

Next, you need to manually add some sample data to your Development Store. For example, add some products and orders.

## Connect your test company to your Development Store

Test the authorization process that your customers will see when they connect their Shopify account using Link.

In the Codat Portal:

1. Click **Companies** then locate the test company you created in the preceding task.

2. Next to the company name, click **Request data**.

3. In the **Onboarding** dialog, copy the **Link URL**.

4. Paste the Link URL into a new browser tab to load Link.

   The following steps apply if you're using public apps. If you're using custom apps, go to step six.

5. Complete the steps in Link; the exact steps shown depend on your Link settings. You'll need to:
   1. When asked to select your commerce software, select the **Shopify** tile.
   2. Authorize access to the listed commerce data types.
   3. On the Shopify screen, enter the name of your Development Store then click **Continue**.
   4. Log in to your Development Store, if prompted.

When the Link flow is complete, your Development Store opens and your app is automatically installed into the Store.

   <img src="/img/old/d2bf06b-shopify-development-store-app-installed.png" />

6. (If using custom apps.) Complete the steps in Link; the exact steps shown depend on your Link settings. You'll need to:

   1. On the **Connect your Shopify store** screen, enter the name of your Development Store and your API Access Token, then click **Continue**.

When the Link flow is complete, your Development Store opens and your custom app is automatically installed into the Store.

## Retrieve commerce data

In the Codat Portal, pull sample commerce data from Shopify to your test company:

1. Click **Companies** then select the test company you created in the preceding task.
1. Click **Commerce API** in the side navigation menu.
1. View the sample commerce data from your Shopify Development Store.

   If no data is displayed, click **Queue sync**.
