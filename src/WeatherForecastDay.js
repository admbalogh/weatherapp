import React from "react";
import WeatherIcon from "./WeatherIcon";

function WeatherForecastDay(props) {
  //Rendering the max temperature
  function maxTemperature() {
    let temperature = Math.round(props.data.temp.max);
    return `${temperature}º`;
  }
  //Rendering the min temperature
  function minTemperature() {
    let temperature = Math.round(props.data.temp.min);
    return `${temperature}º`;
  }
  // Rendering the current day
  function day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();

    let days = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"];

    return days[day];
  }
  // Returning back from functions the accurate datas
  return (
    <div>
      <div className="WeatherForecast-day">{day()}</div>
      <WeatherIcon code={props.data.weather[0].icon} size={40} />
      <div className="WeatherForecast-temperatures">
        <span className="WeatherForecast-max">{maxTemperature()}</span>
        <span className="WeatherForecast-min">{minTemperature()}</span>
      </div>
    </div>
  );
}

export default WeatherForecastDay;
