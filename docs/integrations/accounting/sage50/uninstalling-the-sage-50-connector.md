---
title: "Uninstall the Sage 50 Accounts Connector"
slug: "uninstalling-the-sage-50-connector"
sidebar_label: Uninstall the connector
---

If a user wants to stop synchronizing their data with Sage 50, they can uninstall the Sage 50 Accounts Connector from their computer.

## Uninstall the Sage 50 Accounts Connector from the System Tray icon

To uninstall the Sage 50 Accounts Connector, the user can right-click the connector's system tray icon, then select **Uninstall Sage 50 Accounts Connector**.

![Text](/img/old/a829482-RightClickMenu.png "Uninstall Sage 50 Accounts Connector selected in the right-click menu for system tray.")

:::note

If you've configured your company's icon in the Codat portal, you'll see that icon in the system tray and not the Codat icon.
:::

Next, the user is asked to confirm that they want to uninstall the Sage 50 Accounts Connector. If they click **Uninstall**, the connector will be uninstalled and the Codat company they were syncing to will become _Deauthorized_.

![Text](/img/old/58b407a-uninstall_button.png "Uninstall Sage 50 Accounts Connector dialog.")

## Uninstallation if the connector is closed before the first link

The Sage 50 Accounts Connector will be uninstalled if the user closes the connector before they've completed all the link flow steps (see [Set up the Sage 50 Accounts Connector](/integrations/accounting/sage50/installing-the-sage-50-connector).

When the close icon is clicked, the connector is uninstalled, and the Codat company that was going to be linked will become _PendingAuth_.

![Text](/img/old/624728d-uninstall_connector_-_X_button_on_link_flow.jpg "Add company wizard with the close icon highlighted.")
