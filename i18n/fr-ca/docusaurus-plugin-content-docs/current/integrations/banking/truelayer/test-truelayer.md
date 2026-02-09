---
title: "Tester votre intégration TrueLayer"
description: "Testez notre intégration TrueLayer en lisant les données de test du compte Demo Bank ou d'une autre source bancaire"
sidebar_label: Testing
---

Vous pouvez tester votre intégration bancaire TrueLayer en récupérant des données de test du compte Demo Bank, ou d'une autre source bancaire. Nous vous recommandons de le faire avant d'envoyer les URL Link à vos clients PME.

Vous devrez :

- Configurer une entreprise test et générer une URL Link
- Se connecter à un compte bancaire
- Vérifier vos données bancaires

Ensuite, vous pourrez récupérer et vérifier les données du compte bancaire connecté.

## Prérequis

- [S'inscrire à TrueLayer](/integrations/banking/truelayer/register-for-truelayer)
- [Configurer votre intégration TrueLayer](/integrations/banking/truelayer/set-up-truelayer-2)

## Configurer une entreprise test et générer une URL Link

Avant de commencer, décidez quel type de source bancaire vous souhaitez tester. Cette procédure utilise la source `Demo Bank`, qui est activée dans les paramètres TrueLayer du portail Codat par défaut. Vous devrez adapter ces étapes si vous choisissez d'utiliser une source bancaire alternative.

Récupérez la `key` de plateforme de la source de données `Demo Bank`, ou d'une source bancaire alternative, puis générez une URL Link.

1. Connectez-vous au [portail Codat](https://app.codat.io).
2. Ouvrez l'endpoint [GET integrations](/platform-api#/operations/list-integrations).
3. Envoyez une requête GET pour retourner une liste de toutes les intégrations.
4. Recherchez `Demo Bank`, ou la source bancaire alternative que vous souhaitez utiliser. Toutes les intégrations bancaires ont un **sourceType** de `Banking`. Par exemple :

```
{
  "key": "demobank_truelayer",
  "logoUrl": "https://static.codat.io/public/platforms/demobank_truelayer.png",
  "name": "Demo Bank",
  "enabled": true,
  "sourceId": "22222222-7778-46cc-8544-952fe34a5e3a",
  "integrationId": "22222222-b2bf-4213-b594-1fb9474cbaf0",
  "sourceType": "Banking"
}
```

Utilisez ces détails pour créer une entreprise ; cela retourne l'URL Link dont vous avez besoin pour les tests.

5. Ouvrez l'endpoint <a href="/platform-api#/operations/create-company" target="blank">`POST /companies`</a>.
6. Entrez un nom pour votre entreprise test et ajoutez la `key` de plateforme pour votre source bancaire choisie :

```
{
"name": "companyname",
"platformType": "demobank_truelayer"
}
```

7. Envoyez votre requête pour créer l'entreprise test et son URL Link correspondante.
   La réponse ressemble à ceci :

```
{
"id": "22222222-9b99-475f-b7e8-4f9a09b9289d",
"name": "companyname",
"platform": "TrueLayer Open Banking",
"redirect": "https://link.codat.io/link/start/22222222-9b99-475f-b7e8-4f9a09b9289d/00dbe10e-8f4a-43c2-935f-45d474576fb7",
"status": "PendingAuth",
"dataConnections": [
  {
    "id": "22222222-8f4a-43c2-935f-45d474576fb7",
    "integrationId": "22222222-b2bf-4213-b594-1fb9474cbaf0",
    "sourceId": "22222222-7778-46cc-8544-952fe34a5e3a",
    "platformName": "TrueLayer Open Banking",
    "linkUrl": "https://link.codat.io/link/start/22222222-9b99-475f-b7e8-4f9a09b9289d/00dbe10e-8f4a-43c2-935f-45d474576fb7",
    "status": "PendingAuth",
    "created": "2020-06-24T11:13:27.6232806Z"
  }
],
"created": "2020-06-24T11:13:25.8263019Z"
}
```

Copiez la réponse JSON à utiliser dans la procédure suivante.

## Se connecter à un compte bancaire

:::info Détails de connexion au compte bancaire

Si vous avez choisi de vous connecter à une source de données bancaires autre que Demo Bank, vous aurez besoin des détails de connexion pour un compte dans cette institution.
:::

**À des fins de test uniquement**, suivez le processus que vos clients utilisent normalement pour autoriser une connexion à leurs comptes bancaires.

1. Dans votre navigateur, entrez la valeur `linkUrl` du JSON que vous avez enregistré aux étapes 6 et 7 de la tâche précédente.
   Le lien vous amène à une page d'accueil TrueLayer.
2. Sélectionnez **ALLOW** pour lier le compte Demo Bank.
   Une page de connexion s'affiche.
3. Pour Demo Bank, entrez les identifiants de test affichés sur la page de connexion.
   Le compte est lié automatiquement et vous retournez à Link.

Vous êtes maintenant prêt à commencer les tests.

## Vérifier vos données bancaires

Vous pouvez vérifier les données du compte Demo Bank de deux façons : dans le portail Codat et via l'API Codat.

Pour effectuer une vérification rapide dans le portail Codat :

1. Dans la barre de navigation, sélectionnez **Companies**, et recherchez l'entreprise test que vous avez créée.
1. Cliquez sur le nom de l'entreprise.
1. Sélectionnez **Data > Banking** dans le menu de navigation latéral.
1. Dans le menu déroulant **Data type**, sélectionnez **New** pour afficher les nouveaux types de données bancaires.
1. Cliquez sur **Banking - Accounts** pour afficher les comptes et les données de transaction associées.

Pour récupérer les mêmes données depuis l'API Codat, vous aurez besoin du JSON de l'étape 6 de "Configurer une entreprise test et générer une URL Link".

Pour récupérer les détails du compte en utilisant l'API Codat :

1.  Ouvrez l'endpoint <a href="/banking-api#/operations/list-banking-transactions" target="blank">`GET /companies/{companyId}/connections/{connectionId}/data/banking-accounts`</a>.
    - Remplacez `{companyId}` par l'`id` de votre entreprise test.
    - Remplacez `{connectionId}` par l'`id` de `dataConnections`.
2.  Envoyez votre requête pour retourner une liste de détails de compte :

```
{
"results": [
  {
    "id": "2cbf9b6063102763ccbe3ea62f1b3e72",
    "name": "Business Current Account",
    "informalName": "Codat",
    "holder": "Codat Ltd",
    "type": "Debit",
    "balance": {
      "available": 459987.97,
      "current": 459987.97,
      "limit": -10000
    },
    "identifiers": {
      "type": "Debit",
      "subtype": "Business",
      "number": "46762629",
      "bankCode": "009911",
      "iban": "GB29 LOYD 4773 2346 7626 29",
      "bic": "LOYDGB21006",
      "maskedAccountNumber": "1111111"
    },
    "currency": "GBP",
    "institution": {
      "id": "lloyds-bank",
      "name": "Lloyds Bank"
    },
    "modifiedDate": "2022-06-21T16:14:11.194Z",
    "sourceModifiedDate": "2022-06-21T16:14:11.194Z"
  }
```

3. Facultatif : Utilisez l'endpoint <a href="https://api.codat.io/swagger/index.html#/BankingTransactions/get_companies__companyId__connections__connectionId__data_banking_transactions" target="blank">`GET
/companies/{companyId}/connections/{connectionId}/data/banking-transactions`</a> de la même manière pour récupérer les transactions pour chaque compte.

Vous êtes maintenant prêt à configurer et connecter vos clients PME. Suivez les méthodes décrites dans [Configurer une entreprise test et générer une URL Link](/integrations/banking/truelayer/test-truelayer#section-set-up-a-test-company-and-generate-a-link-url).
