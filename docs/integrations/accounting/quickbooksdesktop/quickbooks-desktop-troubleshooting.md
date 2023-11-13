---
title: "Troubleshooting"
description: Common issues with QuickBooks Desktop
---

## Accessing logs

The connector logs can assist when diagnosing issues for QuickBooks Desktop. There are two sets that are useful in our investigations.

#### QuickBooks Connector Logs     PENDING REMOVAL

The logs files created by the connector itself are located in:

```C:\Program Files (x86)\<CLIENT NAME>\QuickBooks-connector\logs\connector.log```

It can also be useful to get the link.json file which is located in:

```C:\Program Files (x86)\<CLIENT NAME>\QuickBooks-connector\link.json```

You can also check the log files location by signing in to the Codat Portal, then navigating to Monitor (1) > Health > Offline connectors (2) then selecting searching for and selecting the company. On the System Tab (3) and you will be able to see the connector location in the Computer information (3) section.

#### QuickBooks Logs

There are also logs created by QuickBooks itself which are located in:

```C:\ProgramData\Intuit\QuickBooks\qbsdklog.txt```

## The connector can't be downloaded or run due to corporate policy or antivirus software

Some corporate policies or particularly stringent anti-virus software may block the connector from running. Codat actively submits the connector files with supporting information to common anti-virus packages so that it is not incorrectly marked as a potential threat.

If any of your customers have issues regarding anti-virus blocking please report these to us using your normal Codat support channel. PENDING CHANGE TO CONTACT INTUIT NOT US

## The first link was successful but the company became deauthorized immediately after the datasets completed

You can configure the QuickBooks Desktop connector to run in one of two modes:

- One-time sync
- Ongoing sync

For more information about these modes, see [On-premise connector setup](/integrations/accounting/offline-connectors). If one-time sync is configured, the company will transition to deauthorized status after an initial sync. The user will need to uninstall the web connector.

If you'd like to enable ongoing syncs with the company, update your connector settings, and ask the SMB user to complete the linking process (i.e. downloading and installing the connector) again.

:::note Re-linking and company IDs

> The same Company ID must be used when re-completing the linking process.

:::

## Reinstalling the Application Certificate

In Order for the connector to link to the QuickBooks desktop datafile, the user needs to have accepted a QuickBooks Application Certificate.

Typically this will pop up as a prompt the first time the user downloads the connector and looks like this -

The user must select "Yes, always; allow access even if QuickBooks is not running", as this will allow the Connector to communicate with the QuickBooks file even when the users QuickBooks session is not active.

To get back to the certificate settings within QuickBooks go to:

Edit > Preferences > Integrated Applications > Company Preferences

You will then need to select the application named 'QuickBooks Connector' and click remove.

Once you have removed the certificate, you can then re-run the installation process for the connector - either by running the downloaded file (this might be in the downloads folder and will be named `QuickBooksDesktopConnector.exe`) or alternatively by re-visiting the connector download page. During the installation process you will then receive a prompt asking for permission from the application certificate.
