---
title: "Push commerce data to Codat"
description: "Learn how to push your merchant’s data to the Codat system"
createdAt: "2022-02-09T13:34:14.504Z"
updatedAt: "2022-11-21T17:42:49.928Z"
---

:::caution Beta testing

Sync for Commerce is in beta. If you are interested in building with Sync for Commerce, please [get in touch](mailto:sync-for-commerce@codat.io).
:::

1. After the merchant completes the data mapping configuration, push your merchant’s data to the data endpoint for the following data types:

- [Orders](/commerce-api#/schemas/orders)
- [Payments](/commerce-api#/schemas/payments)
- [Transactions](/commerce-api#/schemas/transactions)

```http
  POST /data/companies/{companyId}/sync/{dataType}",
```

You can learn more about these data types in the context of Sync for Commerce and see some examples [here](/sfc/build-with-sync-for-commerce/functional-examples-of-data).

2. From the response, identify the `datasetId`. You can use this property to check whether the data has been processed and mapped successfully.

3. Check whether the data has been successfully processed by Codat by calling the Data endpoint:

```http
GET /meta/companies/{companyId}/pull/history/{datasetId}",
```

```json
{
  "id": "6f87fad8-862b-4e6d-ab67-1c8d49ebb5ee",
  "companyId": "a00a94a8-9443-4f1d-b658-bfb19d74c6bf",
  "connectionId": "26f2029f-8027-4971-807d-7378d74323d8",
  "dataType": "commerce-transactions",
  "status": "Complete",
  "requested": "2022-03-21T20:43:46.6756749Z",
  "completed": "2022-03-21T20:43:54.4552982Z",
  "progress": 100,
  "isCompleted": true,
  "isErrored": false
}
```

The status within the response will correspond to a dataset status, you can find a list of available statuses [here](/core-concepts/status#dataset-statuses).

4. **(Optional)** The data will be synchronized with the accounting platform at the time configured by the merchant.

You can see the status of your syncs in the Sync for Commerce section of the Portal. Click on the company to see a detailed breakdown of the sync status.

You can also check whether the data has been mapped to the accounting platform directly via API:

```http
GET /meta/companies/{companyId}/sync/commerce/status
```

5. **(Optional)** You can also [set up alerting rules](/introduction/webhooks/core-rules-types) to receive alerts every time the status of the datasets changes, or even when a Sync connection is deleted by the merchant completely.

:::info How to trigger data synchronization for testing

Refer to [How to trigger manual syncs for testing](/sfc/sync-merchant-configuration/sync-your-own-merchant-journey) if you need to trigger data synchronization manually for testing purposes.

:::

## Rules for sending data

There are several things to keep in mind when pushing the data to Codat:

- On the first push, `POST` the entire dataset that you want to be synchronized into the accounting platform.

  Sync for Commerce will map all the orders, payments, and transactions with a date later than the configured start date.

- For all subsequent pushes, only push new or changed data. Ensure you record the latest data push to avoid overlap and duplication.
- Only the data that you have sent to Codat’s API can be synced with the accounting package, so we strongly recommend pushing to Codat endpoints regularly throughout the day, and, in all cases, before a merchant’s configured sync time to ensure there is enough time for the data to be processed by Codat.
- Do not make concurrent data calls for the same data types as they may get missed.
- Whilst there are currently no data limits, we would recommend payloads for Orders, Payments, and Transactions are kept to under 5000 records.

:::danger Asynchronous data pushing
Pushing should not be a synchronous operation tightly tied to data being created in the merchant’s system. Push the data asynchronously, so that if a push to Codat fails, it wouldn’t stop the SMB from being able to create records in their application.
:::

## Rules for updating data

When updating data, only send complete and changed objects. Even if just one field of an order has been changed, you should still send the whole object.

Don’t send the objects that haven’t been updated.

You can only update the data that hasn’t yet been synchronized with the SMB’s accounting platform. An attempt to update the data that has already been synchronized may result in duplicate records being created in your customer’s accounting software.

## Rules for deleting data

To delete the data, send a sparse delete that only includes the object ID to signify that it is empty:

```http
{
  "id": "01e63721-1205-478e-8503-9d8bf8a93f44"
}
```
