---
title: "Troubleshooting"
description: Common issues with QuickBooks Desktop
---

## Accessing logs

The connector logs can assist when diagnosing issues for QuickBooks Desktop. There are two sets that are useful in our investigations.

#### QuickBooks Connector Logs

The logs files created by the connector itself are located in:

```C:\ProgramData\Intuit\QBWebConnector\log\QWCLog.txt```

You can also view the log file by selecting "View Log" button in the web connector.

#### QuickBooks Logs

There are also logs created by QuickBooks itself which are located in:

```C:\ProgramData\Intuit\QuickBooks\qbsdklog.txt```

## Connector can't be downloaded or run

Some corporate policies or particularly stringent anti-virus software may block the connector from running. Codat actively submits the connector files with supporting information to common anti-virus packages so that it is not incorrectly marked as a potential threat.

If any of your customers have issues with anti-virus blocking, please report this to Codat.

## Company deauthorized immediately after datasets synced

You can configure the QuickBooks Desktop connector to run in one of two modes:

- One-time sync
- Ongoing sync

For more information about these modes, see [On-premise connector setup](/integrations/accounting/offline-connectors). If one-time sync is configured, the company will transition to deauthorized status after the initial sync. The user will need to uninstall the web connector.

If you'd like to enable ongoing syncs with the company, update your connector settings and ask the SMB user to complete the linking process (i.e. downloading and installing the connector) again.

:::note Re-linking and company IDs

The same Company ID must be used when re-completing the linking process.

:::

## Reinstalling the Application Certificate

In order for the connector to link to the QuickBooks desktop datafile, the user needs to have accepted a QuickBooks Application Certificate. Typically, this pops up as a prompt the first time the user downloads the connector. Options might vary between QuickBooks versions, but are similar to:

- **No**
- **Yes, always; allow access even if QuickBooks is not running**

The user should select **Yes, always; allow access even if QuickBooks is not running** to enable the connector to work.

<img src="/img/integrations/accounting/quickbooksdesktop/qbd-flow-app-certificate.png" /> 

To return to the certificate settings within QuickBooks, navigate to **Edit > Preferences > Integrated Applications > Company Preferences**. You will then need to select the application named 'QuickBooks Connector' and click **Remove**.

Once you have removed the certificate, you can then re-run the installation process for the connector. You can either run the downloaded file (this might be in the downloads folder and will be named `QuickBooksDesktopConnector.exe`) or revisit the connector download page. During the installation process, you will receive a prompt asking for permission from the application certificate.

## Web connector is not running

Once connector is installed and configured, you can only sync data with QuickBooks Desktop if the web connector is running. We add a start-up task to the user's system during installation to ensure the connector is available to sync when required. It will not be able to run for any of the following reasons:

- The user's machine is turned off.
- The user has closed the web connector (including hitting the "X" in the top right of the web connector window).
- The user has multiple instances of QuickBooks Desktop running, i.e. connected to multiple company files (this functionaility is available in Enterprise edition only).

## QuickBooks Desktop is not opening

If the web connector is syncing, the user will not be able to open QuickBooks Desktop until the sync has finished. If the company file is already open in QuickBooks Desktop and the web connector runs a sync, the QuickBooks Desktop interface may behave unexpectedly, reducing usability during these sync periods.
