---
title: "Récupérer les données d'une entreprise"
sidebar_label: "Récupérer les données"
description: "Apprenez à gérer les entreprises, leurs connexions et leurs données via l'API"
---

Une fois que vous avez créé une entreprise, vous pouvez commencer à récupérer les données.

## Lecture des données

Une fois l'entreprise intégrée, vous pouvez commencer à récupérer ses données financières.

### Mettre en file d'attente une nouvelle synchronisation de données (Optionnel)

S'il y a des ensembles de données qui ne sont pas aussi à jour que vous le souhaitez, vous pouvez mettre en file d'attente une synchronisation de données comme décrit [ici](/using-the-api/queueing-data-syncs).

Une fois la synchronisation mise en file d'attente, vous pouvez interroger l'endpoint [`GET /companies/{companyId}/dataStatus`](/platform-api#/operations/get-company-data-status) (comme décrit ci-dessus) pour [surveiller la progression de la synchronisation](/core-concepts/status).

:::note Configuration du calendrier de synchronisation

Vous pouvez configurer un calendrier de synchronisation dans le portail Codat pour maintenir chaque type de données à un niveau de fraîcheur acceptable. Pour plus d'informations, veuillez vous référer à votre documentation d'intégration ou soumettre un ticket auprès de notre équipe de soutien via le [formulaire de demande de soutien](https://codat.zendesk.com/hc/en-gb/requests/new).
:::

## Demander un type de données spécifique

Codat expose des endpoints qui vous permettent d'interroger facilement chacun des types de données pris en charge.

Par exemple, lors de l'interrogation des factures, vous pouvez utiliser l'endpoint [`GET /companies/{companyId}/data/invoices`](/accounting-api#/operations/list-invoices), avec les paramètres de chaîne de requête suivants :

- `pageSize` -- la taille de page que vous souhaitez récupérer
- `page` -- le numéro de page que vous souhaitez récupérer
- `orderBy` -- la propriété par laquelle vous souhaitez ordonner la réponse
- `query` -- tout filtre que vous souhaitez appliquer aux données retournées (voir [Requêtes](/using-the-api/querying) pour les détails)

---

## À lire ensuite

- [Gestion des entreprises](/using-the-api/querying)
