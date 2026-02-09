---
title: "Mise en œuvre d'une interface utilisateur de mappage de comptes"
description: "Conseils et recommandations sur la gestion des comptes incohérents au sein de votre base d'utilisateurs"
sidebar_label: "Interface de mappage"
---

Les logiciels de comptabilité que vos clients utilisent offrent normalement un ensemble par défaut de comptes (également connu sous le nom de plan comptable), prédéfini pour correspondre aux meilleures pratiques comptables. Vos clients ont ensuite la possibilité de renommer et renuméroter ces comptes, ou d'en créer de nouveaux, pour correspondre à leurs besoins commerciaux.

Cela entraîne des écarts dans la liste des comptes au sein de votre base de clients. Pour gérer cela et utiliser des comptes spécifiques à vos clients, fournissez à vos clients une **interface utilisateur de mappage de comptes**.

Une page de mappage de comptes est particulièrement utile si vous :

- Créez ou mettez à jour des données avec notre API Accounting.
- Créez une solution pour des cas d'utilisation de paiement de factures, de paie, de gestion de dépenses ou de paiements.
- Mettez en œuvre la réécriture de prêt dans votre intégration Xero.

## Conseils de mise en œuvre

Tout d'abord, obtenez le support front-end pour créer la page de mappage de comptes et l'inclure dans l'intégration de vos clients. Lorsque la synchronisation initiale des données comptables est terminée, présentez le mappage suggéré à vos clients et demandez-leur de le réviser et de le modifier le cas échéant ou d'effectuer le mappage eux-mêmes.

Voici un exemple simple d'une interface utilisateur de mappage de comptes mise en œuvre à l'aide de listes déroulantes.

![SampleMappingPage](/img/other-guides/codatmappingpageexample.png)

### Utilisation de l'API pour le mappage

Construisez votre processus de mappage de comptes pour utiliser l'API Codat comme suit :

1. Activez le type de données Plan comptable et configurez-le pour récupérer lors de la première liaison. Naviguez vers **Paramètres > Intégrations > Types de données** pour gérer les [paramètres de type de données](https://app.codat.io/settings/data-types) dans le portail ou [utilisez l'API](https://docs.codat.io/platform-api#/operations/update-profile-syncSettings) à la place.

   Vous pouvez également en savoir plus sur les [paramètres de type de données](/core-concepts/data-type-settings).

2. [Configurez un consommateur de webhook](/using-the-api/webhooks/create-consumer) pour écouter l'événement [DatasetDataChanged](/using-the-api/webhooks/event-types) qui indique les changements dans les données sous-jacentes pour le type de données `chartOfAccounts`. Vous recevrez une notification lorsque la synchronisation des données se terminera avec succès.

3. Une fois notifié par le webhook, appelez notre endpoint [List accounts](/accounting-api#/operations/list-accounts) et utilisez la réponse pour afficher `account.name` et `account.id` dans une liste déroulante permettant à votre client de choisir le mappage correct. Vous pouvez également interroger la réponse pour simplifier l'expérience de mappage pour votre client :
   - Affichez uniquement les comptes actifs du type de compte pertinent nécessaire pour votre page de mappage, tels que `type=income` et `status=active`.

   ```
   /companies/{{companyId}}/data/accounts?query=status%3dactive&&type%3dincome
   ```

   - Définissez des valeurs par défaut pour les clients. Par exemple, si vous mappez les revenus de ventes, vérifiez si un compte "Ventes" existe et présentez-le comme suggestion.

   ```
   /companies/{{companyId}}/data/accounts?query=name~sales
   ```

   - Si vous créez ou mettez à jour des factures ou des paiements dans Xero, permettez à votre client de sélectionner uniquement un compte bancaire dont la case "Activer les paiements vers le compte" est cochée.

   ```
   /companies/{{companyId}}/data/accounts?query=isBankAccount%3dtrue
   ```

:::tip Comptes manquants

Si un nouveau compte est requis pour un mappage correct, vous pouvez offrir à votre client la possibilité d'en créer un. Vous aurez besoin d'une interface utilisateur qui prend en charge des étapes supplémentaires, telles que le remplissage des champs requis pour la création de compte par le logiciel de comptabilité spécifique.

Lisez nos conseils sur [l'écriture de données](/using-the-api/push) avec Codat.
:::

### Validation du mappage

Une fois le mappage initial terminé, vous devez valider périodiquement les mappages de comptes car les clients peuvent continuer à modifier leur liste de comptes après avoir configuré votre intégration.

Nous recommandons de valider le mappage avant d'effectuer toute opération de création ou de mise à jour. Utilisez le consommateur de webhook [DatasetDataChanged](/using-the-api/webhooks/event-types) que vous avez précédemment configuré et qui vous informe des changements dans le type de données `chartOfAccounts`.

Si de nouveaux comptes sont présents qui n'ont pas encore été mappés, notifiez votre client et guidez-le vers la page de mappage.
