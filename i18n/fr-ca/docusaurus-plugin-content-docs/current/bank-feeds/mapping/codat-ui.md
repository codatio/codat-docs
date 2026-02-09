---
title: "Utiliser notre interface pour mapper les comptes"
description: "Utilisez notre interface de mappage préconstruite pour fournir le mappage de comptes dans votre application avec un effort de développement minimal"
sidebar_label: Utiliser notre UI
displayed_sidebar: bankfeeds
---

import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";
import { IntegrationsList } from "@components/Integrations";
import { bankfeedsInternalMappingIntegrations } from "@components/Integrations/integrations";
import Loom from "@components/Loom";

Offrez rapidement une expérience de mappage exceptionnelle à vos clients avec un effort de développement minimal en utilisant notre interface utilisateur de mappage préconstruite. Elle est conçue pour répondre à toutes les exigences tierces et peut être personnalisée pour correspondre à votre logo et à votre palette de couleurs principale.

## Mapper un compte

Dirigez votre client vers l'`linkUrl` renvoyée dans la réponse [Create a connection](/bank-feeds/create-account#create-a-connection). Après qu'ils aient autorisé votre accès à leur logiciel de comptabilité, ils seront dirigés vers l'interface utilisateur de mappage de Codat (comme on le voit sur la capture d'écran ci-dessous) où ils mapperont leur compte source vers un compte cible existant ou nouveau dans leur logiciel de comptabilité.

![Codat-bank-feeds_account-mapping-ui](/img/bank-feeds/mappingUi.png "Interface utilisateur de mappage de comptes fournie par Codat")

Les comptes cibles listés dans l'interface utilisateur sont filtrés en fonction des paramètres du compte source. Par exemple, si le compte source est une carte de crédit en devise USD, seuls les comptes de crédit USD apparaîtront dans la liste déroulante "Options cibles".

Lorsqu'un utilisateur a mappé et lié son compte avec succès, il sera redirigé vers votre application en fonction des [paramètres de redirection](/auth-flow/customize/set-up-redirects) que vous avez configurés.

Vous pouvez également interroger le point de terminaison [List bank feed account mappings](/bank-feeds-api#/operations/get-bank-account-mapping) pour vérifier si un compte a été mappé avec succès.

<Tabs>

<TabItem value="HTTP" label="HTTP">

#### Requête

```http
GET /companies/{companyId}/connections/{connectionId}/bankFeedAccounts/mapping
```

#### Réponse

Exemple de corps de réponse de mappage Xero :

```json
[
  {
    "sourceAccountId": "39aaec5d-f3c1-4d15-a8d8-73c27d7fdef8",
    "targetAccountId": "a0aa9c9c-8a76-44a8-9991-7ae8103a40d7",
    "feedStartDate": "2023-09-12T00:00:00",
    "status": "connected",
    "targetAccountOptions": [
      {
        "name": "SavingsBankPro",
        "id": "a0aa9c9c-8a76-44a8-9991-7ae8103a40d7",
        "accountNumber": "4243"
      },
      {
        "name": "WaveCrestFinance",
        "id": "57ab0173-3381-4be8-afd5-dfa48b3b0bb6",
        "accountNumber": "77"
      },
      {
        "name": "ZenithBanking",
        "id": "195e6138-79ac-4ad4-8724-b7c9a1f90f9f",
        "accountNumber": "1234"
      },
      {
        "name": "CosmicCreditUnion",
        "id": "2254eaa8-ddf0-4b2f-ba52-efb3bf7f338f",
        "accountNumber": "5670"
      },
      {
        "name": "VertexCapital",
        "id": "0d62ba1a-b62a-4d4e-b3a2-2fccb0345523",
        "accountNumber": "5678"
      },
      {
        "name": "VertexCapital#Gold",
        "id": "aa635648-99cf-4ab0-bfba-2a1128f7b521",
        "accountNumber": "5679"
      }
    ],
    "sourceAccountName": "source-account-1",
    "sourceAccountNumber": "4243",
    "sourceBalance": 100,
    "sourceCurrency": "GBP",
    "targetAccountName": "SavingsBankPro",
    "targetAccountNumber": "4243"
  },
  {
    "sourceAccountId": "e7569bca-85a1-4b9f-9006-219a486e9cc3",
    "status": "pending",
    "targetAccountOptions": [
      {
        "name": "SavingsBankPro",
        "id": "a0aa9c9c-8a76-44a8-9991-7ae8103a40d7",
        "accountNumber": "4243"
      },
      {
        "name": "WaveCrestFinance",
        "id": "57ab0173-3381-4be8-afd5-dfa48b3b0bb6",
        "accountNumber": "77"
      },
      {
        "name": "ZenithBanking",
        "id": "195e6138-79ac-4ad4-8724-b7c9a1f90f9f",
        "accountNumber": "1234"
      },
      {
        "name": "CosmicCreditUnion",
        "id": "2254eaa8-ddf0-4b2f-ba52-efb3bf7f338f",
        "accountNumber": "5670"
      },
      {
        "name": "VertexCapital",
        "id": "0d62ba1a-b62a-4d4e-b3a2-2fccb0345523",
        "accountNumber": "5678"
      },
      {
        "name": "VertexCapital#Gold",
        "id": "aa635648-99cf-4ab0-bfba-2a1128f7b521",
        "accountNumber": "5679"
      }
    ],
    "sourceAccountName": "source-account-2",
    "sourceAccountNumber": "4243",
    "sourceBalance": 100,
    "sourceCurrency": "GBP"
  }
]
```

</TabItem >

</Tabs>

## Gérer les connexions

Pour permettre à vos utilisateurs PME de visualiser et gérer leurs connexions de flux bancaires existantes, vous pouvez les diriger vers une nouvelle `linkUrl` générée. Lorsqu'ils ouvrent cette URL et revisitent l'interface utilisateur de mappage de comptes, leurs connexions existantes seront affichées dans le panneau **Gérer vos comptes connectés**.

![xero-bank-feeds_account-mapping-ui-manage-feed-connections](/img/bank-feeds/xero-bank-feeds/xero-bank-feeds_account-mapping-ui-manage-feed-connections.png "Interface utilisateur de mappage de comptes fournie par Codat montrant plusieurs comptes connectés dans le panneau inférieur.")

Pour déconnecter un compte bancaire source, l'utilisateur PME doit passer le curseur sur l'icône de statut **connecté** et sélectionner **Déconnecter**. Cela désactive immédiatement la connexion du flux bancaire. Le compte déconnecté s'affichera comme une option dans le menu déroulant "Compte bancaire source" lorsque l'utilisateur actualisera ensuite la page de mappage.

## Intégrations prises en charge

<IntegrationsList integrations={bankfeedsInternalMappingIntegrations} />

---

## Lire ensuite

- [Créer des transactions bancaires dans le logiciel de comptabilité](/bank-feeds/pushing-transactions)
