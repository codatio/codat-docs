---
title: "Configurer Shopify avec les applications personnalisées"
description: "Apprenez comment configurer l'intégration Shopify en utilisant l'approche par applications personnalisées pour la connexion des données marchandes"
sidebar_label: Applications personnalisées
---

Cet article explique comment configurer l'intégration Shopify en utilisant l'approche _applications personnalisées_ pour permettre à vos marchands de connecter et partager leurs données commerce.

Avant de commencer, assurez-vous de comprendre le flux de connexion des marchands lors de l'utilisation d'applications personnalisées.

## Flux de connexion du marchand avec une application personnalisée

Lorsque l'intégration est activée avec l'approche _applications personnalisées_, les marchands sont dirigés vers une interface de connexion de boutique Shopify pendant le flux Codat Link.

_Interface de connexion de boutique Shopify_

![An image of the Shopify store connection UI](/img/integrations/commerce/shopify/7a2c893-shopify-code-connect-your-shopify-store-custom-apps.png)

Le marchand est invité à créer et installer une application personnalisée dans son compte administrateur Shopify et à fournir le nom de la boutique, l'ID client et le secret client de l'application.

L'interface comprend une section **Trouver vos identifiants Shopify** qui guide le marchand tout au long du processus. Pour plus de détails, consultez la documentation Shopify sur les <a class="external" href="https://help.shopify.com/en/manual/apps/app-types/custom-apps" target="_blank">Applications personnalisées</a> (**Créer une application personnalisée** et **Installer une application personnalisée**) et <a class="external" href="https://shopify.dev/docs/apps/launch/distribution/select-distribution-method" target="_blank">Sélectionner une méthode de distribution</a>. Le marchand doit effectuer les étapes suivantes.

### Créer et configurer l'application personnalisée

1. Depuis votre administrateur Shopify, allez dans **Paramètres** > **Applications**.

2. Cliquez sur **Développer des applications**.

3. Cliquez sur **Créer des applications dans le tableau de bord Dev**.

4. Depuis votre tableau de bord Dev, cliquez sur **Créer une application**.

5. Dans la section **Démarrer depuis le tableau de bord Dev**, nommez votre application, puis cliquez sur **Créer**.

6. Créez une version pour votre application :
   - **URL de l'application** : `https://shopify.dev/apps/default-app-home`
   - Décochez **Intégrer l'application dans l'administrateur Shopify**
   - Dans la section **Accès**, entrez ces portées d'application :
     ```
     read_customers, read_inventory, read_orders, read_products,
     read_shopify_payments_payouts, read_shopify_payments_disputes
     ```
   - Cliquez sur **Publier**
   - (Optionnel) Entrez un nom de version et un message de version
   - Cliquez sur **Publier**

### Sélectionner la distribution personnalisée et installer l'application

7. Allez dans **Accueil de l'application** > **Distribution** et cliquez sur **Sélectionner une méthode de distribution**.

8. Choisissez **Distribution personnalisée** et cliquez sur **Sélectionner**.

9. Dans **Domaine de la boutique**, collez le domaine de votre boutique et cliquez sur **Générer le lien**.

10. Copiez le lien généré et ouvrez-le dans votre navigateur.

11. Choisissez votre boutique et cliquez sur **Installer**.

### Obtenir l'ID client et le secret

12. Retournez à l'application et allez dans **Paramètres** > **Identifiants** pour trouver votre ID client et votre secret.

### Compléter la connexion dans Codat Link

Ensuite, le marchand doit :

1. Entrer le nom de sa boutique dans le champ **Nom de la boutique Shopify** (la partie avant `.myshopify.com`—par exemple, `my-store-name`).

2. Entrer l'**ID client Shopify** depuis **Paramètres** > **Identifiants** de l'application.

3. Entrer le **Secret client Shopify** depuis **Paramètres** > **Identifiants** de l'application.

4. Cliquer sur **Continuer** pour soumettre le nom de la boutique, l'ID client et le secret client à Codat.

L'écran de succès de Link s'affiche si l'application personnalisée a été connectée avec succès.

## Aperçu de la configuration de l'intégration

Pour configurer l'intégration Shopify avec les applications personnalisées, vous devrez :

- Vérifier les permissions requises pour les marchands.
- Configurer l'intégration Shopify sans saisir d'identifiants, puis l'activer.
- Vérifier les paramètres de synchronisation commerce
- Envoyer les URL Link à vos marchands.

## Permissions requises pour les marchands

Les marchands doivent avoir les permissions suivantes pour connecter leur boutique Shopify et partager des données commerce.

- La permission **Activer le développement d'applications** (requise pour activer le développement d'applications personnalisées).

- La permission **Développer des applications**.

- Toutes les <a class="external" href="https://help.shopify.com/en/manual/your-account/staff-accounts/staff-permissions" target="_blank">permissions du personnel</a> requises par les portées d'accès listées dans **Créer et configurer l'application personnalisée**.

## Configurer l'intégration Shopify pour une utilisation avec les applications personnalisées

Pour configurer l'intégration Shopify pour une utilisation avec l'approche _applications personnalisées_ :

1. Dans le portail Codat, accédez à la page <a class="external" href="https://app.codat.io/settings/integrations/commerce" target="blank">**Intégrations Commerce**</a>.

2. Localisez **Shopify** et sélectionnez **Gérer** pour afficher la page **Paramètres d'intégration**.

3. Laissez les champs **URL de l'application**, **ID client** et **Secret client** vides.

4. Laissez le bouton bascule **A demandé à lire toutes les commandes** désactivé.

   :::note Commandes lues par défaut
   Toutes les commandes sont disponibles à la lecture depuis Shopify par défaut lors de l'utilisation de la méthode de connexion par applications personnalisées.
   :::

5. Cliquez sur **Enregistrer**.

6. Activez l'intégration en définissant le bouton bascule sur **Activé**.

Si l'intégration a été activée avec succès, le message **Application personnalisée Shopify activée** s'affiche en haut à droite :

![](/img/integrations/commerce/shopify/73719b7-shopify-custom-apps-enabled-toast.png)

## Vérifier les paramètres de synchronisation commerce

Tous les types de données commerce doivent être activés avant de pouvoir lire les transactions commerce de Shopify vers Codat. Suivez les étapes dans [Paramètres de synchronisation commerce](/integrations/commerce/commerce-sync-settings) ; vous n'avez besoin de le faire qu'une seule fois.

## Étapes suivantes

[Testez votre intégration Shopify](/integrations/commerce/shopify/test-shopify) avant d'envoyer les URL Link aux marchands.
