---
title: "Dépannage et référence de l'intégration MYOB"
description: "Questions fréquemment posées, éléments à connaître et conseils de dépannage pour notre intégration MYOB"
sidebar_label: Dépannage
---

## Comportement des types de données

### Revenus directs

Les revenus directs sont mappés depuis <a className="external" href="https://developer.myob.com/api/myob-business-api/v2/banking/receive_money/" target="_blank">les transactions Receive money</a> dans MYOB.

Lors de la lecture de revenus directs depuis MYOB, le champ `sourceModifiedDate` n'est pas disponible.

De plus, `trackingCategoryRefs` n'est pas disponible dans les données lues depuis MYOB Essentials.

Le modèle de données de Codat ne prend pas en charge les montants unitaires négatifs dans les éléments de ligne des revenus directs. Si des montants de ligne négatifs sont lus depuis MYOB, le `lineItems.unitAmount` est enregistré comme positif et la `quantity` est définie sur `-1`.

### Coûts directs

Les coûts directs sont mappés depuis <a className="external" href="https://developer.myob.com/api/myob-business-api/v2/banking/spend_money/" target="_blank">les transactions Spend money</a> dans MYOB.

Lors de la lecture de coûts directs depuis MYOB, le champ `sourceModifiedDate` n'est pas disponible.

De plus, `trackingCategoryRefs` n'est pas disponible dans les données lues depuis MYOB Essentials.

Le modèle de données de Codat ne prend pas en charge les montants unitaires négatifs dans les éléments de ligne des coûts directs. Si des montants de ligne négatifs sont lus depuis MYOB, le `lineItems.unitAmount` est enregistré comme positif et la `quantity` est définie sur `-1`.

## Factures

Codat ne prend actuellement pas en charge la mise à jour des factures basées sur des articles.

## Comportement de l'intégration

### Intégration synchrone

Notre intégration MYOB est une intégration synchrone. Cependant, pour plus de simplicité et de cohérence avec le reste des intégrations de Codat, vous devez la traiter comme asynchrone. En savoir plus sur ce que cela signifie lors de la [création, mise à jour ou suppression de données](/using-the-api/push).

### Plusieurs devises

MYOB Essentials ne prend pas en charge plusieurs devises et enregistre toutes les transactions en devise locale (AUD ou NZD).

MYOB AccountRight prend en charge plusieurs devises, mais fonctionne toujours avec une devise de base de AUD ou NZD.

### Horodatages de date d'émission

MYOB ne fournit pas d'informations horaires lorsque le champ `issueDate` est lu par Codat. Ainsi, la valeur du champ de date est toujours `yyyy-mm-ddT00:00:00`.

### Performance

MYOB recommande que les fichiers d'entreprise dans leur système soient maintenus en dessous de 2 Go. Si une entreprise a une grande quantité de données, certains délais d'attente sont à prévoir lors de la consommation de leur service. Si Codat rencontre une erreur de délai d'attente lors de la récupération de données depuis MYOB, nous réessayerons l'opération plusieurs fois. Cela peut entraîner que certains ensembles de données prennent plus de temps que prévu à compléter ou des erreurs de récupération.

Pour en savoir plus, consultez l'article [504 Gateway Time out errors](https://apisupport.myob.com/hc/en-us/articles/6366818637583-504-Gateway-Time-out-errors) dans la base de connaissances de support MYOB.

## FAQ

### Où les données de l'entreprise doivent-elles être stockées?

Elles doivent être stockées en ligne. Bien que MYOB AccountRight Live donne l'option de stocker un fichier de données d'entreprise localement, cela le rendra inaccessible pour l'intégration de Codat.

**Consultez <a href="https://www.myob.com/au/support/myob-business/product-account/working-online/put-your-company-file-online" target="_blank">Comment mettre votre entreprise en ligne selon MYOB</a> pour savoir comment les entreprises peuvent facilement déplacer leur fichier d'entreprise vers le cloud s'il est actuellement stocké sur leur machine locale.**

### Comment vérifier si les données de l'entreprise sont stockées en ligne?

Lorsqu'un fichier de données d'entreprise est correctement stocké en ligne (pour permettre la liaison avec l'intégration Codat), le fichier doit être visible lors de la sélection de 'Online' dans le menu 'Open' dans MYOB AccountRight.

<img src="/fr-ca/img/old/9c4e75a-AR_Live_Cloud_docs.PNG" />

### L'intégration prend-elle en charge plusieurs fichiers de données d'entreprise pour la même connexion liée?

L'intégration ne prend actuellement pas en charge cela. Cela sera implémenté à l'avenir.

### Comment créer un client ou un fournisseur sans adresse?

Vous pouvez vouloir créer ou mettre à jour un contact (un client ou un fournisseur) dans MYOB sans ajouter d'adresse pour eux. Comme un contact est censé être soit un contact de facturation soit d'expédition, vous pouvez modifier le corps de votre demande pour ajouter ou modifier un contact sans adresse comme suit :

```json
{
  "id": "customerId",
  "customerName": "customerName",
  "contactName": "contactName", /// doit correspondre à contacts.name
  "emailAddress": "contact@contactEmail.com", /// doit correspondre à contacts.email
  "phone": "", /// doit correspondre à contacts.phone "addresses": [],
  "contacts": [
    {
      "name": "contactName", /// ceci doit correspondre au contactName
      "email": "contact@contactEmail.com", /// ceci doit correspondre à l'emailAddress
      "phone": [], /// doit correspondre à phone
      "address": {
        "type": "Billing" /// ceci doit être inclus comme Billing
      }
    }
  ],
  "taxNumber": "taxNumber",
  "status": "Active",
  "modifiedDate": "2021-04-16T10:13:55.665Z",
  "sourceModifiedDate": "2021-04-16T10:13:55.665Z"
}
```
