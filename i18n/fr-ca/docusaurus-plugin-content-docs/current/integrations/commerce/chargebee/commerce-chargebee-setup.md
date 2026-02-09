---
title: "Configurer l'intégration Chargebee"
description: "Configurez l'intégration Chargebee pour récupérer les données de facturation récurrente et d'abonnements de vos clients PME"
sidebar_label: Setup
unlisted: true
---

Avant de pouvoir utiliser l'intégration, vos clients PME (commerçants qui utilisent Chargebee) doivent récupérer leurs identifiants API sécurisés de leur compte Chargebee et les saisir dans [Link](/auth-flow/overview). Chargebee ne nécessite aucun identifiant global pour accéder à l'API.

Pour commencer à lire les données depuis Chargebee :

- [ ] Activer l'intégration Chargebee
- [ ] Créer des entreprises dans Codat et partager les URL Link avec vos clients PME
- [ ] Demander à votre client de connecter son compte Chargebee à Codat

## Activer l'intégration Chargebee

1. Dans le portail Codat, allez à la page <a className="external" href="https://app.codat.io/settings/integrations/commerce" target="blank">**Commerce integrations**</a>.
2. Localisez **Chargebee** et cliquez sur le bouton bascule pour activer l'intégration.

Vous pouvez également cliquer sur **Manage** pour afficher la page des paramètres de l'intégration, puis activer l'intégration à partir de là.

## Créer une entreprise et partager l'URL Link avec vos clients PME

:::note Options pour l'authentification PME

L'utilisation de Link pour l'authentification PME est facultative. Vous pouvez également créer votre propre flux d'authentification en utilisant l'API Codat (la clé de plateforme pour Chargebee est requise).
:::

Dans le <a className="external" href="https://app.codat.io" target="_blank">portail Codat</a> :

1. Cliquez sur **Companies > New company**.
2. Dans la boîte de dialogue **Add new company**, entrez un nom pour l'entreprise, puis cliquez sur **Add**. L'URL Link s'affiche.
3. Fournissez l'URL Link à vos clients PME.

## Client PME : Connecte son compte Chargebee à Codat

Votre client PME connecte son compte Chargebee à Codat en utilisant Link. Pour s'authentifier avec Codat, il doit obtenir sa _clé API_ de Chargebee.

Pour obtenir de l'aide avec cette procédure, voir <a className="external" href="https://www.chargebee.com/docs/2.0/api_keys.html#creating-an-api-key" target="_blank">Creating an API key</a> dans la documentation Chargebee.

Votre client PME effectue les étapes suivantes :

1. Ouvre l'URL Link dans son navigateur.

2. Sur l'étape Commerce dans Link, il sélectionne la tuile **Chargebee**, puis clique sur **Next**.

3. Examine les autorisations demandées sur la page **Connect to Chargebee**, puis clique sur **Next**.

   La page **Your Chargebee credentials** s'affiche.

   ![Your Chargebee credentials](/img/old/678461b-your-chargebee-credentials-final-masked.png "The Your Chargebee credentials page")

4. Ouvre un nouvel onglet de navigateur et se connecte à son compte Chargebee.

5. Dans le panneau latéral, clique sur **Settings** puis sur **Configure Chargebee**.

6. Dans la section **API Keys and Webhooks**, clique sur **API Keys** pour afficher sa clé API.

7. Sur la page **Your Chargebee credentials**, il entre les détails suivants :
   - Nom du site Chargebee. Cela fait partie de l'URL, par exemple, `https://site-name.chargebee.com`.
   - Clé API Chargebee.

8. Clique sur **Continue**.

9. Si la connexion de données a réussi, il clique sur **Finish** pour fermer Link.

Votre client PME a maintenant connecté son compte Chargebee à Codat.
