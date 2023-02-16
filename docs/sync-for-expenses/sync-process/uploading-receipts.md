---
title: "Uploading receipts"
---

# Upload Receipts

Adding a receipt to the transaction can be done after the sync, different accounting software supports different file formats and sizes so its best to check [here](/accounting-api#/attachments#options-for-pushing-attachments-to-the-accounting-platform) for the supported options.

```http
**POST**
/companies/{companyId}/syncs/{syncId}/transactions/{transactionId}/atachments
```

```
Content-Type: multipart/form-data; boundary=yourBoundaryString

--yourBoundaryString
Content-Type: application/json
Content-Disposition: form-data; name="yourFileMetaData"

{ "includeWhenSent": false }

--yourBoundaryString
Content-Type: application/octet-stream
Content-Disposition: form-data; name="yourFileData"; filename="TEST_SEND_FILE.txt"

--yourBoundaryString--
```

### Using Postman to attach a receipt to an expense-transaction

If you use Postman, there are some extra steps you need to follow to attach a file to an invoice.

1.  [Set up a POST request](/using-postman-to-call-the-api), in a similar way to the example, to the following endpoint:

    ```http
        POST

        /companies/{companyId}/syncs/{syncId}/transactions/{transactionId}/atachments
    ```
2.  In the request setup, select **Body**.

3.  From the **Body** menu, select **form-data**.

    1.  Click in the first **KEY** row, and then from the **File** list, select **File**.

    2.  In the corresponding **VALUE** field, select **Select Files** and browse to the file you wish to attach.

    3.  Manually type the file name and extension in the **KEY** field.

4.  Now you can make the request by pressing **Send**
