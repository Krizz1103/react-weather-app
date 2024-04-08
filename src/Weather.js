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
              autoFocus="on"
            />{" "}
          </div>
          <div className="col-3">
            <input
              type="submit"
              value="Search"
              className="btn btn-primary w-100"
            />
          </div>
        </div>
      </form>
      <h1>Madrid</h1>
      <ul>
        <li>Monday 20:00</li>
        <li>Mostly cloudy</li>
      </ul>
      <div className="row mt-3">
        <div className="col-6">
          <div className="d-flex">
            <img
              src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
              alt="mostly cloudy"
              className="float-left"
            />
            <div className="float-left">
              <span className="temperature ">6</span>
              <span className="units">ºC</span>
            </div>
          </div>
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
