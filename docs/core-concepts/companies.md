---
title: "Companies"
description: "Your customer within Codat"
tags:
  - Core concept
---

In Codat, a company represents a business sharing access to their data. Each company can have multiple [data connections](/core-concepts/connections) to different data sources such as one connection to [Xero](/integrations/accounting/xero/accounting-xero) for accounting data, two connections to [Plaid](/integrations/banking/plaid/banking-plaid) for two bank accounts and a connection to [Zettle](/integrations/commerce/zettle/commerce-zettle) for POS data.

Typically each company is one of your customers.

When you create a company, you can specify a `name` and we will automatically generate a unique `id` for the company. You can also add a `description` to store any additional information about the company.

## Creating a company

Companies can be created in one of two ways:

1. Using the [POST /companies](/platform-api#/operations/create-company)

2. Using the [Codat portal](/configure/portal/companies#add-a-new-company)

:::caution Forbidden characters in company names

Company names may only contain letters, numbers, spaces, and the following symbols: `-`, `'`, `&`, `@`, `.`, `,`, `?`, `!`.

Any forbidden characters will be removed from your company name. For example: `Example Company (Codat[1])` will be created as `Example Company Codat1`.
:::

## Managing your companies

You have two options for managing companies:

- [Manage companies via Codat's API](/using-the-api/managing-companies)
- [Manage companies via the Portal](/configure/portal/companies)

---

## Read next

- Next concept: [Connections](/core-concepts/connections)
- [`GET /companies`](/platform-api#/operations/list-companies) API reference

