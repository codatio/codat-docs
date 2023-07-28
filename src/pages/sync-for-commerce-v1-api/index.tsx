import React from "react";
import Api from '../../components/global/Api'

const URL = "/oas/Codat-Sync-Commerce-v1.json"

const SyncCommerceV1Api = () => {
  return (
    <Api url={URL} title="Sync for Commerce v1 API reference"/>
  );
}

export default SyncCommerceV1Api