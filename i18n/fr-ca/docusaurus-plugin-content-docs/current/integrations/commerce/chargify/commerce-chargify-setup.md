---
title: "Configurer l'intégration Maxio"
description: "Explorez notre intégration API avec Maxio"
sidebar_label: Setup
unlisted: true
---

Configurez l'intégration [Maxio](/integrations/commerce/chargify/commerce-chargify) pour récupérer les données de facturation récurrente et d'abonnements de vos clients PME.

Avant de pouvoir utiliser l'intégration, vos clients PME (commerçants qui utilisent Maxio) doivent récupérer leurs identifiants API sécurisés de leur compte Maxio et les saisir dans [Link](/auth-flow/overview). Maxio ne nécessite aucun identifiant global pour accéder à l'API.

Pour commencer à lire les données depuis Chargebee :

- [ ] Activer l'intégration Chargebee
- [ ] Créer des entreprises dans Codat et partager les URL Link avec vos clients PME
- [ ] Demander à votre client de connecter son compte Chargebee à Codat

## Activer l'intégration Maxio

1. Dans le portail Codat, allez à la page <a className="external" href="https://app.codat.io/settings/integrations/commerce" target="blank">**Commerce integrations**</a>.
2. Localisez **Maxio** et cliquez sur le bouton bascule pour activer l'intégration.

Vous pouvez également cliquer sur **Manage** pour afficher la page des paramètres de l'intégration, puis activer l'intégration à partir de là.

## Créer une entreprise et partager l'URL Link avec vos clients PME

:::note Options pour l'authentification PME

L'utilisation de Link pour l'authentification PME est facultative. Vous pouvez également créer votre propre flux d'authentification en utilisant l'API Codat (la clé de plateforme pour Maxio est requise).
:::

Dans le <a className="external" href="https://app.codat.io" target="_blank">portail Codat</a> :

1. Cliquez sur **Companies > New company**.
2. Dans la boîte de dialogue **Add new company**, entrez un nom pour l'entreprise, puis cliquez sur **Add**. L'URL Link s'affiche.
3. Fournissez l'URL Link à vos clients PME.

## Client PME : Connecte son compte Maxio à Codat

Votre client PME connecte son compte Maxio à Codat en utilisant Link. Pour s'authentifier avec Codat, il obtient sa _clé API_ de Maxio.

Pour obtenir de l'aide avec cette procédure, voir <a className="external" href="https://maxio-chargify.zendesk.com/hc/en-us/articles/5405281550477#api" target="_blank">API Keys</a> dans le centre d'aide Maxio.

Votre client PME effectue les étapes suivantes :

1. Ouvre l'URL Link dans son navigateur.

2. Sur l'étape Commerce dans Link, il sélectionne la tuile **Maxio**, puis clique sur **Next**.

3. Examine les autorisations demandées sur la page **Connect to Maxio**, puis clique sur **Next**.

   La page **Your Maxio credentials** s'affiche.

   ![Your Maxio credentials](/img/old/66cdc91-your-chargify-credentials-final-masked.png "The Your Maxio credentials page")

4. Ouvre un nouvel onglet de navigateur, visite <a className="external" href="https://app.chargify.com/login.html" target="_blank">app.chargify.com</a>, et se connecte à son compte Maxio.

5. Dans le panneau latéral, clique sur **Config** puis **Integrations**.

6. Clique sur **API Keys** pour afficher toutes les clés API.

7. Entre la clé API dans la page **Your Maxio credentials** dans Link. La clé API doit avoir les autorisations administrateur activées.

8. Clique sur **Continue**.

9. Si la connexion de données a réussi, il clique sur **Finish** pour fermer Link.

Votre client PME a maintenant connecté son compte Maxio à Codat.
