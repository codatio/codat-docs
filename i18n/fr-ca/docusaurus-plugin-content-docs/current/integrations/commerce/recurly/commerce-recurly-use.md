---
title: "Utiliser l'intégration Recurly"
description: "Lorsqu'un utilisateur PME a lié son compte Recurly, accédez à ses données d'abonnements et de facturation en effectuant des requêtes proxy vers l'API Recurly"
sidebar_label: Utilisation
unlisted: true
---

L'intégration Recurly n'expose pas encore de types de données standardisés ni ne fournit de visualisation de données ou de métriques (par exemple, dans Lending).

Au lieu de cela, lorsqu'un client PME (une entreprise) a [lié son compte Recurly](/integrations/commerce/recurly/commerce-recurly-setup#smb-customer-authenticate-and-connect-your-commerce-data), vous pouvez accéder à ses données d'abonnements et de facturation via le endpoint `proxy` dans l'API Codat. Seules les requêtes GET sont actuellement prises en charge.

Par défaut, Codat désactive la possibilité pour les utilisateurs d'effectuer des requêtes `proxy`. Pour activer le proxy pour Recurly, contactez votre gestionnaire de compte ou créez un ticket auprès de notre équipe de support via le [formulaire de demande de support](https://codat.zendesk.com/hc/en-gb/requests/new).

## Envoyer une requête proxy

Pour effectuer un proxy vers l'API Recurly, envoyez une requête GET au endpoint `proxy` :

```
GET /companies/{companyId}/connections/{connectionId}/data/proxy?endpoint=RECURLY_ENDPOINT
```

Remplacez `RECURLY_ENDPOINT` par l'objet API Recurly souhaité, qui doit être encodé en URL.

Par exemple, pour interroger la liste des comptes d'une entreprise dans Recurly, envoyez la requête suivante :

```
GET /companies/{companyId}/connections/{connectionId}/data/proxy?endpoint=/accounts
```

Pour afficher une liste de tous les endpoints disponibles, consultez le <a className="external" href="https://developers.recurly.com/api/v2021-02-25/index.html" target="_blank">Recurly Developer Hub</a>.
