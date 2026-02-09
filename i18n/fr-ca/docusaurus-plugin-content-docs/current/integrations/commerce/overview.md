---
title: "Aperçu"
description: "Explorez la gamme de logiciels commerce auxquels vous pouvez vous connecter via notre API."
sidebar_label: Commerce
displayed_sidebar: integrationsCommerce
---

import { IntegrationsList } from "@components/Integrations";

Notre suite d'intégrations commerce vous permet de récupérer des données eCommerce, de paiement et de point de vente à jour depuis les logiciels commerce de vos clients PME.

## Logiciels commerce pris en charge

Vous pouvez vous connecter aux logiciels commerce suivants en utilisant nos intégrations :

<IntegrationsList sourceType="commerce" />

## Sandbox Commerce

Pour les tests et l'évaluation, vous pouvez utiliser notre intégration Commerce Sandbox pour explorer les données avec lesquelles vous pouvez travailler. Cela ne nécessite aucune configuration à part l'activation de l'intégration elle-même.

## Configuration des intégrations commerce

La plupart des logiciels commerce vous demandent de vous inscrire auprès d'eux avant de pouvoir accéder aux données de leurs plateformes via Codat. Dans la plupart des cas, l'inscription est gratuite et ne prend que quelques minutes.

Notre documentation détaille les étapes de configuration spécifiques et les exigences pour chaque logiciel commerce pris en charge.

| Plateforme                                                                                             | Inscription requise | Complexité de l'inscription | Programme partenaire marketplace | Restrictions de connexion | Informations supplémentaires                                                                                                                                                                                                                                                                                                                                                                          |
| ---------------------------------------------------------------------------------------------------- | --------------------- | ----------------------- | --------------------------- | ----------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --- |
| [Amazon seller central](/integrations/commerce/amazon-seller-central/commerce-amazon-seller-central) | Oui\*                 | Difficile                    | Oui                         | Non                      | \* Vous pouvez demander les identifiants marketplace de Codat pour éviter l'inscription en envoyant un courriel à solutions@codat.io.                                                                                                                                                                                                                                                                        |
| [BigCommerce](/integrations/commerce/bigcommerce/commerce-bigcommerce)                               | Non                    | Non requise            | Non                          | Non                      | Pour utiliser cette intégration, un marchand doit avoir les portées correctes définies. S'il n'a pas ces portées définies, il doit créer un nouveau compte API de boutique et entrer ses nouveaux identifiants de boutique dans Link (voir [Client PME : Authentifier et connecter vos données commerce](/integrations/commerce/bigcommerce/commerce-bigcommerce-setup#smb-customer-authenticate-and-connect-your-commerce-data)). |
| [Clover](/integrations/commerce/clover/commerce-clover)                                              | Oui                   | Facile                    | Oui                         | Oui                     | Les entreprises qui offrent des services de prêt ne peuvent pas utiliser l'API Clover. <br/>Des portails développeur Sandbox et Production sont disponibles. Le portail Production diffère pour les États-Unis et le Canada et le Royaume-Uni et l'Europe.                                                                                                                                                 |
| [Lightspeed Restaurant (Série K)](/integrations/commerce/lightspeed-k/commerce-lightspeed-k)        | Oui                   | Facile                    | Oui                         | Non                      | L'examen de l'application partenaire prend généralement jusqu'à 7 jours ouvrables.                                                                                                                                                                                                                                                                                                                                |     |
| [Shopify](/integrations/commerce/shopify/commerce-shopify)                                           | Oui\*                 | Difficile                    | Oui                         | Oui                     | \* Les entreprises qui fournissent des prêts de capital ne peuvent pas enregistrer une application publique avec Shopify. <br/> L'approbation des applications publiques peut prendre jusqu'à 2 semaines. Codat offre [des connexions via des applications personnalisées](/integrations/commerce/shopify/commerce-shopify-custom-apps) comme alternative.                                                                                                                        |
| [Square](/integrations/commerce/square/commerce-square)                                              | Oui                   | Facile                    | Oui                         | Non                      |                                                                                                                                                                                                                                                                                                                                                                                                 |
| [Stripe](/integrations/commerce/stripe/commerce-stripe)                                              | Oui                   | Facile                    | Oui                         | Non                      | Les comptes de production doivent être vérifiés par Stripe.                                                                                                                                                                                                                                                                                                                                                 |
| [WooCommerce](/integrations/commerce/woocommerce/commerce-woocommerce)                               | Non                    | Non requise            | Non                          | Non                      |                                                                                                                                                                                                                                                                                                                                                                                                 |
| [Zettle](/integrations/commerce/zettle/commerce-zettle)                                              | Oui                   | Facile                    | Non                          | Non                      | Les API Zettle ne sont actuellement pas prises en charge aux États-Unis.                                                                                                                                                                                                                               |

## Clés de plateforme

Chaque intégration a une clé unique de 4 caractères qui l'identifie dans nos API. Pour référence, une liste de toutes les clés de plateforme d'intégration commerce se trouve ci-dessous

| Nom de plateforme         | Clé de plateforme |
| --------------------- | ------------ |
| Amazon Seller Central | qkdj         |
| BigCommerce           | vqzp         |
| Clover                | fqly         |
| Commerce Sandbox      | aiwb         |
| Lightspeed K          | ldgh         |
| Lightspeed K Sandbox  | lrhd         |
| Lightspeed K Trial    | ltes         |
| Partner Commerce      | lqai         |
| Shopify               | fztf         |
| Square                | zsth         |
| Square Sandbox        | xcwv         |
| Stripe                | exgd         |
| Stripe Test           | yzth         |
| WooCommerce           | ltpp         |
| Zettle                | ugxp         |
