import React, { useState, useEffect } from "react";
import WeatherForecastDay from "./WeatherForecastDay";
import "./WeatherForecast.css";
import axios from "axios";

function WeatherForecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, seForecast] = useState(null);
  //If the coordinates are changing than execute the useEffect function
  useEffect(() => {
    setLoaded(false);
  }, [props.coordinates]);

  // Locating through API the city and forecasting the weather conditions
  function handleResponse(response) {
    seForecast(response.data.daily);
    setLoaded(true);
  }
  // API call by coordinates
  function Load() {
    let lon = props.coordinates.lon;
    let lat = props.coordinates.lat;
    let apiKey = "c6d9f7aef9ff8091de9eeba09c596035";
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleResponse);

    return null;
  }
  if (loaded) {
    return (
      <div className="WeatherForecast">
        <div className="row">
          {forecast.map(function (dailyForecast, index) {
            if (index < 7) {
              return (
                <div className="col" key={index}>
                  <WeatherForecastDay data={dailyForecast} />
                </div>
              );
            } else {
              return null;
            }
          })}
        </div>
      </div>
    );
  } else {
    Load();
  }
}

export default WeatherForecast;
