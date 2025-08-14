import React from "react";
import DrumBackgounds from "./01DrumKits/DrumBackground";
import JSClock from "./02JSClock/JSClock";
import CssVariables from "./03CSSVariables/CssVariables";
import FlexBody from "./05FlexPanelGallery/FlexBody";
import TypeAheadBody from "./06TypeAhead/TypeAheadBody";

const Body = () => {
  return (
    <div className="bg-gray-600 min-h-screen min-w-screen text-white">
      {/* <DrumBackgounds /> */}
      {/* <JSClock /> */}
      {/* <CssVariables /> */}
      {/* <FlexBody /> */}
      <TypeAheadBody />
    </div>
  );
};

export default Body;
