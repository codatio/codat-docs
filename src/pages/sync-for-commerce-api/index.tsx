import React from "react";
import Api from '../../components/global/Api'

const URL = "https://raw.githubusercontent.com/codatio/oas/main/json/Codat-Sync-Commerce.json"

const CommerceSyncApi = () => {
  return (
    <>
      <head>
        <title>
          Sync for Commerce API reference | Codat_docs
        </title>
      </head>

      <Api url={URL}/>
    </>
  );
}

export default CommerceSyncApi