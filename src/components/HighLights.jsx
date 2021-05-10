import React from 'react'
import '../assets/css/Hightlights.css';


export default function HighLights() {
  return (
<div className="hightlights__container">
      <h2>Today's Hightlights</h2>
      <div className="hightlights-item__container">

        <div className="hightlights__item">
          <h3>Wind status</h3>
          <p>7<span>mph</span></p>
          <div className="wind-speed__container">
            <div className="wind-arrow">
              <i className="fas fa-location-arrow"></i>
            </div>
            <span>WSW</span>
          </div>
        </div>
        <div className="hightlights__item">
          <h3>Humidity</h3>
          <p>84<span>%</span></p>
          <div className="progress-bar__container">
            <div className="checkpoints">
              <span>0</span>
              <span>50</span>
              <span>100</span>
            </div>
            <div className="bar">
              <div className="progress"></div>
            </div>
            <span className="percent">%</span>
          </div>
        </div>
        <div className="hightlights__item">
          <h3>Visibility</h3>
          <p>6,4 <span>miles</span></p>
        </div>
        <div className="hightlights__item">
          <h3>Air Pressure</h3>
          <p>998 <span>mb</span></p>
        </div>
      </div>
      <span className="credits">create by Juandev01 - devChallenges.io</span>
    </div>
  )
}
