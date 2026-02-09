---
title: "FAQ"
description: "Questions fréquemment posées sur notre connecteur sur site QuickBooks Desktop."
sidebar_label: FAQ
---

## Dois-je exécuter le connecteur QBD sur la même machine où QuickBooks est installé?

Oui. Tout parcours utilisateur doit indiquer clairement que l'utilisateur doit exécuter le connecteur sur la machine qu'il utilise pour accéder à QuickBooks. Une fonctionnalité permettant d'envoyer par e-mail un lien vers le connecteur à un tiers (tel qu'un comptable) peut aider à réduire ces problèmes.

## Un utilisateur peut-il installer plusieurs connecteurs QBD sur la même machine?

Oui. Plusieurs entreprises peuvent être synchronisées depuis le même ordinateur. Si un utilisateur souhaite synchroniser plusieurs entreprises, il doit compléter le flux de liaison une fois par entreprise, en s'assurant qu'il est connecté à la bonne entreprise QuickBooks lorsqu'il confirme que QuickBooks est ouvert et connecté.

## Le connecteur QBD nécessite-t-il des droits d'administrateur?

Oui, le connecteur nécessite des privilèges d'administrateur (droits d'admin) pour s'installer. Les droits d'admin ne sont pas requis pour exécuter le connecteur après l'installation.

Vous devrez peut-être demander l'autorisation d'installer le connecteur auprès de votre service informatique, conformément aux processus internes de votre entreprise.

## Y a-t-il des limites à la lecture des données historiques de QBD?

Oui. Le connecteur QBD peut lire les données datées du 1er janvier 1980 et ultérieures uniquement. Les données plus anciennes ne peuvent pas être lues à l'aide de l'intégration.

## Pourquoi y a-t-il des lacunes dans les rapports financiers?

Par défaut, nous lisons les types de données utilisés dans les rapports financiers par lots de 3 mois pour réduire le nombre de requêtes faites à QBD. En conséquence, les données que nous utilisons dans les rapports sont complètes mais agrégées en périodes de 3 mois. Si vous avez besoin d'une répartition mois par mois des rapports financiers, demandez-les à l'équipe de [Support](mailto:support@codat.io) de Codat.

## Que signifie le statut "Waiting for asynchronous response from third party"?

Lorsqu'une synchronisation de type de données est listée comme `Fetching` avec le message supplémentaire `Waiting for asynchronous response from third party`, nous essayons de faire remonter le problème associé dans **Companies > Company > Data history** du [portail Codat](https://app.codat.io) et dans la propriété `connectionInfo` de notre point de terminaison [Get connection](https://docs.codat.io/platform-api#/operations/get-connection).

Si vous ne voyez aucune erreur de connexion remontée avec ce message, cela signifie que le Web Connector n'a pas encore répondu à la demande de synchronisation de Codat.

<img src="/img/integrations/accounting/quickbooksdesktop/read-history-fetching-waiting-for-async-response.png" />

Nous avons résumé les raisons possibles du message et les résolutions disponibles dans le tableau ci-dessous.

| **Problème potentiel**                                                                                                                                 | **Remonté dans les erreurs de connexion?** | **Action utilisateur pour résoudre**                                                  |
| --------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------- | --------------------------------------------------------------------------- |
| La machine sur laquelle QBD et le Web Connector sont installés est éteinte                                                                            | Non                                 | Allumer la machine                                                         |
| L'application Web Connector est fermée                                                                                                             | Non                                 | Ouvrir le Web Connector                                                      |
| La fonctionnalité "Auto-run" du Web Connector a été désactivée                                                                                            | Oui                                | Cocher la case "Auto-Run" sur la ligne de connexion pertinente dans le Web Connector |
| Le fichier d'entreprise QBD ouvert est différent de celui avec lequel nous essayons de synchroniser les données                                                                 | Oui                                | Fermer QuickBooks Desktop                                                    |
| L'utilisateur qui a créé la connexion a ouvert le fichier d'entreprise QBD sur une machine différente de celle où il a installé le Web Connector | Oui                                | Se déconnecter de toutes les autres instances de QuickBooks Desktop                        |
