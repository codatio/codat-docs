import React from "react";
import Api from '../../components/global/Api'

const URL = "https://raw.githubusercontent.com/codatio/oas/main/json/Codat-Sync-Commerce.json"

const CommerceSyncApi = () => {
  return (
    <Api url={URL} title="Sync for Commerce API reference"/>
  );
}

export default CommerceSyncApi