---
title: "Connection management"
description: "Review our guidance on the best practice of providing your clients with control over their existing connections"
hide_table_of_contents: true
---

Your customer's journey with us starts when they authorize your access to their data using our auth flow. We then complete the connection to their accounting, banking, or commerce platform. 

Going forward, your customer should have control over the data they've given you the permission to access. This is key from a regulatory perspective and builds trust between you and your customer. 

To achieve that, provide them with a user interface that lets them manage their ongoing data connections. It could look similar to this:

![An image of three in-app screenshots of a mock connection management UI. The first picture displays a list of three existing connections to Xero, HSBC and Shopify. The second image shows the entry for the Xero connection with details of authorized data and dates the authorization was given. It also lists the option to disconnect the connection. The final image displays a prompt to confirm the decision to disconnect.](/img/auth-flow/auth-flow-connection-ui-examples.png)

:::tip Codat's connection management component

Codat is releasing a low-code embeddable UI component for connection management. Please let us know [here](https://forms.gle/d1zuh2iHBLJCNCsj9) if you are interested in using it.

:::

When working on the user interface, consider including the following functionality to enhance your customer's connection management experience. 

#### Display active connections

Include a general connection management view in your application and show your customer some or all of these connection details: 

- Name of the connected platform
- First sync time and date
- Most recent sync time and date
- Data sync history
- Linked data, where possible
- Metadata that helps identify connections, e.g. currency of a connected bank account

You can add a detailed view for each connection to cover the details that you do not want displayed on the connection list overview.

#### Unlink or delete connections

Make it easy for your customer to revoke access to their data and delete a connection via your app's UI. When they trigger this request, use our endpoints to action this depending on the requirement:

- [Unlink connection](/platform-api#/operations/unlink-connection) if your customer wants to deauthorize a connection, but still access previously synced data. 
- [Delete connection](/platform-api#/operations/delete-connection) if your customer wants to revoke access and remove the connection completely. 

#### Trigger data refresh

Optionally, allow your customer to manually initiate a data sync if this is suitable for your use case. Use the [Refresh all data](/platform-api#/operations/refresh-company-data) or [Refresh data type](/platform-api#/operations/refresh-data-type) endpoints to perform the refresh.

#### Show active syncs

Optionally, you can add an indicator to signal that the data is in process of syncing, e.g. a loading spinner animation.

---

## Read next

- [Optimize your auth flow](/auth-flow/optimize/optimize-the-connection-journey)