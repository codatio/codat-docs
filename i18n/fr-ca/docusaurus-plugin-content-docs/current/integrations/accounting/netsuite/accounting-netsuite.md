---
title: "Oracle NetSuite"
description: "En savoir plus sur notre intégration Oracle NetSuite."
---

Vous pouvez synchroniser les données comptables avec Oracle NetSuite en utilisant notre intégration Oracle NetSuite.

[Oracle NetSuite](https://www.netsuite.com/portal/products/erp/financial-management/finance-accounting.shtml) est un service en ligne qui permet aux entreprises de gérer tous les processus métier clés dans un seul système.

Pour plus de détails sur les types de données et opérations pris en charge, consultez [Référence de l'intégration Oracle NetSuite](/integrations/accounting/netsuite/oracle-netsuite-integration-reference).

## Configurer l'intégration

Consultez [Configurer l'intégration Oracle NetSuite](/integrations/accounting/netsuite/accounting-netsuite-setup) pour apprendre comment configurer et activer l'intégration.

## Synchronisation de volumes de données très importants

Vous pouvez rencontrer des performances médiocres lors de la synchronisation de plus d'un million d'enregistrements depuis Oracle NetSuite en utilisant l'intégration. Les synchronisations de cette taille peuvent prendre très longtemps à compléter (jusqu'à 60 heures, par exemple) et sont sujettes à des erreurs et des délais d'attente.

Pour améliorer les performances des synchronisations importantes, nous recommandons d'utiliser le paramètre `syncFromUtc` pour réduire la fenêtre de temps pour laquelle les données sont synchronisées. Pour plus d'informations sur ce paramètre, consultez [Paramètres de synchronisation supplémentaires](https://codat.zendesk.com/hc/en-gb/articles/360018829477-Additional-sync-settings) dans la base de connaissances Codat.

Pour améliorer les performances de synchronisation, appliquez un temps `syncFromUtc` plus récent, tel qu'il y a 1 an, aux types de données suivants :

- Invoices
- JournalEntries
- Payments

Vous pouvez également appliquer un temps `syncFromUtc` aux BillCreditNotes et CreditNotes, si vous avez une grande quantité de ces données.

Le paramètre `syncFromUtc` ne peut être appliqué que via l'API Codat et à un sous-ensemble de types de données.

:::caution Contactez NetSuite avant d'ajuster les paramètres de synchronisation

Si vous rencontrez des performances médiocres dans Oracle NetSuite pendant les opérations quotidiennes, nous recommandons de contacter le support NetSuite avant d'ajuster les paramètres de synchronisation.

:::
