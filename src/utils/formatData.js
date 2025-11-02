export const formatTemperature = (temp, unit) => {
  return unit === "C" ? `${temp}°C` : `${(temp * 9) / 5 + 32}°F`;
};
