import React from "react";
import WeatherIcon from "./WeatherIcon";
import Formatted from "./Formatted";
import WeatherTemperature from "./WeatherTemperature";

//Creating Weather Info
function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <h1> {props.data.city}</h1>
      <ul>
        <li>
          <Formatted date={props.data.date} />
        </li>
        <li className="text-capitalize ">{props.data.description}</li>
      </ul>
      <div className="row mt-3">
        <div className="col-6">
          <WeatherIcon code={props.data.icon} size={52} />

          <span className="temperature">
            <WeatherTemperature celsius={props.data.temperature} />
          </span>
        </div>
        <div className="col-6">
          <ul>
            <li>Humidity:{Math.round(props.data.humidity)}%</li>
            <li>Wind:{Math.round(props.data.wind)}km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default WeatherInfo;
