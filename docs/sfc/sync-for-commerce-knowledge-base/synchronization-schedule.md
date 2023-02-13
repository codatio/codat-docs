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

```json
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

:::caution Daily sync option

Despite the monthly option being present in the configuration file, currently we only surface the **daily** option in the Sync Flow UI.
:::

| Error message | Error description and resolution |
|---|---|
| No company was found with ID. | This exception is thrown when a company record does not exist. It may have previously existed and been deleted. |
| Date overlaps with a previous sync date range. | This error surfaces when a scheduled daily sync overlaps or conflicts with a manually triggered sync. |

Once the [Sync Flow is completed and Codat receives the configuration](/sfc/build-with-sync-for-commerce/implementing-codats-no-code-merchant-configuration), we use it to determine the **sync period** – the period for which commerce data will be synced in one run of the sync service.

To determine the sync period, we first establish the following values internally:

- The sync **due date**: the datetime a sync becomes due based on the sync hour. It will mark the end of one sync period and the beginning of the next.

  Note that the Sync Flow sets the **sync hour** for you, and it's 00:00 am in the merchant's time zone. This means that the **due date** is at 00:00 am on the next day to the day we receive the configuration.

- The sync **run date** which is the datetime of the next sync execution.

:::caution Due date vs. run date

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
