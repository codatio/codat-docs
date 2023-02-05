---
title: "Test your Zettle integration"
description: "Test our Zettle integration by pulling data from a test store to a test Company"
createdAt: "2021-01-20T16:12:07.162Z"
updatedAt: "2022-12-16T16:51:21.207Z"
---

Codat recommends that you test your integration before sending Link URLs to customers.

When you've [set up Zettle](https://docs.codat.io/docs/commerce-zettle-setup), you're ready to test the authorization process for your integration. You'll need to:

- Set up a test company in the [Codat Portal](https://app.codat.io).
- Generate a Link URL to connect your test company to the Zettle store.
- Retrieve commerce data.

## Set up a test company

1. Go to the Codat Portal where you've enabled your integration and log in.
2. Go to **Companies**.
3. On the right side of the page, click **Add new company**.
4. Enter a name for your test company and select **Add**.
5. Keep the **Companies** page open in a separate browser tab. You'll need it for the next stage of the process.

## Create a test store in Zettle

:::note Zettle account

- If you already have a Zettle account, have your account details to hand.
- If you don't, <a href="https://register.izettle.com//" target="_blank">create an account</a> before you start to create your test store.
  :::

1. Download the Zettle app to your smartphone or tablet. You can find the app on App Store (for iOS) or Google Play (for Android).
2. Log in to your Zettle account. Add products, set their prices, and put some orders through.

## Generate a Link URL and connect your test company to your Zettle store

1. On the **Companies** page of the Codat Portal, find the test company that you created earlier.
2. Next to the company name, select **Request data**.
3. The **Links URL...** dialogue box is displayed.
4. At the bottom of the **Link URL...** dialogue box, copy the URL for **Commerce**.
5. Paste the Link URL into your browser, which takes you to [Link](https://docs.codat.io/docs/link).
6. Choose **Zettle** and then **Continue to Zettle**.
7. You will be prompted to log in to your Zettle account and authorize access to your account details.

## Retrieve commerce data

To make sure that commerce data has been pulled successfully into the Codat Portal:

1. Go to the Codat Portal where you've enabled your integration.
2. In the navigation bar, select **Companies**, and then select the test company that you created.
3. Select **Commerce API** to see data for all Commerce data types.
4. If no data is displayed, click **Refresh data**. You can also view **Pull history** to check the status of previous data syncs.
