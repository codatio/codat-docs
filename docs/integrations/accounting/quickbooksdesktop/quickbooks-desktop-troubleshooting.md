---
title: "Troubleshooting"
createdAt: "2019-03-01T13:40:49.580Z"
updatedAt: "2022-11-22T16:35:43.216Z"
---

## The connector can't be downloaded or run due to corporate policy or antivirus software

Some corporate policies or particularly stringent anti-virus software may block the connector from running. Codat actively submits the connector files with supporting information to common anti-virus packages so that it is not incorrectly marked as a potential threat.

If any of your customers have issues regarding anti-virus blocking please report these to us using your normal Codat support channel.

## Syncs and pushes are still marked as queued or pending even though the connector is running

The connector's ability to access data is dependent on permissions granted by the User, normally at time of installation.

![](/img/old/f336207-c650d8d-QBD-Auth.png "c650d8d-QBD-Auth.png")

If the user has not given the connector the permission to _always_ modify the company data file (allowing access even if QuickBooks is not running), the connector will be unable to process any queued syncs or pushes, unless the user has QuickBooks open and is logged in to the relevant company file. The connector will periodically check whether the correct file has been opened and will complete the queued/pending items as soon as possible.

## The first link was successful but the company became deauthorised immediately after the datasets completed

You can configure the QuickBooks Desktop connector to run in one of two modes:

- One-time sync
- Ongoing sync

For more information about these modes, see [On-premise connector setup](/integrations/accounting/offline-connectors). If one-time sync is configured, the connector will be uninstalled once the sync has completed, and the company will transition to deauthorized status.

If you'd like to enable ongoing syncs with the company, update your connector settings, and ask the SMB user to complete the linking process (i.e. downloading and installing the connector) again.

:::note Re-linking and Company IDs

> The same Company ID must be used when re-completing the linking process.
