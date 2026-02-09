---
title: Enregistrer et rapprocher les paiements de factures fournisseurs
sidebar_label: Payer les factures
description: "Enregistrer et rapprocher les paiements de factures fournisseurs dans le logiciel comptable de la PME"
image: "/img/banners/social/payables.png"
---

import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";

## Aperçu

Finalement, votre client PME effectuera un paiement depuis votre application, que vous devrez ensuite enregistrer et rapprocher dans le logiciel comptable de la PME. Un **paiement de facture fournisseur** représente une allocation de fonds dans l'un des comptes fournisseurs (CF) de votre client.

Nous avons conçu le **Bill Pay asynchrone** pour gérer une large gamme de scénarios de paiement de factures, par exemple :

- Un paiement effectué sur une facture, p. ex. un paiement par carte de crédit, par chèque ou en espèces
- Une allocation d'un avoir fournisseur à une facture ou un remboursement
- Un paiement de facture effectué directement sur un compte CF, p. ex. un trop-perçu ou un paiement anticipé

Nous avons résumé les approches de paiement et de rapprochement des factures disponibles dans le diagramme suivant :

![Un diagramme de toutes les options de paiement de factures prises en charge par Bill Pay](/img/payables/payables-payment-type.png)

## Gérer les comptes de paiement

Vos clients PME peuvent avoir plusieurs comptes bancaires qu'ils peuvent utiliser pour payer une facture. Dans votre application, permettez-leur de sélectionner ou de créer le compte à partir duquel le paiement doit être effectué.

<details>
<summary><b>Paiements en devise étrangère</b></summary>

Pour faciliter les paiements en devise étrangère, vous pouvez :

- Convertir le paiement dans la devise du compte.
- Créer un nouveau compte dans la devise du paiement.

