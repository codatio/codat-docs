---
title: "Introducing company owners on company responses"
date: "2026-07-14"
tags: ["Product", "Update"]
hide_table_of_contents: true
authors: rharrison
---

import Diff from "@components/Diff";

We've enhanced our `company` data model to reflect ownership.
Company responses now include an `ownerUserIds` property that lists the users who own the company.

<!--truncate-->

### What's new?

We've introduced an `ownerUserIds` property to our `company` [data model](/platform-api#/schemas/Company). It contains the IDs of the [users](/configure/user-management/adding-users) assigned as owners of the company, making it easy to connect companies in Codat to the team members responsible for them.

Every endpoint that returns a company includes the new property, such as [Get company](/platform-api#/operations/get-company) and [List companies](/platform-api#/operations/list-companies). If a company has no owners assigned, `ownerUserIds` is an empty array.

The property is read-only. Owners are assigned and managed in the Codat Portal, so requests to the [Create company](/platform-api#/operations/create-company) and [Update company](/platform-api#/operations/update-company) endpoints don't accept it.

<Diff
  showDiffOnly={false}
  oldCode={`{
"id":"0498e921-9b53-4396-a412-4f2f5983b0a2",
"name":"Toft stores",
"description": "Requested a loan for refurb",
"redirect":"https://link.codat.io/company/27628208-459c-46a2-a705-5641ce25f739",
"lastSync":"2022-01-01T12:00:00.000Z",
"created":"2022-01-01T12:00:00.000Z",
"createdByUserName":"Danny DeVito",
"tags": {
    "uid": "cust_1MtJUT2eZvKYlo2CNaw2HvEv"
},
}`}
  newCode={`{
"id":"0498e921-9b53-4396-a412-4f2f5983b0a2",
"name":"Toft stores",
"description": "Requested a loan for refurb",
"redirect":"https://link.codat.io/company/27628208-459c-46a2-a705-5641ce25f739",
"lastSync":"2022-01-01T12:00:00.000Z",
"created":"2022-01-01T12:00:00.000Z",
"createdByUserName":"Danny DeVito",
"tags": {
    "uid": "cust_1MtJUT2eZvKYlo2CNaw2HvEv"
},
"ownerUserIds": [
    "3f1a2b4c-5d6e-7f80-91a2-b3c4d5e6f708"
],
}`}
/>

### Who is it relevant for?

Any client who assigns owners to their companies and wants to surface that ownership in their own systems — for example, to route notifications or reports to the right team members.

### How to get started?

No changes to your integration are required. Company responses automatically include the `ownerUserIds` property.
