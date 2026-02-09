---
title: "Tester PrestaShop"
description: "Testez notre intégration PrestaShop en lisant des exemples de données vers une entreprise test"
sidebar_label: Testing
unlisted: true
---

Lorsque vous avez [configuré PrestaShop](/integrations/commerce/prestashop/set-up-prestashop-in-production), vous êtes prêt à tester le processus d'autorisation pour votre intégration. Vous devrez :

- Générer une URL Link pour connecter votre entreprise test à votre sandbox PrestaShop.
- Récupérer des données commerce.

## Prérequis

Avant de commencer à tester PrestaShop, assurez-vous d'avoir :

- Accès à une instance PrestaShop à des fins de test.
- Pour les instructions sur le processus d'installation et d'hébergement de PrestaShop, veuillez consulter les guides officiels suivants :
  - <a
      href="https://www.prestashop.com/en/blog/how-to-install-prestashop"
      target="_blank"
    >
      Installation Guide
    </a>
  - <a
      href="https://doc.prestashop.com/display/PS17/Getting+started"
      target="_blank"
    >
      Official Getting Started Guide
    </a>
- Configuré [PrestaShop](/integrations/commerce/prestashop/set-up-prestashop-in-production).
- Mis à jour vos [paramètres de synchronisation](/integrations/commerce/commerce-sync-settings) pour activer les types de données commerce.

## Configurer une entreprise test dans le portail Codat et connecter votre entreprise test à un compte test dans PrestaShop

1. Accédez au <a href="https://portal-uat.codat.io/" target="_blank">portail Codat</a> et connectez-vous.
2. Allez à **Companies**.
3. Sur le côté droit de la page, sélectionnez **Add new company**
4. Entrez un nom pour votre entreprise test et sélectionnez **Add**. Cela créera une entreprise et affichera une URL Link, permettant la capture des identifiants PrestaShop.
5. Collez l'URL link dans votre navigateur, ce qui vous amène à l'interface utilisateur Codat Link.
6. Choisissez **PrestaShop** puis **Continue to PrestaShop**.
7. Configurez votre instance PrestaShop et récupérez votre clé Webservice PrestaShop (vous trouverez les étapes pour le faire lors de la navigation vers PrestaShop via l'interface utilisateur Link).
8. Entrez votre adresse Web PrestaShop et votre clé Webservice dans l'interface utilisateur Link.

## Récupérer des exemples de données commerce

Pour vous assurer que les données commerce ont été lues avec succès dans le portail Codat :

1. Accédez au portail Codat où vous avez activé votre intégration.
2. Dans la barre de navigation, sélectionnez **Companies**, puis sélectionnez l'entreprise test que vous avez créée.
3. Sélectionnez **Data > Commerce** pour voir les données pour tous les types de données Commerce.
4. Si aucune donnée n'est affichée, cliquez sur **Refresh data**. Vous pouvez également afficher **Read history** pour vérifier le statut des synchronisations de données précédentes.
