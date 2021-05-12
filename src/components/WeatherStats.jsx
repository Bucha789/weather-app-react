import React from "react";
import "../assets/css/WeatherStats.css";
import lightCloudIcon from "../assets/images/LightCloud.png";
import HeavyRainIcon from "../assets/images/HeavyRain.png";
import lightThunderstormIcon from "../assets/images/LightThunderstom.png";
import SnowRainIcon from "../assets/images/SnowRain.png";

export default function WeatherStats({ daylyStats }) {
  return (
    daylyStats.length > 0 && (
      <div className="weather-stats__container">
        <div className="weather-stats__item">
          <h3>Tomorrow</h3>
          <img src={lightThunderstormIcon} alt="nevar" />
          <div>
            <span>{parseInt(daylyStats[0].temp.min)}°C</span>
            <span>{parseInt(daylyStats[0].temp.max)}°C</span>
          </div>
        </div>
        <div className="weather-stats__item">
          <h3>Sun, 7 Jun</h3>
          <img src={lightThunderstormIcon} alt="nevar" />
          <div>
            <span>{parseInt(daylyStats[1].temp.min)}°C</span>
            <span>{parseInt(daylyStats[1].temp.max)}°C</span>
          </div>
        </div>
        <div className="weather-stats__item">
          <h3>Mon, 8 Jun</h3>
          <img src={SnowRainIcon} alt="nevar" />
          <div>
            <span>{parseInt(daylyStats[2].temp.min)}°C</span>
            <span>{parseInt(daylyStats[2].temp.max)}°C</span>
          </div>
        </div>
        <div className="weather-stats__item">
          <h3>Tue, 9 Jun</h3>
          <img src={lightCloudIcon} alt="nevar" />
          <div>
            <span>{parseInt(daylyStats[3].temp.min)}°C</span>
            <span>{parseInt(daylyStats[3].temp.max)}°C</span>
          </div>
        </div>
        <div className="weather-stats__item">
          <h3>Wed, 10 Jun</h3>
          <img src={HeavyRainIcon} alt="nevar" />
          <div>
            <span>{parseInt(daylyStats[4].temp.min)}°C</span>
            <span>{parseInt(daylyStats[4].temp.max)}°C</span>
          </div>
        </div>
      </div>
    )
  );
}
