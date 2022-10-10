import React from "react";
import Weather from "./Weather";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Weather />
      <p>
        Created by{" "}
        <a
          href="https://adambalogh.netlify.app/about.htmlproject is"
          className="link"
          target="_blank"
          rel="noreferrer"
        >
          Adam Balogh
        </a>{" "}
        open-source coded on
        <a
          href="https://github.com/admbalogh/weatherapp"
          className="link"
          target="_blank"
          rel="noreferrer"
        >
          {" "}
          GitHub
        </a>
      </p>
    </div>
  );
}

export default App;
