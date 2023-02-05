---
title: "Data type settings"
description: "Concept overview and key details"
createdAt: "2019-02-20T13:19:55.318Z"
updatedAt: "2022-11-23T15:22:42.512Z"
---

On the <a className="external" href="https://app.codat.io/settings/data-types" target="_blank">Data type settings</a> page in the Codat Portal, you can view current settings for each data type split by integration type, override the default sync settings, and specify the fetch frequency for refreshing datasets. You can also view `dataType` keys for each data type.

You can also choose whether data is automatically pulled when a company is linked for the first time, using the **Fetch on first link** setting.

## Override the default sync settings

To customize your data type settings:

1. Sign in to the <a href="https://app.codat.io" target="_blank">Codat Portal</a>.
2. On the navigation bar, click **Settings > Data types**. The **Data type settings** page is displayed.
3. Customize settings for the data types you're interested in and save your changes.

You can learn more about each data type setting by reading the sections below.

<img
  src="https://files.readme.io/64728a5-datat_type_settings.PNG"
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

For more information about how to synchronize datasets on demand, see [Synchronizing your data](https://docs.codat.io/docs/data-status).

## Choose a synchronization frequency

You can change the synchronization frequency using the drop-down list next to the data type name:

- None (disables the synchronization)
- Monthly
- Weekly
- Daily
- Hourly (premium feature)

By default, **Sync frequency** is set to **None**.

## Queue a sync from the Codat Portal

To manually trigger your data to be synchronized:

1. In the navigation bar of the Codat Portal, select **Companies**.
2. Select the required company, then click **Refresh data**.

You can also view **Pull history** and **Push history** to check the status of previous pull and push data syncs.

:::note Additional sync settings

Some additional settings for the data type sync are available [via our API](https://docs.codat.io/reference/post_profile-syncsettings).

:::
