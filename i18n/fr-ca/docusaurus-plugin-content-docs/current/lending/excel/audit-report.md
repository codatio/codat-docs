---
title: "Rapport d'audit"
description: "Identifiez les irrégularités comptables avec le rapport d'audit de Codat"
sidebar_label: "Rapport d'audit"
image: "/fr-ca/img/banners/social/lending.png"
draft: true
---

La prise de décision en matière de crédit nécessite des données précises et à jour. Le rapport d'audit de Codat identifie les indicateurs de comptes inexacts ou obsolètes, vous aidant à prendre des décisions en toute confiance.

Le rapport comprend des informations sur le moment où les enregistrements ont été mis à jour pour la dernière fois et les tendances des profits et pertes. Le rapport affiche trois ans de données historiques à partir du mois où le rapport a été généré.

## Prérequis

Le rapport contient des données basées sur les types de données que vous avez activés. Si un type de données est manquant, les données associées seront omises.

Le rapport d'audit nécessite une intégration comptable avec au moins un des types de données suivants activé :

- Profit and Loss (activé par défaut lorsque Lending est activé pour votre client Codat)
- Credit Notes
- Invoices
- Payments
- Sales Orders
- Purchase Orders
- Bills
- Bill Payments
- Bill Credit Notes

Le fichier Excel généré contient le champ `UnAnalyzedDataTypes` dans la feuille [Info de rapport](#report-info) qui liste les types de données requis pour maximiser la valeur du rapport d'audit mais qui sont désactivés. Il est recommandé d'activer ces types de données.

Les types de données peuvent être activés dans le <a className="external" href="/core-concepts/data-type-settings" target="_blank">portail</a>.

## Génération du rapport

Le rapport d'audit peut être généré via l'API ou via le [portail de Codat](https://app.codat.io). La page [Rapports Excel](/lending/excel/overview) décrit comment générer et télécharger le rapport via l'API.

## Comprendre le rapport

Cette section décrit chacune des sections et métriques qui composent le rapport d'audit.

### Info de rapport

Cette section fournit des informations générales sur les métriques contenues dans ce rapport.

L'image ci-dessous montre les champs dans l'**Info de rapport**. Des bordures et des styles ont été ajoutés à cette image pour plus de clarté mais ne sont pas inclus dans le fichier Excel téléchargeable.

![Un exemple de feuille Excel montrant les informations du rapport d'audit](/img/old/aa43c22-ReportInfo2.png "Un exemple de feuille Excel montrant les informations du rapport d'audit")

Cette feuille fournit les informations générales suivantes sur le rapport :

- La date à laquelle le rapport a été généré.
- Les dates _de_ et _à_ pour les données contenues dans le rapport.
- Les types de données qui ont été analysés (le champ `AnalyzedDataTypes`) pour produire le rapport.
- Les types de données qui n'ont pas été utilisés (le champ `UnAnalyzedDataTypes`) pour générer ce rapport. Pour maximiser la valeur du rapport d'audit, vous devriez activer ces types de données.

#### Résumé de traitement

Le résumé de traitement est un rapport d'exception qui fournit un aperçu des problèmes rencontrés lors de la production d'une métrique dans le rapport d'audit. Il se compose de :

- Type : Le type de message qui peut être : Information, Avertissement et Erreur.
- Métrique connexe : La feuille de métrique à laquelle le message se rapporte, par exemple, **Round Sum**.
- Type de données connexe : Le type de données pertinent pour la métrique, par exemple, `salesOrders`.
- Message : Un message informatif, par exemple : "Le type de données ne contient aucun enregistrement."

### Enregistrements mis à jour pour la dernière fois

Les enregistrements récemment mis à jour sont préférés lors de l'évaluation des finances d'une entreprise. Cette section montre quand les enregistrements requis ont été mis à jour pour la dernière fois.

#### Structure du rapport

L'image ci-dessous montre les champs dans le rapport **Enregistrements mis à jour pour la dernière fois**. Ce rapport affiche le nombre de jours depuis la dernière mise à jour d'un enregistrement par type de données.

Des bordures et des styles ont été ajoutés à cette image pour plus de clarté mais ne sont pas inclus dans le fichier Excel téléchargeable.

![Extrait du rapport Excel Enregistrements mis à jour pour la dernière fois](/img/old/20a9208-RecordsLastUpdated1.png "Extrait du rapport Excel Enregistrements mis à jour pour la dernière fois")

##### Champs du rapport

- DataType : Les types de données requis pour produire les métriques de compte. Le `DataType` _Any_ se rapporte au type de données qui a été modifié le plus récemment. Dans l'exemple ci-dessus, ce serait `payments` qui a été modifié il y a un jour.
- HasRecords : Indique si le type de données a des enregistrements.
- Days : Les jours depuis la dernière mise à jour du compte par rapport à la `date à` pour les données contenues dans le rapport.

### Tendances des profits et pertes

Cette section du rapport d'audit affiche les métriques de profit brut, profit d'exploitation net et profit net sur une base mensuelle avec le pourcentage de changement et des résumés annuels. Cela offre un aperçu de tout changement extrême qui pourrait être indicatif d'une croissance anormale, de fraude ou de dette supplémentaire contractée par l'entreprise.

Explorez [l'état des profits et pertes catégorisé](/lending-api#/operations/get-categorized-profit-and-loss-statement) pour voir le rapport complet.

#### Structure du rapport

Le rapport affiche trois ans de données historiques à partir du mois où le rapport a été généré. Par exemple, exécuter le rapport le _10 octobre 2022_ retournera des données du _novembre 2019_ à _octobre 2022_.

L'image ci-dessous est un extrait du rapport **Tendance des profits et pertes** qui montre les métriques de profit brut. Les sections Profit d'exploitation net et Profit net ne sont pas incluses ici, mais elles suivent les mêmes principes.

Des bordures et des styles ont été ajoutés à cette image pour plus de clarté mais ne sont pas inclus dans le fichier Excel téléchargeable.

![Extrait du rapport Excel Tendances des profits et pertes](/img/old/183aa66-PL3.png "Extrait du rapport Excel Tendances des profits et pertes")

Si les données les plus récentes ou les plus anciennes n'existent pas, seules ces dates seront omises du rapport. En d'autres termes, vous n'obtiendrez pas toujours trois ans complets de données. De même, si les données d'une quatrième année (la plus ancienne) n'existent pas, le pourcentage de changement ne sera pas calculé.

##### Comment le pourcentage de changement de la première année est-il calculé?

Une quatrième année de données, dans cet exemple du 02/01/2018 au 01/01/2019, est utilisée pour calculer le pourcentage de changement de la première des trois années. Les données de la quatrième année ne sont cependant pas incluses dans le rapport.

##### Champs du rapport

- Date : Le format de date est MM/JJ/AAAA.
- Début et fin d'année : Montre clairement les dates de début et de fin de chacune des trois années. Ceci est nécessaire car une confusion peut survenir en raison de l'année de début basée sur la date à laquelle le rapport a été généré, remontant à trois ans. Ce n'est pas basé sur une année civile ou fiscale.
- Profit brut :
  - Montant total (Année) : Le montant total pour l'année. La valeur est répétée pour chaque mois d'une année donnée.
  - Pourcentage de changement (Année) : Le pourcentage de changement par rapport à l'année précédente. Dans cet exemple, la différence en pourcentage pour l'année 3 par rapport à l'année 2 est `((210,410.13 / 234,912.87)-1) * 100 = -10.43%`.
  - Montant total (Mois) : Le montant à la fin du mois. Le mois où le rapport est généré fournira le total à ce jour pour ce mois.
  - Pourcentage de changement (Mois) : Le pourcentage de changement par rapport au mois précédent.

### Sommes rondes

Une valeur de somme ronde est lorsque le montant total d'une transaction a un nombre rond. Par exemple, les factures de 32,00 £, 99,00 £ et 200,00 £ sont toutes des valeurs de somme ronde, tandis que des valeurs telles que 31,99 £ ou 199,59 £ ne le sont pas. Les valeurs de somme ronde peuvent indiquer une possible activité frauduleuse et un besoin d'enquête plus approfondie. Le rapport offre des informations sur la proportion de transactions qui ont des valeurs de somme ronde.

#### Structure du rapport

Le rapport **Sommes rondes** montre le pourcentage de transactions qui ont des sommes rondes par type de données par mois. Le rapport affiche trois ans de données historiques à partir du mois où le rapport a été généré. Si vos données ne remontent pas à trois ans complets, seules les données que vous avez seront incluses dans le rapport.

Les types de données évalués sont _Invoices_, _Payments_, _Credit Notes_, _Sales Orders_, _Bills_, _Bill Payments_, _Bill Credit Notes_ et _Purchase Orders_. Assurez-vous que ces types sont activés car les types de données désactivés ne sont pas évalués.

L'image ci-dessous est un extrait du rapport **Sommes rondes**. Des bordures et des styles ont été ajoutés à cette image pour plus de clarté mais ne sont pas inclus dans le fichier Excel téléchargeable.

![Extrait du rapport Excel Sommes rondes](/img/old/3887ee2-RoundSum6.png "Extrait du rapport Excel Sommes rondes")

Le rapport fournit une ligne par type de données par mois et montre les enregistrements avec des sommes rondes en pourcentage du total des enregistrements évalués pour ce mois.

Le champ **All** montre le pourcentage total d'enregistrements avec des sommes rondes par rapport à tous les enregistrements évalués sur trois ans. Dans cet exemple, `0,65%` des `446` enregistrements évalués avaient des valeurs de somme ronde. En tenant compte des erreurs d'arrondi, cela équivaut à `3` enregistrements. La date à côté du bouton **All** signifie le début de la période de trois ans ou la date des premières données disponibles.

Les métriques pour les mois partiels sont incluses, mais sont exclues du calcul de la moyenne mensuelle et de l'écart type. Par exemple, lors de la génération du rapport en milieu de mois, les enregistrements du premier et du dernier mois ne seront pas inclus dans les calculs de moyenne mensuelle et d'écart type.

Les enregistrements qui ont un statut `Draft` sont exclus de l'évaluation.

### Descriptions vides

Les transactions sans descriptions manquent de contexte et sont un signe de mauvaises pratiques comptables ou de comportement frauduleux. Le rapport offre des informations sur la proportion de transactions qui ont des descriptions vides.

#### Structure du rapport

Le rapport **Descriptions vides** montre le pourcentage de transactions qui ont des descriptions vides par type de données par mois. Le rapport affiche trois ans de données historiques à partir du mois où le rapport a été généré. Si vos données ne remontent pas à trois ans complets, seules les données que vous avez seront incluses dans le rapport.

Les types de données évalués sont _Invoices_, _Payments_, _Credit Notes_, _Sales Orders_, _Bills_, _Bill Payments_, _Bill Credit Notes_ et _Purchase Orders_. Assurez-vous que ces types sont activés car les types de données désactivés ne sont pas évalués.

L'image ci-dessous est un extrait du rapport **Descriptions vides**. Des bordures et des styles ont été ajoutés à cette image pour plus de clarté mais ne sont pas inclus dans le fichier Excel téléchargeable.

![Extrait du rapport Descriptions vides](/img/old/bce5f4d-BlankDescription1.png "Extrait du rapport Descriptions vides")

Chaque mois montre le pourcentage de descriptions vides par type de données ainsi que les totaux fournis dans les lignes _All_.

Dans cet exemple, janvier a des descriptions vides pour `creditNotes (2)`, `invoices (1)` et `salesOrders (1)`. Il y a un total de 8% des 50 transactions évaluées pour janvier qui ont des descriptions vides. Cela se traduit par 4 transactions contenant des descriptions vides pour le mois de janvier.

Les métriques pour les mois partiels sont incluses, mais sont exclues du calcul de la moyenne mensuelle et de l'écart type. Par exemple, lors de la génération du rapport en milieu de mois, les enregistrements du premier et du dernier mois ne seront pas inclus dans les calculs de moyenne mensuelle et d'écart type.

### En dehors des heures de travail

Les enregistrements qui sont mis à jour en dehors des heures de travail peuvent être un signe d'activité frauduleuse. Le rapport offre des informations sur la proportion de transactions qui ont été mises à jour pendant un week-end.

La métrique **En dehors des heures de travail** est une mesure efficace pour les PME plus grandes, celles qui effectueraient typiquement des activités comptables pendant les heures de bureau.

#### Structure du rapport

La métrique **En dehors des heures de travail** montre le pourcentage d'enregistrements qui ont été mis à jour en dehors des heures de travail par type de données par mois. Le rapport affiche trois ans de données historiques à partir du mois où le rapport a été généré. Si vos données ne remontent pas à trois ans complets, seules les données que vous avez seront incluses dans le rapport.

Les types de données évalués sont _Invoices_, _Payments_, _Credit Notes_, _Sales Orders_, _Bills_, _Bill Payments_, _Bill Credit Notes_ et _Purchase Orders_. Assurez-vous que ces types sont activés car les types de données désactivés ne sont pas évalués.

L'image ci-dessous est un extrait de la métrique **En dehors des heures de travail**. Des bordures et des styles ont été ajoutés à cette image pour plus de clarté mais ne sont pas inclus dans le fichier Excel téléchargeable.

![Extrait du rapport Descriptions vides](/img/old/d1988b1-OutsideWorkingHours1.png "Extrait du rapport Descriptions vides")

Chaque mois montre le pourcentage de transactions qui ont été mises à jour en dehors des heures de travail par type de données ainsi que les totaux fournis dans les lignes _All_.

Dans cet exemple, juillet montre des transactions qui ont été mises à jour en dehors des heures de travail pour `creditNotes (4 enregistrements)`, `invoices (4)`, `payments (9)` et `salesOrders (1)`. Il y a un total de 32,73% des 55 enregistrements évalués pour juillet qui ont été mis à jour en dehors des heures de travail. Cela se traduit par 18 transactions.

Les métriques pour les mois partiels sont incluses, mais sont exclues du calcul de la moyenne mensuelle et de l'écart type. Par exemple, lors de la génération du rapport en milieu de mois, les enregistrements du premier et du dernier mois ne seront pas inclus dans les calculs de moyenne mensuelle et d'écart type.

### Enregistrements antidatés

Les enregistrements où la date de création dans le système comptable est postérieure à sa date de clôture est une indication d'un problème. Soit les comptes ne sont pas exacts (car ils ne rapportent pas les enregistrements au fur et à mesure qu'ils se produisent) ou l'entreprise est impliquée dans une activité frauduleuse, comme la surestimation des revenus.

#### Structure du rapport

La métrique **Enregistrements antidatés** montre le pourcentage d'enregistrements qui ont été antidatés par type de données par mois. Le rapport affiche trois ans de données historiques à partir du mois où le rapport a été généré. Si vos données ne remontent pas à trois ans complets, seules les données que vous avez seront incluses dans le rapport.

Les types de données évalués sont _Invoices_ et _Bills_. Assurez-vous que ces types sont activés car les types de données désactivés ne sont pas évalués.

L'image ci-dessous est un extrait de la métrique **Enregistrements antidatés**. Des bordures et des styles ont été ajoutés à cette image pour plus de clarté mais ne sont pas inclus dans le fichier Excel téléchargeable.

![Extrait du rapport Enregistrements antidatés](/img/old/e7ec18c-BackdatedRecords1.png "Extrait du rapport Enregistrements antidatés")

Chaque mois montre le pourcentage d'enregistrements qui ont été antidatés par type de données et les totaux fournis dans les lignes _All_.

Dans cet exemple, avril montre des enregistrements qui ont été antidatés pour `bills (1 enregistrement)` et `invoices (2)`. Il y a un total de 24,85% des 26 enregistrements évalués pour avril qui ont été antidatés. Cela se traduit par 3 enregistrements.

Les métriques pour les mois partiels sont incluses, mais sont exclues du calcul de la moyenne mensuelle et de l'écart type. Par exemple, lors de la génération du rapport en milieu de mois, les enregistrements du premier et du dernier mois ne seront pas inclus dans les calculs de moyenne mensuelle et d'écart type.
