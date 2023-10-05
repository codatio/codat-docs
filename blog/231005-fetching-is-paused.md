---
title: "Is retrieving SMB data taking unusually long?"
date: "2023-10-05"
tags: ["Product", "Update"]
authors: mcclowes
---

We recently released some important infrastructure changes to improve reliability when pulling data from third party platforms. It also means fewer API calls to third parties, meaning you're less likely to encounter rate limits. Currently, these improvements apply to our Xero and QuickBooks Online integrations.

<!--truncate-->

Another major benefit of this is better recovery where unexpected issues are encountered during the operation. Previously, where third-party issues were encountered, including reaching rate limits or outages, we would return a FetchError, and you would have to retry the operation manually.

**Now, where recoverable issues with third-parties are encountered, we pause the operation behind the scenes and retry ourselves at a later date.**

Because of this change, you might see operations remaining in the Fetching status for a long time. Nothing's gone wrong - these operations are not broken or timed out, they are awaiting retry. Currently, we haven't exposed this contextual information via API or the Portal, but have plans to do so as soon as possible.
