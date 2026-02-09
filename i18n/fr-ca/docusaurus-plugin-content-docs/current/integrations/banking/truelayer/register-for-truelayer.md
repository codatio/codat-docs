---
title: "S'inscrire à TrueLayer"
description: "Options d'inscription pour notre intégration API avec TrueLayer"
sidebar_label: Register
---

L'inscription auprès de TrueLayer est requise pour utiliser l'intégration bancaire TrueLayer de Codat.

Vous pouvez vous inscrire directement auprès de TrueLayer, ou par l'intermédiaire de Codat en contactant votre gestionnaire de compte.

## S'inscrire directement auprès de TrueLayer

Suivez les instructions dans [Configurer votre intégration TrueLayer](/integrations/banking/truelayer/set-up-truelayer-2) pour créer un compte TrueLayer et configurer votre intégration.

## S'inscrire à TrueLayer via Codat

Si vous choisissez cette approche, nous gérons le processus de mise en place d'un accord entre TrueLayer et votre organisation.

1. Contactez votre gestionnaire de compte Codat et informez-le que vous souhaitez utiliser notre intégration TrueLayer.
2. Nous vous enverrons un accord supplémentaire, que vous devrez signer et retourner.
3. Lorsque Codat vous contacte, créez un compte TrueLayer comme demandé.
4. Attendez que le support Codat confirme que vous pouvez commencer à utiliser TrueLayer.
5. Suivez les instructions dans [Configurer votre intégration TrueLayer](/integrations/banking/truelayer/set-up-truelayer-2) pour configurer votre intégration.

:::info Coûts TrueLayer
Lorsque vous êtes facturé par Codat, votre facture affiche une ligne pour les coûts TrueLayer. Pour plus d'informations, contactez votre gestionnaire de compte.

## FAQ sur l'inscription

### 1. Quel accord un client Codat doit-il signer ?

Tous les clients Codat doivent signer :

L'accord client de Codat, qui couvre la relation du client avec Codat (TrueLayer ne verra pas ceci)
Un accord conjoint entre le client, Codat et TrueLayer pour la fourniture de services d'information sur les comptes (AIS) par TrueLayer

De plus, pour tout client Codat qui (a) fournit des AIS à ses utilisateurs finaux et (b) n'est pas réglementé ou autorisé à fournir des AIS, ils devraient également devenir un agent de TrueLayer en signant :

Un accord d'agent AIS entre le client et TrueLayer

### 2. Comment un client Codat peut-il savoir s'il fournit des AIS à ses utilisateurs finaux ?

Le facteur clé ici est de savoir si l'application ou le site Web du client affichera les informations de compte acquises via l'API Data de TrueLayer à un utilisateur final. Par exemple :

✅ - l'application ou le site Web du client permet à l'utilisateur final de visualiser et de catégoriser les transactions de compte. Il peut s'agir de données consolidées ou simplement de leurs transactions bancaires.
❌ - l'application ou le site Web du client acquiert simplement des informations bancaires pour aider à la prise de décision interne (par exemple, KYC ou analyse de crédit) sans afficher ces informations à un utilisateur final.

TrueLayer a plus d'informations à ce sujet ici.

Notez que c'est quelque chose que TrueLayer peut aider à évaluer dans le cadre de son processus de diligence raisonnable lors de l'intégration des clients de Codat. Par exemple, TrueLayer demandera des captures d'écran de l'application ou du site Web du client pour évaluer si des services AIS sont fournis à l'utilisateur final à n'importe quel moment de l'expérience utilisateur.

Cela dit, il reste de la responsabilité du client de demander des conseils juridiques pour savoir s'il fournit des AIS et, le cas échéant, s'il peut être tenu de devenir réglementé lui-même ou de devenir l'agent AIS de TrueLayer.

### 3. Que signifie être l'agent AIS de TrueLayer ?

En devenant l'agent AIS de TrueLayer, le client de Codat n'a pas besoin de devenir autorisé ou réglementé pour fournir des AIS - il peut fournir ces services à ses utilisateurs finaux en s'appuyant sur les propres autorisations AIS FCA de TrueLayer.

En tant qu'agent, le client de Codat agira au nom de TrueLayer dans la fourniture de ces services AIS, donc TrueLayer devra comprendre comment ces services seront fournis via l'application ou le site Web du client. Le client devra également divulguer le fait qu'il agit en tant qu'agent de TrueLayer à ses utilisateurs finaux.

TrueLayer facturera des frais pour ces arrangements d'agence, comme indiqué dans l'accord d'agent AIS.

Le client doit examiner attentivement l'accord d'agent AIS et être à l'aise avec les obligations et les exigences énoncées dans l'accord.

Le client sera également enregistré en tant qu'agent de TrueLayer auprès de la FCA et ses coordonnées apparaîtront sur l'entrée du registre FCA pour TrueLayer ici.

### 4. Quel est le processus de diligence raisonnable ?

Cela dépendrait de la voie empruntée par le client.

API Data (non-agent) : TrueLayer effectuera une vérification KYB sur l'entité commerciale en utilisant diverses sources de données. Nous pouvons également demander un diagramme de flux de données/captures d'écran du parcours utilisateur du client.
Processus d'agent AIS : vérification KYB sur l'entité commerciale, vérification KYC sur la personne appropriée et compétente, preuve des systèmes et contrôles de l'entreprise, documents de politique (listés dans le formulaire de demande) et assurance PII et Cyber valide.

### 5. Une fois le processus de diligence raisonnable terminé, quelles étapes/actions le client de Codat doit-il s'attendre à suivre dans le cadre de l'intégration ?

L'équipe juridique de TrueLayer préparera un accord conjoint et, si nécessaire, l'accord d'agent AIS pour signature par les parties concernées. TrueLayer aura besoin de quelques détails d'entreprise de base, des détails du signataire et des contacts pour les notifications du client pour préparer les accords pour signature. TrueLayer demandera généralement des signatures via Docusign.

Une fois que les accords pertinents ont été signés, le processus diffère ensuite selon la voie empruntée par le client de Codat :

Processus API Data (non-agent) : le client peut s'attendre à passer directement en production après avoir signé l'accord conjoint.
Processus d'agent AIS : lorsque l'accord conjoint et l'accord d'agent AIS ont été signés, l'équipe de conformité de TrueLayer soumettra une demande à la FCA pour que le client devienne un agent PSD de TrueLayer.

### 6. Combien de temps dure généralement le processus d'intégration, y compris le KYC/KYB ?

Pour les clients non-agents, vous pouvez vous attendre à ce que le client soit intégré et que l'accord conjoint soit émis par TrueLayer dans un délai de 3 à 4 jours ouvrables. Cependant, le calendrier peut différer selon la complexité d'une intégration particulière et le niveau d'effort requis pour examiner le client.

Pour les clients agents, la période d'intégration dépendra de la quantité d'informations que le client fournit pendant le processus de diligence raisonnable et de demande d'agent PSD. Une fois que la diligence raisonnable est passée et que nous avons soumis une demande d'agent PSD, une réponse de la FCA prend généralement jusqu'à 15 jours ouvrables.

### 7. Que devons-nous faire si le client Codat a une question concernant le processus d'intégration ?

Pour les questions concernant le processus KYC/KYB/AML, veuillez contacter : codat@truelayer.com
Pour les questions concernant l'accord conjoint ou l'accord d'agent AIS, veuillez contacter : legal@truelayer.com
Pour toutes les autres questions concernant le processus d'intégration, veuillez contacter : codat@truelayer.com
