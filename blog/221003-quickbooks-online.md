---
title: "Completed 2023-01-10: QuickBooks Online: Purchases will no longer be fetched as bills and bill payments"
date: "2022-10-03"
tags: ["Deprecation", "Completed"]
draft: false
authors: mcclowes
---

On January 10, 2023, we will deprecate mapping of QuickBooks Online 'purchases' as Codat Bill Credit notes, Bills and Bill payments.

<!--truncate-->

QuickBooks Online 'purchases' are mapped as Direct costs.

Action required
If you require purchase data from QuickBooks Online, use the Codat Direct costs datatype instead.

Expected impact if no action is taken
Pulling Bill Credit notes, Bills and Bill payments will no longer include QuickBooks Online purchase data, so you may not see the data you expect.

## Additional information

Pulling Bills and Bill payments for a Company with a pre-existing completed data sync (for these datatypes) will result in any pre-existing Bills and Bill payments that represent QuickBooks Online purchases being voided (Bills) or deleted (Bill payments).

:::note Get ahead

You can get ahead of this change by enabling it now in the Portal.

:::