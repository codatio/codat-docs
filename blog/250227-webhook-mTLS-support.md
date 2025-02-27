---
title: "Webhooks: mTLS support"
date: "2025-02-27"
tags: ["Product", "Update"]
authors: dcoplowe
---

Secure your webhook consumers with two-way authentication.

<!--truncate-->

## What's new?  

We’re excited to introduce **mutual TLS (mTLS) support** for webhook consumers in the portal.  

Mutual TLS is an authentication protocol that ensures both the client and server verify each other’s identities before establishing a secure connection. Unlike standard TLS, which only authenticates the server, mTLS enforces **two-way authentication** using client certificates, offering a **higher level of security** for webhook integrations.

With this update, you can now configure mTLS directly in the portal, ensuring that only authorized clients can receive and process webhook events securely.

## Why is this important?  

- **Enhanced security** – mTLS prevents unauthorized access by requiring both parties to authenticate.  
- **Compliance & trust** – strengthens security measures for businesses handling sensitive financial data.  
- **Reduced risk** – helps prevent man-in-the-middle attacks and unauthorized webhook consumption.  

## Who is this relevant for?  

Any client looking to **bolster security** around webhook integrations, particularly those in **regulated industries** or handling **sensitive financial data**.

## How to get started?  

Setting up mTLS for your webhook consumers is quick and straightforward.
For a **step-by-step guide**, check out our documentation on [configuring mTLS for webhook consumers](/using-the-api/webhooks/create-consumer#configure-mutual-tls-mtls).