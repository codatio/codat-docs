---
title: "Shopify"
description: "Learn about our Shopify integration"
createdAt: "2021-01-13T16:44:23.830Z"
updatedAt: "2022-10-28T12:28:46.081Z"
---

[Shopify](https://www.shopify.com/) is an ecommerce platform that helps SMBs to sell their products online.

With Codat's Shopify integration, you can securely retrieve your SMB customers' commerce transactions, standardized to our commerce data model.

## Data type coverage

View the coverage of our Shopify integration in the [Data Coverage Explorer](https://knowledge.codat.io/supported-features/commerce?view=tab-by-integration&integrationKey=fztf).

## Connection methods

Our Shopify integration allows your merchants to connect their commerce data using one of two methods:

- [Custom apps](/integrations/commerce/shopify/commerce-shopify-custom-apps)
- [Public apps](/integrations/commerce/shopify/commerce-shopify-setup)

In general, custom apps require less initial setup, with tasks completed by the merchant. Public apps require more initial setup, with tasks completed by you, the Codat client.

## About custom apps

A [custom app](https://help.shopify.com/en/manual/apps/custom-apps) is exclusively linked to a merchant's individual Shopify store and can't be linked to multiple stores. Custom apps are not subject to Shopify's app approval process or listed on the Shopify app store. With this method, each merchant creates a custom app in their Shopify store.

Custom apps use API access tokens (API keys) for authentication rather than OAuth 2.0.

There are no additional provider requirements when using this connection method.

To connect their commerce data using a custom app, the merchant does the following:

1. Creates a custom app and assigns it the required API scopes.
2. Gets the API access token for the app.
3. Enters the access token in Link.

To get started, see [Set up Shopify using custom apps](/integrations/commerce/shopify/commerce-shopify-custom-apps).

## About public apps

[Public apps](https://help.shopify.com/en/manual/apps/app-types#public-apps) are built to connect to multiple Shopify stores owned by multiple merchants. This means you can use a single public app to access data from multiple different merchant stores. Public apps offer a low-friction way for merchants to link their commerce data to Codat. With this method, you build a single public app that provides specific functionality and then use its secure cedentials to authorize your access to Shopify commerce data.

_Listed apps_ are published on the Shopify app store whereas _unlisted apps_ are not. Only listed apps can be discovered directly from the app store by merchants.

Public apps use an OAuth 2.0 authentication flow.

If you choose this connection method, you need to do the following:

1. Create a public app that's configured with a Codat redirect URL, webhooks, and the required permissions.

2. Submit your app to Shopify for approval before production use.

3. If your app is approved, enter its secure credentials in the Codat Portal.

If you choose this connection method, you should be aware of Shopify's requirements for public apps, as well as the specific functionality that your app will need to provide. These are outlined in the following sections.

## Provider requirements for public apps

**Unlike custom apps, public apps must pass Shopify's app approval process before use.**

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

TO DO: Add swimlane diagram here

### Configure your public app as the redirect URL

It's important to set the App Store URL of your public app as the redirect URL for the Shopify integration. When this is configured, the merchant is redirected back to your app in the App Store after they've authenticated in Hosted Link.

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