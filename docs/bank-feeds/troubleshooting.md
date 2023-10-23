---
title: "Troubleshooting and FAQ"
description: "Commonly asked questions and troubleshooting advice for Bank Feeds API"
displayed_sidebar: bankfeeds
image: "/img/banners/social/bankfeeds.png"
---

### How do Codat's account types match up with Open Banking?

Codat categorizes bank accounts into credit or debit types for the purposes of standardization. In the table below, you can see how Open Banking's `AccountSubType` matches with Codat's `accountType`.

| Open Banking   | Codat | 
| ---------------- | ------------------- |
| `ChargeCard`     | `Credit`            |
| `CreditCard`     | `Credit`            |
| `CurrentAccount` | `Debit`             |
| `EMoney`         | `Debit`             |
| `Loan`           | `Credit`            |
| `Mortgage`       | `Credit`            |
| `PrePaidCard`    | `Debit`             |
| `Savings`        | `Debit`             |