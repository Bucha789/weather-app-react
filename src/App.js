import React, { useEffect, useState } from "react";
import "./App.css";
import HighLights from "./components/HighLights";
import MainContainer from "./components/MainContainer";
import SearchPlaces from "./components/SearchPlaces";
import WeatherStats from "./components/WeatherStats";
import { getLocalPlace, setLocalPlace } from "./services/getLocalStorage";
import getWeather from "./services/getWeather";

function App() {
  const [isSearch, setSearch] = useState(false);
  const lastPlace = getLocalPlace();
  const [place, setPlace] = useState(lastPlace.place);
  const [data, setData] = useState({
    current: {},
    daily: [],
  });

  useEffect(() => {
    if (lastPlace) {
      getWeather(lastPlace.latitude, lastPlace.longitude).then((res) =>
        setData(res)
      );
    }
  }, []);

  const handleData = (item) => {
    let place = `${item.name}, ${item.region_code}`;
    setPlace(place);
    setSearch(false);
    // console.log('hoa estoy viendo como se conectan los componentes', item)
    const latitude = item.latitude.toFixed(2);
    const longitude = item.longitude.toFixed(2);
    setLocalPlace(latitude, longitude, place);
    getWeather(latitude, longitude).then((res) => {
      setData(res);
    });
  };

  const handleDataWithYourLocation = () => {
    navigator.geolocation.getCurrentPosition((e) => {
      getWeather(
        e.coords.latitude.toFixed(2),
        e.coords.longitude.toFixed(2)
      ).then((data) => setData(data));
      setPlace("Your Location");
    });
  };

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
