import React from "react";
import Api from '../../components/global/Api'

const URL = "/oas/Codat-Lending.json"

const LendingApi = () => {
  return (
    <Api url={URL} title="Lending API reference" socialBanner="/img/banners/social/lending.png"/>
  );
}

export default LendingApi