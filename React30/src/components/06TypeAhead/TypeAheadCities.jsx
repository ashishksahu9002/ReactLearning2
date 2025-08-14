import React from "react";

const TypeAheadCities = ({ cityData, searchInput }) => {
  const { city, state, rank, population } = cityData;

  const numberWithCommas = (x) => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  const highlightText = (text) => {
    const regex = new RegExp(`(${searchInput})`, "gi");
    const parts = text.split(regex);
    return parts.map((part, index) =>
    part.toLowerCase() === searchInput.toLowerCase() ? (
      <span key={index} className="bg-yellow-300">
        {part}
      </span>
    ) : (
      part
    )
  );
  }

  return (
    <div className="text-black bg-white b border-4 border-white rounded-lg w-77 p-3 mx-1.5 my-1 ">
      <h1 className="text-2xl">
        Rank : <span className="font-bold">{rank}</span>
      </h1>
      <div className="flex justify-between text-lg">
        <div>
          <p> {highlightText(city)} </p>
          <p> {highlightText(state)} </p>
        </div>
        <div className="flex flex-col justify-center items-center">
          <p> Population </p>
          <p> {numberWithCommas(population)} </p>
        </div>
      </div>
    </div>
  );
};

export default TypeAheadCities;
