---
title: "FAQ"
description: "Frequently asked questions about our QuickBooks Desktop on-premise connector."
createdAt: "2019-03-01T13:30:54.981Z"
updatedAt: "2022-11-23T10:25:34.354Z"
---

Frequently asked questions about the [QuickBooks Desktop](/integrations/accounting/quickbooksdesktop/accounting-quickbooksdesktop) (QBD) connector.

## Do I need to run the QBD connector on the same machine where QuickBooks is installed?

Yes. Any user journey should make it clear that the user must run the connector on the machine they use to access QuickBooks. Functionality to email a link to the connector to a third-party (such as an accountant) can help to reduce these issues.

## Can a user install multiple QBD connectors on the same machine?

Yes. Multiple companies can be synced from the same computer. If a user would like to sync multiple companies, they should complete the link flow once per company, ensuring that they are logged in to the correct QuickBooks company when they confirm that QuickBooks is open and logged in.

## Does the QBD connector require administrator rights?

Yes, the connector requires administrator privileges (admin rights) in order to install. Admin rights are not required to run the connector after installation.

You might need to request permission to install the connector from your IT department, in accordance with your company's internal processes.

## Are there any limits on pulling historical data from QBD?

Yes. The QBD connector can pull data that is dated from 1 January, 1980 onwards only. Data older than this can't be pulled using the integration.
