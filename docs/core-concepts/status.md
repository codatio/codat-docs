---
title: "Data status"
description: "Concept overview and key details"
createdAt: "2020-04-08T22:29:11.173Z"
updatedAt: "2022-11-23T15:23:18.810Z"
---

Synchronizing a data type ensures that our data cache is up-to-date with the data source and means you'll be able to retrieve the synchronized company's data using our API or view the data in [the Portal](https://app.codat.io).

There are three ways to initiate the synchronization of data:

- Queue a sync to refresh the data from within Codat's Portal
- Use the API to queue a data synchronization (known as a _dataset_)
- Use the Sync settings feature in the Codat Portal

By default, full synchronization of each data type marked as _Fetch on first link_ in your [data type settings](/data-sync-settings) will be queued automatically when a company first authorizes itself with Codat.

## Dataset statuses

All datasets are created in the _Queued_ state. For online packages, the transition to _Fetching_ will be near instant. For on-premise packages, the synchronization will remain _Queued_ until the on-premises connector on the end user's machine is online and ready to process the dataset.

A dataset going to the _AuthError_ state indicates that the connection to the data source is no longer authorized and will require the company to re-authorize your connection before you're able to complete subsequent data synchronizations for that connection.

Other error states may be resolved by queueing a new synchronization after waiting some time. For example, you may see datasets go to _FetchError_ if you attempt a synchronization during a period of scheduled maintenance for the underlying data source.

Datasets can also transition to the _NotSupported_ state if the dataset you are trying to sync is not supported by the linked platform.

<img
  src="/img/old/47eaf22-DatasetStatuses.png"
  alt="A diagram of possible dataset statuses from Queued to Complete"
/>

| State                                                                 | Description                                                                                                                                                                                      |
| :-------------------------------------------------------------------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Fetching                                                              | The data is currently being pulled from the integration.                                                                                                                                         |
| Mapping                                                               | The data is being converted into Codat's standard model.                                                                                                                                         |
| Validating                                                            | The data is being checked for consistency and correctness.                                                                                                                                       |
| Processing                                                            | The data is being stored into Codat's cache.                                                                                                                                                     |
| Complete                                                              | The dataset has completed, and the data is available to be queried via Codat's API.                                                                                                              |
| NotSupported                                                          | The integration does not support the datatype that was requested. For example, Clearbooks does not support pulling the Profit and Loss Report.                                                   |
| FetchError, MapError, ValidationError, ProcessingError, InternalError | The dataset failed in one of the above states. These are monitored by our engineering teams, but you may contact support team for assistance as required.                                        |
| AuthError                                                             | The authentication to the data source has expired. This usually means you will need to relink, by getting the end user to follow the data connections's `linkUrl` to re-enter their credentials. |
| Queued                                                                | The dataset has just been requested, and will move into `fetching` shortly.                                                                                                                      |

## Examples

### Data type that has never been synced

```json
{
  "suppliers": {
    "dataType": "suppliers”
  },
  ...
}
```

### First sync for the data type failed

```json
{
  "suppliers": {
    "dataType": "suppliers",
    "currentStatus": "FetchError",
    "latestSyncId": "31632c48-23dc-4cb1-b3ff-0829343c8e85",
  },
  ...
}
```

### Last sync failed although a previous sync was successful

```json
{
  "suppliers": {
    "dataType": "suppliers",
    "lastSuccessfulSync": "2019-10-10T00:31:04.497225Z",
    "currentStatus": "FetchError",
    "latestSyncId": "31632c48-23dc-4cb1-b3ff-0829343c8e85",
    "latestSuccessfulSyncId": "9d6d3754-deeb-42b7-ad37-e10942f9e258"
  },
  ...
}
```

### Sync was successful

```json
{
  "suppliers": {
    "dataType": "suppliers",
    "lastSuccessfulSync": "2019-10-10T00:31:04.497225Z",
    "currentStatus": "Complete",
    "latestSyncId": "31632c48-23dc-4cb1-b3ff-0829343c8e85",
    "latestSuccessfulSyncId": "31632c48-23dc-4cb1-b3ff-0829343c8e85"
  },
  ...
}
```