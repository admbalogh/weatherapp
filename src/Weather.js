import React, { useState } from "react";
import WeatherInfo from "./WeatherInfo";
import axios from "axios";
import "./Weather.css";

//creating the Weather value in States
function Weather(props) {
  const [weatherData, setWeatherData] = useState(false);
  const [city, setCity] = useState(props.defaultCity);

  //Adding API data to our State call//
  function handleResponse(response) {
    setWeatherData({
      ready: true,
      temperature: response.data.main.temp,
      humidity: response.data.main.temp,
      date: new Date(response.data.dt * 1000),
      description: response.data.weather[0].description,
      icon: response.data.weather[0].icon,
      wind: response.data.wind.speed,
      city: response.data.name,
    });
  }
  // When you submit the button executing the search call
  function handleSubmit(event) {
    event.preventDefault();
    search();
  }
  //On change adding the value to setCity
  function handleCityChange(event) {
    setCity(event.target.value);
  }
  //Searching from API the City
  function search() {
    const apiKey = "c6d9f7aef9ff8091de9eeba09c596035";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  // When the event is true Returning the form and executing the API call//
  if (weatherData.ready) {
    return (
      <div className="weather">
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                placeholder="Enter a city.."
                className="form-control w-75"
                autoFocus="on"
                onChange={handleCityChange}
              />
            </div>
            <div className="col-3">
              <input type="submit" value="Search" className="btn-control" />
            </div>
          </div>
        </form>
        <WeatherInfo data={weatherData} />
      </div>
    );
  }
  // If it false return Loading
  else {
    search();
    return "Loading...";
  }
}

export default Weather;
