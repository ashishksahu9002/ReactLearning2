import React from "react";
import DrumBackgounds from "./01DrumKits/DrumBackground";
import JSClock from "./02JSClock/JSClock";
import CssVariables from "./03CSSVariables/CssVariables";
import FlexBody from "./05FlexPanelGallery/FlexBody";

const Body = () => {
  return (
    <div className="bg-gray-600 h-screen w-screen text-white">
      {/* <DrumBackgounds /> */}
      {/* <JSClock /> */}
      {/* <CssVariables /> */}
      <FlexBody />
    </div>
  );
};

export default Body;
