---
title: "Test your WooCommerce integration"
description: "Test our WooCommerce integration by pulling sample data to a test company"
createdAt: "2021-03-23T11:58:41.051Z"
updatedAt: "2022-10-20T09:28:19.856Z"
---

Codat recommends that you test your integration before sending Link URLs to customers.

When you've [set up and enabled WooCommerce](/commerce-woocommerce-setup), you're ready to test the authorization process for your integration, and to retrieve sample commerce data. You'll need to:

- Set up a test company in the <a href="https://app.codat.io" target="_blank"> Codat Portal</a>.
- Generate a Link URL to connect your test company to your online store.
- Retrieve commerce data.

## Prerequisites

Before you start to test WooCommerce, make sure that you've:

- Set up the WooCommerce integration.
- Created an online store to test the integration or have access to an online store you can connect to the Portal. Note that you don't have to use WooCommerce store for testing, but if you choose to, you may be required to pay additional charges. Please visit [WooCommerce website](https://woocommerce.com/hosting-solutions/) for more details.
- Updated your [sync settings](/commerce-sync-settings) to enable commerce data types.

## Set up a test company

1. Log in to the <a href="https://app.codat.io" target="_blank">Codat Portal</a>.
2. Go to **Companies**.
3. On the right side of the page, select **New company**.
4. Enter a name for your test company and select **Add**.
5. Keep the **Companies** page open in a separate browser tab. You'll need it for the next stage of the process.

## Generate a Link URL and connect your test company to a store

1. On the **Companies** page of the Codat Portal, find the test company that you created earlier.
2. Next to the company name, select **Request Data**.
3. The **Link URL** dialog box is displayed.
4. Paste the Link URL into your browser, which takes you to [Link](/link).
5. Choose **WooCommerce**, enter the test store URL, and follow the onscreen instructions.

## Retrieve sample commerce data

To make sure that commerce data has been pulled successfully into the Codat Portal:

1. Go to the Codat Portal where you've enabled your integration.
2. In the navigation bar, select **Companies**, and then select the test company that you created.
3. Select **Commerce API** to see data for all Commerce data types.
4. If no data is displayed, click **Refresh data**. You can also view **Pull history** to check the status of previous data syncs.
