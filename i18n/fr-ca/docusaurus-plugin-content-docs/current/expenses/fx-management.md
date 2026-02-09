---
title: "Dépenses en devises étrangères"
sidebar_label: Dépenses en devises étrangères
description: "Gestion des transactions en devises étrangères avec Expenses"
displayed_sidebar: expenses
---

## Aperçu

Lors de l'exploitation de leur entreprise, votre client peut acheter des stocks pour sa petite entreprise auprès d'un fournisseur étranger en ligne, en les payant dans la devise locale du fournisseur.

Alternativement, il peut voyager à l'étranger pour affaires, en portant une carte liée à un compte bancaire dans sa devise locale. Lorsqu'il dépense de l'argent chez un commerçant local, il engage une dépense professionnelle.

Ces scénarios résultent en des **transactions multidevises**, ou des transactions où une ou plusieurs devises étrangères sont impliquées.

Que vous fournissiez un compte bancaire séparé pour chaque devise ou que vous convertissiez le montant dans la devise du compte bancaire de votre client, vous pouvez synchroniser ces transactions avec le logiciel de comptabilité de votre PME avec Expenses.

### Variables de devise

Pour les transactions multidevises, vous devez considérer les variables suivantes :

- La devise de base de l'entreprise et de son compte de dépenses dans son logiciel de comptabilité
- La devise du compte bancaire utilisé pour effectuer la transaction
- La devise de la transaction de dépense elle-même

Certaines combinaisons des éléments ci-dessus peuvent ne pas être prises en charge par le logiciel de comptabilité que votre client utilise ou ne pas être pertinentes pour un type de transaction spécifique. Nous examinerons cela en détail dans les sections suivantes.

Expenses inclut des validations intégrées contre de tels scénarios pour chaque plateforme que nous prenons en charge. Les transactions multidevises de votre client seront vérifiées pour garantir le succès de la synchronisation de la transaction.

### Conseils et pièges

- Lorsque la devise de transaction ou de carte diffère de la devise de base de l'entreprise, vous devez spécifier le taux de change à utiliser pour convertir le montant dans le champ `currencyRate`. Il est obligatoire d'exprimer les transactions dans la devise de base à des fins de comptabilité et de présentation.

- Il n'est pas possible d'effectuer une conversion de devise lorsque deux devises non-base ou plus participent à la transaction. Par exemple, si la devise de base d'une entreprise est USD et que la devise de transaction est GBP, alors le compte bancaire utilisé doit être en USD ou GBP.

## Paiements

