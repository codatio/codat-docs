---
title: "Dans le Portal"
description: "Affiche les pourcentages d'intégrité des données et décrit les enregistrements qui ont été appariés et ceux qui ne l'ont pas été"
image: "/img/banners/social/lending.png"
draft: true
---

## Intégrité des données dans le Portal Codat

Pour visualiser la fonctionnalité d'intégrité des données dans le Portal, une entreprise doit :

- Être liée à une source de données comptables et bancaires. Vous pouvez le faire soit dans le [Portal](https://app.codat.io/) Codat, soit en utilisant l'API Codat.
- Avoir les comptes bancaires et les transactions bancaires configurés pour la [synchronisation](/core-concepts/data-type-settings).
- Sélectionner **View data > Data integrity** à côté de l'entreprise liée pour afficher les résultats de référencement croisé. Toutes les transactions appariées sont listées sous l'onglet **Records found**. Les transactions pour lesquelles aucune correspondance n'a été trouvée sont listées sous **Records not found**.

![Une image de la page d'intégrité des données montrant le pourcentage d'enregistrements trouvés et un tableau des enregistrements trouvés](/img/old/3e145f8-DataIntegrity5.png)

Le point d'exclamation rouge indique qu'un compte comptable correspondant n'a pas pu être trouvé pour le compte bancaire. Cliquez sur l'indicateur pour révéler plus d'informations, comme montré dans l'image suivante. Ce n'est pas une erreur &mdash; c'est une indication qu'un compte bancaire existe mais n'a pas été apparié avec le logiciel de comptabilité.

![Une image de la fenêtre contextuelle pour les comptes connectés](/img/old/a52c29c-DataIntegrity6.png)

**Abréviations des types de transactions utilisées dans l'interface utilisateur**

| Abréviations                                                                                                 |                                                                                                                                                      |                                                                                                                                        |
| ------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| UNK - Unknown, <br/> CR - Credit <br/> DR - Debit, <br/> INT - Interest <br/> DIV - Dividend, <br/> FEE - Fee | SCHG - Service Charge, <br/> DEP - Deposit, <br/> ATM - Automated Teller Machine, <br/> POS - Point of Sale, <br/> TFR - Transfer, <br/> CHK - Check | PMT - Payment, <br/> CSH - Cash, <br/> DDEP - Direct Deposit, <br/> DDR - Direct Debit, <br/> RPMT - Repeat Payment, <br/> OTH - Other |
