---
title: "Enable access to additional banking data"
description: "Learn how to enable proxy access to additional banking data for the Plaid or TrueLayer integration"
createdAt: "2021-12-03T10:18:01.507Z"
updatedAt: "2022-12-21T06:58:20.372Z"
---

By default, proxy access to additional banking data types from Plaid and TrueLayer is disabled. You can enable proxy access for either the Plaid or TrueLayer integration in the Codat Portal.

Before you begin, make sure you're assigned the Developer or Administrator role. The Plaid or TrueLayer integration must be enabled before you can enable proxy access.

In the Codat Portal:

1. On the navigation bar, select **Settings > Integrations > Banking**.

2. Click **Manage** next to the Plaid or TrueLayer integration.

3. To enable proxy access to Plaid:

   1. Under _Proxy access to additional Plaid data types_, set the toggle to **ON**.  
      The **Filter by products** box is displayed.

   2. (Optional) You can restrict proxy access to only certain Plaid data types. Under **Filter by products**, enter a comma-separated list of the Plaid data types (products) that you want to enable access to. Accepted values: `assets`, `deposit_switch`, `identity`, `income_verification`, `investments`, `liabilities`, `payment_initiation`, and `transfer`. To enable all of these data types, leave the box blank.

   3. Click **Save**.

4. To enable proxy access to TrueLayer:

   1. (Optional) Under _Proxy access to additional TrueLayer data types_, set the toggle to **ON**.  
      The **Additional scopes** box is displayed.

   2. (Optional) Enter a comma-separated list of data types (scopes) to enable in addition to the default data types. Accepted values: `direct_debits` and `standing_orders`. Leave blank to use the defaults.

      **NOTE:** Proxy access to the following data types (scopes) will be enabled by default: `info`, `accounts`, `transactions`, `cards`, `balance`, and `offline_access`. Proxy access is blocked to TrueLayer endpoints that are already mapped to Codat’s data model.

   3. Click **Save**.

Proxy access to the selected banking data types is now enabled, though your customers must still authorize your additional access. To initiate the authorization process, resend the Link URL to your customers. For more information, see [Link](/auth-flow).

:::note Adding or removing data types

You can add or remove additional banking data types by repeating the steps above. Your customers will need to reauthorize your access in Link, so you’ll need to re-send them the Link URL for the integration.

If you add new data types, we recommend you also update the _Data access consent_ message in Link. This message should refer to the added proxy data types, for example, Direct Debits. Customers will see this message when they authorize access to their banking data as part of the Link flow. See [Use Link for SMB authentication](/auth-flow).
:::
