---
title: "FAQ Oracle NetSuite"
description: "Questions fréquemment posées sur notre intégration Oracle NetSuite."
sidebar_label: FAQ
---

## Notre intégration NetSuite prend-elle en charge la comptabilité multi-livres

_Multi-Book Accounting_ est une fonctionnalité NetSuite qui permet aux utilisateurs de publier des transactions dans des journaux spécifiques. Outre les écritures de journal, notre modèle de données comptables ne peut pas représenter ces informations de journal pour les types de données pris en charge par l'intégration NetSuite. Toutes les autres données transactionnelles sont lues vers Codat si Multi-Book Accounting est activé.

## Notre intégration NetSuite prend-elle en charge OneWorld?

Oui.

## Qu'est-ce que NetSuite OneWorld?

NetSuite OneWorld prend en charge les organisations mondiales à filiales multiples. Codat gère la synchronisation des licences OneWorld de la même manière que décrit ci-dessus.

- NetSuite OneWorld prend en charge les organisations mondiales à filiales multiples.
- OneWorld organise les filiales nationales et internationales en une structure hiérarchique unique.
- Chaque filiale est traitée comme une entité juridique unique à des fins de taxation et de réglementation.
- Chaque filiale a un nexus spécifique (juridiction fiscale) et une devise de base spécifique. Cette devise de base est la devise dans laquelle la filiale gère ses finances. Les données spécifiques à la filiale sont disponibles pour les rapports.

**Voici un exemple de hiérarchie dans NetSuite :**

<img src="/fr-ca/img/old/4a3f5ef-image-20210611-134647.png" />

Cette même hiérarchie serait 5 entreprises différentes sur la plateforme Codat.
Company 1: Codat Limited
Company 2: Codat Europe
Company 3: Codat France
Company 4: Codat Germany
Company 5: Codat | London

## Comment les formulaires personnalisés sont-ils gérés lors de l'écriture de données dans NetSuite?

NetSuite permet aux utilisateurs de définir des formulaires personnalisés pour les pages, y compris des formulaires de saisie et de transaction personnalisés. Ceci est une alternative à l'utilisation des formulaires standard par défaut.

Si la page cible a un formulaire personnalisé défini, les données sont écrites en utilisant le formulaire standard pour la page. Les champs personnalisés qui ont été ajoutés au formulaire personnalisé ne sont pas écrits.

Si l'opération d'écriture échoue, vérifiez que le formulaire standard pour la page est actif et est activé pour le rôle d'utilisateur requis. Si c'est le cas, vérifiez ensuite que le formulaire standard lui-même n'a pas été modifié. Une cause courante d'échec d'écriture est la présence de champs personnalisés sur le formulaire standard définis comme obligatoires.

Pour plus d'informations, consultez <a className="external" href="https://docs.oracle.com/en/cloud/saas/netsuite/ns-online-help/chapter_N2852749.html" target="_blank">Custom Forms</a> dans la documentation NetSuite.

## Comment les filiales sont-elles gérées dans Codat?

Codat maintient une relation 1 à 1 entre une entité/filiale et une entreprise Codat. Le processus de liaison entraînera la synchronisation des données de chaque entité/filiale individuelle vers une entreprise Codat séparée et distincte.

Pour qu'un client obtienne une vue complète d'une entreprise qui possède plusieurs entités juridiques, ses clients devront passer par un processus de liaison distinct pour chaque entité juridique qui existe dans le logiciel comptable.

:::caution Filiales d'élimination

Les filiales d'élimination dans NetSuite sont utilisées pour enregistrer uniquement les écritures de journal et les transactions entre filiales à des fins de consolidation. Ces informations sont disponibles sur les filiales non-élimination, donc Codat ne récupérera pas les filiales d'élimination.
:::
