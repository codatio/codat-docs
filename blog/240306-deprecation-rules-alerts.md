---
title: "2024-07-10: Deprecation of /rules/alerts endpoints"
date: "2024-03-06"
tags: ["Deprecation"]
authors: dcoplowe
---

On **July 10, 2024**, we will deprecate the rules alerts endpoints following the release of our [new webhooks service](/updates/240306-new-webhook-service-released).

<!--truncate-->

The following endpoints will be deprecated as of the specified date:

- `GET /rules/alerts`
- `GET /rules/{ruleId}/alerts`
- `GET /rules/alerts/{alertId}`

Moving forward, we encourage you to access webhook event logs through our portal.
Navigate to [Monitor > Webhooks](https://app.codat.io/monitor/webhooks) to seamlessly view webhook event logs.

## Action required

To ensure a smooth transition, please review and update your application logic to remove any dependencies on the deprecated endpoints. This will help prevent any disruptions to your integration with Codat.

## Expected impact if no action is taken

If no action is taken before the deprecation date, your application will encounter difficulties retrieving rules alerts programmatically.
The deprecated endpoints will return 'not found' (404) status codes, preventing your application from functioning normally.