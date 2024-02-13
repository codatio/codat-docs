---
title: "2024-07-10: Deprecation of email notifications for rules"
date: "2024-02-16"
tags: ["Deprecation"]
draft: true
authors: dcoplowe
---

_On **July 10, 2024**, we will deprecate the rules email notifications following the release of our [new webhooks service](/updates/240216-new-webhook-service-released).

<!--truncate-->

To optimize and streamline our webhook service, we are decoupling our email notifications and transitioning to a third-party solution.

## Action required

If you wish to continue receiving email notifications, we recommend configuring email-based webhook notifications through Zapier. 

Follow the step-by-step instructions in [our Zapier guide](/using-the-api/webhooks/zapier-integration) to transition to this alternative solution and ensure uninterrupted email notifications for your configured events.

## Expected impact if no action is taken

If no action is taken before the deprecation date, you will stop receiving email notifications for all rule types configured in your Codat instance. We highly encourage you to take the steps outlined in our Zapier guide to avoid any disruption in your notification services.