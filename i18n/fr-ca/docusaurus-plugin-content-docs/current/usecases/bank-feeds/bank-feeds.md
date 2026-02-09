---
title: "Transactions de flux bancaires dans QuickBooks Online"
description: "Comment créer des flux bancaires QuickBooks alimentés par Codat"
---

Éléments à ajouter :
Qui vous êtes
Vos clients
Problème à résoudre

## Aperçu

### Flux bancaires Codat

Codat permet la publication de données de transactions bancaires vers les logiciels de comptabilité.

### Portée

#### Plateformes prises en charge

Codat prend en charge les flux bancaires vers :

- QuickBooks Online (États-Unis et Canada)
- Xero

Dans ce guide, nous montrerons comment créer une solution pour QuickBooks Online

Cette spécification couvre QuickBooks Online, comme discuté jusqu'à ce point.

Toute intégration vers d'autres plateformes au-delà de QBO nécessitera un certain travail pour activer le parcours utilisateur d'authentification. L'opération d'écriture de données de transaction bancaire sera largement réutilisable.

Une intégration vers Xero nécessitera une spécification supplémentaire.

## Solution

### Parcours utilisateur d'authentification

diagramme

1. L'utilisateur est connecté à votre plateforme
2. L'utilisateur sélectionne l'option de connecter les transactions bancaires à QBO.
   - Il s'agira d'un bouton que le client implémente dans votre expérience bancaire.
3. L'utilisateur est dirigé vers l'écran de génération d'identifiants.
   - Lorsque l'utilisateur clique sur le bouton à l'étape 2, appelez l'API Codat : - POST Company (ou POST Connection si l'entreprise existe déjà dans
     Codat)
   - Le corps de la requête spécifiera les flux bancaires QBO comme connexion à créer
   - Le corps de la réponse inclut un linkUrl ; dirigez l'utilisateur vers ce linkUrl.
   - Le linkUrl amènera l'utilisateur à la page Configurer les flux bancaires QuickBooks, hébergée par Codat.
   - L'utilisateur suit les étapes de la page Configurer les flux bancaires QuickBooks pour générer des identifiants uniques. Ces identifiants seront utilisés à l'étape 6.
4. L'utilisateur se connecte à QBO et sélectionne l'option Lier le compte.
5. L'utilisateur recherche dans la liste des comptes QBO votre banque (le nom fourni dans la requête
   à Intuit).

diagramme

6. Après avoir sélectionné l'option de votre banque à l'étape 5, l'utilisateur sera invité à saisir les identifiants. L'utilisateur saisit les identifiants qui lui ont été fournis à l'étape 3.
7. L'utilisateur sélectionne le compte bancaire à lier et le compte auquel mapper le compte bancaire. Cette page est hébergée par QBO. L'utilisateur peut choisir parmi n'importe quel compte du plan comptable qui est un compte bancaire ou une carte de crédit et qui n'a pas de flux bancaire existant lié.
8. Le lien du flux bancaire est complet.
9. Le statut de connexion Codat passe à Lié.
10. Le client peut configurer un [endpoint webhook](/using-the-api/webhooks/overview) pour écouter les événements qui notifient lorsque le statut de connexion passe à Lié, indiquant une connexion réussie.

### Parcours utilisateur de déautorisation

Codat offre la possibilité de déconnecter un flux bancaire de QuickBooks Online.

Nous recommandons que l'option de déconnecter un flux bancaire existant soit offerte au client de votre banque.

La section d'implémentation couvre l'appel API pour déconnecter une connexion.

Diagramme

## Implémentation

### Activation des flux bancaires QuickBooks Online via Codat

Les flux bancaires QuickBooks Online doivent être activés par Intuit avant que la solution puisse être mise en production. Le processus est le suivant :

1. le client demande à Codat d'activer les flux bancaires : fournit le nom qui apparaîtra dans le
   parcours de connexion QBO
2. Codat fait une requête à Intuit au nom du client pour activer les flux bancaires
3. Intuit approuve le client pour apparaître dans l'écran de sélection de banque QBO.

Remarque : _Cette étape d'Intuit est sujette à approbation ; il est peu probable qu'Intuit rejette un client construisant via Codat._

### Parcours utilisateur d'authentification

#### Initiation

Le parcours utilisateur est initié en dirigeant l'utilisateur vers un linkUrl fourni par Codat qui correspond à une connexion de flux bancaire QuickBooks Codat.

Il y a deux scénarios qui doivent être traités pour cela : créer une nouvelle entreprise et une connexion de flux bancaire QBO correspondante, et créer une connexion de flux bancaire QBO pour une entreprise existante.

#### Créer une nouvelle entreprise

Créer une nouvelle entreprise est approprié lorsque l'utilisateur n'a pas d'autre cas d'utilisation existant avec Codat.

Le nom doit être spécifié par le client, avec le nom d'entreprise souhaité à créer.

Le platformKey est `hcws`, représentant les flux bancaires QBO.

Exemple de corps de requête :

```
{
"name": "nom de l'entreprise spécifié ici",
"platformType": "hcws"
}",
      "language": "text"
    }
  ]
}
```

Le corps de la réponse inclura un linkUrl - inclus ci-dessous.

### Créer une nouvelle connexion sur une entreprise existante

Créer une nouvelle connexion pour une entreprise existante est approprié lorsque l'utilisateur a un autre cas d'utilisation existant avec Codat, et a en conséquence un companyId correspondant. Ce companyId existant doit être fourni dans la requête pour créer une nouvelle connexion.

Le platformKey est `hcws`, représentant les flux bancaires QBO.

Exemple de corps de requête :

```

{
"platformKey": "hcws"
}",
"language": "text"
}
]
}
```

Le corps de la réponse inclura un linkUrl.

À partir des flux de nouvelle entreprise ou d'entreprise existante, l'utilisateur doit être dirigé vers ce linkUrl fourni dans le corps de la réponse.

Une fois que l'utilisateur est dirigé vers le linkUrl, cette page hébergée par Codat générera des identifiants pour que l'utilisateur les saisisse dans QBO.

Capture d'écran

L'utilisateur suivra les étapes sur la page hébergée par Codat dans QBO, et le parcours
d'autorisation est terminé.

### Interface utilisateur

La langue et l'écran d'authentification fournis entre Codat et QBO sont fixés à un format (fourni par Intuit).
Déautorisation Les flux bancaires peuvent être déautorisés en utilisant l'endpoint Supprimer la connexion. Cela supprimera la connexion au flux bancaire, lorsqu'un companyId et un connectionId sont fournis :

`DELETE /companies/{companyId}/connections/{connectionId}`

### Publication de transactions bancaires

Une fois le parcours d'autorisation terminé, publiez les transactions bancaires sur QBO
via l'API Codat.

POST Bank Transaction

Exemple de corps de requête :

```
{
"accountId": "string",
"transactions": [
  {
    "date": "2022-08-30T00:13:46.488Z",
    "description": "string",
    "reconciled": true,
    "amount": 0,
    "balance": 0,
    "transactionType": "Unknown",
  }
],
}",
      "language": "text"
    }
  ]
}


### Meilleures pratiques

Codat recommande d'écrire les transactions par lots de 1000 ou moins pour des raisons de performance.

QuickBooks Online lira une fois par jour à partir du backlog de transactions, ou lorsque le client appuie manuellement sur le bouton "mettre à jour" dans l'interface utilisateur QBO.
```
