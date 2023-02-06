---
title: "Test your SumUp Integration"
slug: "test-sumup-1"
description: "Test our SumUp integration by pulling sample data to a test Company"
createdAt: "2021-05-28T11:19:11.857Z"
updatedAt: "2022-12-16T16:48:51.760Z"
---

Codat recommends that you test your integration before sending link URLs to customers.

When you've [set up your SumUp integration](/set-up-sumup-in-production-1), you're ready to test the authorization process for your integration. You'll need to:

- Set up a test company in the <a href="https://app.codat.io/" target="_blank">Codat Portal</a>.
- Create a corresponding test app in SumUp.
- Generate a Link URL to connect your test company to your test app in SumUp.
- Retrieve commerce data.

## Set up a test company

1. Go to the Codat Portal where you've enabled your integration and log in.
2. Go to **Companies**.
3. On the right side of the page, click **Add new company**.
4. Enter a name for your test company and select **Add**.
5. Keep the **Companies** page open in a separate browser tab. You'll need it for the next stage of the process.

## Create a test app in SumUp

1. Log in to your SumUp account.
2. Add products, set their prices, and make some payments.

## Generate a link URL and connect your test company to your SumUp app

1. On the **Companies** page of the Codat Portal, find the test company that you created earlier.
2. Next to the company name, select **Request data**.
3. The **Links URL** dialog box is displayed.
4. Copy the URL and paste the link URL into your browser, which takes you to the Codat Link.
5. Find the **SumUp** integration, select it, and follow the onscreen instructions.
6. You will be asked to log in to your SumUp account to confirm the connection.

## Retrieve sample commerce data

To make sure that commerce data has been pulled successfully into the Codat Portal:

1. Go to the Codat Portal where you've enabled your integration.
2. In the navigation bar, select **Companies**, and then select the test company that you created.
3. Select **Commerce API** to see data for all Commerce data types.
4. If no data is displayed, click **Refresh data**. You can also view **Pull history** to check the status of previous data syncs.
