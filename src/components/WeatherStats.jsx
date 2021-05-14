import React from "react";
import "../assets/css/WeatherStats.css";
import ImageDisplay from "./ImageDisplay";

export default function WeatherStats({ daylyStats }) {
  return (
    daylyStats.length > 0 && (
      <div className="weather-stats__container">
        <div className="weather-stats__item">
          <h3>Tomorrow</h3>
          <ImageDisplay state={daylyStats[0].weather[0].main}/>
          <div>
            <span>{parseInt(daylyStats[0].temp.min)}°C</span>
            <span>{parseInt(daylyStats[0].temp.max)}°C</span>
          </div>
        </div>
        <div className="weather-stats__item">
          <h3>Day 2</h3>
          <ImageDisplay state={daylyStats[1].weather[0].main}/>
          <div>
            <span>{parseInt(daylyStats[1].temp.min)}°C</span>
            <span>{parseInt(daylyStats[1].temp.max)}°C</span>
          </div>
        </div>
        <div className="weather-stats__item">
          <h3>Day 3</h3>
          <ImageDisplay state={daylyStats[2].weather[0].main}/>
          <div>
            <span>{parseInt(daylyStats[2].temp.min)}°C</span>
            <span>{parseInt(daylyStats[2].temp.max)}°C</span>
          </div>
        </div>
        <div className="weather-stats__item">
          <h3>Day 4</h3>
          <ImageDisplay state={daylyStats[3].weather[0].main}/>
          <div>
            <span>{parseInt(daylyStats[3].temp.min)}°C</span>
            <span>{parseInt(daylyStats[3].temp.max)}°C</span>
          </div>
        </div>
        <div className="weather-stats__item">
          <h3>Day 5</h3>
          <ImageDisplay state={daylyStats[4].weather[0].main}/>
          <div>
            <span>{parseInt(daylyStats[4].temp.min)}°C</span>
            <span>{parseInt(daylyStats[4].temp.max)}°C</span>
          </div>
        </div>
      </div>
    )
  );
}
