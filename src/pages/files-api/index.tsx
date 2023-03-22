import React from "react";
import Api from '../../components/global/Api'

const URL = "https://raw.githubusercontent.com/codatio/oas/main/json/Codat-Files.json"

const FilesApi = () => {
  return (
    <>
      <head>
        <title>
          Files API reference | Codat_docs
        </title>
      </head>

      <Api url={URL}/>
    </>
  );
}

export default FilesApi