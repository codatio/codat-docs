---
title: "Référence de l'intégration Sage Accounting"
description: "Informations à connaître lors de la synchronisation de données avec Sage Accounting."
sidebar_label: Référence
---

Notez les informations suivantes lors de la création de votre application en utilisant l'intégration Sage Accounting de Codat.

## Transfers

Les Transfers sont mappés à partir des <a className="external" href="https://ie-kb.sage.com/portal/app/portlets/results/viewsolution.jsp?solutionid=222001000100784" target="_blank">virements bancaires</a> et des <a  class="external" href="https://ie-kb.sage.com/portal/app/portlets/results/viewsolution.jsp?solutionid=222001000100784" target="_blank">dépôts bancaires</a> dans Sage Accounting.

Lors de l'écriture de Transfers dans Sage Accounting, le type d'objet métier créé dépend des comptes bancaires spécifiés dans le Transfer.

- Si le compte `FROM` dans Sage Accounting est un _compte de caisse_ et que le compte `TO` est soit un _compte courant_ soit un _compte d'épargne_, alors un objet Bank Deposit est créé.
- Dans tous les autres scénarios, un objet Bank Transfer est créé.

Lors de l'écriture de Transfers dans Sage Accounting, les champs suivants ne sont pas remplis dans les objets Bank Transfer :

- `Method`
- `Description`

Les types suivants d'objets Bank Transfer peuvent être lus depuis Sage Accounting, mais pas écrits :

- Virements bancaires entre un compte en devise de base et un compte en devise étrangère.
- Virements bancaires où les deux comptes ont la même devise étrangère.

Les types suivants de Transfer ne sont pas pris en charge dans Sage Accounting (et ne peuvent donc pas être lus ou écrits) :

- Transferts entre deux comptes de devises étrangères différentes.
- Transferts entre un compte bancaire et un compte nominal.
