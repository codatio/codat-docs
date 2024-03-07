---
title: "Get platform credentials"
description: "Best practice recommendations for enterprise clients on how to register with accounting, banking, or commerce platforms and store the credentials"
sidebar_label: "Get credentials"
---

## Overview

Usually, your organization needs to register with each of your preferred platforms to enable production customer data to be shared to and from each integration. In some cases, registration is also required to access a developer account for development and testing.

## Prerequisites

1. **Identify existing agreements or relationships with the platforms your organization wants to integrate with.**

   This could be any Open Banking relationship or an existing direct integration with an accounting platform.

   :::tip Locating existing accounts

   Account details for any existing direct integrations are likely to use a generic mailbox email address at your organisation.
   :::

2. **Contact the existing relationship owner or system administrator.** 

   Understand the scope of the existing agreement or relationship and the use of the data received from the platform. Check how to access credentials (such as API keys) to enable the corresponding integration in Codat.

3. **Request a vault or storage location to store credentials.**

   This requirement is likely to be set by your own data governance team, so the solution needs to be suitable for storing highly confidential data.
   
   If you need an interim solution, you can store credentials securely (and retrieve them) in the Codat Portal before going live.

## Get the credentials

1. Review the [registration or partnership requirements](https://docs.codat.io/integrations/accounting/overview#integration-registration-and-partnerships) for the platforms you plan to use.

2. Engage with your Implementation Specialist for platform-specific guidance on establishing a commercial relationship.

3. Register or create a new account with the platform.

   We recommend using a generic mailbox for this (e.g. `system-admins@yourorganisation.com`). Providing multiple users with controlled access reduces the risk of losing access, and is a requirement for some platforms, such as QuickBooks.
   
4. Once registered, retrieve the client ID, secret keys, or an equivalent, from the platform's developer portal.

   Some platforms offer sandbox companies that your organization can use for testing.
