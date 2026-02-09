---
title: "Écrire des données dans Sage 50 Accounts (RU et Irlande)"
slug: "pushing-data-to-sage-50"
description: "Apprenez comment écrire des données avec notre connecteur Sage 50 Accounts (RU et Irlande) et consultez les FAQ."
sidebar_label: Écrire des données
---

Pour écrire des données dans Sage 50 Accounts (RU et Irlande), Codat recommande fortement que votre client crée un deuxième utilisateur dans Sage pour le fichier d'entreprise dans lequel vous écrivez. Consultez [Configuration de Sage 50 Accounts et du connecteur Sage 50 Accounts pour activer l'écriture de données](/integrations/accounting/sage50/pushing-data-to-sage-50#section-setting-up-sage-50-and-the-sage-50-connector-to-enable-pushing-data) (ci-dessous) pour les instructions.

Si vous ne créez pas de deuxième utilisateur, l'application Sage 50 Accounts et l'API Codat essaieront d'utiliser les mêmes identifiants en même temps. Étant donné que Sage 50 Accounts est ouvert, aucune donnée ne sera écrite.

:::caution Connexions simultanées

Créer un deuxième utilisateur qui n'est pas utilisé pour accéder à l'application Sage 50 Accounts évite la possibilité que les données échouent à s'écrire parce que l'application Sage 50 Accounts est ouverte et utilise les mêmes identifiants que le connecteur.
**Remarque** : ce problème n'affecte pas la lecture des données.
:::

## Configuration de Sage 50 Accounts et du connecteur Sage 50 Accounts pour activer l'écriture de données

Votre client doit créer un nouvel utilisateur dans Sage 50 Accounts qui sera utilisé par le connecteur Sage 50 Accounts de Codat. Nous conseillons à votre client d'inclure le nom de votre entreprise dans le nom d'utilisateur du nouvel utilisateur pour mettre en évidence l'origine des données écrites au comptable utilisant Sage 50.

Pour créer un nouvel utilisateur et nom d'utilisateur dans Sage 50 :

1. Sélectionnez **Paramètres > Gestion des utilisateurs > Utilisateurs**.
2. Cliquez sur **Nouveau** pour ouvrir la fenêtre de création d'un nouvel utilisateur.
3. Définissez le type d'utilisateur sur **Administrateur**.
4. Entrez un nom d'utilisateur et un mot de passe pour le nouvel utilisateur.
5. L'étape « Accès aux données à distance » n'est pas nécessaire pour l'écriture de données, donc cliquez sur **Continuer** pour la sauter.
6. Cliquez sur **Enregistrer**
7. Téléchargez le connecteur Sage 50 Accounts et entrez la clé de licence pour configurer le connecteur. Ces étapes et les étapes précédentes sont les mêmes que celles décrites dans [Installer le connecteur Sage 50 Accounts](/integrations/accounting/sage50/installing-the-sage-50-connector).

   **Remarque** : À l'étape [Entrer ses identifiants Sage 50 Accounts](/integrations/accounting/sage50/installing-the-sage-50-connector#5-enter-their-sage-50-credentials), votre client doit entrer les identifiants de l'utilisateur spécialement créé pour le connecteur Sage 50 Accounts et NON la connexion qu'il utilise pour ouvrir et utiliser l'application Sage 50 Accounts au quotidien.

Vous êtes maintenant prêt à écrire des données dans Sage 50.

## Écriture de données dans Sage 50 Accounts avec une entreprise liée existante

Si une entreprise dispose d'un connecteur Sage 50 Accounts existant qui lit des données de son fichier d'entreprise Sage 50 Accounts, et que l'écriture de données dans son fichier d'entreprise est maintenant requise, ils doivent compléter ces étapes.

### Prérequis

Assurez-vous que votre client a créé un nouvel utilisateur (comme décrit ci-dessus) pour son fichier d'entreprise Sage 50 Accounts. Celui-ci doit être utilisé exclusivement pour le connecteur.

1. Ouvrez le connecteur Sage 50 Accounts depuis l'icône de la barre (généralement située dans la barre d'outils en bas à droite sur un ordinateur exécutant Windows). Faites-le en cliquant avec le bouton droit sur l'icône du connecteur et en sélectionnant **Ouvrir le connecteur Sage 50 Accounts**.

   ![](/img/old/ce398a2-Sage_50_Push_data_-_Open_Sage_50_connector.png "Sage 50 Accounts Push data - Open Sage 50 Accounts Connector.png")

2. Cliquez sur **Gérer la connexion** pour le fichier de données de l'entreprise concerné

   ![](/img/old/d84aee4-Sage_50_Push_data_-_Manage_connection.png "Sage 50 Accounts Push data - Manage connection.png")

3. Modifiez les identifiants pour que le nom d'utilisateur et le mot de passe enregistrés soient ceux de l'utilisateur créé exclusivement pour le connecteur, et non les identifiants d'un utilisateur qui se connecte régulièrement à l'application Sage 50 Accounts.

## FAQ sur l'écriture de données dans Sage 50

### Que voit l'utilisateur final lorsque des données sont écrites et que Sage 50 Accounts est ouvert ?

- Si Sage 50 Accounts est ouvert pendant une opération d'écriture, l'utilisateur peut momentanément voir une boîte de dialogue de traitement. Celle-ci restera à l'écran de l'utilisateur pendant une période plus longue si le volume de données écrites est plus important.
- Si des fournisseurs sont écrits et que l'utilisateur est connecté à Sage 50, le fournisseur n'apparaîtra pas dans Sage 50 Accounts tant que la page n'est pas actualisée.

  :::note Actualisation de Sage 50 Accounts pour voir les fournisseurs écrits

  Pour actualiser la page dans Sage 50, vous pouvez cliquer deux fois sur le filtre dans la vue Fournisseurs comme ci-dessous. Si un fournisseur a été créé avec succès, le compte apparaîtra lorsque la page sera actualisée.

  ![](/img/old/719da3c-supplierFilterRefresh.png "supplierFilterRefresh.PNG")

  :::

### Sage 50 Accounts est fermé et le connecteur écrit des données. Lorsque j'ouvre Sage, puis-je me connecter avec les mêmes identifiants ?

L'opération d'écriture se termine normalement et l'utilisateur peut toujours se connecter à Sage 50 Accounts, mais les opérations d'écriture suivantes **ne réussiront pas** car les mêmes identifiants sont utilisés. Par conséquent, un deuxième utilisateur doit toujours être créé.

Les opérations d'écriture suivantes réussiront une fois que 1) l'application Sage 50 Accounts est fermée, ou 2) de nouveaux identifiants utilisateur sont entrés dans le connecteur, ou 3) l'utilisateur se connecte à Sage 50 Accounts avec des identifiants différents de ceux actuellement entrés dans le connecteur et utilisés pour la liaison.

### Comment les devises étrangères sont-elles gérées ?

Vous pourriez rencontrer un comportement inattendu si l'application Sage 50 Accounts n'a pas _Foreign Trader_ activé et que des données sont écrites qui incluent une devise différente de la devise de base de l'entreprise.

Par exemple, si la devise de base d'une entreprise est GBP et qu'un compte est écrit dans Sage 50 Accounts via l'API Codat avec une devise USD, alors aucun paiement ne pourra être effectué contre ce compte (car les comptes de l'entreprise sont tous en GBP) jusqu'à ce que _Foreign Trader_ soit activé.
