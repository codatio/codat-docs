---
title: "Configurer votre intégration Plaid"
description: "Apprenez à configurer notre intégration Plaid, personnaliser le parcours Link et activer l'accès à la production"
sidebar_label: Configuration
---

Avant de pouvoir accéder aux données bancaires de vos clients PME depuis Plaid dans Codat, vous devez configurer votre intégration.

Vous devrez :

- Créer votre compte Plaid et tester avec l'environnement sandbox.
- Demander l'accès à l'environnement de production Plaid et obtenir vos identifiants sécurisés.
- Demander l'accès au portail Codat.
- Ajouter vos identifiants sécurisés au portail Codat.
- Activer votre intégration Plaid.

:::note Détails du compte Plaid

- Si vous avez déjà un compte Plaid, ayez vos détails de compte à portée de main.

- Si ce n'est pas le cas, <a href="https://dashboard.plaid.com/signup" target="_blank">créez un compte</a> avant de commencer le processus de configuration.

:::

## Configurer votre application Plaid

1. Allez sur le [site web de Plaid](https://plaid.com), choisissez « Get API Keys » et connectez-vous si nécessaire.
2. Sur la page d'accueil, sélectionnez **Team Settings > API** dans la barre de menu supérieure
3. Dans « Allowed redirect URIs », choisissez l'option de configuration. Vous devrez entrer `https://plaid.codat.io/oauth/callback`. Vous pourriez être invité à entrer votre mot de passe lorsque vous enregistrez.
4. Dans le menu de gauche, sélectionnez la page **Keys**.
5. Notez vos clés Sandbox et Development, ainsi que votre Client ID.

## Ajouter vos identifiants sécurisés au portail Codat

1. Connectez-vous au <a href="https://app.codat.io/signin" target="_blank">portail Codat</a>.

2. Dans la barre de navigation, sélectionnez **Settings > Integrations > Banking**.

3. Cliquez sur **Set up** sur la tuile **Plaid**.
   La page **Integration settings** pour Plaid est affichée.

4. Localisez les clés sécurisées que vous avez récupérées plus tôt et entrez les valeurs suivantes :
   - Valeur **client_id** dans **Client ID**.
   - Valeur secrète **Sandbox** dans **Sandbox secret**.
   - Valeur secrète **Development** dans **Development secret**.

5. Dans la liste **Environment**, sélectionnez **Sandbox**.

6. Entrez les codes de pays pour les pays dans lesquels vous opérez et que vous souhaitez autoriser vos clients à lier. Cela filtre la liste des banques dans le flux d'autorisation Link pour n'afficher que les banques des pays sélectionnés, ce qui pourrait améliorer votre taux de conversion. Entrez une liste séparée par des virgules d'un ou plusieurs des codes suivants :

   ```
   US,CA,ES,FR,GB,IE,NL
   ```

   Si aucun code de pays n'est entré, tous les codes de pays ci-dessus sont utilisés par défaut. Dans les environnements Plaid Sandbox et Development, les valeurs par défaut sont également `US,CA,ES,FR,GB,IE,NL`.

7. Sélectionnez comment vous souhaitez accéder aux données de l'entreprise, et si vous souhaitez synchroniser continuellement les données ou effectuer uniquement une synchronisation de données ponctuelle lorsque l'entreprise autorise sa connexion.

8. Cliquez sur **Save**.

9. Retournez à **Settings > Integrations > Banking**.

10. **Plaid** devrait maintenant être activé. Vous pouvez cliquer sur le bouton à côté de **Plaid** pour basculer l'intégration entre **Enabled** et **Disabled**.

## Personnaliser le parcours Plaid Link (optionnel)

Plaid vous permet de personnaliser l'apparence, la convivialité et le contenu du flux de liaison que les clients voient lorsqu'ils autorisent l'accès à leurs données bancaires. Vous pouvez créer et publier un parcours personnalisé dans Plaid, puis le connecter à Codat. C'est l'expérience client que vous suivrez pendant les tests et la production.

1. Connectez-vous au **Plaid Dashboard** et allez à [**Platform > Link > Link customization**](https://dashboard.plaid.com/link).
2. Créez une nouvelle configuration ou sélectionnez-en une existante en cliquant sur le menu déroulant.

   Notez le **Name** que vous attribuez à la configuration et les **Countries** que vous sélectionnez car vous en aurez besoin plus tard dans Codat.

3. Configurez le parcours selon vos besoins : ajustez l'image de marque, les options d'institutions et les options de sélection de compte selon les besoins. Pour une liste complète des options de personnalisation disponibles, consultez la [documentation de personnalisation Link](https://plaid.com/docs/link/customization/) de Plaid.
4. Cliquez sur **Publish changes** pour enregistrer et appliquer vos personnalisations.
5. Dans le portail Codat, naviguez vers [**Settings > Integrations > Banking > Plaid**](https://app.codat.io/settings/integrations/banking/manage/suuo?integrationName=Plaid).
   - Entrez le(s) **code(s) de pays** pour les pays que vous avez sélectionnés à l'étape 2.
   - Entrez le **Link configuration name** que vous avez créé ou sélectionné à l'étape 2.
   - Cliquez sur **Save** pour appliquer vos modifications.

Une fois terminé, votre parcours Plaid Link personnalisé sera appliqué au flux de connexion de données bancaires alimenté par Codat.

### Sélectionner les comptes bancaires

Lorsqu'un client connecte son compte bancaire en utilisant Plaid, il peut choisir quels comptes partager avec vous. Par défaut, tous les comptes disponibles sont sélectionnés. Vous pouvez personnaliser ce comportement dans Plaid pour permettre aux clients de choisir des comptes spécifiques à la place.

1. Dans le **Plaid Dashboard**, naviguez vers [**Platform > Link > Link customization**](https://dashboard.plaid.com/link).
2. Sélectionnez [**Account Select**](https://dashboard.plaid.com/link/account-select) dans le menu de droite.
3. Pour permettre à vos clients de choisir quels comptes partager, sélectionnez **Enable for multiple accounts**.
   ![A screenshot highlighting the 'Enable for mutiple accounts' in the Account Select view](/img/integrations/banking/plaid/plaid-account-select.png)
4. Cliquez sur **Publish changes** pour enregistrer et appliquer vos modifications.

Une fois terminé, Plaid ne partagera que les comptes explicitement sélectionnés par vos clients, et seuls ces comptes vous seront transmis via Codat.

## Activer l'accès à la production

Lorsque vous êtes prêt à vous connecter aux données en direct, vous devrez demander l'accès à Plaid.

1. Connectez-vous au [**Plaid Dashboard**](https://dashboard.plaid.com/link).
2. Sélectionnez **Migrate to Production** et suivez le processus pour demander l'accès à l'environnement de production Plaid et obtenir vos identifiants sécurisés.
3. Une fois que vous avez votre Production Secret, entrez-le dans la case pour le Production Secret dans la page de configuration Plaid du portail Codat.
4. Veuillez noter que la valeur par défaut des Country Codes dans l'environnement de Production de Plaid est la suivante : `US,CA`.
