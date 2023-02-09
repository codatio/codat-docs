---
title: "File upload"
createdAt: "2022-03-29T13:51:04.681Z"
updatedAt: "2022-12-19T06:05:54.909Z"
---

The **Accounting file upload**, **Banking file upload**, and **Business documents file upload** integrations provide simple file upload functionality.

You can capture your SMB's business documents in addition to contributed data accessed through our main integrations. This may include personal identity documents, pitch decks, contracts, or files with accounting and banking data.

The file upload integrations are available in the Codat Portal in **Settings > Integrations > Other integrations**.

:::caution Caution

Although we scan all uploaded files for viruses, we recommend that you do the same for optimum security.
:::

## File Upload Requirements

Uploaded files must meet the following requirements:

- Up to 20 files can be uploaded at a time.
- PDF, XLS, XLSX, XLSB, CSV, DOC, DOCX, PPT, PPTX, JPEG, JPG, and PNG files can be uploaded.
- Each file can be up to 10MB in size.

## Enable file uploads via Link

To let your SMB customers upload their business documents, you first need to enable the file upload integrations in the Codat Portal at **Settings > > Integrations > Other integrations**.

Once enabled, an option to upload files will appear on the relevant platform selection screen. The **Business documents file upload** integration appears as a separate section in your [Link flow](/auth-flow/overview).

<img
  src="/img/old/b5ae456-file_uploads_selected.png"
  alt="Link platform selection view with accounting and business files upload enabled"
/>

Files uploaded by your customers can then be downloaded from within the Codat Portal, or using the **Files** endpoints in the API.

## Set up file upload dialog text

Customize the text used in the **File upload** dialog window to provide the users with additional guidance. This window appears when users select the file upload integration in the Link flow.

1. Click **Settings > Auth flow > Link** in the navigation bar.
2. In the **File upload** section, enter the text to use for the integrations.

## Access uploaded files via the Portal

1. Navigate to the **Companies** page and select a company that has uploaded files. It is indicated with a green **File upload** pill.
2. Select **Uploaded files** in the left navigation pane.
3. Click **Download files** for the date when the files were uploaded.

A zip file will be downloaded. It will contain all the files that were uploaded on the chosen date, organized by integration.

## Access file uploads via the Codat API

Explore the API reference [here](http://localhost:3000/files-api#/).

[List files uploaded by a company](http://localhost:3000/files-api#/operations/list-files):

```json
GET /companies/{companyId}/files
```

[Download all files for a company](http://localhost:3000/files-api#/operations/download-files):

```json
GET /companies/{companyId}/files/download
```

[Upload files for a company](/files-api#/operations/upload-files):

```json
POST /companies/{companyId}/connections/{connectionId}/files
```
