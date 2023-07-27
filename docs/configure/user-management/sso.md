---
title: "SSO"
description: "Learn how to enable single sign-on in the Codat Portal"
createdAt: "2021-12-14T14:49:16.827Z"
updatedAt: "2022-12-19T06:15:27.799Z"
---

:::note SAML SSO

We'll soon be offering SAML SSO on our Enterprise plans. If you're interested in this feature, please talk to your account manager.

:::

## Overview

Third-party SSO allows users to access multiple applications using a set of credentials from a third-party identity provider (IdP), such as Microsoft or Google.

As part of our commitment to high levels of data security, we support third-party SSO to offer your users the ability to access the Codat Portal using their Microsoft or Google account credentials.

If the relevant settings are enabled, the **Sign in with Google** and **Sign in with Microsoft** options are available on the Codat Portal sign-in page:

![](/img/other-guides/portal_sign-in-to-codat.png "test")

As long as the email addresses are the same, attempting to sign in with a Google or Microsoft account will automatically link the account to the existing Codat account. Users must first have been invited to use Codat with the same email address that they use to access the third-party account (Google or Microsoft).

## Benefits of third-party SSO

Apart from the immediate benefits of saving time on every sign-in and having one less password to remember, third-party SSO introduces:

- Increased security. As IdPs, Microsoft and Google provide additional security features, including Multi-Factor Authentication.
- Simplified administration. Administrators can maintain strong and consistent security policies, and manage and close user accounts with ease.

:::note Enterprise SSO support
 
The Codat Portal does not currently support Enterprise SSO using SAML.

:::

## Manage third-party SSO

Both Google and Microsoft sign-in methods are enabled by default in the Codat Portal. We recommend keeping them enabled to make the most of the benefits they provide. As an Administrator, you can choose to disable Codat password-based sign-in completely, and force all their users to sign in with their Google or Microsoft account.

To manage third-party SSO services, perform the following steps in the Codat Portal:

1. Go to **Settings > Organization settings > Users**.
2. Click **Manage sign-in** (only available for Administrators).
3. In the **Manage sign-in** dialog, use the toggles to switch the services on and off.

:::note Custom login message

You can also maintain a custom login message, which will be displayed every time a user logs in. The message applies to all sign-in methods.

:::

![](/img/other-guides/portal_manage-sign-in-inc-custom-login-message.png "test")

:::note Disabling SSO

If you decide to disable third-party SSO, your users will still be able to sign in with their email and password credentials, if the **Password** sign-in method is enabled.

:::
