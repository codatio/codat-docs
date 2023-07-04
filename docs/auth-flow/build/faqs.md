---
title: "Auth flow FAQs"
slug: "faqs"
excerpt: "Hints, tips and answers on improving your bespoke auth flow experience"
hidden: false
---

## Best Practices

If an end user has linked before, use the relevant existing company rather than creating a new company (even if they have previously deauthorized).
Unless you are 100% sure you want to delete all history of things having happened in which case delete the company and remove the association.

Where possible you should be using webhooks to be informed of when to fetch data, rather than polling our API for dataset status updates.
This will allow you to fetch fresh data as soon as it is available as well as reduce the amount of calls being made to our API.

We (currently) only support data access permissions, not data usage permissions.
This means that the user can consent to us accessing their data as a whole, not which parts or what is done with it.
If you want to manage how the data is used then they will need to manage the permissioning in their system.

Consent is done via OAuth2 and it means until you revoke permission we will be able to access all of the end users data on an on-going basis.

This data is also stored forever (until revoked) in our central data database. This means that it is always available to be accessed via our API and we don’t need to keep going to the accounting platform to get it (and thus not hitting rate limits).

### What do I do when my customer user doesn't have access to the sign in credentials for their accounting/banking/commerce platform?

Often your customer or user doesn't themselves have the sign in credentials to the platforms you need to access. For example, perhaps their accountant is the only stakeholder in their business that actually goes into their accounting platform.

If you're using our Hosted Link solution, your customer can just forward that stakeholder the hosted Link URL. However, for Embedded Link or a custom built auth flow, your authorization flow is likely only accessible when logged in, which means sharing around password and logins - not ideal!

Just because you're not using Link as your primary auth flow, it doesn't mean you can't benefit from it.

Why not try:

1. Making your auth flow an optional part of onboarding
2. Presenting your customers with a CTA inviting them to auth, but also giving them an alternative like 'Can't sign in to your {accounting/banking/commerce} platform?'
3. If a customer clicks this option, you could:
   1. Give them the Hosted Link URL to share themselves: `<https://link.codat.io/companies/{companyId}`>
   2. Use a `mailto:` link to make it easier. E.g.:

```html
<a href="mailto:https://link.codat.io/companies/{companyId}">Invite someone else</a>
```

You can even prefill the subject line and email body as you see fit.

It's important that the request to authorize comes from your customer rather than you to ensure that the need is communicated and trusted.
