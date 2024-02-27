---
title: "Advanced sync settings"
description: "Review additional settings available to configure the sync of various data types"
displayed_sidebar: "docs"
---

For most of our data types, we retrieve all available history. For financial statement data types (`balanceSheet`, `profitAndLoss`, `cashFlowStatement`), we retrieve 24 months of history. You can apply additional sync settings to change these defaults. This helps you limit the amount of data synchronized from the source platform. 

These settings only work for data sources that allow delta syncs and are applied to all companies. 

## Sync settings

You can configure the following advanced settings:

| Sync   setting     | Property          | Description                                                                                                                                                                                                | Data types                                                            |
|--------------------|-------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------|
| Months to   sync   | `monthsToSync`    | Determines how many months to   fetch data history for. Set to 24 months by default.                                                                                                                       | `balanceSheet`, `profitAndLoss`,   `cashFlowStatement`                |
| Sync from   window | `syncFromWindow`  | Sets a number of months to fetch   data history for, where only data with a modified date in that timeframe   will be synced.                                                                             | All except for `balanceSheet`,   `profitAndLoss`, `cashFlowStatement` |
| Sync   from UTC    | `syncFromUtc`     | Sets a UTC value as a start date   for data syncing, where only data with a modified date in that timeframe   will be synced. Records with a modified date before `syncFromUtc` will not   be returned.  | All except for `balanceSheet`,   `profitAndLoss`, `cashFlowStatement` |

## Configuration

Use our [Update all sync settings](/platform-api#/operations/update-profile-syncSettings) endpoint to configure advanced sync settings. These settings are configured per data type and apply to all companies. The endpoint does not provide any error messages if the settings are not supported.

For example, to configure advanced settings for our `invoices` data type, send the following request to the endpoint:

```json
{
  "clientId": "367f7975-267b-439b-90c6-a6040ee680f3",
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

- When using advanced sync settings, settle on a uniform approach across your data types, as we cannot guarantee consistency if different approaches are applied. 

- Advanced sync settings can be applied to all data types, but we advise you do not set them for reference data, such as customers, suppliers, chart of accounts, tax rates, tracking categories, and items.

- Be aware of records that will not be linked if a record's date is our of range. For example, with `syncFromUtc` set to 01-01-2020, an invoice dated 01-12-2019 will not be synchronized, but a payment against that invoice dated 01-01-2020 will. As a result, these records will not be linked. 

- Both `syncFromWindow` and `syncFromUtc` use `sourceModifiedDate` to select records for syncing. You can [read more about modified dates](/using-the-api/modified-dates). 

- When a sync setting is introduced after a successful data sync, the records fetched prior to the new sync setting will be either deleted or updated with a _Void_ or _Archived_ status.
