---
title: "Advanced data synchronization"
description: "DESCRIPTION PLEASE"
---

Data synchronization is an automated daily process, and the status of recent data synchronization operations can be viewed by a merchant in the Sync Configuration UI, and by your support team within the Portal Sync Health page.

However, if needed, it is possible to get sync status information, and even initiate syncs outside of the daily schedule using the Codat API.

## Get sync status
You may want or need your system to be aware of the latest sync status for a merchant. You can get a list of syncs and their status by making the following API call:

`GET /meta/companies/{companyId}/sync/commerce/status`

The response will be a list of syncs and their status information: 

[todo - missing from API ref] 

## Initiating a sync
 

You may need to perform a manual sync for a merchant, from the date of its last successful sync to a specified date. You can do this by making the following API call:

`POST /companies/{companyId}/sync/commerce/latest`

The start of the sync date range is determined as the date of the last successful sync. If there were no previous successful syncs, the sync start date configured in the [Synchronization schedule](/commerce/learn/synchronization-schedule) is used.

The end of the sync date range, can be set by including a syncTo date in the request body. If no date is provided, the current time UtcNow is used. Example request body (optional):

```
{
  "syncTo": "2022-01-01T12:00:00.000Z"
}
```

You can also initiate a sync for a specified date range, by making the following API call:

`POST /meta/companies/{companyId}/sync/commerce/historic`

You will need to specify the sync range start and end dates in the request body.  Example request body:

```
{
  "start": "2022-01-01T12:00:00.000Z",
  "end": "2022-01-02T12:00:00.000Z"
}
```