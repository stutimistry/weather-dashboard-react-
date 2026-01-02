import React from "react";

function WeatherCard({ weather }) {
  return (
    <div className="card">
      <h2>{weather.name}</h2>
      <p className="desc">{weather.weather[0].description}</p>
      <h1>{Math.round(weather.main.temp)}°C</h1>

      <div className="details">
        <p>Humidity: {weather.main.humidity}%</p>
        <p>Wind: {weather.wind.speed} km/h</p>
      </div>
    </div>
  );
}

export default WeatherCard;
