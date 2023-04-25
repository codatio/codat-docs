---
title: "Set up and run the bill pay demo app"
sidebar_label: "Set up and run"
description: "Prepare your Codat instance, choose an installation method, and run the demo app"
---

### 🚀 In this section, you will...

- Set up the **QuickBooks Online Sandbox** integration

   We've chosen QuickBooks Online because it offers a free trial account with access to realistic accounts payable data through a sandbox companies. You might want to use a different integration instead, but make sure it includes access to sandbox data.

- Configure Link to use the demo app's redirect URL
- Enable the required data types
- Choose an installation method: either install the demo app locally or run our hosted version
- Run the demo app

###  Set up the QuickBooks Online Sandbox integration

Before you can try out the functionality of the demo app, you first need to set up the QuickBooks Online Sandbox integration. Here's a summary of the setup process &mdash; [see the documentation](/integrations/accounting/quickbooksonline/accounting-quickbooksonline-new-setup) for complete instructions.

1. Sign in to the [Intuit Developer Portal](https://developer.intuit.com/).
2. Create a QuickBooks Online app.
3. Configure your new app with the Codat *sandbox* redirect URI: `https://quickbooksonlinesandbox.codat.io/oauth2/callback`
4. In the [Codat Portal](https://app.codat.io/), add your app's secure keys to the **QuickBooks Online Sandbox** integration.
   :::caution Use your development keys
   Make sure you use your app's *development keys* when configuring the integration.
   :::
5. Enable the **QuickBooks Online Sandbox** integration.

**Sandbox companies**

Your Intuit Developer account is created with a single sandbox company configured for the US. You're allowed to create additional sandbox companies for different regions. To do so, go to the [Manage sandbox companies](https://developer.intuit.com/app/developer/sandbox) page in the Intuit Developer Portal.

To open a sandbox company in QuickBooks Online, click the company name on the [Manage sandbox companies](https://developer.intuit.com/app/developer/sandbox) page. Your sandbox company opens in QuickBooks Online in a new browser tab.

###  Configure Link to use the demo app's redirect URL

1. In the Codat Portal, go to **Settings > Redirects** to view the [Redirects](https://app.codat.io/settings/redirects) page.
2. Enter the redirect URL in the **URL** field:
   ```http
   https://{your-domain}/connection-successful   
   ```
   For `{your-domain}`, enter the value that corresponds with your installation method.
   - Use `demo-bill-pay.vercel.app` if you're using our [hosted demo app](#run-the-hosted-demo-app).
   - Use `localhost:3000` if you plan to clone the repository and [run the demo app on your local machine](#install-and-run-the-demo-app-locally).

###  Check your data type settings

In your [data type settings](https://app.codat.io/settings/data-types), check the data types required by the demo app are set to **Fetch on first link**. You'll need to select:

- Bill Payments
- Bills
- Company

###  Run the hosted demo app

If you want to quickly see the functionality of the demo app, you can run it on our Vercel instance in a few minutes. To get a deep dive into the code, we recommend you install and run the app on your local machine (see the next section).

1. Go to the [demo-bill-pay](https://github.com/codatio/demo-bill-pay) repository on GitHub.
2. Open https://demo-bill-pay.vercel.app/ in a new browser tab. The **Bill Pay** app start screen is displayed:

   ![bill-pay_app-start-screen](/img/use-cases/bill-pay/bill-pay_app-start-screen-get-started.png)

3. Click **Get Started** to start the authorization flow.


###  Install and run the demo app locally

To run the demo app on your local machine, you'll need to have `npm` version 16.9.0 installed.

1. Clone the [demo-bill-pay](https://github.com/codatio/demo-bill-pay) GitHub repository to your local machine.

2. Install the dependencies by running the following command:

   ```bash
   npm install
   ```

3. In the root directory, create a `.env` file containing your Codat authorization header as an environment variable:

   ```
   CODAT_AUTH_HEADER="{your-auth-header}"
   ```
   You can find your authorization header in the Codat Portal. Go to **Developers > API keys**, then copy your authorization header from the relevant column.

4. Run the app: (??? Add tabs for Rider and Visual Studio)

   ```bash
   npm run dev
   ```

5. Open [https://localhost:3000](https://localhost:3000) to view the app start screen.
6. Click **Get Started** to start the authorization flow.

### Recap

You've now configured Codat and run the bill pay demo app, either locally or using our hosted version.

<hr />

### Read next

- [Authorize access to accounting data using Link](/accounting-api/guides/bill-pay/authorize-access)
