import React from "react";
import Api from '../../components/global/Api'

const URL = "/oas/Codat-Sync-Partner-Commerce.json"

const PartnerCommerceSyncApi = () => {
  return (
    <Api url={URL} title="Sync for Commerce - Partner API reference"/>
  );
}

export default PartnerCommerceSyncApi