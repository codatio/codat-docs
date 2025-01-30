---
title: "Shopify update: company relink may be required"
date: "2025-01-10"
tags: ["Product", "Update"]
authors: dcoplowe
---

On **February 1, 2025**, Shopify will migrate all users to the latest version of their API.  
As a result, some data may no longer be accessible for currently connected companies.

<!--truncate-->

## What's changing?

As part of Shopify's [2024-10 release](https://shopify.dev/docs/api/release-notes/2024-10#breaking-changes), all app partners are required to adopt a new API scope to continue accessing location information.  

This change may impact existing connections, requiring some customers to **relink their Shopify accounts** to maintain full access to your services.

## Action required

To prevent disruptions, you must contact affected customers and ask them to **relink their Shopify account**.  

### How to guide your customers:
- Send them the **company `redirect` URL** from the [List companies](/platform-api#/operations/list-companies) endpoint.  
- If you're using Codat's embedded [connection management](/auth-flow/optimize/connection-management) UI, direct them there to re-authenticate their connection.

## Expected impact if no action is taken

Starting **February 1, 2025**, the following data types will be affected:  

| Data type                  | Impact |
|----------------------------|--------|
| **`commerce-Locations`**   | Will not be populated. |
| **`order`**                | The `country` property may default to `XXX`. |
| **`commerce-CompanyInfo`** | The `addresses` and `phoneNumbers` arrays may have fewer entries. |
| **`product`**              | The `variants[].inventory` property will be empty. |

To ensure continued access to these data type, we recommend prompting customers to relink after **February 1, 2025**.