Utilisez le point de terminaison [Obtenir le modèle de création/mise à jour de compte bancaire](/sync-for-payables-api#/operations/get-create-chartOfAccounts-model) pour voir la liste des devises actuellement activées pour l'entreprise. Il peut retourner :

- _Valeur unique_ : la devise de base du compte sur les plateformes qui ne prennent en charge que la devise de base
- _Valeurs multiples_ : plusieurs devises activées par l'utilisateur PME dans son logiciel comptable
- _Aucune valeur_ : un tableau vide pour les plateformes où toutes les devises peuvent être sélectionnées

</details>

### Récupérer les comptes

Si votre client PME effectue des paiements à partir d'un compte bancaire existant, récupérez la liste de ses comptes et permettez-lui d'associer les méthodes de paiement à chacun d'entre eux.

Utilisez le point de terminaison [Lister les comptes](/sync-for-payables-api#/operations/list-accounts) et filtrez par `isBankAccount=true` pour retourner une liste de comptes bancaires valides.

<Tabs groupId="language">

<TabItem value="nodejs" label="TypeScript">

```javascript
const accountsListResponse = await payablesClient.accounts.list({
  companyId: companyId,
  query: "isBankAccount=true",
});
```

</TabItem>

<TabItem value="python" label="Python">

```python
accounts_list_request = operations.ListAccountsRequest(
    company_id=company_id,
    query='isBankAccount=true'
)

accounts_list_response = payables_client.accounts.list(accounts_list_request)
```

</TabItem>

<TabItem value="csharp" label="C#">

```csharp
var accountsListResponse = await payablesClient.Accounts.ListAsync(new ListAccountsRequest() {
    CompanyId = companyId,
    Query = "isBankAccount=true"
});
```

</TabItem>

<TabItem value="go" label="Go">

```go
ctx := context.Background()
accountsListResponse, err := payablesClient.Accounts.List(ctx, operations.ListAccountsRequest{
    CompanyID: companyID,
    Query: "isBankAccount=true"
})
```

</TabItem>

</Tabs>

### Créer un compte

Si le client PME prévoit effectuer des paiements à partir d'une nouvelle méthode de paiement ou d'un nouveau compte que vous fournissez, créez le nouveau compte dans son logiciel comptable. Le compte contiendra ses transactions, facilitant ainsi les flux de rapprochement des paiements de la PME.

Vous pouvez également utiliser les points de terminaison [Obtenir le modèle de création de compte bancaire](/sync-for-payables-api#/operations/get-create-bankAccounts-model) ou [Obtenir le modèle de création de compte](/sync-for-payables-api#/operations/get-create-chartOfAccounts-model) au préalable pour vérifier les exigences spécifiques à l'intégration pour la création de compte, ou [en savoir plus](/using-the-api/push) sur la création de données avec Codat.

<details>
<summary><b>Créer un compte dans Sage Intacct</b></summary>

Pour Sage Intacct, utilisez le point de terminaison [Créer un compte](/sync-for-payables-api#/operations/create-account) pour refléter ce compte dans le logiciel comptable du client.

<Tabs groupId="language">

<TabItem value="nodejs" label="TypeScript">

```javascript
const accountCreateResponse = await payablesClient.accounts.create({
	accountPrototype: {
    name: "BillPay Debit Account"
		fullyQualifiedName: "BillPay Debit Account",
    fullyQualifiedCategory: "Asset.Current",
		nominalCode: "610",
		currency: "USD",
    status: AccountStatus.Active,
    type: AccountType.Asset,
		currentBalance: 0,
	},
  companyId: companyId,
	connectionId: connectionId
  });
```

</TabItem>

<TabItem value="python" label="Python">

```python
account_create_request = operations.CreateAccountRequest(
	account_prototype=shared.AccountPrototype(
		name='BillPay Debit Account',
		fully_qualified_name='BillPay Debit Account',
    fully_qualified_category='Asset.Current',
    nominal_code='610',
		currency='USD',
    status=shared.AccountStatus.ACTIVE,
    type=shared.AccountType.ASSET,
		current_balance=0,
	),
  company_id=company_id,
	connection_id=connection_id
)

account_create_response = payables_client.accounts.create(account_create_request)
```

</TabItem>

<TabItem value="csharp" label="C#">

```csharp
var accountCreateResponse = await payablesClient.Accounts.CreateAsync(new CreateAccountRequest() {
  AccountPrototype = new AccountPrototype(){
    Name = "BillPay Debit Account",
		FullyQualifiedName = "BillPay Debit Account",
    FullyQualifiedCategory = "Asset.Current",
    NominalCode = "610",
		Currency = "USD",
    Status = AccountStatus.Active,
    Type = AccountType.Asset,
		CurrentBalance = 0,
	},
  CompanyId = companyId,
	ConnectionId = connectionId
});
```

</TabItem>

<TabItem value="go" label="Go">

```go
ctx := context.Background()
accountCreateResponse, err := payablesClient.Accounts.Create(ctx, operations.CreateAccountRequest{
	AccountPrototype: &shared.AccountPrototype{
    Name: syncforpayables.String("BillPay Debit Account"),
		FullyQualifiedName: syncforpayables.String("BillPay Debit Account"),
    FullyQualifiedCategory: syncforpayables.String("Asset.Current"),
    NominalCode: syncforpayables.String("610"),
		Currency: syncforpayables.String("USD"),
    Status: shared.AccountStatusActive.ToPointer(),
    Type: shared.AccountTypeAsset.ToPointer(),
		CurrentBalance: 0
	},
    CompanyID: companyID,
    ConnectionID: connectionID,
})
```

</TabItem>

</Tabs>

</details>

<details>
<summary><b>Créer un compte dans d'autres intégrations</b></summary>

Pour créer un nouveau compte bancaire dans MYOB, Xero, QuickBooks Online ou NetSuite, utilisez le point de terminaison [Créer un compte bancaire](/sync-for-payables-api#/operations/create-bank-account).

Xero ne prend pas en charge la création de comptes de crédit.

<Tabs groupId="language">

<TabItem value="nodejs" label="TypeScript">

```javascript
const accountCreateResponse = await payablesClient.accounts.create({
  account: {
    accountName: "BillPay Debit Account",
    accountType: AccountType.Debit,
    accountNumber: "80088008",
    currency: "USD",
    balance: 0,
    availableBalance: 0,
  },
  companyId: companyId,
  connectionId: connectionId,
});
```

</TabItem>

<TabItem value="python" label="Python">

```python
account_create_request = operations.CreateAccountsRequest(
	account=shared.Account(
		account_name="BillPay Debit Account",
		account_type=shared.AccountType.DEBIT,
		account_number="80088008",
		currency="USD",
		balance=0,
		available_balance=0,
	)
    company_id=company_id,
	connection_id=connection_id
)

account_create_response = payables_client.accounts.create(account_create_request)
```

</TabItem>

<TabItem value="csharp" label="C#">

```csharp
var accountCreateResponse = await payablesClient.Accounts.CreateAsync(new CreateAccountRequest() {
	Account=new Account(){
		AccountName = "BillPay Debit Account",
		AccountType = AccountType.Debit,
		AccountNumber = "80088008",
		Currency = "USD",
		Balance = 0,
		AvailableBalance = 0,
	}
    CompanyId = companyId,
	ConnectionId = connectionId
});
```

</TabItem>

<TabItem value="go" label="Go">

```go
ctx := context.Background()
accountsResponse, err := payablesClient.Accounts.Create(ctx, operations.CreateAccountRequest{
	Account: &shared.Account{
		AccountName: syncforpayables.String("BillPay Debit Account"),
		AccountType: AccountType.Debit,
		AccountNumber: "80088008",
		Currency: syncforpayables.String("USD"),
		Balance: 0,
		AvailableBalance: 0,
	},
    CompanyID: companyID,
    ConnectionID: connectionID,
})
```

</TabItem>

</Tabs>

</details>

#### Choisir un type de compte

Utilisez les valeurs `accountType` suivantes qui correspondent aux méthodes de paiement que vous fournissez.

| **Méthode de paiement**                                                       | **Type de compte** |
| ----------------------------------------------------------------------------- | ------------------ |
| Réseaux Automated Clearing House (ACH) ou Real-Time Payments (RTP)            | `Debit`            |
| Paiements par chèque                                                          | `Debit`            |
| Virement bancaire électronique                                                | `Debit`            |
| BACS (Bankers' Automated Clearing System)                                     | `Debit`            |
| Carte de crédit commerciale/d'entreprise                                      | `Credit`           |
| BNPL (Achetez maintenant, payez plus tard)                                    | `Credit`           |

## Paiement d'une seule facture

Si votre client PME effectue un paiement pour régler une **seule facture en totalité**, utilisez le point de terminaison [Créer des paiements de factures](/sync-for-payables-api#/operations/create-bill-payment) et incluez les propriétés suivantes dans la requête :

| Propriété     | Détails                                                                                                                                                                                                                                                            |
| ------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `totalAmount` | Valeur **toujours positive** qui indique le montant de la facture qui a été payé                                                                                                                                                                                   |
| `lines`       | Tableau contenant un élément avec les éléments suivants : <ul><li>`amount` égal au `totalAmount` du paiement</li><li>tableau `links` qui doit contenir un élément</li></ul>                                                                                        |
| `links`       | Tableau contenant un élément avec les éléments suivants : <ul><li>`type` de lien, dans ce cas une `Bill` (facture fournisseur)</li><li>`id` de la facture qui a été payée</li><li>`amount` avec la valeur de **`-totalAmount`** pour indiquer que le montant total est alloué à la facture</li></ul> |

En cas de **paiements partiels**, utilisez le même point de terminaison et ajustez les valeurs de `amount` en fonction du montant du paiement partiel.

:::tip Conseils pour le paiement de factures

Lors du paiement d'une facture, vérifiez les éléments suivants :

- `supplierRef.id` est le même `id` que le `supplierRef.id` de la facture.
- `accountRef.id` est le compte de paiement indiqué lors du mappage.
- `totalAmount` est identique au `amountDue` de la facture.
- `date` est la date à laquelle le paiement est effectué au fournisseur.

:::

Par exemple, examinez la facture mappée depuis Xero dans le menu déroulant ci-dessous et voyez comment elle peut être payée en utilisant le point de terminaison [Créer des paiements de factures](/sync-for-payables-api#/operations/create-bill-payment) dans les extraits de code suivants.

<details>
<summary><b>Facture mappée depuis Xero</b></summary>

```json
{
  "id": "59978bef-af2f-4a7e-9728-4997597c0980",
  "reference": "RPT445-1",
  "supplierRef": {
    "id": "dec56ceb-65e9-43b3-ac98-7fe09eb37e31",
    "supplierName": "PowerDirect"
  },
  "purchaseOrderRefs": [],
  "issueDate": "2023-02-09T00:00:00",
  "dueDate": "2023-02-19T00:00:00",
  "currency": "GBP",
  "currencyRate": 1,
  "lineItems": [
    {
      "description": "Monthly electricity",
      "unitAmount": 129.38,
      "quantity": 1,
      "discountAmount": 0,
      "subTotal": 129.38,
      "taxAmount": 6.47,
      "totalAmount": 135.85,
      "discountPercentage": 0,
      "accountRef": {
        "id": "d50842c3-af67-4233-b8c9-df3180f5b7bd"
      },
      "taxRateRef": {
        "id": "RRINPUT",
        "name": "5% (VAT on Expenses)",
        "effectiveTaxRate": 5
      },
      "trackingCategoryRefs": [],
      "isDirectCost": false
    }
  ],
  "withholdingTax": [],
  "status": "Open",
  "subTotal": 129.38,
  "taxAmount": 6.47,
  "totalAmount": 135.85,
  "amountDue": 135.85,
  "modifiedDate": "2023-04-17T14:51:35Z",
  "sourceModifiedDate": "2021-01-03T21:56:20",
  "paymentAllocations": [],
  "metadata": {
    "isDeleted": false
  }
}
```

</details>

<Tabs groupId="language">

<TabItem value="nodejs" label="TypeScript">

```javascript
const billPaymentResponse = await payablesClient.billPayments.create({
  billPayment: {
    supplierRef: {
      id: "dec56ceb-65e9-43b3-ac98-7fe09eb37e31",
    },
    accountRef: {
      id: "bd9e85e0-0478-433d-ae9f-0b3c4f04bfe4",
    },
    totalAmount: 135.85,
    currency: "GBP",
    currencyRate: 1,
    date: "2023-04-17T00:00:00",
    lines: [
      {
        amount: 135.85,
        links: [
          {
            id: "59978bef-af2f-4a7e-9728-4997597c0980",
            type: BillPaymentLineLinkType.Bill,
            amount: -135.85,
            currencyRate: 1,
          },
        ],
      },
    ],
  },
  companyId: companyId,
  connectionId: connectionId,
});
```

</TabItem>

<TabItem value="python" label="Python">

```python
bill_payment_request = operations.CreateBillPaymentRequest(
    bill_payment=shared.BillPayment(
      supplier_ref=shared.SupplierRef(
        id='dec56ceb-65e9-43b3-ac98-7fe09eb37e31',
      ),
      account_ref=shared.AccountRef(
        id='bd9e85e0-0478-433d-ae9f-0b3c4f04bfe4'
      ),
      total_amount=Decimal('135.85'),
      currency='GBP',
      currency_rate=1,
      date='2023-04-17T00:00:00',
      lines=[
        shared.BillPaymentLine(
          amount=Decimal('135.85'),
          links=[
            shared.BillPaymentLineLink(
              id='59978bef-af2f-4a7e-9728-4997597c0980',
              type=shared.BillPaymentLineLinkType.BILL,
              amount=Decimal('-135.85'),
              currency_rate=Decimal('1'),
            )
          ],
        ),
      ]
    ),
    company_id=company_id,
    connection_id=connection_id,
)

bill_payment_response = payables_client.bill_payments.create(bill_payment_request)
```

</TabItem>

<TabItem value="csharp" label="C#">

```csharp
var billPaymentResponse = await payablesClient.BillPayments.CreateAsync(new() {
  BillPayment = new BillPayment() {
    SupplierRef = new SupplierRef() {
        Id = "dec56ceb-65e9-43b3-ac98-7fe09eb37e31",
    },
    AccountRef = new AccountRef() {
      Id = "bd9e85e0-0478-433d-ae9f-0b3c4f04bfe4"
    },
    TotalAmount = 135.85M,
    Currency = "USD",
    CurrencyRate = 1M,
    Date = "2023-04-17T00:00:00",
    Lines = new List<BillPaymentLine>() {
      new BillPaymentLine() {
        Amount = 135.85M,
        Links = new List<BillPaymentLineLink>() {
          new BillPaymentLineLink() {
            Id = "59978bef-af2f-4a7e-9728-4997597c0980",
            Type = BillPaymentLineLinkType.Bill,
            Amount = -135.85M,
            CurrencyRate = 1M
          },
        },
      },
    },
  },
  CompanyId = companyId,
  ConnectionId = connectionId,
});
```

</TabItem>

<TabItem value="go" label="Go">

```go
ctx := context.Background()
billPaymentResponse, err := payablesClient.BillPayments.Create(ctx,
  operations.CreateBillPaymentRequest{
    BillPayment: &shared.BillPayment{
      SupplierRef: &shared.SupplierRef{
          ID: "dec56ceb-65e9-43b3-ac98-7fe09eb37e31",
      },
      AccountRef: &shared.AccountRef{
        ID: "bd9e85e0-0478-433d-ae9f-0b3c4f04bfe4"
      },
      TotalAmount: types.MustNewDecimalFromString("135.85"),
      Currency: syncforpayables.String("USD"),
      CurrencyRate: types.MustNewDecimalFromString("1"),
      Date: "2023-04-17T00:00:00",
      Lines: []shared.BillPaymentLine{
        shared.BillPaymentLine{
          Amount: types.MustNewDecimalFromString("135.85"),
          Links: []shared.BillPaymentLineLink{
            shared.BillPaymentLineLink{
              Id: "59978bef-af2f-4a7e-9728-4997597c0980",
              Type: shared.BillPaymentLineLinkTypeBill,
              Amount = types.MustNewDecimalFromString("-135.85"),
              CurrencyRate = types.MustNewDecimalFromString("1")
            },
          },
        },
      },
    },
    CompanyID: companyId,
    ConnectionID: connectionID
})
```

</TabItem>

</Tabs>

## Paiement de factures multiples

Votre client PME peut vouloir payer plusieurs factures d'un même fournisseur en un seul paiement. Utilisez le point de terminaison [Créer des paiements de factures](/sync-for-payables-api#/operations/create-bill-payment) pour ce faire et incluez un tableau `lines` avec plusieurs éléments pour chaque facture et son montant respectif.

<details>
<summary><b>Exemples spécifiques aux intégrations</b></summary>

<Tabs>

<TabItem value="Xero" label="Xero">

```json
{
  "supplierRef": {
    "id": "dec56ceb-65e9-43b3-ac98-7fe09eb37e31"
  },
  "accountRef": {
    "id": "bd9e85e0-0478-433d-ae9f-0b3c4f04bfe4"
  },
  "totalAmount": 244.45,
  "currency": "GBP",
  "currencyRate": 1,
  "date": "2023-04-17T00:00:00",
  "lines": [
    {
      "amount": 135.85,
      "links": [
        {
          "type": "Bill",
          "id": "59978bef-af2f-4a7e-9728-4997597c0980",
          "amount": -135.85,
          "currencyRate": 1
        }
      ]
    },
    {
      "amount": 108.6,
      "links": [
        {
          "type": "Bill",
          "id": "2175c381-d323-4e20-8c94-7680ea7f85d3",
          "amount": -108.6,
          "currencyRate": 1
        }
      ]
    }
  ]
}
```

</TabItem>

<TabItem value="QuickBooks Online" label="QuickBooks Online">

```json
{
  "supplierRef": {
    "id": "77",
    "supplierName": "AtoB"
  },
  "accountRef": {
    "id": "122"
  },
  "totalAmount": 2500,
  "currency": "USD",
  "currencyRate": 1,
  "date": "2023-04-17T00:00:00",
  "lines": [
    {
      "amount": 2500,
      "links": [
        {
          "type": "Bill",
          "id": "302",
          "amount": -1200,
          "currencyRate": 1
        },
        {
          "type": "Bill",
          "id": "303",
          "amount": -1300,
          "currencyRate": 1
        }
      ]
    }
  ],
  "reference": "1"
}
```

</TabItem>

<TabItem value="NetSuite" label="NetSuite">

:::info Considérations

Si les emplacements sont définis comme obligatoires dans le compte NetSuite de l'entreprise, la `reference` est requise et doit être un `id` des [catégories de suivi](/sync-for-payables-api#/operations/list-tracking-categories) préfixé par location.

:::

```json
{
  "supplierRef": {
    "id": "727",
    "supplierName": "Vendor -.B"
  },
  "totalAmount": 2,
  "accountRef": {
    "id": "854"
  },
  "currency": "GBP",
  "currencyRate": 1,
  "date": "2023-04-18T00:00:00",
  "lines": [
    {
      "amount": 2,
      "links": [
        {
          "type": "Bill",
          "id": "288274",
          "amount": -1,
          "currencyRate": 1
        },
        {
          "type": "Bill",
          "id": "287594",
          "amount": -1,
          "currencyRate": 1
        }
      ]
    }
  ],
  "reference": "location-5"
}
```

</TabItem>

<TabItem value="Sage Intacct" label="Sage Intacct">

:::info Considérations

Sage Intacct utilise un `paymentMethodRef`. Vous pouvez récupérer les méthodes de paiement d'une entreprise en utilisant le point de terminaison [Obtenir le modèle de création/mise à jour de facture](/sync-for-payables-api#/operations/get-create-update-bills-model).

:::

```json
{
  "id": "26491",
  "supplierRef": {
    "id": "15",
    "supplierName": "HC Equipment Repair"
  },
  "accountRef": {
    "id": "84"
  },
  "totalAmount": 30000,
  "currency": "USD",
  "date": "2023-04-19T00:00:00",
  "note": "",
  "paymentMethodRef": {
    "id": "6"
  },
  "lines": [
    {
      "amount": 15000,
      "links": [
        {
          "type": "Bill",
          "id": "26492",
          "amount": -15000
        }
      ]
    },
    {
      "amount": 15000,
      "links": [
        {
          "type": "Bill",
          "id": "26493",
          "amount": -15000
        }
      ]
    }
  ]
}
```

</TabItem>

<TabItem value="MYOB" label="MYOB">

```json
{
  "supplierRef": {
    "id": "0749b9a9-4fd1-4d5e-ae5f-7de3887c933a"
  },
  "accountRef": {
    "id": "161904cc-c2be-4cd7-afbd-ccd304473216"
  },
  "totalAmount": 105,
  "currency": "AUD",
  "date": "2023-04-19T00:00:00",
  "note": "Payment; Sydney Coaches & Buses (YAHOO MAIL)",
  "lines": [
    {
      "amount": 5,
      "links": [
        {
          "type": "Bill",
          "id": "cd5029ae-5548-4bd0-ae9e-bb572d40349d",
          "amount": -5,
          "currencyRate": 1
        }
      ]
    },
    {
      "amount": 100,
      "links": [
        {
          "type": "Bill",
          "id": "edaff6be-43c2-4f1d-9511-11605ae310f0",
          "amount": -100,
          "currencyRate": 1
        }
      ]
    }
  ]
}
```

</TabItem>

</Tabs>

</details>

## Paiement groupé de factures

Dans certains logiciels comptables (par exemple, Xero), votre client PME peut effectuer un paiement groupé. Cela lui permet de payer plusieurs factures de plusieurs fournisseurs en un seul paiement.

Pour ce faire avec le Bill Pay asynchrone, utilisez le point de terminaison [Créer des paiements de factures](/sync-for-payables-api#/operations/create-bill-payment) et laissez le paramètre `supplierRef` vide.

<Tabs groupId="language">

<TabItem value="nodejs" label="TypeScript">

```javascript
const billPaymentResponse = await payablesClient.billPayments.create({
  billPayment: {
    accountRef: {
      id: "d96ffd74-2394-4666-81c4-eebb76e51e21",
    },
    totalAmount: 6,
    date: "2022-09-06T00:00:00",
    lines: [
      {
        amount: 1,
        links: [
          {
            id: "0394819c-b784-454d-991c-c4711b9aca12",
            type: BillPaymentLineLinkType.Bill,
            amount: -1,
          },
        ],
      },
      {
        amount: 2,
        links: [
          {
            id: "428e3e38-e8fb-4c56-91b5-dd09dc2e6505",
            type: BillPaymentLineLinkType.Bill,
            amount: -2,
          },
        ],
      },
      {
        amount: 3,
        links: [
          {
            id: "76129542-2b2f-482f-b2b3-e612d9c1ba08",
            type: BillPaymentLineLinkType.Bill,
            amount: -3,
          },
        ],
      },
    ],
  },
  companyId: companyId,
  connectionId: connectionId,
});
```

</TabItem>

<TabItem value="python" label="Python">

```python
bill_payment_request = operations.CreateBillPaymentRequest(
    bill_payment=shared.BillPayment(
      account_ref=shared.AccountRef(
        id='d96ffd74-2394-4666-81c4-eebb76e51e21'
      ),
      total_amount=Decimal('6'),
      date='2022-09-06T00:00:00',
      lines=[
        shared.BillPaymentLine(
          amount=Decimal('1'),
          links=[
            shared.BillPaymentLineLink(
              id='0394819c-b784-454d-991c-c4711b9aca12',
              type=shared.BillPaymentLineLinkType.BILL,
              amount=Decimal('-1'),
            )
          ],
        ),
        shared.BillPaymentLine(
          amount=Decimal('2'),
          links=[
            shared.BillPaymentLineLink(
              id='428e3e38-e8fb-4c56-91b5-dd09dc2e6505',
              type=shared.BillPaymentLineLinkType.BILL,
              amount=Decimal('-2'),
            )
          ],
        ),
        shared.BillPaymentLine(
          amount=Decimal('3'),
          links=[
            shared.BillPaymentLineLink(
              id='76129542-2b2f-482f-b2b3-e612d9c1ba08',
              type=shared.BillPaymentLineLinkType.BILL,
              amount=Decimal('-3'),
            )
          ],
        ),
      ]
    ),
    company_id=company_id,
    connection_id=connection_id,
)

bill_payment_response = payables_client.bill_payments.create(bill_payment_request)
```

</TabItem>

<TabItem value="csharp" label="C#">

```csharp
var billPaymentResponse = await payablesClient.BillPayments.CreateAsync(new() {
  BillPayment = new BillPayment() {
      AccountRef = new AccountRef() {
        Id = "d96ffd74-2394-4666-81c4-eebb76e51e21"
      },
      TotalAmount = 6M,
      Date = "2022-09-06T00:00:00",
      Lines = new List<BillPaymentLine>() {
          new BillPaymentLine() {
              Amount = 1M,
              Links = new List<BillPaymentLineLink>() {
                  new BillPaymentLineLink() {
                    Id = "0394819c-b784-454d-991c-c4711b9aca12",
                    Type = BillPaymentLineLinkType.Bill,
                    Amount = -1M,
                  },
              },
          },
          new BillPaymentLine() {
              Amount = 2M,
              Links = new List<BillPaymentLineLink>() {
                  new BillPaymentLineLink() {
                    Id = "428e3e38-e8fb-4c56-91b5-dd09dc2e6505",
                    Type = BillPaymentLineLinkType.Bill,
                    Amount = -2M,
                  },
              },
          },
          new BillPaymentLine() {
              Amount = 3M,
              Links = new List<BillPaymentLineLink>() {
                  new BillPaymentLineLink() {
                    Id = "76129542-2b2f-482f-b2b3-e612d9c1ba08",
                    Type = BillPaymentLineLinkType.Bill,
                    Amount = -3M,
                  },
              },
          },
      },
  },
  CompanyId = companyId,
  ConnectionId = connectionId,
});
```

</TabItem>

<TabItem value="go" label="Go">

```go
ctx := context.Background()
billPaymentResponse, err := payablesClient.BillPayments.Create(ctx,
  operations.CreateBillPaymentRequest{
    BillPayment: &shared.BillPayment{
      AccountRef: &shared.AccountRef{
        ID: "d96ffd74-2394-4666-81c4-eebb76e51e21"
      },
      TotalAmount: types.MustNewDecimalFromString("6"),
      Date: "2022-09-06T00:00:00",
      Lines: []shared.BillPaymentLine{
        shared.BillPaymentLine{
          Amount: types.MustNewDecimalFromString("1"),
          Links: []shared.BillPaymentLineLink{
            shared.BillPaymentLineLink{
              Id: "0394819c-b784-454d-991c-c4711b9aca12",
              Type: shared.BillPaymentLineLinkTypeBill,
              Amount = types.MustNewDecimalFromString("-1"),
            },
          },
        },
        shared.BillPaymentLine{
          Amount: types.MustNewDecimalFromString("2"),
          Links: []shared.BillPaymentLineLink{
            shared.BillPaymentLineLink{
              Id: "428e3e38-e8fb-4c56-91b5-dd09dc2e6505",
              Type: shared.BillPaymentLineLinkTypeBill,
              Amount = types.MustNewDecimalFromString("-2"),
            },
          },
        },
        shared.BillPaymentLine{
          Amount: types.MustNewDecimalFromString("3"),
          Links: []shared.BillPaymentLineLink{
            shared.BillPaymentLineLink{
              Id: "76129542-2b2f-482f-b2b3-e612d9c1ba08",
              Type: shared.BillPaymentLineLinkTypeBill,
              Amount = types.MustNewDecimalFromString("-3"),
            },
          },
        },
      },
    },
    CompanyID: companyID,
    ConnectionID: connectionID
})
```

</TabItem>

</Tabs>

## Avoir sur facture fournisseur

Si votre client reçoit un avoir de son fournisseur, il peut l'utiliser pour compenser partiellement ou totalement le solde de toute facture impayée du même fournisseur. Vous pouvez refléter cela avec Bill Pay comme suit :

1. Créer un avoir sur facture fournisseur.
2. Allouer l'avoir à une facture.

#### Créer un avoir

Commencez par créer un avoir en utilisant notre point de terminaison [Créer un avoir sur facture fournisseur](/sync-for-payables-api#/operations/create-bill-credit-note).

<Tabs groupId="language">

<TabItem value="nodejs" label="TypeScript">

```javascript
const billCreditNoteCreateResponse =
  await payablesClient.billCreditNotes.create({
    billCreditNote: {
      billCreditNoteNumber: "JMY-1987",
      supplierRef: {
        id: "3a0d40a2-2698-4cf5-b7b2-30133c632ab6",
        supplierName: "Swanston Security",
      },
      withholdingTax: [],
      totalAmount: 25.44,
      totalDiscount: 0,
      subTotal: 25.44,
      totalTaxAmount: 4.24,
      discountPercentage: 0,
      remainingCredit: 0,
      status: BillCreditNoteStatus.Submitted,
      issueDate: "2023-02-09T00:00:00",
      currency: "GBP",
      currencyRate: 1,
      lineItems: [
        {
          description: "Refund as agreed due to window break when guard absent",
          unitAmount: 21.2,
          quantity: 1,
          discountAmount: 0,
          subTotal: 21.2,
          taxAmount: 4.24,
          totalAmount: 25.44,
          accountRef: {
            id: "f96c9458-d724-47bf-8f74-a9d5726465ce",
          },
          discountPercentage: 0,
          taxRateRef: {
            id: "INPUT2",
            name: "20% (VAT on Expenses)",
            effectiveTaxRate: 20,
          },
          trackingCategoryRefs: [],
        },
      ],
    },
    companyId: companyId,
    connectionId: connectionId,
  });
```

</TabItem>

<TabItem value="python" label="Python">

```python
bill_credit_note_create_request = operations.CreateBillCreditNoteRequest(
  bill_credit_note=shared.BillCreditNote(
    bill_credit_note_number='JMY-1987',
    supplier_ref=shared.SupplierRef(
      id='3a0d40a2-2698-4cf5-b7b2-30133c632ab6',
      supplier_name='Swanston Security'
    ),
    withholding_tax=[],
    total_amount=Decimal('25.44'),
    total_discount=Decimal('0'),
    sub_total=Decimal('25.44'),
    total_tax_amount=Decimal('4.24'),
    discount_percentage=Decimal('0'),
    remaining_credit=Decimal('0'),
    status=shared.BillCreditNoteStatus.SUBMITTED,
    issue_date='2023-02-09T00:00:00',
    currency='GBP',
    currency_rate=Decimal('1'),
    line_items=[
      shared.BillCreditNoteLineItem(
        description="Refund as agreed due to window break when guard absent",
        unit_amount=Decimal('21.2'),
        quantity=Decimal('1'),
        discount_amount=Decimal('0'),
        sub_total=Decimal('21.2'),
        tax_amount=Decimal('4.24'),
        total_amount=Decimal('25.44'),
        account_ref=shared.AccountRef(
          id='f96c9458-d724-47bf-8f74-a9d5726465ce'
        ),
        discount_percentage=Decimal('0'),
        tax_rate_ref=shared.TaxRateRef(
          id='INPUT2',
          name='20% (VAT on Expenses)',
          effective_tax_rate=Decimal('20')
        ),
        tracking_category_refs=[]
      )
    ]
  ),
  company_id=company_id,
  connection_id=connection_id,
)

bill_credit_note_create_response = payablesClient.bill_credit_notes.create(bill_credit_note_create_request)
```

</TabItem>

<TabItem value="csharp" label="C#">

```csharp
var billCreditNoteCreateResponse = await payablesClient.BillCreditNotes.CreateAsync(new(){
  BillCreditNote = new BillCreditNote(){
    BillCreditNoteNumber = "JMY-1987",
    SupplierRef = new SupplierRef {
      Id = "3a0d40a2-2698-4cf5-b7b2-30133c632ab6",
      SupplierName = "Swanston Security"
    },
    WithholdingTax = new List<WithholdingTaxItems>(),
    TotalAmount = 25.44M,
    TotalDiscount = 0M,
    SubTotal = 25.44M,
    TotalTaxAmount = 4.24M,
    DiscountPercentage = 0M,
    RemainingCredit = 0M,
    Status = BillCreditNoteStatus.Submitted,
    IssueDate = "2023-02-09T00:00:00",
    Currency = "GBP",
    CurrencyRate = 1M,
    LineItems = new List<BillCreditNoteLineItem>(){
      new BillCreditNoteLineItem(){
        Description = "Refund as agreed due to window break when guard absent",
        UnitAmount = 21.2M,
        Quantity = 1M,
        DiscountAmount = 0M,
        SubTotal = 21.2M,
        TaxAmount = 4.24M,
        TotalAmount = 25.44M,
        AccountRef = new AccountRef(){
          Id = "f96c9458-d724-47bf-8f74-a9d5726465ce"
        },
        DiscountPercentage = 0M,
        TaxRateRef = new TaxRateRef(){
          Id = "INPUT2",
          Name = "20% (VAT on Expenses)",
          EffectiveTaxRate = 20M
        },
        TrackingCategoryRefs = new List<TrackingCategoryRef>()
      }
    }
  },
  CompanyId = companyId,
  ConnectionId = connectionId
});
```

</TabItem>

<TabItem value="go" label="Go">

```go
ctx := context.Background()
billCreditNoteCreateResponse, err := payablesClient.BillCreditNotes.Create(ctx,
  operations.CreateBillCreditNoteRequest{
    BillCreditNote: &shared.BillCreditNote{
      BillCreditNoteNumber: syncforpayables.String("JMY-1987"),
      SupplierRef: new SupplierRef {
        ID: syncforpayables.String("3a0d40a2-2698-4cf5-b7b2-30133c632ab6"),
        SupplierName: syncforpayables.String("Swanston Security")
      },
      WithholdingTax: []shared.WithholdingTaxItems{},
      TotalAmount: types.MustNewDecimalFromString("25.44"),
      TotalDiscount: types.MustNewDecimalFromString("0"),
      SubTotal: types.MustNewDecimalFromString("25.44"),
      TotalTaxAmount: types.MustNewDecimalFromString("4.24"),
      DiscountPercentage: types.MustNewDecimalFromString("0"),
      RemainingCredit: types.MustNewDecimalFromString("0"),
      Status: BillCreditNoteStatus.Submitted,
      IssueDate: syncforpayables.String("2023-02-09T00:00:00"),
      Currency: syncforpayables.String("GBP"),
      CurrencyRate: types.MustNewDecimalFromString("1"),
      LineItems: []shared.BillCreditNoteLineItem{
        shared.BillCreditNoteLineItem{
          Description: syncforpayables.String("Refund as agreed due to window break when guard absent"),
          UnitAmount: types.MustNewDecimalFromString("21.2"),
          Quantity: types.MustNewDecimalFromString("1"),
          DiscountAmount: types.MustNewDecimalFromString("0"),
          SubTotal: types.MustNewDecimalFromString("21.2"),
          TaxAmount: types.MustNewDecimalFromString("4.24"),
          TotalAmount: types.MustNewDecimalFromString("25.44"),
          AccountRef: &shared.AccountRef{
            ID: syncforpayables.String("f96c9458-d724-47bf-8f74-a9d5726465ce")
          },
          DiscountPercentage: types.MustNewDecimalFromString("0"),
          TaxRateRef: &shared.TaxRateRef(){
            ID: syncforpayables.String("INPUT2"),
            Name: syncforpayables.String("20% (VAT on Expenses)"),
            EffectiveTaxRate: types.MustNewDecimalFromString("20")
          },
          TrackingCategoryRefs: []shared.TrackingCategoryRef{}
        }
      }
    },
    CompanyID: companyID,
    ConnectionID: connectionID,
  }
)
```

</TabItem>

</Tabs>

<details>
<summary><b>Exemples spécifiques aux intégrations</b></summary>

<Tabs>

<TabItem value="Xero" label="Xero">

```json
{
  "billCreditNoteNumber": "JMY-1987",
  "supplierRef": {
    "id": "3a0d40a2-2698-4cf5-b7b2-30133c632ab6",
    "supplierName": "Swanston Security"
  },
  "withholdingTax": [],
  "totalAmount": 25.44,
  "totalDiscount": 0,
  "subTotal": 25.44,
  "totalTaxAmount": 4.24,
  "discountPercentage": 0,
  "remainingCredit": 0,
  "status": "Submitted",
  "issueDate": "2023-02-09T00:00:00",
  "currency": "GBP",
  "currencyRate": 1,
  "lineItems": [
    {
      "description": "Refund as agreed due to window break when guard absent",
      "unitAmount": 21.2,
      "quantity": 1,
      "discountAmount": 0,
      "subTotal": 21.2,
      "taxAmount": 4.24,
      "totalAmount": 25.44,
      "accountRef": {
        "id": "f96c9458-d724-47bf-8f74-a9d5726465ce"
      },
      "discountPercentage": 0,
      "taxRateRef": {
        "id": "INPUT2",
        "name": "20% (VAT on Expenses)",
        "effectiveTaxRate": 20
      },
      "trackingCategoryRefs": []
    }
  ]
}
```

</TabItem>

<TabItem value="QuickBooks Online" label="QuickBooks Online">

```json
{
  "billCreditNoteNumber": "309",
  "supplierRef": {
    "id": "87",
    "supplierName": "Ankunding Inc"
  },
  "withholdingTax": [],
  "totalAmount": 100,
  "totalDiscount": 0,
  "subTotal": 100,
  "totalTaxAmount": 0,
  "discountPercentage": 0,
  "remainingCredit": 100,
  "status": "Submitted",
  "issueDate": "2023-04-20T00:00:00",
  "currency": "GBP",
  "currencyRate": 1.242097,
  "lineItems": [
    {
      "description": "",
      "unitAmount": 100,
      "quantity": 1,
      "subTotal": 100,
      "taxAmount": 0,
      "totalAmount": 100,
      "accountRef": {
        "id": "7"
      },
      "taxRateRef": {
        "id": "NON",
        "name": "NON",
        "effectiveTaxRate": 0
      },
      "trackingCategoryRefs": [],
      "tracking": {
        "categoryRefs": [],
        "isBilledTo": "Unknown",
        "isRebilledTo": "NotApplicable"
      }
    }
  ]
}
```

</TabItem>

<TabItem value="NetSuite" label="NetSuite">

```json
{
  "billCreditNoteNumber": "VENDCRED1987",
  "supplierRef": {
    "id": "727",
    "supplierName": "Vendor -.B"
  },
  "withholdingTax": [],
  "totalAmount": 10,
  "totalDiscount": 0,
  "subTotal": 10,
  "totalTaxAmount": 0,
  "discountPercentage": 0,
  "status": "Submitted",
  "issueDate": "2023-04-20T00:00:00",
  "currency": "GBP",
  "currencyRate": 1,
  "lineItems": [
    {
      "description": "",
      "unitAmount": 10,
      "quantity": 1,
      "subTotal": 10,
      "totalAmount": 10,
      "accountRef": {
        "id": "714"
      },
      "trackingCategoryRefs": [
        {
          "id": "department-4",
          "name": "DP Department - incl children"
        }
      ],
      "tracking": {
        "categoryRefs": [
          {
            "id": "department-4",
            "name": "DP Department - incl children"
          }
        ],
        "isBilledTo": "Unknown",
        "isRebilledTo": "Unknown"
      }
    }
  ]
}
```

</TabItem>

<TabItem value="Sage Intacct" label="Sage Intacct">

```json
{
  "supplierRef": {
    "id": "3"
  },
  "withholdingTax": [],
  "totalAmount": 360,
  "totalDiscount": 0,
  "subTotal": 300,
  "totalTaxAmount": 60,
  "discountPercentage": 0,
  "status": "Submitted",
  "issueDate": "2021-09-24T00:00:00",
  "currency": "GBP",
  "currencyRate": 1,
  "lineItems": [
    {
      "description": "No Description Provided",
      "unitAmount": 300,
      "quantity": 1,
      "subTotal": 300,
      "taxAmount": 60,
      "totalAmount": 360,
      "accountRef": {
        "id": "197",
        "name": "Software and Licenses"
      },
      "taxRateRef": {
        "id": "81",
        "name": "UK Purchase Goods Standard Rate",
        "effectiveTaxRate": 20
      },
      "trackingCategoryRefs": [
        {
          "id": "LOCATION-15",
          "name": "United Kingdom"
        },
        {
          "id": "SUPPLIER-3",
          "name": "ADP"
        }
      ],
      "tracking": {
        "categoryRefs": [
          {
            "id": "LOCATION-15"
          },
          {
            "id": "SUPPLIER-3",
            "name": "ADP"
          }
        ],
        "isBilledTo": "Unknown",
        "isRebilledTo": "Unknown"
      }
    }
  ]
}
```

</TabItem>

<TabItem value="MYOB" label="MYOB">

```json
{
  "billCreditNoteNumber": "JMY0002",
  "supplierRef": {
    "id": "5c0664ca-6eb1-4085-9da4-37ef748bc65e",
    "supplierName": "Metropolitan Electricity"
  },
  "withholdingTax": [],
  "totalAmount": 900,
  "totalDiscount": 0,
  "subTotal": 1000,
  "totalTaxAmount": 100,
  "discountPercentage": 0,
  "status": "Submitted",
  "issueDate": "2023-04-20T00:00:00",
  "currency": "AUD",
  "lineItems": [
    {
      "description": "Credit note for incorrect bill",
      "unitAmount": 900,
      "quantity": 1,
      "subTotal": 900,
      "taxAmount": 100,
      "totalAmount": 900,
      "accountRef": {
        "id": "f04d046b-0137-4d95-8af7-ed9fef1a4ba3"
      },
      "taxRateRef": {
        "id": "ff083e95-de4e-4c56-87dd-32ad9cdac172",
        "name": "Capital Acquisitions",
        "effectiveTaxRate": 10
      },
      "trackingCategoryRefs": []
    }
  ]
}
```

</TabItem>

</Tabs>

</details>

#### Allouer un avoir à une facture

Maintenant que vous avez l'avoir, compensez son solde avec les factures impayées. [Créez un paiement de facture](/payables/async/payments#single-bill-payment) et incluez l'avoir dans le tableau `links`.

Dans certains logiciels comptables, vous pouvez combiner un avoir et un paiement partiel pour régler le solde complet d'une facture.

<Tabs groupId="language">

<TabItem value="nodejs" label="TypeScript">

```javascript
const billPaymentResponse = await payablesClient.billPayments.create({
  billPayment: {
    supplierRef: {
      id: "3a0d40a2-2698-4cf5-b7b2-30133c632ab6",
    },
    accountRef: {
      id: "94b02f61-f95f-4873-b5b7-651ff9707325",
    },
    totalAmount: 0.0,
    currency: "GBP",
    currencyRate: 1,
    date: "2023-05-09T00:00:00",
    lines: [
      {
        amount: 45.0,
        links: [
          {
            id: "59978bef-af2f-4a7e-9728-4997597c0980",
            type: BillPaymentLineLinkType.Bill,
            amount: -25.44,
          },
          {
            id: "ee8bec08-2be8-40ba-acd0-d53d5df11235",
            type: BillPaymentLineLinkType.CreditNote,
            amount: 25.44,
          },
        ],
      },
    ],
  },
  companyId: companyId,
  connectionId: connectionId,
});
```

</TabItem>

<TabItem value="python" label="Python">

```python
bill_payment_request = operations.CreateBillPaymentRequest(
    bill_payment=shared.BillPayment(
      supplier_ref=shared.SupplierRef(
        id='3a0d40a2-2698-4cf5-b7b2-30133c632ab6',
      ),
      account_ref=shared.AccountRef(
        id='94b02f61-f95f-4873-b5b7-651ff9707325'
      ),
      total_amount=Decimal('0.00'),
      currency='GBP',
      date='2023-05-09T00:00:00',
      lines=[
        shared.BillPaymentLine(
          amount=Decimal('45.00'),
          links=[
            shared.BillPaymentLineLink(
              id='59978bef-af2f-4a7e-9728-4997597c0980',
              type=shared.BillPaymentLineLinkType.BILL,
              amount=Decimal('-25.44'),
            ),
            shared.BillPaymentLineLink(
              id='ee8bec08-2be8-40ba-acd0-d53d5df11235',
              type=shared.BillPaymentLineLinkType.CREDIT_NOTE,
              amount=Decimal('25.44'),
            )
          ],
        ),
      ]
    ),
    company_id=company_id,
    connection_id=connection_id,
)

bill_payment_response = payables_client.bill_payments.create(bill_payment_request)
```

</TabItem>

<TabItem value="csharp" label="C#">

```csharp
var billPaymentResponse = await payablesClient.BillPayments.CreateAsync(new() {
  BillPayment = new BillPayment() {
    SupplierRef = new SupplierRef() {
        Id = "3a0d40a2-2698-4cf5-b7b2-30133c632ab6",
    },
    AccountRef = new AccountRef() {
      Id = "94b02f61-f95f-4873-b5b7-651ff9707325"
    },
    TotalAmount = 0M,
    Currency = "GBP",
    Date = "2023-05-09T00:00:00",
    Lines = new List<BillPaymentLine>() {
      new BillPaymentLine() {
        Amount = 45.00M,
        Links = new List<BillPaymentLineLink>() {
          new BillPaymentLineLink() {
            Id = "59978bef-af2f-4a7e-9728-4997597c0980",
            Type = BillPaymentLineLinkType.Bill,
            Amount = -25.44M,
          },
          new BillPaymentLineLink() {
            Id = "ee8bec08-2be8-40ba-acd0-d53d5df11235",
            Type = BillPaymentLineLinkType.CreditNote,
            Amount = 25.44M,
          },
        },
      },
    },
  },
  CompanyId = companyId,
  ConnectionId = connectionId,
});
```

</TabItem>

<TabItem value="go" label="Go">

```go
ctx := context.Background()
billPaymentResponse, err := payablesClient.BillPayments.Create(ctx,
  operations.CreateBillPaymentRequest{
    BillPayment: &shared.BillPayment{
      SupplierRef: &shared.SupplierRef{
          ID: "3a0d40a2-2698-4cf5-b7b2-30133c632ab6",
      },
      AccountRef: &shared.AccountRef{
        ID: "94b02f61-f95f-4873-b5b7-651ff9707325"
      },
      TotalAmount: types.MustNewDecimalFromString("0.00"),
      Currency: syncforpayables.String("GBP"),
      Date: "2023-05-09T00:00:00",
      Lines: []shared.BillPaymentLine{
        shared.BillPaymentLine{
          Amount: types.MustNewDecimalFromString("45.00"),
          Links: []shared.BillPaymentLineLink{
            shared.BillPaymentLineLink{
              ID: "59978bef-af2f-4a7e-9728-4997597c0980",
              Type: shared.BillPaymentLineLinkTypeBill,
              Amount = types.MustNewDecimalFromString("-25.44"),
            },
            shared.BillPaymentLineLink{
              ID: "ee8bec08-2be8-40ba-acd0-d53d5df11235",
              Type: shared.BillPaymentLineLinkTypeCreditNote,
              Amount = types.MustNewDecimalFromString("25.44"),
            },
          },
        },
      },
    },
    CompanyID: companyID,
    ConnectionID: connectionID
})
```

</TabItem>

</Tabs>

<details>
<summary><b>Exemples spécifiques aux intégrations</b></summary>

<Tabs>

<TabItem value="Xero" label="Xero">

:::info Considérations
Avec Xero, vous ne pouvez allouer entièrement un `billCreditNote` à une `bill` qu'en utilisant un `billPayment`. Si vous souhaitez également utiliser un paiement partiel, deux transactions distinctes doivent être créées.
:::

```json
{
  "supplierRef": {
    "id": "3a0d40a2-2698-4cf5-b7b2-30133c632ab6"
  },
  "accountRef": {
    "id": "94b02f61-f95f-4873-b5b7-651ff9707325"
  },
  "totalAmount": 0,
  "currency": "GBP",
  "date": "2023-05-09T00:00:00",
  "lines": [
    {
      "amount": 45,
      "links": [
        {
          "type": "Bill",
          "id": "8e65df54-4bbd-41f3-b241-8da2588be341",
          "amount": -25.44
        },
        {
          "type": "CreditNote",
          "id": "ee8bec08-2be8-40ba-acd0-d53d5df11235",
          "amount": 25.44
        }
      ]
    }
  ]
}
```

</TabItem>

<TabItem value="QuickBooks Online" label="QuickBooks Online">

:::info Considérations
Avec QBO, vous ne pouvez allouer entièrement un `billCreditNote` à une `bill` qu'en utilisant un `billPayment`. Si vous souhaitez également utiliser un paiement partiel, deux transactions distinctes doivent être créées.
:::

```json
{
  "supplierRef": {
    "id": "87"
  },
  "accountRef": {
    "id": "35"
  },
  "totalAmount": 0,
  "currency": "GBP",
  "currencyRate": 1,
  "date": "2023-05-09T00:00:00",
  "lines": [
    {
      "amount": 0,
      "links": [
        {
          "type": "Bill",
          "id": "328",
          "amount": -100
        },
        {
          "type": "CreditNote",
          "id": "308",
          "amount": 100
        }
      ]
    }
  ]
}
```

</TabItem>

<TabItem value="NetSuite" label="NetSuite">

Cet exemple montre un paiement partiel de facture et un avoir sur facture fournisseur utilisés pour régler le solde complet d'une facture.

```json
{
  "supplierRef": {
    "id": "727"
  },
  "accountRef": {
    "id": "854"
  },
  "totalAmount": 110,
  "currency": "GBP",
  "date": "2023-05-09T00:00:00",
  "lines": [
    {
      "amount": 110,
      "links": [
        {
          "type": "Bill",
          "id": "8",
          "amount": -120
        },
        {
          "type": "CreditNote",
          "id": "462792",
          "amount": 10
        }
      ]
    }
  ]
}
```

</TabItem>

<TabItem value="Sage Intacct" label="Sage Intacct">

Cet exemple montre le paiement d'une facture avec un avoir et un paiement partiel.

:::info Considérations

Sage Intacct utilise un `paymentMethodRef`. Vous pouvez récupérer les méthodes de paiement d'une entreprise en utilisant le point de terminaison [Obtenir le modèle de création/mise à jour de facture](/sync-for-payables-api#/operations/get-create-update-bills-model).

:::

```json
{
  "supplierRef": {
    "id": "3"
  },
  "paymentMethodRef": {
    "id": "6",
    "name": "Cash"
  },
  "accountRef": {
    "id": "360"
  },
  "totalAmount": 45,
  "currency": "USD",
  "date": "2023-04-25T00:00:00",
  "lines": [
    {
      "amount": 45,
      "links": [
        {
          "type": "Bill",
          "id": "26572",
          "amount": -405
        },
        {
          "type": "CreditNote",
          "id": "26573",
          "amount": 360
        }
      ]
    }
  ]
}
```

</TabItem>

<TabItem value="MYOB" label="MYOB">

:::note Bientot disponible

Les allocations d'avoirs seront bientot disponibles pour MYOB.

:::

</TabItem>

</Tabs>

</details>

## Supprimer des factures et des paiements

Dans certains scénarios, votre client PME peut vouloir supprimer une facture existante ou un paiement de facture - par exemple, s'il a fait une erreur ou ne souhaite plus traiter la facture.

Utilisez les points de terminaison [Supprimer une facture](/sync-for-payables-api#/operations/delete-bill) et [Supprimer un paiement de facture](/sync-for-payables-api#/operations/delete-billPayment) pour répondre à ces besoins, et vérifiez-les dans notre OAS pour la couverture d'intégration la plus à jour.

#### Supprimer des factures

<Tabs groupId="language">

<TabItem value="nodejs" label="TypeScript">

```javascript
const billDeleteResponse = await payablesClient.bills.delete({
  companyId: companyId,
  connectionId: connectionId,
  billId: billId,
});
```

</TabItem>

<TabItem value="python" label="Python">

```python
bill_delete_request = operations.DeleteBillRequest(
  company_id=company_id,
  connection_id=connection_id,
  bill_id=bill_id,
)

bill_delete_response = payables_client.bills.delete(bill_delete_request)
```

</TabItem>

<TabItem value="csharp" label="C#">

```csharp
var res = await payablesClient.Bills.DeleteAsync(new() {
    CompanyId = companyId,
    ConnectionId = connectionId,
    BillId = billId,
};);
```

</TabItem>

<TabItem value="go" label="Go">

```go
ctx := context.Background()
billDeleteResponse, err := payablesClient.Bills.Delete(ctx, operations.DeleteBillRequest{
  CompanyID: companyID,
  ConnectionID: connectionID,
  BillID: billID,
})
```

</TabItem>

</Tabs>

#### Supprimer des paiements de factures

<Tabs groupId="language">

<TabItem value="nodejs" label="TypeScript">

```javascript
const billPaymentDeleteResponse = await payablesClient.billPayments.delete({
  companyId: companyId,
  connectionId: connectionId,
  billPaymentId: billPaymentId,
});
```

</TabItem>

<TabItem value="python" label="Python">

```python
bill_payment_delete_request = operations.DeleteBillPaymentRequest(
  company_id=company_id,
  connection_id=connection_id,
  bill_payment_id=bill_payment_id,
)

bill_payment_delete_response = payables_client.bills.delete(bill_payment_delete_request)
```

</TabItem>

<TabItem value="csharp" label="C#">

```csharp
var billPaymentDeleteResponse = await payablesClient.BillPayments.DeleteAsync(new() {
    CompanyId = companyId,
    ConnectionId = connectionId,
    BillPaymentId = billPaymentId,
});
```

</TabItem>

<TabItem value="go" label="Go">

```go
ctx := context.Background()
billPaymentDeleteResponse, err := payablesClient.BillPayments.Delete(ctx,
  operations.DeleteBillPaymentRequest{
    CompanyID: companyID,
    ConnectionID: connectionID,
    BillPaymentID: billPaymentID,
  }
)
```

</TabItem>

</Tabs>

:::tip Récapitulatif

Ceci conclut le processus de paiement de factures pris en charge par notre solution Bill Pay asynchrone. Vous avez fourni à votre client ses fournisseurs, ses factures et ses comptes bancaires, et lui avez permis de choisir les méthodes de paiement appropriées. Vous avez reflété les paiements de factures dans son système comptable.

En conséquence, le client verra ces factures marquées comme payées dans son logiciel et ses soldes de comptes fournisseurs et de fournisseurs réduits.

:::
