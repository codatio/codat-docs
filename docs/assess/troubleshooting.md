---
title: "Troubleshooting"
description: "Resolve errors in Assess"
createdAt: "2022-10-20T14:29:04.761Z"
updatedAt: "2022-11-15T14:24:24.452Z"
---

## Assess error codes

[block:parameters]
{
"data": {
"h-0": "Error code",
"h-1": "Description",
"0-0": "100",
"0-1": "A required dataset is not available for the company (either not supported, not synced, not enabled or sync failed).",
"2-0": "105",
"2-1": "A company is missing a required data connection, e.g. banking, accounting, commerce.",
"3-0": "110",
"3-1": "Could not retrieve the requested data.",
"4-0": "120",
"4-1": "There is no data for the requested date range.",
"5-0": "130",
"5-1": "Invalid account category is set for account {accountId} ({category}.{subType}.{detailType}).",
"6-0": "200",
"6-1": "Required parameters are missing from the request, e.g. company id.",
"7-0": "215",
"7-1": "Data connection not found or data connection is not an accounting data source.",
"8-0": "220",
"8-1": "Access denied.",
"9-0": "230",
"9-1": "Company has no data source connected.",
"10-0": "300",
"10-1": "You don't have the Assess product enabled. Enable Assess in the Codat Portal or contact your sales representative.",
"11-0": "320",
"11-1": "Calculated equity for one or more periods don't equal net assets.",
"12-0": "330",
"12-1": "Can't generate Excel for company {companyId} because required parameters are missing from the request.",
"13-0": "331",
"13-1": "Can't generate report for type {reportType}.",
"1-0": "101",
"1-1": "Data type {dataType} has not yet been requested or the sync is not yet complete."
},
"cols": 2,
"rows": 14
}
[/block]
