---
title: "Push data to Sage 50 (UK)"
slug: "pushing-data-to-sage-50"
description: "Learn how to push data with our Sage 50 (UK) connector and view FAQs."
createdAt: "2019-10-25T16:42:27.872Z"
updatedAt: "2022-12-12T15:16:00.561Z"
---

To push data to Sage 50 (UK), Codat strongly recommends that your client creates a second user in Sage for the company file that you are pushing to. See [Setting up Sage 50 and the Sage 50 connector to enable pushing data](/pushing-data-to-sage-50#section-setting-up-sage-50-and-the-sage-50-connector-to-enable-pushing-data) (below) for instructions.

If you don't create a second user, both the Sage 50 application and the Codat API will try to use the same credentials at the same time. Given that Sage 50 is open, no data will be pushed.

:::caution Concurrent logins

Creating a second user that's not used for accessing the Sage 50 application avoids the possibility of data failing to push because the Sage 50 application is open and using the same credentials as the connector.
**Note**: this issue does not affect pulling data.
:::

## Setting up Sage 50 and the Sage 50 connector to enable pushing data

Your client should create a new user in Sage 50 that will be used by Codat's Sage 50 connector. We advise your client to include your company name in the new user's username to highlight the origin of pushed data to the accountant using Sage 50.

To create a new user and username in Sage 50:

1. Select **Settings > User Management > Users**.
2. Click **New** to open the create new user window.
3. Set the user type to **Administrator**.
4. Enter a username and password for the new user.
5. The "Remote Data Access" step isn't necessary for pushing data, so click **Continue** to skip it.
6. Click **Save**
7. Download the Sage 50 connector and enter the license key to set up the connector. These steps and the preceding steps are the same as those outlined in [Install the Sage 50 connector](/installing-the-sage-50-connector).  
   **Note**: In the [Enter their Sage 50 credentials](/installing-the-sage-50-connector#5-enter-their-sage-50-credentials) step, your client should enter the credentials of the specially created user for the Sage 50 connector and NOT the login that they use to open and use the Sage 50 application on a daily basis.

You're now ready to push data to Sage 50.

## Pushing data to Sage 50 with an existing linked company

If a company has an existing Sage 50 connector which has been pulling data from their Sage 50 company file, and pushing data to their company file is now required, they should complete these steps.

### Prerequisites

Ensure that your client has created a new user (as described above) for their Sage 50 company file. This is to be used exclusively for the connector.

1. Open the Sage 50 connector from the tray icon (usually located in the bottom-right toolbar on a computer running Windows). Do this by right-clicking the connector icon and selecting **Open Sage 50 connector**.

   ![](/img/old/ce398a2-Sage_50_Push_data_-_Open_Sage_50_connector.png "Sage 50 Push data - Open Sage 50 connector.png")

2. Click **Manage connection** for the relevant company data file

   ![](/img/old/d84aee4-Sage_50_Push_data_-_Manage_connection.png "Sage 50 Push data - Manage connection.png")

3. Edit the credentials so that the Username and Password saved are those of the user created exclusively for the connector, and not the credentials of any user that logs on to the Sage 50 application on a regular basis.

## FAQs on pushing data to Sage 50

### What does the end user see when data is being pushed and Sage 50 is open?

- If Sage 50 is open during a push operation, then the user may momentarily see a processing dialog. This will remain on the user's screen for a longer period of time if the volume of data being pushed is larger.
- If suppliers are being pushed and the user is logged into Sage 50, then the supplier will not appear in Sage 50 until the page is refreshed.
  :::note Refreshing Sage 50 to see pushed suppliers

  To refresh the page in Sage 50, you can click the filter in the Suppliers view twice as below. If a supplier has been successfully created, the account will appear when the page is refreshed.  
  ![](/img/old/719da3c-supplierFilterRefresh.PNG "supplierFilterRefresh.PNG")

:::

### Sage 50 is closed and the connector is pushing data. When I open Sage, can I log in with the same credentials?

The push operation completes as normal and the user can still log into Sage 50 but subsequent pushes **will not** succeed because the same credentials are being used. Therefore a second user should always be created.

Subsequent pushes will succeed once 1) the Sage 50 application is closed, or 2) new user credentials are entered in the connector, or 3) the user logs into Sage 50 with credentials different to those currently entered into the connector and used to link.

### How are foreign currencies handled?

You may experience unexpected behavior if the Sage 50 application does not have _Foreign Trader_ enabled and data is pushed that includes a currency that does not equal the company's base currency.

For example, if a company's base currency is GBP and a bill is pushed to Sage 50 via the Codat API with a currency of USD, then no payments will be able to be made against this bill (as the company accounts are all in GBP) until _Foreign Trader_ is enabled.
