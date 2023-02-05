---
title: "Third-party SSO"
description: "Learn how to enable single sign-on in the Codat Portal"
createdAt: "2021-12-14T14:49:16.827Z"
updatedAt: "2022-12-19T06:15:27.799Z"
---

## Overview

Single sign-on (SSO) is a secure user authentication technology that allows users to access multiple applications with only one set of credentials.

Third-party SSO allows users to access multiple applications using a set of credentials from a third-party identity provider (IdP).

As part of our commitment to high levels of data security, we support third-party SSO to offer your users the ability to access our products using their Microsoft or Google accounts. This feature is available on the Portal sign-in page.

<img
  src="https://files.readme.io/5840031-Screenshot_2021-12-14_143545.png"
  alt="Sign-in modal with Microsoft and Google SSO options highlighted"
/>

Apart from the immediate benefits of saving time on every sign in and having one less password to remember, third-party SSO introduces:

- Increased security. Microsoft and Google SSO provides additional security features, including Multi-Factor Authentication.
- Simplified administration. Administrators can maintain strong and consistent security policies, and manage and close user accounts with ease.

## Managing third-party SSO

Both Google and Microsoft sign-in services are enabled by default in the Codat Portal. We recommend keeping them enabled to make the most of the benefits they provide. Administrators can also turn off password-based sign-in completely and force all their users to sign in with their Google or Microsoft account.

As long as the email addresses are the same, attempting to sign in with a Google or Microsoft account will automatically link it to the existing Codat account.

To manage the third-party SSO services, perform the following steps in Codat Portal:

1. In the navigation bar, click _Settings > Organization settings > Users_.
2. Click _Manage sign-in_.
3. In the _Manage sign-in methods_ dialog, use the toggles to switch the services on and off.

<img
  src="https://files.readme.io/87dca5c-manage.png"
  alt="Screenshot of the Manage sign-in methods dialog in the Codat Portal"
/>

:::note

If you decide to disable third-party SSO, your users will still be able to sign in with their email and password credentials.
:::
