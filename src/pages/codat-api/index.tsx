import React from "react";
import Api from '../../components/global/Api'

const URL = "/oas/Codat-Common.json"

const CodatApi = () => {
  return (
    <Api url={URL} title="Platform API reference"/>
  );
}

export default CodatApi