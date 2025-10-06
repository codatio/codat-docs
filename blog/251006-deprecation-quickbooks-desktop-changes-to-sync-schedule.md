---
title: "2026-01-10: QuickBooks Desktop syncs will soon be restricted to user-defined schedules"
date: "2025-10-06"
tags: ["Deprecation"]
authors: dcoplowe
---

On **January 10, 2026**, we will deprecate the current behavior where data is synced immediately after a QuickBooks Desktop company is linked. Going forward, all syncs, including the initial fetch, will only run during the timeframes explicitly allowed by the customer’s sync schedule.

<!--truncate-->

This change aligns with upcoming improvements to the QuickBooks Desktop Link flow, which will introduce **configurable sync schedules**. These enhancements are designed to minimize disruption by ensuring the Intuit Web Connector only runs at times defined by the customer.

Under the new behavior (once available):
- **Fetch on first link will no longer run immediately** after linking. It will wait until the next permitted sync window.
- **All future syncs** will also respect the user-defined sync schedule, including any custom hours or pauses they configure.

## Action required

This change **does not affect existing QuickBooks Desktop connections** — their current sync schedules will remain in place. However, from **January 10, 2026**, users will be able to configure a sync schedule of their choosing, including pausing or adjusting sync times.

To prepare for this change:

- Ensure your application logic accounts for potential delays in data availability after a new QuickBooks Desktop connection is established.
- Notify your customers that they will have full control over when syncing occurs, including options to pause syncing or define active sync windows.
- Keep an eye on our upcoming updates for the official release of configurable sync schedules.

## Expected impact if no action is taken

If no action is taken by **January 10, 2026**, new QuickBooks Desktop connections may appear inactive or missing data immediately after linking. Since initial and ongoing syncs will only run during the customer’s defined schedule, any assumptions that data will be available immediately may lead to broken workflows, delayed data processing, or incorrect user messaging.