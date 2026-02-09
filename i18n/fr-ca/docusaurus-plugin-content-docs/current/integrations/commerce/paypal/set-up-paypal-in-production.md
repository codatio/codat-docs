---
title: "Configurer l'intégration PayPal"
description: "Explorez notre intégration API avec PayPal"
sidebar_label: Setup
unlisted: true
---

Avant de pouvoir accéder aux données commerce de vos clients depuis PayPal, vous devez configurer votre intégration.

:::caution

Avant de commencer, lisez les exigences du fournisseur sur la page [PayPal](/integrations/commerce/paypal/commerce-paypal).
:::

Vous devrez :

- Vous connecter au [portail Codat](https://app.codat.io/).
- Vous inscrire en tant que fournisseur tiers (TPP) pour accéder à l'API X2SA de PayPal et demander vos identifiants sandbox. PayPal exigera que vous leur fournissiez soit un QWAC eIDAS soit un OBWAC (c'est-à-dire une certification Open Banking)
- Ajouter vos identifiants sécurisés au portail Codat et activer votre intégration PayPal test.
- Vérifier vos paramètres de synchronisation.

## S'inscrire en tant que fournisseur tiers et demander vos identifiants en direct

1. Accédez à [https://www.paypal.com/partnerexp/tppLanding/](https://www.paypal.com/partnerexp/tppLanding/) et inscrivez-vous en tant que fournisseur tiers (TPP) pour l'API X2SA de PayPal
2. Entrez `https://paypal.codat.io/oauth/callback` dans le champ « Your return URL ».
3. Après avoir soumis le formulaire, vos identifiants (`Client ID` et `Client Secret`) sont disponibles en téléchargement. Remarque :
   a) PayPal doit activer les identifiants après leur création. **Cela peut prendre plusieurs jours ; jusqu'à ce que cela soit complété par PayPal, vous ne pourrez pas accéder à l'API PayPal X2SA via Codat**.
   b) Vous pouvez contacter PayPal pour obtenir de l'aide à dl-pp-tpp@paypal.com

:::caution Gardez vos identifiants en direct en sécurité

Assurez-vous de garder vos identifiants en direct en sécurité ; il n'est normalement pas possible de récupérer ces informations de PayPal à nouveau après leur demande initiale.
:::

## Ajouter votre application au portail Codat

1. Connectez-vous au [portail Codat](https://app.codat.io/).
2. Dans la barre de navigation, sélectionnez **Settings > Integrations > Commerce**.
3. Trouvez **PayPal**, puis sélectionnez **Set up** pour afficher la page **Integration settings**.
4. Copiez les valeurs `Client ID` et `Client Secret` obtenues de PayPal à l'étape précédente et collez-les dans les champs Client ID et Client Secret dans le portail Codat.
5. Sélectionnez **Save**.

## Activer l'intégration PayPal

1. Dans le portail Codat, allez à la page <a className="external" href="https://app.codat.io/settings/integrations/commerce" target="blank">**Commerce integrations**</a>.
2. Localisez **PayPal** et cliquez sur le bouton bascule pour activer l'intégration.

Vous pouvez également cliquer sur **Manage** pour afficher la page des paramètres de l'intégration, puis activer l'intégration à partir de là.

## Vérifiez vos paramètres de synchronisation dans le portail Codat

S'il s'agit de votre première intégration commerce, mettez à jour vos [paramètres de type de données](/integrations/commerce/commerce-sync-settings) pour activer les types de données commerce.
