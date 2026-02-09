---
title: "API mutual TLS"
description: "Découvrez les prérequis pour configurer l'API mTLS d'entreprise"
hide_table_of_contents: true
---

:::tip Activation de l'API mTLS

Si vous souhaitez utiliser mTLS lors de la communication avec notre API, parlez-en à votre gestionnaire de compte.
:::

Le Mutual TLS (mTLS) est disponible pour nos clients d'entreprise en tant que méthode d'authentification mutuelle lors de l'appel de notre API. Le mTLS garantit que les parties à chaque extrémité d'une connexion réseau sont bien celles qu'elles prétendent être. Pour confirmer cela, les clés cryptographiques privées des parties sont vérifiées. Les informations contenues dans leurs certificats TLS respectifs fournissent une vérification supplémentaire.

:::info Ressources supplémentaires
Pour plus d'informations sur le mTLS et ses concepts fondamentaux, consultez :

- [Qu'est-ce que l'authentification mutuelle ?](https://www.cloudflare.com/en-gb/learning/access-management/what-is-mutual-authentication/)
- [Qu'est-ce qu'une clé cryptographique ?](https://www.cloudflare.com/en-gb/learning/ssl/what-is-a-cryptographic-key/)
- [Qu'est-ce qu'un certificat SSL ?](https://www.cloudflare.com/en-gb/learning/ssl/what-is-an-ssl-certificate/)
  :::

Codat peut fournir à nos clients d'entreprise des certificats clients pour activer la communication mTLS avec un ou plusieurs clients. Une fois que cela a été émis et activé sur un client particulier, toutes les requêtes API au nom du client configuré doivent inclure le certificat public et un en-tête de requête HTTP `x-codat-client: GUID`.
