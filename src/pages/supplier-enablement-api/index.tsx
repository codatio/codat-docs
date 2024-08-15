import React from "react";
import Api from '../../components/Api'

const URL = "/oas/Codat-Supplier-Enablement.json"

const SupplierEnablementApi = () => {
  return (
    <Api url={URL} title="Supplier enablement API reference" socialBanner="https://docs.codat.io/img/banners/social/supplier-enablement.png"/>
  );
}

export default SupplierEnablementApi