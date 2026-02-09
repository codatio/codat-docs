---
title: "Dépannage"
description: "Résoudre les erreurs courantes"
displayed_sidebar: lending
image: "/img/banners/social/lending.png"
---

## Codes d'erreur de Lending

| Code d'erreur | Description                                                                                                           |
| ------------- | --------------------------------------------------------------------------------------------------------------------- |
| 100           | Un jeu de données requis n'est pas disponible pour l'entreprise (soit non pris en charge, non synchronisé, non activé ou la synchronisation a échoué). |
| 101           | Le type de données `{dataType}` n'a pas encore été demandé ou la synchronisation n'est pas encore terminée.           |
| 105           | Il manque à une entreprise une connexion de données requise, par exemple bancaire, comptable, commerciale.            |
| 110           | Impossible de récupérer les données demandées.                                                                        |
| 120           | Il n'y a pas de données pour la plage de dates demandée.                                                              |
| 130           | Une catégorie de compte invalide est définie pour le compte `{accountId}` (`{category}.{subType}.{detailType}`).      |
| 200           | Des paramètres requis manquent dans la requête, par exemple l'identifiant de l'entreprise.                            |
| 215           | Connexion de données introuvable ou la connexion de données n'est pas une source de données comptables.               |
| 220           | Accès refusé.                                                                                                         |
| 230           | L'entreprise n'a aucune source de données connectée.                                                                  |
| 300           | Vous n'avez pas la solution Lending activée. Activez Lending dans le Portal Codat ou contactez votre représentant commercial. |
| 320           | Les capitaux propres calculés pour une ou plusieurs périodes ne correspondent pas aux actifs nets.                     |
| 330           | Impossible de générer le fichier Excel pour l'entreprise `{companyId}` car des paramètres requis manquent dans la requête. |
| 331           | Impossible de générer le rapport pour le type `{reportType}`.                                                         |
