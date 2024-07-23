import React from "react";
import Api from '../../components/Api'

const URL = "/oas/Codat-Sync-Partner-Commerce.json"

const PartnerCommerceSyncApi = () => {
  return (
    <Api url={URL} title="Sync for Commerce - Partner API reference"/>
  );
}

export default PartnerCommerceSyncApi