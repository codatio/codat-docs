---
title: "Receive webhooks as email alerts"
description: "Review how to set up email notifications when managing rules"
createdAt: "2022-11-16T11:55:04.460Z"
updatedAt: "2022-11-23T13:55:59.785Z"
---

You can choose to specify an email address as a notification method for a rule. Then, if rule conditions are met and an alert is triggered, the email address will receive a notification.

The alert is also visible on the <a href="https://app.codat.io/monitor/alerts" target="_blank">Portal's raised alerts page</a>.

You can add email addresses while creating a new rule, or update the email and notification details for an existing rule at any time. Learn more about creating and managing rules using our Portal [here](/core-rules-create#manage-rules-from-the-codat-portal), using our API [here](/core-rules-create#manage-rules-from-the-codat-api), and more about rule types [here](/core-rules-types).

## Set up email alerts using the Portal

1. In the [Codat Portal](https://app.codat.io), navigate to **Monitor > Alerting rules > Create new rule**.
2. In the **Create new rule** modal, specify the following:
   - **Rule type** to determine which event will trigger a notification,
   - **Company** to specify the company you want to monitor, or select **All companies** to make all companies trigger this rule,
   - **Email addresses to notify** with a comma-separated list of email addresses that should receive the alert.
3. Save your changes.

<img
  src="https://files.readme.io/e311872-2022-11-16_14-49-03.png"
  alt="New rule creation modal in the Codat Portal"
/>

## Set up email alerts using the API

1. Use Codat's [Create rule](https://docs.codat.io/reference/createrule) endpoint and complete the following parameters:
   - `companyId` to specify the company you want to monitor or omit this to apply the rule to all companies,
   - `type` of rule that you would like to set up using its [exact naming](/core-rules-create#manage-rules-from-the-codat-api),
   - Complete the `emails` notifier with an array of email addresses that will receive notifications.
2. Send the request to create the rule.

```json Example rule creation
{
  "companyId": "4444b724-91b6-4e63-8f8e-9f01888162b",
  "type": "DataConnectionStatusChanged",
  "notifiers": {
    "emails": ["a.user@codat.io, b.user@codat.io"]
  }
}
```
