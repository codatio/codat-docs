---
title: "Tester votre intégration Xero"
sidebar_label: Tests
description: "Créez une entreprise de démonstration Xero et accédez avec succès à ses données sandbox via l'intégration Xero de Codat"
createdAt: "2022-03-08T09:56:46.839Z"
updatedAt: "2022-09-29T15:12:55.393Z"
---

Lorsque vous avez configuré votre intégration Xero, vous êtes prêt à tester le processus d'autorisation en connectant une entreprise aux données de test dans Xero. Codat recommande de le faire avant d'envoyer des URL Link à vos clients.

Pour tester votre intégration, vous devrez :

- Configurer une entreprise de test dans le Portail Codat.
- Créer une entreprise de démonstration dans Xero.
- Générer une URL Link.
- En utilisant Link, essayer le processus de connexion de votre entreprise de test à votre entreprise de démonstration dans Xero.

## Prérequis

Assurez-vous d'avoir [configuré votre intégration Xero](/integrations/accounting/xero/accounting-xero-setup).

## Créer une entreprise de démonstration Xero

1. Connectez-vous à <a href="https://xero.com" target="_blank">Xero</a> en utilisant les identifiants de votre compte développeur.

2. Suivez les instructions dans <a href="https://central.xero.com/s/article/Use-the-demo-company" target="_blank">Utiliser l'entreprise de démonstration</a> pour accéder ou créer une entreprise de démonstration.

## Créer une entreprise et la lier à Xero

Créez une entreprise de test dans le Portail Codat et connectez-la à votre entreprise de démonstration Xero.

1. Dans la barre de navigation, sélectionnez **Entreprises**, puis cliquez sur **Nouvelle entreprise**.

2. Entrez un nom pour votre entreprise de test, tel que `xero-test`, puis cliquez sur **Ajouter**. Copiez l'**URL Link** de votre entreprise de test.

3. Entrez l'URL Link dans un navigateur. Link pour votre intégration s'affiche.

4. Suivez les instructions dans Link ; assurez-vous de sélectionner **Xero** comme intégration à connecter.

5. Il se peut qu'on vous demande de sélectionner une organisation. Sélectionnez l'entreprise de démonstration que vous avez créée dans la tâche précédente, puis cliquez sur **Autoriser l'accès**.

   ![Fenêtre d'autorisation de l'application Xero](/img/old/658ee87-Xero-Authorize.png "La fenêtre contextuelle de demande d'accès Xero qui invite l'utilisateur à autoriser l'accès Codat aux données de l'entreprise de démonstration Xero.")

6. Lorsque vous avez complété toutes les étapes dans Link, vous pouvez fermer l'onglet ou la fenêtre du navigateur.

## Affichage des données de test de Xero dans Codat

Affichez les données de test de l'entreprise de démonstration Xero dans le Portail Codat.

1. Accédez à la page **Entreprises** et sélectionnez l'entreprise de test que vous avez créée précédemment et liée à Xero.

2. Affichez les données de test de Xero sous l'onglet **Comptabilité**.

Si vous ne voyez aucune donnée de test, vous pouvez vérifier si la synchronisation s'est terminée avec succès. Depuis la page **Entreprises**, cliquez sur **Historique de lecture**. Vérifiez également que les types de données pris en charge sont définis sur **Récupérer lors de la première liaison** dans **Paramètres > Types de données**.

## Et ensuite ?

Ensuite, vous voudrez peut-être :

- Modifier vos paramètres de synchronisation pour changer quels types de données lire depuis Xero.
- Essayer l'API d'écriture pour créer ou modifier des données dans Xero.

:::info Test des données bancaires dans Xero
Il n'est pas possible de créer des transactions bancaires dans les entreprises de démonstration Xero. Pour tester cette fonctionnalité, vous devrez vous inscrire à un essai gratuit ou créer une organisation Xero payante.
:::
