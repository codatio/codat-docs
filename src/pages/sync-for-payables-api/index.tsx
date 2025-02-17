import React from "react";
import Api from '../../components/Api'

const URL = "/oas/Codat-Sync-Payables-v1.json"

const PayablesApi = () => {
  return (
    <Api url={URL} title="Bill Pay (async) API reference" socialBanner="https://docs.codat.io/img/banners/social/payables.png"/>
  );
}

export default PayablesApi