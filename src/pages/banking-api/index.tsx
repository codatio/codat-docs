import React from "react";
import Api from '../../components/Api'

const URL = "/oas/Codat-Banking.json"

const BankingApi = () => {
  return (
    <Api url={URL} title="Banking API reference"/>
  );
}

export default BankingApi