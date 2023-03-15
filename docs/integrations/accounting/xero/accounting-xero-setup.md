---
title: "Set up the Xero integration"
description: "Explore our API integration with Xero"
createdAt: "2019-02-20T10:49:51.454Z"
updatedAt: "2023-01-16T11:30:45.447Z"
---

In this guide, we'll show you how to quickly set up our Xero API integration and start accessing accounting data from your SMB customers who use Xero.

When you've completed this guide, you can use the Xero integration to connect up to 25 companies. If you want to connect more than 25 companies, you need to [register with Xero as an official Xero App Partner](/integrations/accounting/xero/xero-app-partner-program).

:::tip Tell us about your use case
Xero App Partnership is not possible for all use cases. We encourage you to work closely with Codat for guidance on your specific use case.
:::

🚀 **Steps to set up the Xero integration:**

- Create a Xero app and configure the redirect URI
- Retrieve your app's secure keys
- Add the app's secure keys to the Codat Portal
- Enable the Xero integration

## Create a Xero app and configure the redirect URI

1. Log in to the [Xero Developer portal](https://developer.xero.com/) using your Xero credentials.
   :::info Free trial account
   You can sign up for a free trial Xero Developer account.   
   :::
2. Select the **My Apps** tab.
2. Click the **New app** button at the top right.
3. Enter the following information in the **Add a new app** window:
   - **App name**: Enter a name for your application. This will be displayed to your users when they share their accounting data in your auth flow, so choose a name that clearly identifies your organization.
   - **Integration type**: Select **Web app**.
   - **Company or application URL**: Enter the URL for your company's website prefixed with `https://`
   - **Redirect URI**: Enter `https://xero.codat.io/oauth2/callback`
4. Select the checkbox to agree to the Xero Developer Platform Terms & Conditions.
5. Click **Create app**.

Your new app is displayed on the **App details** page.

:::tip Save time by adding document links now
It's worth adding links to your privacy policy and terms and conditions at this stage. This is a requirement if you want to [become a Xero App Partner](/integrations/accounting/xero/xero-app-partner-program) and will save you time later.

1. Select your app.
2. On the **App details** page, enter links prefixed with `https://` in the **Privacy policy URL** and **Terms and conditions URL** fields.
3. Click the **Save** button.
:::

## Retrieve your app's secure keys

You'll need to retrieve your app's secure keys&mdash;the client ID and client secret&mdash;from the Xero Developer portal.

1. Select the **My Apps** tab and then select your app.
2. Select **Configuration** in the left pane.
3. Click the eye icon to reveal your app's **Client id**.
4. Click **Generate a secret** to generate a client secret for your app. The secret appears in the **Client secret 1** box.
   :::danger Keep the client secret safe!
   Copy the client secret for your app and store it in a safe place. If you leave the **Configuration** page for your app, you won't be able to view the client secret again and will need to generate a new one.
   :::
5. Keep the **Configuration** page open in your browser. You'll need to enter your secure keys in the next procedure.

## Add your Xero app's secure keys to the Codat Portal

Next, add the secure keys for your Xero application to the Codat Portal.

1. In the Codat Portal, navigate to **Settings > Integrations > Accounting** to view the [**Accounting integrations**](https://app.codat.io/settings/integrations/accounting) page.
2. Locate **Xero** and click **Set up**.
3. Under **Integration settings**, enter the values for the **Client ID** and **Client secret** from your app in the Xero Developer portal. Secure keys must not contain spaces.
4. Click **Save**. A confirmation message appears if the settings were saved successfully.
5. The **Enable Xero** dialog is displayed. Select whether to enable the integration now or later.

## Enable the Xero integration

1. In the Codat Portal, go to the [**Accounting integrations**](https://app.codat.io/settings/integrations/accounting) page.
2. Locate **Xero** and select the toggle to enable the integration.

You can also click **Manage** to view the integration's settings page, and then enable the integration from there.

## Next steps

You can now use your Xero integration to connect up to 25 companies. If you want to use your integration to connect more than 25 companies you need to [register with Xero as an official Xero App Partner](/integrations/accounting/xero/xero-app-partner-program).

If you want to set up bank feeds, see the next section.

<hr />

// stopped here at 17:12 on 15 March 2023

## Configure direct bank feeds

To create a direct bank feed using Xero's Bank Feeds API, you push (`POST`) [Bank Transactions](/accounting-api#/schemas/banktransactions) via the Codat API. Bank transactions must be pushed in chronological order.

To create direct bank feeds in Xero, you must have app partner status. Additionally, the Bank Feeds API must be enabled by Xero for your registered app. For more information, see the Bank Feeds API <a href="https://developer.xero.com/documentation/bank-feeds-api/overview" target="_blank">Overview</a> in the Xero Developer documentation.

Make sure you enable Bank Feeds in your Codat portal. You can do so by navigating to the **Manage** section of the portal under the **Integrations > Accounting** tab, and clicking the toggle. Save the page to validate this configuration.

![](/img/old/fd2290d-2022-04-28_11h09_24.png "2022-04-28_11h09_24.png")

If you don't have access to direct bank feeds, a 403 error is returned if you try to push bank transactions to Xero. For example:

```json Bank transactions push error - Xero
{
  "type": "invalid-organization-bank-feeds",
  "title": "Invalid Organization",
  "status": 403,
  "detail": "The organization does not support automated bank feeds."
}
```

THIS SECTION MOVES TO A NEW PAGE???

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

<img src="/img/old/01c6df4-xero-app-partner-status.png" />
