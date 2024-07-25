import React, { useEffect, useState } from "react";

import { initializeCodatLink } from "@codat/sdk-link-types";

export const CodatLink = (props) => {
  const [componentMount, setComponentMount] = useState(
    null
  );

  useEffect(() => {
    const target = componentMount;
    if (target && target.children.length === 0) {
      initializeCodatLink(target, props);
    }
    // CodatLink does not support changing props after initialisation.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [componentMount]);

  return (
    <div
      style={{
        // Recommended dimensions
        width: "460px",
        height: "840px",
        maxHeight: "95%",
      }}
      ref={setComponentMount}
    ></div>
  );
};