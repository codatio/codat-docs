---
title: "Wave"
description: "Découvrez notre intégration Wave."
---

Vous pouvez lire les données comptables de <a className="external" href="https://www.waveapps.com/" target="_blank">Wave</a> en utilisant notre intégration Wave.

## Configurer l'intégration

Wave est un logiciel comptable mondial qui simplifie les processus comptables pour les propriétaires de petites entreprises.

Avant de pouvoir accéder aux données des clients utilisant Wave pour leur comptabilité, vous devez configurer une intégration Wave dans le portail Codat. Vous devrez :

- Enregistrer votre application Wave sur le portail développeur de Wave.
- Ajouter les clés sécurisées générées par votre inscription au portail Codat.
- Activer votre intégration Wave dans le portail Codat.

### Enregistrer votre application

:::note Détails du compte développeur

- Si vous avez déjà un compte Wave, ayez vos détails de compte à portée de main.
- Si vous n'en avez pas, <a href="https://my.waveapps.com/register/" target="_blank">créez un compte</a> avant de commencer l'inscription.
  :::

Pour enregistrer votre application Wave, vous devez utiliser le portail développeur de Wave.

1. Accédez au <a href="https://developer.waveapps.com/hc/en-us/articles/360019762711" target="_blank">Portail développeur Wave</a> et connectez-vous.
   La page **Gérer les applications** s'affiche.
2. Si vous utilisez votre compte pour la première fois, sélectionnez _Commencer_. Sinon, sélectionnez
   _Créer une application_.
   La section _Créer une application_ s'affiche.
3. Ajoutez les détails suivants :
   - Dans la case _Nom_, entrez le nom de votre entreprise. Vos clients voient ceci lorsqu'ils autorisent votre connexion à leur système comptable.
   - (Optionnel) Dans la case _Description_, vous pouvez écrire une courte description de l'application.
   - Dans la case _URI de redirection_, entrez `https://wave.codat.io/oauth/callback`
   - Dans la case _Logo_, sélectionnez _Choisir un fichier_ pour télécharger le logo de votre entreprise. Le logo apparaît sur la page d'autorisation que vos clients voient.

:::caution Logo affiché sur la page d'autorisation
Si vous ne téléchargez pas votre propre logo d'entreprise, le logo Codat apparaît sur la page d'autorisation.
:::

4. Lisez attentivement les conditions d'utilisation, puis faites défiler vers le bas et cochez la case _Oui, j'accepte_.
5. Sélectionnez _Créer votre application_.
   La page s'actualise et affiche un tableau contenant le nom de votre application et la description, si vous en avez ajouté une.
6. Sélectionnez le nom de votre application.
   La page s'actualise et affiche les clés sécurisées dont vous avez besoin pour la prochaine étape du processus.
7. Soit gardez cette page ouverte dans un onglet de navigateur séparé, soit copiez le _Client ID_ et le _Client Secret_ dans un document Word ou similaire.

### Ajouter les clés sécurisées de votre application au portail Codat

1. Dans le Portail Codat, accédez à la page <a className="external" href="https://app.codat.io/settings/integrations/accounting" target="_blank">**Intégrations comptables**</a>.
1. Localisez **Wave** et cliquez sur **Configurer**.
1. Sous **Paramètres d'intégration**, entrez les valeurs pour le **Client ID** et le **Client secret** de votre application dans le Portail développeur Wave.
1. Cliquez sur **Enregistrer**. Un message de confirmation apparaît si les paramètres ont été enregistrés avec succès
1. La boîte de dialogue **Activer Wave** s'affiche. Choisissez d'activer l'intégration maintenant ou plus tard.

:::note
Assurez-vous que vos clés sécurisées ne contiennent aucun espace.
:::

### Activer l'intégration Wave

1. Dans le Portail Codat, accédez à la page <a className="external" href="https://app.codat.io/settings/integrations/accounting" target="blank">**Intégrations comptables**</a>.
2. Localisez **Wave** et cliquez sur le bouton à bascule pour activer l'intégration.

Vous pouvez également cliquer sur **Gérer** pour afficher la page des paramètres de l'intégration, puis activer l'intégration à partir de là.
