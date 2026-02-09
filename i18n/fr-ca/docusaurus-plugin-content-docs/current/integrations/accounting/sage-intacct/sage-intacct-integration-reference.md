---
title: "Référence de l'intégration Sage Intacct"
description: "Informations à connaître lors de la synchronisation de données avec Sage Intacct."
sidebar_label: Référence
---

Notez les informations suivantes lors de la création de votre application en utilisant l'intégration Sage Intacct de Codat.

## Bill Credit Notes

Les Bill Credit Notes sont mappées à partir de l'objet [AP Adjustments](https://developer.intacct.com/api/accounts-payable/ap-adjustments/) (notes de débit) dans Sage Intacct.

Pour utiliser le taux de change « Intacct Daily Rate » lors de l'écriture d'une Bill Credit Note dans une devise différente, vous devez :

- Omettre le champ `currencyRate` du corps de la demande.
- Spécifier la devise de transaction dans le champ `currency`.

## Bill Payments

Les Bill Payments sont mappés à partir de l'objet [AP Payments](https://developer.intacct.com/api/accounts-payable/ap-payments/) dans Sage Intacct.

### Devises dans les paiements de factures

Si vous ne fournissez pas de `currency` dans le corps de la demande d'écriture d'un Bill payment, elle est définie sur la devise de paiement de facture par défaut dans Sage Intacct. Il s'agit de la devise du compte auquel le paiement de facture est lié.

Cela peut causer un comportement inattendu si la facture payée est dans une devise différente de celle du compte dans Sage Intacct.

### Écriture de Bill Payments non approuvés dans Sage Intacct

Dans Sage Intacct, il est possible de configurer si l'approbation des Bill Payments est requise. Par défaut, les paiements qui ne sont _pas_ approuvés ne sont pas inclus dans l'ensemble de données Bill Payments lors de la lecture depuis Sage Intacct.

Si un Bill Payment nécessitant une approbation est écrit dans Sage Intacct, l'écriture réussit et le Bill Payment est ajouté à l'ensemble de données dans Codat. Cependant, si le Bill Payment n'est pas approuvé avant la prochaine lecture, il est supprimé de l'ensemble de données à ce moment.

Cette information est affichée sous forme d'avertissement sur l'opération d'écriture terminée lors de l'écriture de Bill Payments non approuvés dans Sage Intacct.

## Customers

Lors de la lecture et de l'écriture de Customers, seul le _contact principal_ associé au Customer dans Sage Intacct est disponible.

## Credit Notes

Les Credit Notes sont mappées à partir de l'objet [AR Adjustments](https://developer.intacct.com/api/accounts-receivable/ar-adjustments/) (notes de crédit) dans Sage Intacct.

Pour utiliser le taux de change « Intacct Daily Rate » lors de l'écriture d'une Credit Note dans une devise différente, vous devez :

- Omettre le champ `currencyRate` du corps de la demande.
- Spécifier la devise de transaction dans le champ `currency`.

Les factures négatives sont lues depuis Sage Intacct comme des Credit Notes.

## Direct Incomes

Les Direct Incomes sont mappés à partir de l'objet [Other Receipts](https://developer.intacct.com/api/cash-management/other-receipts/#create-other-receipt-legacy) dans Sage Intacct. Direct Incomes n'inclut pas les _intérêts gagnés_, qui sont représentés dans l'objet [Bank Interest Income / Charges](https://developer.intacct.com/api/cash-management/bank-interest-charges/), car il n'y a pas de méthode `POST` pour créer ces objets.

Lors de l'écriture de Direct Incomes dans Sage Intacct, le champ requis `otherreceipt.payee` est rempli avec la valeur de `directIncomes.reference`. Le champ `otherreceipt.payee` n'est pas associé à un client ou un contact.

## Expenses

Les transactions de dépenses ne peuvent pas être publiées directement depuis les comptes de débit vers Sage Intacct. Au lieu de cela, toutes les dépenses par carte (cela inclut les cartes de crédit, de débit et prépayées) sont publiées en utilisant l'objet `Credit Card Charge`.

Si les dépenses par carte de débit doivent être synchronisées, le client peut définir le type de compte sur `Debit` pour cet objet. Les transactions résultantes sont alors correctement publiées dans les comptes du grand livre général, et le compte est reflété comme un compte de débit dans l'interface utilisateur de Sage Intacct.

## Invoices

L'écriture de factures négatives dans Sage Intacct n'est pas prise en charge ; vous pouvez écrire une Credit Note pour obtenir cette fonctionnalité.

