---
title: "Using modified dates"
description: "Understanding when data has been modified"
createdAt: "2022-11-07T19:53:44.472Z"
updatedAt: "2022-11-28T13:03:19.120Z"
---

Codat surfaces two dates to indicate when data was last updated:

- **modifiedDate** - the date data last changed in the Codat system
- **sourceModifiedDate** - the date data last changed in the underlying provider's system

## Modified date

**`modifiedDate` shows the freshness of data in Codat.**

It tells you when the most recent version of the record was fetched from the data source and updated in Codat’s data cache. Most records keep the same modified date across a number of fetches.

### Using the modified date

Use the `modifiedDate` to identify and retrieve records that have changed since your last fetch.

#### Example: Retrieve company invoices updated since the last fetch

1. Track your `lastFecthDate` in your system
2. Use `lastFetchDate` when querying data:

```http
GET /companies/{companyId}/data/invoices?page=1&query=modifiedDate%3E%3D{lastFetchDate}
```

This query retrieves records with modified dates that are greater than or equal to (more recent than) the fetch date that you've specified.

### Pitfalls

- If the `sourceModifiedDate` changes, the `modifiedDate` will also change, even if none of the values we pull were modified. This can happen as there may be additional data types in the source not mapped to the Codat data model.
- If the Codat data model changes (e.g. we add a new data type), the `modifiedDate` will change, even if the values of the data didn't change.
- The `modifiedDate` is available for all data types _except_ for the following:
  - attachments
  - balance sheets
  - company information
  - profit & loss reports

## Source modified date

**`sourceModifiedDate` shows when a record was last updated in the customer’s accounting, banking, or commerce platform.**

The record may have been updated by the business, or a business process, such as when payments are made against an invoice.

If the `sourceModifiedDate` is set to `null`, the record has been deleted from the accounting platform but Codat doesn't have a record of when the deletion occurred. If the accounting platform uses soft deletes, void records may also be identified in the same way .

The `sourceModifiedDate` is available for all data types **except** for the following: attachments, balance sheets, company information, profit and loss reports.

### Pitfalls

- Integration support - Not all integrations provide information about when records were updated in their system. This field will therefore not always be available from Codat.

### Using the source modified date

Use the `sourceModifiedDate` when you want to identify records that have been updated by a business, or a business process.

#### Example: Find invoices issued over 12 months ago that were updated in the last month

```http
GET /companies/{companyId}/data/invoices?page=1&query=issueDate%3C{todayMinus12Months}%26%26sourceModifiedDate%3E%3D{todayMinusOneMonth}
```

This query retrieves invoices with issue dates that are greater than twelve months old and a source modified date that is greater than or equal to one month old.

:::tip Recap
You've learned:
- How dates are used to keep company data up to date
- The difference between `modifiedDate` and `sourceModifiedDate`
:::

---

## Read next

- [Refreshing company data](/using-the-api/modified-dates)
