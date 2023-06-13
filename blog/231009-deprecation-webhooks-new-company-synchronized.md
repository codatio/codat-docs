---
title: "Upcoming 2023-10-09: Webhooks - 'New company synchronized' alert triggers after all datasets are complete"
date: "2020-10-09"
tags: ["Deprecation"]
authors: mrenshawcodat
---

On October 9, 2023, alerts for the 'New company synchronized' webhook will trigger after all datasets created during the initial sync of a company have completed.

<!--truncate-->

Currently, this alert will trigger after the first dataset queued as a result of linking a company is complete and successful. 

After October 9, 2023, the alert will only trigger when all datasets queued as a result of linking a company are complete, and at least one of those datasets is successful. 


## Action required​

This is a quality of life improvement that means you will be able to rely on this alert to know when a company is no longer in the process of syncing data. 

If you have workflows that are dependent on the alert firing after only the first dataset is complete, then these will need to be adjusted to expect the alert to be received after all datasets are complete.


## Expected impact if no action is taken​

This alert is now likely to arrive later than it currently does. If you have added code or workarounds that expect the alert to be triggered when the first dataset is complete, then these should be removed or adjusted to expect the new behaviour. 
