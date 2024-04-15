import React from "react";
import Api from '../../components/global/Api'

const URL = "/oas/Codat-Bank-Feeds-v2.json"

const BankFeedV2Api = () => {
  return (
    <Api url={URL} title="Bank Feeds (v2) API reference"/>
  );
}

export default BankFeedV2Api