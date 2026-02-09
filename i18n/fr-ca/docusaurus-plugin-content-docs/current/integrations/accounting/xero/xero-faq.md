---
title: "Dépannage de Xero"
sidebar_label: Dépannage
description: "Questions fréquemment posées et conseils de dépannage pour notre intégration Xero"
createdAt: "2019-07-17T14:20:47.797Z"
updatedAt: "2023-01-16T18:05:01.158Z"
---

## Comportement des types de données

### Items

Lors de l'écriture d'Items dans Xero, le `type` des articles doit être soit `Inventory` soit `Unknown`. Lors de l'écriture d'articles `Inventory`, Codat recherche un compte Inventory préexistant depuis Xero. Ce compte est utilisé pour le suivi d'inventaire dans Xero lorsqu'un article est acheté ou vendu.

La validité de la propriété `taxRateRef.id` sur l'Item dépend de la valeur du `accountRef.id` associé sur l'article de facture ou l'article de compte. Certains taux de taxe ne peuvent être associés qu'à certains types de comptes ; par exemple, Actif, Passif, Revenu, Dépense ou Capitaux propres.

### Accounts

Lors de la lecture des soldes de compte depuis Xero, le solde et la devise utilisent toujours la devise de base de l'entreprise dans Codat. Cela s'applique même si les comptes nominaux sources sont dans une devise étrangère. C'est ainsi que les informations sont récupérées depuis l'API Xero.

## Interface utilisateur de votre application

Si vous fournissez à vos clients PME une application, nous recommandons de mettre en œuvre une page de configuration qui leur permet de se connecter à Xero et de gérer les paramètres d'intégration sans l'aide de vos équipes de support ou d'intégration.

Envisagez d'inclure les fonctionnalités suivantes :

- Assurez-vous que le nom de leur entreprise connectée affiché dans votre application correspond au nom dans le logiciel comptable.
- Incluez un bouton qui leur permet de déconnecter l'application de l'intégration.
- Si le client déconnecte l'application, alertez-le et offrez une opportunité de se reconnecter.
- Lors du retrait de clients de votre produit, assurez-vous de vous déconnecter de leur logiciel comptable et de ne plus accéder à leurs données.
- Informez les utilisateurs de toute erreur via des journaux d'erreurs, des messages ou des alertes.

