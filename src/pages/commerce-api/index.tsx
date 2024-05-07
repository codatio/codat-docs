import React from "react";
import Api from '../../components/global/Api'

const URL = "/oas/Codat-Commerce.json"

const CommerceApi = () => {
  return (
    <Api url={URL} title="Commerce API reference" socialBanner="https://docs.codat.io/img/banners/social/commerce.png"/>
  );
}

export default CommerceApi