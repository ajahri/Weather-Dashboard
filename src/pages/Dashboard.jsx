import React, { useEffect } from "react";
import SearchBar from "../components/SearchBar";
import { useDispatch, useSelector } from "react-redux";
import { getWeather } from "../features/weatherSlice";
import CityCard from "../components/CityCard";

const Dashboard = () => {
  const dispatch = useDispatch();
  const { data, status } = useSelector((state) => state.weather);

  useEffect(() => {
    dispatch(getWeather("Chittorgarh"));
  }, [dispatch]);

  if (status === "loading") return <p>Loading...</p>;
  if (!data) return <p>No data found</p>;

  return (
    <div className="p-6">
    
      <SearchBar />

    
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-6">
        <CityCard
          city={data.current.location.name}
          temp={data.current.current.temp_c}
          condition={data.current.current.condition.text}
          icon={data.current.current.condition.icon}
        />
      </div>
    </div>
  );
};

export default Dashboard;
