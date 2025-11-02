import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { getWeather } from "../features/weatherSlice";

const FavoritesList = () => {
  const { cities } = useSelector((state) => state.favorites);
  const dispatch = useDispatch();

  return (
    <div className="p-4">
      <h3 className="text-lg font-semibold mb-2">Favorites</h3>
      {cities.length === 0 ? (
        <p className="text-gray-500">No favorite cities yet.</p>
      ) : (
        <div className="flex flex-wrap gap-2">
          {cities.map((city) => (
            <button
              key={city}
              className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
              onClick={() => dispatch(getWeather(city))}
            >
              {city}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default FavoritesList;
