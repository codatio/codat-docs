---
title: "2025-07-10: NetSuite: Deprecation of foreign currency support in Journal Entries"
date: "2025-04-07"
tags: ["Deprecation", "NetSuite"]
authors: ivasiutkova
---

On **July 10, 2025**, we will change the way we record the `netAmount` and `currency` fields of Journal Entries in foreign currency for our NetSuite integration.

<!--truncate-->

We currently record the `netAmount` and `currency` of foreign currency journal entries using the currency of the original NetSuite transaction. After this change, we will record the company's base currency as `currency` instead and convert the associated monetary amount in `netAmount`.

This is to simplify the inclusion of the Journal Entries data type into financial statements, which are presented in the company's base currency.

## Action required

If your application's logic anticipates NetSuite's foreign currency journal entries to be in the original transaction currency, you must update it to anticipate records in base currency instead.

## Expected impact if no action is taken

After **July 10, 2025**, all NetSuite journal entries originally created in foreign currency will be recorded in base `currency` instead, and the `netAmount` will be converted to the base currency. Any follow-on logic that assumes the original transaction currency is likely to produce incorrect results.
