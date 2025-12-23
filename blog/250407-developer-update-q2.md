---
title: "Codat quarterly update — Q2 2025"
date: "2025-04-07"
tags: ["Product", "Update"]
hide_table_of_contents: false
authors: pzaichkina
---

Review the upcoming changes and deprecations we announced this quarter, get ahead of them, and see what's new with Codat's solutions.

<!--truncate-->

## Solution updates

### Updates to Codat's solution range

Codat’s solution range and documentation just got a major upgrade — with clearer names, smarter navigation, and a sharper focus on what matters most to you and your customers.

These changes reflect our commitment to empowering both developers and client-facing teams with tailored, insight-driven tools that help businesses grow.

[Review changes →](/updates/250204-new-product-docs)

### Account: standardized current balance

We have standardized the way we calculate and display Account's `currentBalance` field across Xero, NetSuite, Dynamics 365 BC, Sage Intacct, Sage 50, Sage 200, and Zoho Books integrations to ensure consistent and accurate balance reporting.

On **April 14, 2025**, we will enable this enhancement for all clients. To apply the changes to the data, run a Chart of Accounts data sync after that date.

[Read more →](/updates/250404-update-accounts-balances)

### Bank Feeds: updates to account mapping interface

We have enhanced the account mapping user interface (UI) of our Bank Feeds solution with a connection management component and an updated page header.

If you are using our mapping UI, your customers can now manage their own accounting platform connections, boosting control and trust in your app.

[Read more →](/updates/250401-bank-feeds-connections)

### QuickBooks Online: Minor version update – no action required

On **August 1, 2025**, [Intuit will migrate](https://blogs.intuit.com/2025/01/21/changes-to-our-accounting-api-that-may-impact-your-application/) all apps using minor versions to minor version 75. We have confirmed that this update **won't impact your use of Codat**, and no action is required on your part.

[Read more →](/updates/250401-qbo-minor-versions-update)

### Webhooks: mTLS support

You can now secure your webhook consumers with two-way authentication in the Portal using **mutual TLS (mTLS)**. This ensures that only authorized clients can receive and process webhook events securely.

Setting up mTLS is quick and straightforward - see our [step-by-step guide](/using-the-api/webhooks/create-consumer#configure-mutual-tls).

[Read more →](/updates/250227-webhook-mTLS-support)

### Webhooks: introducing transformations

We’ve introduced webhook transformations, allowing you to modify webhook properties before they are sent to your application. You can change the webhook's HTTP method, redirect it to another URL, modify the event schema, or cancel the webhook delivery.

See our [step-by-step guide](/using-the-api/webhooks/create-consumer#transform-webhook-properties) to get started with transformations.

[Read more →](/updates/250129-webhook-transformations)

### Expenses: increased software coverage

We have expanded the platform coverage of our [Expenses](/expenses/overview) solution to include [Zoho Books](/updates/250217-Zoho-Books-Sync-for-Expenses), [FreeAgent](/updates/240622-FreeAgent-Sync-for-Expenses), and [QuickBooks Desktop](/updates/240404-QBD-Sync-for-Expenses) so you can automate the creation of expenses and reimbursable expenses for a wider range of your clients.

### Login service changes: password reset may be required

We've recently upgraded our login and security management service. If you signed up for a Codat account using **email and password** but haven't logged in between **January 13, 2025** and **February 3, 2025**, you may need to reset your password.

[Read more →](/updates/250130-updates-to-identity-service)

### Shopify: company relink required

On **February 1, 2025**, Shopify migrated all app partners to the latest version of the Shopify API. To prevent service disruptions, we issued advice to contact the users of your Shopify app and prompt them to relink their Shopify account after that date.

[Read more →](/updates/250131-shopify-update)

## Changes that apply from April 10, 2025

### Deprecation of Zapier app version 1.0

On **April 10, 2025**, we will deprecate version 1.0 of our Zapier app following the [release of version 2.0](/updates/250108-zapier-integration-v2) that supports our [latest webhook event types](/using-the-api/webhooks/event-types). To ensure the non-stop service of your workflows, update your existing Zaps to use the latest version of our app before **April 10, 2025**.

[Read more →](/updates/250109-deprecation-zapier-integration-v1)

### Deprecation of legacy Hosted Link UI

On **April 10, 2025**, we will deprecate our legacy Hosted Link user interface following the release of our [new Hosted Link UI](/updates/250110-new-hosted-link-ui). If you haven't enabled the new Hosted Link UI by **April 10, 2025**, we will automatically enable it for you, and you won't be able to return to the legacy UI.

[Read more →](/updates/250110-deprecation-legacy-hosted-link-ui)

## Changes planned for July 10, 2025

### NetSuite: Deprecation of foreign currency support in Journal Entries

From **July 10, 2025**, we will start recording NetSuite journal entries in foreign currencies in the company's base `currency` and convert the `netAmount` value.

If your application's logic relies on the original transaction currency, you must update it to avoid any incorrect processing.

[Read more →](/updates/250404-deprecation-netsuite-je-basecurrency)
