import { useState } from "react";

const ClockHand = ({ handType, obj }) => {
  const { flag, deg } = obj;

  return (
    <div
      className={`h-2 w-1/2 bg-black origin-right absolute ${
        flag ? "handTransition" : ""
      }`}
      style={{ transform: `rotate(${deg}deg)` }}
      handtype={handType}
    ></div>
  );
};

export default ClockHand;
