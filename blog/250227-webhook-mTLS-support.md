---
title: "Webhooks: mTLS support"
date: "2025-03-05"
tags: ["Product", "Update", "Webhooks"]
authors: dcoplowe
---

You can now secure your webhook consumers with two-way authentication in the Portal.

<!--truncate-->

## What's new?

We’re excited to introduce **mutual TLS (mTLS) support** for webhook consumers in the Codat Portal.

Mutual TLS is an authentication protocol that ensures both the client and server verify each other’s identities before establishing a secure connection. Unlike standard TLS, which only authenticates the server, mTLS enforces **two-way authentication** using client certificates. This offers the following benefits:

- **Enhanced security**: mTLS prevents unauthorized access by requiring both parties to authenticate.
- **Compliance & trust**: mTLS strengthens security measures for businesses handling sensitive financial data.
- **Reduced risk**: mTLS helps prevent man-in-the-middle attacks and unauthorized webhook consumption.

With this update, you can now configure mTLS directly in the [Portal](https://app.codat.io), ensuring that only authorized clients can receive and process webhook events securely.

## Who is this relevant for?

Any client looking to increase security around webhook integrations, particularly those in **regulated industries** or handling **sensitive financial data**.

## How to get started?

Setting up mTLS for your webhook consumers is quick and straightforward. For a **step-by-step guide**, check out our documentation on [configuring mTLS for webhook consumers](/using-the-api/webhooks/create-consumer#configure-mutual-tls).
