---
title: "Webhooks migration guide"
sidebar_label: "Migration guide"
description: "Use webhooks to build responsive and resilient applications on Codat data."
---

Can I migrate?

if you ve not been contacted by us already, here is our migration guide. 

initially you can use existing rule types with the new service

we will not announce all migrations immediately, 

instructions are basically here - in comments and migrationrequirement s- https://codatdocs.atlassian.net/wiki/spaces/PRTL/pages/3246784546/Deprecations+and+migration+prep#:~:text=We%20have%20a%20number%20of%20scenarios%20we%20need%20to%20support%20during%20the%20migration%20of%20existing%20clients%20onto%20our%20new%20webhooks%20service.%20These%20are

How do I migrate?

Email your codat contact and ask to be migrated

@David Coplowe docs on how to do it for Support

The mapping between old and interim rules

What’s happening next?

Deprecation calendar and blog

thesea re sort of the options that are available to our clients based on what they do as a business

ruleId will no longer be passed on in the new schemas - in scenarios for new service new endpoints + new service old endpoints - they should remain on the existing service until we have the new rules - we will change them, and then they can rewrite their logic





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