import React from "react";
import Api from '../../components/global/Api'

const URL = "https://raw.githubusercontent.com/codatio/oas/main/json/Codat-Commerce.json"

const CommerceApi = () => {
  return (
    <Api url={URL}/>
  );
}

export default CommerceApi