---
title: "Delete Journal entries from QuickBooks Online"
description: "Description"
---

The _Delete journal entries_ endpoint allows you to delete a specified Journal entry from QuickBooks Online (QBO).

1. Make a `DELETE` request to the endpoint and specify the Codat ID of the Journal entry to be deleted in the request URL:

   ```json title="Delete a Journal entry"
   DELETE /companies/{companyId}/connections/{connectionId}/delete/journalEntries/{journalEntryId}
   ```

   TO DO: Add a link to the API Reference

2. [List the push operations](/codat-api#/operations/get-company-push-history) for the company. Response - what do we need to highlight???

```json
{
  "results": [
    {
      "id": "8484",
      "postedOn": "2023-03-15T00:00:00",
      "createdOn": "2023-03-15T00:00:00",
      "journalLines": [
        {
          "description": "",
          "netAmount": -22.3,
          "currency": "GBP",
          "accountRef": {
            "id": "139",
            "name": "Barclays"
          },
          "tracking": {
            "recordRefs": [
              {
                "id": "DEPARTMENT_1",
                "dataType": "trackingCategories"
              }
            ]
          }
        },
        {
          "description": "",
          "netAmount": 22.3,
          "currency": "GBP",
          "accountRef": {
            "id": "70",
            "name": "Debtors"
          },
          "tracking": {
            "recordRefs": [
              {
                "id": "DEPARTMENT_1",
                "dataType": "trackingCategories"
              }
            ]
          }
        }
      ],
      "modifiedDate": "2023-03-15T11:14:37Z",
      "sourceModifiedDate": "2023-03-15T11:13:27Z",
      "recordRef": {
        "id": "8484",
        "dataType": "payments"
      },
      "metadata": {
        "isDeleted": false
      }
    }
  ],
  "pageNumber": 1,
  "pageSize": 20,
  "totalResults": 1,
  "_links": {
    "current": {
      "href": "/companies/c0c4ef53-e70c-45d5-9af4-27aa486347d7/data/journalEntries?page=1&pageSize=20&orderBy=-createdOn&query=%7Bid~8484%7C%7CrecordRef.dataType~8484%7C%7CcreatedOn%3D8484%7C%7CpostedOn%3D8484%7D%26%26metadata.isDeleted!%3Dtrue"
    },
    "self": {
      "href": "/companies/c0c4ef53-e70c-45d5-9af4-27aa486347d7/data/journalEntries"
    }
  }
}
```

3. Check that the Journal entry no longer exists in the QBO UI.

Something about linked invoices?


Add a warning- this endpoint allows you to delete any record ??? use with caution

```info
Existing note from NetSuite - future support for deleting objects
```