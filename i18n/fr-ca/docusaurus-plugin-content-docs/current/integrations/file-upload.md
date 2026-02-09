---
title: "Téléversement de fichiers"
description: "Permettez à vos clients de partager leurs données commerciales en utilisant la fonctionnalité de téléversement de fichiers"
---

Les intégrations **Téléversement de fichiers comptables**, **Téléversement de fichiers bancaires** et **Téléversement de documents commerciaux** offrent une fonctionnalité simple de téléversement de fichiers.

Vous pouvez capturer les documents commerciaux de vos PME en plus des données contribuées accessibles via nos intégrations principales. Cela peut inclure des documents d'identité personnelle, des présentations, des contrats ou des fichiers avec des données comptables et bancaires.

Les intégrations de téléversement de fichiers sont disponibles dans le portail Codat dans **Paramètres > Intégrations > Autres intégrations**.

:::caution Analyse antivirus

Bien que nous analysions tous les fichiers téléversés pour détecter les virus, nous vous recommandons de faire de même pour une sécurité optimale.
:::

## Exigences de téléversement de fichiers

Les fichiers téléversés doivent répondre aux exigences suivantes :

- Jusqu'à 20 fichiers peuvent être téléversés à la fois.
- Les fichiers PDF, XLS, XLSX, XLSB, CSV, DOC, DOCX, PPT, PPTX, JPEG, JPG et PNG peuvent être téléversés.
- Chaque fichier peut avoir une taille maximale de 10 Mo.

## Activer les téléversements de fichiers via Link

Pour permettre à vos clients PME de téléverser leurs documents commerciaux, vous devez d'abord activer les intégrations de téléversement de fichiers dans le portail Codat dans **Paramètres > Intégrations > Autres intégrations**.

Une fois activée, une option pour téléverser des fichiers apparaîtra sur l'écran de sélection de plateforme pertinent. L'intégration **Téléversement de documents commerciaux** apparaît comme une section distincte dans votre [flux Link](/auth-flow/overview).

<img
  src="/img/old/b5ae456-file_uploads_selected.png"
  alt="Vue de sélection de plateforme Link avec téléversement de fichiers comptables et commerciaux activé"
/>

Les fichiers téléversés par vos clients peuvent ensuite être téléchargés depuis le portail Codat, ou en utilisant les endpoints **Files** dans l'API.

## Configurer le texte de la boîte de dialogue de téléversement de fichiers

Personnalisez le texte utilisé dans la fenêtre de dialogue **Téléversement de fichiers** pour fournir aux utilisateurs des conseils supplémentaires. Cette fenêtre apparaît lorsque les utilisateurs sélectionnent l'intégration de téléversement de fichiers dans le flux Link.

1. Cliquez sur **Paramètres > Flux d'authentification > Link** dans la barre de navigation.
2. Dans la section **Téléversement de fichiers**, entrez le texte à utiliser pour les intégrations.

## Accès aux fichiers téléversés

:::caution Webhooks

Les fichiers téléversés ne déclencheront pas de webhooks.
:::

### Accéder aux fichiers via le portail

1. Accédez à la page **Entreprises** et sélectionnez une entreprise qui a téléversé des fichiers. Cela est indiqué par une étiquette verte `Téléversement de fichiers`.
2. Sélectionnez **Données > Fichiers téléversés** dans le volet de navigation de gauche.
3. Cliquez sur **Télécharger les fichiers** pour la date à laquelle les fichiers ont été téléversés.

Un fichier zip sera téléchargé. Il contiendra tous les fichiers qui ont été téléversés à la date choisie, organisés par intégration.

### Accéder aux fichiers via l'API Codat

Explorez la référence API [ici](/files-api#/).

[Lister les fichiers téléversés par une entreprise](/files-api#/operations/list-files) :

```json
GET /companies/{companyId}/files
```

[Télécharger tous les fichiers d'une entreprise](/files-api#/operations/download-files) :

```json
GET /companies/{companyId}/files/download
```

[Téléverser des fichiers pour une entreprise](/files-api#/operations/upload-files) :

```json
POST /companies/{companyId}/connections/{connectionId}/files
```
