---
title: Correspondance des méthodes de paiement
description: "Permettre aux PME de choisir comment effectuer les paiements"
---

import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";

Pour permettre aux utilisateurs de sélectionner le compte bancaire à partir duquel un paiement doit provenir, vous pouvez récupérer une liste de ceux-ci à partir du logiciel de comptabilité. Vous avez également la possibilité d'en créer un nouveau si le compte n'existe pas dans leur plateforme.

Dans certains cas, votre plateforme peut prendre en charge plusieurs méthodes de paiement et chaque méthode peut être mappée à un compte.
Vous devez stocker la correspondance de l'`accountId` pertinent car cela sera nécessaire lors de la création du [billPayment](/usecases/bill-pay/payments).

:::tip Paiements en devises étrangères 💱

Si vous facilitez des paiements en devises étrangères, le paiement doit soit être converti dans la devise du compte, soit vous pouvez créer un nouveau compte avec la devise d'importation.

Le [modèle de création de compte](/accounting-api#/operations/get-create-chartOfAccounts-model) fournit une liste des devises activées de l'entreprise, cela retournera :

- _Une seule valeur_ : devise de base, où seule la devise de base est prise en charge (par exemple, USD pour une entreprise basée aux États-Unis)
- _Plusieurs valeurs_ : reflétant les valeurs sélectionnées/activées par un utilisateur dans le package
- _Aucune valeur_ (tableau vide) : où toutes les devises peuvent être sélectionnées

:::

### Créer un nouveau compte

Si l'entreprise effectue des paiements à partir d'une méthode de paiement ou d'un compte que vous fournissez, vous devez créer un nouveau compte pour représenter cela dans leur logiciel de comptabilité. Cela facilitera les flux de travail de réconciliation des paiements de l'entreprise dans leur logiciel de comptabilité.

#### Compte prépayé

Généralement, si la méthode de paiement est l'une des suivantes :

- Automated clearing house (ACH) ou Real Time Payments (RTP)
- Chèque
- Virement bancaire électronique
- BACS (Bankers' Automated Clearing System)

Vous devez alors [créer un compte bancaire](/accounting-api#/operations/create-bank-account) avec un `accountType` de `Debit` pour représenter le compte à partir duquel les paiements sont effectués :

<Tabs>

<TabItem value="Request URL" label="Request URL">

```http request title="Create Bank Account"
POST https://api.codat.io/companies/{companyId}/connections/{connectionId}/push/bankAccounts
```

</TabItem>

<TabItem value="Request Body" label="Request Body">

```json request title="QuickBooks Example"
{
  "accountName": "Compte débit BillPay",
  "accountType": "Debit",
  "accountNumber": "123456789",
  "currency": "USD",
  "balance": 0,
  "availableBalance": 0,
  "modifiedDate": "2023-04-14T09:25:10Z"
}
```

</TabItem>

</Tabs>

#### Compte de crédit

Si vous fournissez une facilité de crédit pour le paiement, par exemple :

- Carte de crédit commerciale
- BNPL (Achetez maintenant, payez plus tard)

Vous devez alors créer un compte bancaire avec un `accountType` de `Credit` pour représenter le compte à partir duquel les paiements sont effectués :

<Tabs>

<TabItem value="Request URL" label="Request URL">

```http request title="Create Credit Account"
POST https://api.codat.io/companies/{companyId}/connections/{connectionId}/push/bankAccounts
```

</TabItem>

<TabItem value="Request Body" label="Request Body">

```json request title="QuickBooks Example"
{
  "accountName": "Carte de crédit BillPay",
  "accountType": "Credit",
  "accountNumber": "123456789",
  "currency": "USD",
  "balance": 0,
  "availableBalance": 0,
  "modifiedDate": "2023-04-14T09:25:10Z"
}
```

</TabItem>

</Tabs>

### Récupérer une liste de comptes

Si l'entreprise effectue des paiements à partir d'un compte préexistant, vous pouvez récupérer une liste de comptes et leur permettre de mapper les méthodes de paiement à chacun. Par exemple, vous pourriez offrir la possibilité d'effectuer des paiements à partir d'une carte de crédit, auquel cas les `billPayments` de l'entreprise devraient être réconciliés à un compte de crédit.

<Tabs>

<TabItem value="Request URL" label="Request URL">

```http request title="Create Credit Account"
GET https://api.codat.io/companies/{companyId}/connections/{connectionId}/data/bankAccounts
```

</TabItem>

<TabItem value="Response Body" label="Response Body">

```json request title="QuickBooks Example"
{
  "results": [
    {
      "id": "164",
      "accountName": "Carte débit BillPay",
      "accountType": "Debit",
      "nominalCode": "123456788",
      "currency": "USD",
      "balance": 0,
      "availableBalance": 0,
      "modifiedDate": "2023-04-14T09:31:24Z",
      "sourceModifiedDate": "2023-04-14T09:31:23Z",
      "metadata": {
        "isDeleted": false
      }
    },
    {
      "id": "163",
      "accountName": "Carte de crédit BillPay",
      "accountType": "Credit",
      "nominalCode": "123456789",
      "currency": "USD",
      "balance": 0,
      "availableBalance": 0,
      "modifiedDate": "2023-04-14T09:30:03Z",
      "sourceModifiedDate": "2023-04-14T09:30:02Z",
      "metadata": {
        "isDeleted": false
      }
    }
  ]
}
```

</TabItem>

</Tabs>

---

## Lire ensuite

- [Paiements](/usecases/bill-pay/payments) - Réconcilier les paiements avec le logiciel de comptabilité de la PME
