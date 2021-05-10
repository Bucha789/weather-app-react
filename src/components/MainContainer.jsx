import React,{useState} from "react";
import MainWeatherLogo from '../assets/images/Cloud-background.png';
import ShowerIcon from '../assets/images/Shower.png'

import '../assets/css/MainContainer.css'
import SearchPlaces from "./SearchPlaces";
export default function MainContainer() {
  const [isSearch, setSearch] = useState(false)
  
  
  return (
    <div className="main-weather__container">
      {isSearch && <i className="fas fa-times" onClick={() => setSearch(false)}></i>}
      <SearchPlaces active={isSearch}/>
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
        <div>
          <img src={ShowerIcon} alt="shower" />
        </div>
        <div className="main-temperature__display">
          <h2>
            15<span>°C</span>
          </h2>
          <span>Shower</span>
          <p>
            Today<span>•</span>Fri, 5 Jun
          </p>
          <p>
            <i className="fas fa-map-marker"></i> Helsinki
          </p>
        </div>
      </div>
    </div>
  );
}
