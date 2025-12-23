---
title: "API mutual TLS"
description: "Learn about the prerequisites for setting up enterprise API mTLS"
hide_table_of_contents: true
---

:::tip Enabling API mTLS

If you wish to use mTLS when talking to our API, speak to your account manager.
:::

Mutual TLS (mTLS) is available to our enterprise clients as a mutual authentication method when calling our API. mTLS ensures that the parties at each end of a network connection are who they claim to be. To confirm this, the parties' private cryptographic keys are verified. The information within their respective TLS certificates provides additional verification.

:::info Additional resources
For more information on mTLS and its core concepts, see:

- [What is mutual authentication?](https://www.cloudflare.com/en-gb/learning/access-management/what-is-mutual-authentication/)
- [What is a cryptographic key?](https://www.cloudflare.com/en-gb/learning/ssl/what-is-a-cryptographic-key/)
- [What is an SSL certificate?](https://www.cloudflare.com/en-gb/learning/ssl/what-is-an-ssl-certificate/)
  :::

Codat can provision our enterprise customers with client certificates to enable mTLS communication with a client or clients. Once this has been issued and enabled on a particular client, all API requests on behalf of the configured client must include the public certificate and an `x-codat-client: GUID` HTTP request header.
