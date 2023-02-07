---
title: "Set up the Xero integration"
description: "Explore our API integration with Xero."
createdAt: "2019-02-20T10:49:51.454Z"
updatedAt: "2023-01-16T11:30:45.447Z"
---

Before you can access data from your customers who use Xero for their accounting, you need to set up the Xero integration.

You'll need to:

- Create a Xero app.
- Retrieve your app's secure keys.
- Add the app's secure keys to the Codat Portal.

To link more than 25 companies, you need to [become a Xero app partner](/accounting-xero-setup#apply-to-become-a-xero-app-partner).

## Create a Xero app

Create and configure an app in Xero Developer.

1. Log in to <a className="external" href="https://developer.xero.com/" target="blank">Xero Developer</a> using your Xero credentials, or sign up for a Xero Developer account if you don't already have one.

2. On the **My Apps** tab, click **New app**.

3. Enter the following information in the **Add a new app** dialog:

   - **App name**: Enter a name for your application. This will be displayed to your users when they share their accounting data in Link, so choose a name that clearly identifies your organization.
   - **Integration type**: Select **Web app**.
   - **Company or application URL**: Enter the URL for your company's website prefixed with `https://`
   - **Redirect URI**: Enter `https://xero.codat.io/oauth2/callback`

4. Select the checkbox to agree to the Xero Developer Platform Terms & Conditions.

5. Click **Create app**.

Your new app is displayed on the **Apps details** page.

If you don't have app partner status with Xero, **25 max connections** is displayed next to the app on the **My Apps** tab. Non app partners can only link a maximum of 25 companies through the integration.

For example:

<img
  src="https://files.readme.io/f3cc615-xero-non-partner-company-25-connection-max-limit.png.jpg"
  alt="xero-non-partner-company-25-connection-max-limit.png.jpg"
/>

If you want to apply to become a Xero app partner, you need to provide your privacy policy and terms and conditions for your app.

1. Open the **App details** page for your app.
2. Enter `https://` links to your privacy policy and terms and conditions in the relevant boxes.
3. Click **Save**.

For details on how to become a Xero app partner, see [Apply to become a Xero app partner](/accounting-xero-setup#apply-to-become-a-xero-app-partner).

## Retrieve your app's secure keys

Retrieve the secure keys for the app you created in Xero Developer.

1. Click **My Apps** in the top navigation bar, then select your application from the list.

2. Click **Configuration** in the left pane.

3. Click the eye icon to show your app's Client ID in the **Client id** box.

4. Click **Generate a secret** to generate a client secret for your app; the secret appears in the **Client secret 1** box.

   **Note**: **Copy the secret and store it in a safe place.** If you leave the **Configuration** page, you won't be able to view the same client secret again; you'll need to generate a new one.

5. Keep this page open in your browser. You'll need to enter your secure keys in the following procedure.

## Add your Xero app's secure keys to the Codat Portal

Next, you can add the secure keys for your Xero application to the Codat Portal.

1. In the Codat Portal, go to the <a className="external" href="https://app.codat.io/settings/integrations/accounting" target="_blank">**Accounting integrations**</a> page.
2. Locate **Xero** and click **Set up**.
3. Under **Integration settings**, enter the values for the **Client ID** and **Client secret** from your app in Xero Developer.
4. Click **Save**. A confirmation message appears if the settings were saved successfully.
5. The **Enable Xero** dialog is displayed. Select whether to enable the integration now or later.

:::note

Make sure that your secure keys don't contain any spaces.
:::

## Enable the Xero integration

1. In the Codat Portal, go to the <a className="external" href="https://app.codat.io/settings/integrations/accounting" target="blank">**Accounting integrations**</a> page.
2. Locate **Xero** and click the toggle to enable the integration.

You can also click **Manage** to view the integration's settings page, and then enable the integration from there.

## Configure direct bank feeds

To create a direct bank feed using Xero's Bank Feeds API, you push (`POST`) [Bank Transactions](/data-model/accounting/-banktransactions) via the Codat API. Bank transactions must be pushed in chronological order.

To create direct bank feeds in Xero, you must have app partner status. Additionally, the Bank Feeds API must be enabled by Xero for your registered app. For more information, see the Bank Feeds API <a href="https://developer.xero.com/documentation/bank-feeds-api/overview" target="_blank">Overview</a> in the Xero Developer documentation.

Make sure you enable Bank Feeds in your Codat portal. You can do so by navigating to the **Manage** section of the portal under the **Integrations > Accounting** tab, and clicking the toggle. Save the page to validate this configuration.

![](https://files.readme.io/fd2290d-2022-04-28_11h09_24.png "2022-04-28_11h09_24.png")

If you don't have access to direct bank feeds, a 403 error is returned if you try to push bank transactions to Xero. For example:

```json Bank transactions push error - Xero
{
  "type": "invalid-organisation-bank-feeds",
  "title": "Invalid Organisation",
  "status": 403,
  "detail": "The organisation does not support automated bank feeds."
}
```

## Apply to become a Xero App partner

:::success Get your app certified

Looking for a walkthrough of the app certification and listing process? We break down everything you need to know in our blog post, <a className="external" href="https://www.codat.io/blog/get-your-app-certified-on-the-xero-app-store/" target="_blank">"How to get your app certified on the Xero App store"</a>.
:::

To link more than 25 companies (excluding connections to the Xero demo company) you must become a Xero app partner.

Xero have specific requirements about who can gain app partner status and how they must build their integration. **Xero app partnership is not possible for all use cases.**

:::caution Connection limits for non-partner apps

Xero apps created by non-partners, known as _uncertified apps_, are limited to a maximum of 25 connections (excluding connections to the Xero demo company).

To remove this connection limit, you must be granted _app partner_ status with Xero. For more information, see [App Partner Overview](https://developer.xero.com/documentation/xero-app-store/app-partner-guides/overview) and [OAuth 2.0 API limits](https://developer.xero.com/documentation/guides/oauth2/limits/#uncertified-app-limits) in the Xero Developer documentation.
:::

:::caution Financial services providers

Financial services providers may be subject to additional commercial terms before being granted app partner status with Xero. If you are a financial services provider, we strongly recommend that you contact Xero before you start to build your integration. You can also contact your Codat sales or solutions representative to learn more about Xero app partnership.
:::

For detailed information about applying for app partner status with Xero, review the following articles in the Xero Developer documentation:

- <a
    href="https://developer.xero.com/documentation/xero-app-store/app-partner-guides/app-partner-steps"
    target="_blank"
  >
    Steps to becoming an app partner
  </a>

- <a
    href="https://developer.xero.com/documentation/xero-app-store/app-partner-guides/faqs/"
    target="_blank"
  >
    App Partner Program FAQs
  </a>

To start the app partner application process, click **Join the Xero App Store** on the **App details** page for your app. You can also contact api@xero.com with the details of the application you are building.

<img src="https://files.readme.io/01c6df4-xero-app-partner-status.png" />
