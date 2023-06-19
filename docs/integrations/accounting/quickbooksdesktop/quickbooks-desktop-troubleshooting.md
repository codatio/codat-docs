---
title: "Troubleshooting"
---

## The connector can't be downloaded or run due to corporate policy or antivirus software

Some corporate policies or particularly stringent anti-virus software may block the connector from running. Codat actively submits the connector files with supporting information to common anti-virus packages so that it is not incorrectly marked as a potential threat.

If any of your customers have issues regarding anti-virus blocking please report these to us using your normal Codat support channel.

## Syncs and pushes are still marked as queued or pending even though the connector is running

The connector's ability to access data is dependent on permissions granted by the User, normally at time of installation.

![](/img/old/f336207-c650d8d-QBD-Auth.png "c650d8d-QBD-Auth.png")

If the user has not given the connector the permission to _always_ modify the company data file (allowing access even if QuickBooks is not running), the connector will be unable to process any queued syncs or pushes, unless the user has QuickBooks open and is logged in to the relevant company file. The connector will periodically check whether the correct file has been opened and will complete the queued/pending items as soon as possible.

## The first link was successful but the company became deauthorized immediately after the datasets completed

You can configure the QuickBooks Desktop connector to run in one of two modes:

- One-time sync
- Ongoing sync

For more information about these modes, see [On-premise connector setup](/integrations/accounting/offline-connectors). If one-time sync is configured, the connector will be uninstalled once the sync has completed, and the company will transition to deauthorized status.

If you'd like to enable ongoing syncs with the company, update your connector settings, and ask the SMB user to complete the linking process (i.e. downloading and installing the connector) again.

:::note Re-linking and company IDs

> The same Company ID must be used when re-completing the linking process.

:::

## The QuickBooks Connector tray icon is red

![Image](/img/integrations/accounting/quickbooksdesktop/unhealthy-qbd-connector-trayicon.png "Unhealthy QuickBooks Connector Icon")

If your QuickBooks Connector tray icon is red, this indicates that the connector application is currently not running. 

To restore the connector's functionality, do the following:

1. Open the Windows Task Manager by pressing `Ctrl+Alt+Del` and selecting **Task Manager**. 
2. Go to the **Details** tab in the Task Manager.
![Image](/img/integrations/accounting/quickbooksdesktop/task-manager-details.png)

3. Find the process named `QuickbooksDesktopUI.exe`, then right-click on this item and click **End Task**.
4. Open the Windows Task Scheduler. You can find this by opening your start menu and entering `Task Scheduler`.
5. Find the two tasks named `QuickbooksDesktop_{YOUR_CLIENT_NAME}` and `QuickbooksDesktopUi_{YOUR_CLIENT_NAME}`. The two processes shown below are from our internal development build; your client name would replace "Codat Engineering - Integration".
![Image](/img/integrations/accounting/quickbooksdesktop/task-scheduler-qbd-tasks.png "Task Manager entries for QuickBooks Connector processes")

6. Right-click and select **Run** on the two tasks in the following order:
    1. `QuickbooksDesktop_{YOUR_CLIENT_NAME}`
    2. `QuickbooksDesktopUi_{YOUR_CLIENT_NAME}`

The tray icon should no longer be red, which indicates a healthy connection. If the tray icon does not reappear or is still red, you can try restarting your machine. 

![Image](/img/integrations/accounting/quickbooksdesktop/healthy-qbd-connector-trayicon.png "Healthy QuickBooks Connector Icon")


If the tray icon remains red after a restart, contact our Support Team.
