import React from "react";
import Api from '../../components/global/Api'

const URL = "/oas/Codat-Intuit-IDX.json"

const IntuitIdxApi = () => {
  return (
    <Api url={URL} title="IDX API reference"/>
  );
}

export default IntuitIdxApi