---
title: "Installer le connecteur QuickBooks Desktop"
description: "Guide pour les utilisateurs PME pour installer notre connecteur sur site QuickBooks Desktop."
sidebar_label: Installer le connecteur
---

:::info Liste de vérification d'installation QuickBooks Desktop

<b>Vérifier que la version est prise en charge</b>

Votre client doit exécuter une version prise en charge de QuickBooks Desktop Pro, Enterprise ou Professional. QuickBooks pour Mac n'est pas pris en charge.

<b>Vérifier les exigences du système d'exploitation</b>

Le connecteur fonctionne sur Windows 10, Windows 11 et Windows Server 2019, et peut ne pas fonctionner correctement sur les versions antérieures de Windows. Votre client aura besoin d'autorisations d'administrateur sur votre ordinateur pour terminer l'installation.

<b>Considérer l'antivirus et le pare-feu</b>

Les paramètres d'antivirus ou de pare-feu local de l'utilisateur peuvent empêcher le téléchargement et l'exécution du connecteur. Pour résoudre ce problème, vous devez ajouter le connecteur à la liste blanche.

:::

Pour installer le connecteur QuickBooks Desktop, l'utilisateur qui connecte les données de son entreprise doit effectuer les tâches suivantes :

1. [Télécharger et installer le connecteur](/integrations/accounting/quickbooksdesktop/installing-the-quickbooks-connector#1-download-and-install-the-connector)

2. [Exécuter le fichier de configuration pour autoriser l'accès à QuickBooks](/integrations/accounting/quickbooksdesktop/installing-the-quickbooks-connector#2-run-the-configuration-file-to-authorize-access-to-quickbooks)

3. [Authentifier le connecteur](/integrations/accounting/quickbooksdesktop/installing-the-quickbooks-connector#3-authenticate-the-connector)

4. [Attendre que le connecteur termine la première liaison](/integrations/accounting/quickbooksdesktop/installing-the-quickbooks-connector#4-wait-for-the-connector-to-complete-first-link)

:::info Liaison d'entreprises en utilisant le connecteur QuickBooks Desktop

Le connecteur QuickBooks Desktop doit être exécuté sur le même ordinateur que l'application QuickBooks Desktop. Conseillez à votre client d'installer le connecteur sur l'ordinateur qu'il utilise normalement lorsqu'il travaille avec QuickBooks Desktop.

Avant de commencer le processus de liaison, l'utilisateur doit ouvrir QuickBooks Desktop et se connecter à l'entreprise qu'il souhaite lier.

:::

## 1. Télécharger et installer le connecteur

Si l'utilisateur sélectionne "QuickBooks Desktop app" sur l'écran Link initial, il sera dirigé pour télécharger le web connector à partir d'une URL Codat Link.

S'il sélectionne "QuickBooks Enterprise Cloud" ou "Rightworks", il passera immédiatement à l'[étape suivante](/integrations/accounting/quickbooksdesktop/installing-the-quickbooks-connector#2-run-the-configuration-file-to-authorize-access-to-quickbooks) car ces environnements hébergés ont déjà le web connector installé.

:::info Fichier de téléchargement du connecteur

Nous regroupons le web connector d'Intuit avec notre outil d'exécution automatique dans un fichier `QuickBooksDesktopConnector.exe`. Ce bundle est signé à l'aide d'un certificat de validation étendue.

:::

**Des privilèges d'administrateur (droits d'admin) sont requis pour exécuter le connecteur.** Lorsque vous ajoutez une nouvelle entreprise, un utilisateur avec des droits d'admin doit exécuter l'installateur, qui affichera la boîte de dialogue suivante :

<img src="/img/integrations/accounting/quickbooksdesktop/qbd-flow-download-connector.png" />

Lorsque votre utilisateur exécute le `QuickBooksDesktopConnector.exe`, il lancera l'"Assistant QBWebConnector - InstallShield" pour le guider à travers les étapes d'installation. Il s'agira d'une nouvelle installation ou d'une mise à jour vers la dernière version si le web connector est déjà présent sur la machine.

:::info Et si l'utilisateur PME n'est pas un administrateur Windows?

Si l'utilisateur PME n'est pas un administrateur Windows sur son propre système, un autre administrateur doit approuver l'installation et exécuter QuickBooks Desktop en utilisant l'option **Exécuter en tant qu'administrateur**. Cela s'applique à la fois lors de la liaison initiale et lors de l'ajout d'entreprises à un connecteur existant. Lorsqu'il est installé de cette manière, le connecteur ne peut synchroniser les données que lorsque QuickBooks Desktop est fermé.

:::

## 2. Exécuter le fichier de configuration pour autoriser l'accès à QuickBooks

Ensuite, l'utilisateur télécharge le fichier de configuration et l'exécute pour créer une connexion à son entreprise QBD via le web connector. Le fichier de configuration détectera et se liera à l'entreprise QBD ouverte. QuickBooks Desktop affichera alors une invite demandant d'autoriser l'application à lire et modifier le fichier d'entreprise QuickBooks.

Les options peuvent varier selon les versions de QuickBooks, mais sont similaires à :

- **No**
- **Yes, always; allow access even if QuickBooks is not running**

L'utilisateur doit sélectionner **Yes, always; allow access even if QuickBooks is not running** pour permettre au connecteur de fonctionner.

<img src="/img/integrations/accounting/quickbooksdesktop/qbd-flow-app-certificate.png" />

Il doit vérifier les détails dans la boîte de dialogue **Access Confirmation**, puis cliquer sur **Done**.

<img src="/img/integrations/accounting/quickbooksdesktop/qbd-flow-access-confirmation.png" />

## 3. Authentifier le connecteur

Une fois que l'utilisateur autorise l'accès du connecteur à l'entreprise QuickBooks Desktop ouverte, il verra une nouvelle connexion apparaître dans le web connector. L'utilisateur doit ensuite sélectionner la connexion en utilisant la case à cocher.

Une fenêtre contextuelle de mot de passe apparaît. Il doit saisir le mot de passe copié dans la fenêtre contextuelle, cliquer sur **OK** et confirmer pour enregistrer lorsqu'on le lui demande.

<img src="/img/integrations/accounting/quickbooksdesktop/qbd-flow-copy-enter-password.png" />

Ensuite, l'utilisateur doit cliquer sur **Update Selected**.

<img src="/img/integrations/accounting/quickbooksdesktop/qbd-flow-update-selected.png" />

## 4. Attendre que le connecteur termine la première liaison

Une fois le mot de passe enregistré, l'accès à QuickBooks sera accordé et le connecteur traitera les ensembles de données que vous avez choisi de _récupérer lors de la première liaison_ (voir [Paramètres de synchronisation des données](/core-concepts/data-type-settings)).

Si vous avez choisi de faire effectuer à vos connecteurs une synchronisation unique, le statut de connexion de votre entreprise passera à _deauthorized_ après la synchronisation initiale.

Si vous avez choisi d'installer vos connecteurs pour des synchronisations continues, le connecteur traitera périodiquement toutes les synchronisations d'ensembles de données ou opérations d'écriture que vous avez mises en file d'attente en utilisant le portail Codat ou l'API. Le connecteur démarrera également automatiquement lorsque le système redémarre.

## Chemin d'installation

Le web connector QuickBooks Desktop est installé dans Program Files.

```
  C:\Program Files (x86)\Common Files\Intuit\QuickBooks\QBWebConnector
```

Par exemple :

<img src="/img/integrations/accounting/quickbooksdesktop/qbd-flow-file-location.png" />

## Mettre en pause le connecteur

En raison des propres limitations de QBD, il n'est pas possible d'utiliser le logiciel pendant qu'il synchronise les données via le connecteur. Cela s'applique à tous les connecteurs et synchronisations.

- Si QBD est fermé et que la synchronisation est en cours, l'utilisateur ne pourra pas ouvrir le logiciel tant que la synchronisation n'est pas terminée.
- Si QBD a un fichier d'entreprise ouvert et que la synchronisation est en cours, l'interface de QBD peut se comporter de manière inattendue, réduisant l'utilisabilité pendant ces périodes de synchronisation.

Pour prendre en charge une expérience utilisateur transparente, permettez à votre utilisateur de mettre en pause la synchronisation lorsqu'il a besoin d'accéder à QBD. Vous pouvez facilement le faire avec notre [SDK Connections](/auth-flow/optimize/connection-management). Ce composant intégrable permet à vos utilisateurs de mettre en pause les synchronisations en cours ou futures pendant une période définie ainsi que de gérer leurs connexions de données. La fonctionnalité de pause n'est requise que pour les connexions QBD.

<img src="/img/integrations/accounting/quickbooksdesktop/qbd_pause_options.png" />

## Désinstaller le connecteur

Si votre utilisateur souhaite supprimer le web connector et déconnecter le service, il doit accéder à **Paramètres Windows > Applications et fonctionnalités** depuis le menu et rechercher _Web Connector_ dans le formulaire de filtre.

Le web connector QuickBooks apparaîtra alors dans la liste des résultats, et l'utilisateur peut cliquer sur **Désinstaller** pour supprimer le connecteur.

L'utilisateur devra également accéder à `C:\Program Files (x86)\Common Files\Intuit\QuickBooks` et supprimer le fichier `QBWebConnector` de là.

### Supprimer le certificat de l'application

Une fois que l'utilisateur a désinstallé le web connector, il peut également vouloir supprimer le certificat de l'application. Pour ce faire, il doit ouvrir QuickBooks Desktop et accéder à **Edit > Preferences > Integrated Applications > Company Preferences**.

Ensuite, il doit sélectionner votre application et cliquer sur **Remove**.
