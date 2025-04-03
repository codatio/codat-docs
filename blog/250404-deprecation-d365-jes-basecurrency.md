---
title: "2025-07-10: ADD TITLE"
date: "2025-04-04"
tags: ["Deprecation","NetSuite"]
authors: ivasiutkova
---
On **July 10, 2025**, we will update the way how we map Journal Entries for Netsuite integration.

<!--truncate-->

Journal Entries would now be mapped in base currency (with currency conversion for amounts) instead of the foreign currency. This is to align the use of Journal entries to build financial statements, which are always presented in the company's base currency.

## Action required

If you are currently using Journal Entries you will need to review your current implementation to be able to support Journal Entries in base currency.

## Expected impact if no action is taken

All journal entries would be moved to use base currency. `netAmount` would be adjusted using the currency rate and the field `currency` would show the base currency. If you don't change your application by **July 10, 2025**, Journal Entries would be returned in base currency.


