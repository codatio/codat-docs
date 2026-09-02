---
title: "Sage Bank Feeds: new money.sage.com redirect host for client-hosted auth apps"
date: "2026-09-02"
tags: ["Product", "Update"]
authors: Huweey
---

Sage Banking V2 redirects users to `money.sage.com` at the end of the [Sage Bank Feeds](/integrations/bank-feeds/sage-bank-feeds/) connection flow. If you authenticate users through your own web app and that app checks the redirect host, you need to update it.

<!--truncate-->

## What's changing

On **August 7, 2026**, Sage released its Banking V2 onboarding flow. The `redirectUri` that Sage passes to your web app can now point to `money.sage.com`. The existing `*.sagebankdrive.com` hosts remain in use, so your app will see both.

Codat's own authorization UI needs no change. If you use it, no action is needed.

## Action required

This affects you only if you [authenticate users through your own web app](/integrations/bank-feeds/sage-bank-feeds/sage-bank-feeds-authenticate-users-web-app) for Sage Bank Feeds. Check how your app handles the `redirectUri` query parameter that Sage supplies. If your app validates or hard-codes the redirect host, allow `money.sage.com` alongside the existing hosts, or remove the check and use the `redirectUri` value exactly as supplied, adding only the `state` query parameter.

Your `Content-Security-Policy` header does not need to change. The `https://*.sage.com` entry already covers `money.sage.com`.

## Expected impact if no action is taken

If your app rejects or rewrites redirects to `money.sage.com`, users on Sage Banking V2 will not complete the connection after authenticating with your app. Connections using the existing hosts are unaffected.

Contact [Codat Support](mailto:support@codat.io) if you have any questions.
