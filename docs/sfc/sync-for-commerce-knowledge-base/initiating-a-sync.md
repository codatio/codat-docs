---
title: "Initiating a Sync"
description: "Learn how to manually trigger a sync for a specified date range"
createdAt: "2022-11-10T15:24:18.952Z"
updatedAt: "2022-12-08T16:27:57.276Z"
---

You may need to perform a manual Commerce sync for a company from the date of its last successful sync to a specified date. To do so, make a call to the Latest Sync endpoint:

`POST /companies/{companyId}/sync/commerce/latest`

You need to specify the `companyId`, which is a required parameter.

The lower limit of the sync date range is determined as the date of the last successful sync. If there were no previous successful syncs, the sync start date configured in the [Synchronization schedule](/sfc/sync-for-commerce-knowledge-base/synchronization-schedule) is used.

For the higher limit of the sync date range, you can include a `syncTo` date in the request body. If no date is provided, the current time `UtcNow` is used.

Before making the call, you can also explore the [Latest Commerce Sync endpoint](https://docs.codat.io/reference/post-sync-latest) in our API Reference.
