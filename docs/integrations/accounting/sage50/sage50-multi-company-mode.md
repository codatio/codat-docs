---
title: "Multi-company mode for Sage 50 (UK)"
slug: "sage50-multi-company-mode"
description: "Use our Sage 50 (UK) connector when multi-company mode is enabled."
createdAt: "2019-11-29T13:49:32.659Z"
updatedAt: "2022-12-12T16:43:05.020Z"
---

When multi-company mode is enabled in Sage 50, a single installed Sage 50 connector can sync with multiple Sage 50 company data files.

_Example of the Sage 50 connector with two connected companies:_

<img src="/img/old/4cc7c7e-Sage_50_Multi-company_mode_-_home_screen.png" />

## Setting up multi-company mode

Ensure you have a connector installed and successfully linked with a company on a machine. There are two ways in which an additional company can be added to the same connector:

- When a new Link URL for a newly created company is followed on a machine that has a connector already installed.
- By clicking the **Add new connection** button on the connector screen and following the on-screen steps:

<img src="/img/old/bcb1e5a-Sage_50_Multi-company_mode_-_home_screen_Add_new_connection_button.png" />

The steps are the same for both of these options:

1. Enter the license key
2. Verify company data file
3. Select company data file
4. Enter Sage 50 credentials
5. Verify company data

Rather than a separate connector being installed, the same connector will now handle both company data file connections and syncs.

Right-click on the Sage 50 Connector tray icon (usually found in the bottom-right of the screen) and select **Open Sage 50 Connector**. This will display the connector, which is now in multi-company mode:

<img src="/img/old/f304b80-Sage_50_Multi-company_mode_-_home_screen.png" />

## Syncing in multi-company mode

In multi-company mode you can choose to:

1. Sync a single company
2. Sync all companies from the tray

# 1. Syncing a single company

Click the **Perform Sync** button next to the company you wish to force a manual sync of data with:

<img src="/img/old/9a9a1b5-Sage_50_Multi-company_mode_-_perform_sync_button.png" />

Upon successful sync, the multi-company connector view will show the status of the sync for the company:

<img src="/img/old/d311f65-Sage_50_Multi-company_mode_-_success_sync.png" />

# 2. Sync all companies from the tray

1. Right-click on the Sage 50 Connector tray icon in the bottom-right of the screen.
2. Click **Perform data sync**.
3. Check that all companies begin syncing.

## Cancelling syncs in multi-company mode

When syncing all companies for a connector in multi-company mode, you can't stop (cancel) any companies that are currently syncing. Currently syncing companies are represented by a blue cloud with a white arrow pointing upwards:

<img src="/img/old/c3802a2-Sage_50_Multi-company_mode_-_blue_clouds.png" />

However, you can choose to cancel any companies that are yet to begin syncing but are 'queued' to do so, i.e. pending syncs. _Queued syncs_ are represented by an empty cloud icon in the multi-company connector view.

All companies that were due to sync, but not currently syncing at the time of clearing the queue, will not be manually synced. All companies will then continue to sync based on your [Data type settings](/data-sync-settings).
