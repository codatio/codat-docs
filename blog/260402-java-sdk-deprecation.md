---
title: "2026-04-02: Deprecation of Java client SDK"
date: "2026-03-02"
tags: ["Deprecation"]
authors: vpellcodat
---

On **April 2, 2026**, Codat will deprecate and archive the [Java client SDK](https://github.com/codatio/client-sdk-java).

<!--truncate-->

To focus our efforts on the SDKs where we can deliver the most value, we are deprecating the Java client SDK across all Codat products. This will allow us to concentrate our resources on improving the developer experience for our more widely adopted [TypeScript](https://github.com/codatio/client-sdk-typescript), [Python](https://github.com/codatio/client-sdk-python), [C#](https://github.com/codatio/client-sdk-csharp), and [Go](https://github.com/codatio/client-sdk-go) SDKs.

## What's changing

The Java client SDK will no longer be maintained across all Codat products. This includes all packages published under the `io.codat` group on [Maven Central](https://search.maven.org/search?q=g:io.codat):

| Package | Maven Central artifact |
| --- | --- |
| **Platform** | `io.codat:platform` |
| **Bank Feeds** | `io.codat:bank-feeds` |
| **Sync for Commerce** | `io.codat:sync.commerce` |
| **Sync for Expenses** | `io.codat:sync.expenses` |
| **Lending** | `io.codat:lending` |
| **Sync for Payroll** | `io.codat:sync.payroll` |
| **Sync for Payables** | `io.codat:sync.payables` |
| **Accounting** | `io.codat:accounting` |
| **Banking** | `io.codat:banking` |

After the deprecation date:

- We will **stop publishing new versions** of these packages.
- We will **not** address bugs, security updates, or compatibility issues.
- The [GitHub repository](https://github.com/codatio/client-sdk-java) will be **archived** (read-only).
- Existing published versions will **remain available** on Maven Central — your current builds will not break.

## Alternatives

Codat's APIs remain fully available to Java applications. If you are currently using the Java SDK, you can:

- **Call Codat's REST APIs directly** using any Java HTTP client, such as the built-in `java.net.http.HttpClient` or libraries like OkHttp and Retrofit. Our [API reference](https://docs.codat.io/) documents all available endpoints.
- **Switch to a supported SDK** if your stack allows. Our [TypeScript](https://github.com/codatio/client-sdk-typescript), [Python](https://github.com/codatio/client-sdk-python), [C#](https://github.com/codatio/client-sdk-csharp), and [Go](https://github.com/codatio/client-sdk-go) SDKs are actively maintained and receive regular updates.

## Action required

If you don't use the Java SDK, no action is required on your part.

If you do use the Java SDK, plan to migrate to direct API calls or a supported SDK before **April 2, 2026**. If you have questions or need assistance, please reach out to your dedicated Codat representative or contact our [support team](mailto:support@codat.io).

## Expected impact if no action is taken

Your existing builds will continue to work since published versions remain available on Maven Central. However, you will no longer receive bug fixes, security patches, or compatibility updates for these packages, and the SDK will fall increasingly out of date with Codat's APIs over time.
