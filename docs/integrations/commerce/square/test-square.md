---
title: "Test your Square integration"
description: "Test our Square integration by pulling sample data to a test Company"
createdAt: "2020-09-18T08:57:30.712Z"
updatedAt: "2022-10-20T09:24:21.873Z"
---

You can use the Square Sandbox integration to pull test data from Square into Codat.

You'll need to:

- Set up a test company in the Codat Portal.
- Generate a Link URL then connect your test company to your Square app, using a Square Sandbox test account.
- Retrieve test data from Square.

## Prerequisites

First, [set up your Square integration](/commerce-square-setup).

- In Square Developer, make sure you've enabled **Sandbox** in your app's configuration settings.
- In Codat, make sure you've configured the **Square Sandbox** integration.

To retrieve and view commerce data from your test company, you need to add sample transactions to the Square Sandbox test account you want to use. For help with adding test transactions, see <a href="https://developer.squareup.com/docs/devtools/sandbox/overview" target="_blank">Sandbox Overview</a> in the Square documentation.

## Set up a test company

In the <a href="https://app.codat.io/" target="_blank">Codat Portal</a>:

1. In the navigation bar, click **Companies**.
2. Click **New company**.
3. In the **Add new company** dialog, enter a name for your test company, such as `square-test`, then click **Add**.
   The Link URL for your test company is displayed.

Keep the **Companies** page open in your browser.

## Connect your test company to your Square Sandbox test account

Test the authorization process that your customers will see when they connect their Square account in Link.

1. Sign in to <a href="https://developer.squareup.com/" target="_blank">Square Developer</a>.
2. Click **Account > Developer Dashboard** to view the **Applications** page.
3. Under **Sandbox test accounts**, open the **Default Test Account**, or another test account, to open the Sandbox seller dashboard. Keep this page open in your browser or authorization to the Sandbox account will fail in Link.
4. In the Codat Portal, click **Companies** in the navigation bar.
5. Hover over your test company, then click **Link URL**. The **Onboarding** dialog is displayed.
6. Copy the **Link URL** and paste it into a new browser tab. This loads [Link](/link).

7. Complete the steps in Link; the exact steps shown depend on your Link settings. You'll need to:

8. Select **Square Sandbox** as the commerce software to connect to.

<img src="/img/old/5b21f24-link-site-select-square-sandbox.png" />

9. Authorize access to the listed data types.

10. The **Connection Successful** page in Link is displayed with the message: "You have connected Square Sandbox."

11. Complete the Link flow, then click **Finish**.

## Retrieve test commerce data

Make sure that test commerce data from Square is pulled successfully into Codat.

In the <a href="https://app.codat.io/" target="_blank">Codat Portal</a>:

1. In the navigation bar, click **Companies**.

2. Click the name of your test company to view the company's data.

3. Optionally, click **Pull history** to check the progress of the initial sync (if configured in your sync settings). You can also click **Refresh data**.

4. Click the **Commerce API** tab.

5. Use the tabs to view test data that was pulled from Square. For example, click **Products** or **Orders**.

:::info
Test data is only available for supported data types for which test data exists in Square.
:::
