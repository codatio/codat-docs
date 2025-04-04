---
title: "2025-07-10: Deprecation of foreign currency support in Journal Entries for NetSuite integration"
date: "2025-04-04"
tags: ["Deprecation","NetSuite"]
authors: ivasiutkova
---
On **July 10, 2025**, we will update the way how we map Journal Entries for Netsuite integration.

<!--truncate-->

Journal Entries would now be mapped in base currency (with currency conversion for amounts), not the original foreign currency. This is to align the use of Journal entries to build financial statements, which are presented in the company's base currency.

## Action required

If your system or application handles Journal Entries with foreign currencies, you **must update your implementation** to support base currency mapping before July 10, 2025.

## Expected impact if no action is taken

All journal entries would still be processed however if a journal entry is originally created in foreign currency its `netAmount` would be adjusted using the currency rate and the field `currency` would refer to the base currency. Any logic assuming the original currency will likely break or produce incorrect results.


