import React, { useEffect, useRef } from "react";

const ZoomImage = src => {
  const imgRef = useRef(null);
  useEffect(() => {
    let Drift;

    if (typeof window !== "undefined") {
      Drift = require("drift-zoom").default;
    }

    new Drift(imgRef.current, {
      zoomFactor: 4
    });
  }, []);
  return /*#__PURE__*/React.createElement("div", {
    className: "zoom-image"
  }, /*#__PURE__*/React.createElement("img", {
    className: "zoom-image__img",
    ref: imgRef,
    src: src.src,
    "data-zoom": src.src,
    alt: "Zoom here :)"
  }));
};

export default ZoomImage;