---
title: "Dépannage de Sage50"
---

## Redémarrage du connecteur

Si votre client ne peut pas redémarrer pour une raison quelconque, il peut faire ce qui suit :

Assurez-vous que le connecteur n'est pas en cours d'exécution (s'il est en cours d'exécution, vous verrez Sage50 Connector.exe dans le gestionnaire de tâches)
Vérifiez à nouveau que le connecteur n'est pas en cours d'exécution
Démarrez le connecteur en exécutant z%LocalAppData%\Codat\Sage50Connector.exez (soit en naviguant vers le dossier et en double-cliquant sur le .exe ou en le mettant dans l'invite Exécuter de Windows)

## Trouver la clé de licence d'un connecteur installé

Si le connecteur Sage 50 Accounts n'est pas déjà au premier plan, ouvrez-le en cliquant avec le bouton droit sur l'icône du connecteur dans la barre, généralement située en bas à gauche de l'écran, et en sélectionnant « Ouvrir le connecteur Sage 50 Accounts ».

Cliquez sur le lien « Licence ».

Cela affichera le produit (le nom de votre produit d'entreprise tel que défini dans le portail (documenté ici) et la clé de licence de l'utilisateur (qui est l'identifiant de l'entreprise tel que trouvé dans le portail Codat lors de la création de l'entreprise).

## Logiciel antivirus

Bien que nous soumettions régulièrement notre connecteur pour être mis en liste blanche par les fournisseurs d'antivirus courants, il est parfois possible qu'un antivirus signale le connecteur comme un faux positif. Bien que la méthode exacte d'ajout du connecteur à la liste blanche locale varie avec chaque logiciel, les étapes générales sont les mêmes.

L'utilisateur devra ajouter le dossier `C:\Users\<VotreNomUtilisateur>\AppData\Local\Codat` au paramètre d'exclusion / liste blanche de son logiciel antivirus.

### Mise en liste blanche dans Avast!

Certaines entreprises utilisant Sage 50 Accounts et l'antivirus Avast! ont signalé avoir rencontré des difficultés lors de la tentative de synchronisation des données.

Nous avons identifié qu'Avast! bloque parfois les mises à jour du connecteur Sage 50 Accounts car il identifie incorrectement le connecteur comme une menace possible lors de la première publication des mises à jour.

Nous recommandons de mettre en liste blanche le dossier où le connecteur a été installé pour empêcher Avast! de bloquer l'exécution du connecteur après une mise à jour.

Pour mettre en liste blanche le dossier du connecteur, vos utilisateurs doivent :

1. Ouvrir leur tableau de bord Avast! et cliquer sur Menu.
2. Cliquer sur Paramètres.
3. Aller dans Général > Exceptions et cliquer sur « Ajouter une exception »
4. Cliquer sur Parcourir
5. En utilisant la hiérarchie de l'arborescence, sélectionner le dossier dans lequel le connecteur a été installé (`C:\Users\VOTRE_NOM_UTILISATEUR\AppData\Local\Codat`) et cliquer sur OK.

_Remarque : Nous recommandons que l'utilisateur sélectionne l'ensemble du dossier et non seulement des emplacements de connecteur individuels. _
Vérifiez à nouveau que le dossier où se trouve le connecteur est affiché dans la liste et fermez le tableau de bord Avast!

## Mise en liste blanche de nos connecteurs hors ligne dans l'application de bureau Webroot SecureAnywhere

Certaines entreprises utilisant nos connecteurs hors ligne et l'antivirus Webroot SecureAnywhere ont signalé avoir rencontré des difficultés lors de la tentative de synchronisation des données.

Nous avons identifié que Webroot SecureAnywhere bloque parfois les mises à jour du connecteur Sage 50 Accounts car il identifie incorrectement les connecteurs comme une menace possible.

Nous recommandons de mettre en liste blanche le dossier où le connecteur a été installé pour empêcher Webroot SecureAnywhere de bloquer l'exécution du connecteur après une mise à jour.

Pour mettre en liste blanche le dossier du connecteur, vos utilisateurs doivent :

Ouvrir leur application de bureau Webroot SecureAnywhere et cliquer sur l'icône Paramètres dans la section Sécurité du PC.
Naviguer vers l'onglet « Scripts en liste blanche » et cliquer sur Liste blanche avancée
En utilisant la hiérarchie de l'arborescence, sélectionner le dossier dans lequel le connecteur a été installé (`C:\Users\VOTRE_NOM_UTILISATEUR\AppData\Local\Codat`) et cliquer sur Sélectionner.

_Remarque : Nous recommandons que l'utilisateur sélectionne l'ensemble du dossier et non seulement des emplacements de connecteur individuels. _

Vérifiez à nouveau que le dossier où se trouve le connecteur est affiché dans la liste et fermez l'application de bureau Webroot SecureAnywhere.

## L'entreprise ne peut pas être trouvée

Une fois le connecteur hors ligne installé, vous devriez pouvoir sélectionner l'entreprise Sage 50 Accounts requise dans la liste déroulante. Dans certains cas (par exemple, si vos données sont stockées à un endroit différent), vous devrez peut-être effectuer les étapes suivantes pour localiser votre entreprise.

1. Connectez-vous à votre application **Sage 50** et sélectionnez l'entreprise pour laquelle vous souhaitez synchroniser les données. Accédez à **Aide > À propos**, puis trouvez et copiez les informations du répertoire de données pour cette entreprise.

![Une capture d'écran de l'interface du logiciel comptable Sage 50 Accounts, avec la section À propos ouverte pour l'exemple d'entreprise Bob's Burgers. Parmi les détails du programme, les informations de licence et les coordonnées, les informations du répertoire de données sont indiquées à l'aide d'une boîte et d'une flèche rouges.](/img/integrations/accounting/sage-50/sage50-connector-app-about-section.png)

2. Retournez au connecteur et collez les informations du répertoire de données copiées dans le champ du répertoire de données. Entrez le nom d'utilisateur et le mot de passe associés à cette entreprise et cliquez sur le bouton « Lier l'entreprise et effectuer la synchronisation ».

![Une capture d'écran du connecteur hors ligne Sage 50 Accounts avec les champs de répertoire de données, nom d'utilisateur et mot de passe remplis. Le bouton Lier l'entreprise et effectuer la synchronisation est entouré d'une boîte rouge.](/img/integrations/accounting/sage-50/sage50-connector-app-about-section.png)

3. Une fenêtre contextuelle avec les détails de l'entreprise apparaîtra. Si les données sont correctes, appuyez sur le bouton « Confirmer » pour confirmer. Votre entreprise commencera à se synchroniser.
