---
title: "Téléversement de fichiers de données bancaires"
sidebar_label: Téléversement de données
displayed_sidebar: lending
description: "Téléversez vos données bancaires vers Codat et profitez de nos fonctionnalités d'enrichissement de relevés bancaires et de nos rapports"
---

## Aperçu

Si vous avez déjà un fournisseur de données bancaires, vous pouvez toujours bénéficier de notre fonctionnalité de catégorisation de relevés bancaires en téléversant manuellement ces données bancaires vers Codat.

Vous pouvez le faire de deux façons :

1. Téléverser des fichiers de données bancaires et télécharger le relevé bancaire catégorisé résultant [dans notre Portail](/lending/functions/data-upload#upload-in-portal).
2. Écrire les enregistrements de données bancaires et obtenir le relevé bancaire catégorisé résultant [via notre API](/lending/functions/data-upload#upload-via-api).

:::caution Prérequis

Pour utiliser la fonctionnalité de téléversement de données, vous devez d'abord créer une [entreprise](../../terms/company) Codat. Nous vous guidons à travers ce processus dans [Commencer avec Lending](/lending/get-started#use-lending-api).

:::

## Téléverser dans le Portail

Dans le [Portail Codat](https://app.codat.io), accédez à **Companies**, choisissez l'entreprise pour laquelle vous souhaitez téléverser les données bancaires, puis sélectionnez **Lending > Upload banking data**. Ici, vous pouvez manuellement téléverser des fichiers CSV contenant les détails des comptes bancaires et les détails des transactions bancaires de votre fournisseur bancaire.

Téléchargez les modèles CSV avec des exemples de données depuis cette page et vérifiez les valeurs autorisées pour chaque type de données dans notre [référence API](/lending-api#/) pour vous assurer que vos données sont dans le bon format. Nous avons résumé les exigences de données dans le tableau ci-dessous.

| Type de données    | Modèle                                                                                   | Champs requis                                                                                                                                             | Valeurs autorisées                                                                  |
| ------------ | ------------------------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- |
| Comptes     | [Modèle CSV](https://static.codat.io/public/templates/lending/accounts-template.csv)     | `id`, `name`, `type`, `currentBalance`, `currency`, `accountIdentifierType`, `institutionId`, `institutionName`<br/><br/> Un identifiant de compte : `iban`, `bic`, ou `number` | Voir le schéma [Banking: Bank account](/lending-api#/schemas/BankingAccount)    |
| Transactions | [Modèle CSV](https://static.codat.io/public/templates/lending/transactions-template.csv) | `id`, `accountId`, `currency`, `description`, `amount`, `postedDate`, `code`                                                                                                | Voir le schéma [Banking: Transaction](/lending-api#/schemas/BankingTransaction) |

Vous pouvez vérifier la progression du téléversement en accédant à **Data history > Read history** de l'entreprise. Une fois le téléversement terminé, téléchargez le rapport [Enhanced cash flow](/lending/features/excel-download-overview#feature-components) pour visualiser le relevé bancaire catégorisé résultant dans **Lending > Reports**.

Pour ajouter, modifier ou supprimer des enregistrements, téléversez un fichier CSV contenant l'ensemble de données mis à jour que vous souhaitez enregistrer dans Codat, et il remplacera l'ensemble de données existant. Par exemple, si vous effectuez un téléversement de relevé mensuel, chaque nouveau fichier CSV doit contenir les données de tous les mois précédemment téléversés ainsi que le nouveau mois.

Pour supprimer l'ensemble de données dans son intégralité, [supprimez d'abord la connexion de données existante](/core-concepts/connections#delete-a-data-connection), puis téléversez le fichier correct. Cela créera automatiquement une nouvelle connexion de données.

## Téléverser via l'API

Pour téléverser les données bancaires de votre client à l'aide de notre API, suivez ces étapes :

1. **Créer une connexion de données**

Tout d'abord, utilisez l'endpoint [Create a data connection](/lending-api#/operations/create-connection) pour établir une nouvelle connexion de données pour l'entreprise. Utilisez `zpqy` comme clé de plateforme dans le corps de la demande.

2. **Définir la configuration de téléversement**

Avant de créer les données, vous devez définir leur type de source et leur compte. Cela nous indique dans quel format attendre les données. Utilisez l'endpoint [Set upload configuration](/lending-api#/operations/set-bank-statement-upload-configuration) pour créer la configuration.

Pour téléverser des enregistrements qui s'alignent avec nos schémas [Banking: Bank account](/lending-api#/schemas/BankingAccount) et [Banking: Transaction](/lending-api#/schemas/BankingTransaction), définissez `codat` comme votre source.

:::caution Modification de la configuration

Chaque connexion de données ne peut avoir qu'une seule configuration. Pour visualiser la configuration existante, utilisez l'endpoint [Get upload configuration](/lending-api#/operations/get-bank-statement-upload-configuration).

Pour la modifier, supprimez la connexion, définissez la configuration pour le nouveau `connectionId`, et retéléversez les données.

:::

3. **Démarrer la session de téléversement**

Utilisez l'endpoint [Start upload session](/lending-api#/operations/start-bank-statement-upload-session) pour initier une session de téléversement de relevé bancaire pour une entreprise donnée. Une session est un processus unique qui permet de téléverser des comptes et des transactions vers Codat.

Vous ne pouvez avoir qu'une seule session active par type de données à la fois. De plus, la session expirera si aucune donnée n'est téléversée après 90 minutes. Vous pouvez terminer ou annuler une session à l'aide de l'endpoint [End upload session](/lending-api#/operations/end-bank-statement-upload-session).

4. **Téléverser les données**

Pendant une session active, utilisez l'endpoint [Upload data](/lending-api#/operations/upload-bank-statement-data) pour téléverser un objet correspondant au schéma [Banking: Bank account](/lending-api#/schemas/BankingAccount) ou un tableau d'objets correspondant au schéma [Banking: Transaction](/lending-api#/schemas/BankingTransaction).

:::caution Mise à jour des enregistrements

Si vous devez ajouter, modifier ou supprimer les enregistrements de transactions bancaires, téléversez à nouveau l'ensemble de données complet et incluez les enregistrements modifiés. Pour supprimer les enregistrements, supprimez d'abord la connexion de données, créez-en une nouvelle et téléversez les données pour le nouveau `connectionId`.

:::

5. **Terminer la session de téléversement**

Utilisez l'endpoint [End upload session](/lending-api#/operations/end-bank-statement-upload-session) pour indiquer que vous souhaitez finaliser le processus de téléversement de relevé bancaire. Incluez `Cancel` dans le corps de la demande pour annuler le traitement de l'ensemble de données ou `Process` pour déclencher l'ingestion et l'enrichissement des données.

Vous pouvez vérifier la progression en appelant l'endpoint [Get read operation](/lending-api#/operations/get-pull-operation). Une fois terminé, lisez le relevé bancaire catégorisé résultant à l'aide de l'endpoint [Get categorized bank statement](/lending-api#/operations/get-categorized-bank-statement).

:::tip Récapitulatif

Nous avons couvert les options pour téléverser des données bancaires de votre fournisseur existant à l'aide de notre Portail et de notre API. Ensuite, vous voudrez peut-être en savoir plus sur nos [relevés bancaires catégorisés](/lending/features/bank-statements-overview).

:::

---

## À lire ensuite

- [Relevés bancaires catégorisés](/lending/features/bank-statements-overview)
