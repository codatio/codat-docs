import React from "react";
import Api from '../../components/Api'

const URL = "/oas/Codat-Sync-Payables.json"

const PayablesApi = () => {
  return (
    <Api url={URL} title="Payables API reference"/>
  );
}

export default PayablesApi