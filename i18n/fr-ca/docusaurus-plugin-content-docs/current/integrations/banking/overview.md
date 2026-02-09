---
title: "Aperçu"
description: "Connectez-vous aux données bancaires de vos clients PME via nos fournisseurs partenaires"
sidebar_label: Banking
displayed_sidebar: integrationsBanking
---

import { IntegrationsList } from "@components/Integrations";

Nos intégrations avec <a class="external" href="https://plaid.com/" target="_blank">Plaid</a> et <a  class="external" href="https://truelayer.com/" target="_blank">TrueLayer</a> vous permettent de récupérer les données de compte et de transaction à jour des banques de vos clients PME.

<IntegrationsList sourceType="banking" />

## Bac à sable bancaire

Pour les tests et l'évaluation, vous pouvez utiliser notre intégration Banking Sandbox pour explorer les données avec lesquelles vous pouvez travailler. Cela ne nécessite aucune configuration à part l'activation de l'intégration elle-même.

## Accéder à des données bancaires supplémentaires via proxy

Vous pouvez [accéder à des types de données bancaires supplémentaires](/integrations/banking/proxy-access-banking-data) via un proxy.

## Configurer une intégration bancaire

Vous pouvez choisir d'activer :

- [Plaid](/integrations/banking/plaid/banking-plaid)
- [TrueLayer](/integrations/banking/truelayer/banking-truelayer)

Vous devrez vous inscrire auprès de votre fournisseur choisi avant de pouvoir accéder aux données bancaires de leur plateforme via notre intégration.

## Intégrations bancaires dans le flux d'autorisation

Vous ne devriez activer qu'une seule des intégrations bancaires à la fois. Cela garantit une utilisation optimale de Link, car chaque intégration est représentée différemment dans le flux d'authentification. La combinaison de plusieurs approches peut confondre les utilisateurs et conduire à des taux d'achèvement d'authentification réduits.

- L'intégration **Plaid** apparaît présélectionnée pour l'utilisateur, et ils peuvent sélectionner le bon compte bancaire une fois qu'ils continuent à se lier à Plaid.
- L'intégration **TrueLayer** apparaît dans le flux d'authentification sous forme d'un ensemble de banques qu'elle prend en charge, prêtes pour que l'utilisateur puisse choisir.

## Clés de plateforme

Chaque intégration a une clé unique de 4 caractères qui l'identifie dans nos API. Pour référence, une liste de toutes les clés de plateforme d'intégration bancaire se trouve ci-dessous :

| Nom de plateforme | Clé de plateforme |
| ----------------- | ----------------- |
| Plaid             | suuo              |
| TrueLayer         | upvr              |
