import React from "react";

const FlexPchild = ({ text, status, pos }) => {
  let yVal = pos === 1 ? 0 : pos === 0 ? -100 : 100;
  yVal = status ? 0 : yVal;
  console.log("pos : ", pos, " status : ", status, " yVal : ", yVal);

  return (
    <p
      className="flex-1 flex justify-center items-center text-gray-100 uppercase transition-transform duration-500"
      style={{
        fontFamily: '"Amatic SC", cursive',
        transform: `translateY(${yVal}%)`,
      }}
    >
      {text}
    </p>
  );
};

export default FlexPchild;
