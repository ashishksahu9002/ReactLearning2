import React, { useState } from "react";
import FlexPchild from "./FlexPchild";

const FlexChild = ({ data }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [showText, setShowText] = useState(false);

  const handleToggle = () => {
    if (!isOpen) {
      // Opening: grow first, then show text
      setIsOpen(true);
      setTimeout(() => setShowText(true), 700); // matches 0.7s animation
    } else {
      // Closing: hide text first, then shrink
      setShowText(false);
      setTimeout(() => setIsOpen(false), 500); // matches text slide-out duration
    }
  };

  return (
    <div
      className={`bg-[#6c0f9c] flex justify-center flex-col items-center m-1.5 p-1.5 cursor-pointer ${
        isOpen ? "flex-5 text-6xl" : "flex-1 text-3xl"
      }`}
      style={{
        transition:
          "font-size 0.7s cubic-bezier(0.61, -0.19, 0.7, -0.11), " +
          "flex 0.7s cubic-bezier(0.61, -0.19, 0.7, -0.11), " +
          "background 0.2s",
      }}
      onClick={handleToggle}
    >
      {data.map((text, index) => (
        <FlexPchild key={index} text={text} status={showText} pos={index} />
      ))}
    </div>
  );
};

export default FlexChild;
