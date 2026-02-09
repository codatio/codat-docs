---
title: "Service webhook chez Codat"
sidebar_label: "Aperçu"
hide_table_of_contents: true
description: "Introduction à la solution de messagerie webhook robuste et rationalisée de Codat"
---

![Webhooks chez Codat](/img/updates/240306-webhooks-announcement.png)

Les _webhooks_ sont un moyen automatisé pour une application de vous notifier lorsqu'un événement spécifique se produit. À la base, il s'agit d'une requête `POST` avec une charge utile qui est envoyée à une URL unique d'un endpoint que vous déterminez.

Nous appelons les endpoints HTTP que vous configurez pour vous abonner aux événements de Codat des _consommateurs webhook_. Une réponse `2XX` (code d'état `200-299`) du consommateur indique que le message webhook a été reçu avec succès.

Avec notre service webhook, vous pouvez tirer parti des avantages suivants :

- Nouvelles tentatives automatiques des livraisons webhook échouées selon notre [calendrier de nouvelles tentatives](/using-the-api/webhooks/troubleshooting#retry-policy)
- Journalisation détaillée des événements avec un aperçu complet des tentatives de livraison et des charges utiles
- Rendez votre solution robuste avec une relecture d'événements facile pour retraiter les événements passés ou réessayer les événements échoués
- Fonctionnalité d'événements simulés pour simplifier vos tests et développement

:::note Vous utilisez nos webhooks hérités?

Si vous avez utilisé nos webhooks avant le 6 mars 2024, nous recommandons de les migrer vers le nouveau service.
Découvrez comment vous pouvez migrer dans notre [guide de migration](/using-the-api/webhooks/migration-guide).

Vous pouvez consulter la documentation de l'ancien service webhook ici :

- [Voir les types de règles](/using-the-api/webhooks/legacy/core-rules-types)
- [Créer ou mettre à jour des règles](/using-the-api/webhooks/legacy/core-rules-create)
- [Écouter les événements](/using-the-api/webhooks/legacy/core-rules-webhooks)
- [Sécurité des webhooks](/using-the-api/webhooks/legacy/core-rules-webhooksecurity)
- [Recevoir des événements webhook par courriels](/using-the-api/webhooks/legacy/receive-webhooks-as-email)
  :::

---

## Lire la suite

- [Types d'événements](/using-the-api/webhooks/event-types)
- [Gérer les consommateurs webhook](/using-the-api/webhooks/create-consumer)
- [Guide de migration](/using-the-api/webhooks/migration-guide)
- [Dépannage](/using-the-api/webhooks/troubleshooting)
