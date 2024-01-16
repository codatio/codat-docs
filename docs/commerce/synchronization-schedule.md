---
title: "Understand sync scheduler"
description: "Gain a better understanding of how our Sync scheduler works with the settings provided via the Sync Flow."
image: "/img/banners/social/commerce.png"
sidebar_label: "Sync scheduler"
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

| Property | Type | Description | Required |
|---|---|---|---|
| Selected frequency (`selectedFrequency`) | _string_ | The sync frequency selected by the merchant. | Required |
| Frequency options (`frequencyOptions`) | _string_ | The available options for sync frequency provided by Codat. **In the Sync Flow UI, only the daily option is available for a merchant to select.** | Required |
| Start date (`startDate`) | _ISO 8601 datetime_ | The date from which commerce data syncing should start (only applies to the first sync). | Required |
| Sync hour (`syncHourUtc`) | _Number_ <br/> Integers from 0 to 23 inclusive | The hour of the day that will mark the start/end of any sync period. **The Sync Flow sets this value automatically to midnight (00:00 am) in the merchant's time zone.** | Optional, set to 0 by default |
| Time zone (`timeZone`) | _string_ of IANA time zones **or** <br/> `null` (defaults to `Etc/UTC`) | The time zone applied to the start date and sync hour. | Optional, set to `ETC/Utc` by default |

Once the [Sync Flow is completed and Codat receives the configuration](/commerce/build/implementing-codats-no-code-merchant-configuration), we use it to determine the **sync period** – the period for which commerce data will be synced in one run of the sync service.

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
