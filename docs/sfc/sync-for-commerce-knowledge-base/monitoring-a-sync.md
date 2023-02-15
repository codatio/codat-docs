---
title: "Monitoring a Sync"
description: "Learn how to monitor a sync's progress and review detailed logs"
createdAt: "2023-01-11T05:58:45.089Z"
updatedAt: "2023-01-16T17:26:16.794Z"
---

Use the Sync Health page in the Codat Portal to monitor the status of your syncs and review detailed logs and error messages. This helps your support team to resolve common issues with the merchant settings or actions.

Navigate to **Products > Sync for Commerce** in the <a href="https://app.codat.io/products/sync-for-commerce" target="_blank">Codat Portal</a> to view the Health page:

- Check the **dashboard** (1) for a visual summary of sync totals.
- Use the **search bar** (2) to narrow down the records by sync Id or company Id. 
- Display the sync history for a specific period by indicating a **date range** (3). 
- [Review the possible statuses](/sfc/error-documentation#status-codes) of the syncs and filter the records by their **status code** (4). 
- Use the **menu** (6) to sort and amend the **sync history** (5) table as needed.

<img
  src="/img/old/068227e-2023-01-13_09-27-21.png"
  alt="Sync Health page view with numbered annotations on the key page elements: the dashboard, filters, status filter, and the main data table"
/>

For further detail, click a record in your sync history.  The view provides sync start and end times, and sync source and target platforms. It also displays client-friendly notes and error messages in case of sync failures. Refer to our [troubleshooting guide](/sfc/error-documentation#error-messages) for recommendations on how to resolve these. 

You can also navigate to the Config tab to view and download the merchant's sync configuration.

<img
  src="/img/old/86ad267-2023-01-16_14-06-17.png"
  alt="Detailed view of a sync log entry with Summary and Config tabs "
/>

## Sync history for merchants

Your merchants can [check their own sync history](/sfc/build-with-sync-for-commerce/implementing-codats-no-code-merchant-configuration#4-allow-the-merchant-to-review-their-configuration) and sync status in the **Sync Flow**. For each sync, the merchant can check the sync date range and its status.

## Pitfalls

- Syncs are shown as failed if any of the included items fail to push. Therefore, if a sync contains a mix of failed and successfully pushed records, it will still be marked as failed. 
- If a sync log record shows a "Please reconcile manually" note for an order, this is likely because an updated order does not have a matching original order in the platform. Therefore, Sync is unable to reconcile it, and this needs to be performed manually.
- Sync history does not currently display the date range for data pulled from the commerce platform that is used in the sync.
