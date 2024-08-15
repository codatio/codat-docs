import React from "react";
import Api from '../../components/Api'

const URL = "/oas/Codat-Sync-Payroll.json"

const PayrollSyncApi = () => {
  return (
    <Api url={URL} title="Sync for Payroll API reference"/>
  );
}

export default PayrollSyncApi