---
title: "Data type settings"
sidebar_label: "Data types"
description: "Concept overview and key details"
tags:
  - Core concept
---

A 'data type' is a specific type of data, like an [invoice](/accounting-api#/schemas/Invoice).

On the <a className="external" href="https://app.codat.io/settings/data-types" target="_blank">Data type settings</a> page in the Codat Portal, you can view current settings for each data type split by integration type, override the default sync settings, and specify the fetch frequency for refreshing datasets. You can also view `dataType` keys for each data type.

You can also choose whether data is automatically pulled when a company is linked for the first time, using the **Fetch on first link** setting.

## Override the default sync settings

To customize your data type settings:

1. Sign in to the <a href="https://app.codat.io" target="_blank">Codat Portal</a>.
2. On the navigation bar, click **Settings > Data types**. The **Data type settings** page is displayed.
3. Customize settings for the data types you're interested in and save your changes.

You can learn more about each data type setting by reading the sections below.

<img
  src="/img/old/64728a5-datat_type_settings.PNG"
  alt="Data type settings view in the Codat Portal"
/>

## Use "Fetch on first link"

By default, **Fetch on first link** is _on_ for most data types.

When **Fetch on first link** is _on_ for a data type:

- The data type is automatically queued for synchronization when a company is first linked, provided that the data type is available in the company's accounting platform.
- The data type is queued for synchronization when clicking the **Refresh data** button for a company in the Codat Portal.
- The data type is queued for synchronization when you make a request to [POST /companies/{companyId}/data/queue/{dataType}](https://api.codat.io/swagger/index.html#/Data/post_companies__companyId__data_queue__dataType_) with _all_ as the datatype.

When **Fetch on first link** is turned _off_ for a data type:

- The data type is not automatically queued for synchronization when a company is first linked.
- You can still queue a pull for this individual data type using the [POST /companies/{companyId}/data/queue/{dataType}](https://api.codat.io/swagger/index.html#/Data/post_companies__companyId__data_queue__dataType_) endpoint. This might be useful for testing, or if you only need infrequent access to a dataset.

For more information about how to synchronize datasets on demand, see [Synchronizing your data](/core-concepts/status).

## Choose a synchronization frequency

You can change the synchronization frequency using the drop-down list next to the data type name:

- None (disables the synchronization)
- Monthly
- Weekly
- Daily
- Hourly (premium feature)

It is not possible to specify a date or a time for synchronization. Instead, the syncs are queued automatically based on the frequency and the age of the existing data set. By default, **Sync frequency** is set to **None**. 

:::note Offline connectors
If a connector remains installed on the user’s machine and a sync frequency is configured, the offline connector will continue to periodically sync data when the connector is available.
:::

## Queue a sync from the Codat Portal

To manually trigger your data to be synchronized:

1. In the navigation bar of the Codat Portal, select **Companies**.
2. Select the required company, then click **Refresh data**.

You can also view **Pull history** and **Push history** to check the status of previous pull and push data syncs.

:::note Default sync history
For most data types, we retrieve all available history. For financial statement data types (`balanceSheet`, `profitAndLoss`, `cashFlowStatement`), we retrieve 24 months of history. These default settings can be overriden via our API using [advanced sync settings](/knowledge-base/advanced-sync-settings).
:::

---

## Read next

- Next concept: [Data status](/core-concepts/status)

