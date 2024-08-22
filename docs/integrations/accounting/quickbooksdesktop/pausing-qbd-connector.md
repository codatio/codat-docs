---
title: "Pausing QuickBooks Desktop connector"
description: "Enable your SMB users to pause our QuickBooks Desktop on-premise connector."
sidebar_label: Pause the connector
---

A limitation of QuickBooks Desktop software is that while data is being synced with it via a connector, the QuickBooks Desktop user interface is fairly unsuable. For instance, when a sync is running:

- If QBD is closed, the user will not be able to open a QBD file.
- If QBD is open, the user will not be able to open dropdown menu's and the user experience itself will be jittery.

Our solution is to give the QBD user the ability to pause syncing when they need to access QBD. We therefore highly recommend you implement our [Connections SDK](/auth-flow/optimize/connection-management). In addition to the enhanced user experience it provides for connection management, this embeddable component allows users to pause any existing or future syncs for a set period of time, allowing the user to carry out any essential tasks in QBD.

This pause functionality is only required and available for QBD connections.

<img src="/img/integrations/accounting/quickbooksdesktop/qbd_pause_options.png" />