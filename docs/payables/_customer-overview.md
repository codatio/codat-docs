## Overview

When implementing your Bill Pay solution, you need to create your SMB customer as a **company** in Codat before registering their accounting software as a connection. You can do that when the customer starts interacting with your application.  

We have highlighted this sequence of steps in our detailed process diagram below. 

<details>
<summary><b>Detailed process diagram</b></summary>

```mermaid

  sequenceDiagram
      participant smb as SMB customer
      participant app as Your application 
      participant codat as Codat
      participant acctg as Accounting software
      
      smb ->> app: Logs into application
      smb ->> app: Initiates connection to accounting software

        app ->> codat: Passes company and connection details
        codat ->> codat: Creates company and connection
        app ->> codat: Initiates auth flow
        codat -->> smb: Displays auth flow
        smb -->> codat: Authorizes connection
        codat ->> acctg: Establishes connection
```

</details>  

:::tip Authorize your API calls
Remember to [authenticate](/using-the-api/authentication) when making calls to our API. Navigate to **Developers > API keys** in the Portal to pick up your authorization header.
:::