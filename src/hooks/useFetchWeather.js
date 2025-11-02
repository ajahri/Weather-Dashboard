import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getWeather } from "../features/weatherSlice";

const useFetchWeather = (city) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getWeather(city));
  }, [dispatch, city]);
};

export default useFetchWeather;
