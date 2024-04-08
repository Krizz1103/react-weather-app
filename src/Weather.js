import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <form>
        <div className="row">
          <div className="col-9">
            <input
              type="search"
              placeholder="Type a city..."
              className="form-control"
            />{" "}
          </div>
          <div className="col-3">
            <input type="submit" value="Search" className="btn btn-primary" />
          </div>
        </div>
      </form>
      <h1>Madrid</h1>
      <ul>
        <li>Monday 20:00</li>
        <li>Mostly cloudy</li>
      </ul>
      <div className="row">
        <div className="col-6">
          <img
            src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
            alt="mostly cloudy"
          />
          6ºC
        </div>
        <div className="col-6">
          <ul>
            <li>Precipitacion: 15%</li>
            <li>Humidity: 72%</li>
            <li>Wind: 10km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
