---
title: "2024-10-10: Deprecation of rule-based email notifications"
date: "2024-04-05"
tags: ["Deprecation"]
authors: dcoplowe
---

On **October 10, 2024**, we will deprecate the rule-based email notification functionality following the release of our [new webhooks service](/updates/240306-new-webhook-service-released).

<!--truncate-->

Email notifications are currently managed by our webhook rules service. After the deprecation date, this service will no longer exist. Instead, you can use our [Zapier integration](/using-the-api/webhooks/zapier-integration) to trigger automated workflows that send an email notification or a Slack message.

### Action required

To continue receiving email notifications, use our [Zapier integration](/using-the-api/webhooks/zapier-integration) to create a workflow using the 'Email by Zapier' action.

### Expected impact if no action is taken

If no action is taken by **October 10, 2024**, you will stop receiving email notifications created using our [Receive webhooks events via email](/using-the-api/webhooks/legacy/receive-webhooks-as-email) feature.