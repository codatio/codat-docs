---
title: "2024-10-10: Deprecation of pagination and querying the *List /rules endpoint*"
date: "2024-05-21"
tags: ["Deprecation"]
authors: dcoplowe
---

On **October 10, 2024**, pagination and querying for the *List /rules endpoint* will be deprecated for clients using the new webhooks service.

<!--truncate-->

### Action required

Contact your Codat representative to request continued use of the legacy webhooks service. 

### Expected impact if no action is taken

Your Codat instance will be migrated over to use the new webhooks service which will remove the ability to programmatically paging and/or query rules using the *List /rules endpoint*. The API will only return the first 50 rules when calling the endpoint.