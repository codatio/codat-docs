---
title: "Upcoming 2022-10-10: Sage 50 - deleted payment on accounts will be soft deleted  "
date: "2022-08-17"
tags: ["Deprecation", "Upcoming"]
draft: false
authors: mcclowes
link: "https://docs.codat.io/v2.0.0/changelog/41921-sage-50-deleted-payment-on-accounts-soft-deleted"
---

On January 10, 2023 we will stop mapping Payments on Account that have been marked as deleted in Sage 50, to Codat's Payment and Bill Payment datatypes.

<!--truncate-->

### Action required

No action is required, however note the deleted Payments on Account data will no longer be available.

### Expected result if no action is taken

No change is expected to other (not deleted) data.

### Additional information

Deleted Payments on Account pulled as Payments or Bill Payments before this change will no longer be returned when querying Payments and Bill Payments from Codat.

:::Note Get ahead

You can get ahead of this change by enabling it now in the Portal. Learn how to do that here, or read our change policy here.
:::
