---
title: "CSP nonce support in Link"
date: "2026-04-27"
tags: ["Product", "Update", "Link"]
authors: brettdorrans
---

You can now pass a Content Security Policy (CSP) nonce to our Link SDK, making it simpler to embed Link in apps that enforce strict browser security policies.

<!--truncate-->

## What's new?

The Link SDK now accepts a `nonce` option that it applies to every `<style>` tag it injects into your page. With this in place, your app can use a strict CSP `style-src` directive instead of allowing `unsafe-inline`, which previously was required to render Link's styles.

In your `CodatLink` component:

```jsx
<CodatLink
  companyId={companyId}
  options={{ nonce }}
/>
```

Then in your CSP header:

```
style-src 'self' 'nonce-r4nd0mB4se64Val==' *.codat.io;
```

For full setup steps, including how to generate and surface the nonce, see [CSP nonce](/auth-flow/customize/sdk-customize-code#csp-nonce) in our SDK customization docs.

:::tip Existing setups are unaffected
If you don't pass a `nonce`, Link works exactly as before. You only need to opt in if you want to remove `unsafe-inline` from your CSP.
:::

### Why does this matter?

- **Stronger browser security:** Strict CSPs help protect your customers from cross-site scripting (XSS) attacks. Removing `unsafe-inline` is one of the highest-impact changes you can make to your CSP.
- **Compliance-friendly:** If your security or compliance team has flagged `unsafe-inline` in your CSP, this gives you a clean path to remove it.
- **No styling trade-offs:** Link continues to render with the same look and feel you've configured in the Portal - the nonce only changes how the browser trusts the styles, not the styles themselves.

The same `nonce` option is also available in the Connections and Bank Feeds SDKs, so a single nonce-based CSP can cover all three.

## Who is this relevant for?

This update is for clients who embed Link (or Connections, or Bank Feeds) in an app that sets a Content Security Policy, particularly anyone working to remove `unsafe-inline` from their `style-src` directive.

## How to get started?

The `nonce` option is available now. To start using it:

1. Configure your server to generate a unique, cryptographically random nonce for each request.
2. Expose the nonce to the browser, for example via a `<meta>` tag.
3. Pass the value to the SDK through `options.nonce`.
4. Update your CSP header to swap `style-src 'unsafe-inline'` for `style-src 'nonce-<value>'`.

The full migration guide is in our [SDK customization documentation](/auth-flow/customize/sdk-customize-code#csp-nonce).
