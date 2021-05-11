export default function getWeather (name, _country) {
  console.log(name);
  const API = `https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=48162e6e54a7867ee37d1371edce7b24&units=metric`

  return(
    fetch(API)
    .then(res => res.json())
    .then(response => response)
    .catch(res => console.log(res))
  )
}