---
title: "Completed 2023-10-10: Quickbooks Online - Change to mapping of manual contra journal entries"
date: "2023-06-30"
tags: ["Deprecation", "QuickBooks Online"]
authors: dharries
---

On October 10, 2023, Codat will change the mappings for contra manual journal entries on the `billPayments` and `payments` data types in Quickbooks Online.

<!--truncate-->

Manual Journal Contra (offsetting AP against AR) entries will no longer be mapped to Codat's `billPayments` and `payments` data model. These manual journal entries will instead be found in the `journalEntries` data type.
