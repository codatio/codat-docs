---
title: "Advanced sync settings"
description: "Review additional settings available to configure the sync of various data types"
displayed_sidebar: "docs"
---

For most of our data types, we retrieve all available history. For financial statement data types, (`balanceSheet`, `profitAndLoss`, `cashFlowStatement`), we retrieve 24 months of history.

You can apply additional sync settings to change these defaults. This helps you to limit the amount of data synchronized from the source platform. We recommend that you only pull data from a date range relevant to your use case to reduce the chance of encountering rate limit errors.

:::caution Limited coverage

Changing advanced sync settings may not work for some data types and integration combinations. Check with Codat Support to confirm coverage.

:::

## Sync settings

You can configure the following advanced settings:

| Sync setting     | Property         | Description                                                                                                                                                                                       | Data types                                                          |
| ---------------- | ---------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------- |
| Months to sync   | `monthsToSync`   | Determines how many months to fetch data history for. Set to 24 months by default.                                                                                                                | `balanceSheet`, `profitAndLoss`, `cashFlowStatement`                |
| Sync from window | `syncFromWindow` | Sets a number of months to fetch data history for, where only data with a modified date in that timeframe will be synced.                                                                         | All except for `balanceSheet`, `profitAndLoss`, `cashFlowStatement` |
| Sync from UTC    | `syncFromUtc`    | Sets a UTC value as a start date for data syncing, where only data with a modified date in that timeframe will be synced. Records with a modified date before `syncFromUtc` will not be returned. | All except for `balanceSheet`, `profitAndLoss`, `cashFlowStatement` |

## Configuration

Use the [Get sync settings](/platform-api#/operations/get-profile-syncSettings) endpoint to view the current global sync settings for your Codat client or the [Get company sync settings](/platform-api#/operations/get-company-syncSettings) endpoint for company-specific sync settings.

To override client-level sync settings at a company level, use the [Set company sync settings](/platform-api#/operations/set-company-syncSettings) endpoint:

```http title="Update company sync settings"
POST /companies/{companyId}/syncSettings
```

For example, to configure company-specific settings for the `invoices` data type, send the following request to the endpoint:

```json
{
  "companyId": "your-codat-company-id",
  "settings": [
    {
      "dataType": "invoices",
      "fetchOnFirstLink": true,
      "syncSchedule": 24,
      "syncOrder": 0,
      "syncFromUtc": "2020-01-01T12:00:00.000Z",
      "syncFromWindow": 24,
      "monthsToSync": 24,
      "isLocked": true
    }
  ],
  "overridesDefaults": true
}
```

## 💡 Tips and traps

- When using advanced sync settings, settle on a uniform approach across your data types (e.g. all data types request 24 months' data). Some data types share requests, and applying different approaches may cause inconsistency.

- Advanced sync settings can be applied to all data types, but we advise you don't set them for reference data, such as customers, suppliers, chart of accounts, tax rates, tracking categories, and items.

- Both `syncFromWindow` and `syncFromUtc` use `sourceModifiedDate` to select records for syncing. You can read more about [modified dates at Codat](/using-the-api/modified-dates).

- When a sync setting is introduced after a successful data sync, the records fetched prior to the new sync setting will be either deleted or updated with a _Void_ or _Archived_ status.
