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

If you choose this connection method, you should be aware of Shopify's requirements for public apps, as well as the specific functionality that your app will need to provide. These are outlined in [Requirements for public apps](/integrations/commerce/shopify/commerce-shopify-requirements-public-apps).
