---
title: "Refresh company data"
sidebar_label: "Refresh data"
description: "Overview of queuing a data refresh in Codat's API"
---

:::caution Minimal data sync frequency

You should refresh at least one data type monthly to ensure your connection token does not expire when not actively synchronising data, unless only a one-time sync is required.
:::

## Check data 'freshness'

Use the `GET /companies/{companyId}/dataStatus` endpoint to check the [last time each data type was synchronized](/core-concepts/status).

In this request, `companyId` is [the unique ID that you have received in a response to creating this company](/using-the-api/managing-companies#create-a-codat-company).

When you’re pulling data for the first time, use this endpoint to check if the sync was successful.

`GET /companies/{companyId}/dataStatus`

```json title="Response for a successful first sync"
{
  "suppliers": {
    "dataType": "suppliers",
    "lastSuccessfulSync": "2019-06-11T13:26:54.6884704Z",
    "currentStatus": "Complete",
    "latestSyncId": "31632c48-23dc-4cb1-b3ff-0829343c8e85",
    "latestSuccessfulSyncId": "31632c48-23dc-4cb1-b3ff-0829343c8e85"
  },
  ...
}
```

```json title="Response for an unsuccessful first sync"
{
  "suppliers": {
    "dataType": "suppliers”
    "currentStatus": "FetchError",
    "latestSyncId": "31632c48-23dc-4cb1-b3ff-0829343c8e85",
  },
  ...
}
```

## Refresh data

There are [two POST endpoints in the API](/codat-api#/operations/create--many-pull-operations) for queuing a refresh of data:

1. `/companies/{companyId}/data/all`
   - Will queue a dataset for each of the data types marked as _Fetch on first link_ in your [data type settings](/core-concepts/data-type-settings), where that data type is supported by the company's linked data connections
2. `/companies/{companyId}/data/queue/{dataType}`
   - Will queue a dataset for the specified data type
   - _dataType_ is the key of the data type e.g. `invoices`

:::info Multiple dataset queued exception

If you try to queue a synchronization for a data type that is already in process, you'll receive an exception.

```
"error": "DatasetAlreadyInProgressException: Cannot queue {dataType} sync for {companyId} as previous sync {dataSetId} is still in progress"
```
:::

Refreshing data can take different amounts of time depending on the integration and the amount of data being retrieved. You can use [webhooks](/introduction/webhooks/core-rules-types) to be updated when the operation completes.

## Scheduled refresh

Codat can also refresh data at a set schedule, based on the set 'Sync frequency' for each data type.

### Sync frequency

The recommended sync frequency is weekly. It provides you with recent enough data while catering for data types that do not change often and decreasing the number of APi calls required. 

Some data types like company, tax rates and charts of accounts will rarely change (monthly if at all), but are so small to sync they have no performance impact.

However, you can set a more frequent sync schedule if it is required for your use case. 

- **Monthly**: We recommend that you sync at least one data type monthly (e.g. Company info) to ensure connection token does not expire when not actively synchronising data (unless only a one-time sync is required).
- **Weekly (recommended)**: Keeps data reasonably fresh, particularly where data types change less frequently.
- **Daily**: Gives you close-to-live picture of most data types while staying within the conservative rate limits of most accounting platforms.
- **Hourly**: Recommended for specific use cases only and may require consideration for the rate limits, e.g. invoices and payments for invoice financing. Only available to [enterprise customers](/introduction/create-account).

## Pitfalls

- Ensure to perform a monthly sync for at least one data type to keep your connection token operational if you are not performing active synchronisation. You can disregard this if you only require a one-time sync.

- Where the same metric or report could be derived using different data types, syncing data types at different schedules may cause inconsistencies. You need to decide on the appropriate sync frequency to ensure the data freshness fits your purpose. You can check for possible inconsistencies using the data types' `lastSuccessfulSync` properties.  

    For example, if you calculate a company's accounts receivable (AR) position using invoices, credit notes, payments, account transactions, and customers with `lastSuccessfulSync` dates of `2023-07-10`, and compare it to the AR position on the balance sheet with the `lastSuccessfulSync` of `2023-07-11`, the results are likely to differ.

---

## Read next

- [Status codes and errors](/using-the-api/errors)
