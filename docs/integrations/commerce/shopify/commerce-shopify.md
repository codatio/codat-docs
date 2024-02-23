---
title: "Shopify"
description: "Learn about our Shopify integration"
---

[Shopify](https://www.shopify.com/) is an ecommerce platform that helps SMBs to sell their products online.

With Codat's Shopify integration, you can securely retrieve your SMB customers' commerce transactions, standardized to our commerce data model.

## Data type coverage

View the coverage of our Shopify integration in the [Data Coverage Explorer](https://knowledge.codat.io/supported-features/commerce?view=tab-by-integration&integrationKey=fztf).

## Approaches to merchant data sharing

When setting up the integration, you can take one of two approaches for enabling your merchants to connect and share their commerce data, as follows: 

- [Custom apps](/integrations/commerce/shopify/commerce-shopify-custom-apps)

    Created by merchants exclusively for their Shopify stores.

- [Public apps](/integrations/commerce/shopify/commerce-shopify-setup)

    Built by you and must be approved by Shopify before use. A single public app can be installed on multiple Shopify stores.

In general, custom apps require less initial setup, with tasks completed by the merchant. Public apps require more initial setup, with tasks completed by you, the Codat client. Choose the option that best suits your circumstances. 

## About custom apps

A [custom app](https://help.shopify.com/en/manual/apps/custom-apps) is exclusively linked to a merchant's individual Shopify store and can't be linked to multiple stores. Custom apps are not listed on the Shopify app store or subject to Shopify's app approval process. With this approach, each merchant creates a custom app in their Shopify store.

Custom apps use API access tokens (API keys) for authentication.

There are no additional provider requirements when using this approach.

To connect their commerce data using a custom app, the merchant does the following:

1. Creates a custom app and assigns it the required API scopes.
2. Gets the API access token for the app.
3. Enters the access token in Link.

To get started, see [Set up Shopify using custom apps](/integrations/commerce/shopify/commerce-shopify-custom-apps).

## About public apps

[Public apps](https://help.shopify.com/en/manual/apps/app-types#public-apps) are built to connect to multiple Shopify stores owned by multiple merchants. This means you can use a single public app to access data from multiple different merchant stores.

Public apps offer a low-friction way for merchants to link their commerce data to Codat. With this approach, you build a single public app and use its secure credentials to authorize your access to Shopify commerce data.

_Listed apps_ are published on the Shopify app store whereas _unlisted apps_ are not. Only listed apps can be discovered directly from the app store by merchants.

Public apps use an OAuth 2.0 authentication flow.

If you choose this connection method, you need to do the following:

1. Create a public app that's configured with a Codat redirect URL, webhooks, and the required permissions.

2. Submit your app to Shopify for approval before production use.

3. If your app is approved, enter its secure credentials in the Codat Portal.

If you choose this connection method, you should be aware of Shopify's requirements for public apps, as well as the specific functionality that your app will need to provide. These are outlined in [Requirements for public apps](/integrations/commerce/shopify/commerce-shopify-requirements-public-apps).

To get started, see [Set up Shopify using public apps](/integrations/commerce/shopify/commerce-shopify-setup).

## OAuth requirements to apps

We handle this requirement for you. All we need is a redirect that can be used to [identify the merchant](/integrations/commerce/shopify/commerce-shopify-setup#).

---

## Read next

- [Set up Shopify using custom apps](/integrations/commerce/shopify/commerce-shopify-custom-apps)
- [Set up Shopify using public apps](/integrations/commerce/shopify/commerce-shopify-setup)