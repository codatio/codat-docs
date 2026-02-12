---
title: "FreshBooks"
description: "En savoir plus sur notre intégration FreshBooks."
---

Vous pouvez synchroniser les données comptables avec <a className="external" href="https://www.freshbooks.com/" target="_blank">FreshBooks</a> en utilisant notre intégration FreshBooks.

## Versions prises en charge

Les organisations FreshBooks Classic ne sont pas prises en charge. FreshBooks Classic est une version héritée de FreshBooks et utilise une API différente.

## Configurer l'intégration

Avant de pouvoir accéder aux données de vos clients qui utilisent FreshBooks pour leur comptabilité, vous devez configurer l'intégration FreshBooks.

Vous devrez :

- Créer une application FreshBooks.
- Ajouter les clés sécurisées de l'application au portail Codat.

### Créer une application FreshBooks

Créez et configurez une application dans le portail développeur FreshBooks.

1. Connectez-vous à <a className="external" href="https://www.freshbooks.com" target="_blank">freshbooks.com</a>.

   Si vous n'avez pas encore de compte, vous pouvez en créer un en cliquant sur **Try it Free**.

2. Dans le tableau de bord, cliquez sur l'icône d'engrenage, puis sélectionnez **Developer Portal**.

   La page <a className="external" href="https://my.freshbooks.com/#/developer" target="_blank">Apps</a> dans le portail développeur s'affiche.

3. Cliquez sur **Create New App**.

4. Saisissez les informations suivantes dans les cases de la page **Create Application** :
   - **Application Name** : Saisissez un nom pour votre application. Celui-ci est affiché à vos utilisateurs lorsqu'ils autorisent votre accès à leurs données comptables, alors choisissez un nom qui identifie clairement votre organisation.

   - **Application Type** : Sélectionnez **Private App**.

   - **Scopes** : Ajoutez les scopes requis en _lecture_ et _écriture_ listés dans [Scopes d'application FreshBooks](/integrations/accounting/freshbooks/accounting-freshbooks#freshbooks-application-scopes).

   - **Redirect URIs** : Saisissez `https://freshbooks.codat.io/oauth/callback`, puis cliquez sur l'icône de coche pour enregistrer l'URI.

5. Cliquez sur **Save** pour créer votre application.

6. Sélectionnez votre nouvelle application dans la liste **All Apps**. Localisez le **Client ID** et le **Client Secret** de l'application en bas de la page.

<img src="/fr-ca/img/old/a044a46-Freshbooks-keys.png" />

### Scopes d'application FreshBooks

Le tableau suivant liste les scopes recommandés à définir pour votre application FreshBooks. Si les scopes dont vous avez besoin changent à l'avenir, toutes les entreprises connectées devront se réauthentifier avec votre application.

:::caution Scopes en _lecture_ et _écriture_
Le tableau décrit les scopes minimum nécessaires pour permettre l'accès en _lecture_ aux objets FreshBooks pris en charge par Codat. Si vous souhaitez créer, mettre à jour ou supprimer des données dans FreshBooks, vous devez sélectionner les scopes en _écriture_ correspondants pour les objets pertinents.
:::

|                                                                                                                                                   |                                                                                                                                                            |                                                                                                                           |
| ------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- |
| user:profile:read, user:bills:read, user:bill_payments:read, user:business:read, user:bill_vendors:read, user:clients:read user:credit_notes:read | user:estimates:read, user:expenses:read, user:journal_entries:read, user:online_payments:read, user:payments:read, user:projects:read, user:retainers:read | user:taxes:read, user:billable_items:read, user:invoices:read, user:other_income:read, user:reports:read, user:teams:read |

### Ajouter les clés sécurisées de votre application au portail Codat

1. Dans le portail Codat, accédez à la page <a className="external" href="https://app.codat.io/settings/integrations/accounting" target="_blank">**Intégrations comptables**</a>.

2. Localisez **FreshBooks** et cliquez sur **Set up**.

3. Sous **Integration settings**, saisissez les valeurs pour le **Client ID** et le **Client secret** de votre application dans le portail développeur FreshBooks.

4. Cliquez sur **Save**. Un message de confirmation apparaît si les paramètres ont été enregistrés avec succès.

5. La boîte de dialogue **Enable FreshBooks** s'affiche. Sélectionnez si vous souhaitez activer l'intégration maintenant ou plus tard.

:::note

Assurez-vous que vos clés sécurisées ne contiennent aucun espace.
:::

### Activer l'intégration FreshBooks

1. Dans le portail Codat, accédez à la page <a className="external" href="https://app.codat.io/settings/integrations/accounting" target="blank">**Intégrations comptables**</a>.
2. Localisez **FreshBooks** et cliquez sur le bouton à bascule pour activer l'intégration.

Vous pouvez également cliquer sur **Manage** pour afficher la page des paramètres de l'intégration, puis activer l'intégration à partir de là.
