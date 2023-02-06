---
title: "Companies"
description: "Concept overview and key details"
createdAt: "2019-02-19T11:23:34.715Z"
updatedAt: "2022-10-11T09:52:16.189Z"
---

In Codat, a company represents a business sharing access to their data. Each company can have multiple [data connections](/core-dataconnections) to different data sources such as one connection to [Xero](/accounting-xero) for accounting data, two connections to [Plaid](/banking-plaid) for two bank accounts and a connection to [Zettle](/commerce-zettle) for POS data.

Typically each company is one of your customers.

When you create a company, you can specify a `name` and we will automatically generate a unique `id` for the company.

## How do I create a company?

Companies can be created in one of two ways:

1. Using the <a className="external" href="https://docs.codat.io/reference/createcompany" target="_blank">POST /companies</a>

2. Using the [Codat portal](/portal-managing-companies#add-a-new-company).

:::caution Forbidden characters in company names

Company names may only contain letters, numbers, spaces, and the following symbols: `-`, `'`, `&`, `@`, `.`, `,`, `?`, `!`.

Any forbidden characters will be removed from your company name. For example: `Example Company (Codat[1])` will be created as `Example Company Codat1`.
:::

To learn more about how you can manage companies via the Portal, read [this document](/portal-managing-companies).

To learn how to manage companies via Codat's API, read [this document](/managing-companies).