Vous pouvez également consulter [les propres conseils de Xero](https://developer.xero.com/documentation/guides/how-to-guides/integration-best-practices/) et les meilleures pratiques.

## FAQ

### Qu'est-ce que le Programme de partenariat d'application Xero ? Comment puis-je le rejoindre ?

Si vous souhaitez avoir plus de 25 connexions Xero, vous devrez rejoindre le Programme de partenariat d'application Xero.

Suivez notre guide [ici](/integrations/accounting/xero/xero-app-partner-program).

### Comment puis-je configurer un flux bancaire vers un compte Xero ?

Pour des instructions sur la configuration d'un flux bancaire vers un compte dans Xero, consultez la documentation [Flux bancaires Xero](/integrations/bank-feeds/xero-bank-feeds/).

### Comment écrire des Direct incomes et Direct costs négatifs dans Xero ?

L'API Xero ne permet pas la création de Direct costs (_transactions de dépense d'argent_) ou de Direct incomes (_transactions de réception d'argent_) avec des valeurs négatives.

Pour prendre en charge l'écriture de valeurs négatives dans Xero pour ces types de données, notre intégration utilise une logique personnalisée.

| Lorsque vous écrivez...                 | Codat crée...                                            |
| --------------------------------------- | -------------------------------------------------------- |
| Un Direct income négatif dans Xero      | Une _transaction de dépense d'argent_ positive dans Xero |
| Un Direct cost négatif dans Xero        | Une _transaction de réception d'argent_ positive dans Xero |

:::caution Les objets sont inversés

Lors de l'écriture de Direct incomes et Direct costs négatifs dans Xero, sachez que le type (Direct income ou Direct cost) et le signe des objets métier créés sont tous deux inversés.

:::

Vous écrivez des Direct incomes et Direct costs négatifs dans Xero sous forme d'un tableau de `lineItems` dans une transaction de compte, de la même manière que pour les autres intégrations comptables. Les tableaux peuvent contenir un mélange de lignes positives et négatives.

```json title="Exemple : corps de demande pour écrire un Direct cost négatif dans Xero"
{
    ...
    "contactRef": {
        "id": "699f0091-b127-4796-9f15-41a2f42abeb2",
        "dataType": "suppliers"
    },
    "issueDate": "2023-02-28",
    "currency": "GBP",
    "lineItems": [
        {
            "description": "negative direct cost, no tax",
            "unitAmount": 35,
            "quantity": -1,  // négatif
            "subTotal": -35,  // négatif
            "taxAmount": 0,
            "totalAmount": -35,  // négatif
            "accountRef": {
                "id": "02c0e212-9afb-4983-9c67-120656ff8d03"
            }
        }
    ],
    "paymentAllocations": [
        {
            "payment": {
                "accountRef": {
                    "id": "bd9e85e0-0478-433d-ae9f-0b3c4f04bfe4"
                },
                "currency": "GBP"
            },
            "allocation": {
                "totalAmount": -35
            }
        }
    ],
    "taxAmount": 0,
    "totalAmount": -35
}

```

Si l'écriture réussit, le tableau `changes` dans la réponse de l'opération d'écriture affichera les types de données inversés qui ont été créés.

### Lecture de Direct incomes et Direct costs négatifs depuis Xero

Il est possible de créer des _transactions de dépense d'argent_ et des _transactions de réception d'argent_ négatives dans l'interface utilisateur Xero. Les objets créés de cette manière sont toujours lus dans Codat comme des Direct incomes négatifs et des Direct costs négatifs, respectivement (c'est-à-dire qu'ils ne sont pas inversés).

### Comment les contacts Xero sont-ils représentés dans l'API Codat ?

Dans Xero, les contacts ne deviennent un client ou un fournisseur qu'une fois qu'une transaction AP ou AR leur est appliquée, par exemple une facture ou un compte. Jusqu'à ce moment, ils restent simplement un contact et non un client ou un fournisseur dans Xero.

Pour répondre à ce comportement dans la norme Codat, les contacts apparaissent à la fois comme Customers et Suppliers s'ils sont un contact dans Xero. Cela vous permet de toujours trouver l'ID d'un contact pour créer soit un compte, soit une facture (car tout contact peut être utilisé dans un contexte AP ou AR).

### Comment les limites de taux Xero peuvent-elles affecter mon intégration ?

Les demandes à l'API Xero sont soumises aux limites de taux API décrites dans la page <a href="https://developer.xero.com/documentation/guides/oauth2/limits">Limites de l'API OAuth 2.0</a> dans la documentation développeur Xero.

Si une limite de taux est dépassée, votre intégration est bloquée de faire d'autres demandes à l'API jusqu'à ce que les conditions de la limite de taux soient remplies. Un statut `Pending` est affiché dans la réponse du point de terminaison d'écriture lorsqu'une limite de taux est appliquée.

Si la **Limite quotidienne** est dépassée, vous ne pouvez pas synchroniser de données avec Xero pendant jusqu'à 24 heures selon le moment où la limite a été dépassée.

Pour voir quelle limite de taux est dépassée, veuillez contacter le support Codat.

### Pourquoi tous mes articles de Xero ont-ils leur statut comme _Unknown_ ?

Tous les [Items](/accounting-api#/schemas/Item) de Xero auront leur `itemStatus` mappé comme `Unknown` dans Codat car un statut d'article n'est pas exposé via l'API de Xero. Si c'est une fonctionnalité que vous aimeriez voir disponible, veuillez envisager de voter pour <a href="https://developer.xero.com/documentation/api/items/" target="_blank">cette demande de fonctionnalité sur UserVoice de Xero</a>.

### Puis-je écrire des remises dans Xero au niveau de la facture ?

Oui. Vous pouvez entrer des montants de ligne négatifs dans le champ `lineItems.unitAmount` lors de l'écriture de factures dans Xero. C'est une alternative à l'utilisation des champs `discountAmount` et `discountPercentage`.

### Pourquoi est-ce que j'obtiens une erreur lors de l'écriture de catégories de suivi dans Xero ?

Notre modèle de données comptables permet la lecture et l'écriture des _options de suivi_ Xero plutôt que des _catégories de suivi_ parentes. Vous pouvez avoir jusqu'à deux catégories de suivi actives et jusqu'à 100 options de suivi pour chaque catégorie de suivi. Pour plus d'informations sur ces objets, consultez [Configurer les catégories de suivi](https://central.xero.com/s/article/Set-up-tracking-categories) dans la documentation Xero.

Vous ne pouvez écrire une catégorie de suivi dans Xero que si elle a une valeur non nulle pour `parentId`.

Vous ne pouvez pas écrire de catégories de suivi qui, lorsqu'elles ont été lues, ont la propriété `"hasChildren": true`. Une erreur de validation est retournée.

### Pourquoi ne vois-je que 5 ans de transactions bancaires pour mes connexions Xero ?

Pour des raisons de performance, la plage de dates par défaut pour la lecture des transactions bancaires depuis Xero est les cinq dernières années.

Si vous devez augmenter ou diminuer cette plage de dates, modifiez la valeur de la propriété `syncFromUTC` pour le type de données `bankTransactions` dans vos paramètres de synchronisation supplémentaires (via une demande à `POST /companies/{companyId}/syncSettings`).

Vous pouvez définir `syncFromUTC` pour toutes les entreprises ou pour des entreprises individuelles. Pour plus d'informations, consultez [Paramètres de synchronisation avancés](/knowledge-base/advanced-sync-settings) ou soumettez un ticket avec notre équipe de support via notre [formulaire de demande de support](https://codat.zendesk.com/hc/en-gb/requests/new).

### Pourquoi est-ce que je vois une valeur de référence différente lorsque je lis des transactions bancaires dans Xero que j'avais précédemment écrites ?

Il existe une limitation dans les ensembles de données retournés depuis Xero lors de la lecture de transactions bancaires vers Codat. Les valeurs **Particulars**, **Reference** et **Code**, qui sont visibles dans les colonnes de l'interface utilisateur Xero, sont retournées ensemble dans le champ `description`, concaténées et séparées par des espaces.

Le **Payee** dans Xero est lu dans Codat comme le `counterparty` de la transaction bancaire.

Par exemple, la **ligne de relevé** ci-dessous résultera en une ligne de relevé bancaire avec un `counterparty` de `Payee 3` et une `description` avec la valeur : `Description 3 Reference 3 3`.

<img src="/img/old/d1325a1-xero-bank-statement-46713.png" />

### Puis-je écrire des paiements par lots dans Xero ?

Oui. Pour écrire un paiement par lots dans Xero, vous écrivez un [Bill payment](/accounting-api#/operations/post-bill-payment) avec plusieurs lignes. L'écriture d'un paiement par lots dans Xero créera les objets métier suivants :

- Un paiement de facture séparé pour chaque ligne.
- Une transaction de compte qui lie les paiements de facture ensemble.

Dans l'opération d'écriture retournée :

- La propriété `changes` répertorie les objets qui ont été créés dans Xero pour représenter le paiement par lots.
- La propriété `data` n'est pas remplie car il n'y a pas un seul objet qui peut être utilisé pour représenter le paiement par lots dans Xero.

Par exemple :

```json
{
  "changes": [
    {
      "type": "Created",
      "recordRef": {
        "id": "1f0dc0ac-f512-45b5-90d3-ba3956b6a5b4",
        "dataType": "billPayments"
      }
    },
    {
      "type": "Created",
      "recordRef": {
        "id": "1fd01ad4-ef3b-43fd-adf9-084f31c324cf",
        "dataType": "billPayments"
      }
    },
    {
      "type": "Created",
      "recordRef": {
        "id": "b4be5708-aeb0-453a-90c2-4151f0e59778",
        "dataType": "accountTransactions"
      }
    }
  ],
  "dataType": "billPayments",
  "companyId": "12e34cc7-cae8-452e-ba9f-04650f756b3e",
  "pushOperationKey": "b728ea77-1a67-422f-b65f-98155b5cbb33",
  "dataConnectionKey": "4b301fcd-c79e-4591-926d-ef69ea3ead7d",
  "requestedOnUtc": "2022-09-16T16:12:15.2748051Z",
  "completedOnUtc": "2022-09-16T16:12:19.0866399Z",
  "status": "Success",
  "statusCode": 200
}
```

### Pour certains comptes et factures, pourquoi la somme des lignes ne correspond-elle pas exactement au montant total ?

Dans Xero, il est possible pour un utilisateur final de remplacer le total d'une facture AR/AP à 0,10 décimales près du total des lignes. L'ajustement est attribué à un compte d'arrondi, mais laissé de côté comme ligne sur le compte lui-même.
Codat ne génère pas d'erreur dans ces cas, mais enregistre plutôt un avertissement. Ces avertissements sont visibles via les [charges utiles de webhook read.completed](https://docs.codat.io/using-the-api/webhooks/event-types), ou le [point de terminaison Get Validation Results](/platform-api#/operations/get-read-validation-results)
