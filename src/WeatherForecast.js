import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";

export default function WeatherForecast() {
  return (
    <div className="WeatherForecast">
      <div className="row">
        <div className="col">
          <div className="Forecast-day">Thu</div>
          <WeatherIcon code="50d" size={36} />
          <div className="Forecast-temperature">
            <span className="Forecast-temperature-max">19ºC</span>
            <span className="Forecast-temperature-min">10ºC</span>
          </div>
        </div>
      </div>
    </div>
  );
}
