---
title: "2025-01-10: Deprecation of legacy hosted link UI"
date: "2025-01-10"
tags: ["Deprecation"]
authors: rachelcodat
---

On **April 10, 2025**, we will deprecate our legacy hosted link ui following the release of our (new link UI)[./250110-new-hosted-link-ui] which now offers a (more secure experience)[./250110-secure-linking].

<!--truncate-->

## Action required

Please reach out to your account manager to enable the new link flow and let them know whether you would like to use the secure version.

If you are using the secure linking the following changes will occur: 

### Hosted/Self built Link
All Link URLs (for the company or data connection) will have a one time passcode added as a query parameter. For example:
Company Link `https://link.codat.io/company/7b755b07-9285-4748-90f9-e0636ae69cf0` ->  `https://link.codat.io/company/7b755b07-9285-4748-90f9-e0636ae69cf0?link.otp=IVHHW9`
Connection Link `https://link-api.codat.io/companies/5208c1e6-9ad8-45cf-8d11-05cd44bf7c76/connections/6929c7a4-7089-454d-a482-67b46c16ceba/start` -> `https://link-api.codat.io/companies/5208c1e6-9ad8-45cf-8d11-05cd44bf7c76/connections/6929c7a4-7089-454d-a482-67b46c16ceba/start?otp=IVHHW9`

If you are is programmatically adding query parameters to this URL e.g. by appending ?link.showSandboxIntegrations=false you will need to check this code handles URLs that already contain query strings.

End users will no longer be able to reuse the same link twice so a new URL will need to be generated every time a user starts a new link flow. Links will expire after 1 day.

The invite company link is not supported when secure linking is enabled

###Link SDK
To use Link SDK with the secure link you will need to retrieve an access token from `api.codat.io/companies/:companyId/accessToken` and set the access token property when initializing Link SDK

## Expected impact if no action is taken

If new link has not been enabled by **April 10, 2025** it will be automatically enabled using the secure version
