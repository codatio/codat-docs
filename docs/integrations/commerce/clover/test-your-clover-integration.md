---
title: "Test your Clover integration"
description: "Test our Clover integration by pulling sandbox data to a test company"
createdAt: "2022-01-26T13:36:34.347Z"
updatedAt: "2022-12-16T16:48:06.127Z"
---

Codat recommends that you test your integration before sending link URLs to customers.

When you've [set up your Clover integration](/set-up-your-clover-integration), you're ready to test the authorization process for your integration. You'll need to:

- Set up a test company in the [Codat Portal](https://app.codat.io).
- Generate a Link URL to connect your test company to your Clover app.
- Retrieve commerce data.

## Set up a test company

1. Go to the Codat Portal where you've enabled your integration and sign in.
2. Go to **Companies**.
3. On the right side of the page, click **Add new company**.
4. Enter a name for your test company and select **Add**.
5. Keep the **Companies** page open in a separate browser tab. You'll need it for the next stage of the process.

## Generate a link URL and connect your test company to your Clover app

1. On the **Companies** page of the Codat Portal, find the test company that you created earlier.
2. Next to the company name, select **Request data**.
3. The **Links URL** dialog box is displayed.
4. At the bottom of the **Links URL** dialog box, copy the URL.
5. Paste the link URL into your browser, which takes you to Codat Link.
6. Choose **Clover** and then **Next**.
7. You will be prompted to authorize access to commerce data and log in to your Clover account in Sandbox.

## Retrieve commerce data

To make sure that commerce data has been pulled successfully into the Codat Portal:

1. Go to the Codat Portal where you've enabled your integration.
2. In the navigation bar, select **Companies**, and then select the test company that you created.
3. Select **Commerce API** to see data for all Commerce data types.
4. If no data is displayed, click **Refresh data**. You can also view **Pull history** to check the status of previous data syncs.
