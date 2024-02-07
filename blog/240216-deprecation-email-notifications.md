---
title: "2024-07-10: Deprecation of email notifications for rules"
date: "2024-02-16"
tags: ["Deprecation"]
draft: true
authors: dcoplowe
---

_On **July 10, 2024**, we will deprecate the rules email notifications following the release of our [new webhooks service](/updates/240216-new-webhook-service-released).

<!--truncate-->

To optimize and streamline our webhook service, we have made the decision to decouple our email notifications and transition to a third-party solution.

## Action required

For users who wish to continue receiving email notifications, we recommend configuring email-based webhook notifications through Zapier. Our Zapier guide provides step-by-step instructions to help you seamlessly transition to this alternative solution.

[Follow our Zapier](/using-the-api/webhooks/zapier-integration) guide here to ensure uninterrupted email notifications for your configured rule types.

## Expected impact if no action is taken

If no action is taken before the deprecation date, clients will cease receiving email notifications for all rule types configured in their Codat instance. We highly encourage all users to take the necessary steps outlined in our Zapier guide to avoid any disruption in your notification services.