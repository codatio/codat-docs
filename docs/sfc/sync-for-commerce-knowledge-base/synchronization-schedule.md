---
title: "Synchronization schedule"
description: "Gain a better understanding of how our Sync scheduler works with the settings provided via the Sync Flow."
createdAt: "2022-09-23T15:49:23.153Z"
updatedAt: "2022-09-26T19:45:47.306Z"
---

## Synchronization schedule configuration

The schedule of regular data syncs depend on the following values:

- Start date (selected by the merchant in the Sync Flow UI)
- Sync hour (set by the Sync Flow to 00:00 am in the merchant's time zone)
- Time zone (specified by the merchant in the Sync Flow UI)
- Frequency (currently only daily)

```
"schedule": {
  "selectedFrequency": "Daily",
  "frequencyOptions": [
      "Daily",
      "Monthly"
  ],
  "startDate": "2022-06-15",
  "syncHourUtc": 0,
  "timeZone": "Europe/London"
}

```

:::Caution

Despite the monthly option being present in the configuration file, currently we only surface the **daily** option in the Sync Flow UI.
:::

[block:parameters]
{
"data": {
"h-0": "Property",
"h-1": "Type",
"h-2": "Description",
"0-0": "Selected frequency (`selectedFrequency`)",
"0-1": "_string_",
"0-2": "The sync frequency selected by the merchant.",
"1-0": "Frequency options (`frequencyOptions`)",
"1-1": "_string_",
"1-2": "The available options for sync frequency provided by Codat. **In the Sync Flow UI, only the daily option is available for a merchant to select.**",
"2-0": "Start date (`startDate`)",
"2-1": "_ISO 8601 datetime_",
"2-2": "The date from which commerce data syncing should start (only applies to the first sync).",
"3-0": "Sync hour (`syncHourUtc`)",
"3-1": "_Number_
Integers from 0 to 23 inclusive",
"3-2": "The hour of the day that will mark the start/end of any sync period. **The Sync Flow sets this value automatically to midnight (00:00 am) in the merchant's time zone.**",
"4-0": "Time zone (`timeZone`)",
"4-1": "_string_ of IANA time zones **or**
`null` (defaults to `Etc/UTC`)",
"4-2": "The time zone applied to the start date and sync hour.",
"h-3": "Required",
"0-3": "Required",
"1-3": "Required",
"2-3": "Required",
"3-3": "Optional, set to `0` by default",
"4-3": "Optional, set to `“ETC/Utc”` by default"
},
"cols": 4,
"rows": 5
}
[/block]

Once the [Sync Flow is completed and Codat receives the configuration](/implementing-codats-no-code-merchant-configuration), we use it to determine the **sync period** – the period for which commerce data will be synced in one run of the sync service.

To determine the sync period, we first establish the following values internally:

- The sync **due date**: the datetime a sync becomes due based on the sync hour. It will mark the end of one sync period and the beginning of the next.

  Note that the Sync Flow sets the **sync hour** for you, and it's 00:00 am in the merchant's time zone. This means that the **due date** is at 00:00 am on the next day to the day we receive the configuration.

- The sync **run date** which is the datetime of the next sync execution.

:::Caution

**Due date** and the **run date** are not similar. Codat manages the **run date** according to the system load and other factors. The time gap between the sync **due date** and the sync **run date** depends on multiple factors and may differ from one sync to another.
:::

The **start date** and **sync hour** determine the beginning of the first sync period.

Starting from the second one, every sync starts at the due date of the previous successful sync.

Here is an example of a typical first sync:

- Now it’s July 13, 4 pm
- The **start date** is set to May 1
- The **sync hour** is set to 00:00 am with the sync frequency set to **daily**
- The sync **due date** (determined by Codat) is 00:00 am on July 14
- The sync **run date** (determined by Codat) may be several hours later, for example, at 03:00 am on July 14
- The first sync period will be from the start date May 1 (00:00 am) to the sync **due date** July 14 (00:00 am)
- The next sync period will be from July 14 (00:00 am), **or the last successful sync date** to July 15 (00:00 am), the next sync **due date**.
