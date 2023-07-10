---
title: "Completed 2023-07-10: QuickBooks Desktop - change to directIncomes mappings"
date: "2023-03-10"
tags: ["Deprecation", "UAT"]
authors: mcclowes
---

On July 10, 2023, Codat will change the mappings for the Direct incomes data type for the QuickBooks Desktop on-premise connector.

<!--truncate-->

After this change, the `id` property in Direct incomes will be mapped as `"Deposit ID - Transaction line ID"`.

This changes will ensure that the `id` parameter is unique when Direct incomes are pulled to QuickBooks Desktop via the connector.
