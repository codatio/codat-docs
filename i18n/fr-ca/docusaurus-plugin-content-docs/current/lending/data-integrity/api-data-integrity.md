---
title: "Intégrité des données"
description: "Document de référence pour les endpoints d'intégrité des données"
image: "/img/banners/social/lending.png"
draft: true
---

L'API Intégrité des données se compose des endpoints suivants :

- Endpoints de [statut](#status) : (un par type de données) expose les informations nécessaires pour interroger utilement les résultats.
- Endpoints de [résumés](#summaries) : (un par type de données) expose les résultats récapitulatifs, interrogeables de manière granulaire.
- Endpoints de [détails](#details) : (un par type de données) expose les informations enregistrement par enregistrement, interrogeables en utilisant les mêmes paramètres que l'endpoint de résumé.

## Processus de correspondance

La correspondance se produit chaque fois qu'une synchronisation se produit où des données à travers tous les types de données existent. Il n'y a pas de mécanisme pour déclencher manuellement une correspondance car tout est fait automatiquement.

## Sources de données et types de données

L'intégrité des données nécessite que les sources de données comptables et bancaires soient liées avec les types de données suivants activés :

- _banking-accounts_ pour la source de données bancaires.
- _banking-transactions_ pour la source de données bancaires.
- _bankAccounts_ pour la source de données comptables.
- _accountTransactions_ pour la source de données comptables.

:::info Avis de dépréciation

La correspondance fonctionne également avec _bankAccounts_ (source de données bancaires) et _bankTransactions_ (source de données bancaires). Notez que ces types de données seront dépréciés à l'avenir.

Il est recommandé d'utiliser les types de données _banking-accounts_ et _banking-transactions_ pour tirer le meilleur parti de l'intégrité des données.
:::

## Statut

Cet endpoint expose le statut des résultats de correspondance de l'entreprise entre le type de données fourni dans l'URL et d'autres types de données avec lesquels l'intégrité des données prend en charge la correspondance. Il vous aidera à comprendre si les données de correspondance sont disponibles et, si c'est le cas, comment les interroger utilement.

La réponse vous indique si les résultats de correspondance sont disponibles, et, s'ils le sont :

- Quand les résultats ont été générés et leur statut.
- Les ID de connexion, les montants et les dates impliqués, pour prendre en charge l'interrogation utile.

:::info Dates de chevauchement

Au Royaume-Uni, l'Open Banking permet de lire un maximum de 24 mois de données mais pourrait être moins avec seulement 18 ou 12 mois disponibles.

Cela signifie que les entreprises peuvent avoir des données pour différentes plages de dates provenant de différentes sources, ce qui pourrait fausser les résultats. Par exemple, si le logiciel comptable a des données synchronisées depuis 2018 et que la source bancaire n'a que des données synchronisées depuis 2019, le pourcentage de correspondance sera faussé par toutes les transactions 'non correspondantes' de 2018.

Il est recommandé d'utiliser les résultats de correspondance uniquement pour la plage de dates où les données des deux sources se chevauchent ; cela vous est fourni dans la partie _Dates de chevauchement_ de la réponse de statut.
:::

L'endpoint est disponible dans notre <a href="/assess-api#/operations/get-dataIntegrity-status-for-dataType">référence API</a>.

`GET /data/companies/{companyId}/lending/dataTypes/{dataType}/dataIntegrity/status`

### Paramètres

| Paramètre     | Type     | Description                                                                                                                                                                                                                                                                                                                                                               | Requis |
| ------------- | -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------- |
| **companyId** | _string_ | L'ID de l'entreprise pour laquelle vous voulez des résultats de correspondance. <br/> Soumettre comme paramètre de route.                                                                                                                                                                                                                                                                        | Requis |
| **datatype**  | _string_ | Le type de données pour lequel vous voulez des résultats de correspondance. <br/> **Source comptable:** [bankAccounts](/accounting-api#/schemas/BankAccount), [accountTransactions](/accounting-api#/schemas/AccountTransaction). <br/> **Source bancaire:** [banking-accounts](/banking-api#/schemas/Account), [banking-transactions](/banking-api#/schemas/Transaction). <br/> Soumettre comme paramètre de route. | Requis |

### Modèle de données

| **Champ**         | Type                                | Description                                                                                                                                                                                                                                                              |
| ----------------- | ----------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **type**          | _string_                            | Le type de données contre lequel le type de données dans l'URL a été mis en correspondance. Par exemple, si vous avez mis en correspondance _accountTransactions_ et _banking-transactions_, et que vous appelez cet endpoint avec _accountTransactions_ dans l'URL, cette propriété serait _banking-transactions_. |
| **statusInfo**    | Voir [Info de statut](#status-info)     |                                                                                                                                                                                                                                                                          |
| **connectionIds** | Voir [ID de connexion](#connection-id) |                                                                                                                                                                                                                                                                          |
| **amounts**       | Voir [Montants](#amounts)             | Retourné uniquement pour les transactions. Pour les comptes, rien n'est retourné.                                                                                                                                                                                                                 |
| **dates**         | Voir [Dates](#dates)                 | Retourné uniquement pour les transactions. Pour les comptes, rien n'est retourné.                                                                                                                                                                                                                 |

#### Info de statut

| **Champ**         | Type                                                  | Description                                                                                                                                                                                                                                |
| ----------------- | ----------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **lastMatched**   | _string_, Voir [Date](/platform-api#/schemas/DateTime) | La date à laquelle l'algorithme de correspondance a été exécuté pour la dernière fois sur les transactions bancaires de l'entreprise.                                                                                                                                          |
| **currentStatus** | _string_                                              | Un des suivants : <br/> `Unknown`, <br/> `DoesNotExist` - n'ont jamais tenté une exécution de correspondance pour cette entreprise car n'ont pas les ensembles de données requis, <br/> `Error` - quelque chose s'est mal passé lors de la correspondance, <br/> `Processing`, <br/> `Complete` |
| **statusMessage** | _string_                                              | Explication détaillée supportant la valeur de statut.                                                                                                                                                                          |

#### ID de connexion

| **Champ**  | Type    | Description                                                                  |
| ---------- | ------- | ---------------------------------------------------------------------------- |
| **source** | _array_ | Un tableau de _strings_. Les ID de connexion pour le type spécifié dans l'url. |
| **target** | _array_ | Un tableau de _strings_. Les ID de connexion pour le type spécifié dans l'url. |

#### Montants

| **Champ** | Type     | Description                       |
| --------- | -------- | --------------------------------- |
| **min**   | _number_ | Valeur la plus basse de l'ensemble de transactions.  |
| **max**   | _number_ | Valeur la plus élevée de l'ensemble de transactions. |

#### Dates

| **Champ**              | Type                                                  | Description                                                                      |
| ---------------------- | ----------------------------------------------------- | -------------------------------------------------------------------------------- |
| **minDate**            | _string_, Voir [Date](/platform-api#/schemas/DateTime) | Date la plus ancienne de l'ensemble de transactions.                                                |
| **maxDate**            | _string_, Voir [Date](/platform-api#/schemas/DateTime) | Date la plus récente de l'ensemble de transactions.                                                  |
| **minOverlappingDate** | _string_, Voir [Date](/platform-api#/schemas/DateTime) | Date la plus ancienne où les transactions existent dans les plateformes comptables et bancaires. |
| **maxOverlappingDate** | _string_, Voir [Date](/platform-api#/schemas/DateTime) | Date la plus récente où les transactions existent dans les plateformes comptables et bancaires.      |

### Exemple de réponse

```
//appel avec dataType = 'accountTransactions'
{
  "metadata":[
      {
          "type":"banking-transactions",
          "statusInfo":{
              "lastMatched":"2021-09-17T12:09:33.441Z",
              "currentStatus":"Unknown|DoesNotExist|Error|Processing|Complete",
              "statusMessage":"string"
          },
          "connectionIds":{
              "source": ["guid","guid","guid"],
              "target": ["guid","guid","guid"]
          },
          "amounts":{
              "min":130.0,
              "max":2450.0,
          },
          "dates":{
              "minDate":"2021-09-17T12:09:33.441Z",
              "maxDate":"2021-12-16T12:12:53.441Z",
              //Les dates de chevauchement sont des dates où les deux 'côtés' de la correspondance ont des données
              "minOverlappingDate":"2021-09-30T12:09:13.441Z",
              "maxOverlappingDate":"2021-11-27T12:19:33.441Z"
          }
      }
  ]
}
//(sortie identiquement formatée si vous appelez avec dataType = banking-transactions sauf
//qu'elle sera indexée sur accountTransactions)

//appel avec dataType = 'banking-accounts'
{
  "metadata":[
    {
      "type":"bankAccounts",
      "status":{
          "lastMatched":"2021-09-17T12:09:33.441Z",
          "status":"Unknown|DoesNotExist|Error|Processing|Complete",
          "statusMessage":"string"
      },
      "connectionIds":{
          "source" : ["guid","guid","guid"],
          "target":["guid","guid","guid"]
      }
        //Les objets montant et date sont null car non pertinents pour les comptes bancaires
    }
  ]
}
//(sortie identiquement formatée si vous appelez avec dataType = bankAccounts sauf
//qu'elle sera indexée sur banking-accounts)
```

## Résumés

Cet endpoint expose un résumé des résultats de correspondance pour un type de données donné filtré par une chaîne de requête dans le langage de requête Codat. Seuls les résultats de résumé sont retournés, pas les transactions.

Donc, par exemple, si vous vouliez voir les résultats de correspondance récapitulatifs uniquement pour les transactions après le 1er décembre 2020, vous pourriez envoyer `query=date>2020-12-01`.

L'endpoint est disponible dans notre <a href="/assess-api#/operations/get-data-companies-companyId-assess-dataTypes-dataType-dataIntegrity-summaries">référence API</a>.

`GET /data/companies/{companyId}/lending/dataTypes/{dataType}/dataIntegrity/summaries`

### Paramètres

| **Paramètre** | Type     | Description                                                                                                                                                                             | Requis |
| ------------- | -------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------- |
| **companyId** | _string_ | L'ID de l'entreprise pour laquelle vous voulez des résultats de correspondance. Soumettre comme paramètre de route.                                                                                                            | Requis |
| **datatype**  | _string_ | Le type de données pour lequel vous voulez des résultats de correspondance.                                                                                                                                               | Requis |
| **Query**     | _string_ | Vous pouvez interroger n'importe quelle propriété dans la réponse, par exemple `query=date>2020-12-01`. <br/> Il peut également être laissé vide. Ceci suit le [langage de requête Codat](/using-the-api/querying) standard. |          |

### Modèle de données

Pour les transactions, la réponse contient des statistiques récapitulatives (comme le pourcentage de correspondance) par montant et par compte. Pour les comptes, les statistiques basées sur le montant ne sont pas significatives, par conséquent nous ne retournons que les statistiques basées sur le compte.

| **Champ**    | Type                        | Description                                                                                                                                                                                                                                                              |
| ------------ | --------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **type**     | _string_                    | Le type de données contre lequel le type de données dans l'URL a été mis en correspondance. Par exemple, si vous avez mis en correspondance _accountTransactions_ et _banking-transactions_, et que vous appelez cet endpoint avec _accountTransactions_ dans l'URL, cette propriété serait _banking-transactions_. |
| **byAmount** | Voir [Par montant](#by-amount) |                                                                                                                                                                                                                                                                          |
| **byCount**  | Voir [Par compte](#by-count)   |                                                                                                                                                                                                                                                                          |

#### Par montant

| **Champ**           | Type     | Description                                                                                                 |
| ------------------- | -------- | ----------------------------------------------------------------------------------------------------------- |
| **matchPercentage** | _number_ | Le pourcentage de la valeur absolue des transactions du type spécifié dans la route qui ont une correspondance. |
| **unmatched **      | _number_ | La somme de la valeur absolue des transactions du type spécifié dans la route qui n'ont pas de correspondance.  |
| **matched**         | _number_ | La somme de la valeur absolue des transactions du type spécifié dans la route qui ont une correspondance.        |
| **total**           | _number_ | Le total des non correspondantes et correspondantes.                                                                         |

#### Par compte

| **Champ**           | Type     | Description                                                                                                                                                                                 |
| ------------------- | -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **matchPercentage** | _number_ | Le pourcentage de la valeur absolue des transactions du type spécifié dans la route qui ont une correspondance. Le pourcentage d'enregistrements du type spécifié dans la route qui ont une correspondance. |
| **unmatched **      | _number_ | Le nombre d'enregistrements du type spécifié dans la route qui n'ont pas de correspondance.                                                                                                          |
| **matched**         | _number_ | Le nombre d'enregistrements du type spécifié dans la route qui ont une correspondance.                                                                                                             |
| **total**           | _number_ | Le total des non correspondants et correspondants.                                                                                                                                                         |

### Exemple de réponse

```
//Appel avec banking-transactions
{
"summaries":[
{
"type":"accountTransactions",
"byAmount":{
"matchPercentage": 68.3,
"unmatched":24871.5,
"matched": 53587.5,
"total":78459.0,
},
"byCount":{
"matchPercentage": 79.3,
"unmatched":253,
"matched": 970,
"total":1223
}
}
]
}
//(sortie identiquement formatée si vous appelez avec dataType = accountTransactions sauf
//qu'elle sera indexée sur banking-transactions)

//Appel avec banking-accounts
{
"summaries":[
{
"type":"bankAccounts",
//les propriétés liées au montant seront null car non pertinentes pour les comptes bancaires
"byCount":{
"matchPercentage": 71.4,
"unmatched":2,
"matched": 5,
"total":7
}
}
]
}
//(sortie identiquement formatée si vous appelez avec dataType = bankAccounts sauf
//qu'elle sera indexée sur banking-accounts)

```

### Reproduction du pourcentage de correspondance global du portail

Le pourcentage de correspondance que vous obtenez de notre endpoint _Résumés_ est pour le type de données que vous avez spécifié dans l'url.

Considérez un exemple simple où vous n'avez que trois transactions :

- Transaction A - Comptable, 3 £, aucune correspondance
- Transaction B - Comptable, 1 £, correspond à la transaction C
- Transaction C - Bancaire, 1 £, correspond à la transaction B

Si vous appelez l'endpoint _Résumés_ avec _type de données = accountTransactions_, vous obtiendrez un pourcentage de correspondance de 25% :
`pourcentage de correspondance = B/(A+B) = 1 £ / (3 £ +1 £)`

Si cependant vous appelez l'endpoint Résumés avec type de données = banking-transactions, vous obtiendrez un pourcentage de correspondance de 100% :
`pourcentage de correspondance = C/C =  1 £ / 1 £`

En revanche, sur la page Intégrité des données du portail, le pourcentage de correspondance affiché est le pourcentage de correspondance par montant à travers les transactions comptables et bancaires. Dans notre exemple, le pourcentage de correspondance affiché sur le portail serait de 40% :
`pourcentage de correspondance = (B+C)/(A+B+C) = (1 £ + 1 £)/(3 £ +1 £ + 1 £)`

<img src="/img/old/cf7bc11-DataIntegrity1.png" />

Vous pouvez reproduire ce pourcentage de correspondance vous-même en récupérant les résumés pour _accountTransactions_ et _banking-transactions_ dans des appels API séparés, et en combinant les résultats côté client, par exemple en prenant une moyenne pondérée des pourcentages de correspondance.

Notez que par défaut le pourcentage sur le portail est également restreint à la plage de dates de chevauchement ; vous pouvez reproduire cela vous-même en obtenant les dates de chevauchement min et max à partir de l'endpoint _Statut_, puis en limitant vos appels à l'endpoint _Résumés_ à ces dates en utilisant le paramètre de requête.

Par exemple, si la réponse Statut contient ceci :

```
"dates":{
..
"minOverlappingDate":"2021-09-03T12:00:00.000Z",
"maxOverlappingDate":"2021-09-17T23:59:59.999Z"
} ",
"language": "text"
}
]
}
```

Alors vous appelleriez chacun des endpoints _Résumés_ avec (url-escaped) `query=date>=2021-09-03T12:00:00.000Z&&date<=2021-09-17T23:59:59.999`.

## Détails

Cet endpoint expose les résultats de correspondance enregistrement par enregistrement pour un type de données donné, filtré en fonction d'une chaîne de requête de la même manière que les résultats de résumé. Les résultats sont [paginés](/using-the-api/paging) et prennent en charge [l'ordre](/using-the-api/ordering-results), en suivant les mêmes conventions que nos autres endpoints de données.

L'endpoint est disponible dans notre <a href="/assess-api#/operations/get-data-companies-companyId-assess-dataTypes-dataType-dataIntegrity-details">référence API</a>.

`GET /data/companies/{companyId}/lending/dataTypes/{dataType}/dataIntegrity/details`

### Paramètres

| **Paramètre** | Type     | Description                                                                                                                                                                                                                                                                                                                                                                                               |
| ------------- | -------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **companyId** | _string_ | L'ID de l'entreprise pour laquelle vous voulez des résultats de correspondance. <br/> Soumettre comme paramètre de route.                                                                                                                                                                                                                                                                                                        |
| **dataType**  | _string_ | Le type de données pour lequel vous voulez des résultats de correspondance. <br/> **Source comptable:** <br/> **[bankAccounts](/accounting-api#/schemas/BankAccount), <br/> [accountTransactions](/accounting-api#/schemas/AccountTransaction)**. <br/> **Source bancaire:** <br/> **[banking-accounts](/banking-api#/schemas/Account), <br/> [banking-transactions](/banking-api#/schemas/Transaction)**. <br/> Soumettre comme paramètre de route. |
| **Query**     | _string_ | Peut interroger n'importe quelle propriété dans la réponse. Ceci suit le [langage de requête Codat](/using-the-api/querying) standard.                                                                                                                                                                                                                                                                            |
| **page**      | _number_ | Soumettre comme paramètre de requête. Défaut à 1.                                                                                                                                                                                                                                                                                                                                                 |
| **pageSize**  | _number_ | Soumettre comme paramètre de requête. Défaut à 100.                                                                                                                                                                                                                                                                                                                                               |
| **orderBy**   | _string_ | Indiquez le nom de la propriété par laquelle vous souhaitez ordonner la réponse. <br/> Soumettre comme paramètre de requête.                                                                                                                                                                                                                                                                                |

### Modèle de données

#### Réponse pour les transactions

| **Élément **     | Type                                                                                                       | Description                                                                |
| ---------------- | ---------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| **type**         | _string_                                                                                                   | Le type de données de l'enregistrement.                                               |
| **connectionId** | _string_                                                                                                   | ID GUID représentant la connexion de la plateforme comptable ou bancaire. |
| **id**           | _string_                                                                                                   | ID GUID de la transaction. Ceci est unique à l'intégrité des données.              |
| **date**         | _date_, Voir [Date](/platform-api#/schemas/DateTime)                                                        | La date de la transaction.                                               |
| **description**  | _string_                                                                                                   | La description de la transaction.                                               |
| **amount**       | _number_                                                                                                   | La valeur de la transaction.                                                     |
| **currency**     | _string_                                                                                                   | La devise de la transaction.                                           |
| **matches**      | _array_, Voir [Tableau de correspondances de transactions](/lending/data-integrity/api-data-integrity#transactions-matches) | Référez-vous au tableau de correspondances ci-dessous.                                    |

#### Correspondances de transactions

Ceci décrit la ou les transactions dans lesquelles la transaction originale a été mise en correspondance avec sa transaction correspondante dans l'autre plateforme.

| **Élément **     | Type                                                | Description                                                                                                                                                                                                                                                                    |
| ---------------- | --------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **type**         | _string_                                            | Le type de données contre lequel le type de données dans l'URL a été mis en correspondance. <br/> Par exemple, si vous avez mis en correspondance _accountTransactions_ et _banking-transactions_, et que vous appelez cet endpoint avec _accountTransactions_ dans l'URL, cette propriété serait _banking-transactions_. |
| **connectionId** | _string_                                            | ID GUID représentant la connexion de la plateforme comptable ou bancaire.                                                                                                                                                                                                     |
| **id**           | _string_                                            | ID GUID de la transaction. Ceci est unique à l'intégrité des données.                                                                                                                                                                                                                  |
| **date**         | _date_, Voir [Date](/platform-api#/schemas/DateTime) | La date de la transaction.                                                                                                                                                                                                                                                   |
| **description**  | _string_                                            | La description de la transaction.                                                                                                                                                                                                                                                   |
| **amount**       | _number_                                            | La valeur de la transaction.                                                                                                                                                                                                                                                         |
| **currency**     | _string_                                            | La devise de la transaction.                                                                                                                                                                                                                                               |

#### Réponse pour les comptes

| **Élément **     | Type                                                                                                   | Description                                                                |
| ---------------- | ------------------------------------------------------------------------------------------------------ | -------------------------------------------------------------------------- |
| **type**         | _string_                                                                                               | Le type de données de l'enregistrement.                                               |
| **connectionId** | _string_                                                                                               | ID GUID représentant la connexion de la plateforme comptable ou bancaire. |
| **id **          | _string_                                                                                               | L'id du compte.                                                          |
| **accountName ** | _string_                                                                                               | Le nom du compte.                                                   |
| **institution ** | _string_                                                                                               | Le nom de l'institution financière.                                     |
| **matches**      | _array_, Voir [Tableau de correspondances de comptes](/lending/data-integrity/api-data-integrity#transactions-matches) | Référez-vous au tableau de correspondances ci-dessous.                                    |

#### Correspondances de comptes

| **Élément **     | Type     | Description                                                                                                                                                                                                                                                                    |
| ---------------- | -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **type**         | _string_ | Le type de données contre lequel le type de données dans l'URL a été mis en correspondance. <br/> Par exemple, si vous avez mis en correspondance _accountTransactions_ et _banking-transactions_, et que vous appelez cet endpoint avec _accountTransactions_ dans l'URL, cette propriété serait _banking-transactions_. |
| **connectionId** | _string_ | ID GUID représentant la connexion de la plateforme comptable ou bancaire.                                                                                                                                                                                                     |
| **id **          | _string_ | L'id du compte.                                                                                                                                                                                                                                                              |
| **accountName ** | _string_ | Le nom du compte.                                                                                                                                                                                                                                                       |
| **institution ** | _string_ | Le nom de l'institution financière.                                                                                                                                                                                                                                         |

### Exemple de réponse

````
//Appel avec datatype = accountTransactions
{
  "results": [
    {
      "type":"accountTransactions",
      "connectionId": "guid",
      //Le champ Id ici et sur les correspondances sera accountId_transactionId.
      //C'est parce que nous aimerions idéalement avoir un seul modèle cohérent pour
      //les types de données 'liés aux transactions', et par exemple les factures n'ont pas d'ID de compte.
      //Nous clarifierons cela dans la documentation.
      "id": "string",
      "date": "2021-09-15T09:00:10.898Z",
      "description": "Buying toast",
      "amount": 236.94,
      "matches":[
        {
          "type":"banking-transactions",
          "connectionId": "guid",
          "id": "string",
          "date": "2021-09-15T09:00:10.898Z",
          "description": "Purchasing toast",
          "amount": 236.94,
        },
        {
          "type":"banking-transactions",
          "connectionId": "guid",
          "id": "string",
          "date": "2021-09-15T09:00:10.898Z",
          "description": "Investing in grilled bread",
          "amount": 288.81,
        }
      ]
    }
  ],
  "pageNumber": 1,
  "pageSize": 50,
  "totalResults": 237
}
//(Appeler avec datatype = banking-transactions produira des résultats dans un format identique,
//sauf que la liste des correspondances aura toutes un champ 'type' de accountTransaction)

//Appel avec datatype = bankAccounts
{
  "results": [
    {
      "type": "bankAccounts",
      "connectionId": "guid",
      "id": "string",
      "accountName": "string",
      "institution": "string",
      "matches": [
        {
          "type": "banking-accounts",
          "connectionId": "guid",
          "id": "string",
          "accountName": "string",
          "institution": "string"
        }
      ]
    }
  ],
  "pageNumber": 1,
  "pageSize": 20,
  "totalResults": 23
}
//(Appeler avec datatype = banking-accounts produira des résultats dans un format identique,
//sauf que la liste des correspondances aura toutes un champ 'type' de bankAccounts)```
````
