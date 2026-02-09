---
title: "Stripe"
sidebar_label: Aperçu
description: "Découvrez notre intégration Stripe"
---

[Stripe](https://stripe.com/) est une plateforme internationale de traitement de paiements en ligne qui gère les paiements et les frais par carte de crédit au nom des petites entreprises.
Utilisez l'API Commerce de Codat avec Stripe pour vous connecter de manière sécurisée, récupérer et afficher les transactions commerce de vos clients.

:::caution Action requise pour les utilisateurs existants

L'intégration utilise maintenant <a className="external" href="https://stripe.com/docs/connect" target="_blank">_Stripe Connect_</a> pour établir des connexions authentifiées entre les entreprises et les sources de données Stripe, plutôt que les _extensions Stripe_.

Si vous êtes un utilisateur existant, vous devez configurer votre intégration Stripe pour utiliser Stripe Connect avant de pouvoir lier d'autres clients (marchands). Les connexions de données existantes ne sont pas affectées jusqu'en 2024, la date prévue de dépréciation des extensions Stripe.

Consultez [Configurer l'intégration Stripe](/integrations/commerce/stripe/commerce-stripe-setup) pour les étapes que vous devez suivre pour mettre à jour votre intégration.
:::

## Intégrations disponibles

Codat fournit deux intégrations Stripe : **Stripe Test** et **Stripe**. Le tableau suivant explique à quoi sert chaque intégration.

| Intégration     | Se connecte à...                                                                                                                                                                                 | Récupère...                                                                                                  |
| --------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- |
| **Stripe Test** | Stripe _mode test_ en utilisant l'_ID client de test_ et la _clé secrète de test_.                                                                                                                           | Des données de test depuis Stripe, disponibles pour Informations d'entreprise, Clients, Litiges, Paiements, Produits et Transactions. |
| **Stripe**      | Stripe _mode direct_ en utilisant l'_ID client en direct_ et la _clé secrète en direct_. Pour activer le mode direct, vous devez d'abord activer votre compte Stripe en fournissant des informations supplémentaires sur votre entreprise. | Des données en direct depuis les comptes Stripe de production.                                                                    |

## Basculer entre les modes test et direct

Vous pouvez basculer entre le _mode test_ et le _mode direct_ dans Stripe en utilisant le bouton bascule en haut à droite du tableau de bord Stripe.

![Test mode switch](/img/old/80db658-stripe-test-mode-switch.png "Le bouton bascule Mode test en haut à droite du tableau de bord développeur Stripe.")

## Configurer l'intégration

Consultez [Configurer votre intégration Stripe](/integrations/commerce/stripe/commerce-stripe-setup) pour apprendre comment configurer et activer l'intégration.
