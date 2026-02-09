---
title: "Configurer l'intégration Recurly"
description: "Découvrez notre intégration API avec Recurly"
sidebar_label: Configuration
unlisted: true
---

Configurez l'intégration [Recurly](/integrations/commerce/recurly/commerce-recurly) pour récupérer les données de facturation récurrente et d'abonnements de vos clients PME.

Avant de pouvoir utiliser l'intégration, vos clients PME (marchands utilisant Recurly) doivent récupérer leurs identifiants API sécurisés depuis leur compte Recurly et les saisir dans [Link](/auth-flow/overview). Recurly ne nécessite aucun identifiant global pour accéder à l'API.

Pour configurer l'intégration, vous effectuez ces tâches :

- Activer l'intégration Recurly
- Créer des entreprises dans Codat puis partager l'URL Link avec vos clients PME

Ensuite, le client PME effectue cette tâche :

- Connecter son compte Recurly à Codat

## Activer l'intégration Recurly

1. Dans le portail Codat, accédez à la page <a className="external" href="https://app.codat.io/settings/integrations/commerce" target="blank">**Intégrations Commerce**</a>.
2. Localisez **Recurly** et cliquez sur le bouton bascule pour activer l'intégration.

Vous pouvez également cliquer sur **Gérer** pour afficher la page des paramètres de l'intégration, puis activer l'intégration à partir de là.

## Créer une entreprise et partager l'URL Link avec vos clients PME

:::note Options pour l'authentification PME

L'utilisation de Link pour l'authentification PME est optionnelle. Vous pouvez également créer votre propre flux d'authentification en utilisant l'API Codat (la clé de plateforme pour Recurly est requise).
:::

Dans le <a className="external" href="https://app.codat.io" target="_blank">portail Codat</a> :

1. Cliquez sur **Entreprises > Nouvelle entreprise**.
2. Dans la boîte de dialogue **Ajouter une nouvelle entreprise**, saisissez un nom pour l'entreprise, puis cliquez sur **Ajouter**. L'URL Link s'affiche.
3. Fournissez l'URL Link à vos clients PME.

## Client PME : Connecter son compte Recurly à Codat

Votre client PME connecte son compte Recurly à Codat en utilisant Link. Pour s'authentifier avec Codat, il doit obtenir sa _clé API privée_ depuis Recurly.

Pour obtenir de l'aide avec cette procédure, consultez <a className="external" href="https://developers.recurly.com/api-v2/v2.29/index.html#section/Authentication" target="_blank">Authentication</a> dans la documentation Recurly.

Votre client PME effectue les étapes suivantes :

1. Ouvre l'URL Link dans son navigateur.

2. À l'étape Commerce dans Link, il sélectionne la tuile **Recurly**, puis clique sur **Suivant**.

3. Examine les permissions demandées sur la page **Se connecter à Recurly**, puis clique sur **Suivant**.

   La page **Votre clé API Recurly** s'affiche.

   ![Your Recurly API key](/img/old/3df665f-your-recurly-api-key-masked.png "La page Votre clé API Recurly")

4. Ouvre un nouvel onglet de navigateur, visite <a className="external" href="https://app.recurly.com/" target="_blank">app.recurly.com</a>, et se connecte à son compte Recurly.

5. Dans le panneau latéral, clique sur **Integrations** puis **API Credentials**.

6. Clique sur l'icône œil pour révéler la **Private API Key**.

7. Saisit sa clé dans la page **Votre clé API Recurly**.

8. Clique sur **Continuer**.

9. Si la connexion de données a réussi, il clique sur **Terminer** pour fermer Link.

Votre client PME a maintenant connecté son compte Recurly à Codat.
