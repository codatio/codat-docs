---
title: "Set up the Sage Business Cloud Accounting integration"
description: "Explore our API integration with Sage Business Cloud Accounting."
createdAt: "2020-09-11T10:50:58.802Z"
updatedAt: "2023-01-16T16:54:34.143Z"
---

Before you can access data from customers who use Sage Business Cloud Accounting, you need to set up the Sage Business Cloud Accounting integration in the Codat Portal. You'll need to:

- Register a new application on the Sage developer site and retrieve your secure keys.
- Add your application's secure keys to the Codat Portal.
- Enable your Sage Business Cloud Accounting integration in the Codat portal.

:::Note Supported versions and geographies

Codat currently supports the following versions of Sage Business Cloud Accounting:

- Version 3.1
- Version 3.0

Our integration with Sage Accounting API allows you to pull data from users with accounts based in the UK, Ireland, Germany, Spain, Portugal, France, USA, Canada, and the UAE.

Codat does not currently support Sage Business Cloud versions that cover Australia, New Zealand, South Africa, and the Asian market edition (Hong Kong, Singapore, and Malaysia).
:::

:::Caution Change to Sage Business Cloud Accounting setup

If you set up your [Codat integration with Sage Business Cloud Accounting](/accounting-sagebusinesscloud) **before** October 19, 2020, you'll notice a change to the credentials page in the Codat portal. The option **Client ID, client secret, signing secret and subscription key (API v3 - UKI)** is selected for your integration.

**To continue to use version 3.0**, you don't need to make any changes. The integration will continue to work as normal. However, when you link new companies you must only select the UK or Ireland flags.

**To start using version 3.1** with extended coverage for UK, Ireland, and US, Canada, France, Germany and Spain - you'll need to add new credentials as described below. You don't need to remove your existing version 3.0 credentials or relink your existing companies. When new companies do link, they'll have access to all nationalities supported by version 3.1.

Version 3.1 also allows a customer to choose which company data file they want to link and sync if they manage different accounts from the same machine.
:::

## Register your application and retrieve your secure keys

To register your Sage Business Cloud Accounting application, you need to use Sage's development portal.

1. Go to the <a className="external"  href="https://developerselfservice.sageone.com/session/new" target="_blank">Sage development portal</a> and sign in. If you don't have an account already, you can create one now. Use either your email address or a GitHub account.
2. When you're signed in, on the welcome page, select **Create app** to register your new application.
3. Complete the application details.

- In the **App Name** box, enter a short name for your application. This name is displayed to your customers during the linking process.
- In the **Email Address** box, enter a contact address for app users.
- In the **Homepage URL** box, enter your company's website address.
- In the **Callback URLs** box, enter the following URL for Codat: `https://sageone.codat.io/oauth/callback`

4. Select **Save**.  
   The details of your newly registered application are displayed.

![](/img/old/f7ebfa6-215d3b2-Sage_Business_Cloud_App_Details_edited.png "215d3b2-Sage_Business_Cloud_App_Details_edited.png")

5. Either keep this page open in a separate browser tab, or copy the **Client ID** and **Client Secret** to a Word document or similar.

## Add your application's secure keys to Codat

If you currently use version 3.0 of Sage Business Cloud Accounting, you don't need to remove your existing credentials.

1. In the Codat Portal, go to the <a className="external" href="https://app.codat.io/settings/integrations/accounting" target="_blank">**Accounting integrations**</a> page.

2. Locate **Sage Business Cloud Accounting** and click **Set up**. The **Integration settings** page is displayed.

3. Under **What credentials do you have?**, select **Client ID and client secret only (API v3.1 - UKI, US, CA, DE, ES, FR)**.

4. Enter the values for the **Client ID** and **Client secret** from your application in the Sage development portal.

5. Click **Save**. A confirmation message appears if the settings were saved successfully.

6. The **Enable Sage Business Cloud Accounting** dialog is displayed. Select whether to enable the integration now or later.

:::Note

Make sure that your secure keys don't contain any spaces.
:::

## Enable the Sage Business Cloud Accounting integration

1. In the Codat Portal, go to the <a className="external" href="https://app.codat.io/settings/integrations/accounting" target="blank">**Accounting integrations**</a> page.
2. Locate **Sage Business Cloud Accounting** and click the toggle to enable the integration.

You can also click **Manage** to view the integration's settings page, and then enable the integration from there.

Your Sage Business Cloud Accounting integration is now set up.
