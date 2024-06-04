---
title: "2024-10-10: Deprecation of pagination and querying the List /rules endpoint"
date: "2024-05-22"
tags: ["Deprecation"]
authors: dcoplowe
---

On **October 10, 2024**, we will deprecate the pagination and querying for the *List /rules* endpoint for clients using our [new webhooks service](/updates/240306-new-webhook-service-released).

<!--truncate-->

The following endpoint will be affected:

- `GET /rules`

### Action required

Contact your Codat representative to request continued use of the legacy webhooks service. 

### Expected impact if no action is taken

On **October 10, 2024** your Codat instance will be migrated to the new webhooks service. This will remove the ability to programmatically apply paging or query rules using the *List /rules* endpoint. The API will only return the first 50 rules when calling the endpoint.
