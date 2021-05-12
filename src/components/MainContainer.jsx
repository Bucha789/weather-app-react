import React from "react";
import MainWeatherLogo from "../assets/images/Cloud-background.png";
// import ShowerIcon from "../assets/images/Shower.png";
import "../assets/css/MainContainer.css";
import getTodayDate from "../services/getTodayDate";
import ImageDisplay from "./ImageDisplay";

export default function MainContainer({setSearch, mainWeatherData, place}) {
  const { temp, weather } = mainWeatherData;
  const date = getTodayDate();
  return (
    <div className="main-weather__container">
      <div className="main-weather__controls">
        <button onClick={() => setSearch(true)}>Search for places</button>
        <a href="/">
          <i className="fas fa-location-arrow"></i>
        </a>
      </div>
      <div className="main-weather__state" id="mainWeather">
        <img
          className="background"
          src={MainWeatherLogo}
          alt="Cloud-background"
        />
        <ImageDisplay state={weather ? weather[0].main : 'hola'}/>
        <div className="main-temperature__display">
          <h2>
            {parseInt(temp)}<span>°C</span>
          </h2>
          <span>{weather ? weather[0].main : 'hola'}</span>
          <p>
            Today<span>•</span>{`${date[0]}, ${date[1]} ${date[2]}`}
          </p>
          <p>
            <i className="fas fa-map-marker"></i> {place}
          </p>
        </div>
      </div>
    </div>
  );
}
