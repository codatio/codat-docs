---
title: "Activer l'accès aux données bancaires supplémentaires"
description: "Apprenez comment activer l'accès proxy aux données bancaires supplémentaires pour l'intégration Plaid ou TrueLayer"
createdAt: "2021-12-03T10:18:01.507Z"
updatedAt: "2022-12-21T06:58:20.372Z"
---

Par défaut, l'accès proxy aux types de données bancaires supplémentaires de Plaid et TrueLayer est désactivé. Vous pouvez activer l'accès proxy pour l'intégration Plaid ou TrueLayer dans le portail Codat.

Avant de commencer, assurez-vous que le rôle de développeur ou d'administrateur vous est attribué. L'intégration Plaid ou TrueLayer doit être activée avant que vous puissiez activer l'accès proxy.

Dans le portail Codat :

1. Dans la barre de navigation, sélectionnez **Settings > Integrations > Banking**.

2. Cliquez sur **Manage** à côté de l'intégration Plaid ou TrueLayer.

3. Pour activer l'accès proxy à Plaid :
   1. Sous _Proxy access to additional Plaid data types_, réglez le bouton bascule sur **ON**.
      La zone **Filter by products** s'affiche.

   2. (Facultatif) Vous pouvez restreindre l'accès proxy à certains types de données Plaid uniquement. Sous **Filter by products**, entrez une liste séparée par des virgules des types de données Plaid (produits) auxquels vous souhaitez activer l'accès. Valeurs acceptées : `assets`, `deposit_switch`, `identity`, `income_verification`, `investments`, `liabilities`, `payment_initiation` et `transfer`. Pour activer tous ces types de données, laissez la zone vide.

   3. Cliquez sur **Save**.

4. Pour activer l'accès proxy à TrueLayer :
   1. (Facultatif) Sous _Proxy access to additional TrueLayer data types_, réglez le bouton bascule sur **ON**.
      La zone **Additional scopes** s'affiche.

   2. (Facultatif) Entrez une liste séparée par des virgules de types de données (portées) à activer en plus des types de données par défaut. Valeurs acceptées : `direct_debits` et `standing_orders`. Laissez vide pour utiliser les valeurs par défaut.

      **REMARQUE :** L'accès proxy aux types de données (portées) suivants sera activé par défaut : `info`, `accounts`, `transactions`, `cards`, `balance` et `offline_access`. L'accès proxy est bloqué pour les endpoints TrueLayer qui sont déjà mappés au modèle de données de Codat.

   3. Cliquez sur **Save**.

L'accès proxy aux types de données bancaires sélectionnés est maintenant activé, bien que vos clients doivent toujours autoriser votre accès supplémentaire. Pour lancer le processus d'autorisation, renvoyez l'URL Link à vos clients. Pour plus d'informations, consultez [Link](/auth-flow/overview).

:::note Ajout ou suppression de types de données

Vous pouvez ajouter ou supprimer des types de données bancaires supplémentaires en répétant les étapes ci-dessus. Vos clients devront réautoriser votre accès dans Link, vous devrez donc leur renvoyer l'URL Link pour l'intégration.

Si vous ajoutez de nouveaux types de données, nous vous recommandons également de mettre à jour le message _Data access consent_ dans Link. Ce message doit faire référence aux types de données proxy ajoutés, par exemple, les prélèvements automatiques. Les clients verront ce message lorsqu'ils autorisent l'accès à leurs données bancaires dans le cadre du flux Link. Voir [Utiliser Link pour l'authentification des PME](/auth-flow/overview).
:::
