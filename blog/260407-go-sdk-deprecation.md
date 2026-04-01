---
title: "2026-05-07: Deprecation of Go client SDK"
date: "2026-04-07"
tags: ["Deprecation"]
authors: vpellcodat
---

On **May 7, 2026**, Codat will deprecate and archive the [Go client SDK](https://github.com/codatio/client-sdk-go).

<!--truncate-->

To focus our efforts on the SDKs where we can deliver the most value, we are deprecating the Go client SDK across all Codat products. This will allow us to concentrate our resources on improving the developer experience for our more widely adopted [TypeScript](https://github.com/codatio/client-sdk-typescript), [Python](https://github.com/codatio/client-sdk-python), and [C#](https://github.com/codatio/client-sdk-csharp) SDKs.

## What's changing

All Go modules published under `github.com/codatio/client-sdk-go` will no longer be maintained:

| Product | Module |
| --- | --- |
| **Platform** | `github.com/codatio/client-sdk-go/platform` |
| **Bank Feeds** | `github.com/codatio/client-sdk-go/bank-feeds` |
| **Lending** | `github.com/codatio/client-sdk-go/lending` |
| **Sync for Commerce** | `github.com/codatio/client-sdk-go/sync-for-commerce` |
| **Sync for Expenses** | `github.com/codatio/client-sdk-go/sync-for-expenses` |
| **Sync for Payables** | `github.com/codatio/client-sdk-go/sync-for-payables` |
| **Sync for Payroll** | `github.com/codatio/client-sdk-go/sync-for-payroll` |

After **May 7, 2026**:

- We will **stop publishing new versions** of these modules.
- We will **not** address bugs, security updates, or compatibility issues.
- The [GitHub repository](https://github.com/codatio/client-sdk-go) will be **archived** (read-only).
- Existing tagged versions will **remain available** via the Go module proxy — your current builds will not break.

## Alternatives

Codat's APIs remain fully available to Go applications. If you are currently using the Go SDK, you can:

- **Call Codat's REST APIs directly** using Go's standard `net/http` package or any HTTP client library. Our [API reference](https://docs.codat.io/) documents all available endpoints.
- **Switch to a supported SDK** if your stack allows. Our [TypeScript](https://github.com/codatio/client-sdk-typescript), [Python](https://github.com/codatio/client-sdk-python), and [C#](https://github.com/codatio/client-sdk-csharp) SDKs are actively maintained and receive regular updates.

## Action required

If you don't use the Go SDK, no action is required on your part.

If you do use the Go SDK, plan to migrate to direct API calls or a supported SDK before **May 7, 2026**. If you have questions or need assistance, please reach out to your dedicated Codat representative or contact our [support team](mailto:support@codat.io).

## Expected impact if no action is taken

Your existing builds will continue to work since published versions remain available via the Go module proxy. However, you will no longer receive bug fixes, security patches, or compatibility updates for these modules, and the SDK will fall increasingly out of date with Codat's APIs over time.
