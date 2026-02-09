---
title: "Installer le connecteur Sage 50"
slug: "installing-the-sage-50-connector"
description: "Guide pour les utilisateurs PME pour configurer notre connecteur sur site Sage 50."
sidebar_label: Installation du connecteur
---

:::note Liaison d'entreprises utilisant le connecteur Sage 50

Les clients doivent installer et exécuter le connecteur Sage 50 sur le même ordinateur où Sage 50 (RU et Irlande) est installé. En cas de doute, demandez à votre client de lier ses données comptables depuis l'ordinateur qu'il utilise normalement pour accéder à Sage 50 (RU et Irlande).
:::

Pour installer le connecteur Sage 50 Accounts, l'utilisateur qui connecte ses données d'entreprise — l'utilisateur PME — doit effectuer les tâches suivantes :

1. [Télécharger le connecteur](/integrations/accounting/sage50/installing-the-sage-50-connector#1-download-the-connector)
2. [Lancer le connecteur et entrer sa clé de licence](/integrations/accounting/sage50/installing-the-sage-50-connector#2-launch-the-connector-and-enter-their-license-key)
3. [Vérifier le fichier de données de l'entreprise](/integrations/accounting/sage50/installing-the-sage-50-connector#3-verify-company-data-file)
4. [Sélectionner un fichier de données de l'entreprise](/integrations/accounting/sage50/installing-the-sage-50-connector#4-select-a-company-data-file)
5. [Entrer ses identifiants Sage 50 Accounts](/integrations/accounting/sage50/installing-the-sage-50-connector#5-enter-their-sage-50-credentials)
6. [Vérifier les données de l'entreprise](/integrations/accounting/sage50/installing-the-sage-50-connector#6-verify-company-data)

## 1. Télécharger le connecteur

Tout d'abord, l'utilisateur télécharge le connecteur sur site Sage 50 Accounts à partir d'une URL Codat Link.

Si vous utilisez le flux Codat Link, l'utilisateur peut télécharger le connecteur après avoir sélectionné Sage 50 Accounts comme logiciel comptable dans Link. Pour démarrer le téléchargement, il clique sur **Télécharger le connecteur** :

![](/img/old/c15ec77-Download_connector.png "Download connector.png")

Ensuite, l'utilisateur copie sa clé de licence (qui est la même que son _CompanyId_ dans Codat) à utiliser à l'étape suivante.

Si vous avez créé votre propre flux Link, le champ **linkUrl** sur la connexion de données Sage 50 Accounts de l'entreprise lancera le téléchargement de l'installateur.

:::note À propos du fichier de téléchargement du connecteur

Le connecteur Sage 50 Accounts est empaqueté sous forme de fichier .exe. Pour augmenter la confiance de vos clients dans le téléchargement, le nom du fichier est préfixé par le nom de votre entreprise ; c'est-à-dire le nom de l'entreprise à laquelle l'utilisateur connecte ses données. Par exemple : `VotreNomEntreprise-sage50-connector.exe`. Les symboles dans le nom du fichier sont remplacés par des tirets.

De plus, le fichier est signé avec un certificat numérique de signature de code Extended Validation émis par GlobalSign.
:::

## 2. Lancer le connecteur et entrer sa clé de licence

Lorsque le connecteur a été téléchargé et exécuté, un écran similaire au suivant s'affiche.

<img src="/img/old/1b40e3b-Connect_to_Sage_50.png" />

Si l'ordinateur de l'utilisateur a un logiciel antivirus installé, il pourrait être invité à confirmer qu'il fait confiance à la source du fichier. Cette confirmation est spécifique à chaque programme antivirus.

L'utilisateur devrait avoir reçu une _clé de licence_ lorsqu'il a téléchargé le connecteur Sage 50 Accounts. Il doit l'entrer dans la case **Clé de licence** puis cliquer sur **Installer**.

La clé de licence de l'utilisateur est son identifiant d'entreprise Codat.

<img src="/img/old/7955324-Connect_to_Sage_50_License_Key.png" />

Si la clé de licence est valide, le connecteur sera installé ; cela prend quelques minutes. L'utilisateur verra une erreur si la clé de licence n'est pas valide.

La barre de progression affiche l'état de l'installation ; par exemple :

![](/img/old/888be28-Connect_to_Sage_50_License_Key_-_starting_connector.png "Connect to Sage 50 Accounts License Key - starting connector.png")

Une fois l'installation terminée, l'utilisateur sera dirigé vers l'écran de configuration du connecteur Sage 50 Accounts comme décrit à l'étape suivante.

## 3. Vérifier le fichier de données de l'entreprise

Le connecteur démarrera automatiquement une fois l'installation terminée et affichera l'étape **Vérifier le fichier de données de l'entreprise** :

![](/img/old/b585819-Verify_company_data_file.png "Verify company data file.png")

Avant de passer à l'étape suivante, l'utilisateur doit ouvrir Sage 50 Accounts pour le fichier de données de l'entreprise qu'il souhaite connecter et vérifier le fichier pour les erreurs.

Pour plus d'informations sur la façon de vérifier le fichier pour les erreurs, consultez <a className="external" href="https://gb-kb.sage.com/portal/app/portlets/results/viewsolution.jsp?solutionid=200427112158551&hypermediatext=null" target="_blank">Vérifiez que vos données sont en bonne santé</a> dans la documentation Sage 50 Accounts.

## 4. Sélectionner un fichier de données de l'entreprise

À l'étape **Sélectionner un fichier de données de l'entreprise**, l'utilisateur sélectionne le fichier de données de l'entreprise à lier. Une fois sélectionné, la case **Emplacement du fichier de données** est automatiquement remplie avec le chemin du fichier où réside le fichier de données de l'entreprise dans le système de l'utilisateur.

![](/img/old/39c7a88-Select_company_data_file.png "Select company data file.png")

Alternativement, vous pouvez entrer manuellement le chemin d'emplacement du fichier de données dans la case **Emplacement du fichier de données**.

Si vous souhaitez synchroniser des données de démonstration, vous pouvez entrer le chemin suivant :

```
C:\PROGRAMDATA\SAGE\ACCOUNTS\2022\DEMODATA
```

Par exemple :

![](/img/old/476eff9-Select_company_data_file_demodata.png "Select company data file (demodata).png")

## 5. Entrer ses identifiants Sage 50

À l'étape **Définir vos identifiants**, l'utilisateur entre son nom d'utilisateur et son mot de passe Sage 50 dans les cases prévues. Le nom d'utilisateur et le mot de passe entrés doivent être ceux d'un compte utilisateur Sage 50 avec la permission de lire toutes les données que vous prévoyez de synchroniser.

:::caution Créer une connexion distincte pour l'écriture de données

Si votre produit nécessite l'écriture de données dans Sage 50, l'utilisateur doit créer une connexion utilisateur distincte dans Sage 50 à utiliser uniquement par le connecteur Sage 50. Ceci est nécessaire pour éviter les problèmes d'accès simultané.

Pour plus d'informations, consultez l'article distinct sur [l'écriture de données dans Sage 50](/integrations/accounting/sage50/pushing-data-to-sage-50).
:::

Une fois que les informations Sage 50 ont été entrées, l'utilisateur doit cliquer sur **Suivant** pour passer à l'étape finale.

![](/img/old/1861510-Set_your_credentials.png "Set your credentials.png")

Si l'utilisateur entre un nom d'utilisateur, un mot de passe ou un emplacement de répertoire de données incorrect, le connecteur lui affichera un message d'erreur.

## 6. Vérifier les données de l'entreprise

Si des informations valides ont été entrées à l'étape précédente, une boîte de dialogue de confirmation s'affiche qui donne des informations utiles sur l'entreprise qui sera liée. Cela comprend :

- Le nom complet de l'entreprise
- La date de la dernière transaction
- La version Sage
- L'emplacement du fichier dans le système de l'utilisateur (Répertoire de données)

![](/img/old/3daca42-Verify_company_data.png "Verify company data.png")

Cela aide à s'assurer que les bonnes données d'entreprise seront synchronisées et empêche que des données d'entreprise incorrectes soient traitées.

En supposant qu'il s'agit du bon fichier à lier, l'utilisateur doit cocher la case **Je confirme que je veux lier cette entreprise**, puis cliquer sur **Suivant**.

L'utilisateur est ensuite redirigé vers le flux Codat Link, où il peut voir que la connexion a réussi.

![](/img/old/9a9caa6-after_successful_Verify_company_data.png "after successful Verify company data.png")

La synchronisation initiale prendra plusieurs minutes, bien que les fichiers Sage 50 plus volumineux (par exemple, les fichiers avec un nombre élevé de transactions) puissent prendre jusqu'à 30 minutes.

Selon la configuration comme [documenté ici](/integrations/accounting/offline-connectors), le connecteur effectuera l'une des deux actions possibles après la fin de la synchronisation initiale. Le connecteur va soit :

- S'exécuter en arrière-plan et synchroniser automatiquement les données lorsque de nouveaux ensembles de données sont mis en file d'attente ; ou
- Se désinstaller une fois la synchronisation unique initiale terminée.
