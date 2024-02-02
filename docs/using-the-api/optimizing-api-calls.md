---
title: "Optimize API calls"
description: "Learn how to use our APIs efficiently and ensure you are not reaching our rate limits"
---

:::note Rate limits

Ensure you are familiar with our [rate limits](/using-the-api/rate-limits) before optimizing your API calls to Codat.

:::

Making as few calls to Codat as possible allows you to reduce your costs and your system's computational times, and decreases internet traffic between you and Codat. It also allows you to process less data and access that data faster, delivering reduced waiting time and an improved experience for your users.

Use our [querying](/using-the-api/querying), [ordering](/using-the-api/ordering-results), and [notification systems](/using-the-api/webhooks/core-rules-types) and optimize how you access Codat and fetch the data with the methods below.

## Querying by the record date

You can query data by using the `modifiedDate`. This is the date the records have been updated in Codat's database. This gives you only new or updated data since your last API call. 

You can also order the results by `modifiedDate`. This allows you to page through the relevant data from newest to oldest and effectively acts as an index. 

:::info Modified dates

In addition to `modifiedDate`, Codat also stores `sourceModifiedDate`, which indicates the date a record was changed in the source platform. Not all platforms support `sourceModifiedDate`. Refer to [Using modified dates](/using-the-api/modified-dates) for more information.

:::

If you also store the last queried date per company and per data type, you are able to call our API the minimum number of times to return only new or changed data.

When a user links for the first time, there may be a need to pull all data, for all time. Make sure this is truly required, and if so, perform this pull only once. Afterwards, only query and access data since the last pull. 

#### Pagination

We also recommend using a page size of 100 to return the results faster. This is especially relevant when a user is waiting for a UI to load. The maximum page size is 5000 results, which means fewer API calls, but much slower responses. 

:::tip Querying by the record date: example

You can query our [List accounts](/accounting-api#/operations/list-accounts) endpoint with `modifiedDate` as follows:  

```http
https://api.codat.io/companies/{companyId}/data/accounts?page=1&pageSize=100&query=modifiedDate>2022-08-23&orderby=-modifiedDate
```
This returns any accounts for the given `companyId` that were added or updated in Codat since midnight UTC on the 23 of August. Newest results are displayed first and paged with a size of 100.

:::

## Optimising by use case

As part of your implementation, check which [data types are relevant to your use case](/usecases/overview), and focus on pulling only those data types. You can also use query parameters to further filter down the number of results by use case when calling to our API. 

These approaches allow you to minimise the number of API calls and the volume of data returned. As a result, this speeds up your system, returns the data faster, and improves your user experience. 

:::tip Querying for a use case: example

You can query our [Invoices](/accounting-api#/operations/list-invoices) endpoint for an invoice use case as follows:  

```http
https://api.codat.io/companies/{companyId}/data/invoices?page=1&pageSize=100&query=customerRef.companyName=NewCo
```
This returns all invoices for a company issued by a specific customer.  Instead of `customerRef.companyName`, you can use `customerRef.id` to filter by their Id instead.

:::

## Making use of webhooks

Consider configuring a [Dataset data changed](/using-the-api/webhooks/core-rules-types#dataset-data-changed) rule. This will send an event per company when new data becomes available for each data type. 

This is sent in the form of a `POST` request to a webhook URL you specified. The webhook contains the `CompanyId`, `DataConnectionId`, and details what data types have changed or updated. 

Once you receive the webhook, you can query our API for that specific company and data type. This means you will only call the API when data is changed, instead of periodically polling our data to check for changes and updates.
