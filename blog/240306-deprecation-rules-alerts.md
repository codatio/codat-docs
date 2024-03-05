---
title: "2024-07-10: Deprecation of /rules/alerts endpoints"
date: "2024-03-06"
tags: ["Deprecation"]
authors: dcoplowe
---

On **July 10, 2024**, we will deprecate the `/rules/alerts` endpoints following the release of our [new webhooks service](/updates/240306-new-webhook-service-released).

<!--truncate-->

The following endpoints will be deprecated on the specified date:

- `GET /rules/alerts`
- `GET /rules/{ruleId}/alerts`
- `GET /rules/alerts/{alertId}`

Moving forward, we encourage you to access webhook event logs through our Portal. Navigate to **Monitor > Webhooks > Events** and select the [**Logs** tab](https://app.codat.io/monitor/webhooks) to view the event logs.

### Action required

To ensure a smooth transition, review and update your application logic to remove any dependencies on the deprecated endpoints. This will help prevent any disruptions to your integration with Codat.

### Expected impact if no action is taken

If no action is taken by the deprecation date, your application will encounter difficulties retrieving rules alerts programmatically. The deprecated endpoints will return `Not found` (404) status codes, preventing your application from functioning normally.
