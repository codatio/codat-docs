---
title: "Completed 2023-01-10: FreshBooks - expenses will no longer be fetched as bills and bill payments"
date: "2022-09-26"
tags: ["Deprecation", "Completed"]
draft: false
authors: mcclowes
---

On January 10, 2023, we will deprecate mapping of FreshBooks expenses as Codat Bills and Bill payments.

<!--truncate-->

FreshBooks expenses are mapped as Direct costs.

Action required
If you require expense data from FreshBooks, use the Codat Direct costs datatype instead.

Expected impact if no action is taken
Reading Bills and Bill payments will no longer include FreshBooks expense data, so you may not see the data you expect.

### Additional information

Reading Bills and Bill payments for a Company with a pre-existing completed data sync (for these datatypes) will result in any pre-existing Bills and Bill payments that represent FreshBooks expenses being voided (Bills) or deleted (Bill payments).

You can get ahead of this change by enabling it now in the Portal. Learn how to do that [here](https://docs.codat.io/configure/portal/developers), or read our [change policy](https://docs.codat.io/using-the-api/change-policy).