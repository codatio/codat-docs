---
title: "Data synchronization"
description: "DESCRIPTION PLEASE"
displayed_sidebar: commerce
---

## How data is synchronized
Once your customer has set up their sales data synchronization in the Sync Configuration UI, their sales data will synchronize automatically at the end of every day.

Data will always be synchronized for the last calendar day (up to midnight); the synchronization process itself may run some time after midnight and take some time to complete, but it will always include data only up to midnight only. This is because Accounting standards generally operate on the basis of calendar days.


### Merchant Sync Configuration
The daily data synchronization required the merchant to have a valid sync configuration (set up using the Sync Configuration UI). 

If required configuration is missing, then a sync error will occur. For example, if a merchant has not provided an Account for the sale of Gift Cards, and subsequently sells a Gift Card, an error will occur (see error handling below). 

In some cases, Sync for Commerce when a missing account is identified in the configuration, Codat will automatically create an account, to allow the data synchronization to go ahead.

### Error handling
If it is not possible to synchronize data for a given day, an error will be shown to the user in the Sync Configuration UI. Errors are rare, but can occur due to:

- An unexpected error in retrieving data from a Commerce platform or pushing data into an Accounting package, or

- An issue with a merchant’s Sync configuration (for example, no account has been configured for a given type of sale that has taken place in the latest calendar day)

When an error occurs, the next daily data synchronisation will include both the latest calendar day, and previous calendar days on which an error occurred. This way, as soon as the root cause is resolved, any missing data will automatically be synchronized. 

:::caution
If a merchant’s data synchronization encounters errors for 31 consecutive days, then their data synchronization will be disabled. 

This is to ensure that, when the issue is eventually resolved, we do not risk synchronizing data that the merchant has manually uploaded/reconciled already (this would result in duplicate data within the merchant’s Accounting package). 

The merchant can re-enable their data synchronization within the Sync Configuration UI (they can also update the sync start date, to the date from which they would like data synchronization to resume). 
:::

--

## Read next

- 