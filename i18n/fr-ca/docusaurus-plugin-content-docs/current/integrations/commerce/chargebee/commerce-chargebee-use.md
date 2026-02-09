---
title: "Utiliser l'intégration Chargebee"
description: "Lorsqu'un utilisateur PME a lié son compte Chargebee, accédez à ses données d'abonnements et de facturation en effectuant des requêtes proxy vers l'API Chargebee"
sidebar_label: Use the integration
unlisted: true
---

L'intégration Chargebee n'expose pas encore de types de données standardisés ni ne fournit de visualisation de données ou de métriques (par exemple, dans Lending).

Au lieu de cela, lorsqu'un utilisateur PME a [lié son compte Chargebee](/integrations/commerce/chargebee/commerce-chargebee-setup#smb-customer-authenticate-and-connect-your-commerce-data), vous pouvez accéder à ses données d'abonnements et de facturation via l'endpoint `proxy` dans l'API Codat. Seules les requêtes GET sont actuellement prises en charge.

Par défaut, Codat empêche les utilisateurs d'effectuer des requêtes `proxy`. Pour activer le proxy pour Chargebee, contactez votre gestionnaire de compte ou soumettez un ticket à notre équipe d'assistance via notre [formulaire de demande d'assistance](https://codat.zendesk.com/hc/en-gb/requests/new).

## Envoyer une requête proxy

Pour effectuer un proxy vers l'API Chargebee, envoyez une requête GET à l'endpoint `proxy` :

```
GET /companies/{companyId}/connections/{connectionId}/data/proxy?endpoint=CHARGEBEE_ENDPOINT
```

Remplacez `CHARGEBEE_ENDPOINT` par l'objet API Chargebee souhaité, qui doit être encodé en URL.

Par exemple, pour afficher les clients d'une entreprise dans Chargebee, envoyez la requête suivante :

```
GET /companies/{companyId}/connections/{connectionId}/data/proxy?endpoint=v2/customers
```

Pour afficher une liste de tous les endpoints disponibles, consultez la <a className="external" href="https://apidocs.eu.chargebee.com/docs/api" target="_blank">documentation de l'API Chargebee</a>.
