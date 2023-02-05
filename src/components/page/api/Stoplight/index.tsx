import React from "react";
import { API } from "@stoplight/elements";

interface StoplightProps {
  apiDescriptionUrl: string;
}

const Stoplight = ({ apiDescriptionUrl }: StoplightProps) => {
  return <API apiDescriptionUrl={apiDescriptionUrl} router="hash" />;
};

export default Stoplight;
