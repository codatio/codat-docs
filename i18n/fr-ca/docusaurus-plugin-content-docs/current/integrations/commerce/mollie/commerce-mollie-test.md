---
title: "Tester votre intégration Mollie"
description: "Testez notre intégration Mollie en lisant des données sandbox d'une entreprise test"
sidebar_label: Testing
unlisted: true
---

Vous pouvez utiliser l'intégration Mollie Test pour lire des données de test de Mollie dans Codat.

### Prérequis

- [ ] [Activer l'intégration Mollie Test](/integrations/commerce/mollie/commerce-mollie-setup).
- [ ] Activer les types de données commerce

## Créer des données dans Mollie

Mollie ne fournit aucun exemple de données - vous devez créer des données de test en utilisant l'API Mollie afin de pouvoir récupérer et visualiser les données commerce de votre entreprise test. Vous pouvez créer des exemples de données pour Customers, Orders, Payments et Transactions.

Dans l'intégration Test, Codat considère les données Mollie comme des exemples lorsque son paramètre `testmode` est passé comme True.

Pour obtenir de l'aide pour ajouter des transactions de test, voir <a className="external" href="https://docs.mollie.com/overview/testing" target="_blank">Testing the Mollie API</a> dans la documentation Mollie.

:::caution Limitations des données de paiement Mollie

Vous ne pouvez pas créer de données de test Disputes et Settlements en raison de limitations légales locales pour le stockage d'exemples de données. De plus, les types de données Products et Locations ne sont pas pris en charge par Mollie.
:::

## Créer une entreprise

Dans le <a href="https://app.codat.io" target="_blank">portail Codat</a> :

1. Dans la barre de navigation, cliquez sur **Companies**.
2. Cliquez sur **Create Company**.
3. Dans la boîte de dialogue **Add new company**, entrez un nom pour votre entreprise test, tel que `mollie-test`, puis cliquez sur **Add**. L'URL Link pour votre entreprise test s'affiche.

## Connecter votre entreprise test à votre compte marchand Mollie

Testez le processus d'authentification que vos clients utiliseront lorsqu'ils connecteront leur compte marchand Mollie dans Link.

1. Assurez-vous d'être connecté à votre compte marchand <a className="external" href="https://www.mollie.com/en" target="_blank">Mollie</a>.
2. Dans le portail Codat, cliquez sur **Companies** dans la barre de navigation.
3. Survolez votre entreprise test, puis cliquez sur **Link URL**. La boîte de dialogue Onboarding s'affiche.
4. Copiez l'**URL Link** et collez-la dans un nouvel onglet de navigateur. Cela charge [Link](/auth-flow/overview).
5. Complétez les étapes dans Link ; les étapes exactes dépendent de vos paramètres Link.

   Vous devrez :

6. Sélectionner **Mollie Test** comme logiciel commerce à connecter.
   <img src="/img/old/19b0bff-36001_Mollie_-_selection.PNG" />
7. Vous connecter à votre compte marchand Mollie si vous y êtes invité.
8. Autoriser l'accès aux types de données Mollie demandés.
9. La page **Connection Successful** dans Link s'affiche avec le message : « You have connected Mollie Test. »
10. Complétez le flux Link, puis cliquez sur **Finish**.

## Récupérer des données commerce

Assurez-vous que les données commerce de test de Mollie sont lues avec succès dans Codat. Vous pouvez vérifier quelles données de test vous avez créées en activant le bouton bascule Test Mode dans le tableau de bord Mollie.

<img src="/img/old/762109c-36001_Mollie_-_test_toggle.PNG" />

Dans le <a href="https://app.codat.io" target="_blank">portail Codat</a> :

1. Dans la barre de navigation, cliquez sur **Companies**.
2. Cliquez sur le nom d'une entreprise pour afficher les données de l'entreprise.
3. Cliquez sur **Data > Commerce**.
4. Utilisez le menu déroulant du type de données pour afficher les données de test qui ont été lues depuis Mollie. Par exemple, cliquez sur **Customers** ou **Transactions**.

:::caution Les données n'apparaissent pas ?

Cliquez sur **Data history > Read history** pour vérifier la progression de la synchronisation initiale (si configurée dans vos paramètres de synchronisation). Si aucune donnée n'a été lue, cliquez sur **Refresh data**.

Les données ne sont disponibles que lorsque :

- Le type de données est pris en charge
- Vous avez [créé des données de test](#create-some-data-in-mollie)
  :::

Maintenant que vous avez testé l'intégration et examiné des exemples de données, vous pouvez [créer votre première entreprise en direct](/configure/portal/companies#add-a-new-company).

---

## Lire ensuite

[Référence d'intégration Mollie](/integrations/commerce/mollie/mollie-integration-reference)