Vous pouvez écrire des factures dans Sage Intact soit comme des [Invoices](https://developer.intacct.com/api/accounts-receivable/invoices/#create-invoice-legacy) ou des [Sales Invoices](https://developer.intacct.com/api/order-entry/order-entry-transactions/#create-order-entry-transaction-legacy).

- Pour écrire une Sales Invoice, spécifiez un identifiant d'article dans le champ `lineItems.itemRef.id`.
- Pour écrire une Invoice, ne spécifiez _pas_ d'identifiant d'article dans le champ `lineItems.itemRef.id`.

Vous ne pouvez pas écrire une Invoice si des identifiants d'articles sont définis pour certaines lignes mais pas pour d'autres.

Notez que les _factures fournisseur_ dans Sage Intact sont mappées aux Bills.

### Numérotation automatique

Lors de l'écriture de factures, la _numérotation automatique_ dans la configuration AR de Sage Intacct affecte la façon dont les factures sont numérotées.

- Si la numérotation automatique est activée, Sage Intacct remplace toutes les valeurs dans le champ `invoiceNumber` par des valeurs automatiquement numérotées.
- Si la numérotation automatique est désactivée, vous devez entrer une valeur pour `invoiceNumber` ou une erreur est retournée.

### Devises de facturation

Pour écrire une facture dans la devise de base, laissez les champs `currency` et `currencyRate` vides.

Pour écrire une facture dans une devise différente en utilisant un taux de change personnalisé, définissez `currency` sur la devise souhaitée et `currencyRate` sur une valeur numérique (taux).

Pour utiliser le taux de change « Intacct Daily Rate », vous devez :

- Spécifier la devise de transaction dans le champ `currency`.
- Laisser le champ `currencyRate` vide.

### Taux de taxe des factures

Sage Intacct n'accepte pas les factures où une ou plusieurs lignes n'ont pas de taux de taxe spécifié. Codat prend en charge l'écriture de taux de taxe uniques par ligne. Les lignes de Sales Invoice ne peuvent pas avoir de taux de taxe.

### Unités de Sales Invoice

Toutes les lignes d'articles de Sales Invoice sont écrites dans Sage Intacct avec des valeurs `Unit` de `Each`. Par conséquent, seuls les Items avec `Unit of Measure=Count` peuvent être créés dans Sage Intacct. (Les valeurs d'unité de `Each`, `Pair` et `Dozen` ne sont pas prises en charge.)

### PDF de facture

Sage Intacct ne peut générer des PDF de pièces jointes que pour les factures de type « Order Entity ». Si le point de terminaison `pdf` pour un type de facture différent est appelé, Codat retourne une erreur 404 car il n'y a pas de document associé à ces factures.

## Payments

Pour écrire des paiements dans Sage Intacct, les _Automatic Payment Summaries_ doivent être configurés.

La lecture d'un paiement contre une ligne spécifique d'une facture ou d'une note de débit n'est pas prise en charge. L'écriture d'un paiement sur une ligne spécifique d'une facture n'est pas prise en charge.

### Remboursements

L'écriture de remboursements de paiement n'est actuellement pas prise en charge en raison d'une limitation dans l'API du fournisseur sous-jacent.

## Transfers

Les transactions d'annulation pour les transferts annulés sont des montants positifs dans Codat et ont un `status` de `void`.

## Attachments

Pour écrire des pièces jointes dans Sage Intacct, vous devez fournir les deux paramètres de formulaire suivants dans le cadre de votre demande :

- `file` : Le fichier que vous téléchargez.
- `attachment` : Un objet JSON contenant des informations sur la façon dont Sage Intacct doit stocker le fichier téléchargé.
  - `id` : Ceci est affiché dans l'interface utilisateur de Sage Intacct.
  - `name` : Le dossier ou sous-dossier dans lequel stocker le fichier.

Exemple d'une demande réussie en curl :

```curl
--location --request POST 'https://api.codat.io/companies/{CompanyID}/connections/{ConnectionID}/push/directCosts/{DirectCostId}/attachment' \
--header 'Authorization: Basic {Token}' \
--form 'file=@"/C:/{FileLocation}/{FileToUpload}"' \
--form 'attachment="{"id":"ID", "name":"Folder/SubFolder"}"'
```

## Couverture des champs pour les types de données pris en charge

Le modèle de données de Codat prend en charge une large gamme de champs dans chaque type de données.

Parfois, l'API d'un fournisseur n'accorde pas l'accès à un champ qui existe dans un type de données Codat. Inversement, notre modèle de données ne prend parfois pas en charge tous les champs pertinents sur un objet dans l'API d'un fournisseur.

Le tableau suivant met en évidence certains champs sélectionnés qui ne sont pas disponibles dans les données lues depuis et écrites dans Sage Intacct.

### Champs de fournisseur non disponibles

| Type de données et champ Codat    | Statut                                       |
| --------------------------------- | -------------------------------------------- |
| `creditNotes.discountPercentage`  | Non disponible dans l'API du fournisseur.    |

### Champs Codat non disponibles

| Enregistrement et champ Sage Intacct    | Type de données Codat                        | Statut                                                                                                                                                                                                            |
| --------------------------------------- | -------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `otherreceipt.paymentmethod` (Requis)  | [Direct Incomes](/accounting-api#/directincomes) | [Payment methods](/accounting-api#/paymentmethods) n'est pas pris en charge pour le type de données direct incomes. Lors de l'écriture de direct incomes dans Sage Intacct, le `paymentmethod` est toujours défini sur `Cash`. |