Les paiements sont un type de transaction qui représente les dépenses régulières effectuées sur un compte. Vous pouvez [en savoir plus](/expenses/sync-process/expense-transactions#transaction-types) sur les types de transactions utilisés dans Expenses.

Dans les scénarios multidevises, il existe cinq combinaisons possibles de devises qui participent à un paiement. Nous avons utilisé un exemple d'ensemble de devises dans le tableau ci-dessous, et votre ensemble de devises peut différer en fonction de votre cas d'utilisation et de votre clientèle.

| Variables de devise          | Option 1 | Option 2 | Option 3 | Option 4 | Option 5 |
| ---------------------------- | -------- | -------- | -------- | -------- | -------- |
| Base et compte de dépenses   | GBP      | GBP      | GBP      | GBP      | GBP      |
| Compte bancaire              | GBP      | USD      | USD      | GBP      | USD      |
| Transaction                  | GBP      | USD      | GBP      | USD      | EUR      |

:::info Devise étrangère dans Xero

Lors de l'enregistrement de transactions en devise étrangère, Xero ne prend pas en compte la devise de transaction. En conséquence, certaines des combinaisons de devises décrites ci-dessus deviennent redondantes.

:::

Nous validons les transactions multidevises que vous écrivez dans Expenses pour garantir que la combinaison de devises sera acceptée par le logiciel de comptabilité cible comme une dépense valide.

<table>
  <thead>
    <tr>
      <th>Intégration</th>
      <th>Type de carte</th>
      <th>Option 1</th>
      <th>Option 2</th>
      <th>Option 3</th>
      <th>Option 4</th>
      <th>Option 5</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Dynamics</td>
      <td></td>
      <td>✔️</td>
      <td>✔️</td>
      <td>❌</td>
      <td>❌</td>
      <td>❌</td>
    </tr>
    <tr>
      <td rowspan="2">NetSuite</td>
      <td>Credit</td>
      <td>✔️</td>
      <td>❌</td>
      <td>❌</td>
      <td>✔️</td>
      <td>❌</td>
    </tr>
    <tr>
      <td>Prepaid</td>
      <td>✔️</td>
      <td>✔️</td>
      <td>❌</td>
      <td>✔️</td>
      <td>❌</td>
    </tr>
    <tr>
      <td>Sage Intacct</td>
      <td></td>
      <td>✔️</td>
      <td>❌</td>
      <td>❌</td>
      <td>✔️</td>
      <td>❌</td>
    </tr>
    <tr>
      <td rowspan="2">QuickBooks Online</td>
      <td>Credit</td>
      <td>✔️</td>
      <td>✔️</td>
      <td>❌</td>
      <td>✔️</td>
      <td>❌</td>
    </tr>
    <tr>
      <td>Prepaid</td>
      <td>✔️</td>
      <td>✔️</td>
      <td>❌</td>
      <td>✔️</td>
      <td>❌</td>
    </tr>
    <tr>
      <td rowspan="2">QuickBooks Desktop</td>
      <td>Credit</td>
      <td>✔️</td>
      <td>✔️</td>
      <td>❌</td>
      <td>✔️</td>
      <td>❌</td>
    </tr>
    <tr>
      <td>Prepaid</td>
      <td>✔️</td>
      <td>✔️</td>
      <td>❌</td>
      <td>✔️</td>
      <td>❌</td>
    </tr>
    <tr>
      <td>Xero</td>
      <td></td>
      <td>✔️</td>
      <td>✔️</td>
      <td>Same as O2</td>
      <td>Same as O1</td>
      <td>Same as O2</td>
    </tr>
  </tbody>
</table>

## Remboursements

Les remboursements sont un type de transaction qui représente tout remboursement et retour sur une transaction originale. Vous pouvez [en savoir plus](/expenses/sync-process/expense-transactions#transaction-types) sur les types de transactions utilisés dans Expenses.

Dans les scénarios multidevises, il existe cinq combinaisons possibles de devises qui participent à un remboursement. Nous avons utilisé un exemple d'ensemble de devises dans le tableau ci-dessous, et votre ensemble de devises peut différer en fonction de votre cas d'utilisation et de votre clientèle.

| Variables de devise          | Option 1 | Option 2 | Option 3 | Option 4 | Option 5 |
| ---------------------------- | -------- | -------- | -------- | -------- | -------- |
| Base et compte de dépenses   | GBP      | GBP      | GBP      | GBP      | GBP      |
| Compte bancaire              | GBP      | USD      | USD      | GBP      | USD      |
| Transaction                  | GBP      | USD      | GBP      | USD      | EUR      |

:::info Devise étrangère dans Xero

Lors de l'enregistrement de transactions en devise étrangère, Xero ne prend pas en compte la devise de transaction. En conséquence, certaines des combinaisons de devises décrites ci-dessus deviennent redondantes.

:::

Nous validons les transactions multidevises que vous écrivez dans Expenses pour garantir que la combinaison de devises sera acceptée par le logiciel de comptabilité cible comme une dépense valide.

<table>
  <thead>
    <tr>
      <th>Intégration</th>
      <th>Type de carte</th>
      <th>Option 1</th>
      <th>Option 2</th>
      <th>Option 3</th>
      <th>Option 4</th>
      <th>Option 5</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Dynamics</td>
      <td></td>
      <td>✔️</td>
      <td>✔️</td>
      <td>❌</td>
      <td>❌</td>
      <td>❌</td>
    </tr>
    <tr>
      <td rowspan="2">NetSuite</td>
      <td>Credit</td>
      <td>✔️</td>
      <td>❌</td>
      <td>❌</td>
      <td>✔️</td>
      <td>❌</td>
    </tr>
    <tr>
      <td>Prepaid</td>
      <td>✔️</td>
      <td>✔️</td>
      <td>❌</td>
      <td>✔️</td>
      <td>❌</td>
    </tr>
    <tr>
      <td>Sage Intacct</td>
      <td></td>
      <td>✔️</td>
      <td>❌</td>
      <td>❌</td>
      <td>✔️</td>
      <td>❌</td>
    </tr>
    <tr>
      <td rowspan="2">QuickBooks Online</td>
      <td>Credit</td>
      <td>✔️</td>
      <td>✔️</td>
      <td>❌</td>
      <td>✔️</td>
      <td>❌</td>
    </tr>
    <tr>
      <td>Prepaid</td>
      <td>✔️</td>
      <td>✔️</td>
      <td>❌</td>
      <td>✔️</td>
      <td>❌</td>
    </tr>
    <tr>
      <td rowspan="2">QuickBooks Desktop</td>
      <td>Credit</td>
      <td>✔️</td>
      <td>✔️</td>
      <td>❌</td>
      <td>✔️</td>
      <td>❌</td>
    </tr>
    <tr>
      <td>Prepaid</td>
      <td>✔️</td>
      <td>✔️</td>
      <td>❌</td>
      <td>✔️</td>
      <td>❌</td>
    </tr>
    <tr>
      <td rowspan="2">Xero</td>
      <td>Credit</td>
      <td>✔️</td>
      <td>✔️</td>
      <td>Same as O2</td>
      <td>Same as O1</td>
      <td>Same as O2</td>
    </tr>
    <tr>
      <td>Prepaid</td>
      <td>✔️</td>
      <td>✔️</td>
      <td>Same as O2</td>
      <td>Same as O1</td>
      <td>Same as O2</td>
    </tr>
  </tbody>
</table>

## Transferts

Un transfert est le mouvement d'argent entre deux comptes bancaires. Cela peut être un retrait bancaire, un rechargement d'un compte de carte de débit ou un remboursement d'un compte de carte de crédit. En conséquence, différentes variables participent aux combinaisons de devises possibles : la devise de base de l'entreprise et les devises des comptes bancaires émetteur et récepteur.

Vous pouvez [en savoir plus](/expenses/sync-process/transfer-transactions) sur la création d'un transfert dans Expenses.

Dans les scénarios multidevises, il existe cinq combinaisons possibles de devises qui participent à un transfert. Nous avons utilisé un exemple d'ensemble de devises dans le tableau ci-dessous, et votre ensemble de devises peut différer en fonction de votre cas d'utilisation et de votre clientèle.

| Variables de devise      | Option 1 | Option 2 | Option 3 | Option 4 | Option 5 |
| ------------------------ | -------- | -------- | -------- | -------- | -------- |
| Base                     | GBP      | GBP      | GBP      | GBP      | GBP      |
| Compte bancaire (from)   | GBP      | USD      | USD      | GBP      | USD      |
| Compte bancaire (to)     | GBP      | USD      | GBP      | USD      | EUR      |

Nous validons les transactions multidevises que vous écrivez dans Expenses pour garantir que la combinaison de devises sera acceptée par le logiciel de comptabilité cible comme une dépense valide.

| Intégration            | Option 1 | Option 2 | Option 3 | Option 4 | Option 5 |
| ---------------------- | -------- | -------- | -------- | -------- | -------- |
| QuickBooks Online      | ✔️       | ✔️       | ✔️       | ✔️       | ❌       |
| QuickBooks Desktop     | ✔️       | ❌       | ❌       | ❌       | ❌       |
| Xero                   | ✔️       | ✔️       | ❌       | ❌       | ❌       |

---

## À lire ensuite

- [Référence API](/sync-for-expenses-api#/)
- [Aperçu d'Expenses](/expenses/overview)
- [Types de transactions de dépenses](/expenses/sync-process/expense-transactions#transaction-types)
