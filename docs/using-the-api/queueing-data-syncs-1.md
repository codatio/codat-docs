---
title: "Queueing data syncs"
slug: "queueing-data-syncs-1"
description: "Overview of queuing data refresh in Codat's API"
createdAt: "2022-11-07T19:58:13.342Z"
updatedAt: "2022-11-07T20:34:47.562Z"
---

There are [two POST endpoints in the API ](ref:data-pull) for queuing a refresh of data:

1. `/companies/{companyId}/data/queue/{dataType}`
   - Will queue a dataset for the specified data type
   - _dataType_ is the key of the data type e.g. `invoices`
2. `/companies/{companyId}/data/all`
   - Will queue a dataset for each of the data types marked as _Fetch on first link_ in your [data type settings](https://docs.codat.io/docs/data-sync-settings), where that data type is supported by the company's linked data connections

:::info Multiple dataset queued exception

If you try to queue a synchronisation for a data type that is already in process, you'll receive an exception.

`"error": "DatasetAlreadyInProgressException: Cannot queue {dataType} sync for {companyId} as previous sync {dataSetId} is still in progress"`
:::
