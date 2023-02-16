---
title: "Test your PayPal Integration"
description: "Test your PayPal integration by pulling sandbox data to a test Company"
createdAt: "2021-03-25T13:09:00.370Z"
updatedAt: "2022-10-20T08:54:42.581Z"
---

When you've set up your PayPal integration, you're ready to test the authorization process for your integration. You'll need to:

- Create a PayPal developer account, and set up a PayPal Sandbox
- Set up a test company.
- Generate a Link URL to connect your test company to your PayPal sandbox
- Retrieve commerce data.

## Pre-requisites

Before you start to test PayPal, make sure that you have:

- [Set up your PayPal Integration](/integrations/commerce/paypal/set-up-paypal-in-production).
- Updated your [sync settings](/integrations/commerce/commerce-sync-settings) to enable commerce data types.

## Create PayPal developer account and set up a PayPal sandbox

To create sandbox PayPal accounts for use in testing, you will need to:

1. Sign up to PayPal at https://paypal.com if you do not already have a PayPal account.
   Note: The account type you select and details entered are not especially relevant; this account is needed only to access PayPal’s Developer Dashboard (see next step), and will not be relevant to your integration with PayPal
2. Navigate to [PayPal’s Developer Dashboard](https://developer.paypal.com/developer/applications) and Sign in using your PayPal account (created in previous step)
3. Once signed in, you will be able to create ‘dummy’ PayPal accounts within PayPal’s SandBox. In the left hand navigation menu, click Accounts under the Sandbox heading
4. You will see that PayPal provision two sandbox accounts by default (one ‘Business’, one ‘Personal’); you can also create your own by clicking Create Account.
   a) Codat’s integration supports only Business accounts. For testing your API integration through Codat, you will need to create Sandbox accounts of type ‘Business’
   b) Each Sandbox account has it’s own username (email ID) and Password, accessed by clicking on the ‘…' icon in the 'Manage Accounts’ column of the Sandbox list, and selecting View/Edit account
5. Once you have created/retrieved details of a Sandbox account, you can use PayPal’s UI to interact with the Sandbox accounts. To do so, navigate to https://sandbox.paypal.com/ and Sign in using the username and password of your PayPal Sandbox (as per step 4.b) above)

## Set up a test company in the Codat Portal

1. Go to the <a href="https://app.codat.io/#/login" target="_blank">Codat Portal</a> and sign in.
2. Go to **Companies**.
3. On the right side of the page, select **Add new company**.
4. Enter a name for your test company and select **Add**.
5. Keep the **Companies** page open in a separate browser tab. You'll need it for the next stage of the process.

## Generate a link URL and connect your test company to your PayPal app

Test the authorization process that your customers will use when they connect their PayPal account.

1. On the Companies page of the Codat Portal, find the test company that you created earlier.
2. Next to the company name, click the "Request Data" button, and copy the URL.
3. Paste the link URL into your browser, which takes you to Codat Link UI.
4. Choose PayPal and then Continue to PayPal.
5. On the PayPal's Connect page, choose the PayPal Sandbox account you created for testing

## Retrieve sample commerce data

To make sure that commerce data has been pulled successfully into the Codat Portal:

1. Go to the Codat Portal where you've enabled your integration.
2. In the navigation bar, select **Companies**, and then select the test company that you created.
3. Select **Commerce API** to see data for all Commerce data types.
4. If no data is displayed, click **Refresh data**. You can also view **Pull history** to check the status of previous data syncs.
