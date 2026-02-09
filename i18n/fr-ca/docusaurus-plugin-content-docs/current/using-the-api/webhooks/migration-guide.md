---
title: "Guide de migration pour la configuration webhook de base"
sidebar_label: "Bases de la migration"
description: "Découvrez comment vous pouvez faire la transition de votre configuration webhook Codat existante vers notre nouveau service"
---

## Puis-je migrer?

La plupart des clients peuvent migrer vers notre nouveau service de webhooks sans aucun travail de développement et sans impact sur leur intégration existante.

Cependant, votre configuration pourrait nécessiter des modifications si l'un de ces scénarios s'applique à vous :

- Vous êtes abonné aux notifications par courriel, telles que les courriels de [Synchronisation d'entreprise terminée](/using-the-api/webhooks/legacy/core-rules-types#new-company-synchronized).
- Votre application appelle nos endpoints de journaux webhook, tels que `/rules/alerts`.
- La logique de votre application utilise le paramètre `RuleId`.

Lisez notre [guide de migration avancé](/using-the-api/webhooks/migration-guide-advanced) pour voir quelle action supplémentaire vous devrez entreprendre.

## Comment migrer?

Contactez votre interlocuteur chez Codat afin que nous puissions activer le nouveau service de webhooks pour vous. Dans le cadre de ce processus, nous migrerons vos règles webhook existantes vers le nouveau service. Cela inclut l'URL de notification webhook, le type de règle, l'en-tête d'autorisation et l'en-tête `X-Codat-ClientId`.

Selon la complexité de votre configuration, vous devrez peut-être prendre des mesures supplémentaires pendant la migration. Nous les décrivons plus en détail dans notre [guide de migration avancé](/using-the-api/webhooks/migration-guide-advanced).

---

## Lire la suite

- [Guide de migration avancé](/using-the-api/webhooks/migration-guide-advanced)
- [Types d'événements](/using-the-api/webhooks/event-types)
- [Gérer les consommateurs webhook](/using-the-api/webhooks/create-consumer)
