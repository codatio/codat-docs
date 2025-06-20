---
title: "Codat developer update — Q1 2025"
date: "2025-01-10"
tags: ["Product", "Update"]
hide_table_of_contents: false
authors: pzaichkina
---

Review the upcoming changes and deprecations we announced this quarter, get ahead of them, and see what's new with Codat's products.

<!--truncate-->

## Product updates

### Introducing Bank Feeds SDK

We have launched a Bank Feeds SDK to help you easily build a best-in-class bank feeds solution. The SDK creates a simple setup experience for your users, allowing them to share access to their accounting software and enabling them to set up account mapping in one seamless flow.

![Bank Feeds SDK features](/img/updates/bank-feeds-bento.png)

The SDK's rich configuration properties allow you to build interactions and customize text and branding in a way that creates a trusted, compelling experience.

[Read more →](/updates/241124-bank-feeds-sdk)

### Updated Link flow interface

We have updated the user interface of our Hosted Link experience to match the experience provided by the Link SDK. The Hosted Link flow now boasts a cleaner, adaptive layout and allows users to connect their integrations in any order.

![](/img/updates/hosted-link-updated-UI.png)

[Read more →](/updates/250110-new-hosted-link-ui)

### Introducing one-time Link URLs

To reduce the risk of Link URLs being leaked or reused, we have introduced the option to limit the validity and number of uses of these URLs. When enabled, your customers won't be able to use the same Link URL more than once, and links will expire after one day even if they weren't used.

[Read more →](/updates/250110-secure-linking)

### Zapier app 2.0 released

We’re excited to announce that we've upgraded our Zapier integration, making it even easier to automate your workflows. Codat app version 2.0 supports our latest [webhook event types](/using-the-api/webhooks/event-types), allows you to listen to multiple event types at the same time, and uses the updated webhook schema.

[Read more →](/updates/250108-zapier-integration-v2)

### New company update endpoint

You can now use our new [Update company](/platform-api#/operations/update-company) endpoint to update specific company properties without impacting others. To differentiate the methods used by endpoints, we have also renamed our existing endpoint that overwrites all company values to [Replace company](/platform-api#/operations/replace-company).

[Read more →](/updates/250108-update-or-replace-company)

### Filter companies using tags

You can now use the `tags` query parameter on the [List companies](/platform-api#/operations/list-companies) endpoint to filter your companies by one or more tags.

This feature lets you retrieve companies based on specific criteria and streamlines company management in Codat.

[Read more →](/updates/241125-filter-companies-by-tags)

### Replay missed webhook messages

With this latest update to our webhooks service, you can request Codat to resend all events missed in the previous two weeks. You can do so when you start using the webhooks service on a consumer-by-consumer basis.

[Read more →](/updates/241125-webhooks-replay-missed-messages)

### New webhook event type

We have expanded our support for connection-related notifications by adding the `connection.failed` webhook. You can subscribe to it to be alerted if your SMB customer encounters issues when connecting their business software.

It provides details of the failed connection, including information on the specific error that occurred. This helps you quickly identify and address the issue.

[Read more →](/updates/241030-new-connection-failed-webhook)

### New callback added to Link SDK

We have added a new `onConnectionStarted` property to the callback functionality of the [Link SDK](/auth-flow/authorize-embedded-link). It is called when your user selects an integration and clicks **Next** in the Link flow deployed using our SDK.

![Integration Selection](/img/link/integration_selection.png)

This indicates that a connection has been successfully created in a pending state, allowing you to track users reaching this point in the Link flow. 

[Read more →](/updates/241120-onconnectionstarted)

## Changes that apply from January 10, 2025

### Deprecation of legacy QuickBooks Desktop Integration

We have recently released our [updated QuickBooks Desktop connector](/updates/240227-qbd-connector). It simplifies your customer’s linking journey and provides more resilient data acquisition.

As a result, we will be deprecating the legacy connector on **January 10, 2025**. Migrate your existing QBD connections to the new connector to continue syncing data with QBD after the deprecation.

[Read more →](/updates/240802-deprecation-old-qbd-integration)

### Deprecation of legacy webhook event types

On **January 10, 2025**, we will deprecate our legacy rule-based webhooks service following the release of our [new webhooks service](/updates/240306-new-webhook-service-released) and [webhook event types](/updates/241004-new-webhook-event-types).

If you are using our legacy rules-based webhook service, migrate to the new webhooks service to continue receiving notifications from us.

[Read more →](/updates/241004-deprecation-rules-service)

### Deprecation extension for webhook changes

We previously announced the following deprecations after the release of our new webhooks service:

- [Deprecation of /rules/alerts endpoints](/updates/240306-deprecation-rules-alerts)
- [Deprecation of RuleId in rules webhooks](/updates/240320-deprecation-ruleId)
- [Deprecation of rule-based email notifications](/updates/240405-deprecation-rule-based-email-notifications)

In our July developer update, we have extended the deprecation period to January 10, 2025. This deprecation is going ahead as scheduled on **January 10, 2025**.

[Read more →](/updates/240704-webhook-deprecation-extension)

### Deprecation of legacy webhook event types

On **January 10, 2025**, we will deprecate our legacy rule-based event types following the release of our [new webhook event types](/updates/241004-new-webhook-event-types) that provide more contextual information in the webhook payload.

If you are using our legacy rule-based event types, change your configuration to use the new event types instead and continue receiving webhook notifications.

[Read more →](/updates/241004-deprecation-legacy-webhook-event-types)

### Deprecation of company-specific webhooks

On **January 10, 2025**, we will deprecate company-specific webhooks delivered by our legacy rule services and replace them with [company tags](/updates/240926-introducing-company-tags).

To continue receiving notifications, add the required metadata to the the company schema and update your webhook consumers to filter webhooks by company tags.

[Read more →](/updates/241004-deprecation-company-specific-webhooks)

### Changes to the bankFeeds.sourceAccount webhook payload

On **January 10, 2025**, we will update the payloads for the following event types to align with our [new webhook schema definition](/updates/241004-new-webhook-event-types):

- `bankFeeds.sourceAccount.connected`
- `bankFeeds.sourceAccount.disconnected`

If you are using these webhook event types, update your corresponding webhook consumers to handle the updated schema definitions.

[Read more →](/updates/241004-deprecation-bank-feed-source-account-event-types)

## Changes planned for April 10, 2025

### Deprecation of Zapier app version 1.0

On **April 10, 2025**, we will deprecate version 1.0 of our Zapier app following the [release of version 2.0](/updates/250108-zapier-integration-v2) that supports our [latest webhook event types](/using-the-api/webhooks/event-types). To ensure the non-stop service of your workflows, update your existing Zaps to use the latest version of our app before **April 10, 2025**.

[Read more →](/updates/250109-deprecation-zapier-integration-v1)

### Deprecation of legacy Hosted Link UI

On **April 10, 2025**, we will deprecate our legacy Hosted Link user interface following the release of our [new Hosted Link UI](/updates/250110-new-hosted-link-ui). If you haven't enabled the new Hosted Link UI by **April 10, 2025**, we will automatically enable it for you, and you won't be able to return to the legacy UI.

[Read more →](/updates/250110-deprecation-legacy-hosted-link-ui)
