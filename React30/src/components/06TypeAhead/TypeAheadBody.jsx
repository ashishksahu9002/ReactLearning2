import React, { useEffect, useState } from "react";
import TypeAheadDefault from "./TypeAheadDefault";
import TypeAheadCities from "./TypeAheadCities";

const TypeAheadBody = () => {
  const [cities, setCities] = useState([]);
  const [showCities, setShowCities] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [showCityFlag, setShowCityFlag] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        const endpoint =
          "https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json";
        const response = await fetch(endpoint);
        const resJson = await response.json();
        setCities(resJson);
      } catch (error) {
        console.error("Error:", error);
      }
    })();
  }, []);

  useEffect(() => {
    const debounce = setTimeout(() => {
      const displayCities = searchInput === '' ? [] : cities.filter((place) => {
        const regex = new RegExp(searchInput, "gi");
        return place.city.match(regex) || place.state.match(regex);
      });
      setShowCities(displayCities);
    }, 500);
    setShowCityFlag(showCities.length === 0 ? false : true);
    return () => clearTimeout(debounce);
  }, [searchInput, showCities]);


  return (
    <div className="flex flex-col items-center justify-center p-14">
      <div className="w-48 h-24 flex justify-center items-center">
        <input
          className="bg-white rounded-lg mt-2 p-4 text-black text-4xl focus:outline-none text-center border-4 border-white "
          placeholder="City or State"
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
        />
      </div>
      <div className="flex justify-center items-center text-center text-black mt-1 mb-10 ">
        <TypeAheadDefault text={"Filter For A City"} />
        <TypeAheadDefault text={"Or A State"} />
      </div>
      {showCityFlag && (
        <div className="flex min-w-screen flex-wrap mt-10 justify-center items-center">
          {showCities.map((city, index) => (
            <TypeAheadCities key={index} cityData={city} />
          ))}
        </div>
      )}
    </div>
  );
};

export default TypeAheadBody;
