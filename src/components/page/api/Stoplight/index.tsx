import React from "react";
import { API } from "@stoplight/elements";

interface StoplightProps {
  apiDescriptionUrl: string;
}

const Stoplight = ({ apiDescriptionUrl }: StoplightProps) => {
  return <API 
    apiDescriptionUrl={apiDescriptionUrl}
    router="hash"
    hideInternal="true"
  />;
};

export default Stoplight;
