import React from "react";
import Api from '../../components/global/Api'

const URL = "https://raw.githubusercontent.com/codatio/oas/main/json/Codat-Accounting.json"

const AccountingApi = () => {
  return (
    <Api url={URL} title="Accounting API reference"/>
  );
}

export default AccountingApi