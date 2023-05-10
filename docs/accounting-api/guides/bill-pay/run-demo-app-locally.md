---
title: "Run the bill pay demo app locally"
sidebar_label: "Run the app locally"
description: "Prepare your Codat instance, choose an installation method, and run the demo app"
---

### 🚀 In this section, you will...

- Configure Link to use the demo app's redirect URL
- Install the demo app and run it on your local machine

### Prerequisites

- In the Codat Portal, enable **Fetch on first link** for the Bills, Bill payments, and Companies data types.
- Make sure that npm version 16.9.0 is installed on your machine.
- Sign up for a QuickBooks Online account at <a href="https://quickbooks.intuit.com/" target="_blank">https://quickbooks.intuit.com</a>.
- Set up the QuickBooks Online Sandbox integration in the Codat Portal (see the next section).

###  Set up QuickBooks Online

Set up the QuickBooks Online Sandbox integration to access a realistic set of example bills to use with the demo app. For a detailed guide, see [Set up the QuickBooks Online integration](/integrations/accounting/quickbooksonline/accounting-quickbooksonline-new-setup).

Image

![bill-pay_intuit-developer-redirect-uri](/img/use-cases/bill-pay/bill-pay_intuit-developer-redirect-uri.png "Intuit Developer Portal: An app configured with the redirect URI for Codat's QuickBooks Online Sandbox integration.")

:::info Why QuickBooks Online?
We've chosen QuickBooks Online for this demo guide because it provides easy access to sandbox data through a free trial account. You can use the demo app with a different integration that supports pushing Bill payments, such as Codat sandbox, if you prefer.
:::

1. Sign up or sign in to the [Intuit Developer Portal](https://developer.intuit.com/).
2. Create a QuickBooks Online app.
3. Configure your new app with the Codat *sandbox* redirect URI: `https://quickbooksonlinesandbox.codat.io/oauth2/callback`
4. In the [Codat Portal](https://app.codat.io/), add your app's secure keys to the **QuickBooks Online Sandbox** integration.

   :::caution Use your development keys
   Make sure you use your app's *development keys* when configuring the sandbox integration.   
   :::

5. Enable the **QuickBooks Online Sandbox** integration.

###  Configure Link to use the demo app's redirect URL

1. Sign in to the Codat Portal.

2. On the navigation bar, go to **Settings > Redirects** to view the [Redirects](https://app.codat.io/settings/redirects) page.

3. Enter the following redirect URL in the **URL** field:
   ```http
   https://localhost:3000/connection-successful   
   ```

###  Install and run the demo app locally

1. Clone the demo app repository to your local machine:

   ```sh
   git clone https://github.com/codatio/demo-bill-pay.git
   ```

2. On the command line, install the project dependencies:

   ```sh
   npm install
   ```
   
3. Copy the `.env.example` file in the root directory and rename it to `.env`.
4. Edit the contents of the `.env` file as follows:
   
   ```
   CODAT_AUTH_HEADER="<YOUR_AUTH_HEADER>"
   ```
   Replace `<YOUR_AUTH_HEADER>` with your authorization header from the Codat Portal. To find your auth header, go to **Developers > API keys**, then copy your authorization header from the relevant column.

5. Run the app:

   ```sh
   npm run dev
   ```

6. When the app is running, open [https://localhost:3000](https://localhost:3000) in your browser.

7. You'll see the **Bill Pay** start screen:

   ![bill-pay_app-start-screen-get-started](/img/use-cases/bill-pay/bill-pay_app-start-screen-get-started.png)
   

[Use the hosted bill pay demo app](/accounting-api/guides/bill-pay/use-bill-pay-demo-app) explains how to connect to QuickBooks Online and view and pay bills in the demo app UI. 

### Review the push history in Codat

After paying a bill, you can check your pushed Bill payments are reflected in the Codat Portal.

1. On the navigation bar, select **Companies**.
2. Select the company you connected via the demo app.
3. Select **Data > Push history**.
4. Review the push history. Look for the recent  `billPayments` push operation and check that it completed successfully.

### Recap

You've now configured Codat and run the bill pay demo app.

<hr />

### Read next

- [How the demo app works](/accounting-api/guides/bill-pay/how-the-demo-app-works)
