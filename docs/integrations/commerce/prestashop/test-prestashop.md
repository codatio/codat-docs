---
title: "Test PrestaShop"
description: "Test our PrestaShop integration by pulling sample data to a test Company"
createdAt: "2021-09-17T00:16:28.634Z"
updatedAt: "2022-10-20T08:56:09.678Z"
---

When you've [set up PrestaShop](/integrations/commerce/prestashop/set-up-prestashop-in-production), you're ready to test the authorization process for your integration. You'll need to:

- Generate a Link URL to connect your test company to your PrestaShop sandbox.
- Retrieve commerce data.

## Prerequisites

Before you start to test PrestaShop, make sure that you have:

- Access to a PrestaShop instance for testing purposes.
- For instructions on the Prestashop installation and hosting process, please see the following official guides:
  - <a
      href="https://www.prestashop.com/en/blog/how-to-install-prestashop"
      target="_blank"
    >
      Installation Guide
    </a>
  - <a
      href="https://doc.prestashop.com/display/PS17/Getting+started"
      target="_blank"
    >
      Official Getting Started Guide
    </a>
- Set up [PrestaShop](/integrations/commerce/prestashop/set-up-prestashop-in-production).
- Updated your [sync settings](/integrations/commerce/commerce-sync-settings) to enable commerce data types.

## Set up a test company in the Codat Portal and connect your test Company to a test account in PrestaShop

1. Go to the <a href="https://portal-uat.codat.io/" target="_blank">Codat Portal</a> and sign in.
2. Go to **Companies**.
3. On the right side of the page, select **Add new company**
4. Enter a name for your test company and select **Add**. This will create a company, and display a Link URL, allowing PrestaShop credentials to be captured.
5. Paste the link URL into your browser, which takes you to the Codat Link UI.
6. Choose **PrestaShop** and then **Continue to PrestaShop**.
7. Configure your PrestaShop instance and retrieve your PrestaShop Webservice Key (you’ll find steps for how to do this when navigating to PrestaShop through the Link UI).
8. Enter your PrestaShop web address and Webservice Key in the Link UI.

## Retrieve sample commerce data

To make sure that commerce data has been pulled successfully into the Codat Portal:

1. Go to the Codat Portal where you've enabled your integration.
2. In the navigation bar, select **Companies**, and then select the test company that you created.
3. Select **Commerce API** to see data for all Commerce data types.
4. If no data is displayed, click **Refresh data**. You can also view **Pull history** to check the status of previous data syncs.
