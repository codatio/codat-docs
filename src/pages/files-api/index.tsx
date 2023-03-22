import React from "react";
import Api from '../../components/global/Api'

const URL = "https://raw.githubusercontent.com/codatio/oas/main/json/Codat-Files.json"

const FilesApi = () => {
  return (
    <Api url={URL} title="Files API reference"/>
  );
}

export default FilesApi