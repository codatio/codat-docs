import React from "react";
import Api from '../../components/Api'

const URL = "/oas/Codat-Assess.json"

const AssessApi = () => {
  return (
    <Api url={URL} title="Assess API reference"/>
  );
}

export default AssessApi
