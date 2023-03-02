---
title: "Use OpenID Connect"
slug: "use-openid-connect-1"
description: "Configure your authorization process to use OpenID Connect protocol"
createdAt: "2022-05-19T12:25:45.130Z"
updatedAt: "2022-10-20T13:33:24.587Z"
---

When a customer links their company data, OpenID Connect lets you retrieve [standard information](/auth-flow/customize/use-openid-connect-1#openid-connect-fields) from the user profile of their accounting package, such as the customer's name, email address, and phone number. You might use these details to:

- Pre-fill an application form for the customer.
- Identify accounts linked by the same person.

This article explains how to configure your authorization process to use OpenID Connect.

:::info Support for OpenID Connect

- Codat's linking process can only return available profile details, which vary from platform to platform. Codat currently supports OpenID Connect for QuickBooks Online, Xero, and our testing sandbox. See [_OpenID Connect Supported fields_](/auth-flow/customize/use-openid-connect-1#openid-connect-fields) for the specific fields supported for each platform.
- Codat doesn't use OpenID Connect to either verify the identity of customers, or to authorize data sharing or connections.

:::

## Configure your authorization process

Update your redirect URL and Hosted Link URLs.

1. Add any parameters that you require from the user profile to your [redirect URL]((/auth-flow/customize/set-up-redirects). For example:
   ```http
   https://redirect.com/site/{companyId}?firstName={openId_given_name}&email={openId_email}&phone={openId_phone_number}
   ```
2. Append `?openId=true` to a Link URL before you send it to a customer. For example:
   ```http
   https://link-uat.codat.io/{companyId}/link?openId=true
   ```

   When the customer connects their accounting package any available profile values are substituted in the redirect URL. For example:
   ```http
   https://redirect.com/site /{companyId}?firstName=John&email=john.smith@theworld.com&phone+441234555666
   ```

Codat supports a subset of the available [OpenID Connect fields](https://openid.net/specs/openid-connect-core-1_0.html#StandardClaims), or claims, for selected integrations. Codat prepends each field name with `openId_` to avoid conflict with existing fields.

## OpenID Connect fields

The following table lists OpenID Connect fields and the accounting platforms for which they are supported.

| Field and type                               | Description                                                                     | Platform availability            |
|----------------------------------------------|---------------------------------------------------------------------------------|----------------------------------|
| **openId_name**, _string_                    | Full name of the customer.                                                      | Sandbox                          |
| **openId_given_name**, _string_              | First name of the customer.                                                     | Sandbox, QuickBooks Online, Xero |
| **openId_middle_name**, _string_             | Middle name of the customer.                                                    | Sandbox                          |
| **openId_family_name**, _string_             | Last name of the customer.                                                      | Sandbox, QuickBooks Online, Xero |
| **openId_nickname**, _string_                | Alternative or casual name of the customer.                                     | Sandbox                          |
| **openId_preferred_username**, _string_      | Short name the customer prefers to be known by.                                 | Sandbox                          |
| **openId_gender**, _string_                  | Gender of the customer.                                                         | Sandbox                          |
| **openId_birthdate**, _string_               | Birthday of the customer in the in `YYYY-MM-DD` format.                         | Sandbox                          |
| **openId_address**, _JSON object_            | Postal address the customer prefers to be contacted at.                         | Sandbox, QuickBooks Online       |
| **openId_email**, _string_                   | Email address the customer prefers to be contacted by.                          | Sandbox, QuickBooks Online, Xero |
| **openId_email_verified**, _boolean_         | If `true`, this email address has been verified.                                | Sandbox, QuickBooks Online       |
| **openId_phone_number**, _string_            | Phone number the customer prefers to be contacted on.                           | Sandbox, QuickBooks Online       |
| **openId_phone_number_verified**, _boolean_  | If `true`, this phone number has been verified.                                 | Sandbox, QuickBooks Online       |
| **openId_locale**, _string_                  | Language and country code for the locale of the customer. For example: `en-GB`. | Sandbox                          |
| **openId_profile**, _string_                 | URL of the profile page for the customer.                                       | Sandbox                          |
| **openId_picture**, _string_                 | URL of the profile image for the customer.                                      | Sandbox                          |
| **openId_website**, _string_                 | URL of the web page or blog of the customer.                                    | Sandbox                          |
| **openId_zoneinfo**, _string_                | Time zone for the location of the customer. For example: `Europe/Paris`.        | Sandbox                          |
| **openId_birthdate**, _string_               | Birthday of the customer in `YYYY-MM-DD` format.                                | Sandbox                          |
| **openId_updated_at**, -number_              | Time the customer last updated their profile.                                   | Sandbox                          |
