---
title: "Get platform credentials"
description: "Best practice recommendations for registering with accounting, banking, or commerce software and storing the credentials"
sidebar_label: "Get credentials"
---

## Overview

Your organization usually needs to register with each of your preferred software providers so that production customer data can be shared to and from the software. In some cases, registration is also required to access a developer account for development and testing.

## Prerequisites

1. **Identify existing agreements or relationships with the software you plan to integrate with**

   This could be any Open Banking relationship or an existing direct integration with an accounting software.

   :::tip Locate existing accounts

   Account details for any existing direct integrations are likely to use a generic mailbox email address at your organization.
   :::

2. **Contact the existing relationship owner or system administrator**

   Understand the scope of the existing agreement or relationship and the use of the data received from the software. Check how to access credentials (such as API keys) to enable the corresponding integration in Codat.

3. **Request a vault or storage location to store credentials**

   This requirement is likely to be set by your own data governance team, so the solution needs to be suitable for storing highly confidential data.

   If you need an interim solution, you can store and retrieve credentials securely in the Codat Portal before going live.

## Get the credentials

1. Review the registration or partnership requirements for the platforms you plan to use.

   Codat provides the following summary guidance:
   - [Setting up accounting integrations](/integrations/accounting/overview#setting-up-accounting-integrations)
   - [Setting up commerce integrations](/integrations/commerce/overview#setting-up-commerce-integrations)

2. Engage with your Implementation Specialist for platform-specific guidance on establishing a commercial relationship.

3. Register or create a new account with the platform.

   We recommend using a generic mailbox for this (e.g. `system-admins@yourorganization.com`). Providing multiple users with controlled access reduces the risk of losing access and is a requirement for some platforms, such as QuickBooks.

4. Once registered, retrieve the client ID, secret keys, or an equivalent, from the platform's developer portal.

   Some platforms offer sandbox companies that your organization can use for testing. We offer summary guidance for this in [Testing your Codat solution](/using-the-api/testing).
