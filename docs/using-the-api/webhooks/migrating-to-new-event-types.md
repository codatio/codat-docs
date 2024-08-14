---
title: "Migrating to our new event types"
sidebar_label: "Migrating to our new event types"
description: "Learn how to migrate your existing webhooks to our new event types"
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

import Diff from "@components/Diff"
import { DiffMethod } from 'react-diff-viewer-continued';

Following the release of our [new webhook event types](link-to-announcement) here's our simple guide to help you migrate your existing webhooks. 

We will cover

- How your existing event types relate to our new event types.
- How the schemas map between new and old.
- How to reproduce behavours on the clients side for event types that will not be replaced. 

Jump to event type

- [AccountCategoriesUpdated](#AccountCategoriesUpdated)
<!-- - []() -->

## AccountCategoriesUpdated

| RuleType | Maps to eventType |
|---|---|
| `Account Categories Updated` | `financialStatements.{categorized,recategorized}` |


Put this in an expand:
<Tabs>
<TabItem value="old" label="Old schema">

```json
{
  "AlertId": "a9367074-b5c3-42c4-9be4-be129f43577e",
  "RuleType": "Account Categories Updated",
  "RuleId": "70af3071-65d9-4ec3-b3cb-5283e8d55dac",
  "ClientId": "bae71d36-ff47-420a-b4a6-f8c9ddf41140",
  "ClientName": "Bank of Dave",
  "CompanyId": "8a210b68-6988-11ed-a1eb-0242ac120002",
  "DataConnectionId": "2e9d2c44-f675-40ba-8049-353bfcb5e171",
  "Message": "Account categories updated for company f1c35bdc-1546-41b9-baf4-3f31135af968.",
  "Data": {
    "modifiedDate": "2019-08-24T14:15:22Z"
  }
}
```
</TabItem>

<TabItem value="new" label="New schema">

```json
{
  "id":"a9367074-b5c3-42c4-9be4-be129f43577e",
  "eventType":"financialStatements.{categorized,recategorized}",
  "generatedDate":"2019-08-24T14:15:27Z",
  "payload":{
    "referenceCompany": {
      "id":"8a210b68-6988-11ed-a1eb-0242ac120002",
      "name": "Toft stores",
      "description": "Looking to get a loan for refurb",
      "links": {
        "portal": "https://app.codat.io/companies/8a210b68-6988-11ed-a1eb-0242ac120002/summary"
      }
    },
    "categorizationDate": "2019-08-24T14:15:22Z"
  }
}
```
</TabItem>

</Tabs>

| Old schema property | Maps to new schema property |
|--|--|
| AlertId | id |
| RuleType | eventType |
| RuleId | - |
| ClientId | - |
| ClientName | - |
| CompanyId | payload.referenceCompany.id |
| DataConnectionId | - |
| Message | - |
| Data.modifiedDate | payload.categorizationDate |