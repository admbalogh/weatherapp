import React, { useState } from "react";
import Formatted from "./Formatted";
import axios from "axios";
import "./Weather.css";

function Weather(props) {
  const [weatherData, setWeatherData] = useState(false);

  //Adding API data to our State call//
  function handleSubmit(response) {
    console.log(response.data);
    setWeatherData({
      ready: true,
      temperature: response.data.main.temp,
      humidity: response.data.main.temp,
      date: new Date(response.data.dt * 1000),
      description: response.data.weather[0].description,
      iconURL: "https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png",
      wind: response.data.wind.speed,
      city: response.data.name,
    });
  }
  // When the event is true Returning the form and executing the API call//
  if (weatherData.ready) {
    return (
      <div className="weather">
        <form>
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                placeholder="Enter a city.."
                className="form-control"
                autoFocus="on"
              />
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
        <h1> {weatherData.city}</h1>
        <ul>
          <li>
            <Formatted date={weatherData.date} />
          </li>
          <li className="text-capitalize ">{weatherData.description}</li>
        </ul>
        <div className="row mt-3">
          <div className="col-6">
            <img
              src={weatherData.iconURL}
              alt={weatherData.description}
              className="float-left"
            />
            <span className="temperature">
              {Math.round(weatherData.temperature)}
            </span>
            <span className="unit">ºC</span>
          </div>
          <div className="col-6">
            <ul>
              <li>Humidity:{Math.round(weatherData.humidity)}%</li>
              <li>Wind:{Math.round(weatherData.wind)}km/h</li>
            </ul>
          </div>
        </div>
      </div>
    );
  }

  // If it false return Loading
  else {
    const apiKey = "c6d9f7aef9ff8091de9eeba09c596035";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleSubmit);

    return "Loading...";
  }
}

export default Weather;
