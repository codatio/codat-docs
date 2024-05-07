import React from "react";
import Api from '../../components/global/Api'

const URL = "/oas/Codat-Bank-Feeds.json"

const BankFeedApi = () => {
  return (
    <Api url={URL} title="Bank Feeds API reference" socialBanner="https://docs.codat.io/img/banners/social/bankfeeds.png"/>
  );
}

export default BankFeedApi