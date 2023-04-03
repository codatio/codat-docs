---
title: "Viewing and retrying a Sync"
description: "Learn how to monitor a sync's progress, review detailed logs, and retry failed items"
createdAt: "2023-01-11T05:58:45.089Z"
updatedAt: "2023-01-16T17:26:16.794Z"
---

Use the Sync Health page in the Codat Portal to monitor the status of your syncs, review detailed logs and error messages, and retry pushing failed items. This helps your support team to resolve common issues with the customer's settings or actions.

In the <a href="https://app.codat.io/" target="_blank">Codat Portal</a>, click **Products** and select the relevant Sync product to view its Health page:

- Check the **dashboard** (1) for a visual summary of sync totals.
- Use the **search bar** (2) to narrow down the records by sync Id or company Id. 
- Display the sync history for a specific period by indicating a **date range** (3). 
- [Review the possible statuses](/sfc/error-documentation#status-codes) of the syncs and filter the records by their **status code** (4). 
- Use the **menu** (6) to sort and amend the **sync history** (5) table as needed.

<img
  src="/img/sync-for-commerce/0006-sync-health-ui.png"
  alt="Sync Health page view with numbered annotations on the key page elements: the dashboard, filters, status filter, and the main data table"
/>

For further detail, click a record in your sync history.  The view provides sync start and end times, and sync source and target platforms. It also displays client-friendly notes and error messages in case of sync failures. Refer to our [troubleshooting guide](/sfc/error-documentation#error-messages) for recommendations on how to resolve these. 

You can also navigate to the Config tab to view and download the customer's sync configuration, or select the detailed Push Items list to retry failed pushes.

<img
  src="/img/sync-for-commerce/0007-sync-details-ui.png"
  alt="Detailed view of a sync log entry with Summary, Config, and Push Items tabs"
/>

## Retry failed items

:::warning Sync for Expenses only

At this time, it is possible to retry pushing failed items for Sync for Expenses only.

:::

In the Push Items tab, you can access a detailed view of **push items** - single items of an accounting data type with sync metadata surrounding it. Here, you can view each item's sync status, and retry failed ones. To do that, simply click the **Retry failed items** button. This will trigger another sync for all failed items. 

It is possible to filter the items by their core ID or data type. 

<img
  src="/img/sync-for-commerce/0009-sync-push-items-ui.png"
  alt="Detailed view of the Push Items tabs with two failed syncs"
/>

## Sync history for customers

Your customers can check their own sync history and sync status in the **Sync Flow**. For each sync, the customer can check the sync date range and its status.

## Pitfalls

- Syncs are shown as failed if any of the included items fail to push. Therefore, if a sync contains a mix of failed and successfully pushed records, it will still be marked as failed. 
- If a sync log record shows a "Please reconcile manually" note for an order, this is likely because an updated order does not have a matching original order in the platform. Therefore, Sync is unable to reconcile it, and this needs to be performed manually.
- Sync history does not currently display the date range for data pulled from the commerce platform that is used in the sync.
