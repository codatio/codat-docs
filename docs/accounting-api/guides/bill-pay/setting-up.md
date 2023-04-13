---
title: "Set up and run the bill pay demo app"
sidebar_label: "Set up and run"
description: "Prepare your Codat instance to run the bill pay demo app"
---

Introduction

## Configure your Codat account for the demo app

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.

### Set up the QuickBooks Online Sandbox integration

- Make sure you use your app's development keys
- Enable the integration
- Link out to the full QBO integration setup article

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 

### Configure the demo app redirect URI

- If using the hosted app, use `demo-bill-pay.vercel.app` as the domain.
- If running the app locally, use `localhost:3000` as the domain. 

`https://{your-domain}/connection-successful`

### Enable the data types

Required:

Bills, Bill payments, Company

You have two options for running the demo app.

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
