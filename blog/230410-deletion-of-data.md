---
title: "Upcoming 2023-04-10: Changes to handling of deleted data"
date: "2023-01-15"
tags: ["Deprecation", "Data deletion"]
draft: false
authors: d-laing
link: "https://docs.codat.io/changelog/upcoming-2023-01-31-deprecation-of-uat-environment"
---

On April 10, 2023, Codat will change the way accounting data deleted by company users within their accounting package is handled.

<!--truncate-->

To ensure better consistency between successive data syncs, records deleted by a company between two data syncs will now continue to be stored by Codat. A flag will be set to indicate that the data has been deleted in the underlying Accounting package.

## Action required

From April 10, 2023, the Codat API will return data that was not previously returned. Therefore, if data pertaining to records deleted between two successive data syncs is not required for your use case, you will need to filter out deleted records. This can be achieved by querying Codat's API with:  
`?query=metadata.isDeleted!=true`

## Expected impact if no action is taken

If no action is taken, API calls to retrieve company accounting data will include records deleted by companies.

## Additional information

Accounting data deleted by a company between two data syncs can be identified with the `isDeleted` flag (boolean), present on the `metadata` object that is now returned on all Accounting data endpoints.

```text
"metadata": {
  "isDeleted": true     // false by default; true only where previously synced data is deleted by a company
}
```

Note 1: This change applies to only Accounting data deleted by a company between successive Codat data syncs. Records that were both created and deleted by a company before the first Codat sync will never be included in Codat data.

Note 2: For datatypes with a Status property in Codat's data model, Codat does not currently delete data, but instead updates the status property. The `metadata.isDeleted` flag will be set to True after April 10, 2023.

Note 3: For pre-existing data, the isDeleted flag may be set to null; this will be set to true/false on future data syncs.

> 📘
>
> You can get ahead of this change by enabling it now in the [Portal](https://app.codat.io/developers/api-deprecations). Learn how to do that [here](doc:portal-for-developers), or read our change policy [here](doc:change-policy).
