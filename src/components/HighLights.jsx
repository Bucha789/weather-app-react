import React, { useRef } from 'react'
import '../assets/css/Hightlights.css';


export default function HighLights({mainWeatherData}) {
    const progressLine = useRef();
    progressLine.current.style.width = `${mainWeatherData.humidity}%`;
  
  return (
  <div className="hightlights__container">
      <h2>Today's Hightlights</h2>
      <div className="hightlights-item__container">
        <div className="hightlights__item">
          <h3>Wind status</h3>
          <p>{parseInt(mainWeatherData.wind_speed)}<span>Km/h</span></p>
          <div className="wind-speed__container">
            <div className="wind-arrow">
              <i className="fas fa-location-arrow"></i>
            </div>
            <span>{parseInt(mainWeatherData.wind_deg)}°</span>
          </div>
        </div>
        <div className="hightlights__item">
          <h3>Humidity</h3>
          <p>{mainWeatherData.humidity}<span>%</span></p>
          <div className="progress-bar__container">
            <div className="checkpoints">
              <span>0</span>
              <span>50</span>
              <span>100</span>
            </div>
            <div className="bar">
              <div ref={progressLine} className="progress"></div>
            </div>
            <span className="percent">%</span>
          </div>
        </div>
        <div className="hightlights__item">
          <h3>Visibility</h3>
          <p>{mainWeatherData.visibility / 10} <span>Km</span></p>
        </div>
        <div className="hightlights__item">
          <h3>Air Pressure</h3>
          <p>{mainWeatherData.pressure} <span>hPa</span></p>
        </div>
      </div>
      <span className="credits">create by Juandev01 - devChallenges.io</span>
    </div>
  )
}
