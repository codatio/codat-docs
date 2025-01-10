---
title: "Introducing one-time Link URLs"
date: "2025-01-10"
tags: ["Product", "Update"]
authors: rachelcodat
---

You can now send one-time Link URL to your customers to improve the relability of data provided by them. 

<!--truncate-->

## What's new?

To reduce the risk of Link URLs being leaked or reused, we have introduced the option to limit the validity and number of uses of these URLs. When enabled, all company-specific and connection-specific Link URLs will have a one-time password (OTP) added as a query parameter:

| Link type | Without OTP | With OTP |
|---|---|---|
| Company-specific | `https://link.codat.io/company/{companyId}` | `https://link.codat.io/company/{companyId}?link.otp=OTP123` |
| Connection-specific | `https://link-api.codat.io/companies/{companyId}/connections/{connectionId}/start` | `https://link-api.codat.io/companies/{companyId}/connections/{connectionId}/start?otp=OTP123` |

Additionally, you will notice the following behavior changes:

- Your customers won't be able to use the same Link URL more than once.
- Company-specific and connection-specific Link URLs will expire after one day even if they weren't used.
- You won't be able to use the generic **Invite company** button to invite your customers to share their data.

## Who is this relevant for?

All clients who want to have stricter rules around Link URLs sent to their customers.

## How to get started?

Contact your Codat account manager with the request to enable one-time Link URLs. Depending on the type of the Link flow you are using, you also need to action the following:

#### If using Hosted Link

As a prerequisite to enabling one-time Link URLs, you also need to enable the [new Hosted Link interface](/updates/250110-new-hosted-link-ui).

#### If using Hosted or build-your-own Link

If you are currently adding query parameters to Link URLs (for example, by appending `?link.showSandboxIntegrations=false`), confirm that your code can handle URLs that already contain query strings. 

#### If using Link SDK

To use one-time Link URLs with Link SDK, you need to retrieve an access token for your customer using the [Get company access token](/platform-api#/operations/get-company-access-token) endpoint and pass it when initializing the SDK.