---
title: "Codat concepts"
description: "Understand key terms and definitions used in Codat's solutions"
createdAt: "2022-02-01T11:09:33.317Z"
updatedAt: "2022-11-08T10:04:05.340Z"
---

Throughout this documentation, you will come across a number of core concepts and terms used throughout our Products:
[block:parameters]
{
"data": {
"h-0": "Concept",
"h-1": "Description",
"h-2": "Next Steps",
"0-0": "Companies",
"0-1": "A company represents an SMB user who has granted you access to view a subset of their accounting, commerce, or banking data&mdash;referred to as their consented data. \n\nEach company has one or more data connections that connect the company to a Codat integration for accounting, commerce or banking.",
"0-2": "[Read more about Companies](https://docs.codat.io/docs/core-companies)\n\n[Follow our guide to creating your first Company](https://docs.codat.io/docs/core-companies#how-do-i-create-a-company)",
"1-0": "Connections",
"1-1": "A data connection represents the connection between a company and one of their sources of business data, such as an accounting platform or payments system. \n\nEach data connection is unique to a specified Codat integration. \n\nData connections have a current state; a `linkUrl` to allow SMB customers to authorize or reauthorize the data connection; and other metadata, such as the last refresh date.\n\nWhen creating them, integration-specific connection information, such as access tokens to allow for migrations into Codat can be provided.",
"1-2": "[Read more about Data Connections](https://docs.codat.io/docs/core-dataconnections)\n\n[Follow our guide to creating your first Company](https://docs.codat.io/docs/core-companies#how-do-i-create-a-company)",
"2-0": "Integrations",
"2-1": "An integration is a connection to an external source of business data in an accounting, commerce or banking app or platform that's used by an SMB.\n\nFor example, the Xero, Shopify, and Plaid integrations provide connections to those respective platforms.\n\nIntegrations are designed, built and maintained by Codat, and updated periodically to accommodate changes to the source data and provider APIs.\n\nIntegrations have a `sourceType` that describes the type of data they provide: either Accounting, Commerce (sales data), or Banking.",
"2-2": "[Read more about Integrations](https://docs.codat.io/docs/core-integrations)\n\n[Configure your Accounting Integrations](https://docs.codat.io/docs/accounting-overview) \n\n[Configure your Banking Integrations](https://docs.codat.io/docs/banking-overview) \n\n[Configure your Accounting Integrations](https://docs.codat.io/docs/commerce-overview)",
"3-0": "Sync Settings",
"4-0": "Alerts",
"4-1": "Codat allows you to receive notifications by webhook or email for a number of events, such as when a `Company` has refreshed their data or a `Data Connection` has become deauthorized so you can take the appropriate action.",
"4-2": "[Setup and Configure your Alerts](https://docs.codat.io/docs/core-rules)",
"3-1": "Codat allows you to configure the types of data and frequency you update the data from `data connections`",
"3-2": "[Configuring your Sync Settings](https://docs.codat.io/docs/data-sync-settings)",
"5-0": "Users",
"5-1": "Codat allows you to add users to your instance, with different roles and permissions; and also to manage Single Sign On with Google or Microsoft.",
"5-2": "[Read more about administrating users on your Codat instance](https://docs.codat.io/docs/user-administration)",
"6-0": "Data Status",
"6-1": "When looking at the status of a refresh of data in the Codat Portal, you may see datasets in various states, such as `Completed`, `Queued` or `AuthError`.",
"6-2": "[Read more about the possible statuses and what they mean](https://docs.codat.io/docs/data-status)"
},
"cols": 3,
"rows": 7
}
[/block]
