---
title: "QuickBooks Desktop: new connector released"
date: "2023-11-25"
tags: ["Update", "QBD"]
authors: ajacksoncodat
---

We've released a new version of our QuickBooks Desktop connector. It uses Intuit's native web connector and provides an improved user journey and best-in-class linking experience.

From **December X, 2023**, all new connections to QBD will follow the new flow and use the updated connector.

<!--truncate-->

## What's changed?

With this release, we have:

- Replaced our existing bespoke connector with Intuit's native integration.
- Migrated to our next-generation architecture that provides resilient data acquisition.
- Simplified the SMB's Link journey, reducing its complexity and improving user experience.
- Streamlined the connectivity to hosted QuickBooks environments (Right Networks and QuickBooks Enterprise Cloud).

You can read more about the changes in our [QuickBooks Desktop (on-premise) documentation](https://docs.codat.io/integrations/accounting/quickbooksdesktop/accounting-quickbooksdesktop).

## What does this mean for you?

From **December X, 2023**, all new connections will automatically follow the updated Link flow which utilizes the new connector. 

To enable SMB customers with existing QBD connections to use the new connector, re-share their existing Link URL with them. Following this link will initiate the new flow which will establish the new connector as a result.

<details>
<summary>Locating the Link URL</summary>

You can find your SMB customers' existing Link URL: 

#### In the Portal

1. Navigate to the **Companies** tab and find the entry for the required company. Click the **Connections** button.

    ![](/img/updates/QBD-Company-Connection.png)

2. Click the **Manage** button to reveal and copy the Link URL.

    ![](/img/updates/QBD-Company-Connection-URL.png)

#### Using the API

Use the [List connections](https://docs.codat.io/platform-api#/operations/list-connections) endpoint that will return a list of your customer's connections, including the `linkUrl` value within each connection object.

</details>
