import React from "react";
import Api from '../../components/global/Api'

const URL = "/oas/Codat-Bank-Feeds.json"

const PayrollSyncApi = () => {
  return (
    <Api url={URL} title="Sync for Payroll API reference"/>
  );
}

export default PayrollSyncApi