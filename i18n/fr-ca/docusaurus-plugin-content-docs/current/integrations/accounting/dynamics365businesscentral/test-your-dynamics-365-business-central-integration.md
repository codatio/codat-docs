---
title: "Tester votre intégration Dynamics 365 Business Central"
slug: "test-your-dynamics-365-business-central-integration"
description: "Testez votre intégration en lisant les données d'une entreprise test."
sidebar_label: Tests
---

Avant d'envoyer des URL Link à vos clients PME, nous vous recommandons de tester votre intégration en utilisant un compte Dynamics 365 Business Central d'essai.

## Créer des données test et lier une entreprise test à Business Central

1. Connectez-vous au compte Business Central que vous avez ajouté précédemment ou créez-en un nouveau.

2. <a
     className="external"
     href="https://dynamics.microsoft.com/en-gb/business-central/overview/"
     target="_blank"
   >
     Créez des données test dans l'application
   </a>
   ; par exemple, des factures.

3. [Créez une entreprise test](/configure/portal/companies#add-a-new-company) dans le portail Codat.

4. Localisez votre entreprise test, puis cliquez sur **Request data**.

5. Ouvrez l'**URL Link** et suivez les étapes dans Link pour vous connecter à votre compte Microsoft Dynamics 365.
   - Sélectionnez **Microsoft Dynamics 365 Business Central**, puis sélectionnez **Continue to Dynamics 365 Business Central**.
   - Connectez-vous à votre compte Dynamics 365.
   - Autorisez l'accès aux détails de votre compte.
   - Sélectionnez l'entreprise test que vous avez créée.

   :::caution Approbation administrateur - Active Directory

   Selon les paramètres Active Directory (AD) de l'utilisateur PME pour Dynamics 365, un administrateur AD peut avoir besoin d'approuver la connexion à votre application. Si cela s'applique, l'utilisateur est invité à demander l'accès, ce qui notifie les administrateurs AD. Si l'utilisateur est lui-même un administrateur AD, il n'aura pas besoin de demander l'accès.

   Lorsqu'un administrateur AD approuve l'accès, l'utilisateur peut refaire les étapes Link pour établir la connexion à votre application.
   :::

   :::caution Sélection de plusieurs environnements - Sandbox et Production

   Pendant le processus de liaison, l'environnement s'affiche lorsque vous sélectionnez une entreprise disponible dans un environnement sandbox ou de production.

   Cela vous permet d'organiser vos données Business Central en plusieurs environnements de production. De plus, vous et vos clients pouvez vous assurer que le bon environnement est utilisé lors de la liaison des entreprises.

   Selon votre niveau d'accès, une entreprise nommée _Cronus_ peut être disponible à la sélection. Il s'agit d'une entreprise test Microsoft qui est remplie avec des données d'exemple.
   :::

6. Assurez-vous que les données de votre entreprise test s'affichent dans le portail Codat.

Pour en savoir plus sur la façon dont Dynamics 365 Business Central gère certains types de données, et comment cela affecte les données disponibles dans Codat, consultez [Référence de l'intégration Dynamics 365 Business Central](/integrations/accounting/dynamics365businesscentral/accounting-dynamics-365-business-central-reference).
