import React from "react";
import Api from '../../components/global/Api'

const URL = "https://raw.githubusercontent.com/codatio/oas/main/json/Codat-Bank-Feeds.json"

const BankFeedApi = () => {
  return (
    <Api url={URL}/>
  );
}

export default BankFeedApi