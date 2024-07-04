---
title: "2025-01-10: Webhook update: deprecation extension"
date: "2024-07-04"
tags: ["Product", "Deprecation"]
hide_table_of_contents: true
authors: dcoplowe
---

We have extended the deprecation window for our previously announced webhook changes.

<!--truncate-->

On **April 10, 2025** we announced three deprecations following the release of our new webhooks service. These were

- [`/rules/alerts` endpoints](/updates/240306-deprecation-rules-alerts).
- [RuleId in rules webhooks](/updates/240320-deprecation-ruleId).
- [Rule-based email notifications](/updates/240405-deprecation-rule-based-email-notifications).

To ensure a smoother transition, we have extended the deprecation period to **January 10, 2025**. 

### Action required

Clients using the legacy webhook service must migrate over to the new service and address the following deprecations:

#### Deprecation of `/rules/alerts` endpoints

The following endpoints will be deprecated:

- `GET /rules/alerts`
- `GET /rules/{ruleId}/alerts`
- `GET /rules/alerts/{alertId}`

##### Action required 

Review and update your application logic to remove any dependencies on the deprecated endpoints. This will help prevent any disruptions to your integration with Codat.

#### Expected impact if no action is taken

If no action is taken by the deprecation date, your application will fail when retrieving rules alerts programmatically. The deprecated endpoints will return `Not found` (404) status codes, preventing your application from functioning normally.

--- 

#### Deprecation of RuleId in rules webhooks

The `RuleId` property will be deprecated in the following webhook rule schemas:

- [Company data connection status changed](https://docs.codat.io/using-the-api/webhooks/legacy/core-rules-types#company-data-connection-status-changed)
- [New company synchronized](https://docs.codat.io/using-the-api/webhooks/legacy/core-rules-types#new-company-synchronized)
- [Data sync completed](https://docs.codat.io/using-the-api/webhooks/legacy/core-rules-types#data-sync-completed)
- [Dataset data changed](https://docs.codat.io/using-the-api/webhooks/legacy/core-rules-types#dataset-data-changed)
- [Dataset status has changed to an error state](https://docs.codat.io/using-the-api/webhooks/legacy/core-rules-types#dataset-status-has-changed-to-an-error-state)
- [Push operation status has changed](https://docs.codat.io/using-the-api/webhooks/legacy/core-rules-types#push-operation-status-has-changed)
- [Push operation has timed out](https://docs.codat.io/using-the-api/webhooks/legacy/core-rules-types#push-operation-has-timed-out)
- [Account categories updated](https://docs.codat.io/using-the-api/webhooks/legacy/core-rules-types#account-categories-updated)
- [Sync Connection Deleted](https://docs.codat.io/using-the-api/webhooks/legacy/core-rules-types#sync-connection-deleted)
- [Expenses sync completed](https://docs.codat.io/using-the-api/webhooks/legacy/core-rules-types#expenses-sync-completed)
- [Expenses sync failed](https://docs.codat.io/using-the-api/webhooks/legacy/core-rules-types#expenses-sync-failed)
- [Client rate limit reached](https://docs.codat.io/using-the-api/webhooks/legacy/core-rules-types#client-rate-limit-reached)
- [Client rate limit reset](https://docs.codat.io/using-the-api/webhooks/legacy/core-rules-types#client-rate-limit-reset)

##### Action required 

Review and update your application logic to remove any dependencies on the RuleId. This will help prevent any disruptions to your integration with Codat.

You should use RuleType to identify what event a given webhook corresponds with.

##### Expected impact if no action is taken

If no action is taken, after **January 10, 2024**, your application will continue to receive events, but the `RuleId` will not be populated.
Any application logic using the `RuleId` property will function following your unhappy path for `RuleId` logic.
Depending on your implementation, this may impact your processing Codat's webhooks.

--- 

#### Deprecation of rule-based email notifications

Email notifications are currently managed by our webhook rules service. After the deprecation date, this service will no longer exist. Instead, you can use our [Zapier integration](/using-the-api/webhooks/zapier-integration) to trigger automated workflows that send an email notification or a Slack message.

##### Action required 

To continue receiving email notifications, use our [Zapier integration](/using-the-api/webhooks/zapier-integration) to create a workflow using the 'Email by Zapier' action.

##### Expected impact if no action is taken

If no action is taken by **January 10, 2025**, you will stop receiving email notifications created using our [Receive webhooks events via email](/using-the-api/webhooks/legacy/receive-webhooks-as-email) feature.