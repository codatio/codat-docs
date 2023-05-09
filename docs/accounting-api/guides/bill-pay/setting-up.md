---
title: "Set up and run the bill pay demo app"
sidebar_label: "Set up and run"
description: "Prepare your Codat instance, choose an installation method, and run the demo app"
---

import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";

### 🚀 In this section, you will...

- Set up the **QuickBooks Online Sandbox** integration
- Configure Link to use the demo app's redirect URL
- Install the demo app and run it on your local machine

###  Set up QuickBooks Online

Set up the QuickBooks Online Sandbox integration to access a realistic set of example bills to use with the demo app. Before setting up the integration, you'll need to sign up for a [QuickBooks Online](https://quickbooks.intuit.com/) account.

:::info Why QuickBooks Online?

We've chosen QuickBooks Online for this demo guide because it provides easy access to sandbox data through a free trial account. You can use the demo app with a different integration, such as the Codat sandbox, if you prefer.

:::

1. Sign up or sign in to the [Intuit Developer Portal](https://developer.intuit.com/).
2. Create a QuickBooks Online app.
3. Configure your new app with the Codat *sandbox* redirect URI: `https://quickbooksonlinesandbox.codat.io/oauth2/callback`
4. In the [Codat Portal](https://app.codat.io/), add your app's secure keys to the **QuickBooks Online Sandbox** integration.
   :::caution Use your development keys
   Make sure you use your app's *development keys* when configuring the sandbox integration.
   :::
5. Enable the **QuickBooks Online Sandbox** integration.

For full instructions, see [Set up the QuickBooks Online integration](/integrations/accounting/quickbooksonline/accounting-quickbooksonline-new-setup).

Your QuickBooks Online account gives you access to a US sandbox company for testing purposes. You can open this company and take a look at some bills, bill payments, and other relevant sandbox data. You'll access some of this data later in this guide.

###  Configure Link to use the demo app's redirect URL

1. In the Codat Portal, go to **Settings > Redirects** to view the [Redirects](https://app.codat.io/settings/redirects) page.

2. Enter the following redirect URL in the **URL** field:
   ```http
   https://<YOUR_DOMAIN>/connection-successful   
   ```
   <Tabs>
   <TabItem value="local" label="Local installation"> 
   
   If you intend to install and run the demo app locally, replace `<YOUR_DOMAIN>` with `localhost:3000`
   
   </TabItem>

   <TabItem value="hosted" label="Hosted app">
   
   If you're using the hosted app, replace `<YOUR_DOMAIN>` with `demo-bill-pay.vercel.app`
   
   </TabItem>
   </Tabs>   

###  Install and run the demo app locally

To run the demo app on your local machine:

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

### Recap

You've now configured Codat and run the bill pay demo app.

<hr />

### Read next

- [Authorize access to accounting data using Link](/accounting-api/guides/bill-pay/authorize-access)
