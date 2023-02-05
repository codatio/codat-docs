---
title: "Pull and push history"
description: "See the history of data pulled into and pushed from the Codat system"
createdAt: "2022-10-23T19:11:10.320Z"
updatedAt: "2022-10-23T20:59:38.141Z"
---

When viewing a company in the Portal, you can view **Pull history** and **Push history** to check the status of previous pull and push data syncs by data type.

## Pull history

**Companies > <company> > Pull history**

When a pull of data is initialized, items will appear here for each data type being pulled.

You can see:

- Type - data type name, with integration name below
- ID - the ID of the pull for that data type
- Requested date
- Time to complete
- Status

Where an pull encounters a validation error, you can click on the status to see more information.

[Read how to get this information via API](https://docs.codat.io/reference/get_companies-companyid-data-history).

## Push history

**Companies > <company> > Push history**

When a pushed of data is initialized, items will appear here for each data type being pushed.

- Type - data type name, with integration name below
- Push operation ID - the ID of the push for that data type
- Requested date
- Time to complete
- Status
