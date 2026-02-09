---
title: "FAQ sur l'intégrité des données"
description: "Questions fréquemment posées sur l'intégrité des données"
sidebar_label: "FAQ"
image: "/img/banners/social/lending.png"
draft: true
---

### Dates de chevauchement

Au Royaume-Uni, l'Open Banking permet de lire un maximum de 24 mois de données. Cependant, cela pourrait être encore moins avec seulement 18 ou 12 mois disponibles.

Cela signifie que les entreprises peuvent avoir des données pour différentes plages de dates provenant de différentes sources, ce qui pourrait fausser les résultats. Par exemple, si le logiciel comptable a des données synchronisées depuis 2018 et que la source bancaire n'a que des données synchronisées depuis 2019, le pourcentage de correspondance sera faussé par toutes les transactions 'non correspondantes' de 2018.

Il est recommandé d'utiliser les résultats de correspondance uniquement pour la plage de dates où les données des deux sources se chevauchent. Ce détail vous est fourni dans la partie _Dates de chevauchement_ de la réponse de statut.

### Reproduction du pourcentage de correspondance global

Vous pouvez vouloir reproduire le pourcentage de correspondance global pour un type de données spécifique, représenté comme le résumé d'intégrité des données dans notre portail et notre API.

Considérez un exemple simple où vous avez seulement trois transactions :

- Transaction A - Comptable, 3 £, aucune correspondance
- Transaction B - Comptable, 1 £, correspond à la transaction C
- Transaction C - Bancaire, 1 £, correspond à la transaction B

Si vous appelez l'endpoint [Obtenir le résumé d'intégrité des données](/lending-api#/operations/get-data-integrity-summaries) avec _type de données = accountTransactions_, vous obtiendrez un pourcentage de correspondance de 25% :
`pourcentage de correspondance = B/(A+B) = 1 £ / (3 £ +1 £)`

Si cependant vous appelez l'endpoint Résumés avec _type de données = banking-transactions_, vous obtiendrez un pourcentage de correspondance de 100% :
`pourcentage de correspondance = C/C =  1 £ / 1 £`

En revanche, sur la page Intégrité des données du portail, le pourcentage de correspondance affiché est le pourcentage de correspondance par montant à travers les transactions comptables et bancaires. Dans notre exemple, le pourcentage de correspondance affiché sur le portail serait de 40% :
`pourcentage de correspondance = (B+C)/(A+B+C) = (1 £ + 1 £)/(3 £ +1 £ + 1 £)`

<img src="/img/old/cf7bc11-DataIntegrity1.png" />

Vous pouvez reproduire ce pourcentage de correspondance vous-même en récupérant les résumés pour `accountTransactions` et `banking-transactions` dans des appels API séparés et en combinant les résultats côté client, par exemple en prenant une moyenne pondérée des pourcentages de correspondance.

Par défaut, le pourcentage sur le portail est également restreint à la plage de dates de chevauchement. Vous pouvez reproduire cela vous-même en obtenant les dates de chevauchement min et max à partir de l'endpoint [Obtenir le statut d'intégrité des données](/lending-api#/operations/get-data-integrity-status), puis en limitant vos appels à l'endpoint [Obtenir le résumé d'intégrité des données](/lending-api#/operations/get-data-integrity-summaries) à ces dates en utilisant le paramètre de requête.

Par exemple, si la réponse _Obtenir le statut d'intégrité des données_ contient ce qui suit :

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

Alors vous appelleriez chacun des endpoints _Obtenir le résumé d'intégrité des données_ avec (url-escaped) `query=date>=2021-09-03T12:00:00.000Z&&date<=2021-09-17T23:59:59.999`.
