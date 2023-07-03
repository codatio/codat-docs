---
title: "QuickBooks Desktop - Certificate Update"
description: "Action Required - Certificate Update"
sidebar_label: "Action Required - Certificate Update"
---

# ⚠️ Action Required - QuickBooks Desktop Connector Certificate Update ⚠️
 The certificate used to sign Codat's QuickBooks Desktop connector will be expiring on Wednesday the 16th of August, 2023.

To ensure the QuickBooks Desktop Connector can continue to operate successfully on user machines, Codat will shortly be updating the certificate used to sign the Installer, Connector and UI.

This will, unfortunately, require manual intervention from end users of the Codat QuickBooks Desktop Connector to re-authorize the application to access the connected QuickBooks Desktop company file.

## Background

With the rise of malware, desktop applications are typically *signed* with a certificate issued by a suitable authority, which serves to verify the identity of the authors of an application. These certificates have a validity window, and Codat's certificate's validity will be expiring soon.

When an integrated application attempts to retrieve data from a company file, QuickBooks validates the certificate to ensure that the application has been granted the appropriate level of access by a suitably permissioned user.

As Codat is being issued with a new certificate, QuickBooks will no longer recognize the Connector, and will prompt the user to approve the connection to the company file.

The settings can be found under the `Edit > Preferences > Integrated Applications > Company Preferences` modal.
![Image](/img/integrations/accounting/quickbooksdesktop/edit-preferences.png "Edit Preferences")
![Image](/img/integrations/accounting/quickbooksdesktop/integrated-applications-modal-personal-preferences.png "My Preferences")
![Image](/img/integrations/accounting/quickbooksdesktop/integrated-applications-modal-company-preferences.png "Company Preferences")

## What does this look like for an end user?

There are several possible scenarios to consider, depending on the workflow of the end user of the Connector.

### 1. New users

There will be no change in the flow for onboarding new companies.

### 2. The QuickBooks Desktop application is open with the connected company file

The simplest path is when the QuickBooks Desktop application is running and the company file the connector is attempting to access is open.

The next time the connector attempts to access the file, QuickBooks will open a prompt for the end user to permit the connector to access the data again. This prompt is identical to the one seen on initial link.
![Image](/img/integrations/accounting/quickbooksdesktop/application-certificate-approval.png "Application Certificate Approval")

The user will then have to decide on what type of access they would like to grant the connector.
![Image](/img/integrations/accounting/quickbooksdesktop/authorize-whilst-closed.png "Authorized Whilst Closed")

Having made this selection, they will need to confirm they are happy for the connector to have access.
![Image](/img/integrations/accounting/quickbooksdesktop/confirm-access.png "Confirm Access")

Once approved the connector can then access the company file as before and no further action is required.

### 3. The QuickBooks Desktop application is open with a different company file

Another probable path for multi-company set ups is when the QuickBooks Desktop application is open, but the connector is trying to access a different company file to the one that is currently open.

The next time the connector attempts to access the file, QuickBooks will open a prompt for the user to interact with to approve access for the company for the currently open company.

At this stage it would be best if the end user validated that the pop-up was referring to the company that they are expecting to have connected.
![Image](/img/integrations/accounting/quickbooksdesktop/application-certificate-approval-incorrect-company.png "Application Certificate Approval, Incorrect Company Open")

#### 3.1 Incorrectly approving access

If the user incorrectly approves access, the connector will identify this and fail to perform the queued operation and instead show a message indicating that the incorrect company file is open.
![Image](/img/integrations/accounting/quickbooksdesktop/incorrect-company-open.png "Connector, Incorrect Company Open")

The user can then remove the erroneously approved connection via the `Edit > Preferences > Integrated Applications > Company Preferences` modal, open the correct company file and proceed as seen in flow 2.

#### 3.2 Denying access

If the user incorrectly denies access to the company, QuickBooks Desktop will not be permitted access to the company and the requested operation will not succeed until the correct company is opened, and the steps seen in flow 2 are completed.

If the user wishes, they can clean up the connection via the `Edit > Preferences > Integrated Applications > Company Preferences` modal.

### 4. The QuickBooks Desktop application is closed

The next time the connector attempts to access the file, QuickBooks will open a prompt for the user to interact with.

The UI will display an error message saying `Timed out attempting to communicate with QBD.` This is because the connector cannot initiate communication with QBD as QBD is not open, and even if the user had previously granted permission to access QBD whilst QBD was not running, this permissioning does not transfer to the new certificate.
![Image](/img/integrations/accounting/quickbooksdesktop/timed-out.png "Timed Out")

The user will have to launch QuickBooks Desktop, open the correct company file and approve access, at which point they will be prompted to approve access and can proceed with the steps as seen in flow 2.

Note: This prompt may take a few moments to appear, but can be prompted by clicking the `Perform Sync` button in the Connector UI.