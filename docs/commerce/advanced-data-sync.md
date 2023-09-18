---
title: "Advanced data synchronization features"
sidebar_label: "Data synchronization"
description: "Learn about additional data sync options available with Sync for Commerce" 
displayed_sidebar: commerce
image: "/img/banners/social/commerce.png"
---

Data synchronization is an automated daily process. A merchant can view the status of the recent sync operations in the Sync configuration UI, and your support team can check it on the Sync Health page of our [Portal](https://app.codat.io/). 

However, it is possible to get sync status information and even initiate syncs outside of the daily schedule using the Codat API.

## Get sync status

You may want your system to be aware of the latest sync status for a merchant. You can get a list of syncs and their status by making an API call to the [Get sync status](/sync-for-commerce-api#/operations/get-sync-status) endpoint:

```http
GET /meta/companies/{companyId}/sync/commerce/status
```

The response provides a list of syncs and their status information: 

```json
{
  "companyId": "0498e921-9b53-4396-a412-5g3g6094c1b3",
  "commerceSyncId": "af888de-4d1b-44e8-8b4q-717463af00c5",
  "syncId": "afe076de-4d2c-44d9-7e3a-717463af11c5",
  "syncStatusCode": 2000,
  "syncStatus": "Success",
  "syncUtc": "2023-04-12T10:52:54.5359678Z",
  "dataPushed": true
  "dataConnections":
      [...]
    ...
}
```

## Initiating a sync
 
You may need to perform a manual sync for a merchant from the date of their last successful sync to a specified date. You can do this by calling the [Initiate new sync](/sync-for-commerce-api#/operations/request-sync) endpoint:

```http
POST /companies/{companyId}/sync/commerce/latest
```

The start of the sync date range is determined as the date of the last successful sync. If there were no previous successful syncs, the date configured in the [synchronization schedule](/commerce/synchronization-schedule) is used.

You can set the end of the sync date range by including a `syncTo` date in the request body. If no date is provided, the current time `UtcNow` is used. For example: 

```
{
  "syncTo": "2022-01-01T12:00:00.000Z"
}
```

You can also initiate a sync for a specified date range by making an API call to the [Initiate sync for specific range](/sync-for-commerce-api#/operations/request-sync-for-date-range) endpoint:

```http
POST /meta/companies/{companyId}/sync/commerce/historic
```

You will need to specify the sync range start and end dates in the request body, for example:

```json
{
  "start": "2022-01-01T12:00:00.000Z",
  "end": "2022-01-02T12:00:00.000Z"
}
```
---
## Read next

- [Synchronization schedule](/commerce/synchronization-schedule)