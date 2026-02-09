---
title: "TrueLayer"
description: "En savoir plus sur notre intégration TrueLayer"
sidebar_label: Overview
---

Notre intégration bancaire avec <a  class="external" href="https://truelayer.com/" target="_blank">TrueLayer</a> vous permet de vous connecter de manière sécurisée et de récupérer les données bancaires de vos clients PME dans un format standardisé.

Les données bancaires suivantes sont disponibles via l'intégration :

- [Banking accounts](/banking-api#/schemas/banking-accounts)
- [Banking account balances](/banking-api#/schemas/banking-account-balances)
- [Banking transactions](/banking-api#/schemas/banking-transactions)
- [Banking transaction categories](/banking-api#/schemas/banking-transaction-categories)

Avant de pouvoir configurer l'intégration, vous devez [vous inscrire auprès de TrueLayer](/integrations/banking/truelayer/register-for-truelayer) soit directement, soit par l'intermédiaire de Codat.

:::caution Les données synchronisées depuis TrueLayer peuvent être limitées

Si plus de 5 minutes se sont écoulées depuis qu'une entreprise a été liée à TrueLayer, l'intégration ne récupère que les **données des 90 jours précédents**. Sinon, l'intégration récupère toutes les données.

Nous vous recommandons vivement d'activer [fetch on first link](/core-concepts/data-type-settings#use-fetch-on-first-link) lors de l'utilisation de TrueLayer pour vous assurer que toutes les données demandées sont récupérées dans la période de 5 minutes.

:::
