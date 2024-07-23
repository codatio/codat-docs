import React from 'react';

const Loom = ({ source }) => {

  const isValidSource = source.startsWith("https://www.loom.com/embed/");

  if (!isValidSource) {
    return (
      <div>
        <img src="\img\loom\video-not-found.jpg" alt="Video not found" />
      </div>
    );
  } else return (
    <div style={{ position: "relative", paddingBottom: "56.25%", height: 0 }}>
      <iframe
        src={source}
        title="Embedded Loom Video"
        frameBorder={0}
        allowFullScreen
        loading="lazy"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
        }}
      />
    </div>
  );
};

export default Loom;
