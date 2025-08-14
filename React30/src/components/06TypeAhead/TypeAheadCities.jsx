import React from "react";

const TypeAheadCities = ({ cityData }) => {
  const { city, state, rank, population } = cityData;

  const numberWithCommas = (x)=>  {
      return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    }

  return (
    <div className="text-black bg-white b border-4 border-white rounded-lg w-77 p-3 mx-1.5 my-1 ">
      <h1 className="text-2xl" >Rank : <span className="font-bold">{rank}</span></h1>
      <div className="flex justify-between text-lg">
        <div>
          <p> {city} </p>
          <p> {state} </p>
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
