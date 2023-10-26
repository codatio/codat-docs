---
title: "New NetSuite bundle version released"
date: "2023-10-26"
tags: ["NetSuite", "Update"]
authors: todorlizhev
---

We have released a new version of our NetSuite bundle that contains fixes to the display of attachments. 

<!--truncate-->

Previously, users may have experienced an issue where attachments using a `M/DD/YYYY h:mm tt` datetime format weren't displaying their `createdDate` and `modifiedDate`. The new v1.23.0 version of the bundle converts all possible datetimes to a `YYYY-MM-DD HH24:MI:SS` format, so all attachments now display the `createdDate` and `modifiedDate`.

## Action required

If you use our NetSuite integration and have experienced the issue described above, update your bundle to the newest v1.23.0 version.
