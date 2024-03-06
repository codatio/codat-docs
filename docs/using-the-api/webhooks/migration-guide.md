---
title: "Webhooks migration guide"
sidebar_label: "Migration guide"
description: "Check how you can transition your existing Codat webhooks setup to our new service"
---

## Can I migrate?

Most clients can migrate to the new service without impacting your integration. There are however some exceptions

- You subscribe to email notifications such as [company sync complete](/using-the-api/webhooks/legacy/core-rules-types#new-company-synchronized) emails
- Your application calls the webhook logs endpoints (e.g. `/rules/alerts`)
- Your application logic uses the `RuleId`

If you fall into one or more exceptions, we recommend reading our [advanced migration guide](/using-the-api/webhooks/migration-guide-advanced) to understand how you can migrate. 

## How do I migrate?

Reach out to your Codat contact so that we can enable the new webhooks service for you.
As part of enabling the webhooks, Codat will migrate your existing webhook rules (webhook notification URL, rule type and if defined the company ID) to the new service.

Depending on your setup, there may be additional steps you need to take during the migration. We describe these in more detail in [advanced migration guide](/using-the-api/webhooks/migration-guide-advanced). 

---

## Read next

- [Advance migration guide](/using-the-api/webhooks/migration-guide-advanced)
- [Event types](/using-the-api/webhooks/event-types)
- [Manage webhook consumers](/using-the-api/webhooks/create-consumer)