import React from "react";
import Api from '../../components/Api'

const URL = "/oas/Codat-Lending.json"

const LendingApi = () => {
  return (
    <Api url={URL} title="Lending API reference" socialBanner="https://docs.codat.io/img/banners/social/lending.png"/>
  );
}

export default LendingApi