---
title: "Completed 2022-10-10: QuickBooks Desktop: Only one of account ref or item ref will be allowed when pushing bills"
date: "2022-08-17"
tags: ["Deprecation", "Completed"]
draft: false
authors: mcclowes
---

On January 10, 2023, we will change the Push validation for individual lines on Bills and Bill credit notes to allow only one of either accountRef or itemRef per line item.

<!--truncate-->

This will apply to bills and bill credit notes pushed to QuickBooks Desktop only.

Action required
If your code attempts to push Bills or Bill credit note to Codat with both an accountRef and an itemRef, you will need to update this to Push only one or the other.

Expected impact if no action is taken
Any code that attempts to push Bills or Bill credit note to Codat with both an accountRef and an itemRef after January 10, 2023 will result in an error.

You can get ahead of this change by enabling it now in the Portal. Learn how to do that here, or read our change policy here.
