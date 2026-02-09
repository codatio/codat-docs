---
title: "Configurer l'application de démonstration"
description: "Préparez votre instance Codat et votre environnement local pour exécuter l'application de démonstration"
sidebar_label: "Configuration de l'application de démonstration"
---

import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";

### 🚀 Dans cette section, vous allez...

- Créer votre compte Codat
- Vérifier les paramètres du flux d'authentification
- Configurer les webhooks
- Configurer votre environnement local
- Exécuter l'application de démonstration

### Se connecter à votre compte Codat

Utilisez votre compte de test Codat pour explorer et tester nos API et autres solutions. Il est également équipé d'une entreprise exemple. Lorsque vous commencerez à travailler sur votre propre solution de financement de factures, [contactez votre gestionnaire de compte](https://codat.io/#get-in-touch) pour discuter de votre utilisation de Codat.

### Mettre à jour vos paramètres de flux d'authentification

Sur la page **Settings > Auth Flow > Link** [paramètres](https://app.codat.io/settings/link-settings/data-connections), vérifiez que les **Sandbox integrations** et la catégorie d'intégration **Accounting** sont toutes deux activées. Désactivez les catégories d'intégration **Commerce** et **Banking**.

### Écouter les webhooks

L'application utilise plusieurs webhooks pour suivre la complétion d'une connexion de données comptables et la complétion des synchronisations de données pour les types de données `invoice` et `customer`.

Nous utiliserons [ngrok](https://ngrok.com/) pour écouter les webhooks de Codat.

<Tabs>
   <TabItem value="win" label="Windows OS">

Dans Windows PowerShell, exécutez les commandes suivantes :

```bash
choco install ngrok
ngrok http 5069
```

Cela installera ngrok en utilisant [Chocolatey](https://chocolatey.org/) et l'exécutera sur le port 5069.

Copiez l'**adresse de transfert** - ce sera le `<SERVER_URL>` pour les webhooks.

   </TabItem>

   <TabItem value="mac" label="Mac OS">

Dans le terminal, exécutez les commandes suivantes :

```bash
brew install ngrok
ngrok http 5069
```

Cela installera ngrok en utilisant [Homebrew](https://brew.sh/) et l'exécutera sur le port 5069.

Copiez l'**adresse de transfert** - ce sera le `<SERVER_URL>` pour les webhooks.

   </TabItem>
</Tabs>

### Configurer les webhooks Codat

Sur la page **Settings > Webhooks > [Rules](https://app.codat.io/settings/webhooks/rules)**, créez deux règles pour toutes les entreprises, une pour chaque webhook que nous utiliserons :

| Type de règle                                  | URL de notification webhook                             |
| ------------------------------------------ | ---------------------------------------------------- |
| Company Data Connection status has changed | `<SERVER_URL>/webhooks/codat/data-connection-status` |
| Data sync completed                        | `<SERVER_URL>/webhooks/codat/datatype-sync-complete` |

Cliquez sur **Create rule** pour ouvrir la fenêtre de création de nouvelle règle. Sélectionnez le type de règle, appliquez-la à toutes les entreprises et attribuez-lui une URL de webhook. Assurez-vous de remplacer le `<SERVER_URL>` par votre adresse de transfert.

![](/img/use-cases/invoice-finance/rule-creation-screen.png)

### Cloner le code

Clonez notre dépôt de démonstration sur [GitHub](https://github.com/codatio/demo-invoice-finance) pour télécharger l'application de démonstration de prêt de financement de factures.

Le répertoire principal de fichiers pour l'application de démonstration est `Codat.Demos.InvoiceFinancing.Api`. Les composants de logique clés de l'application sont situés dans les répertoires `Controllers`, `Orchestrator` et `Services`.

L'autre répertoire du dépôt, `Codat.Demos.InvoiceFinancing.Api.Tests`, contient une série de tests unitaires pour l'application de démonstration et n'est pas nécessaire pour que vous exécutiez le projet de démonstration.

```sh title="Répertoire Codat.Demos.InvoiceFinancing.Api"
   ├──BindingModule.cs
   ├──Codat.Demos.InvoiceFinancing.Api.csproj
   ├──Program.cs
   ├──appsettings.Development.json
   ├──appsettings.json // Ajoutez votre clé API dans ce fichier
   |
   ├──Controllers // Contrôleurs pour les endpoints API pour gérer les actions et résultats attendus
   |    ├──ApplicationController.cs // Contrôleur d'endpoint frontend
   |    └──WebhooksController.cs    // Contrôleur d'endpoint backend
   |
   ├──DataClients // Un service pour effectuer des appels API vers Codat
   |    └──CodatDataClient.cs
   |
   ├──Exceptions // Définitions pour gérer les événements d'erreur
   |    ├──...
   |
   ├──Models // Représente la forme des données qui seront retournées à l'utilisateur
   |    ├──...
   |
   ├──Orchestrators // Gère les méthodes qui se rapportent aux endpoints utilisés dans l'application
   |    ├──ApplicationOrchestrator.cs //
   |    └──FinancingProcessor.cs //
   |
   ├──Properties // Configuration pour les profils http, https et IIS Express
   |    └──launchSettings.json
   |
   └──Services // Composants d'application clés qui effectuent des tâches spécifiées
      ├──ApplicationStore.cs // Gère la création et le stockage de la demande de prêt en mémoire
      ├──CustomerRiskAssessor.cs // Gère l'évaluation du risque d'un client
      └──InvoiceFinanceAssessor.cs // Gère l'évaluation d'une facture éligible
```

### Définir votre clé API

Dans la section [Developers](https://app.codat.io/developers/api-keys) du Portail Codat, copiez votre clé API depuis la colonne **API key** **(pas l'en-tête d'authentification)**. Vous pouvez cliquer sur **Create another API key** si une clé n'a pas été automatiquement générée pour vous. Dans le répertoire `Codat.Demos.InvoiceFinancing.Api`, modifiez le fichier `appsettings.json` et entrez la clé API que vous venez de copier comme `CodatApiKey`.

### Exécuter l'application

<Tabs>
<TabItem value="cmd" label="Ligne de commande">

Exécutez la commande suivante dans le répertoire racine `Codat.Demos.InvoiceFinancing.Api` :

```sh
dotnet run --launch-profile http
```

Une fois en cours d'exécution, ouvrez la page Swagger dans votre navigateur web : `http://localhost:7278/swagger/index.html` Vous l'utiliserez pour appeler les endpoints de la démonstration.

</TabItem>

<TabItem value="rider" label="Rider">

Assurez-vous que le profil `http` est défini et appuyez sur "Run". L'IDE ouvrira automatiquement [Swagger](http://localhost:7278/swagger/index.html) dans un nouvel onglet de votre navigateur. Vous l'utiliserez pour appeler les endpoints de la démonstration.

![](/img/use-cases/invoice-finance/rider.png)

</TabItem>

<TabItem value="vs" label="Visual studio">

Assurez-vous que le profil `http` est défini et appuyez sur l'icône "Play". L'IDE ouvrira automatiquement [Swagger](http://localhost:7278/swagger/index.html) dans un nouvel onglet de votre navigateur. Vous l'utiliserez pour appeler les endpoints de la démonstration.

![](/img/use-cases/invoice-finance/visual-studio-2022.png)

</TabItem>

</Tabs>

### Récapitulatif

Vous avez maintenant configuré votre instance Codat et votre environnement local en préparation de l'exécution de l'application. Vous avez également cloné le dépôt et commencé à exécuter l'application.

---

### À lire ensuite

- [Utilisez l'application pour fournir une décision de financement de factures](/lending/guides/invoice-finance/process-invoice).
