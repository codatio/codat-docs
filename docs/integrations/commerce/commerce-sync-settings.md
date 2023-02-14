---
title: "Commerce sync settings"
description: "Set commerce data types to automatically pull data when a company is first authorized"
createdAt: "2020-10-09T14:48:00.425Z"
updatedAt: "2022-10-20T10:12:53.168Z"
---

Update your sync settings to automatically retrieve commerce data from linked companies.

## Update commerce sync settings in the Codat Portal

In the Codat Portal:

1. In the navigation bar, click **Settings > Data types**.
2. Find the following data types and set the **Fetch on first link** toggle to **On**:

   - **Commerce - Company Info**
   - **Commerce - Orders**
   - **Commerce - Products**
   - **Commerce - Disputes**
   - **Commerce - Locations**
   - **Commerce - Transactions**
   - **Commerce - Customers**
   - **Commerce - Payments**
   - **Commerce - Payment Methods**

   You can update the other [Data type settings](/core-conepts/data-type-settings) when you've decided how frequently you want to sync commerce data.

3. Select **Save Changes** to update your configuration.

## Update commerce sync settings via the API

1. Open the [POST /profile/syncSettings](https://api.codat.io/swagger/index.html#/Profile/post_profile_syncSettings) endpoint.
2. In the request body set:

- **fetchOnFirstLink** to `true` for every commerce data type that you want to retrieve.

```
{
  "clientId":"{{clientId}}",
  "overridesDefaults":true,
  "settings":[
      {
          "dataType": "commerce-orders",
          "fetchOnFirstLink": true,
          "syncSchedule": 0,
          "syncOrder": 23
      },
      {
          "dataType": "commerce-products",
          "fetchOnFirstLink": true,
          "syncSchedule": 0,
          "syncOrder": 24
      },
      {
          "dataType": "commerce-disputes",
          "fetchOnFirstLink": true,
          "syncSchedule": 0,
          "syncOrder": 25
      },
      {
          "dataType": "commerce-transactions",
          "fetchOnFirstLink": true,
          "syncSchedule": 0,
          "syncOrder": 26
      },
      {
          "dataType": "commerce-customers",
          "fetchOnFirstLink": true,
          "syncSchedule": 0,
          "syncOrder": 27
      },
      {
          "dataType": "commerce-payments",
          "fetchOnFirstLink": true,
          "syncSchedule": 0,
          "syncOrder": 28
      },
      {
          "dataType": "commerce-companyInfo",
          "fetchOnFirstLink": true,
          "syncSchedule": 0,
          "syncOrder": 29
      }
  ]
}
```

3. Submit your request.
