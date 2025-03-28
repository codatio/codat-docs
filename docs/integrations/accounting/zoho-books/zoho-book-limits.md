---
title: "Zoho Books limits and reduced data reads"
description: "Information about Zoho Books API rate limits and when Codat reads reduced datasets."
sidebar_label: Limitations
---

To minimize the performance impact of the [rate limits](zoho-book-limits#zoho-books-rate-limits) described below, by default Codat reads a reduced dataset from Zoho Books for some data types.

The following table summarizes the fields which are excluded when reading reduced datasets from Zoho Books.

| Data type read  | Fields excluded                 |
|-------------------|---------------------------------|
| Bills             | <p>`purchaseOrderRefs`, `lineItems`, `subTotal`, `taxAmount`, `note`</p> <p>If reading complete datasets, the following fields on bill line items are always populated as 0.00 in Codat:</p><p>`discountAmount`, `subTotal`, `taxAmount`</p>|
| Credit Notes      | Line items                      |
| Customers         | Address and contact information |
| Invoices          | Line items                      |

To remove these restrictions and read complete datasets for the supported Zoho Books data types, please raise a ticket through our [support request form](https://codat.zendesk.com/hc/en-gb/requests/new). **After removing the restrictions, fetching large volumes of data from the above data types can take multiple days to complete.**

:::info totalTaxAmount for invoices

Zoho Books doesn't support retrieving the **totalTaxAmount** for an invoice. As a result, when line items are excluded from invoices, Codat can't calculate the total tax due, and shows the **totalTaxAmount** as `0.00`.
:::

## Zoho Books rate limits

The Zoho Books API has the following connection limits and rate limits:

- API daily rate limit
- Per-minute rate limit
- Concurrent rate limit
- Refresh token limit

Our Zoho Books integration works within these limits to minimize the performance impact of reading and writing large volumes of data. To do so, the integration maximises the number of records retrieved per API call for most data types. However, for certain data types, the integration can only fetch a single record for each API call to Zoho Books, impacting performance. This also applies to additional data types where the restrictions on reading reduced datasets described above are removed.

#### API daily rate limit

The _API daily rate limit_ lets organizations make a limited number of API calls to Zoho Books per day. The limit varies based on the plan your organization uses (see Zoho Books' [API Call Limit](https://www.zoho.com/books/api/v3/introduction/#api-call-limit)).

If the cumulative number of API calls to the organization you are trying to link to exceeds the daily limit, you might encounter the following issues:

- **Queued data fetches:** these are included in the next day's limit.
- **Failed data fetches:** these are indicated in Codat as fetch errors.

The daily rate is shared between all API requests made to an organization from all users, and any service providers, such as Codat, that can access data through the Zoho Books API.

#### Per-minute rate limit

Zoho Books usesrs can make about 100 API calls per minute for each organization — the _per-minute rate limit_.

This rate limit can affect the performance of the integration when reading data from and writing to Zoho Books.

#### Concurrent rate limit

Zoho Books also limits the maximum number of API calls that can be simultaneously active for the same organization using its _concurrent rate limit_. 

The concurrent rate limit varies based on the plan of the organization and is noted in Zoho Books' [Concurrent Rate Limiter](https://www.zoho.com/books/api/v3/introduction/#concurrent-rate-limiter).

#### Refresh token limit

The _refresh token limit_ applies to each user.

You can connect a [Zoho Books organization](https://www.zoho.com/uk/books/help/settings/organization-profile.html) to one or more Codat companies a maximum of 20 times.

The refresh token limit applies to the following actions in Codat:

- Linking new companies.
- Re-linking existing companies.

After 21 connections, the refresh token of the initially linked company (that is, the oldest connection) is set to invalid. Any syncs from this company will fail until the company is re-linked.
