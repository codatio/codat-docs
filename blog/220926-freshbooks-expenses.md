---
title: "Completed 2023-01-10: Freshbooks - expenses will no longer be fetched as bills and bill payments"
date: "2022-09-26"
tags: ["Deprecation", "Completed"]
draft: false
authors: mcclowes
---

On January 10, 2023, we will deprecate mapping of Freshbooks expenses as Codat Bills and Bill payments.

<!--truncate-->

Freshbooks expenses are mapped as Direct costs.

Action required
If you require expense data from Freshbooks, use the Codat Direct costs datatype instead.

Expected impact if no action is taken
Pulling Bills and Bill payments will no longer include Freshbooks expense data, so you may not see the data you expect.

Additional information
Puling Bills and Bill payments for a Company with a pre-existing completed data sync [for these datatypes] will result in any pre-existing Bills and Bill payments that represent Freshbooks expenses being voided (Bills) or deleted (Bill payments).

You can get ahead of this change by enabling it now in the Portal. Learn how to do that here, or read our change policy here.