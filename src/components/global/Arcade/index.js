import React from "react";

const Arcade = ({url, title}) => {
  return <div
    style={{
      position: "relative",
      paddingBottom: "calc(55.43859649122807% + 41px)",
      height: 0,
      width: "100%",
      margin: "1em 0",
      borderRadius: "8px",
      overflow: "hidden",
    }}
  >
    <iframe
      src={url}
      title={title}
      frameBorder={0}
      loading="lazy"
      allow="clipboard-write"
      webkitallowfullscreen
      mozallowfullscreen
      allowFullScreen
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        colorScheme: "light"
      }}
    />
  </div>
}

export default Arcade;