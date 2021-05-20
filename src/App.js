import React, { useState } from "react";
import "./App.css";
import HighLights from "./components/HighLights";
import MainContainer from "./components/MainContainer";
import SearchPlaces from "./components/SearchPlaces";
import WeatherStats from "./components/WeatherStats";
import getWeather from "./services/getWeather";
function App() {
  const [isSearch, setSearch] = useState(false);
  const [place, setPlace] = useState("");
  const [data, setData] = useState({
    current: {},
    daily: [],
  });

  const handleData = (item) => {
    let place = `${item.name}, ${item.region_code}`;
    setPlace(place);
    setSearch(false);
    // console.log('hoa estoy viendo como se conectan los componentes', item)
    const latitude = item.latitude.toFixed(2);
    const longitude = item.longitude.toFixed(2);
    getWeather(latitude, longitude).then((res) => {
      setData(res);
    });
  };
  
  const handleDataWithYourLocation = () => {
    navigator.geolocation.getCurrentPosition(e => {
      getWeather(e.coords.latitude.toFixed(2), e.coords.longitude.toFixed(2)).then(data => setData(data))
      setPlace('Your Location');
    });
  }


  return (
    <main>
      <SearchPlaces
        active={isSearch}
        handleData={handleData}
        setSearch={setSearch}
      />
      <MainContainer
        place={place}
        setSearch={setSearch}
        mainWeatherData={data.current}
        locationActions={handleDataWithYourLocation}
        main
      />
      <WeatherStats daylyStats={data.daily} />
      <HighLights mainWeatherData={data.current} />
    </main>
  );
}

export default App;
