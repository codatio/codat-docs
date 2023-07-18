import React from "react";
import Api from '../../components/global/Api'

const URL = "/oas/Codat-Sync-Expenses-v1.json"

const ExpensesSyncV1Api = () => {
  return (
    <Api url={URL} title="Sync for Expenses v1 API reference"/>
  );
}

export default ExpensesSyncV1Api