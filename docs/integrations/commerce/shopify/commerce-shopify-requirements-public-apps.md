---
title: "Requirements for public apps"
description: "Everything you need to know to use our Shopify integration with a public app, including the provider requirements and app functionality"
sidebar_label: Public apps requirements
---

## Provider requirements for public apps

Unlike [custom apps](/integrations/commerce/shopify/commerce-shopify-custom-apps), public apps must pass Shopify's app approval process before use. To use our integration with a public app:

- Your app must satisfy the [Requirements for apps in the Shopify App Store](https://shopify.dev/apps/store/requirements), as published on the Shopify Developers Platform.
- Your app must be reviewed and approved by Shopify (this can take up to two weeks).
- If you plan to charge for your app, you will need to integrate to [Shopify's billing API](https://shopify.dev/docs/apps/billing).
  
:::caution Terms of Service for public apps

Make sure that your use case is in accordance with Shopify's Terms of Service. 

:::

Additionally, if you need access to over 60 days of orders from Shopify stores, you must submit a _Read all orders_ request, as noted in [Create a Shopify public app](/integrations/commerce/shopify/commerce-shopify-setup#create-a-shopify-public-app). You'll receive an email from Shopify when your request has been processed; this might take up to seven business days.

Codat can't guarantee that Shopify will approve your public app or grant access to over 60 days of order data.

## Functional requirements for public apps

To work with our Shopify integration, your public app needs to support some specific functionality. This is required to meet Shopify's own requirements, and to enable your merchants to authenticate and share their data using [Hosted Link](/auth-flow/authorize-hosted-link). In particular, Shopify require that app authorization flows begin in the Shopify App Store, not from within partner apps.

You'll need to:

- [Configure your public app as a redirect URL](/integrations/commerce/shopify/commerce-shopify-requirements-public-apps#configure-your-public-app-as-a-redirect-url) in the Codat Portal.
- Build a public app that supports the [app functionality and authorization flow](/integrations/commerce/shopify/commerce-shopify-requirements-public-apps#app-functionality-and-authorization-flow).

### Configure your public app as a redirect URL

First, it's important to set your Shopify App Store URL - for example, `https://apps.shopify.com/myapp` - as a redirect URL. When this is configured, the merchant is redirected back to the App Store after they've authenticated in Hosted Link.

To set a redirect URL:

1. In the Codat Portal, go to the [Redirects](https://app.codat.io/settings/redirects) page.
2. Enter your App Store URL in the **URL** field.
3. Under **Allowed redirects URLs**, add your App Store URL.

### App functionality and authorization flow

The following diagram outlines the functionality your app must provide, such as the automated creation of companies and data connections. It also shows the authorization flow between your app and Codat's Hosted Link feature.

![Shopify functional requirements for public apps](/img/integrations/commerce/shopify/shopify-public-apps-flow-diagram.png "Swimlane diagram showing the functional requirements for Shopify public apps.")

1. The merchant views your app in the Shopify App Store. If it's unlisted, they open the app URL that you provided.
2. Your app captures and stores the `Shop` value and HMAC (hash message authentication code) contained in the store URL.

   :::info HMAC validation

   Your app _must_ validate the HMAC as explained in [this blog post](https://medium.com/@jophin.joseph88/shopify-webhooks-hmac-validation-on-nodejs-express-ac66bc288e3e).

   :::   

3. Your app [creates a company](/platform-api#/operations/create-company) to represent the merchant.
4. Your app [creates a data connection](/platform-api#/operations/create-connection) to Shopify. Supply the returned `companyId` in the request path and the platform key `fztf` in the body.
   
   A `linkUrl` value is returned.

5. Your app appends the `Shop` value (stored in step two) to the `linkUrl` as a query parameter to form a store-specific Link URL.

   ```
   https://link.codat.io/company/<companyId>?<shop-value>
   ```

6. Your app redirects the merchant to the store-specific Link URL, including the `Shop` query parameter.
7. Hosted Link is loaded in the merchant's browser. The merchant enters their Shopify credentials to authenticate.
8. If authenticated, the merchant is redirected back to your app in the App Store.

The merchant has now successfully connected their Shopify store via the public apps approach. You can now retrieve commerce data through the Commerce API.
