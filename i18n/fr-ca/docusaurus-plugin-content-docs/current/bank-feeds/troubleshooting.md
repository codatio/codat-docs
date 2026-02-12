---
title: "Dépannage et FAQ"
sidebar_label: Résoudre les problèmes
description: "Questions fréquemment posées et conseils de dépannage pour la solution Bank Feeds"
displayed_sidebar: bankfeeds
image: "/fr-ca/img/banners/social/bankfeeds.png"
---

### Comment les types de comptes de Codat correspondent-ils à Open Banking ?

Codat catégorise les comptes bancaires en types crédit ou débit à des fins de standardisation. Dans le tableau ci-dessous, vous pouvez voir comment le `AccountSubType` d'Open Banking correspond au `accountType` de Codat.

| Open Banking     | Codat    |
| ---------------- | -------- |
| `ChargeCard`     | `Credit` |
| `CreditCard`     | `Credit` |
| `CurrentAccount` | `Debit`  |
| `EMoney`         | `Debit`  |
| `Loan`           | `Credit` |
| `Mortgage`       | `Credit` |
| `PrePaidCard`    | `Debit`  |
| `Savings`        | `Debit`  |
