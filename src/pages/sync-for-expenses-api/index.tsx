import React from "react";
import Api from '../../components/Api'

const URL = "/oas/Codat-Sync-Expenses.json"

const ExpensesSyncApi = () => {
  return (
    <Api url={URL} title="API reference" socialBanner="https://docs.codat.io/img/banners/social/expenses.png"/>
  );
}

export default ExpensesSyncApi