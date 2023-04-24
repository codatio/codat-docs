---
title: "Set up and run the bill pay demo app"
sidebar_label: "Set up and run"
description: "Learn how to configure..."
---

The bill pay demo app can be installed and run locally or used as a hosted version. Whichever option you choose, you first need to set up an accounting integration, configure the app's redirect URI, and check the required data types are enabled.

We're using the QuickBooks Online Sandbox integration to provide a realistic source of sandbox data with minimal setup. You can use a different platform that provides access to sandbox data, such as the Codat Sandbox integration, if you prefer.

## Set up the QuickBooks Online Sandbox integration

Before you can try out the functionality of the demo app, you first need to set up the QuickBooks Online Sandbox integration. Here's a summary of the setup process&mdash;[see the documentation](/integrations/accounting/quickbooksonline/accounting-quickbooksonline-new-setup) for complete instructions.

1. Sign in to the [Intuit Developer Portal](https://developer.intuit.com/).
2. Create a QuickBooks Online app and configure it with the Codat *sandbox* redirect URI: `https://quickbooksonlinesandbox.codat.io/oauth2/callback`
3. In the [Codat Portal](https://app.codat.io/), add your app's secure keys to the **QuickBooks Online Sandbox** integration.
   :::caution Use your development keys
   Make sure you use your app's *development keys* when configuring the integration.
   :::
3. Enable the **QuickBooks Online Sandbox** integration in the Codat Portal.

### Sandbox companies

Your Intuit Developer account is created with a single sandbox company configured for the US. You're allowed to create additional sandbox companies for different regions. To do so, go to the [Manage sandbox companies](https://developer.intuit.com/app/developer/sandbox) page in the Intuit Developer Portal.

To open a sandbox company in QuickBooks Online and view its data, click the company name on the [Manage sandbox companies](https://developer.intuit.com/app/developer/sandbox) page. Your sandbox company opens in a new browser tab.

## Configure Link to use the demo app's redirect URL

1. In the Codat Portal, go to **Settings > Redirects** to view the [Redirects](https://app.codat.io/settings/redirects) page.
2. Enter the following URL in the **URL** field:
   ```http
   https://{your-domain}/connection-successful   
   ```
For `{your-domain}`, enter the value that corresponds with how you want to use the demo app.
   - Use `demo-bill-pay.vercel.app` if you're using the [hosted demo app](#run-the-hosted-demo-app).
   - Use `localhost:3000` if you plan to clone the repository and [run the demo app on your local machine](#install-and-run-the-demo-app-locally).

## Check your data type settings

Check the following data types are set to Fetch on first link in your data type settings:

Bills, Bill payments, Company

For more information, see [Data type settings](/core-concepts/data-type-settings).

## Run the hosted demo app

1. Go to the [demo-bill-pay](https://github.com/codatio/demo-bill-pay) repository on GitHub.

2. Open https://demo-bill-pay.vercel.app/ in a new browser tab. The app start screen is displayed:

![bill-pay_app-start-screen](/img/use-cases/bill-pay/bill-pay_app-start-screen-get-started.png)

## Install and run the demo app locally

To run the demo app on your local machine, you'll need to have `npm` version 16.9.0 installed.

1. Clone the [demo-bill-pay](https://github.com/codatio/demo-bill-pay) GitHub repository to your local machine.

2. Install the dependencies by running this command:

   ```bash
   npm install
   ```

3. In the root directory, create a `.env` file containing your Codat authorization header as an environment variable:

   ```
   CODAT_AUTH_HEADER="{your-auth-header}"
   ```
   You can find your authorization header in the Codat Portal. Go to **Developers > API keys**, then copy your authorization header from the relevant column.

4. Run the app: (??? Add steps for different operating systems?)

   ```bash
   npm run dev
   ```

5. Open [https://localhost:3000](https://localhost:3000) to view the app start screen.

## See Link in action then launch the demo app

Before using the demo app, try out the steps your customers would follow when authorizing access to their accounting data.

We built the authorization flow for the demo app using [Hosted Link](/auth-flow/authorize-hosted-link), which creates a company and a data connection to QuickBooks Online for the user.

In a production scenario, the following steps would be performed by an SMB user.

1. From the app start screen, click **Get Started**.
2. Follow the instructions in the App and Link UI to:
   - Create a demo company.
   - Authorize the bill pay demo app to access required data from your QuickBooks Online sandbox company.
   - Launch the bill pay demo app UI.

:::tip Which integration should I choose?

In this guide, we're connecting to a QuickBooks Online sandbox company. If you're following along, select the **Intuit QuickBooks Sandbox** tile when prompted to select your accounting software.

:::

If the connection to your QuickBooks Online sandbox company was successful, you're redirected to the URL you specified in the Codat Portal earlier.

*Technical box:*
When the app loads, it makes a request to the Get Bills endpoint to retieve all paid and unpaid bills from your QBO Sandbox account. (Pulls accounts payable)
Also calls the GET accounts endpoint to retrieve the bank accounts for mapping when you pay a bill.

companies/{companyId}/data/accounts

Does Not call bankAccounts endpoint. Your own app could include functionality for creating an account, if one does not already exist.