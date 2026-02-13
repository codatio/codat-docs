---
title: "Updated Shopify Link flow"
date: "2026-02-04"
tags: ["Product", "Update", "Link", "Shopify"]
authors: pmckinney
---

We've updated the Shopify Link flow so merchants connect using **client ID and client secret** instead of an Admin API access token, with clearer in-flow guidance and step-by-step instructions that match Shopify’s latest custom app and distribution flow. This change is due to the deprecation of the original approach by Shopify.

<!--truncate-->

## What's new?

![The Shopify store connection UI showing the Find your Shopify credentials section and fields for store name, client ID, and client secret.](/img/integrations/commerce/shopify/7a2c893-shopify-code-connect-your-shopify-store-custom-apps.png)

- **Client ID and client secret:** Merchants now enter their **Shopify client ID** and **Shopify client secret** (from the app’s **Settings** > **Credentials**) instead of an Admin API access token. The connection UI makes it clear that only the store name subdomain (the part before `.myshopify.com`) is needed.

- **Find your Shopify credentials:** The Link UI includes an in-page **Find your Shopify credentials** section that walks merchants through creating and configuring a custom app, choosing custom distribution, installing the app, and retrieving credentials—without leaving the flow.

- **Step-by-step instructions:** The guide now follows Shopify’s current path: **Settings** > **Apps** > **Develop apps** > **Build apps in Dev Dashboard** > **Create app**, then creating a version (including App URL `https://shopify.dev/apps/default-app-home`, unchecking **Embed app**, and setting access scopes), **App Home** > **Distribution** > **Custom distribution**, and **Settings** > **Credentials** for client ID and secret.

- **Links to Shopify docs:** Merchants can open the Shopify docs for [Custom apps](https://help.shopify.com/en/manual/apps/app-types/custom-apps) (Create a custom app and Install a custom app) and [Select a distribution method](https://shopify.dev/docs/apps/launch/distribution/select-distribution-method) for more detail.

## Who is this relevant for?

This update is relevant for clients whose merchants use the **Shopify Custom apps** connection method in Codat Link. The improved flow reduces confusion and support load by guiding merchants through the correct Shopify admin steps and credential fields.

## How to get started?

The updated flow is already reflected in Link. For full setup and merchant instructions, see [Set up Shopify using custom apps](/integrations/commerce/shopify/commerce-shopify-custom-apps).
