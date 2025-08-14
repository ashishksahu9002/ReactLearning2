import React, { useEffect, useState, useRef } from "react";
import TypeAheadDefault from "./TypeAheadDefault";
import TypeAheadCities from "./TypeAheadCities";

const CITIES_ENDPOINT = "https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json";

const TypeAheadBody = () => {
  // const citiesRef = useRef([]); // <-- store cities here
  // instead of useState for cities useRef can be used because it is a static value that does not change after the first initialize
  const [cities, setCities] = useState([]);
  const [showCities, setShowCities] = useState([]);
  const [searchInput, setSearchInput] = useState("");

  //Fetch only once
  useEffect(() => {
    (async () => {
      try {
        const response = await fetch(CITIES_ENDPOINT);
        const resJson = await response.json();
        // in place of setCities(resJson) it can be used as citiesRef.current = resJson
        setCities(resJson);
      } catch (error) {
        console.error("Error fetching cities:", error);
      }
    })();
  }, []);

  // Debounced search
  useEffect(() => {
    const debounce = setTimeout(() => {
      if (!searchInput.trim()) {
        setShowCities([]);
        return;
      }
      const searchLower = searchInput.toLowerCase();
      // in place of cities.filter it can be used as citiesRef.current.filter
      const filtered = cities.filter(
        (place) =>
          place.city.toLowerCase().includes(searchLower) ||
          place.state.toLowerCase().includes(searchLower)
      );
      setShowCities(filtered);
    }, 500);
    return () => clearTimeout(debounce);
  }, [searchInput]);


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
      {showCities.length > 0 && (
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
