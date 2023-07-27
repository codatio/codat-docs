import React from "react";
import Api from '../../components/global/Api'

const URL = "/oas/Codat-Files.json"

const FilesApi = () => {
  return (
    <Api url={URL} title="Files API reference"/>
  );
}

export default FilesApi