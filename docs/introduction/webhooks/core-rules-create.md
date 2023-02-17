---
title: "Create or update rules"
description: "Managing new and existing rules via Codat Portal"
createdAt: "2019-02-20T11:20:32.835Z"
updatedAt: "2022-11-16T12:54:20.055Z"
---

:::info Required permissions

You'll need to be an [Administrator](/other/user-management/user-roles#administrator) or [Developer](/other/user-management/user-roles#developer) user to create rules. [Analyst](/other/user-management/user-roles#analyst) users can view alerts but not create or modify rules.

:::

## Create a new rule

1. Sign in to the [Codat Portal](https://app.codat.io).
2. In the navigation bar, select **Monitor**.
3. Select **Alerting rules**.
4. Select **Create new rule**.
   The **Create new rule** modal is displayed.
5. From the **Rule type** dropdown, select the event you would like to be notified of. See [Rule types](/introduction/webhooks/core-rules-types) for more details of the events that trigger an alert and the details included the alert.
6. In the **Company** dropdown, select the company that you would like to monitor, or select **All companies** to make all companies trigger this rule.
7. By default, alerts triggered by rules are shown in the Codat Portal, but you can also choose to send them by email or post them to a webhook. To do this:
    - In the **Email notifiers** box, enter a comma-separated list of email addresses that should receive the alert.
    - In the **Webhook notification URL** box enter the URL that you would like alert details posted to. See [Webhook alerts](/introduction/webhooks/core-rules-webhooks) for more details.

7. Select **Save changes**.

## Update an existing rule

You can update the company you want to monitor, or the notification methods you want to use for a rule at any time.

1. Follow steps 1 and 2 in [Create a new rule](/introduction/webhooks/core-rules-create#create-a-new-rule).
2. On the **Alerting rules** page, find the rule you're interested in and click its **Edit** icon.
3. Update the rule as required.
4. Select **Save changes**.
