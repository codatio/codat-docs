---
title: "Exigences de Sage 50 Accounts"
slug: "sage-50-requirements"
description: "Exigences et configurations logicielles, matérielles, environnementales et réseau"
sidebar_label: Exigences
---

## Versions prises en charge

Codat prend en charge les variations suivantes de Sage 50 :

- Sage 50 Accounts et Sage 50 Accounts Cloud (Sage 50c)
- Versions 26, 27, 28, 29, 30, 31 et 32
- Plans Standard et Professional

Ceci est conforme à la <a className="external" href="https://gb-kb.sage.com/portal/app/portlets/results/viewsolution.jsp?solutionid=200427112228593" target="_blank">politique de cycle de vie logiciel de Sage</a>. Si vous rencontrez des problèmes avec les versions prises en charge, veuillez utiliser notre [formulaire de demande de support](https://codat.zendesk.com/hc/en-gb/requests/new) pour soumettre un ticket. Si vous souhaitez enregistrer votre intérêt pour une version non prise en charge, veuillez contacter votre gestionnaire de compte.

## Versions non prises en charge

Le connecteur Codat Sage 50 Accounts n'est pas compatible avec toutes les versions non-UKI (RU et Irlande) de Sage 50.

Les versions UKI suivantes ne sont également pas prises en charge :

- Construction for Sage 50
- Sage 50 Accounts HR
- Sage Instant Accounts (anciennement Sage 50 Accounts Instant Accounts)
- Abila Fundraising 50 (anciennement Sage 50 Accounts Fundraising)

## Systèmes d'exploitation pris en charge

Le connecteur Codat Sage 50 Accounts est pris en charge pour Sage 50 Accounts (RU et Irlande) fonctionnant sur Windows 10 ou Windows 11 avec les derniers Service Packs installés.

Les utilisateurs ont réussi à exécuter le connecteur sur des versions antérieures de Windows ; cependant, nous ne prenons pas officiellement en charge cela en raison du retrait du support de Microsoft pour ces systèmes d'exploitation.

Le connecteur ne fonctionnera pas sur Mac OS.

:::note Environnements pris en charge

Le connecteur Sage 50 Accounts est conçu pour fonctionner uniquement dans des environnements à locataire unique, où un utilisateur Windows se connecte au même ordinateur qu'il utilise pour accéder à Sage 50 Accounts (RU et Irlande). Il n'est pas conçu ou pris en charge pour une utilisation dans des environnements hébergés ; par exemple, si votre client utilise Online50 pour accéder à son logiciel de comptes Sage 50 Accounts (RU et Irlande).
:::

## Exigences matérielles

Vous devrez vous assurer que la machine hôte répond aux [spécifications recommandées par Sage](https://gb-kb.sage.com/portal/app/portlets/results/viewsolution.jsp?solutionid=200427112205533&hypermediatext=null#) pour exécuter Sage 50 Accounts Desktop.

Si vous avez un grand nombre d'entreprises ou des fichiers d'entreprise particulièrement volumineux, vous devriez porter une attention particulière à la consommation de CPU, de mémoire, de disque et de ressources réseau sur la machine hôte et vous assurer qu'il y a une marge suffisante.

## Règles de pare-feu

Le connecteur Sage 50 Accounts communique via le port 443 vers les URL hébergées sur `https://sage50.codat.io`

Si vous rencontrez des problèmes avec la transmission de données du connecteur, ajoutez les URL suivantes à votre liste d'autorisation de pare-feu :

`https://sage50.codat.io/*`

`https://connectors.codat.io`
