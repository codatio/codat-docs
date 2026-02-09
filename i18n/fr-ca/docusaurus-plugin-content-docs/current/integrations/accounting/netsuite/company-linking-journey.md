---
title: "Parcours de liaison d'entreprise Oracle NetSuite"
description: "Découvrez comment vos clients PME peuvent connecter leurs comptes NetSuite à Codat."
sidebar_label: Spécificités du flux d'authentification
---

Lorsque votre client lie son compte NetSuite via Codat pour la première fois, il doit se connecter avec un [compte administrateur](https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/section_4570420905.html) et configurer son instance NetSuite pour permettre une connexion. Vos clients seront guidés tout au long de ce parcours pendant le flux d'autorisation. Pour référence, les étapes qu'ils doivent suivre sont documentées ci-dessous.

:::warning Prérequis

Si la fonctionnalité _Token-based Authentication_ n'a pas été activée, votre client recevra un message d'erreur dans NetSuite lorsqu'il essaiera de demander des données.

Pour installer des bundles sur leur compte, votre client doit avoir le rôle d'administrateur ou l'autorisation pertinente pour permettre l'installation de bundle.

Si vos clients ne suivent pas ces étapes correctement, le processus de liaison échouera.
:::

## 1. Installer le bundle NetSuite

**Production**

- Bundle ID: 391485
- Bundle Name: AppLink

Pour installer ce bundle, votre client doit

1. Se connecter à NetSuite
2. Aller dans _Customization > SuiteBundler > Search & Install Bundles (Administrator)_
3. Saisir le nom du bundle comme ci-dessus
4. Sélectionner le bundle
5. Cliquer sur le bouton 'Install Bundle'

Dans le processus de liaison, votre client sera dirigé vers un lien similaire à celui-ci pour votre instance NetSuite [https://6950262.app.netsuite.com/app/bundler/installbundle.nl?whence=](https://6950262.app.netsuite.com/app/bundler/installbundle.nl?whence=) après quoi il sera guidé à travers les étapes 3 à 5 ci-dessus.

:::info Bundles non gérés

Les bundles de Codat sont appelés 'bundles non gérés' dans Oracle NetSuite. Cela signifie qu'avec d'éventuelles mises à jour de bundle à l'avenir, vous devrez informer vos clients qu'ils devront mettre à niveau leurs bundles vers la nouvelle version individuellement sur leurs comptes.
:::

## 2. Activer les fonctionnalités SuiteCloud

Votre client doit activer les fonctionnalités SuiteCloud suivantes.

- SuiteScript > **Client SuiteScript**
- SuiteScript > **Server SuiteScript**
- SuiteTalk (Web Services) > **Rest Web Services**
- Manage Authentication > **Token-based Authentication**

Pour activer les fonctionnalités, votre client doit

1. Se connecter à NetSuite
2. Aller dans _Setup > Company > Enable features > SuiteCloud tab_.
3. Cocher la case à côté de chacune des fonctionnalités ci-dessus
4. Faire défiler jusqu'en bas de la fenêtre modale des termes et conditions et accepter
5. Enregistrer les modifications.

Pendant le processus de liaison, votre client sera dirigé vers [ce lien](https://6950262.app.netsuite.com/app/bundler/installbundle.nl?whence=), où il sera guidé à travers les étapes 3 et 4 ci-dessus.
