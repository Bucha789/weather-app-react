import React,{useState} from 'react'
import './App.css';
import HighLights from './components/HighLights';
import MainContainer from './components/MainContainer';
import SearchPlaces from './components/SearchPlaces';
import WeatherStats from './components/WeatherStats';
import getWeather from './services/getWeather'
function App() {
  const [isSearch, setSearch] = useState(false);
  const [data, setData] = useState({
    main: {
      temp: '',
    },
    name: '',
    weather: {
      main: '',
    }
  })

  const handleData = (item) => {
    setSearch(false);
    console.log('hola estoy viendo como se conectan los componentes', item)
    const city = item.name;
    getWeather(city).then(res => setData(res))
  }
  return (
    <main>
      <SearchPlaces active={isSearch} handleData={handleData} setSearch={setSearch}/>
      <MainContainer setSearch={setSearch} />
      <WeatherStats />
      <HighLights />
    </main>
  );
}

export default App;
