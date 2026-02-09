---
title: "Types d'événements webhook"
sidebar_label: "Types d'événements"
description: "Découvrez les types d'événements qui sont disponibles pour votre consommation"
---

Codat prend en charge les types d'événements suivants que vous pouvez [consommer](/using-the-api/webhooks/create-consumer) en utilisant le portail Codat ou notre API. Utilisez-les pour répondre aux changements dans vos entreprises et leurs données.

Naviguez vers **Surveillance > Webhooks > Événements > Catalogue d'événements** pour afficher cette liste et la charge utile de chaque événement directement dans le [portail](https://app.codat.io/monitor/events).

:::caution Vous utilisez toujours nos règles héritées?

Consultez notre guide de migration pour [passer aux nouveaux types d'événements](/using-the-api/webhooks/migrating-to-new-event-types).

:::

### Types d'événements à l'échelle de la plateforme

| Type d'événement                                                                             | Description de l'événement                                                                                                                                                                                  |
| -------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [`company.created`](/platform-api#/webhooks/company.created/post)                            | Appelé lorsqu'une entreprise est créée dans Codat.                                                                                                                                                         |
| [`company.deleted`](/platform-api#/webhooks/company.deleted/post)                            | Appelé lorsqu'une entreprise est supprimée dans Codat.                                                                                                                                                     |
| [`connection.created`](/platform-api#/webhooks/connection.created/post)                      | Appelé lorsqu'une connexion est créée par la PME.                                                                                                                                                          |
| [`connection.connected`](/platform-api#/webhooks/connection.connected/post)                  | Appelé lorsqu'une connexion est liée avec succès par la PME.                                                                                                                                               |
| [`connection.disconnected`](/platform-api#/webhooks/connection.disconnected/post)            | Appelé lorsqu'une connexion est déconnectée soit en étant dissociée soit en étant désautorisée par la PME ou l'intégration.                                                                                |
| [`connection.reconnected`](/platform-api#/webhooks/connection.reconnected/post)              | Appelé lorsqu'une connexion est reconnectée après avoir été déconnectée.                                                                                                                                   |
| [`connection.failed`](/platform-api#/webhooks/connection.failed/post)                        | Appelé lorsqu'une connexion a échoué à se lier à la PME.                                                                                                                                                   |
| [`connection.deleted`](/platform-api#/webhooks/connection.deleted/post)                      | Appelé lorsqu'une connexion est supprimée.                                                                                                                                                                 |
| [`read.completed`](/platform-api#/webhooks/read.completed/post)                              | Indique que la lecture des types de données pour une solution est terminée.                                                                                                                                |
| [`read.completed.initial`](/platform-api#/webhooks/read.completed.initial/post)              | Indique que la lecture initiale des types de données pour une solution est terminée.                                                                                                                       |
| [`{dataType}.write.successful`](/platform-api#/webhooks/dataType-.write.successful/post)     | Indique que le type de données spécifié a été créé, mis à jour, supprimé avec succès ou qu'une pièce jointe a été téléversée dans le logiciel de comptabilité.                                            |
| [`{dataType}.write.unsuccessful`](/platform-api#/webhooks/dataType-.write.unsuccessful/post) | Indique qu'une tentative de créer, mettre à jour, supprimer un type de données ou téléverser une pièce jointe vers un type de données dans le logiciel de comptabilité a échoué.                          |
| [`client.rateLimit.reached`](/platform-api#/webhooks/client.rateLimit.reached/post)          | Appelé lorsque le nombre de requêtes du client vers l'API de Codat dépasse le quota alloué.                                                                                                                |
| [`client.rateLimit.reset`](/platform-api#/webhooks/client.rateLimit.reset/post)              | Appelé lorsque le quota de limite de taux du client est réinitialisé, permettant des requêtes supplémentaires vers l'API de Codat.                                                                         |

### Types d'événements spécifiques aux solutions

| Solution       | Type d'événement                                                                                                                         | Description de l'événement                                                                                                              |
| -------------- | ---------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| Bank Feeds     | [`bankFeeds.sourceAccount.connected`](/bank-feeds-api#/webhooks/bankFeeds.sourceAccount.connected/post)                                  | Indique qu'un [compte source de flux bancaire](/bank-feeds/overview#what-is-bank-feeds-api) a changé à un statut de connecté.          |
| Bank Feeds     | [`bankFeeds.sourceAccount.disconnected`](/bank-feeds-api#/webhooks/bankFeeds.sourceAccount.disconnected/post)                            | Indique qu'un [compte source de flux bancaire](/bank-feeds/overview#what-is-bank-feeds-api) a changé à un statut de déconnecté.        |
| Expenses       | [`expenses.sync.successful`](/sync-for-expenses-api#/webhooks/expenses.sync.successful/post)                                             | Appelé lorsqu'une synchronisation de dépenses se termine avec succès sans aucune erreur ou avertissement.                              |
| Expenses       | [`expenses.sync.unsuccessful`](/sync-for-expenses-api#/webhooks/expenses.sync.unsuccessful/post)                                         | Appelé lorsqu'une synchronisation de dépenses échoue à se terminer avec succès, entraînant au moins une erreur ou un avertissement.    |
| Lending        | [`report.categorizedBankStatement.generate.successful`](/lending-api#/webhooks/report.categorizedBankStatement.generate.successful/post) | Appelé lorsqu'un [relevé bancaire catégorisé](/lending/features/bank-statements-overview) est généré avec succès pour une entreprise.  |
| Lending        | [`AccountCategoriesUpdated`](/lending-api#/webhooks/Account-categories-updated/post)                                                     | Appelé lorsque Codat AI a [catégorisé les comptes](/lending/features/financial-statements-overview) pour une entreprise.                |
| Lending        | [`reports.creditModel.generate.successful`](/lending-api#/webhooks/reports.creditModel.generate.successful/post)                         | Appelé lorsque le [rapport de modèle de crédit](/lending/premium-products/credit-model-overview) est généré avec succès pour une entreprise. |
| Lending        | [`reports.creditModel.generate.unsuccessful`](/lending-api#/webhooks/reports.creditModel.generate.unsuccessful/post)                     | Appelé lorsque le [rapport de modèle de crédit](/lending/premium-products/credit-model-overview) échoue à se générer pour une entreprise.   |
| Spend Insights | [`reports.spendAnalysis.generate.successful`](/spend-insights-api#/webhooks/reports.spendAnalysis.generate.successful/post)              | Appelé lorsqu'un rapport d'analyse de dépenses est généré avec succès.                                                                 |
| Spend Insights | [`reports.spendAnalysis.generate.unsuccessful`](/spend-insights-api#/webhooks/reports.spendAnalysis.generate.unsuccessful/post)          | Appelé lorsqu'un rapport d'analyse de dépenses n'a pas pu être généré pour une entreprise.                                             |

---

## Lire la suite

- Voir comment vous pouvez [consommer les webhooks et gérer les consommateurs](/using-the-api/webhooks/create-consumer) en utilisant le portail ou notre API
