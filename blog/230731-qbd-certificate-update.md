---
title: "Upcoming 2023-07-31: QuickBooks Desktop - Certificate Update"
date: "2023-07-05"
tags: ["Action required"]
authors: JustinWilkinson
---

## ⚠️ Action Required - QuickBooks Desktop Connector Certificate Update ⚠️
On Wednesday the 16th of August, 2023, the certificate used to sign Codat's QuickBooks Desktop connector will expire.

To ensure the QBD Connector can continue operating on user machines, Codat will shortly update the certificate used to sign the Installer, Connector, and UI.

This will require manual intervention from end users (your customers) of the Codat QuickBooks Desktop Connector. They will need to re-authorize the application to access the connected QuickBooks Desktop company file before **July 31st, 2023**.

<!--truncate-->

## Background

The connector communicates with QuickBooks as an "Integrated application". When an integrated application attempts to retrieve data from a company file, QuickBooks validates the certificate to ensure that the application has the appropriate level of access granted by a suitably permissioned user. The settings for these can be found by navigating to `Edit > Preferences > Integrated Applications > Company Preferences`  in the QuickBooks Desktop application.

With the rise of malware, desktop applications are typically *signed* with a certificate issued by a suitable authority, which serves to verify the identity of the authors of an application. These certificates have a validity window, and Codat's current certificate validity will expire soon.

When Codat updates the certificate used to sign the connector, existing connectors will no longer be recognized by QuickBooks, causing a prompt for the user to approve the connection to the company file.

## End user action required

There are several possible scenarios to consider, depending on the workflow of the end user of the Connector. All actions must be taken by **July 31st, 2023**.

### New users

There will be no change in the flow for onboarding new companies.

### Existing users

#### 1. The QuickBooks Desktop application is open with the connected company file

If the QBD application is running and the connected company file is open, QuickBooks will request the end user to permit the connector to access the data again the next time that connector attempts to access the file.

The next time the connector attempts to access the file, QuickBooks will open a prompt for the end user to permit the connector to access the data again. This prompt is identical to the one seen on the initial link.
![Image](/img/integrations/accounting/quickbooksdesktop/application-certificate-approval.png "Application Certificate Approval")

Next, the user will have to decide on the type of access they would like to grant the connector.
![Image](/img/integrations/accounting/quickbooksdesktop/authorize-whilst-closed.png "Authorized Whilst Closed")

Finally, they will need to confirm they are happy for the connector to have access to the company file.
![Image](/img/integrations/accounting/quickbooksdesktop/confirm-access.png "Confirm Access")

Once approved, the connector will be able to access the company file as before, and no further action will be required.

#### 2. The QuickBooks Desktop application is open with a different company file

For multi-company setups, it's possible that the connector will try to access a different company file than the one that is currently open in the QuickBooks Desktop application.

The next time the connector attempts to access the file, QuickBooks will request the user to interact to approve access for the company that is currently open.

The end user should validate that the pop-up is referring to the company they are expecting to have connected before approving.
![Image](/img/integrations/accounting/quickbooksdesktop/application-certificate-approval-incorrect-company.png "Application Certificate Approval, Incorrect Company Open")

#### 3. The QuickBooks Desktop application is closed

If the connector attempts to access the company file when the QBD application is closed, it will display an error message saying `Timed out attempting to communicate with QBD.` 

The connector cannot initiate communication with QBD when it is closed, and any previously granted permissions to access QBD while it is not running do not transfer to the new certificate.
![Image](/img/integrations/accounting/quickbooksdesktop/timed-out.png "Timed Out")

The user needs to launch the QBD application, open the correct company file, and [approve the connector's access to it](/updates/230731-qbd-certificate-update#1-the-quickbooks-desktop-application-is-open-with-the-connected-company-file).

The approval prompt may take a few moments to appear, but can be manually triggered by clicking the `Perform Sync` button in the Connector UI.

### Troubleshooting

#### Managing existing connections
The end user may choose to remove the existing application signed with the old certificate before or after approving the new certificate request. They can do so by navigating to `Edit > Preferences > Integrated Applications > Company Preferences` in the QuickBooks Desktop application.
![Image](/img/integrations/accounting/quickbooksdesktop/edit-preferences.png "Edit Preferences")
![Image](/img/integrations/accounting/quickbooksdesktop/integrated-applications-modal-personal-preferences.png "My Preferences")
![Image](/img/integrations/accounting/quickbooksdesktop/integrated-applications-modal-company-preferences.png "Company Preferences")

#### Incorrectly approved access
If the user incorrectly approves access, the connector will fail to perform the queued operation and show a message indicating that the incorrect company file is open.

![Image](/img/integrations/accounting/quickbooksdesktop/incorrect-company-open.png "Connector, Incorrect Company Open")

The user can remove the erroneously approved connection by navigating to `Edit > Preferences > Integrated Applications > Company Preferences`  in the QuickBooks Desktop application, opening the correct company file, and [approving the connector's access to it](/updates/230731-qbd-certificate-update).

#### Denied access
If the user incorrectly denies the connector's company file access request, QuickBooks Desktop will not complete the requested operation until the user opens the correct company and [authorizes the connector's access to it](/updates/230731-qbd-certificate-update#1-the-quickbooks-desktop-application-is-open-with-the-connected-company-file).

The user can also remove the connection by navigating to `Edit > Preferences > Integrated Applications > Company Preferences` in the QuickBooks Desktop application.
