---
title: "Mode multi-entreprises pour Sage 50 Accounts (RU et Irlande)"
slug: "sage50-multi-company-mode"
description: "Utilisez notre connecteur Sage 50 Accounts (RU et Irlande) lorsque le mode multi-entreprises est activé."
sidebar_label: Mode multi-entreprises
---

Lorsque le mode multi-entreprises est activé dans Sage 50, un seul connecteur Sage 50 Accounts installé peut se synchroniser avec plusieurs fichiers de données d'entreprise Sage 50 Accounts.

_Exemple du connecteur Sage 50 Accounts avec deux entreprises connectées :_

<img src="/img/old/4cc7c7e-Sage_50_Multi-company_mode_-_home_screen.png" />

## Configuration du mode multi-entreprises

Assurez-vous d'avoir un connecteur installé et lié avec succès à une entreprise sur une machine. Il existe deux façons d'ajouter une entreprise supplémentaire au même connecteur :

- Lorsqu'une nouvelle URL Link pour une entreprise nouvellement créée est suivie sur une machine qui a déjà un connecteur installé.
- En cliquant sur le bouton **Ajouter une nouvelle connexion** sur l'écran du connecteur et en suivant les étapes à l'écran :

<img src="/img/old/bcb1e5a-Sage_50_Multi-company_mode_-_home_screen_Add_new_connection_button.png" />

Les étapes sont les mêmes pour ces deux options :

1. Entrer la clé de licence
2. Vérifier le fichier de données de l'entreprise
3. Sélectionner le fichier de données de l'entreprise
4. Entrer les identifiants Sage 50 Accounts
5. Vérifier les données de l'entreprise

Plutôt qu'un connecteur séparé soit installé, le même connecteur gérera maintenant les connexions et les synchronisations des deux fichiers de données d'entreprise.

Cliquez avec le bouton droit sur l'icône de la barre du connecteur Sage 50 Accounts (généralement située en bas à droite de l'écran) et sélectionnez **Ouvrir le connecteur Sage 50 Accounts**. Cela affichera le connecteur, qui est maintenant en mode multi-entreprises :

<img src="/img/old/f304b80-Sage_50_Multi-company_mode_-_home_screen.png" />

## Synchronisation en mode multi-entreprises

En mode multi-entreprises, vous pouvez choisir de :

1. Synchroniser une seule entreprise
2. Synchroniser toutes les entreprises depuis la barre

# 1. Synchronisation d'une seule entreprise

Cliquez sur le bouton **Effectuer la synchronisation** à côté de l'entreprise pour laquelle vous souhaitez forcer une synchronisation manuelle des données :

<img src="/img/old/9a9a1b5-Sage_50_Multi-company_mode_-_perform_sync_button.png" />

Après une synchronisation réussie, la vue du connecteur multi-entreprises affichera l'état de la synchronisation pour l'entreprise :

<img src="/img/old/d311f65-Sage_50_Multi-company_mode_-_success_sync.png" />

# 2. Synchroniser toutes les entreprises depuis la barre

1. Cliquez avec le bouton droit sur l'icône de la barre du connecteur Sage 50 Accounts en bas à droite de l'écran.
2. Cliquez sur **Effectuer la synchronisation des données**.
3. Vérifiez que toutes les entreprises commencent à se synchroniser.

## Annulation des synchronisations en mode multi-entreprises

Lors de la synchronisation de toutes les entreprises pour un connecteur en mode multi-entreprises, vous ne pouvez pas arrêter (annuler) les entreprises qui sont actuellement en cours de synchronisation. Les entreprises actuellement en cours de synchronisation sont représentées par un nuage bleu avec une flèche blanche pointant vers le haut :

<img src="/img/old/c3802a2-Sage_50_Multi-company_mode_-_blue_clouds.png" />

Cependant, vous pouvez choisir d'annuler toutes les entreprises qui n'ont pas encore commencé à se synchroniser mais qui sont « en file d'attente » pour le faire, c'est-à-dire les synchronisations en attente. Les _synchronisations en file d'attente_ sont représentées par une icône de nuage vide dans la vue du connecteur multi-entreprises.

Toutes les entreprises qui devaient se synchroniser, mais qui n'étaient pas en cours de synchronisation au moment de l'effacement de la file d'attente, ne seront pas synchronisées manuellement. Toutes les entreprises continueront ensuite à se synchroniser en fonction de vos [Paramètres de type de données](/core-concepts/data-type-settings).
