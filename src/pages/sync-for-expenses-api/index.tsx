import React from "react";
import Api from '../../components/global/Api'

const URL = "https://raw.githubusercontent.com/codatio/oas/main/json/Codat-Expenses.json"

const ExpensesSyncApi = () => {
  return (
    <>
      <head>
        <title>
          Sync for Expenses API reference | Codat_docs
        </title>
      </head>

      <Api url={URL}/>
    </>
  );
}

export default ExpensesSyncApi