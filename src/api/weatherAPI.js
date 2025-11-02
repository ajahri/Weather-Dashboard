import axios from "axios";
import { API_KEY, BASE_URL } from "../config";

export const fetchCurrentWeather = async (city) => {
  const res = await axios.get(`${BASE_URL}/current.json?key=${API_KEY}&q=${city}`);
  return res.data;
};

export const fetchForecast = async (city) => {
  const res = await axios.get(`${BASE_URL}/forecast.json?key=${API_KEY}&q=${city}&days=7`);
  return res.data;
};
