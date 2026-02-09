---
title: "Référence de l'intégration Oracle NetSuite"
description: "Éléments à connaître lors de la synchronisation des données avec Oracle NetSuite."
sidebar_label: Référence
---

Notez les informations suivantes lors de la création de votre application en utilisant l'intégration Oracle NetSuite de Codat.

## Gestion de la taxe et de la remise pour les types de données applicables

### Remises et taxes au niveau de la ligne

Lors de la lecture d'objets avec des remises et/ou des taxes au niveau de la ligne depuis Oracle NetSuite—par exemple, les commandes clients—les composants de remise et/ou de taxe sont affichés sur des lignes séparées. Par exemple, une seule ligne qui inclut une remise et un composant de taxe dans NetSuite est mappée vers Codat sous forme de trois lignes séparées :

1. Le montant hors remise et taxe
2. Le montant de la remise
3. Le montant de la taxe

Ce comportement s'applique aux types de données suivants : Notes de crédit fournisseurs, Factures fournisseurs, Notes de crédit, Coûts directs, Revenus directs, Factures, Commandes d'achat et Commandes clients.

#### Exemple

Supposons que vous ayez une facture fournisseur dans NetSuite avec un élément de ligne de 39,05 $, incluant la remise et les taxes. Les données sont représentées dans Codat comme suit :

```json
#...
"lineItems": [
        {
          "unitAmount": 22.5,
          "quantity": 2,
          "discountAmount": 0,
          "discountPercentage": 0,
          "subTotal": 45,
          "taxAmount": 0,
          "totalAmount": 45    // hors remise et taxe
        },
        {
          "unitAmount": 0,
          "quantity": 1,
          "discountAmount": 10,    // le montant de la remise
          "discountPercentage": 0,
          "subTotal": -10,
          "taxAmount": 0,
          "totalAmount": -10
        },
        {
          "unitAmount": 0,
          "quantity": 0,
          "discountAmount": 0,
          "discountPercentage": 0,
          "subTotal": 0,
          "taxAmount": 4.05,    // le montant de la taxe
          "totalAmount": 4.05
        }
      ]
```

### Entreprises avec SuiteTax activé

Codat ne prend actuellement pas en charge SuiteTax. Les entreprises avec SuiteTax activé peuvent se connecter à Codat avec succès ; cependant, les données fiscales ne seront pas disponibles. Cela affecte tous les cas d'utilisation de comptes clients et comptes fournisseurs où des taux de taxe ou des montants de taxe sont requis.

### Remises avec et sans comptabilisation

NetSuite a deux types différents d'éléments de remise :

- Éléments de remise _avec comptabilisation_ : la remise est comptabilisée dans un compte du grand livre.
- Éléments de remise _sans comptabilisation_ : la remise n'est pas comptabilisée dans un compte du grand livre.

Codat mappe chaque type différemment. Un élément de remise avec comptabilisation est mappé comme une ligne séparée. Un élément de remise sans comptabilisation est mappé comme une seule ligne qui affiche le montant incluant la remise.

### Appliquer une remise à un enregistrement dans NetSuite

Lors de l'écriture de données dans NetSuite, vous pouvez appliquer une remise à tout type de données Codat qui inclut des éléments de ligne, à part les écritures de journal.

Par exemple, pour appliquer une remise à une facture fournisseur, spécifiez un enregistrement d'élément de remise existant (`itemType = "Discount"`) de NetSuite dans le corps de la requête. Codat écrit les remises dans NetSuite sous forme d'éléments de ligne séparés ; seuls le type d'élément et le montant de la remise sont envoyés.

:::caution

N'utilisez pas les propriétés Codat `lineItems.discountAmount` et `lineItems.discountPercentage` pour appliquer des remises aux enregistrements dans NetSuite.
:::

## Comptes

Si le paramètre "Use Account Numbers" est activé, les comptes écrits dans NetSuite doivent inclure une valeur pour `nominalCode`. Pour plus d'informations, consultez <a className="external" href="https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_N1440268.html" target="_blank">Chart of Account Numbering</a> dans la documentation NetSuite.

## Comptes bancaires

Les comptes bancaires sont mappés depuis les _accounts_ dans Oracle NetSuite.

Lors de l'écriture de comptes bancaires dans NetSuite, le champ `nominalCode` est requis si la numérotation du plan comptable est activée dans NetSuite (via le paramètre "Use Account Numbers").

## Factures fournisseurs

Les factures fournisseurs sont mappées depuis les _vendor bills_ dans Oracle NetSuite.

Lors de l'écriture de factures fournisseurs dans Oracle NetSuite :

