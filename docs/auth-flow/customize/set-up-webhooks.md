---
title: "Set up webhooks"
sidebar_label: Webhooks
description: "Manage notifications when a data connection is authorized"
---

We recommend that you set up a notification for when a user authorizes a data connection so that you can action it within your app.

When setting it up, consider your use case and whether it is more useful to set up a webhook for a specific company or a general webhook to notify you when any company’s connection status has changed.

For example, if a company has a designated accounting manager, you might want to:

- Set up a webhook for this specific company
- Notify the account manager

Therefore, the rule would have to specify the company ID, and the account manager’s email address to notify them.

There are two ways to set up a notification:

- Use a [webhook](/using-the-api/webhooks/overview), or
- Use a [redirect parameter](/auth-flow/customize/set-up-redirects#redirect-with-reserved-query-parameters), such as the status code.

---

## read next

- [Use OpenID Connect](/auth-flow/customize/use-openid-connect)
