---
title: "Advanced sync settings"
description: "Review additional settings available to configure the sync of various data types"
displayed_sidebar: "docs"
---

For most of our data types, we retrieve all available history. For financial statement data types, (`balanceSheet`, `profitAndLoss`, `cashFlowStatement`), we retrieve 24 months of history. You can apply additional sync settings to change these defaults to help you limit the amount of data synchronized from the source platform.  We reccomend that you only pull data from a date range relevant to your use-case, as this will greatly reduce the change of your datasets hitting rate limit errors.

Please note that these settings may not work for all data types, on all integrations. Please check with Codat Support if you are unsure

## Sync settings

You can configure the following advanced settings:

| Sync setting     | Property         | Description                                                                                                                                                                                       | Data types                                                          |
| ---------------- | ---------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------- |
| Months to sync   | `monthsToSync`   | Determines how many months to fetch data history for. Set to 24 months by default.                                                                                                                | `balanceSheet`, `profitAndLoss`, `cashFlowStatement`                |
| Sync from window | `syncFromWindow` | Sets a number of months to fetch data history for, where only data with a modified date in that timeframe will be synced.                                                                         | All except for `balanceSheet`, `profitAndLoss`, `cashFlowStatement` |
| Sync from UTC    | `syncFromUtc`    | Sets a UTC value as a start date for data syncing, where only data with a modified date in that timeframe will be synced. Records with a modified date before `syncFromUtc` will not be returned. | All except for `balanceSheet`, `profitAndLoss`, `cashFlowStatement` |

## Configuration

To view your Codat Client's 'global' sync settings you can call the following endpoint: 

```http title="Get Sync Settings"
GET /profile/syncSettings
```

To override the sync settings at a company level you can make the following request

```http title="Update Company Sync Settings
POST /companies/:companyId/syncSettings
```


For example, to configure advanced settings for our `invoices` data type, for a given company, send the following request to the endpoint:

```json
{
  "clientId": "your-codat-client-id",
  "settings": [
    {
      "dataType": "invoices",
      "fetchOnFirstLink": true,
      "syncSchedule": 24,
      "syncOrder": 0,
      "syncFromUtc": "2020-01-01T12:00:00.000Z",
      "syncFromWindow": 24,
      "monthsToSync": 0,
      "isLocked": true
    }
  ],
  "overridesDefaults": true
}
```

## 💡 Tips and traps

- When using advanced sync settings, settle on a uniform approach across your data types (e.g. all data types request 24 months' data). Some data types share requests, and applying different approaches may cause inconsistency.

- Advanced sync settings can be applied to all data types, but we advise you do not set them for reference data, such as customers, suppliers, chart of accounts, tax rates, tracking categories, and items.

- Both `syncFromWindow` and `syncFromUtc` use `sourceModifiedDate` to select records for syncing. You can [read more about modified dates](/using-the-api/modified-dates).

- When a sync setting is introduced after a successful data sync, the records fetched prior to the new sync setting will be either deleted or updated with a _Void_ or _Archived_ status.
