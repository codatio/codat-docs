---
title: "2026-01-10: Relaxed validation for removing the last product from a company"
date: "2025-08-08"
tags: ["Deprecation"]
authors: dcoplowe
---

On **January 10, 2026**, we will relax validation on the [Remove product](/platform-api#/operations/remove-product) endpoint to allow the last remaining product to be removed from a company.

<!--truncate-->

When a company is created, a product must be assigned unless default products are configured for the client’s instance. Until now, this requirement also applied after creation: it was not possible to remove the last product from a company.

This validation will now be relaxed. Clients will be able to remove all products from a company while keeping the connection intact.

## Action required

If you want to enforce that companies always have at least one product assigned, update your application logic to maintain this constraint. Codat will no longer enforce it.

## Expected impact if no action is taken

If no action is taken by **January 10, 2026**, companies may end up with no products assigned. Any assumptions in your application that all companies have at least one product may no longer hold true. This could result in unexpected behavior in your application, such as broken UI elements or errors in downstream logic.
