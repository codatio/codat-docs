---
title: "Introducing company tags"
date: "2024-09-29"
tags: ["Product", "Update"]
hide_table_of_contents: true
authors: dcoplowe
---

import Diff from "@components/Diff"

We've enhanced our company model to offer more flexibility.
Developers can now programmatically add metadata to a company through the tags object.

<!--truncate-->

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
"tags": { // Supports up to 10 user-defined key-value pairs
    "uid": "cust_1MtJUT2eZvKYlo2CNaw2HvEv"
    "region": "us",
    "owningTeam": "commercial-lending"
    "loanSize": "large",
},
}`}
/>

### What's new?

Tags provide a simple way to add additional information to a company.
This could include anything from setting a foreign key, defining an operating region, to specifying details about the financial services a company has requested.

#### Key benefits

- **Group companies effectively**: Use tags to group companies by type or other criteria relevant to your business domain.
- **Enhanced support for event-based architectures**: All webhooks related to a specific company will include the `tags` object, enabling your webhook consumer to access this data easily.
- **Route webhooks to specific endpoints**: Direct webhook messages for specific companies to the appropriate endpoints. [Learn more](/using-the-api/webhooks/create-consumer#route-webhooks).

### Who is it relevant for?

Any client looking to add metadata to their companies in Codat, route webhooks efficiently, or pass important information into their event-based architecture.

### How to get started?

This feature is available to all clients today. Learn how to programmatically set and manage tags for a company [here](/using-the-api/managing-companies#add-metadata-to-a-company).