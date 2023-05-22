---
title: "Test your Xero integration"
sidebar_label: Testing
description: "Create a Xero Demo Company and successfully access its sandbox data through Codat's Xero integration"
createdAt: "2022-03-08T09:56:46.839Z"
updatedAt: "2022-09-29T15:12:55.393Z"
---

When you've set up your Xero integration, you're ready to test the authorization process by connecting a company to test data in Xero. Codat recommends that you do this before sending any Link URLs to your customers.

To test your integration, you'll need to:

- Set up a test company in the Codat Portal.
- Create a demo company in Xero.
- Generate a Link URL.
- Using Link, try out the process of connecting your test company to your demo company in Xero.

## Prerequisites

Make sure that you've [set up your Xero integration](/integrations/accounting/xero/accounting-xero-setup).

## Create a demo Xero company

1. Log in to <a href="https://xero.com" target="_blank">Xero</a> using the credentials for your developer account.

2. Follow the instructions in <a href="https://central.xero.com/s/article/Use-the-demo-company" target="_blank"> Use the demo company</a> to access or create a demo company.

## Create a company and link it to Xero

Create a test company in the Codat Portal and connect it to your demo Xero company.

1. In the navigation bar, select **Companies** then click **New company**.

2. Enter a name for your test company, such as `xero-test`, then click **Add**. Copy the **Link URL** for your test company.

3. Enter the Link URL into a browser. Link for your integration is displayed.

4. Follow the instructions in Link; make sure you select **Xero** as the integration to connect.

5. You might be asked to select an organization. Select the demo company you created in the preceding task, then click **Allow access**.

<img src="/img/old/658ee87-Xero-Authorize.png" />

6. When you've completed all the steps in Link, you can close the browser tab or window.

## Viewing test data from Xero in Codat

View test data from the Xero demo company in the Codat Portal.

1. Go to the **Companies** page and select the test company you created earlier and linked with Xero.

2. View the test data from Xero under the **Accounting** tab.

If you don't see any test data, you can check whether the sync completed successfully. From the **Companies** page, click **Pull history**. Also, check that the supported data types are set to **Fetch on first link** in **Settings > Data types**.

## What's next?

Next, you might want to:

- Edit your sync settings to change which data types to pull from Xero.
- Try out the Push API to create or edit data within Xero.

:::caution Banking Data
It's not possible to create banking transactions within Xero demo companies. To test this functionality, you'll need to sign up to a free trial or create a paid Xero organization.
:::
