import React from "react";
import WeatherIcon from "./WeatherIcon";
import axios from "axios";
import "./WeatherForecast.css";

export default function WeatherForecast(props) {
  function handleResponse(response) {
    console.log(response.data);
  }

  let lat = props.coordinates.lat;
  let lon = props.coordinates.lon;
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=e98397944eb2234d46458f3bc9b7103f&units=metric`;

  axios.get(apiUrl).then(handleResponse);
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
