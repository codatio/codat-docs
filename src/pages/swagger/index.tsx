import React from "react";
import Api from '../../components/global/Api'

//const URL = "https://raw.githubusercontent.com/mcclowes/oas-test/main/example.json"
const URL = "https://raw.githubusercontent.com/mcclowes/oas-test/main/wip.json"

const SwaagerRef = () => {
  return (
    <Api url={URL}/>
  );
}

export default SwaagerRef