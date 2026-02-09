---
title: "PayPal"
sidebar_label: Overview
description: "En savoir plus sur notre intégration PayPal"
createdAt: "2021-03-25T13:08:19.226Z"
updatedAt: "2022-11-15T13:20:16.445Z"
unlisted: true
---

[PayPal](https://www.paypal.com/) est une plateforme internationale de traitement des paiements en ligne qui gère les paiements par carte de crédit et les frais au nom des petites entreprises.

Utilisez l'API Commerce de Codat avec PayPal pour vous connecter de manière sécurisée, récupérer et visualiser les transactions commerce de vos clients.

## Configurer l'intégration

Voir [Configurer l'intégration PayPal](/integrations/commerce/paypal/set-up-paypal-in-production) pour apprendre comment configurer et activer l'intégration.

:::caution Exigences du fournisseur sous-jacent

L'intégration PayPal de Codat est construite en utilisant l'API XS2A de PayPal et n'est disponible qu'aux organisations détenant une autorisation AISP et/ou PISP.

PayPal exige que vous leur fournissiez soit un QWAC eIDAS soit un OBWAC, c'est-à-dire une certification Open Banking. Pour obtenir des conseils sur la façon de vous inscrire pour l'une de ces certifications, voir [Payment Services Directive 2 (PSD2) Compliance](https://developer.paypal.com/reference/guidelines/psd2-compliance/) dans la documentation développeur PayPal.

:::

## Versions et géographies prises en charge

L'intégration PayPal de Codat prend en charge uniquement les comptes commerciaux PayPal mondiaux. **Les comptes personnels et Premier ne sont pas inclus ni pris en charge.**

Notre intégration PayPal est prise en charge **pour l'Europe uniquement**. Pour l'utiliser, votre organisation doit être basée en Europe ; n'avoir accès qu'aux données des comptes bancaires européens ; et être autorisée en tant qu'AISP et/ou PISP comme décrit dans la zone _Exigences du fournisseur_.

## Limitations de temps sur les synchronisations de données

L'accès accordé par un commerçant pour accéder à ses données PayPal via l'API X2SA de PayPal n'est valide que pendant 90 jours.

Tenter de synchroniser des données après l'expiration de la période de 90 jours entraînera une erreur d'authentification (et la déconnexion de la connexion de données).

Pour maintenir une connexion au-delà de 90 jours, vous devrez demander au commerçant de réautoriser la connexion (cela peut être fait à tout moment avant ou après la fin de la période de 90 jours).

L'API X2SA de PayPal ne permet de lire les données que pour les 90 derniers jours et Codat ne pourra synchroniser/stocker/retourner que les données des 90 jours à partir de la dernière synchronisation que vous effectuez.
