---
title: "2025-01-10: Secure linking"
date: "2025-01-10"
tags: ["Product", "Update"]
authors: rachelcodat
---

Link now supports a fully secure version to improve the relability of data provided by your customers.

<!--truncate-->

## What's new?

To reduce the risk of link urls being leaked, end users will no longer be able to reuse the same link urls twice. Links will expire after 1 day.

All Link URLs (for the company or data connection) will have a one time passcode added as a query parameter. For example:
Company Link `https://link.codat.io/company/7b755b07-9285-4748-90f9-e0636ae69cf0` ->  `https://link.codat.io/company/7b755b07-9285-4748-90f9-e0636ae69cf0?link.otp=IVHHW9`
Connection Link `https://link-api.codat.io/companies/5208c1e6-9ad8-45cf-8d11-05cd44bf7c76/connections/6929c7a4-7089-454d-a482-67b46c16ceba/start` -> `https://link-api.codat.io/companies/5208c1e6-9ad8-45cf-8d11-05cd44bf7c76/connections/6929c7a4-7089-454d-a482-67b46c16ceba/start?otp=IVHHW9`

Once these urls have been used the user will then have an authenticated session in which they can share their data.

To use the secure version with Link SDK an access token for a company can be retrieved from `api.codat.io/companies/:companyId/accessToken` and set when initializing Link SDK.

## Who is this relevant for?

Clients who use our hosted link flow

## How to get started?

Talk to your account manager to enable the more secure version - if you are using hosted link you will need to swap to the (updated UI first)[./250110-new-hosted-link-ui].
