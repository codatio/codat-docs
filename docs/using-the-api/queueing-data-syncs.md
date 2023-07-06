---
title: "Refresh company data"
sidebar_label: "Refresh data"
description: "Overview of queuing a data refresh in Codat's API"
---

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

The most common, and recommended, sync frequency is Daily. It's the best middle ground for synchronising most data type while staying well within the rate limits for all accounting platforms.

Some data types like company, tax rates and charts of accounts will rarely change (monthly if at all), but are so small to sync they have no performance impact.

- **Hourly** - Hourly syncs are recommended for specific use cases only and may require consideration for the rate limits, e.g. invoices and payments for invoice financing.
- **Daily** - Best middle ground for synchronising most data type while staying well within the rate limits for most accounting platforms.
- **Weekly** - For data types of less important or unlikely to change.
- **Monthly** - Similar to weekly, but also recommended for at least one data type (e.g. Company) to ensure connection token does not expire when not actively synchronising data (unless only a one-time sync is required).

---

## Read next

- [Status codes and errors](/using-the-api/errors)