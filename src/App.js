import React,{useState} from 'react'
import './App.css';
import HighLights from './components/HighLights';
import MainContainer from './components/MainContainer';
import SearchPlaces from './components/SearchPlaces';
import WeatherStats from './components/WeatherStats';
import getWeather from './services/getWeather'
function App() {
  const [isSearch, setSearch] = useState(false);
  const [place, setPlace] = useState('La chingada')
  const [data, setData] = useState({
    current: {},
    daily: [],
  })

  const handleData = (item) => {
    setSearch(false);
    setPlace(item.name);
    // console.log('hoa estoy viendo como se conectan los componentes', item)
    const latitude = item.latitude.toFixed(2)
    const longitude = item.longitude.toFixed(2)
    getWeather(latitude, longitude).then(res => {
      console.log(res)
      setData(res)})
  }
  return (
    <main>
      <SearchPlaces active={isSearch} handleData={handleData} setSearch={setSearch}/>
      <MainContainer place={place} setSearch={setSearch} mainWeatherData={data.current}/>
      <WeatherStats daylyStats={data.daily}/>
      <HighLights mainWeatherData={data.current}/>
    </main>
  );
}

export default App;
