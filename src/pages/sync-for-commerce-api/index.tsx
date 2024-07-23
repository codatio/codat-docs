import React from "react";
import Api from '../../components/Api'

const URL = "/oas/Codat-Sync-Commerce.json"

const CommerceSyncApi = () => {
  return (
    <Api url={URL} title="Sync for Commerce API reference"/>
  );
}

export default CommerceSyncApi