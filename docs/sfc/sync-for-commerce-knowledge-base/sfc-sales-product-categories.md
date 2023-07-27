---
title: "Sales with product categories"
description: "Review the product category mapping functionality, its setup, and maintenance"
createdAt: "2022-11-30T17:35:08.294Z"
updatedAt: "2023-01-16T12:23:11.019Z"
---

:::caution Enabling the feature

This section provides instructions for a feature not enabled by default. Submit a request to Codat to activate the categorization mapping feature.
:::

Product categories are used to track the types of items a merchant has been selling. For Codat’s Sync for Commerce clients, we support syncing product categorization data into a merchant’s accounting software.

This functionality is available for categorizing sales data and facilitates automated bookkeeping based on these categories.

## Sales categories in the Sync Flow

Before the feature switch is toggled on, the Sync Flow UI displays a Sales category, along with Refund, Taxes, and Gratuity. These are standard available mapping categories of Sync for Commerce.

<img
  src="/img/old/983ceb0-34c49797-e20b-43b1-9047-578a81dceb78.png"
  alt="Sync Flow with standard sales categories"
/>

Once you enable the feature, an additional category mapping page is added to the Sync Flow. It replaces the Sales category with a breakdown of mapping options for each [product category you created](/sfc/sync-for-commerce-knowledge-base/sfc-sales-product-categories#congifure-sales-categories). We also provide a catch-all “Other sales” category that does not need to be created separately.

In this example, we break down sales into courses, products, and services.

<img
  src="/img/old/7c4f5c0-c68df5c3-4a6f-4cfa-9ca0-b3473fb2a318.png"
  alt="Sync Flow with additional product categories"
/>

The account mapping page for standard categories is available on the next page of the Sync Flow. It does not have a “Sales” mapping anymore, superseded by “Other sales” on the previous screen. The same categorization is also available in the Sync Flow settings.

<img
  src="/img/old/f774a48-7eb40aee-9370-4222-8300-1f33a6210c73.png"
  alt="Standard categories with sales categorization enabled"
/>

## Congifure sales categories

Ensure the categorization mapping feature has been enabled for your client.

Then, create the product categories that you want to use for splitting sales data. To do so, use the `/companies/{companyId}/data/commerce-productCategories` endpoint with the `PUT` method.

For example, in order to create categories to break down sales into products, services, and courses, the following request body needs to be sent:

```json
{
    "ContractVersion": "9.3.1",
    "ProductCategories": [
        {
            "id": "prods",
            "name": "Products"
        },
         {
            "id": "serv",
            "name": "Services"
        },
         {
            "id": "cours",
            "name": "Courses"
        }
    ]
}

```

:::note Category hierarchies not supported

Sync for Commerce does not support hierarchies of categories and requires a simple array of category IDs and names.
:::

If you are using the `visibleAccounts` [feature](/sfc/build-with-sync-for-commerce/customizing-the-sync-configuration-flow#how-to-change-the-visibility-of-feature-categories-accounts), ensure to add `sales-accounts-sales-other` to the list of visible accounts. This is to make “Other sales” mapping visible and configurable.

If you are using the `visibleAccounts` [feature ](/sfc/build-with-sync-for-commerce/customizing-the-sync-configuration-flow#how-to-change-the-visibility-of-feature-categories-accounts) and some of your companies do not have product categories created, ensure to add `sales-accounts-sales` to the list of visible accounts.

### 💡 Tips and traps

- If you do not create any product categories after activating the feature, and then invoke the Sync Flow UI, the additional categorization page will not be displayed.
- If you create, map, and subsequently delete a category, it will no longer appear in the Sync Flow UI. However, account mapping will still exist in the company configuration.
- Once you introduce the product categories for a company, the previous Sales mapping will appear as “Other sales” mapping instead.

## Customize category labels and text

To make a change in a product category label, amend the product categories using the `/companies/{companyId}/data/commerce-productCategories` endpoint, same as when you created them.

You can [change the label](/sfc/build-with-sync-for-commerce/customizing-the-sync-configuration-flow#sales-feature-categories) for “Other sales” mapping using the `configure-content-sales-accounts-entries-sales-other` key.

The titles of the product categorization pages (named “Sales accounts” and “Other accounts” once the feature is toggled on) cannot be customized. The descriptions of the additional and existing account mapping pages cannot be customized separately.
