---
title: "Use OpenID Connect"
slug: "use-openid-connect-1"
description: "Configure your authorization process to use OpenID Connect protocol"
createdAt: "2022-05-19T12:25:45.130Z"
updatedAt: "2022-10-20T13:33:24.587Z"
---

When a customer links their company data, OpenID Connect lets you retrieve [standard information](https://docs.codat.io/docs/use-openid-connect-1#openid-connect-fields) from the user profile of their accounting package, such as the customer's name, email address, and phone number. You might use these details to:

- Pre-fill an application form for the customer.
- Identify accounts linked by the same person.

This article explains how to configure your authorization process to use OpenID Connect.

:::info Support for OpenID Connect

- Codat's linking process can only return available profile details, which vary from platform to platform. Codat currently supports OpenID Connect for QuickBooks Online, Xero, and our testing sandbox. See [_OpenID Connect Supported fields_](https://docs.codat.io/docs/use-openid-connect-1#openid-connect-fields) for the specific fields supported for each platform.
- Codat doesn't use OpenID Connect to either verify the identity of customers, or to authorize data sharing or connections.
  :::

## Configure your authorization process

Update your redirect URL and Hosted Link URLs.

1. Add any parameters that you require from the user profile to your [redirect URL](https://docs.codat.io/docs/redirect-urls). For example:
   `https://redirect.com/site/{companyId}?firstName={openId_given_name}&email={openId_email}&phone={openId_phone_number}`
2. Append `?openId=true` to a Link URL before you send it to a customer. For example:
   `https://link-uat.codat.io/{companyId}/link?openId=true`
   When the customer connects their accounting package any available profile values are substituted in the redirect URL. For example:
   `https://redirect.com/site /{companyId}?firstName=John&email=john.smith@theworld.com&phone+441234555666`

Codat supports a subset of the available [OpenID Connect fields](https://openid.net/specs/openid-connect-core-1_0.html#StandardClaims), or claims, for selected integrations. Codat prepends each field name with `openId_` to avoid conflict with existing fields.

## OpenID Connect fields

The following table lists OpenID Connect fields and the accounting platforms for which they are supported.
[block:parameters]
{
"data": {
"h-0": "Field and type",
"h-1": "Description",
"h-2": "Platform availability",
"h-3": "Available for",
"h-4": "QuickBooksOnline",
"h-5": "Xero",
"18-0": "**openId_birthdate**
_string_",
"18-2": "Sandbox",
"18-1": "Birthday of the customer in `YYYY-MM-DD` format.",
"1-0": "**openId_given_name**,
_string_",
"1-1": "First name of the customer.",
"5-0": "**openId_preferred_username**,
_string_",
"0-0": "**openId_name**,
_string_",
"0-1": "Full name of the customer.",
"0-2": "Sandbox",
"1-2": "Sandbox,
QuickBooks Online,
Xero",
"3-0": "**openId_family_name**,
_string_",
"3-1": "Last name of the customer.",
"3-2": "Sandbox,
QuickBooks Online,
Xero",
"2-0": "**openId_middle_name**,
_string_",
"2-1": "Middle name of the customer.",
"2-2": "Sandbox",
"4-0": "**openId_nickname**,
_string_",
"4-1": "Alternative or casual name of the customer.",
"4-2": "Sandbox",
"5-1": "Short name the customer prefers to be known by.",
"5-2": "Sandbox",
"8-0": "**openId_address**,
_JSON object_",
"8-1": "Postal address the customer prefers to be contacted at.",
"8-2": "Sandbox,
QuickBooks Online",
"6-0": "**openId_gender**,
_string_",
"6-1": "Gender of the customer.",
"6-2": "Sandbox",
"7-0": "**openId_birthdate**,
_string_",
"7-1": "Birthday of the customer in the in `YYYY-MM-DD` format.",
"7-2": "Sandbox",
"13-0": "**openId_locale**,
_string_",
"13-1": "Language and country code for the locale of the customer.
For example: `en-GB`.",
"13-2": "Sandbox",
"14-0": "**openId_profile**,
_string_",
"9-0": "**openId_email**,
_string_",
"9-1": "Email address the customer prefers to be contacted by.",
"9-2": "Sandbox,
QuickBooks Online,
Xero",
"10-0": "**openId_email_verified**,
_boolean_",
"10-1": "If `true`, this email address has been verified.",
"10-2": "Sandbox,
QuickBooks Online",
"11-0": "**openId_phone_number**, _string_",
"11-1": "Phone number the customer prefers to be contacted on.",
"11-2": "Sandbox,
QuickBooks Online",
"12-0": "**openId_phone_number_verified**,
_boolean_",
"12-1": "If `true`, this phone number has been verified.",
"12-2": "Sandbox,
QuickBooks Online",
"14-1": "URL of the profile page for the customer.",
"14-2": "Sandbox",
"15-0": "**openId_picture**,
_string_",
"15-1": "URL of the profile image for the customer.",
"15-2": "Sandbox",
"16-0": "**openId_website**
_string_",
"16-1": "URL of the web page or blog of the customer.",
"16-2": "Sandbox",
"17-0": "**openId_zoneinfo**
_string_",
"17-1": "Time zone for the location
of the customer. For example: `Europe/Paris`.",
"17-2": "Sandbox",
"0-3": "QuickBooks Online
Xero
Sandbox",
"19-0": "**openId_updated_at**
_number_",
"1-3": "Sandbox",
"2-3": "Sandbox",
"3-3": "Sandbox",
"4-3": "Sandbox",
"5-3": "Sandbox",
"6-3": "Sandbox",
"7-3": "Sandbox",
"8-3": "Sandbox",
"9-3": "Sandbox",
"10-3": "Sandbox",
"11-3": "Sandbox",
"12-3": "Sandbox",
"13-3": "Sandbox",
"14-3": "Sandbox",
"15-3": "Sandbox",
"16-3": "Sandbox",
"17-3": "Sandbox",
"18-3": "Sandbox",
"19-3": "Sandbox",
"19-1": "Time the customer last updated their profile.",
"19-2": "Sandbox"
},
"cols": 3,
"rows": 20
}
[/block]
