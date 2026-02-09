---
title: "Configurer l'intégration Oracle NetSuite"
description: "Explorez notre intégration API avec Oracle NetSuite"
sidebar_label: Configuration
---

Oracle NetSuite est un service en ligne qui permet aux entreprises de gérer tous les processus métier clés dans un seul système.

Avant de pouvoir accéder aux données de vos clients utilisant Oracle NetSuite pour leur comptabilité, vous devez configurer une intégration Oracle NetSuite dans le portail Codat. Vous devrez :

- Activer votre intégration Oracle NetSuite dans le portail Codat.
- Configurer votre client en tant qu'entreprise et lui envoyer l'URL Link pour accéder à ses données comptables.

## Configurer l'intégration Oracle NetSuite

Oracle NetSuite ne nécessite aucun identifiant global pour accéder à l'API. Au lieu de cela, vos clients seront invités à installer un [bundle](https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/chapter_N3363483.html#SuiteBundler-Overview) contenant la configuration de l'intégration Codat. Plus précisément, le bundle contient un script utilisé pour obtenir ou mettre à jour certains types de données (par exemple, les pièces jointes) et un enregistrement d'intégration pour activer le processus de liaison. Lors de la liaison, si l'entreprise n'a pas encore installé le bundle, elle sera redirigée vers une page contenant des informations sur le processus d'installation.

Pour installer des bundles sur leur compte, l'entreprise doit avoir le rôle d'administrateur ou l'autorisation pertinente pour permettre l'installation de bundle.

:::note Bundles non gérés

Les bundles de Codat sont appelés bundles non gérés dans Oracle NetSuite. Cela signifie qu'avec d'éventuelles mises à jour de bundle à l'avenir, vous devrez informer vos clients qu'ils devront mettre à niveau leurs bundles vers la nouvelle version individuellement sur leurs comptes.
:::

1. Connectez-vous au [portail Codat](https://app.codat.io).
2. Dans la barre de navigation, sélectionnez **Settings > Integrations > Accounting**.
3. Trouvez **Oracle NetSuite**, puis sélectionnez **Set up** pour afficher la page **Integration settings**.
4. Choisissez le type d'accès aux données de l'entreprise que vous souhaitez avoir pour cette intégration : ponctuel ou continu. Pour obtenir de l'aide, consultez [Paramètres de synchronisation](/core-concepts/data-type-settings).
5. Cliquez sur **Save**.

## Activer l'intégration Oracle NetSuite

1. Dans le portail Codat, accédez à la page <a className="external" href="https://app.codat.io/settings/integrations/accounting" target="blank">**Intégrations comptables**</a>.
2. Localisez **Oracle NetSuite** et cliquez sur le bouton à bascule pour activer l'intégration.

Vous pouvez également cliquer sur **Manage** pour afficher la page des paramètres de l'intégration, puis activer l'intégration à partir de là.

## Configurer une entreprise pour votre client

Vous pouvez configurer une entreprise qui représente votre client PME de deux façons :

1. Dans le [portail Codat](http://app.codat.io), accédez à **Companies > Add new company**, saisissez un nom pour l'entreprise de votre client et sélectionnez **Add**. Cette approche peut être particulièrement utile lorsque vous testez votre solution pendant la construction.
2. Effectuez un appel à notre API en utilisant le point de terminaison [Create company](/platform-api#/operations/create-company), en passant le `name` et la `description` de l'entreprise comme paramètres.

Dans les deux cas, vous recevrez une URL Link en réponse. Envoyez-la à votre client pour qu'il puisse se connecter à son compte Oracle NetSuite pour confirmer la connexion. Il devra **Allow** l'application Link pour accéder aux données Oracle NetSuite, puis choisir le compte **Production**.
