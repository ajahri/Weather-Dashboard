import React from "react";
import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from "recharts";

const WeatherChart = ({ data }) => {
  const chartData = data.forecast.forecastday[0].hour.map((h) => ({
    time: h.time.split(" ")[1],
    temp: h.temp_c,
  }));

  return (
    <div className="p-6 bg-white rounded-xl shadow mt-6">
      <h3 className="text-lg font-semibold mb-4">Hourly Temperature</h3>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="time" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="temp" stroke="#8884d8" strokeWidth={2} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default WeatherChart;
