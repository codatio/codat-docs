---
title: "Téléversement intelligent de fichiers"
sidebar_label: "Téléversement intelligent de fichiers"
description: "Aidez votre client à fournir ses données de dépenses en utilisant le téléversement intelligent de fichiers de Codat"
displayed_sidebar: spendInsights
---

import { IntegrationsList } from "@components/Integrations";
import {
  spendInsightsDirectIntegrations,
  spendInsightsFileUpload,
} from "@components/Integrations/integrations";

Votre client utilise peut-être un logiciel qui n'a pas d'intégration directe avec Codat. Guidez plutôt vos clients à travers un processus simple et peu exigeant pour obtenir et téléverser leurs informations sur les fournisseurs, les factures, les paiements et les coûts directs afin d'obtenir une analyse perspicace des dépenses et des offres de cartes.

## Parcours de connexion

Lors de l'[intégration du client](/spend-insights/guides/onboard-customer), vous avez partagé un **Link URL** avec eux qui initie un parcours de partage de fichiers. Ce parcours comprend les étapes suivantes :

1. Le client clique sur le Link URL et est dirigé vers l'écran de sélection du logiciel.
2. Le client recherche et sélectionne le logiciel qu'il souhaite connecter.

   ![Interface utilisateur du flux Link de Codat avec l'intégration de téléversement de fichiers Workday sélectionnée.](/img/spend-insights/si-file-upload-selection.png)

3. Le client examine les détails des données qu'il partage et initie la connexion.

   ![Interface utilisateur du flux Link de Codat avec l'écran de consentement qui liste les données qui seront partagées.](/img/spend-insights/si-file-upload-disclaimer.png)

4. Le client est informé du processus de collecte et de téléversement de fichiers. Il alternera entre son logiciel et le parcours de téléversement pour compléter le processus.

   ![Interface utilisateur du flux Link de Codat avec l'écran d'information qui explique le processus de partage de fichiers.](/img/spend-insights/si-file-upload-process.png)

5. Le client suit les instructions à l'écran pour obtenir et téléverser le rapport _Suppliers_ à partir de son logiciel.

   ![Interface utilisateur du flux Link de Codat avec le processus de téléversement du fichier Suppliers affiché.](/img/spend-insights/si-file-upload-suppliers-upload.png)

6. Le client suit les instructions à l'écran pour obtenir et téléverser le rapport _Bills_ à partir de son logiciel.

   ![Interface utilisateur du flux Link de Codat avec le processus de téléversement du fichier Bills affiché.](/img/spend-insights/si-file-upload-bills-upload.png)

7. Le client complète le parcours de téléversement intelligent de fichiers une fois les deux fichiers téléversés.

   ![Interface utilisateur du flux Link de Codat avec la fin du processus de téléversement de fichiers affichée.](/img/spend-insights/si-file-upload-complete.png)

:::tip Liste de vérification du client

Lorsque vous invitez le client à partager ses fichiers, faites-lui savoir que :

- Il devra suivre le Link URL que vous avez partagé avec lui.
- Il devra avoir un accès Administrateur ou équivalent dans son logiciel comptable.
- Il devra partager son écran avec vous s'il demande un soutien téléphonique.

Vous pouvez également partager de manière proactive les [réponses aux questions courantes](/spend-insights/resources/customer-faqs) avec eux.

:::

## Logiciels pris en charge

La solution **Spend Insights** de Codat peut ingérer des fichiers contenant des données de fournisseurs, de factures, de paiements et de coûts directs à partir des logiciels listés ci-dessous pour préparer l'analyse des dépenses. Le processus de téléversement de fichiers est unique pour chacune de ces plateformes, avec des instructions sur l'emplacement des fichiers requis.

<IntegrationsList integrations={spendInsightsFileUpload} />
