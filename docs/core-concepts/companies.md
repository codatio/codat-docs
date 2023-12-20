---
title: "Companies"
description: "Your customer within Codat"
tags:
  - Core concept
---

In Codat, a company represents a business sharing access to their data. Each company can have multiple [data connections](/core-concepts/connections) to different data sources such as one connection to [Xero](/integrations/accounting/xero/accounting-xero) for accounting data, two connections to [Plaid](/integrations/banking/plaid/banking-plaid) for two bank accounts and a connection to [Zettle](/integrations/commerce/zettle/commerce-zettle) for POS data.

Typically each company is one of your customers.

When you create a company, you can specify a `name` and we will automatically generate a unique `id` for the company. You can also add a `description` to store any additional information about the company.

## If you're just getting started...

You can use the Codat portal to create and manage companies, 

- [Add a new company](/configure/portal/companies#add-a-new-company)
- [Manage companies via the Portal](/configure/portal/companies)

## If you're scaling...

You probably want to use our API. Each of our API references (and associated SDKs) includes the necessary endpoints for creating and updating companies.

If you're just looking to leverage our company management functionality, you can also use our [Platform API](/platform-api#).

- [Create a new company](/platform-api#/operations/create-company) - `POST /companies`
- [List your existing companies](/platform-api#/operations/list-companies) - `GET /companies` 
- [Update an existing company](/platform-api#/operations/update-company) - `PUT /companies/{companyId}`



:::caution Forbidden characters in company names

Company names may only contain letters, numbers, spaces, and the following symbols: `-`, `'`, `&`, `@`, `.`, `,`, `?`, `!`.

Any forbidden characters will be removed from your company name. For example: `Example Company (Codat[1])` will be created as `Example Company Codat1`.
:::

## If you have multiple use cases...

You can assign a company to one or more groups.
A group can be used to manage who can access data from that group's set of companies and identify the use case or product a company is using.

---

## Read next

- Next concept: [Connections](/core-concepts/connections)
- `POST /companies` - [API ref](/platform-api#/operations/create-company)
- `GET /companies`  - [API ref](/platform-api#/operations/list-companies)
- `PUT /companies/{companyId}` - [API ref](/platform-api#/operations/update-company)
- [Platform API](/platform-api#)