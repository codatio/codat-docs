---
title: "Additional sync settings"
---

Additional sync settings can be applied to data sets to limit the amount of data synchronised from the source platform. These settings only works on data sources that allow delta syncs.

Sync settings can be applied for all by default or an individual company. Settings on an individual level are useful as you could automate the process to apply for companies with desktop connectors without impacting those that use cloud platforms.

Sync Settings
Month to Sync
Applicable to financial statements only
Used to set a number of months of data to sync
Typical endpoints: Balance sheet, Profit and Loss, Cashflow Statements (all 24 months by default).
Sync from Window
Applicable to all data types excluding financial statements
Used to set a number of months of data to sync
Only data with a modified date in the selected timeframe will be synchronised
Typical endpoints: Invoices, payments, bills, bill payments
Sync from UTC
Applicable to all data types excluding financial statements
Provide a UTC value as a start date for the data syncing. Records older than this will not be returned.
Only data with a modified date in the selected timeframe will be synchronised
Typical endpoints: Invoices, payments, bills, bill payments
Considerations when implementing
1. Selecting a setting

When setting additional sync settings you should only apply one approach across Months to Sync, Sync From Window or Sync from UTC. We cannot guarantee the outcome if multiple are applied.

2. Reference data

These settings can be applied to all data sets however it is highly recommended you do not set for "reference data" such as customers, suppliers, chart of accounts, tax rate, tracking categories and items.

3. Data range

If a dataset is out of range it will not be reflected on in range synchronised data. e.g.

Sync from UTC set to 01-01-2020

Invoice from 01-12-2019 and Payment from 01-01-2020

Payment will be synchronised, invoice will not and data sets will not be linked.

4. Modified date

For Sync from Window and UTC the timeframe is based on modified date.

In some cases, such as desktop platform updates, all data is modified and therefore you will see data created well before the selected range.

5. Previously synced data

When a dataset has successfully synced and a sync setting is introduced, data synced prior to the sync date set will be either deleted or updated with a status of void or archived depending on what is applicable for the datatype.




Configuration

Configuration is required per data type. The current settings, retrieved using GET, can be used to develop the body of each POST request below.

All Companies

POST /profile/syncSettings

{
  "clientId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
  "settings": [
    {
      "dataType": "string",
      "fetchOnFirstLink": true,
      "syncSchedule": 0,
      "syncOrder": 0,
      "syncFromUtc": "2021-03-11T09:35:12.999Z",
      "syncFromWindow": 0,
      "monthsToSync": 0
    }
  ],
  "overridesDefaults": true
}
Single Company

POST /companies/{companyId}/syncSettings(Swagger)

{
  "companyId": "3fa85f64-5717-4562-b3fc-2c963f66afa6",
  "settings": [
    {
      "dataType": "string",
      "fetchOnFirstLink": true,
      "syncSchedule": 0,
      "syncOrder": 0,
      "syncFromUtc": "2021-03-11T09:38:00.169Z",
      "syncFromWindow": 0,
      "monthsToSync": 0
    }
  ],
  "overridesDefaults": true
}

The API does not currently provide any error messages if the settings are not supported.