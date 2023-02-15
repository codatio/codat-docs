---
title: "Shopify"
description: "Learn about our Shopify integration"
createdAt: "2021-01-13T16:44:23.830Z"
updatedAt: "2022-10-28T12:28:46.081Z"
---

<a class="external" href="https://www.shopify.com/" target="_blank">Shopify</a> is an ecommerce platform that helps SMBs to sell their products online.

With Codat's Shopify integration, you can securely retrieve your SMB customers' commerce transactions, standardized to our commerce data model.

## Data type coverage

View the coverage of our Shopify integration in the <a class="external" href="https://knowledge.codat.io/supported-features/commerce?view=tab-by-integration&integrationKey=fztf" target="_blank">Data Coverage Explorer</a>.

## Connection methods

Our Shopify integration allows your merchants to connect their commerce data using one of two methods:

- [Custom apps](/integrations/commerce/shopify/commerce-shopify-custom-apps)
- [Public apps](/integrations/commerce/shopify/commerce-shopify-setup)

In general, custom apps require less initial setup, with tasks completed by the merchant. Public apps require more initial setup, with tasks completed by you, the Codat client.

## Custom apps overview and requirements

A <a class="external" href="https://help.shopify.com/en/manual/apps/custom-apps" target="_blank">custom app</a> is exclusively linked to a merchant's individual Shopify store and can't be linked to multiple stores. Custom apps are not subject to Shopify's app approval process or listed on the Shopify app store. They use API access tokens (API keys) for authentication rather than OAuth 2.0.

There are no additional provider requirements when using this connection method.

To connect their commerce data using a custom app, the merchant does the following:

1. Creates a custom app and assigns it the required API scopes.
2. Gets the API access token for the app.
3. Enters the access token in Link.

To get started, see [Set up Shopify using custom apps](commerce-shopify-custom-apps).

## Public apps overview and requirements

<a class="external" href="https://help.shopify.com/en/manual/apps/app-types#public-apps" target="_blank">Public apps</a> are built to connect to multiple Shopify stores owned by multiple merchants. So, you can use a single public app to access data from multiple different merchant stores. They offer a low-friction way for merchants to link their commerce data to Codat.

_Listed apps_ are published on the Shopify app store whereas _unlisted apps_ are not. Only listed apps can be installed directly from the app store by merchants. Public apps use an OAuth 2.0 authentication flow.

If you choose this connection method, you need to do the following:

1. Create a public app that's configured with a Codat redirect URL, webhooks, and the required permissions.

2. Submit your app to Shopify for approval before production use.

3. If your app is approved, enter its secure credentials in the Codat Portal.

### Provider requirements for public apps

**Unlike custom apps, public apps must pass Shopify's app approval process before use.**

To use our Shopify integration using public apps, you must first create a public app in Shopify that meets the following criteria:

- Your app must meet the [Requirements for apps in the Shopify App Store](https://shopify.dev/apps/store/requirements), as published on the Shopify Developers Platform.
- Shopify must review and approve your app, which can take up to two weeks.

Additionally, if you need to access over 60 days' of orders, you must submit a _Read all orders_ request as noted in [Create a Shopify public app](commerce-shopify-setup#create-a-shopify-public-app). You'll receive an email from Shopify when your request has been processed; this might take up to seven business days.

:::caution Important

Before setting up the integration, review the preceding requirements to make sure your use case is in accordance with Shopify's Terms of Service. **Codat can't guarantee that Shopify will approve your public app or grant access to over 60 days' of order data.**

:::

To get started, see [Set up Shopify using public apps](commerce-shopify-setup).