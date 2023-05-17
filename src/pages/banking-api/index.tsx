import React from "react";
import Api from '../../components/global/Api'

const URL = "https://raw.githubusercontent.com/codatio/oas/main/json/Codat-Banking.json"

const BankingApi = () => {
  return (
    <Api url={URL} title="Banking API reference"/>
  );
}

export default BankingApi