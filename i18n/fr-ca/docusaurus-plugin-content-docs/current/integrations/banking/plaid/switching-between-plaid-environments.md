---
title: "Basculer entre les environnements Plaid"
description: "Différences entre les environnements Plaid Development et Production. Apprenez à basculer entre ces environnements dans le portail Codat ou l'API."
sidebar_label: Environnements Dev et Prod
---

Lorsque vous avez configuré Plaid en vous connectant à leur environnement Sandbox et confirmé que vous pouvez vous connecter et lire les données du sandbox de Plaid, vous pourriez vouloir vous connecter à Plaid Development ou Production pour compléter vos tests.

## À propos de Plaid Development

L'environnement de développement de Plaid vous donne un accès gratuit aux comptes bancaires en direct pour les tests.

L'accès instantané à l'environnement de développement est disponible sur [demande auprès de Plaid](https://dashboard.plaid.com/overview).

## À propos de Plaid Production

L'environnement de production de Plaid vous donne accès aux produits et services en direct auxquels vous êtes abonné. Vous pourriez basculer l'environnement UAT de Codat pour pointer vers l'environnement de production de Plaid pour les tests finaux avant la mise en production.

L'accès à l'environnement de production est disponible sur [demande auprès de Plaid](https://dashboard.plaid.com/overview).

## Basculer entre les environnements

:::caution Création de nouvelles entreprises après le changement d'environnements

Pour éviter les incohérences de données, nous recommandons de créer de nouvelles entreprises lorsque vous changez d'environnements. Toutes les entreprises créées à l'origine dans un autre environnement sont désautorisées et nécessitent une [réautorisation](/integrations/banking/plaid/reauthorize-url-links).
:::

## Basculer d'environnement en utilisant le portail Codat

C'est la manière la plus simple de basculer entre les environnements sandbox, development et production de Plaid.

Dans le portail Codat :

1. Dans la barre de navigation, sélectionnez **Settings > Integrations > Banking**.
2. Trouvez **Plaid** et sélectionnez **Manage** à côté.
3. Dans la liste **Environment**, sélectionnez l'environnement Plaid auquel vous souhaitez vous connecter.
4. Sélectionnez **Save**.

## Basculer d'environnement en utilisant l'API Codat

L'exemple suivant montre comment basculer Codat pour pointer vers Plaid Development au lieu du sandbox depuis l'API.

Obtenez vos identifiants d'environnement existants.

1. Ouvrez l'endpoint <a href="https://api.codat.io/swagger/ui/index.html#/Integrations/Integrations_GetCredentials" target="_blank">`GET /integrations/credentials/{platformKey}`</a>.
2. Remplacez `{platformKey}` par `plaid` et envoyez votre requête pour renvoyer vos identifiants actuels. Enregistrez le JSON, vous en aurez besoin plus tard.

```json
{
  "publicKey": "XXXXXXXXXXXXXXXXXXXXXXXXXXabdd", // Pour les intégrations configurées avant le 20 août 2020
  "clientId": "XXXXXXXXXXXXXXXXXXXX2a6b",
  "clientSecret": "XXXXXXXXXXXXXXXXXXXXXXXXXX1ad1"
}
```

Trouvez le secret pour l'environnement de développement de Plaid.

1. Allez sur <a href="https://plaid.com" target="_blank">https://plaid.com</a> et connectez-vous.
2. Dans la barre de menu supérieure, sélectionnez **Team Settings > Keys** et copiez le secret **Development**.

Mettez à jour vos identifiants d'environnement.

1. Ouvrez l'endpoint <a href="https://api.codat.io/swagger/ui/index#!/Integrations/Integrations_PutCredentials" target="_blank">
   `PUT /integrations/credentials/{platformKey}`</a>.
2. Remplacez `{platformKey}` par `plaid` et envoyez les détails suivants :
   - Les identifiants d'environnement existants que vous avez récupérés plus tôt, en remplaçant le **clientSecret** original par le secret pour l'environnement de développement.
   - Le nom de l'environnement vers lequel vous souhaitez basculer. Dans ce cas, `development`.

```json
{
  "clientId": "XXXXXXXXXXXXXXXXXXXX2a6b",
  "clientSecret": "999a3ac412bf7e3ea93dd1fcb14931",
  "environment": "development" // Les noms d'environnement sont "sandbox", "development" et "production"
}
```

3. Envoyez votre requête.
4. Créez de nouvelles entreprises dans le portail Codat pour les tests.
