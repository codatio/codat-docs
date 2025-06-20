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

## Why do I see gaps in financial reports?

By default, we read the data types used in financial reports in 3-month batches to reduce the number of requests made to QBD. As a result, the data we use in reports is complete but aggregated into 3-month periods. If you need a month-by-month breakdown of the financial reports, request them from Codat's [Support](mailto:support@codat.io) team.

## What does the "Waiting for asynchronous response from third party" status mean?

When a data type sync is listed as `Fetching` with the additional `Waiting for asynchronous response from third party` message, we try to surface the associated issue in **Companies > Company > Data history** of the [Codat Portal](https://app.codat.io) and in the `connectionInfo` property of our [Get connection](https://docs.codat.io/platform-api#/operations/get-connection) endpoint.

If you don't see any connection errors surfaced with this message, this means the Web Connector has not yet responded to Codat's sync request.

<img src="/img/integrations/accounting/quickbooksdesktop/read-history-fetching-waiting-for-async-response.png" />

We have summarized the possible reasons for the message and available resolutions in the table below.

| **Potential issue**                                                                                                                                 | **Surfaced in connection errors?** | **User action to resolve**                                                  |
| --------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------- | --------------------------------------------------------------------------- |
| The machine that has QBD and the Web Connector installed is switched off                                                                            | No                                 | Turn on the machine                                                         |
| The Web Connector application is closed                                                                                                             | No                                 | Open the Web Connector                                                      |
| The Web Connector's "Auto-run" feature has been disabled                                                                                            | Yes                                | Tick the "Auto-Run" box on the relevant connection row in the Web Connector |
| The open QBD company file is different from the one we are trying to sync data with                                                                 | Yes                                | Close QuickBooks Desktop                                                    |
| The user who created the connection opened the QBD company file on a machine that's different to the machine where they installed the Web Connector | Yes                                | Log out of all other instances of QuickBooks Desktop                        |
