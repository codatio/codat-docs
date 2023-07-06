import React from "react";
import Api from '../../components/global/Api'

const URL = "/oas/Codat-Expenses.json"

const ExpensesSyncApi = () => {
  return (
    <Api url={URL} title="Sync for Expenses API reference"/>
  );
}

export default ExpensesSyncApi