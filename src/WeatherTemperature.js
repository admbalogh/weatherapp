import React, { useState } from "react";

function WeatherTemperature(props) {
  const [unit, setUnit] = useState("celsius");
  // Showing the Fahrenheit
  function showFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }
  // Showing the Celsius
  function showCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }
  // Fahrenheit conversion
  function fahrenheit() {
    return (props.celsius * 9) / 5 + 32;
  }
  if (unit === "celsius") {
    return (
      <span>
        <span className="temperature">{Math.round(props.celsius)}</span>
        <span className="unit">
          ºC|{""}
          <a href="/" onClick={showFahrenheit}>
            ºF{" "}
          </a>
        </span>
      </span>
    );
  } else {
    return (
      <span>
        <span className="temperature">{Math.round(fahrenheit())}</span>
        <span className="unit">
          <a href="/" onClick={showCelsius}>
            ºC
          </a>
          {""}
          |ºF
        </span>
      </span>
    );
  }
}
export default WeatherTemperature;
