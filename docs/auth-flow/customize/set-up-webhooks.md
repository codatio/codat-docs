---
title: "Set up alerts"
description: "Manage notifications when a data connection is authorized"
createdAt: "2022-05-18T12:38:38.724Z"
updatedAt: "2022-10-20T13:27:07.142Z"
---

We recommend that you set up an alert for when a user authorizes a data connection so that you can action it within your app.

When setting up the alert consider your use case and whether it is more useful to set up an alert for a specific company or a general alert to alert when any company’s connection status has changed.

For example, if a company has a designated accounting manager, you might want to:

- Set up an alert for this specific company,
- Alert the account manager.

Therefore, the alert rule would have to specify the company ID, and the account manager’s e-mail address to notify them.

There are two ways to set up an alert:

- Use a [webhook](/introduction/webhooks/core-rules-create), or
- Use a [redirect parameter](/auth-flow/customize/set-up-redirects#redirect-with-reserved-query-parameters), such as the status code.
