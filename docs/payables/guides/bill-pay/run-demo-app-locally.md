---
title: "Run the app locally"
sidebar_label: "Run the app locally"
description: "Learn how to set up the QuickBooks integration, configure Codat, and run the bill pay demo app on your local machine"
---

### 🚀 In this section, you will...

- Set up Codat's QuickBooks Online integration
- Configure Link to use the demo app's redirect URL
- Install the demo app and run it on your local machine
- Review the push history in the Codat Portal

### Prerequisites

Before running the demo app locally:

- In the Codat Portal, enable **Fetch on first link** for Bills, Bill payments, and Companies on the <a href="https://app.codat.io/settings/data-types" target="_blank">Data type settings page</a>. These data types will be automatically pulled when a company is linked for the first time.
- Make sure that npm version 16.9.0 is installed on your machine.
- Set up the QuickBooks Online Sandbox integration in the Codat Portal (see the next section).

If you haven't already, sign up for a free QuickBooks Online account.

###  Set up the QuickBooks Online integration

Start by setting up the QuickBooks Online Sandbox integration. For a detailed guide, see [Set up the QuickBooks Online integration](/integrations/accounting/quickbooksonline/accounting-quickbooksonline-new-setup).

:::info Why QuickBooks Online?
We've chosen QuickBooks Online for this demo guide because it provides easy access to sandbox data through a free trial account. You can use the demo app with a different integration that supports pushing Bill payments, such as Codat sandbox, if you prefer.
:::

1. Sign up or sign in to the [Intuit Developer Portal](https://developer.intuit.com/).
2. Create a QuickBooks Online app.
3. Go to the app's **Development Settings**.
4. In the **Redirect URIs** section, configure your new app with the redirect URI for the QuickBooks Online Sandbox integration: `https://quickbooksonlinesandbox.codat.io/oauth2/callback`
   
   ![bill-pay_intuit-developer-redirect-uri](/img/use-cases/bill-pay/bill-pay_intuit-developer-redirect-uri.png "Intuit Developer Portal: An app configured with the redirect URI for Codat's QuickBooks Online Sandbox integration.")
   
5. Sign in to the Codat Portal.
6. On the navigation bar, go to **Settings > Integrations > Accounting** to view the [Accounting integrations](https://app.codat.io/settings/integrations/accounting) page.
7. Click **Manage** next to the **QuickBooks Online Sandbox** integration.
8. Enter your app's development keys in the **Client ID** and **Client secret** fields.
9. Click **Save**.
10. Enable the integration.

###  Configure Link to use the demo app's redirect URL

Next, set the redirect URL defined in the demo app as the Codat Redirect URL. This URL redirects you to the **Connection Successful** screen after you've connected the app to an accounting package in the Hosted Link flow.

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

8. Click **Get Started** and follow the on-screen instructions.

Like the hosted app, you can now create a company, connect to your sandbox QuickBooks Online company, and view and pay bills.

### Review the push history in Codat

After paying a bill, you can check your pushed Bill payments are reflected in the Codat Portal.

1. On the navigation bar, select **Companies**.
2. Select the company you connected via the demo app.
3. Select **Data > Push history**.
4. Review the push history. Look for the recent  `billPayments` push operation and check that it completed successfully.

### Recap

You've set up the QuickBooks Online Sandbox integration and configured Link with the demo app's redirect URL. You ran the demo app locally and completed the authorization flow.

<hr />

### Read next

Explore the app's functionality in more depth:

- [How the demo app works](/payables/guides/bill-pay/how-the-demo-app-works)
