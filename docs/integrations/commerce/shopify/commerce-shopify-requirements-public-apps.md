---
title: "Requirements for public apps"
description: "Description goes here"
---

Unlike custom apps, public apps must pass Shopify's app approval process before use.

To use our Shopify integration using public apps, you must first create a public app in Shopify that meets the following criteria:

- Your app must meet the [Requirements for apps in the Shopify App Store](https://shopify.dev/apps/store/requirements), as published on the Shopify Developers Platform.
- Shopify must review and approve your app, which can take up to two weeks.
  
:::caution Terms of Service

Make sure your use case is in accordance with Shopify's Terms of Service. 

:::

Additionally, if you need to access over 60 days' of orders, you must submit a _Read all orders_ request as noted in [Create a Shopify public app](commerce-shopify-setup#create-a-shopify-public-app). You'll receive an email from Shopify when your request has been processed; this might take up to seven business days.

Codat can't guarantee that Shopify will approve your public app or grant access to over 60 days' of order data.

## Functional requirements for public apps

To work with our Shopify integration, your public app needs to support some specific functionality. This is required to meet Shopify's requirements and to enable your merchants to authenticate and share their data using [Hosted Link](/docs/auth-flow/authorize-hosted-link). In particular, Shopify require that app authorization flows begin in the Shopify App Store.

Add diagram here

### Configure your public app as the redirect URL

It's important to set the App Store URL of your public app - for example, `https://apps.shopify.com/myapp` - as the redirect URL for the Shopify integration. If this is configured correctly, the merchant is redirected back to your app in the App Store after they've authenticated in Hosted Link.

1. In the Codat Portal, go to the [Redirects](https://app.codat.io/settings/redirects) page.
2. Enter your store URL in the **URL** field.
3. Under **Allowed redirects URLs**, add your store URL.

### Public app flow

Your public app must support the following functionality.

1. The merchant views your app in the Shopify App Store. If your app is unlisted, they open the app URL that you provided.
2. Your app captures and stores the `Shop` value and HMAC (hash message authentication code) contained in the store URL.

   :::note HMAC validation

   Your app must validate the HMAC as explained in [this blog post]https://medium.com/@jophin.joseph88/shopify-webhooks-hmac-validation-on-nodejs-express-ac66bc288e3e.

   :::   

3. Your app [creates a company](/codat-api#/operations/create-company) to represent the merchant.
4. Your app [creates a data connection](/codat-api#/operations/create-data-connection) to Shopify. Supply the returned `companyId` in the path and the platform key `fztf` in the body.
   The endpoint returns a `linkUrl` value in the response.
5. Your app forms a Shop-specific Link URL by appending the `Shop` value (stored in step two) to the `linkUrl` as a query parameter.

   ```http
   https://link.codat.io/company/<companyId>?<shop-value>
   ```

6. Your app redirects the merchant to the Shop-specific Link URL, including the `Shop` parameter. Hosted Link is loaded in their browser.
7. The merchant enters their Shopify credentials in Link to authenticate.
8. If authenticated, the merchant is redirected back to your app URL in the Shopify App Store.

The merchant has successfully connected their store via the public apps connection method. You can now retrieve commerce data through the integration.




end of doc:

To get started, see [Set up Shopify using public apps](/integrations/commerce/shopify/commerce-shopify-setup).
