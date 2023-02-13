---
title: "Zoho Books limits and reduced data pulls"
description: "Information about Zoho Books API rate limits and when Codat pulls reduced datasets."
createdAt: "2020-04-06T07:37:50.107Z"
updatedAt: "2022-10-17T16:27:12.407Z"
---

To minimize the performance impact of the [rate limits](zoho-book-limits#zoho-books-rate-limits) described below, by default Codat pulls a reduced dataset from Zoho Books for some data types.

The following table summarizes the fields which are excluded when pulling reduced datasets from Zoho Books.

| Data type pulled  | Fields excluded                 |
|-------------------|---------------------------------|
| Bills             | purchaseOrderRefs, lineItems, subTotal, taxAmount, note<br /> If pulling complete datasets, the following fields on bill line items are always populated as 0.00 in Codat:<br />discountAmount, subTotal, taxAmount|
| Credit Notes      | Line items                      |
| Customers         | Address and contact information |
| Invoices          | Line items                      |

To remove these restrictions and pull complete datasets for the supported Zoho Books data types, please contact [Codat Support](mailto:support@codat.io). **After removing the restrictions, fetching large volumes of data from the above data types can take multiple days to complete.**

:::info totalTaxAmount for invoices

Zoho Books doesn't support retrieving the **totalTaxAmount** for an invoice. As a result, when line items are excluded from invoices, Codat can't calculate the total tax due, and shows the **totalTaxAmount** as `0.00`.
:::

## Zoho Books rate limits

The Zoho Books API has the following connection limits and rate limits:

- API daily rate limit
- Per-minute rate limit
- Refresh token limit

Our Zoho Books integration works within these limits to minimize the performance impact of pulling and pushing large volumes of data. It tries to maximise the number of records retrieved per API call, but for some data types or if the retrictions described above are removed it is only possible to fetch a single record for each API call.

### API daily rate limit

The _API daily rate limit_ lets organizations make a limited number of API calls to Zoho Books per day (up to 2,500 or 500 per user whichever is lower);

If the cumulative number of API calls to the organisation you are trying to link to exceeds the daily limit, you might encounter the following issues:

- **Queued data fetches:** these are included in the next day's limit.
- **Failed data fetches:** these are indicated in Codat as fetch errors.

The daily rate is shared between all API requests made to an organisation, from all users, and any service providers such as Codat, that can access data through the Zoho Books API.

### Per-minute rate limit

Zoho Books can make about 60 API calls per minute—the _per-minute rate limit_.

This rate limit can affect the performance of the integration when pulling and pushing data from Zoho Books.

### Refresh token limit

The _refresh token limit_ applies to each user.

You can connect a [Zoho Books organization](https://www.zoho.com/uk/books/help/settings/organization-profile.html) to one or more Codat companies a maximum of 20 times.

The refresh token limit applies to the following actions in Codat:

- Linking new companies.
- Re-linking existing companies.

After 21 connections, the refresh token of the initially linked company (that is, the oldest connection) is set to invalid. Any syncs from this company will fail until the company is re-linked.
