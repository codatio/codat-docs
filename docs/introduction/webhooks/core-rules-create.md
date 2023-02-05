---
title: "Create or update rules"
description: "Managing new and existing rules via Codat Portal and API"
createdAt: "2019-02-20T11:20:32.835Z"
updatedAt: "2022-11-16T12:54:20.055Z"
---

:::info
You'll need to be an [Administrator](https://docs.codat.io/docs/user-roles#section-administrator) or [Developer](https://docs.codat.io/docs/user-roles#section-developer) user to create rules. [Analyst](https://docs.codat.io/docs/user-roles#section-analyst) users can view alerts but not create or modify rules.",
"title": "Required permissions

## Manage rules from the Codat portal

## Create a new rule

1. Sign in to the [Codat Portal](https://app.codat.io).
2. In the navigation bar, select **Monitor**.
3. Select **Alerting rules**.
4. Select **Create new rule**.
   The **Create new rule** modal is displayed.
5. From the **Rule type** dropdown, select the event you would like to be notified of. See [Rule types](https://docs.codat.io/docs/core-rules-types) for more details of the events that trigger an alert and the details included the alert.
6. In the **Company** dropdown, select the company that you would like to monitor, or select **All companies** to make all companies trigger this rule.
7. By default, alerts triggered by rules are shown in the Codat Portal, but you can also choose to send them by email or post them to a webhook. To do this:

- In the **Email notifiers** box, enter a comma-separated list of email addresses that should receive the alert.
- In the **Webhook notification URL** box enter the URL that you would like alert details posted to. See [Webhook alerts](https://docs.codat.io/docs/core-rules-webhooks) for more details.

7. Select **Save changes**.

## Update an existing rule

You can update the company you want to monitor, or the notification methods you want to use for a rule at any time.

1. Follow steps 1 and 2 in [Create a new rule](#section-create-a-new-rule).
2. On the **Alerting rules** page, find the rule you're interested in and click its **Edit** icon.
3. Update the rule as required.
4. Select **Save changes**.

## Manage rules from the Codat API

:::info Rule types
Rule **types** must be entered exactly as shown below:

- `Data sync completed`
- `New company synchronised`
- `DataConnectionStatusChanged`
- `Data Sync Status Changed To Error`
- `Push Operation Status Changed()`
- `Push Operation Timed Out`
- `Dataset data changed`
- `Account Categories Updated`
- `Sync Connection Deleted`

## Create a new rule using the API

When you set up a new rule using the API, you can also set up email or webhook notifications to tell you when a rule condition is met.

1. Open the <a href="https://api.codat.io/swagger/index.html#/Rules/post_rules" target="blank">POST /rules</a> endpoint.
2. Enter the following details:

- The **companyId** for the company that you want to apply the rule to. Omit this for the rule to apply to all companies.
- The **type** of rule that you would like to set up using the exact naming shown above.
- (Optional) email addresses that you would like any notifications sent to.
- (Optional) the URL of the webhook that you would like notifications sent to.

3. Send your request to create the rule.

### Example body for a company-specific rule

```
{
"companyId": "4444b734-91b6-4e63-8f8e-9f01e688162b",
"type": "DataConnectionStatusChanged",
"notifiers": {
  "emails": [
    "a.user@codat.io"
  ],
  "webhook": "https://test.codat.com/codat"
}
}
```

### Example body for an all-companies rule

```
{
"type": "DataConnectionStatusChanged",
"notifiers": {
  "emails": [
    "a.user@codat.io"
  ],
  "webhook": "https://test.codat.com/codat"
}
}
```

## Update an existing rule

You can update the email and notification details for a rule at any time. Before you start, you need to find the ID of the rule that you want to update.

### Find the rule details

Use the <a href="https://api.codat.io/swagger/index.html#/Rules/get_rules" target="blank">GET /rules</a> endpoint to return a full list of all rules. If you add the query parameter **companyId** to your request, rules that apply to all companies do not appear.

### Update the rule

1. Open the <a href="https://api.codat.io/swagger/index.html#/Rules/put_rules__ruleId_" target="blank">PUT /rules/{ruleId}</a> endpoint.
2. Replace **{ruleId}** with the ID of the rule you want to update.
3. Enter your rule details, and update any email and webhook details as required. If you want to apply the changes to all companies, leave out the **companyId** parameter and value.

### Example body for updating a rule

```
{
"id": "44445936-afe0-4625-a326-14c93354e66a",
"companyId": "4444b734-91b6-4e63-8f8e-9f01e688162b",
"type": "DataConnectionStatusChanged",
"notifiers": {
  "emails": [
    "a.notheruser@codat.io"
  ],
  "webhook": "https://anothertest.codat.com/codat"
}
}
```
