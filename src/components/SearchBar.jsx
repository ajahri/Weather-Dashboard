import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { getWeather } from "../features/weatherSlice";

const SearchBar = () => {
  const [city, setCity] = useState("");
  const dispatch = useDispatch();

  const handleSearch = (e) => {
    e.preventDefault();
    if (city.trim() !== "") {
      dispatch(getWeather(city));
      setCity("");
    }
  };

  return (
    <form onSubmit={handleSearch} className="flex justify-center mb-6">
      <input
        type="text"
        placeholder="Search city..."
        value={city}
        onChange={(e) => setCity(e.target.value)}
        className="border rounded-l px-4 py-2 w-64"
      />
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-r">
        Search
      </button>
    </form>
  );
};

export default SearchBar;