- La propriété `status` doit être définie sur `Open`.
- NetSuite fait une distinction entre les enregistrements de ligne `Expense` et `Item` dans les factures fournisseurs. Codat valide si un élément de ligne est un type `Expense` ou `Item` en fonction de la valeur de `lineItems.itemRef.id`. Si ce n'est pas rempli, Codat traite l'élément de ligne comme un type `Expense`.
- Dans NetSuite, lors de la lecture des éléments de ligne de factures fournisseurs, les champs `taxAmount` et `taxRateRef` ne sont pas disponibles car NetSuite ne fournit pas d'informations sur l'élément de ligne auquel la taxe se rapporte.

Vous pouvez créer une facture fournisseur liée à une commande d'achat de l'une des façons suivantes :

1. Ajouter la référence `purchaseOrderRefs` dans le corps principal de la facture fournisseur et ajouter `purchaseOrderLineRef` aux éléments de ligne.
2. Ajouter uniquement la référence `purchaseOrderLineRef` aux éléments de ligne.
3. Ajouter uniquement la référence `purchaseOrderRefs` dans le corps principal de la facture fournisseur.

Vérifiez les [prérequis de commande d'achat](/integrations/accounting/netsuite/oracle-netsuite-integration-reference#purchase-orders) avant de créer une facture fournisseur liée à une commande d'achat.

## Notes de crédit fournisseurs

Les notes de crédit fournisseurs sont mappées depuis les _vendor credits_ dans Oracle NetSuite.

## Paiements de factures fournisseurs

Codat traite les _Vendor Prepayments_ NetSuite comme des paiements de factures fournisseurs ou des coûts directs selon leur état. Par exemple, un prépaiement fournisseur alloué est traité comme un paiement de facture fournisseur.

Si une transaction est annulée dans NetSuite, un _reversing journal_ est publié pour compenser la transaction d'origine et est ensuite lié à la transaction d'origine. Codat traite ces journaux d'inversion comme des remboursements.

Dans NetSuite, des portions d'une note de crédit fournisseur peuvent être allouées à une facture fournisseur particulière. Dans ce cas, le montant du paiement de facture fournisseur affiché dans Codat reflète l'allocation individuelle.

Lors de l'écriture de paiements de factures fournisseurs dans Oracle NetSuite :

- Les cas d'utilisation pris en charge sont le paiement d'une facture fournisseur en espèces et l'application d'une note de crédit fournisseur à une facture fournisseur.
- L'application de prépaiements fournisseurs NetSuite à des factures fournisseurs ouvertes n'est pas prise en charge.

## Clients

Les clients sont mappés depuis _CustomerName_ dans _CustomerID_ d'Oracle NetSuite.

## Coûts directs et revenus directs

:::note Type non pris en charge

La spécification du type de coût direct ou de revenu direct n'est pas prise en charge dans notre modèle de données comptables.
:::

Vous pouvez écrire des coûts directs dans NetSuite sous forme de [Checks](https://www.netsuite.com/help/helpcenter/en_US/srbrowser/Browser2021_2/script/record/check.html) ou [Credit Card Refunds](https://www.netsuite.com/help/helpcenter/en_US/srbrowser/Browser2021_2/script/record/creditcardrefund.html). L'écriture de prépaiements fournisseurs n'est pas prise en charge.

Vous pouvez écrire des revenus directs dans NetSuite sous forme de [Cash Sales](https://www.netsuite.com/help/helpcenter/en_US/srbrowser/Browser2021_2/script/record/cashsale.html) ou [Cash Refunds](https://www.netsuite.com/help/helpcenter/en_US/srbrowser/Browser2021_2/script/record/cashrefund.html). L'écriture de dépôts clients n'est pas prise en charge.

Lors de la lecture de revenus directs, le groupe de taxe et le code de taxe par défaut `-Not Taxable-` sont ignorés. Vous pouvez accéder à ces informations en lisant le type de données [Tax Rates](/accounting-api#/schemas/TaxRates).

## Factures

Lors de la lecture des éléments de ligne de factures, les champs `taxAmount` et `taxRateRef` ne sont pas disponibles car NetSuite ne fournit pas d'informations sur l'élément de ligne auquel la taxe se rapporte.

## Écritures de journal

Lors de la lecture d'_écritures de journal interentreprises avancées_ d'Oracle NetSuite, seules les lignes de journal associées à la filiale connectée sont lues. Les lignes associées à d'autres filiales sont ignorées. Codat ne prend pas en charge l'écriture de ce type d'écriture de journal dans Oracle NetSuite.

Lors de l'écriture d'écritures de journal, Codat crée d'abord un emplacement par défaut dans NetSuite nommé `Do not use. Auto-generated by an external system`. Cet emplacement est ensuite associé à toutes les écritures de journal écrites ultérieurement. Ne désactivez pas l'emplacement par défaut ou les opérations d'écriture d'écritures de journal échoueront.

:::note

Pour les comptes avec _Multi-Book Accounting_ activé, Codat ne prend pas en charge l'écriture d'écritures de journal dans un journal NetSuite spécifique.
:::

## Commandes d'achat

Lors de l'écriture de commandes d'achat dans Oracle NetSuite :

- Le champ `shipto` ne peut pas être écrit.

- Les champs `accountRef` ou `itemRef` ne peuvent être écrits que pour un seul élément de ligne. L'écriture de l'`itemRef` remplacera l'`accountRef`. Si l'`accountRef` est écrit, vous pouvez voir la référence dans la sous-liste Expense dans l'interface utilisateur NetSuite.

Il est possible de [créer une facture fournisseur](/integrations/accounting/netsuite/oracle-netsuite-integration-reference#bills) avec un lien vers une commande d'achat. Vous devrez peut-être effectuer des étapes supplémentaires selon le type d'article :

- Pour les articles basés sur l'inventaire et les lignes de dépenses, vous devez convertir la commande d'achat en réception d'article dans Netsuite, puis procéder à la création d'une facture fournisseur.
- Pour les articles basés sur les services, vous pouvez créer une facture fournisseur immédiatement après avoir créé la commande d'achat.

## Commandes clients

Dans les commandes clients lues depuis Oracle NetSuite, l'`expectedDeliveryDate` indique la date d'_expédition_ prévue dans l'objet métier source.

## Fournisseurs

Les fournisseurs sont mappés depuis les _vendors_ dans Oracle NetSuite.

Lors de l'écriture de fournisseurs dans Oracle NetSuite :

- Un fournisseur ne peut être écrit que dans l'entreprise à partir de laquelle les données ont été lues. L'écriture de données vers des entreprises filiales n'est pas prise en charge.

## Transferts

### Lecture de transferts

Les transferts sont mappés depuis les objets <a  class="external" href="https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/chapter_N1547981.html" target="_blank">transfers</a> et <a  class="external" href="https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/chapter_N1542225.html" target="_blank">deposits</a> dans NetSuite.

Seuls les dépôts NetSuite effectués entre deux comptes bancaires - y compris les comptes de carte de crédit et les fonds non déposés - sont lus vers Codat sous forme de transferts.

Le type de données Transferts ne prend pas en charge plusieurs lignes.

Lors de la lecture de dépôts NetSuite sous forme de transferts, seules les catégories de suivi de niveau supérieur sont lues (les catégories de suivi associées au compte _to_ dans NetSuite). Le modèle de données comptables de Codat ne prend pas en charge les catégories de suivi au niveau de l'élément de ligne.

### Écriture de transferts

L'écriture de transferts n'est prise en charge que pour les dépôts NetSuite, et non pour les transferts NetSuite.

Lors de l'effectuation d'un dépôt dans NetSuite, les utilisateurs peuvent saisir des paiements dans le sous-onglet **Deposits**. Lors de l'écriture de transferts de ce type :

- Le tableau `depositedRecordRefs` dans le transfert doit spécifier soit `payments`, `directIncomes`, ou `journalEntries`.
- Toutes les transactions dans le tableau `depositedRecordRefs` doivent partager la même devise.

## Couverture des champs pour les types de données pris en charge

Le modèle de données de Codat prend en charge une large gamme de champs dans chaque type de données.

Parfois, l'API d'un fournisseur n'accorde pas l'accès à un champ qui existe dans un type de données Codat. À l'inverse, notre modèle de données ne prend parfois pas en charge tous les champs pertinents sur un objet dans l'API d'un fournisseur.

Les tableaux suivants mettent en évidence certains champs sélectionnés qui ne sont pas disponibles dans les données lues et écrites depuis Oracle NetSuite.

### Champs de fournisseur non disponibles

| Type de données et champ Codat  | Statut                               |
| :------------------------------ | :----------------------------------- |
| `billPayments.accountRef`       | Non disponible dans l'API du fournisseur. |
| `billPayments.paymentMethodRef` | Non disponible dans l'API du fournisseur. |
| `customers.taxNumber`           | Non disponible dans l'API du fournisseur. |
| `customers.registrationNumber`  | Non disponible dans l'API du fournisseur. |

### Champs Codat non disponibles

| Enregistrement et champ Oracle NetSuite                 | Type de données Codat                                         | Statut                                                                                   |
| ------------------------------------------------------- | ------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `VendorCredit.customForm`, `VendorCredit.postingPeriod` | [Notes de crédit fournisseurs](/accounting-api#/schemas/billcreditnotes) | Non représenté dans le modèle de données comptables de Codat.                                        |
| `Invoice.customForm`, `Invoice.postingPeriod`           | [Factures](/accounting-api#/schemas/invoices)                 | Non représenté dans le modèle de données comptables de Codat.                                        |
| `Vendor.subsidiary`                                     | [Fournisseurs](/accounting-api#/schemas/Suppliers)               | Le type de données Fournisseurs n'indique pas si une entreprise fournisseur est une filiale. |
| `Vendor.workCalendar`                                   | [Fournisseurs](/accounting-api#/schemas/Suppliers)               | Non représenté dans le modèle de données comptables de Codat.                                        |
