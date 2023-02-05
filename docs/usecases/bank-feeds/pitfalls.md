---
title: "Pitfalls"
hidden: true
createdAt: "2022-11-11T16:59:01.531Z"
updatedAt: "2022-11-11T16:59:48.407Z"
---

Errors in the authorization journey are possible at steps 3, 6, and 7.

Diagram of steps with the vulnerable steps highlighted red

## Step 3: Credential generation screen (hosted by Codat).

Errors can occur in sending the user to the credential generation page, and when generating credentials. These errors will not send the user to another part of the journey. The connection status will remain in pendingAuth status.

Symptom: Credentials are not generated, or user is not sent to the credential generation page.

Cause: Intermittent errors at Codat side, relating to credential generation page.

Resolution: User has the option to restart journey from BCA flow. There is no way to interrupt this error, since it occurs within QBO.

## Step 6: User inputs credentials from step 3 into QBO.

Errors will result in the user remaining on the QBO page. QBO will direct the user to retry their credentials.

Symptom: User is unable to complete journey using Codat-generated credentials.

Cause: no bank account to link on the QBO connection; intermittent errors between QBO and Codat

Resolution: User has the option to restart journey from BCA flow. There is no way to interrupt this error, since it occurs within QBO.

## Step 7: User selects which bank account to link, and which account to map to.

Errors will either direct the user to reselect the bank account and account, or retry a new set of credentials.

Symptom: QBO does not complete linking bank feed and chart of accounts.

Cause: Intermittent errors between QBO and Codat.

Resolution: User has the option to restart journey from BCA flow. There is no way to interrupt this error, since it occurs within QBO
