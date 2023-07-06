import React from "react";
import Api from '../../components/global/Api'

const URL = "/oas/Codat-Accounting.json"

const AccountingApi = () => {
  return (
    <Api url={URL} title="Accounting API reference"/>
  );
}

export default AccountingApi