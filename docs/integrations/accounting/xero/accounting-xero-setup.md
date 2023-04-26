---
title: "Set up the Xero integration"
description: "Learn how to set up our API integration with Xero"
---

In this guide, we'll show you how to quickly set up our Xero API integration so you can access accounting data from your SMB customers who use Xero.

After completing this guide, you'll be able to use the Xero integration to connect up to 25 companies. If you want to connect more than 25 companies, you'll need to [register as an official Xero App Partner](/integrations/accounting/xero/xero-app-partner-program).

:::tip Tell us about your use case
Xero App Partnership is not possible for all use cases. We encourage you to work closely with Codat for guidance on your specific use case.
:::

🚀 **Steps to set up the Xero integration:**

- Create a Xero app and configure the redirect URI
- Retrieve your app's secure keys
- Add your app's secure keys to the Codat Portal
- Enable the Xero integration

## Create a Xero app and configure the redirect URI

1. Sign up or log in to the [Xero Developer portal](https://developer.xero.com/) using your Xero credentials.
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

1. Select your app on the **My Apps** tab.
2. On the **App details** page, enter links to the relevant documents in the **Privacy policy URL** and **Terms and conditions URL** fields. Links must start with `https://`.
3. Click the **Save** button.
:::

## Retrieve your app's secure keys

You'll need to retrieve your app's secure keys&mdash;the client ID and client secret&mdash;from the Xero Developer portal.

1. Select the **My Apps** tab and then select your app.
2. Select **Configuration** in the left pane.
3. Click the eye icon to reveal your app's **Client id**.
4. Click **Generate a secret** to generate a client secret for your app. The secret appears in the **Client secret 1** box:

   ![Xero app client secret](/img/integrations/accounting/xero/xero_app-client-secret-1-field-obscured.png "The app configuration page in the Xero Developer portal showing a generated client secret.")

5. Copy the client secret for your app and store it in a secure place.
   :::caution Keep the client secret safe!
   If you leave the **Configuration** page for your app, you won't be able to view the client secret again and will need to generate a new one.
   :::
6. Keep the **Configuration** page open in your browser. You'll need to enter your secure keys in the next procedure.

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

You can now use your Xero integration to connect up to 25 companies. If you want to use your integration to connect more than 25 companies, you need to [register with Xero as an official Xero App Partner](/integrations/accounting/xero/xero-app-partner-program).

See the next section for information about configuring direct bank feeds using Xero's Bank Feeds API.

## Configure direct bank feeds

To create a direct bank feed using Xero's Bank Feeds API, push (`POST`) [Bank Transactions](/accounting-api#/schemas/banktransactions) via the Codat API. Bank transactions must be pushed in chronological order.

### Requirements to configure direct bank feeds

To create direct bank feeds in Xero:
- You must have Xero app partner status.
- Xero must have enabled the Xero Bank Feeds API for your registered app.

You also need to enable direct bank feeds in the Codat Portal. To do so, toggle on **Enable Bank Feeds** on the Xero integration settings page.

![](/img/old/fd2290d-2022-04-28_11h09_24.png "2022-04-28_11h09_24.png")

For more information, see the Bank Feeds API [Overview](https://developer.xero.com/documentation/bank-feeds-api/overview) in the Xero Developer documentation.

If you don't have access to direct bank feeds, a 403 error is returned if you try to push bank transactions to Xero. For example:

```json Bank transactions push error - Xero
{
  "type": "invalid-organization-bank-feeds",
  "title": "Invalid Organization",
  "status": 403,
  "detail": "The organization does not support automated bank feeds."
}
```

## Recap

In this setup guide, you've learned how to create a Xero app configured with the required Codat redirect URI; retrieve the secure keys for your app and add them to the Xero integration in the Codat Portal; and enable the integration. You've also learned how to create direct bank feeds by posting Bank transactions via Codat's API, as well as Xero's requirements for using their Bank Feeds API.
