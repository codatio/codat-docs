---
title: "FAQs"
description: "Frequently asked questions about our QuickBooks Desktop on-premise connector."
sidebar_label: FAQs
---

## Do I need to run the QBD connector on the same machine where QuickBooks is installed?

Yes. Any user journey should make it clear that the user must run the connector on the machine they use to access QuickBooks. Functionality to email a link to the connector to a third-party (such as an accountant) can help to reduce these issues.

## Can a user install multiple QBD connectors on the same machine?

Yes. Multiple companies can be synced from the same computer. If a user would like to sync multiple companies, they should complete the link flow once per company, ensuring that they are logged in to the correct QuickBooks company when they confirm that QuickBooks is open and logged in.

## Does the QBD connector require administrator rights?

Yes, the connector requires administrator privileges (admin rights) in order to install. Admin rights are not required to run the connector after installation.

You might need to request permission to install the connector from your IT department, in accordance with your company's internal processes.

## Are there any limits on reading historical data from QBD?

Yes. The QBD connector can read data that is dated from 1 January, 1980 onwards only. Data older than this can't be read using the integration.

## What does the "Waiting for asynchronous response from third party" status mean?

You can view the status of each data sync in the [Codat Portal](https://app.codat.io) by navigating to **Companies > Company > Data history** or by checking the `connectionInfo` property of our [Get connection](https://docs.codat.io/platform-api#/operations/get-connection) endpoint. 

If a data type sync is listed as `Fetching` with the additional `Waiting for asynchronous response from third party` message, this means the Web Connector has not yet responded to Codat's sync request. 

This could be because:
- The Web Connector application is closed.
- The machine that has the Web Connector installed is switched off.

Switch on the machine and open the Web Connector application, and the data will be synced once the Web Connector responds. 

- The Web Connector's Auto-run feature has been disabled.
- A QBD file is open and it is different from the one we are attempting to sync data with.
- The user that created the connection is logged into the QBD file on a different machine to the Web Connector.

<img src="/img/integrations/accounting/quickbooksdesktop/read-history-fetching-waiting-for-async-response.png" />
