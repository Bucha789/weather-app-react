import React from 'react'
import * as weatherImages from '../assets/images/index';

export default function ImageDisplay({ state }) {
  let image;

  switch(state) {
    case 'Clear':
      image = weatherImages.clearIcon
      break;
    case 'Clouds':
      image = weatherImages.lightCloudIcon
      break;
    case 'Snow':
      image = weatherImages.snowIcon;
      break;
    case 'Thunderstom':
      image = weatherImages.thunderstormIcon;
      break;
    default: 
      image = weatherImages.hailIcon;
  }  
  return (
    <div>
      <img src={image} alt="shower" />
    </div>
  )
}
