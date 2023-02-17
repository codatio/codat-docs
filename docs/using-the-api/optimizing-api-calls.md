---
title: "Optimizing API calls"
description: "Learn how to use our APIs efficiently and ensure you are not reaching our rate limits"
---

:::note Rate limits

Ensure you are familiar with our [rate limits](/using-the-api/rate-limits) before optimizing your API calls to Codat.

:::

Making as few calls to Codat as possible allows you to reduce your costs and delivers an improved user experience. With fewer calls, you process less data and access that data faster, meaning reduced waiting time for your users, less computational time for your systems, and decreased internet traffic between you and Codat.

Make use of our querying, ordering, and alerting systems to gain finite control over the data you access. Use these methods to optimize how you access Codat. 

## Querying by the record date

You can query data by using the `sourceModifiedDate`. This is the date the records have been updated in the source platform. This gives you only new or updated data since your last API call. 

You can also order the results by `sourceModifiedDate`. This allows you to page through the relevant data from newest to oldest and effectively acts as an index. 

:::caution Support for `sourceModifiedDate`

Not all platforms support `sourceModifiedDate`. You can use `modifiedDate` instead, which denotes when a record has been updated in Codat's platform, or the underlying record date. Refer to [Modified dates](/using-the-api/modified-dates) for more information.

:::

We also recommend using a page size of 100 to return the results faster. This is especially relevant when a user is waiting for a UI to load. The maximum page size is 5000, which reduces the number of calls you make to our APIs, but provides you with a slower result.  

If you also store the last queried date per company and per data type, you are able to call our API the minimum number of times to return only new or changed data.

When a user links for the first time, there may be a need to pull all data, for all time. Make sure this is truly required, and if so, perform this pull only once. Afterwards, only query and access data since the last pull. 

:::note Querying by the record date: example

You can query our [Accounts](/accounting-api#/operations/get-accounts) endpoint with `sourceModifiedDate` as follows:  
`https://api.codat.io/companies/{companyId}/data/accounts?page=1&pageSize=100&query=sourceModifiedDate>2022-08-23&orderby=-sourceModifiedDate`  
This returns any accounts for the given `companyId` that were added or updated in Codat since midnight UTC on the 23 of August. Newest results are displayed first and paged with a size of 100.

:::

## Querying for a use case

Where possible, use query parameters to filter down the number of results when calling to our API. This allows you to minimise the number of API call and the volume of data returned. As a result, this speeds up your system, returns the data faster, and improves your user experience. 

:::note Querying for a use case: example

You can query our [Invoices](/accounting-api#/operations/list-invoices) endpoint for an invoice use case as follows:  
`https://api.codat.io/companies/{companyId}/data/invoices?page=1&pageSize=100&query=customerRef.companyName=NewCo`  
This returns all invoices for a company issued by a specific customer.  Instead of `customerRef.companyName`, you can use `customerRef.id` to filter by their Id instead.

:::

## Making use of alerts

Consider configuring a [Dataset data changed](/introduction/webhooks/core-rules-create#dataset-data-changed) rule. This will send an alert per company when new data becomes available for each data type. 

This is sent in the form of a `POST` request to a webhook URL you specified. The webhook contains the company Id and data connection Id 

`CompanyId`, `DataConnectionId`, and details what data types have changed or updated. 

Once you receive the webhook, you can query our API for that specific company and data type. This means you will only call the API when data is changed, instead of periodically polling our data to check for changes and updates.
