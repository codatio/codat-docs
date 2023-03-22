import React from "react";
import Api from '../../components/global/Api'

const URL = "https://raw.githubusercontent.com/codatio/oas/main/json/Codat-Accounting.json"

const AccountingApi = () => {
  return (
    <>
      <head>
        <title>
          Accounting API reference | Codat_docs
        </title>
      </head>

      <Api url={URL}/>
    </>
  );
}

export default AccountingApi