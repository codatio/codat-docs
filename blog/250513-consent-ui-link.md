---
title: "Link v1.10.0 update"
date: "2025-05-13"
tags: ["Product", "Update"]
hide_table_of_contents: false
authors: mcclowes
---

import Diff from "@components/Diff";

Transparency around exactly what a user is sharing access to, for what purpose, is an essential part of your authorization flow. We've revamped how we present this information in Link and given you more controls to present this clearly to your users.

<!--truncate-->

## What's changed?

![Full view](/img/updates/consent/consent.png)

We've expanded the [Link](/auth-flow/overview) consent view with new optional fields:

| Field                   | What is it for?                                                       | Example                                                                                           |
| :---------------------- | :-------------------------------------------------------------------- | :------------------------------------------------------------------------------------------------ |
| **Purpose**             | Why they are sharing access to their data and how it will be used.    | Your data will be used to provide you your analysis on your spending.                             |
| **Access**              | The nature and duration of the access.                                | Your data will be retrieved monthly for the duration of this service.                             |
| **Account information** | The account metadata that will be retrieved.                          | Company name                                                                                      |
| **Platform data**       | The financial data that will be retrieved.                            | Invoices, Suppliers                                                                               |
| **Retention**           | How and for how long the data will be handled.                        | You control access to your data, and can disconnect access at any time via your account settings. |
| **Communication**       | Details of any communication will be set around the Codat connection. | You will be notified by email whenever access expires.                                            |

![Open view](/img/updates/consent/consent-open.png)

This rich context is now presented in expandable views, as above, to ensure this breadth of information is presented clearly.

We've also given more control over the page title, subtitle, and terms and conditions areas.

**Note:** The 'Accept' button appears as 'Next' by default, but can be configured to match the nature of your terms - e.g. Next, Consent, or Continue.

### @codat/sdk-link-types package changelog notes

```
## v1.10.0 - 2025-05-09

- Add new `consents` fields - `title`, `subtitle`, `termsAndConditions`, `purpose`, `access`, `accountInformation`, `retention`, `nextButton`.
- Add new `additionalConsents` fields - `title`, `subtitle`, `termsAndConditions`, `nextButton`.
- Add `dataTypes` field to `CodatSourceTypesOptions`.
- Deprecate old fields `${IntegrationSourceTypeKeys}.dataAccess.consent`, `${IntegrationSourceTypeKeys}.dataAccess.additionalConsent.title`, `${IntegrationSourceTypeKeys}.dataAccess.additionalConsent.subtitle`, `${IntegrationSourceTypeKeys}.dataAccess.dataTypes`.
```

[Visit NPM](https://www.npmjs.com/package/@codat/sdk-link-types)

## Updating to v1.10.0

The following `options` `text` fields have been replaced and will require code changes in order to bump the package. A deprecation will be announced accordingly.

| Deprecated field                                                     | New field                                                  |
| :------------------------------------------------------------------- | :--------------------------------------------------------- |
| `${IntegrationSourceTypeKeys}.dataAccess.consent`                    | `${IntegrationSourceTypeKeys}.consents.termsAndConditions` |
| `${IntegrationSourceTypeKeys}.dataAccess.additionalConsent.title`    | `${IntegrationSourceTypeKeys}.additionalConsents.title`    |
| `${IntegrationSourceTypeKeys}.dataAccess.additionalConsent.subtitle` | `${IntegrationSourceTypeKeys}.additionalConsents.subtitle` |
| `${IntegrationSourceTypeKeys}.dataAccess.dataTypes`                  | `${IntegrationSourceTypeKeys}.dataTypes`                   |

You can see a before and after examples of the config changes below:

<Diff
  showDiffOnly={false}
  oldCode={`
{
  accounting.dataAccess.consent.title,
  accounting.dataAccess.additionalConsent.title,
  accounting.dataAccess.additionalConsent.subtitle,
  accounting.dataAccess.dataTypes,
  banking.dataAccess.consent.title,
  banking.dataAccess.additionalConsent.title,
  banking.dataAccess.additionalConsent.subtitle,
  banking.dataAccess.dataTypes,
  commerce.dataAccess.consent.title,
  commerce.dataAccess.additionalConsent.title,
  commerce.dataAccess.additionalConsent.subtitle,
  commerce.dataAccess.dataTypes,
}
  `}
  newCode={`
{
  accounting.consents.termsAndConditions,
  accounting.additionalConsents.title,
  accounting.additionalConsents.subtitle,
  accounting.dataTypes,
  banking.consents.termsAndConditions,
  banking.additionalConsents.title,
  banking.additionalConsents.subtitle,
  banking.dataTypes,
  commerce.consents.termsAndConditions,
  commerce.additionalConsents.title,
  commerce.additionalConsents.subtitle,
  commerce.dataTypes,
}
  `}
  compareMethod="diffWords"
/>

Once you have made the relevant changes above, you can update your local version below:

`npm install @codat/sdk-link-types@1.10.0`

## What happens if I do nothing?

![Default view](/img/updates/consent/full-migration.png)

These user interface changes will automatically be reflected in your user interface. These new fields are optional, and will not appear if not set. Until you begin leveraging the new fields, the UI will have changed from the left hand image to the right hand image.
