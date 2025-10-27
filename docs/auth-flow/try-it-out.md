---
title: "Try it out"
description: "See Link in action"
---

1. Create a company following [this guide](/get-started/first-steps#1-create-a-company)
2. Add it to the input below
3. Click `Connect` to open Link

```jsx live
function AuthFlow() {
  const [companyId, setCompanyId] = React.useState(
    "e0e0462f-d7f3-456f-b3e9-0b40afe0245e",
  );

  return (
    <div>
      <label>Company ID:</label>
      <input
        type="text"
        value={companyId}
        onChange={(e) => setCompanyId(e.target.value)}
      />

      <CodatLink companyId={companyId} />
    </div>
  );
}
```
