---
title: "2023-10-09: Webhooks - 'New company synchronized' notification triggers after all datasets are complete"
date: "2023-06-13"
tags: ["Deprecation"]
authors: mrenshawcodat
---

From October 9, 2023, notifications for the 'New company synchronized' webhook will only trigger after all datasets created during the initial sync of a company are completed.

<!--truncate-->

Currently, this notification triggers after the first dataset queued when linking a company is successfully synced. 

After October 9, 2023, the webhook notification will only trigger when all datasets queued as a result of linking a company are complete, and at least one of those datasets is successful. 


## Action required​

This is a quality-of-life improvement that means you can rely on this notification to know when a company is no longer in the process of syncing data. 

If you have workflows that are dependent on the event of the first dataset completion, you will need to adjust these to expect the notification only after all datasets are complete.


## Expected impact if no action is taken​

This notification will be likely to arrive later than it currently does. If you have added code or workarounds that expect the webhook to be triggered when the first dataset is complete, you should remove or adjust these to align with the new behaviour. 

:::note Get ahead

You can get ahead of this change by enabling it now in the [Portal](https://app.codat.io/developers/api-deprecations). Learn how to do that [here](https://docs.codat.io/other/portal/developers), or read our [change policy](https://docs.codat.io/introduction/change-policy).

:::
