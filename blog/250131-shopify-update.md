---
title: "Shopify: company relink required"
date: "2025-01-31"
tags: ["Product", "Update", "Shopify"]
authors: dcoplowe
---

On **February 1, 2025**, Shopify will migrate all app partners to the latest version of the Shopify API. As a result, Codat companies with existing Shopify connections need to be relinked.

<!--truncate-->

As described in Shopify's [2024-10 release notes](https://shopify.dev/docs/api/release-notes/2024-10#breaking-changes), all app partners are required to adopt a new API scope. Otherwise, app partners won'be able to access Shopify's location information from **February 1, 2025**.

For Codat clients, this change affects existing connections of Codat companies and impacts the following Codat data types:

| Data type              | Impact                                                            |
| ---------------------- | ----------------------------------------------------------------- |
| `commerce-locations`   | Will not be populated.                                            |
| `commerce-order`       | The `country` property may default to `XXX`.                      |
| `commerce-companyInfo` | The `addresses` and `phoneNumbers` arrays may have fewer entries. |
| `commerce-product`     | The `variants[].inventory` property will be empty.                |

## Action required

To prevent service disruptions and continue accessing impacted data types, contact the users of your Shopify app and prompt them to relink their Shopify account after **February 1, 2025**.

To relink, provide affected users with the `linkUrl` of their Shopify connection from the `dataConnections` array in their Codat company. Retrieve this information using the [List companies](/platform-api#/operations/list-companies) endpoint, which returns an array of companies and their associated data connections. To only return companies with Shopify connections, use the following query:

```
dataConnections.platformName~Shopify
```

If you're using Codat's embedded [Connection Management UI](/auth-flow/optimize/connection-management), direct the affected users to the interface to re-authenticate their connection.

## Expected impact if no action is taken

If your existing Shopify app customers don't relink their accounts after **February 1, 2025**, you may see disruptions to the following data types:

| Data type                  | Impact                                                            |
| -------------------------- | ----------------------------------------------------------------- |
| **`commerce-Locations`**   | Will not be populated.                                            |
| **`order`**                | The `country` property may default to `XXX`.                      |
| **`commerce-CompanyInfo`** | The `addresses` and `phoneNumbers` arrays may have fewer entries. |
| **`product`**              | The `variants[].inventory` property will be empty.                |
