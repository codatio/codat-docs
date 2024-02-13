---
title: "Webhooks migration guide"
sidebar_label: "Migration guide"
description: "Use webhooks to build responsive and resilient applications on Codat data."
---

Can I migrate?


initially you can use existing rule types with the new service

How do I migrate?

Email your codat contact and ask to be migrated

@David Coplowe docs on how to do it for Support

The mapping between old and interim rules

What’s happening next?

Deprecation calendar and blog

| # | Scenario                                                                                         | New service and new endpoint | New service and old endpoints | Remains on old service and endpoints | Caveats                |
|---|--------------------------------------------------------------------------------------------------|------------------------------|-------------------------------|--------------------------------------|------------------------|
| 1 | Client uses email functionality                                                                  | ✔️                            | ❌                             | ❌                                    | Zapier setup           |
| 2 | Client uses event logs endpoint (e.g. /rules/alerts)                                             | ❌                            | ❌                             | ✔️                                    |                        |
| 3 | Client uses company agnostic webhook functionality only                                          | ✔️                            | ❌                             | ❌                                    |                        |
| 4 | Client uses company specifc webhook functionality                                                | ❌                            | ✔️                             | ❌                                    |                        |
| 5 | Client/Partner uses X-Codat-ClientId header to determine what Codat instance the event came from | ✔️                            | ❌                             | ❌                                    | Manual config required |
| 6 | Client sets the webhook auth. header using the /profile endpoint                                 | ✔️                            | ❌                             | ❌                                    | Manual config required |
| 7 | Client sets the webhook auth. header via the portal                                              | ✔️                            | ❌                             | ❌                                    | Manual config required |
| 8 | Client uses the Retry-After header to control the time between retries                           | ✔️                            | ❌                             | ❌                                    |                        |