---
title: "Optimiser les appels API"
description: "Apprenez à utiliser nos API efficacement et à vous assurer de ne pas atteindre nos limites de débit"
---

:::note Limites de débit

Assurez-vous de bien connaître nos [limites de débit](/using-the-api/rate-limits) avant d'optimiser vos appels API vers Codat.

:::

Effectuer le moins d'appels possible vers Codat vous permet de réduire vos coûts et les temps de calcul de votre système, et diminue le trafic Internet entre vous et Codat. Cela vous permet également de traiter moins de données et d'y accéder plus rapidement, offrant un temps d'attente réduit et une expérience améliorée pour vos utilisateurs.

Utilisez nos systèmes de [requêtes](/using-the-api/querying), de [tri](/using-the-api/ordering-results) et de [notifications](/using-the-api/webhooks/overview) et optimisez la façon dont vous accédez à Codat et récupérez les données avec les méthodes ci-dessous.

## Interroger par la date de l'enregistrement

Vous pouvez interroger les données en utilisant la `modifiedDate`. C'est la date à laquelle les enregistrements ont été mis à jour dans la base de données de Codat. Cela vous donne uniquement les données nouvelles ou mises à jour depuis votre dernier appel API.

Vous pouvez également ordonner les résultats par `modifiedDate`. Cela vous permet de parcourir les données pertinentes du plus récent au plus ancien et fonctionne effectivement comme un index.

:::info Dates de modification

En plus de `modifiedDate`, Codat stocke également `sourceModifiedDate`, qui indique la date à laquelle un enregistrement a été modifié dans la plateforme source. Toutes les plateformes ne prennent pas en charge `sourceModifiedDate`. Consultez [Utiliser les dates de modification](/using-the-api/modified-dates) pour plus d'informations.

:::

Si vous stockez également la dernière date d'interrogation par entreprise et par type de données, vous pouvez appeler notre API le nombre minimum de fois pour ne retourner que les données nouvelles ou modifiées.

Lorsqu'un utilisateur se lie pour la première fois, il peut être nécessaire de lire toutes les données, pour tout le temps. Assurez-vous que c'est vraiment nécessaire et, le cas échéant, n'effectuez cette lecture qu'une seule fois. Par la suite, interrogez et accédez uniquement aux données depuis la dernière opération de lecture.

#### Pagination

Nous recommandons également d'utiliser une taille de page de 100 pour retourner les résultats plus rapidement. Cela est particulièrement pertinent lorsqu'un utilisateur attend le chargement d'une interface. La taille de page maximale est de 5000 résultats, ce qui signifie moins d'appels API, mais des réponses beaucoup plus lentes.

:::tip Interroger par la date de l'enregistrement : exemple

Vous pouvez interroger notre endpoint [Lister les comptes](/accounting-api#/operations/list-accounts) avec `modifiedDate` comme suit :

```http
https://api.codat.io/companies/{companyId}/data/accounts?page=1&pageSize=100&query=modifiedDate>2022-08-23&orderby=-modifiedDate
```

Cela retourne tous les comptes pour le `companyId` donné qui ont été ajoutés ou mis à jour dans Codat depuis minuit UTC le 23 août. Les résultats les plus récents sont affichés en premier et paginés avec une taille de 100.

:::

## Optimiser par cas d'utilisation

Dans le cadre de votre implémentation, vérifiez quels [types de données sont pertinents pour votre cas d'utilisation](/usecases/overview) et concentrez-vous sur la lecture de ces types de données uniquement. Vous pouvez également utiliser des paramètres de requête pour filtrer davantage le nombre de résultats par cas d'utilisation lors des appels à notre API.

Ces approches vous permettent de minimiser le nombre d'appels API et le volume de données retournées. En conséquence, cela accélère votre système, retourne les données plus rapidement et améliore votre expérience utilisateur.

:::tip Interroger pour un cas d'utilisation : exemple

Vous pouvez interroger notre endpoint [Factures](/accounting-api#/operations/list-invoices) pour un cas d'utilisation de facturation comme suit :

```http
https://api.codat.io/companies/{companyId}/data/invoices?page=1&pageSize=100&query=customerRef.companyName=NewCo
```

Cela retourne toutes les factures d'une entreprise émises par un client spécifique. Au lieu de `customerRef.companyName`, vous pouvez utiliser `customerRef.id` pour filtrer par son identifiant.

:::

## Tirer parti des webhooks

Envisagez de [configurer un consommateur de webhook](/using-the-api/webhooks/create-consumer) pour écouter un événement [DatasetDataChanged](/using-the-api/webhooks/event-types). Cela enverra un événement par entreprise lorsque de nouvelles données seront disponibles pour chaque type de données.

Cela est envoyé sous la forme d'une requête `POST` vers une URL de webhook que vous avez spécifiée. Une fois que vous recevez le message, vous pouvez interroger notre API pour cette entreprise et ce type de données spécifiques. Cela signifie que vous n'appellerez l'API que lorsque les données changent, au lieu d'interroger périodiquement nos données pour vérifier les changements et les mises à jour.
