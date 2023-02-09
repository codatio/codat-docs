---
title: "Portal for developers"
description: "Explore Portal's additional features available to developers"
createdAt: "2022-09-05T15:58:36.027Z"
updatedAt: "2022-12-09T13:03:30.599Z"
---

:::note Access to Codat Developers

This page is only available to users with developer and administrator [user roles](/user-roles).
:::

You can access the Codat Developers space by clicking the **Developers** tab in the navigation bar of the <a href="https://app.codat.io" target="_blank">Codat Portal</a>.

In the Developers section, you can:

- Manage upcoming deprecations
- Manage your organization's API keys
- Check the status of our APIs
- Access our endpoints in Swagger
- View our Postman collections

The page also provides handy links to various Codat resources that support our developer community.

<img src="/img/old/be29339-developer_section.PNG" />

## API keys

This section allows you to view and create the authorization headers and API keys for your organization. Codat uses these to control access to the API. Learn more about authentication at Codat [here](https://docs.codat.io/reference/authentication).

You can generate up to ten API keys, which enables you to build multiple solutions to our API concurrently.

## API deprecations

This section lists all upcoming deprecations with self-serve feature buttons. These buttons allow you to manage the deprecations and opt-in to them before their planned implementation dates.

For each upcoming deprecation, we provide a brief description and its implementation date. The date is always listed in your local format.

We also link each deprecation to its respective [Important updates](https://docs.codat.io/changelog) entry, where you can find further details of the change.

<img
  src="/img/old/3851067-deprecation.PNG"
  alt="A detailed deprecation entry screenshot"
/>

Make sure you review the specifics of the deprecation and complete any necessary preparations and testing before enabling it.

Once you are ready, click **Enable** to switch the deprecation on for your organization early. You can use the same button to disable the deprecation and revert to previous behavior if necessary.

For more information on breaking changes and how we communicate these to you, review our [change policy](/change-policy).

:::note Deprecation dates

Note that if your organization's client is newly created, some deprecations will automatically be enabled for you and not available in the self-serve list.

Additionally, deprecations are no longer available to self-serve once their implementation date has passed.
:::
