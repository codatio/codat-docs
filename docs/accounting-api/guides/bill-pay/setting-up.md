---
title: "Set up and run the bill pay demo app"
sidebar_label: "Set up and run"
description: "Configure your Codat account and then run the demo app"
---

The bill pay demo app can be installed and run locally or used as a hosted version. Whichever option you choose, you first need to set up an accounting integration, configure the app's redirect URI, and check the required data types are enabled.

We're using the QuickBooks Online Sandbox integration to provide a realistic source of sandbox data with minimal setup. You can use a different platform, if you prefer.

## Set up the QuickBooks Online Sandbox integration

- Make sure you use your app's development keys
- Enable the integration
- Link out to the full QBO integration setup article

Your Intuit Developer account is created with one US sandbox company. To add more sandbox companies for different locales, go to the [Manage sandbox companies](https://developer.intuit.com/app/developer/sandbox) page in the Ituit Developer Portal. New step - Launch your sandbox company in QBO by clicking its name.

## Configure the demo app redirect URI

- If using the hosted app, use `demo-bill-pay.vercel.app` as the domain.
- If running the app locally, use `localhost:3000` as the domain. 

`https://{your-domain}/connection-successful`

## Check your data type settings

Check the following data types are set to Fetch on first link in your data type settings:

Bills, Bill payments, Company

For more information, see [Data type settings](/core-concepts/data-type-settings).

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

4. Run the app:

   ```bash
   npm run dev
   ```

5. Open [https://localhost:3000](https://localhost:3000) to view the app start screen.

## Run the hosted demo app

1. Go to the [demo-bill-pay](https://github.com/codatio/demo-bill-pay) repository on GitHub.

2. Open https://demo-bill-pay.vercel.app/ in a new browser tab. The app start screen is displayed.

Add screenshot of the first page
