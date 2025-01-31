---
title: "Shopify: company relink required"
date: "2025-01-31"
tags: ["Product", "Update", "Shopify"]
authors: dcoplowe
---

On **February 1, 2025**, Shopify will migrate all users to the latest version of their API. As a result, Codat companies with existing Shopify connections may need to be relinked.

<!--truncate-->

As described in Shopify's [2024-10 release notes](https://shopify.dev/docs/api/release-notes/2024-10#breaking-changes), all app partners are required to adopt a new API scope to continue accessing Shopify's location information. 

This change may affect existing connections, making some data no longer accessible for currently connected companies from **February 1, 2025**. This change impacts the following Codat data types:

| Data type                  | Impact |
|----------------------------|--------|
| **`commerce-Locations`**   | Will not be populated. |
| **`order`**                | The `country` property may default to `XXX`. |
| **`commerce-CompanyInfo`** | The `addresses` and `phoneNumbers` arrays may have fewer entries. |
| **`product`**              | The `variants[].inventory` property will be empty. |

## Action required

To prevent service disruptions and continue accessing impacted data types, contact the users of your Shopify app and prompt them to relink their Shopify account after **February 1, 2025**.

To relink, send the affected users their **company `redirect` URL** from the [List companies](/platform-api#/operations/list-companies) endpoint.

If you're using Codat's embedded [Connection Management UI](/auth-flow/optimize/connection-management), direct the affected users to the interface to re-authenticate their connection.

## Expected impact if no action is taken

If your existing Shopify app customers don't relink their accounts after **February 1, 2025**, you may see disruptions to the following data types:  

| Data type                  | Impact |
|----------------------------|--------|
| **`commerce-Locations`**   | Will not be populated. |
| **`order`**                | The `country` property may default to `XXX`. |
| **`commerce-CompanyInfo`** | The `addresses` and `phoneNumbers` arrays may have fewer entries. |
| **`product`**              | The `variants[].inventory` property will be empty. |