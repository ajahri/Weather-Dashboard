import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleUnit } from "../features/settingsSlice";

const SettingsMenu = () => {
  const dispatch = useDispatch();
  const { unit } = useSelector((state) => state.settings);

  return (
    <div className="p-4 text-center">
      <button
        className="bg-gray-800 text-white px-4 py-2 rounded"
        onClick={() => dispatch(toggleUnit())}
      >
        Switch to {unit === "C" ? "Fahrenheit" : "Celsius"}
      </button>
    </div>
  );
};

export default SettingsMenu;
