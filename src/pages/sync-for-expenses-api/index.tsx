import React from "react";
import Api from '../../components/global/Api'

const URL = "/oas/Codat-Sync-Expenses.json"

const ExpensesSyncApi = () => {
  return (
    <Api url={URL} title="Sync for Expenses API reference" socialBanner="/img/banners/social/expenses.png"/>
  );
}

export default ExpensesSyncApi