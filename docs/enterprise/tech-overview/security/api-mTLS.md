---
title: "API mutual TLS"
description: "Learn about the prerequisites for setting up enterprise API mTLS"
---

:::tip Enabling API mTLS

If you wish to use mTLS when talking to our API but don't already have it enabled, please speak with your Account Manager first.
:::

## Introduction 
Mutual TLS, or mTLS for short, is a method for [mutual authentication](https://www.cloudflare.com/learning/access-management/what-is-mutual-authentication/)🔗. mTLS ensures that the parties at each end of a network connection are who they claim to be by verifying that they both have the correct private [key](https://www.cloudflare.com/learning/ssl/what-is-a-cryptographic-key/)🔗. The information within their respective [TLS certificates](https://www.cloudflare.com/learning/ssl/what-is-an-ssl-certificate/)🔗 provides additional verification.

## Setup
Codat is able to provision customers with client certificates to enable mTLS communication with a client or clients. Once this has been issued and enabled on a particular client, all API requests on behalf of the configured client must include the public certificate and an `x-codat-client: GUID` HTTP request header.