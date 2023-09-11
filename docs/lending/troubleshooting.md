---
title: "Troubleshooting"
description: "Resolve common errors"
displayed_sidebar: lending
---

import SocialImages from "@components/global/SocialImages";

<SocialImages imgSrc="/img/banners/social/lending.png"/>

## Lending API error codes

| Error code | Description | 
| ---------- | ----------- | 
| 100 | A required dataset is not available for the company (either not supported, not synced, not enabled or sync failed). | 
| 101 | Data type {dataType} has not yet been requested or the sync is not yet complete. | 
| 105 | A company is missing a required data connection, e.g. banking, accounting, commerce. | 
| 110 | Could not retrieve the requested data. | 
| 120 | There is no data for the requested date range. | 
| 130 | Invalid account category is set for account {accountId} ({category}.{subType}.{detailType}). | 
| 200 | Required parameters are missing from the request, e.g. company id. | 
| 215 | Data connection not found or data connection is not an accounting data source. | 
| 220 | Access denied. | 
| 230 | Company has no data source connected. | 
| 300 | You don't have the Lending API product enabled. Enable Lending in the Codat Portal or contact your sales representative. | 
| 320 | Calculated equity for one or more periods don't equal net assets. | 
| 330 | Can't generate Excel for company {companyId} because required parameters are missing from the request. | 
| 331 | Can't generate report for type {reportType}. | 