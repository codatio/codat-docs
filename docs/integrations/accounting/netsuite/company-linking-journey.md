---
title: "Oracle NetSuite Company linking journey"
description: "Learn how your SMB customers can connect their NetSuite accounts to Codat."
sidebar_label: Auth flow specifics
---

When your client links their NetSuite account via Codat for the first time, they must sign in with an [administrator account](https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4570420905.html) and setup their NetSuite instance to allow a connection. Your clients will be guided through this journey during the authorization flow. For reference, the steps they must follow are documented below.

:::warning Prerequisites

If the _Token-based Authentication_ feature has not been enabled your client will receive an error message in NetSuite when trying to request data.

To install bundles on their account, your client must have the Administrator role or the relevant permission to allow bundle installation.

If your clients do not follow these steps correctly the linking process will fail.
:::

## 1. Install the NetSuite bundle

**Production**

- Bundle ID: 391485
- Bundle Name: AppLink

To install this bundle your client must

1. Login to NetSuite
2. Go to _Customization > SuiteBundler > Search & Install Bundles (Administrator)_
3. Enter the bundle name as above
4. Select the bundle
5. Click the 'Install Bundle' button

In the linking process, your client will be directed to a link similar to this for your NetSuite instance [https://6950262.app.netsuite.com/app/bundler/installbundle.nl?whence=](https://6950262.app.netsuite.com/app/bundler/installbundle.nl?whence=) after which they will be guided through steps 3 to 5 above.

:::info Unmanaged bundles

Codat's bundles are referred to as 'unmanaged bundles' in Oracle NetSuite. This means that with any potential bundle updates in the future, you will have to let your clients know that they will have to upgrade their bundles to the new version individually on their accounts.
:::

## 2. Enable SuiteCloud features

Your client must enable the following SuiteCloud features.

- SuiteScript > **Client SuiteScript**
- SuiteScript > **Server SuiteScript**
- SuiteTalk (Web Services) > **Rest Web Services**
- Manage Authentication > **Token-based Authentication**

To enable the features your client must

1. Login to NetSuite
2. Go to _Setup > Company > Enable features > SuiteCloud tab_.
3. Tick the box beside each of the above features
4. Scroll to the bottom of the terms and conditions popup modal and accept
5. Save changes.

During the linking process, your client will be directed to [this link](https://6950262.app.netsuite.com/app/bundler/installbundle.nl?whence=), where they will be guided through steps 3 and 4 above.
