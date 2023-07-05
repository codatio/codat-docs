---
title: "Upcoming 2023-10-10: Journal Entries - Change to mapping of manual contra entries"
date: "2023-06-30"
tags: ["Deprecation"]
authors: mcclowes
---

On October 10, 2023, Codat will change the mappings for contra manual journals on the `billPayments` and `payments` data types.

<!--truncate-->

Manual Journal Contra (offsetting AP against AR) entries will no longer be mapped to Codat's `billPayments` and `payments` data model. These manual journal entries will instead be found in the `journalEntries` data type.
