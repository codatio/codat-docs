---
title: "Aperçu du téléchargement Excel"
sidebar_label: "Téléchargement Excel"
description: "Téléchargez les rapports Lending vers Excel"
image: "/img/banners/social/lending.png"
---

import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";

Nos **rapports de téléchargement Excel** vous montreront quelles données sont disponibles depuis notre API sans que vous ayez à écrire de code au préalable. Vous pouvez utiliser cela pour informer les tests au sein de vos modèles de crédit.

## Composants de la fonctionnalité

Notre fonctionnalité de téléchargement Excel se compose des rapports suivants :

- **Exportation de données** fournit une sortie des données provenant de nos sources de données comptables.

- **États financiers améliorés** fournissent une sortie des états de résultat et du bilan catégorisés.

- **Flux de trésorerie améliorés** fournit une sortie des transactions bancaires catégorisées.

- **Factures améliorées** fournit une sortie des factures rapprochées.

- **Audit** vous aide à identifier les irrégularités possibles dans les données financières d'une entreprise.

### Modèle de métriques

Nous avons également créé un [fichier Excel modèle de métriques](/documents/assess-metrics.xlsx). Vous pouvez coller des données dans ce fichier à partir du rapport Excel des états financiers améliorés pour calculer les principales métriques et ratios financiers.

[![Modèle de métriques](/img/lending/metrics-template.png "Modèle de métriques")](/documents/assess-metrics.xlsx)

## Sorties prises en charge

Les rapports au format Excel disponibles pour téléchargement peuvent être générés via le [Portail](https://app.codat.io) ou en appelant les [endpoints de notre API](/lending-api#/) des **rapports Excel**.

### Téléchargement Excel via l'API

Le processus de téléchargement d'un rapport Excel via l'API est le suivant :

1. [Demandez](/lending-api#/operations/generate-excel-report) un rapport Excel à télécharger.

<Tabs groupId="language">

<TabItem value="nodejs" label="TypeScript">

```javascript
const response = await lendingClient.excelReports.generate({
  companyId: companyId,
  reportType: ExcelReportTypes.EnhancedInvoices,
});
```

</TabItem>

<TabItem value="python" label="Python">

```python
request = operations.GenerateExcelReportRequest(
    company_id=company_id,
    report_type=shared.ExcelReportTypes.ENHANCED_INVOICES,
)

response = lending_client.excel_reports.generate(req)
```

</TabItem>

<TabItem value="csharp" label="C#">

```csharp
var response = await lendingClient.ExcelReports.GenerateAsync(new() {
    CompanyId = companyId,
    ReportType = ExcelReportTypes.EnhancedInvoices,
});
```

</TabItem>

<TabItem value="go" label="Go">

```go
ctx := context.Background()
response, err := lendingClient.ExcelReports.Generate(ctx,
    operations.GenerateExcelReportRequest{
        CompanyID: companyID,
        ReportType: shared.ExcelReportTypesEnhancedInvoices,
})
```

</TabItem>

</Tabs>

2. [Vérifiez l'état de progression](/lending-api#/operations/get-excel-report-generation-status) du dernier rapport demandé (optionnel).

<Tabs groupId="language">

<TabItem value="nodejs" label="TypeScript">

```javascript
const response = await lendingClient.excelReports.getStatus({
  companyId: companyId,
  reportType: ExcelReportTypes.EnhancedInvoices,
});
```

</TabItem>

<TabItem value="python" label="Python">

```python
request = operations.GetExcelReportGenerationStatusRequest(
    company_id=company_id,
    report_type=shared.ExcelReportTypes.ENHANCED_INVOICES,
)

response = lending_client.excel_reports.get_status(req)
```

</TabItem>

<TabItem value="csharp" label="C#">

```csharp
var response = await lendingClient.ExcelReports.GetStatusAsync(new() {
    CompanyId = companyId,
    ReportType = ExcelReportTypes.EnhancedInvoices,
});
```

</TabItem>

<TabItem value="go" label="Go">

```go
ctx := context.Background()
response, err := lendingClient.ExcelReports.GetStatus(ctx, operations.GetExcelReportGenerationStatusRequest{
    CompanyID: companyID,
    ReportType: shared.ExcelReportTypesEnhancedInvoices,
})
```

</TabItem>

</Tabs>

3. [Téléchargez](/lending-api#/operations/download-excel-report) le dernier rapport Excel.

<Tabs groupId="language">

<TabItem value="nodejs" label="TypeScript">

```javascript
const response = await lendingClient.excelReports.download({
  companyId: companyId,
  reportType: ExcelReportTypes.EnhancedInvoices,
});
```

</TabItem>

<TabItem value="python" label="Python">

```python
request = operations.DownloadExcelReportRequest(
    company_id=company_id,
    report_type=shared.ExcelReportTypes.ENHANCED_INVOICES,
)

response = lending_client.excel_reports.download(request)
```

</TabItem>

<TabItem value="csharp" label="C#">

```csharp
var response = await lendingClient.ExcelReports.DownloadAsync(new() {
    CompanyId = companyId,
    ReportType = ExcelReportTypes.EnhancedInvoices,
});
```

</TabItem>

<TabItem value="go" label="Go">

```go
ctx := context.Background()
response, err := lendingClient.ExcelReports.Download(ctx, operations.DownloadExcelReportRequest{
    CompanyID: companyID,
    ReportType: shared.ExcelReportTypesEnhancedInvoices,
})
```

</TabItem>

</Tabs>

Une seule demande sera traitée à la fois par entreprise PME et par type de rapport. Le rapport généré est conservé dans le stockage blob et sera remplacé lorsqu'un nouveau rapport sera généré.

### Téléchargement Excel via le Portail

Vous pouvez également générer et télécharger un rapport au format Excel via le [Portail](https://app.codat.io) :

1. Accédez à **Companies** et sélectionnez une entreprise pour laquelle vous souhaitez télécharger un rapport.

2. Dans la navigation latérale, choisissez **Lending > Reports**. Cette page liste les noms des rapports disponibles pour génération et leurs descriptions.

   ![Une capture d'écran de la page des rapports montrant la ligne du rapport d'audit avec une sous-ligne montrant un rapport qui a été généré](/img/old/a3d1d09-ReportsPage1.png)

3. Cliquez sur le bouton **Generate report** à côté du rapport souhaité pour produire un nouveau rapport. Le champ **Last generated** sera mis à jour avec la date et l'heure auxquelles vous avez initié la génération. Il conservera cet horodatage jusqu'à la prochaine fois que vous générerez le rapport.

4. Lorsque le rapport se génère avec succès, le nom du rapport (qui est également le nom du fichier) avec la taille du fichier et le dernier horodatage sera disponible pour téléchargement. Cliquez sur le bouton **Download** pour enregistrer le rapport Excel sur votre machine locale.

Vous pouvez également générer et télécharger le rapport d'**exportation de données** en cliquant sur le bouton **Export data** sur l'un des écrans Lending du Portail.

---

## À lire ensuite

- [Référence Lending](/lending-api#/)
- [Dépannage et FAQ](/lending/troubleshooting)
