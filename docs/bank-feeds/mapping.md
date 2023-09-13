---
title: "Bank feeds mapping overview"
description: "Push bank transaction data into your customers' accounting platforms with an automated feed."
sidebar_label: Overview
displayed_sidebar: bankfeeds
hide_title: true
hide_description: true
---

import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";

## Authorization and mapping

The method of connecting and mapping this source account to your target account varies depending on the accounting package your customer is using, typically there are three methods of mapping the source account to a target account:
- [**Codat UI Mapping:**](/bank-feeds/mapping/codat-ui) If you prefer a quicker setup, you can utilize Codat's provided user interface for mapping.
- [**API Mapping:**](/bank-feeds/mapping/api-mapping) Integrate the mapping journey directly into your application for a seamless user experience.
- **Accounting Platform Mapping:** For some accounting software, the mapping process must be conducted within the software itself.
    - [QuickBooks Online Bank Feeds](/bank-feeds/mapping/qbo-mapping)
    - [Sage BankFeeds](/bank-feeds/mapping/sage-mapping)

| Bank Feed Integration | API Mapping | Codat UI Mapping | Accounting Platform Mapping |
| --------------------- | ----------- | ---------------- | --------------------------- |
| Xero                  | ✅          | ✅               |                             |
| FreeAgent             | ✅          | ✅               |                             |
| QuickBooks Online     |             |                  | ✅                          |
| Sage Bank Feeds       |             |                  | ✅                          |




