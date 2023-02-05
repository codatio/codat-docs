---
title: "Auth flow FAQs"
slug: "faqs"
excerpt: "Hints, tips and answers on improving your bespoke auth flow experience"
hidden: false
createdAt: "2022-11-22T16:34:56.484Z"
updatedAt: "2022-11-23T15:15:10.291Z"
---

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

```Text html
<a href="mailto:https://link.codat.io/companies/{companyId}">Invite someone else</a>
```

You can even prefill the subject line and email body as you see fit.

It's important that the request to authorize comes from your customer rather than you to ensure that the need is communicated and trusted.
