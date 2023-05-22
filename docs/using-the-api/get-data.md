---
title: "Retrieve company data"
sidebar_label: "Retrieve data"
description: "Learn how to manage companies, their connections, and their data via API"
---

Once you've create a company, you can start retrieving data.

## Pulling data

Once company is onboarded, you can start retrieving their financial data.

### Queue a new data sync (Optional)

If there are datasets which are not as up-to-date as you require, you can queue a data sync as described [here](/using-the-api/queueing-data-syncs).

Once you've queued the sync, you can poll the [GET /companies/{companyId}/dataStatus](/codat-api#/operations/get-company-data-status) endpoint (as described above) to [monitor progress of the sync](/core-concepts/status).

:::note Configuring the sync schedule

You can configure a sync schedule in the Codat portal to keep each data type at an acceptable freshness. For more information, please refer to your onboarding docs or contact [support@codat.io](mailto:support@codat.io).
:::

## Request a specific data type

Codat exposes endpoints that enable you to easily query each of the supported data types.

For example, when querying invoices, you can use the [GET /companies/{companyId}/data/invoices](/accounting-api#/operations/list-invoices) endpoint, with query string parameters as below:

- `pageSize` – the size of page you wish to retrieve
- `page` – which page number you wish to retrieve
- `orderBy` – the property you wish to order the response by
- `query` – any filter you wish to perform on the returned data (see [Querying](/using-the-api/querying) for details)

---

## Read next

- [Managing companies](/using-the-api/querying)
