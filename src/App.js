import React from 'react'
import './App.css';
import HighLights from './components/HighLights';
import MainContainer from './components/MainContainer';
import WeatherStats from './components/WeatherStats';

function App() {
  return (
    <main>
      <MainContainer />
      <WeatherStats />
      <HighLights />
    </main>
  );
}

export default App;
