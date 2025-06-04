---
title: "OpenAPI Specification Updates"
date: 2025-06-04
author: "Codat Bot"
---

# OpenAPI Specification Updates

This update summarizes the changes made to our OpenAPI Specifications.


## Codat-Bank-Feeds


### New Endpoints

- `/companies/{companyId}/connections/{connectionId}/bankFeedAccounts/{sourceAccountId}/managedBankFeeds/syncs/latest`
- `/companies/{companyId}/connections/{connectionId}/bankFeedAccounts/{sourceAccountId}/managedBankFeeds/syncs/{syncId}`
- `/companies/{companyId}/connections/{connectionId}/bankFeedAccounts/{sourceAccountId}/managedBankFeeds/syncs`

### New Models

- `StartScheduledSyncResult`
- `SyncStatusResult`
