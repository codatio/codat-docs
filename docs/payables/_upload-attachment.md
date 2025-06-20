import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";

## Upload attachment

When creating a new bill, your SMB customer may want to save a copy of the PDF invoice issued by their supplier against the bill in their accounting software. Use the <a href={props.endpoint} target="_blank">Upload bill attachment</a> endpoint to support this action.

Different accounting software supports different file formats and sizes. View the <a href={props.schema} target="_blank">Attachment</a> schema for integration-specific guidance or check the software's own documentation.

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
