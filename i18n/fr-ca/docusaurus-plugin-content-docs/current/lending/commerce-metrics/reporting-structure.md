---
title: "Structure de rapport des métriques"
sidebar_label: "Structure de rapport"
description: "Examinez la structure de données dans laquelle les rapports de métriques de commerce sont organisés"
image: "/fr-ca/img/banners/social/lending.png"
draft: true
---

Les rapports générés par nos endpoints _Métriques de commerce_ suivent une structure cohérente. Ils contiennent quatre sections d'information :

1. Informations de définition du rapport, telles que :
   a. Les informations sur le rapport (par exemple, remboursements).
   b. Le nom d'affichage du rapport (par exemple, Remboursements).
2. Informations sur la dimension contenue dans les rapports, telles que :
   a. Le type de dimension (par exemple, `datespan`, string).
   b. Le nom d'affichage de la dimension (par exemple, Période, métriques de remboursement).
   c. Les détails de chaque élément dans la dimension (par exemple, displayName: "Jan 2022", start:"...", end:"...", id:"...", name:"...").
3. Informations sur les mesures contenues dans le rapport, telles que :
   a. Le nom d'affichage de la mesure (par exemple, Compte, valeur).
   b. Le type de la mesure (par exemple, devise, pourcentage).
   c. L'unité de la mesure (par exemple, %, GBP).
4. Les données du rapport.
   Lorsque le paramètre _includeDisplayName_ est défini sur _true_, il affiche le _dimensionDisplayName_ et _itemDisplayName_ pour rendre les données lisibles par l'humain. Le paramètre par défaut pour _includeDisplayName_ est _false_.

Les rapports peuvent être rendus comme suit (l'ordre est implicite plutôt qu'explicite) :

![Un tableau montrant un exemple de la façon dont un rapport peut être rendu](/img/old/1fa20ca-Report1.png)

## Modèle de données

### Dimensions

```json
    "dimensions": [{
      "index": 0,
      "displayName": "Month",
      "type": "datespan",
      "items": [{
          "index": 0,
          "displayName": "December 2021",
          "start": "2021-12-01",
          "end": "2022-12-31"
      }, {
          "index": 1,
          "displayName": "January 2022",
          "start": "2022-01-01",
          "end": "2022-01-31"
      }]
  }, {
      "index": 1,
      "displayName": "Customer",
      "type": "recordRef",
      "items": [{
          "index": 0,
          "displayName": "Thomas Craig",
          "recordRef": {
              "id": "Customer_0047",
              "dataType": "Customers"
          }
      }, {
          "index": 1,
          "displayName": "Kate Paul",
          "recordRef": {
              "id": "Customer_0104",
              "dataType": "Customers"
          }
      }, {
          "index": 2,
          "displayName": "All other customers",
          "recordRef": null
      }]
  }, {
      "index": 2,
      "displayName": "Product",
      "type": "recordRef",
      "items": [{
          "index": 0,
          "displayName": "Comic book",
          "recordRef": {
              "id": "Items_1473",
              "dataType": "Items"
          }
      }, {
          "index": 1,
          "displayName": "National flag",
          "recordRef": {
              "id": "Items_1123",
              "dataType": "Items"
          }
      }, {
          "index": 2,
          "displayName": "Gift basket",
          "recordRef": {
              "id": "Items_1321",
              "dataType": "Items"
          }
      }, {
          "index": 3,
          "displayName": "All other products",
          "recordRef": null
      }]
  }],
  "measures": [{
      "id": "totalBought",
      "displayName": "Total value bought",
      "type": "currency",
      "units": "USD"
  }, {
      "id": "changePercent",
      "displayName": "Percentage change vs. previous month",
      "type": "percentage",
      "units": "%"
  }],
```

### Données du rapport

```json
    "data": [{
          "dimension": 0,
          "item": 0,
          "measures": {
              "totalBought": 3903.99
          },
          "components": [{
              "dimension": 1,
              "item": 0,
              "measures": {
                  "totalBought": 152.99
              },
              "components": [{
                  "dimension": 2,
                  "item": 1,
                  "measures": {
                      "totalBought": 12.99
                  }
              }, {
                  "dimension": 2,
                  "item": 2,
                  "measures": {
                      "totalBought": 140
                  }
              }]
          }, {
              "dimension": 1,
              "item": 1,
              "measures": {
                  "totalBought": 86
              },
              "components": [{
                  "dimension": 2,
                  "item": 0,
                  "measures": {
                      "totalBought": 42
                  }
              }, {
                  "dimension": 2,
                  "item": 2,
                  "measures": {
                      "totalBought": 20
                  }
              }, {
                  "dimension": 2,
                  "item": 3,
                  "measures": {
                      "totalBought": 14
                  }
              }]
          }, {
              "dimension": 1,
              "item": 2,
              "measures": {
                  "totalBought": 3665
              },
              "components": [{
                  "dimension": 2,
                  "item": 2,
                  "measures": {
                      "totalBought": 1450
                  }
              }, {
                  "dimension": 2,
                  "item": 3,
                  "measures": {
                      "totalBought": 2215
                  }
              }]
          }]
      }, {
          "dimension": 0,
          "item": 1,
          "measures": {
              "totalBought": 2781.99,
              "changePercent": -29
          },
          "components": [{
              "dimension": 1,
              "item": 0,
              "measures": {
                  "totalBought": 19.49,
                  "changePercent": -97
              },
              "components": [{
                  "dimension": 2,
                  "item": 1,
                  "measures": {
                      "totalBought": 19.49,
                      "changePercent": 50
                  }
              }, {
                  "dimension": 2,
                  "item": 2,
                  "measures": {
                      "totalBought": 0,
                      "changePercent": -100
                  }
              }]
          }, {
              "dimension": 1,
              "item": 1,
              "measures": {
                  "totalBought": 137.50,
                  "changePercent": 60
              },
              "components": [{
                  "dimension": 2,
                  "item": 0,
                  "measures": {
                      "totalBought": 120,
                      "changePercent": 186
                  }
              }, {
                  "dimension": 2,
                  "item": 2,
                  "measures": {
                      "totalBought": 0,
                      "changePercent": -100
                  }
              }, {
                  "dimension": 2,
                  "item": 3,
                  "measures": {
                      "totalBought": 17.5,
                      "changePercent": 25
                  }
              }]
          }, {
              "dimension": 1,
              "item": 2,
              "measures": {
                  "totalBought": 2625,
                  "changePercent": -28
              },
              "components": [{
                  "dimension": 2,
                  "item": 2,
                  "measures": {
                      "totalBought": 205,
                      "changePercent": -86
                  }
              }, {
                  "dimension": 2,
                  "item": 3,
                  "measures": {
                      "totalBought": 2420,
                      "changePercent": 9
                  }
              }]
          }]
      }
  ]
```
