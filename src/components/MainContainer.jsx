import React from "react";
import MainWeatherLogo from "../assets/images/Cloud-background.png";
// import ShowerIcon from "../assets/images/Shower.png";
import "../assets/css/MainContainer.css";
import getTodayDate from "../services/getTodayDate";
import ImageDisplay from "./ImageDisplay";

export default function MainContainer({
  setSearch,
  mainWeatherData,
  place,
  locationActions,
}) {
  const { temp, weather } = mainWeatherData;
  const date = getTodayDate();
  return (
    <div className="main-weather__container">
      <div className="main-weather__controls">
        <button onClick={() => setSearch(true)}>Search for places</button>
        <span>
          <i
            className="fas fa-bullseye"
            onClick={() => locationActions()}
          ></i>
        </span>
      </div>
      <div className="main-weather__state">
        <img
          className="background"
          src={MainWeatherLogo}
          alt="Cloud-background"
        />
        {weather ? <ImageDisplay state={weather[0].main} /> : <h2 className='null__search'>?</h2>}
        <div className="main-temperature__display">
          <h2>
            {temp ? parseInt(temp) : '0'}
            <span>°C</span>
          </h2>
          <span>{weather ? weather[0].main : "Not Place Selected"}</span>
          <p>
            Today<span>•</span>
            {`${date[0]}, ${date[1]} ${date[2]}`}
          </p>
          <p>
            <i className="fas fa-map-marker-alt"></i> {place}
          </p>
        </div>
      </div>
    </div>
  );
}
