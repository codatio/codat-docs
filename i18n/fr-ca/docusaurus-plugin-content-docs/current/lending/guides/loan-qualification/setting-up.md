---
title: "Configurer l'application de démonstration"
description: "Préparez votre instance Codat et votre environnement local pour exécuter l'application de démonstration"
sidebar_label: "Configuration de l'application de démonstration"
---

import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";

### 🚀 Dans cette section, vous allez...

- Créer votre compte Codat
- Activer la solution Lending
- Configurer les webhooks
- Configurer votre environnement local
- Exécuter l'application de démonstration

### Se connecter à votre compte Codat

Connectez-vous à votre compte Codat de test. Lorsque vous commencerez à travailler sur votre propre solution de qualification de prêt, vous pourriez vouloir contacter notre [équipe de vente](https://codat.io/#get-in-touch) pour l'implémenter en production.

### Activer le produit Lending

Dans la section **Settings > Organization settings > [Products](https://app.codat.io/settings/products)** du Portal Codat, trouvez **Lending** dans la liste des produits et activez-le. Cela active également les types de données requis par cette solution. Par exemple, `balanceSheet` et `profitandLoss`, qui sont utilisés par l'application de démonstration, seront activés.

Nous utilisons la fonctionnalité de [catégorisation](/lending/features/financial-statements-overview#categorized-financial-accounts) de Lending. Elle vous permet d'effectuer une prise de décision automatisée basée sur les comptes catégorisés.

### Mettre à jour les paramètres de votre flux d'autorisation

Dans les [paramètres](https://app.codat.io/settings/link-settings/data-connections) **Settings > Auth Flow > Link**, assurez-vous que le commutateur _Sandbox integrations_ est activé. Vérifiez que la catégorie d'intégration _Accounting_ est activée, et désactivez les catégories d'intégration _Commerce_ et _Banking_.

### Écouter les webhooks

L'application utilisera plusieurs webhooks pour suivre la complétion de la synchronisation des données financières et la catégorisation des comptes, ainsi que la complétion de la liaison Sandbox.

Nous utiliserons [ngrok](https://ngrok.com/) ici pour écouter les webhooks de Codat.

<Tabs>
   <TabItem value="win" label="Windows OS">

Dans Windows PowerShell, exécutez les commandes suivantes :

```bash
choco install ngrok
ngrok http 5069
```

Cela installera ngrok en utilisant [Chocolatey](https://chocolatey.org/) et l'exécutera sur le port 5069.

Copiez l'**adresse de redirection** - ce sera l'`<server-url>` pour les webhooks.

   </TabItem>

   <TabItem value="mac" label="Mac OS">

Dans le terminal, exécutez les commandes suivantes :

```bash
brew install ngrok
ngrok http 5069
```

Cela installera ngrok en utilisant [Homebrew](https://brew.sh/) et l'exécutera sur le port 5069.

Copiez l'**adresse de redirection** - ce sera l'`<server-url>` pour les webhooks.

   </TabItem>
</Tabs>

### Configurer les webhooks Codat

Dans la section **Settings > Webhooks > [Rules](https://app.codat.io/settings/webhooks/rules)** du Portal Codat, créez trois règles, une pour chaque webhook que nous utiliserons :

| Type de règle                                  | URL de notification du webhook                              |
| ---------------------------------------------- | ----------------------------------------------------------- |
| Company Data Connection status has changed | `<server-url>/webhooks/codat/data-connection-status`        |
| Data sync completed                        | `<server-url>/webhooks/codat/datatype-sync-complete`        |
| Account categories updated                 | `<server-url>/webhooks/codat/account-categorisation-update` |

Cliquez sur **Create rule** pour ouvrir la fenêtre de création de nouvelle règle. Sélectionnez le type de règle, appliquez-la à toutes les entreprises et assignez-lui une URL de webhook. Assurez-vous de remplacer le `<server-url>` par votre adresse de redirection.

![](/img/use-cases/loan-qualification/rule-creation-screen.png)

### Cloner le code

Clonez notre dépôt de démonstration sur [GitHub](https://github.com/codatio/demo-loan-qualification) pour télécharger l'application de démonstration de qualification de prêt.

Le répertoire principal de l'application de démonstration est `Codat.Demos.Underwriting.Api`. Les composants logiques clés de l'application se trouvent dans les dossiers `Controllers`, `Orchestrator` et `Services`.

Notez que l'autre répertoire du dépôt, `Codat.Demos.Underwriting.Api.Tests`, contient une série de tests unitaires et d'intégration pour l'application de démonstration et n'est pas nécessaire pour exécuter le projet de démonstration.

```sh title="Répertoire Codat.Demos.Underwriting.Api"
   ├──BindingModule.cs
   ├──Codat.Demos.Underwriting.Api.csproj
   ├──Program.cs
   ├──appsettings.Development.json
   ├──appsettings.json // Add your API key in this file
   |
   ├──Controllers // Controllers for the API endpoints to manage expected actions and results
   |    ├──UnderwritingController.cs // Front-end endpoint controller
   |    └──WebhooksController.cs     // Back-end endpoint controller
   |
   ├──Exceptions // Definitions for managing error events
   |    ├──...
   |
   ├──Extensions // Used to extend classes in C#
   |    └──CollectionExtensions.cs
   |
   ├──Models // Represent the schemas used in this solution
   |    ├──...
   |
   ├──Orchestrators // Manages the six methods that relate to endpoints used in the app
   |    └──ApplicationOrchestrator.cs
   |
   ├──Properties // Setup for http, https, and IIS Express profiles
   |    └──launchSettings.json
   |
   └──Services // Key application components that perform specified tasks
      ├──ApplicationStore.cs // Handles creating and storing the loan application in-memory
      └──LoanUnderwriter.cs  // Decision process method for the underwriting model used in the demo
```

### Définir votre clé API

Dans la section [Developers](https://app.codat.io/developers/api-keys) du Portal Codat, copiez votre clé API depuis la colonne **API key** **(pas l'en-tête d'autorisation)**. Vous pouvez cliquer sur **Create another API key** si aucune n'a été générée automatiquement pour vous. Dans le répertoire `Codat.Demos.Underwriting.Api\`, modifiez le fichier `appsettings.json` et entrez la clé API que vous venez de copier comme `CodatApiKey`.

### Exécuter l'application

<Tabs>
<TabItem value="cmd" label="Command line">

Exécutez la commande suivante dans le répertoire racine `Codat.Demos.Underwriting.Api` :

```sh
dotnet run --launch-profile http
```

Une fois l'application en cours d'exécution, ouvrez la page Swagger dans votre navigateur web : `http://localhost:5069/swagger/index.html` Vous l'utiliserez pour appeler les endpoints de la démonstration.

</TabItem>

<TabItem value="rider" label="Rider">

Assurez-vous que le profil `http` est défini et appuyez sur « Run ». L'IDE ouvrira automatiquement [Swagger](http://localhost:5069/swagger/index.html) dans un nouvel onglet de votre navigateur. Vous l'utiliserez pour appeler les endpoints de la démonstration.

![](/img/use-cases/loan-qualification/underwriting-guide-rider.png)

</TabItem>

<TabItem value="vs" label="Visual studio">

Assurez-vous que le profil `http` est défini et appuyez sur l'icône « Play ». L'IDE ouvrira automatiquement [Swagger](http://localhost:5069/swagger/index.html) dans un nouvel onglet de votre navigateur. Vous l'utiliserez pour appeler les endpoints de la démonstration.

![](/img/use-cases/loan-qualification/underwriting-guide-visual-studio-2022.png)

</TabItem>

</Tabs>

### Récapitulatif

Vous avez maintenant configuré votre instance Codat et votre environnement local en préparation de l'exécution de l'application. Vous avez également cloné le dépôt et commencé à exécuter l'application.

---

### Lire la suite

- [Utilisez l'application pour souscrire un prêt](/lending/guides/loan-qualification/process-loan).
