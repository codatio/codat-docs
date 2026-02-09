import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";

## Téléverser une pièce jointe

Lors de la création d'une nouvelle facture, votre client PME peut vouloir enregistrer une copie de la facture PDF émise par son fournisseur en tant que pièce jointe à la facture dans son logiciel comptable. Utilisez le point de terminaison <a href={props.endpoint} target="_blank">Téléverser une pièce jointe de facture</a> pour prendre en charge cette action.

Différents logiciels comptables prennent en charge différents formats et tailles de fichiers. Consultez le schéma <a href={props.schema} target="_blank">Pièce jointe</a> pour des indications spécifiques à chaque intégration ou consultez la documentation du logiciel.

<Tabs groupId="language">

<TabItem value="nodejs" label="TypeScript">

```javascript
const fileName = 'bill-receipt.pdf';
var fs = require('fs');
var fileBuffer = fs.readFileSync(fileName, null).buffer;
var fileArray = new Uint16Array( fileBuffer.slice(266,(sizeofArray*sizeOfArrayElement));

const attachmentUploadResponse = await payablesClient.bills.uploadAttachment({
    attachmentUpload: {
      file: {
        content: fileArray,
        fileName: fileName,
      },
    },
    billId: billId,
    companyId: companyId,
    connectionId: connectionId,
  });
```

</TabItem>

<TabItem value="python" label="Python">

```python
file_name = 'bill-receipt.pdf'
with open(file_name, mode='rb') as file:
    contents = file.read()
    attachment_upload_request = operations.UploadBillAttachmentRequest(
        attachment_upload=shared.AttachmentUpload(
            file=shared.CodatFile(
                content=contents,
                file_name=file_name,
            ),
        ),
        bill_id=bill_id,
        company_id=company_id,
        connection_id=connection_id,
    )
    attachment_upload_response = payablesClient.bills.upload_attachment(attachment_upload_request)
```

</TabItem>

<TabItem value="csharp" label="C#">

```csharp
var fileName = "bill-receipt.pdf";
var file = File.ReadAllBytes(fileName);

var attachmentUploadResponse = await payablesClient.Bills.UploadAttachmentAsync(new() {
    AttachmentUpload = new AttachmentUpload() {
        File = new CodatFile() {
            Content = file,
            FileName = fileName,
        },
    },
    BillId = billId,
    CompanyId = companyId,
    ConnectionId = connectionId,
};);
```

</TabItem>

<TabItem value="go" label="Go">

```go
fileName := "bill-receipt.pdf"
content, err := os.ReadFile(fileName)

ctx := context.Background()
attachmentUploadResponse, err := payablesClient.Bills.UploadAttachment(ctx,
  operations.UploadBillAttachmentRequest{
    AttachmentUpload: &shared.AttachmentUpload{
      File: shared.CodatFile{
        Content: content,
        FileName: fileName,
      },
    },
    BillID: billID,
    CompanyID: companyID,
    ConnectionID: connectionID,
  }
)
```

</TabItem>

</Tabs>
