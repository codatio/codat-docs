---
title: "Sync for Commerce FAQs"
sidebar_label: FAQs
description: "Frequently asked questions about Sync for Commerce"
createdAt: "2022-11-23T10:57:27.530Z"
updatedAt: "2022-12-08T10:47:16.122Z"
---

## How do you avoid creating duplicates in the accounting platforms?

During a sync, we check the `createdDate` of individual records (orders, payments, and transactions). We compare this date with the start and end dates and times of the sync period. If the record's `createdDate` is within the sync period, it is selected for syncing. We then create a new record in the target platform (for example, a new order).

Sync for Commerce also uses `id` to identify unique records. If we pick up records already received previously, and their ids and `sourceModifiedDate` match the existing records, we discard these from the sync scope.

If the `sourceModifiedDate` of the record is different from the previously received one, Sync for Commerce recognizes this as a modified source record and applies these changes as an adjustment.

You can also start a sync manually using our [_Latest Sync_](/sync-for-commerce-api#/operations/post-sync-latest) endpoint, or [learn more](/sfc/sync-for-commerce-knowledge-base/initiating-a-sync) about initiating it. Alternatively, you can [read more](/sfc/sync-for-commerce-knowledge-base/synchronization-schedule) about sync periods and the sync schedule.
