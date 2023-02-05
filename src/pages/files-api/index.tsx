import React from "react";
import Api from '../../components/global/Api'

const URL = "https://raw.githubusercontent.com/codatio/oas/main/json/Codat-Files.json"

const AccountingApi = () => {
  return (
    <Api url={URL}/>
  );
}

export default AccountingApi