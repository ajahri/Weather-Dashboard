import React from "react";

const CityCard = ({ city, temp, condition, icon }) => (
  <div className="p-4 bg-white rounded-lg shadow hover:scale-105 cursor-pointer transition">
    <h2 className="text-lg font-semibold">{city}</h2>
    <img src={icon} alt={condition} className="w-12 h-12" />
    <p>{temp}°C</p>
    <p className="text-gray-500">{condition}</p>
  </div>
);

export default CityCard;
