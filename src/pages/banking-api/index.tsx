import React from "react";
import Api from '../../components/global/Api'

const URL = "https://raw.githubusercontent.com/codatio/oas/main/json/Codat-Banking.json"

const BankingApi = () => {
  return (
    <>
      <head>
        <title>
          Banking API reference | Codat_docs
        </title>
      </head>

      <Api url={URL}/>
    </>
  );
}

export default BankingApi