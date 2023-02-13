---
title: "Monitoring a Sync"
description: "Learn how to monitor a sync's progress and review detailed logs"
hidden: true
createdAt: "2023-01-11T05:58:45.089Z"
updatedAt: "2023-01-16T17:26:16.794Z"
---

Use the Sync Health page in the Codat Portal to monitor the status of your sync queue. You can also review detailed logs, validations, and error messages. This helps your support team to resolve common issues with the merchant settings or actions.

To view the Sync Health page, navigate to **Products > Sync for Commerce** in the <a href="https://app.codat.io/products/sync-for-commerce" target="_blank">Codat Portal</a>.

The **dashboard** (1) gives a visual summary of sync totals, including failed syncs and syncs currently in progress.

You can use the **search bar** (2) to narrow down the records by sync Id, company Id, or platform name.

Display the sync queue for a specific period by indicating a **date range** (3). Finally, [review the possible statuses](/sfc/error-documentation#status-codes) of the syncs and filter the records by their **status code** (4).

<img
  src="/img/old/068227e-2023-01-13_09-27-21.png"
  alt="Sync Health page view with numbered annotations on the key page elements: the dashboard, filters, status filter, and the main data table"
/>

For further detail, review your **sync history** (5) by clicking the relevant sync log record. It provides sync start and end times, source and target platforms. It also displays client-friendly notes and error messages in case of sync failures. Refer to our [troubleshooting guide](/sfc/error-documentation#error-messages) for recommendations on how to resolve these.

You can also navigate to the Config tab to view and download the merchant's sync configuration.

<img
  src="/img/old/86ad267-2023-01-16_14-06-17.png"
  alt="Detailed view of a sync log entry with Summary and Config tabs "
/>

## Pitfalls

- Syncs are shown as failed if any of the included items fail to push. Therefore, if a sync contains a mix of failed and successfully pushed records, it will still be marked as failed.
- If a sync log record shows a "Please reconcile manually" note for an order, this is likely because an updated order does not have a matching original order in the platform. Therefore, Sync is unable to reconcile it, and this needs to be performed manually.
