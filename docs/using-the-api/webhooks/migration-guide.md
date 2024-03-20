---
title: "Migration guide for basic webhook setup"
sidebar_label: "Migration basics"
description: "Check how you can transition your existing Codat webhooks setup to our new service"
---

## Can I migrate?

Most clients can migrate to our new webhooks service with no development work involved and no impacts to their existing integration.

However, your setup may need to change if any of these scenarios apply to you:

- You subscribe to email notifications, such as [Company sync complete](/using-the-api/webhooks/legacy/core-rules-types#new-company-synchronized) emails.
- Your application calls our webhook logs endpoints, such as `/rules/alerts`.
- Your application's logic uses the `RuleId` parameter.

Read our [advanced migration guide](/using-the-api/webhooks/migration-guide-advanced) to see what additional action you will need to take. 

## How do I migrate?

Reach out to your Codat contact so that we can enable the new webhooks service for you. As part of that, we will migrate your existing webhook rules to the new service. This includes the webhook notification URL, rule type, authorization header, `X-Codat-ClientId` header, and company ID, if used.

Depending on the complexity of your setup, you may need to take additional steps during the migration. We describe these in more detail in our [advanced migration guide](/using-the-api/webhooks/migration-guide-advanced). 

---

## Read next

- [Advanced migration guide](/using-the-api/webhooks/migration-guide-advanced)
- [Event types](/using-the-api/webhooks/event-types)
- [Manage webhook consumers](/using-the-api/webhooks/create-consumer)
