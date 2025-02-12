import React from "react";
import Api from '../../components/Api'

const URL = "/oas/Codat-Spend-Insights.json"

const SpendInsightsApi = () => {
  return (
    <Api url={URL} title="Spend Insights API reference" socialBanner="https://docs.codat.io/img/banners/social/spend-insights.png"/>
  );
}

export default SpendInsightsApi