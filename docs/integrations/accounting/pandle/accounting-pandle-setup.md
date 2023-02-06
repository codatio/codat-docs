---
title: "Set up the Pandle integration"
description: "Explore our API integration with Pandle."
createdAt: "2020-06-29T09:20:33.919Z"
updatedAt: "2023-01-13T14:22:54.759Z"
---

Pandle is a cloud accounting platform designed to make the recording of transactions as simple and efficient as possible for accountants, bookkeepers and small business owners. Pandle is a UK-based platform with over 40,000 users.

Before you can access data from customers using Pandle for their accounting, you need to set up a Pandle integration in the Codat portal. You'll need to:

- Register a new application with Pandle.
- Wait for Pandle to send through your secure keys.
- Add your app's secure keys to the Codat portal.

We also recommend that you test your integration using a free Pandle account.

## Register your application

Currently Pandle doesn’t support online registrations, so you’ll need to send an email to [support@pandle.com](mailto:support@pandle.com) that includes the following details:

- **App name** – A short name for your app. Your customers will see this when they authorise your connection to their data.
- **Description** – A short description of what your app does that mentions Codat. For example: “As lenders, we’ll connect to our customers’ accounts to view or update them using Codat’s Pandle integration”.
- **Re-direct URI** – Customers are redirected to this URL after they authorise your app connection. For a Codat integration you must use `https://pandle.codat.io/oauth/callback`

## Wait for your secure keys

Pandle will issue secure keys to you, including a client ID and client secret. It may take a number of working days to receive these details.

## Add your app's secure keys to the Codat Portal

1. In the Codat Portal, go to the <a className="external" href="https://app.codat.io/settings/integrations/accounting" target="_blank">**Accounting integrations**</a> page.

2. Locate **Pandle** and click **Set up**.

3. Under **Integration settings**, enter the values for the **Client ID** and **Client secret** for your app that you received from Pandle.

4. Click **Save**. A confirmation message appears if the settings were saved successfully.

5. The **Enable Pandle** dialog is displayed. Select whether to enable the integration now or later.

:::note
Make sure that your secure keys don't contain any spaces.
:::

## Enable the Pandle integration

1. In the Codat Portal, go to the <a className="external" href="https://app.codat.io/settings/integrations/accounting" target="blank">**Accounting integrations**</a> page.
2. Locate **Pandle** and click the toggle to enable the integration.

You can also click **Manage** to view the integration's settings page, and then enable the integration from there.

Your Pandle integration is now set up.

## Test your integration

We recommend that you test your integration before sending Link URLs to customers.

1. Sign up for a free <a href="https://my.pandle.com/users/sign_up" target="_blank">Pandle account</a> as the business owner. You'll need to add a valid email address, and a VAT number in the correct format. For the rest of the registration form, you can enter dummy details if you choose to.
2. When your account setup is complete, log in to Pandle, choose the free subscription plan, and create some data for your test company, for example, some invoices.
3. Next, go to the Codat portal where you've enabled your integration and [create a test company](/portal-managing-companies#add-a-new-company).
4. Find the Link URL for your test company. Next to the company name, select **Request data**.
5. Use the Link URL to connect your Pandle account.
   - When Link opens, select _PANDLE_, and then select _Continue to Pandle_.
   - Log in to your Pandle account.
   - Authorise access to your account details.
6. Make sure that any data you've set up in your Pandle account is displayed in Codat portal for your test company.
