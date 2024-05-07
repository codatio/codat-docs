import React from "react";
import Api from '../../components/global/Api'

const URL = "/oas/Codat-Supplier-Enablement.json"

const SupplierEnablementApi = () => {
  return (
    <Api url={URL} title="Supplier enablement API reference" socialBanner="/img/banners/social/supplier-enablement.png"/>
  );
}

export default SupplierEnablementApi