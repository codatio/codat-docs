import React from "react";
import Api from '../../components/global/Api'

const URL = "/oas/Codat-Payables.json"

const PayablesApi = () => {
  return (
    <Api url={URL} title="Payables API reference"/>
  );
}

export default PayablesApi