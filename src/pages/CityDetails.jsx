import React from "react";

const CityDetails = ({ cityData }) => {
  if (!cityData) return null;

  const { location, current } = cityData;

  return (
    <div className="p-6 bg-white rounded-xl shadow mt-6">
      <h2 className="text-2xl font-bold mb-2">{location.name}</h2>
      <p>Country: {location.country}</p>
      <p>Temperature: {current.temp_c}°C</p>
      <p>Humidity: {current.humidity}%</p>
      <p>Wind Speed: {current.wind_kph} kph</p>
      <p>Pressure: {current.pressure_mb} mb</p>
    </div>
  );
};

export default CityDetails;
