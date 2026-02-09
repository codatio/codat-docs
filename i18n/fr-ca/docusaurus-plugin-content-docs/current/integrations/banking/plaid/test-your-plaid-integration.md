---
title: "Tester votre intégration Plaid"
description: "Testez notre intégration Plaid en lisant les données du sandbox de Plaid vers une entreprise de test"
sidebar_label: Tests
---

Lorsque vous avez [configuré et activé Plaid](/integrations/banking/plaid/banking-plaid-setup), vous pouvez tester votre intégration avec le sandbox de Plaid. Vous devrez :

- Configurer une entreprise de test.
- Générer une URL Link pour connecter votre entreprise de test au sandbox de Plaid.
- Connecter un compte de test.

## Configurer une entreprise de test

1. Allez sur le <a href="https://app.codat.io/login" target="_blank">portail Codat</a> et connectez-vous.
2. Allez à **Companies**.
3. Sur le côté droit de la page, sélectionnez **Add new company**.
4. Entrez un nom pour votre entreprise de test et sélectionnez **Add**.
5. Gardez la page **Companies** ouverte dans un onglet de navigateur séparé. Vous en aurez besoin pour l'étape suivante du processus.

## Générer une URL Link

Pour connecter votre entreprise de test au sandbox de Plaid, vous pouvez soit générer une URL Link depuis le portail Codat, soit via l'API.

## Générer une URL Link depuis le portail Codat

1. Sur la page **Companies**, faites défiler jusqu'à trouver l'entreprise de test que vous avez créée plus tôt.
2. À côté du nom de l'entreprise, sélectionnez **Request data**.
   La boîte de dialogue **Links URL...** est affichée.
3. En bas de la boîte de dialogue, sélectionnez **Create**.
4. Copiez l'URL générée et allez directement à [Se connecter au sandbox de Plaid](/integrations/banking/plaid/test-your-plaid-integration#section-connect-to-plaids-sandbox).

## Générer une URL Link via l'API

1. Ouvrez l'endpoint <a href="/platform-api#/operations/list-connections" target="_blank">`POST /companies/{companyId}/connections`</a>.
2. Remplacez `{companyId}` par l'ID de l'entreprise de test que vous venez de configurer.
3. Dans le corps de la requête, entrez la clé de plateforme `plaid`
4. Envoyez votre requête.
   Codat génère un lien unique vers le sandbox de Plaid. Par exemple :

```json
{
  "id": "33f13646-e3f0-458a-b6ee-f5c1f38c1fdb",
  "integrationId": "580146ed-7556-4f92-8bf9-7344667763ec",
  "sourceId": "46ee0089-dc88-405a-9667-9fb3d9976f19",
  "platformName": "Plaid",
  "linkUrl": "https://link.codat.io/link/start/b8673b25-4444-0000-9906-0fecbfe4d2e3/33f13646-e3f0-458a-b6ee-f5c1f38c1fdb",
  "status": "PendingAuth"
}
```

:::note Liaison des clients dans Plaid

Lorsque vous passerez à un environnement de production, vous fournirez une URL de lien à chaque client. L'URL de lien est le début du processus d'autorisation qui vous permet de récupérer des données du compte bancaire de votre client.
:::

## Se connecter au sandbox de Plaid

**Pour les tests uniquement**, vous suivrez le processus que vos clients utilisent normalement pour autoriser une connexion à leur compte bancaire.

1. Copiez la valeur **linkUrl** dans votre navigateur, ce qui vous amène au sandbox de Plaid.

<img src="/img/old/e6adfea-Plaid_landing_page.png" />

Un message au bas de l'écran confirme que vous êtes en mode sandbox.

2. Sélectionnez **Continue**.
   Une boîte de dialogue affiche une liste de comptes bancaires disponibles avec des données d'exemple pour les tests. C'est le site de lien sécurisé de Plaid.
3. Sélectionnez le type de compte bancaire qui vous intéresse, ou si ce n'est pas listé, recherchez-le d'abord.
4. Sélectionnez **Continue to** _Bank Name_.
   Vous serez soit dirigé pour vous connecter avec des [identifiants de test d'exemple](https://plaid.com/docs/sandbox/test-credentials/#sandbox-simple-test-credentials), soit pour vous authentifier pour le sandbox.
5. Entrez les identifiants de test ou sélectionnez **Grant Access**.
6. Attendez qu'une page de confirmation soit affichée.

Vous êtes maintenant prêt à commencer les tests.

## Vérifier vos données bancaires

Vous pouvez vérifier les données du compte que vous avez lié au sandbox de Plaid de deux manières : dans le portail Codat et via l'API Codat.

Pour effectuer une vérification rapide depuis le portail Codat :

1. Dans la barre de navigation, sélectionnez **Companies**, et recherchez l'entreprise de test que vous avez créée.
2. Cliquez sur le nom de l'entreprise.
3. Sélectionnez **Banking API** dans le menu de navigation latéral.
4. Dans le menu déroulant **Data type**, sélectionnez **New** pour afficher les nouveaux types de données bancaires.
5. Cliquez sur **Banking - Accounts** pour afficher les comptes et les données de transaction associées.

Pour récupérer les détails du compte depuis l'API, utilisez l'un des endpoints suivants :

[`GET /companies/{companyId}/connections/{connectionId}/data/banking-accounts`](/banking-api#/operations/list-banking-accounts)

[`GET /companies/{companyId}/connections/{connectionId}/data/banking-transactions`](/banking-api#/operations/list-banking-transactions)
