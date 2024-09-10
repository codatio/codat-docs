---
title: "Introducing company tags"
date: "2024-09-29"
tags: ["Product", "Update"]
hide_table_of_contents: true
authors: dcoplowe
---

import Diff from "@components/Diff"

We've enhanced our company data model to offer more flexibility.
You can now add metadata to a company using the `tags` object.

<!--truncate-->

### What's new?

We've introduced a `tags` object to our company data model.
Tags provide a simple way to include additional information about a company.
For example, you can use tags to set a foreign key, define an operating region or specify details about the financial services the company has requested.
Each company can store up to 10 tags.

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
    "region": "us",
    "owningTeam": "commercial-lending"
    "loanSize": "large",
},
}`}
/>

#### Key benefits

- **Group companies effectively**: use tags to group companies by type or other relevant criteria.
- **Support event-based architectures**: all webhooks related to a specific company will include the `tags` object so your webhook consumer can access this data easily.
- **Filter webhooks to specific consumers**: direct webhook messages for specific companies to the appropriate webhook endpoints. See [filter webhooks using company tags](/using-the-api/webhooks/create-consumer#filter-webhooks-by-company-tags).

### Who is it relevant for?

Any client looking to add metadata to their companies in Codat, route webhooks efficiently, or pass important information into their event-based architecture.

### How to get started?

This feature is available to all clients today. Start with our documentation to [add metadata to a company](/using-the-api/managing-companies#add-metadata-to-a-company).