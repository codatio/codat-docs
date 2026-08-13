---
title: "Introducing one-time Link URLs"
date: "2025-01-10"
tags: ["Product", "Update"]
authors: rachelcodat
---

You can now send one-time Link URL to your customers to improve the reliability of data provided by them.

<!--truncate-->

## What's new?

To reduce the risk of Link URLs being leaked or reused, we have introduced the option to limit the validity and number of uses of these URLs. When enabled, all company-specific and connection-specific Link URLs will have a one-time password (OTP) added as a query parameter:

| Link type           | Without OTP                                                                        | With OTP                                                                                      |
| ------------------- | ---------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| Company-specific    | `https://link.codat.io/company/{companyId}`                                        | `https://link.codat.io/company/{companyId}?link.otp=OTP123`                                   |
| Connection-specific | `https://link-api.codat.io/companies/{companyId}/connections/{connectionId}/start` | `https://link-api.codat.io/companies/{companyId}/connections/{connectionId}/start?otp=OTP123` |

Additionally, you will notice the following behavior changes:

- Your customers won't be able to use the same Link URL more than once.
- Company-specific and connection-specific Link URLs will expire after one day even if they weren't used.
- You won't be able to use the generic **Invite company** button to invite your customers to share their data.

## Who is this relevant for?

All clients who want to have stricter rules around Link URLs sent to their customers.

## How to get started?

To set up one-time Link URLs:

1. **Enable the One-time Link URLs setting** in the [Codat Portal](https://app.codat.io) under **[Settings > Auth flow > Link > Onboarding](https://app.codat.io/settings/link-settings/onboarding)**.
2. **Complete the additional steps for your Link flow**, as described below.

#### If using Hosted or build-your-own Link

If you are currently adding query parameters to Link URLs (for example, by appending `?link.showSandboxIntegrations=false`), confirm that your code can handle URLs that already contain query strings.

#### If using Link SDK

The Link SDK uses an access token instead of an appended one-time password. To set this up:

1. **Register your domain** using the [Set CORS settings](/platform-api#/operations/set-cors-settings) endpoint so the component can make authenticated requests from your site.
2. **Get a company access token.** Retrieve it server-side from the [Get company access token](/platform-api#/operations/get-company-access-token) endpoint (`GET /companies/{companyId}/accessToken`). Tokens are valid for 24 hours and scoped to a single company.
3. **Pass the token to the Link SDK** via the `accessToken` prop when initializing the component.

Reach out to your account manager or our support team if you'd like help getting set up.
