---
title: "Use modified dates"
description: "Understanding when data has been modified"
---

Codat surfaces two dates to indicate when data was last updated:

- **modifiedDate** - the date data last changed in the Codat system
- **sourceModifiedDate** - the date data last changed in the underlying provider's system

## Modified date

**`modifiedDate` shows the freshness of data in Codat.**

It tells you when the most recent version of the record was fetched from the data source and updated in Codat’s database cache. Most records keep the same modified date across a number of fetches.

### Using the modified date

Use the `modifiedDate` to identify and retrieve records that have changed since your last fetch.

:::info Example: Retrieve company invoices updated since the last fetch

Track your `lastFetchDate` in your system and use it when querying data:

```http
GET /companies/{companyId}/data/invoices?page=1&query=modifiedDate%3E%3D{lastFetchDate}
```

This query retrieves records with modified dates that are greater than or equal to (more recent than) the fetch date that you've specified.

:::

### 💡 Tips and traps

- The `modifiedDate` is populated for all data types **except** for the following:
  - attachments
  - balance sheets
  - company information
  - profit & loss reports
- If the `sourceModifiedDate` changes, the `modifiedDate` will also change, even if none of the values we read were modified. This can happen as there may be additional data types in the source platform that are not mapped to the Codat data model.
- If the Codat data model changes (e.g. we add a new property to a data type), the `modifiedDate` will change, even if the values of the data didn't change.

## Source modified date

**`sourceModifiedDate` shows when a record was last modified in the customer’s accounting, banking, or commerce software.**

The record may have been updated by the business, or a business process, such as when payments are made against an invoice.

### Using the source modified date

Use the `sourceModifiedDate` when you want to identify records that have been updated by a business, or a business process.

:::info Example: Find invoices issued over 12 months ago that were updated in the source platform in the last month

```http
GET /companies/{companyId}/data/invoices?page=1&query=issueDate%3C{todayMinus12Months}%26%26sourceModifiedDate%3E%3D{todayMinusOneMonth}
```

This query retrieves invoices with issue dates that are greater than twelve months old and a source modified date that is greater than or equal to one month old.

:::

### 💡 Tips and traps

- The `sourceModifiedDate` may not be populated and returned as `null` when:
  - Reading attachments.
  - The integration platform does not provide modification date information for a given data type.
  - A record has been deleted from the source platform and Codat doesn't have a record of when the deletion occurred.
  - A record has been voided. For certain platforms that soft delete records, `isDeleted` metadata is used to identify void records.
    - For accounting data types, you can identify if a record has been deleted between two successive syncs by [querying](/using-the-api/querying) on the `metadata.isDeleted!=true` flag.

:::tip Recap
You've learned:

- How dates are used to keep company data up to date
- The difference between `modifiedDate` and `sourceModifiedDate`
  :::

---

## Read next

- [Refreshing company data](/using-the-api/queueing-data-syncs)
