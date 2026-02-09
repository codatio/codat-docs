---
title: "Utiliser l'intégration Maxio"
description: "Lorsqu'un utilisateur PME a lié son compte Maxio, accédez à ses données d'abonnements et de facturation en effectuant des requêtes proxy vers l'API Maxio"
sidebar_label: Use the integration
unlisted: true
---

L'intégration Maxio n'expose pas encore de types de données standardisés ni ne fournit de visualisation de données ou de métriques (par exemple, dans Lending).

Au lieu de cela, lorsqu'un client PME (une entreprise) a [lié son compte Maxio](/integrations/commerce/chargify/commerce-chargify-setup), vous pouvez accéder à ses données d'abonnements et de facturation via l'endpoint `proxy` dans l'API Codat. Seules les requêtes GET sont actuellement prises en charge.

Par défaut, Codat empêche les utilisateurs d'effectuer des requêtes `proxy`. Pour activer le proxy pour Maxio, contactez votre gestionnaire de compte ou soumettez un ticket à notre équipe d'assistance via le [formulaire de demande d'assistance](https://codat.zendesk.com/hc/en-gb/requests/new).

## Envoyer une requête proxy

Pour effectuer un proxy vers l'API Maxio, envoyez une requête GET à l'endpoint `proxy` :

```
GET /companies/{companyId}/connections/{connectionId}/data/proxy?endpoint=MAXIO_ENDPOINT
```

Remplacez `MAXIO_ENDPOINT` par l'objet API Maxio souhaité, qui doit être encodé en URL. Par exemple, utilisez `customers.json` pour interroger la liste des clients d'une entreprise dans Maxio.

Pour afficher une liste de tous les endpoints disponibles, consultez la <a className="external" href="https://developers.chargify.com/docs/api-docs/YXBpOjE0MTA4MjYx-chargify-api" target="_blank">documentation de l'API Maxio</a>.

Remarque : La documentation de Maxio est toujours au nom de leur ancienne marque, Chargify.
