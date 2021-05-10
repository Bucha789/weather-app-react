import React from 'react'
import './App.css';
import HighLights from './components/HighLights';
import MainContainer from './components/MainContainer';
import SearchPlaces from './components/SearchPlaces';
import WeatherStats from './components/WeatherStats';

function App() {
  return (
    <main>
      <SearchPlaces />
      <MainContainer />
      <WeatherStats />
      <HighLights />
    </main>
  );
}

export default App;
