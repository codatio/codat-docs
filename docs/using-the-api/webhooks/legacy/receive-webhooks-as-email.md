---
title: "Receive webhooks events via email"
description: "Review how to set up email notifications when managing rules"
---

:::caution New webhook service available

This page describes the functionality of our legacy webhook offering. [Learn more](/using-the-api/webhooks/overview) about our new webhook service and see how you can [migrate](/using-the-api/webhooks/migration-guide) to use it instead.

:::

You can choose to specify an email address as a notification method for a rule. Then, if rule conditions are met and an event is triggered, the email address will receive a notification.

The notification is also visible on the <a href="https://app.codat.io/monitor/alerts" target="_blank">Portal's Events page</a>.

You can add email addresses while creating a new rule, or update the email and notification details for an existing rule at any time. Learn more about creating and managing rules [using our Portal](/using-the-api/webhooks/core-rules-create#manage-rules-from-the-codat-portal), and more about [rule types](/using-the-api/webhooks/core-rules-types).

## Set up email notifications using the Portal

1. In the <a href="https://app.codat.io/" target="_blank">Codat Portal</a>, navigate to **Settings > Webhooks > Rules > Create new rule**.
2. In the **Create new rule** modal, specify the following:
   - **Rule type** to determine which event will trigger a notification,
   - **Company** to specify the company you want to monitor, or select **All companies** to make all companies trigger this rule,
   - **Email addresses to notify** with a comma-separated list of email addresses that should receive the notification.
3. Save your changes.

<img
  src="/img/old/e311872-2022-11-16_14-49-03.png"
  alt="New rule creation modal in the Codat Portal"
/>

## Set up email notifications using the API

1. Use Codat's [Create rule](/platform-api#/operations/post-rules) endpoint and complete the following parameters:
   - `companyId` to specify the company you want to monitor or omit this to apply the rule to all companies,
   - `type` of rule that you would like to set up using its [exact naming](/using-the-api/webhooks/core-rules-create#manage-rules-from-the-codat-api),
   - Complete the `emails` notifier with an array of email addresses that will receive notifications.
2. Send the request to create the rule.

```json title="Example rule creation"
{
  "companyId": "4444b724-91b6-4e63-8f8e-9f01888162b",
  "type": "DataConnectionStatusChanged",
  "notifiers": {
    "emails": ["a.user@codat.io, b.user@codat.io"]
  }
}
```
