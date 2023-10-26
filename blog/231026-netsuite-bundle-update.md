---
title: "NetSuite: attachments now support all date formats"
date: "2023-10-26"
tags: ["NetSuite", "Update"]
authors: todorlizhev
---

We have released a new version of our NetSuite bundle that supports the `M/DD/YYYY h:mm tt` datetime format when displaying attachments.

<!--truncate-->

Previously, users may have experienced an issue when viewing attachments that use a `M/DD/YYYY h:mm tt` datetime format for their `createdDate` and `modifiedDate`. Version v1.23.0 of the bundle provides improved support by handling all possible datetime formats, so users  can view the `createdDate` and `modifiedDate` for all attachments.

## Action required

You can update your NetSuite bundle to its latest version (`v1.23.0` or above) to take advantage of the `M/DD/YYYY h:mm tt` datetime format support.
