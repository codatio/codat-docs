---
title: "Codat's SDKs now support CSP"
date: "2026-04-27"
tags: ["Product", "Update", "Link"]
authors: brettdorrans
---

You can now pass a Content Security Policy (CSP) nonce to our Link, Connections, and Bank Feeds SDKs.

<!--truncate-->

## What's new?

We've made it simpler to embed our SDKs in apps that enforce strict browser security policies.

Our Link SDK now accept a `nonce` option that it applies to every `<style>` tag it injects into your page. This means your app can use a strict CSP `style-src` directive instead of allowing `unsafe-inline`, which previously was required to render the SDK's styles. This option is also available in the Connections and Bank Feeds SDKs, so a single nonce-based CSP can cover all three.

This change results in the following benefits:

- **Stronger browser security:** strict CSPs help protect your customers from cross-site scripting (XSS) attacks. Removing `unsafe-inline` is one of the most impactful changes you can make to your CSP.
- **Compliance-friendly:** if your security or compliance team has previously flagged `unsafe-inline` in your CSP, this change gives you a clean path to remove it.
- **No styling trade-offs:** the SDK continues to render with the same look and feel you've configured in the Portal. The nonce only changes how the browser trusts the styles, not the styles themselves.

:::tip Existing setups are unaffected
If you don't pass a `nonce` option, the SDKs continue to work as before. You only need to apply the change if you want to remove `unsafe-inline` from your CSP.
:::

## Who is this relevant for?

This update is for clients who embed Codat's SDKs (Link, Connections, or Bank Feeds) in an app that sets a Content Security Policy, especially those working to remove `unsafe-inline` from their `style-src` directive.

## How to get started?

The `nonce` option is available immediately. To start using it, follow these steps:

1. Configure your server to generate a unique cryptographically random nonce for each request.
2. Expose the nonce to the browser (for example, using a `<meta>` tag).
3. Pass the value to the SDK through `options.nonce`:
   ```jsx
   <CodatLink companyId={companyId} options={{ nonce }} />
   ```
4. Update your CSP header to swap `style-src 'unsafe-inline'` for `style-src 'nonce-<value>'`.
   ```
   style-src 'self' 'nonce-r4nd0mB4se64Val==' *.codat.io;
   ```

The full migration guide and detailed configuration steps are available in [CSP nonce](/auth-flow/customize/sdk-customize-code#csp-nonce) in our SDK documentation.
