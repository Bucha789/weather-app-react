export default function getWeather (latitude, longitude) {
  console.log(latitude, longitude);
  const API = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude=alerts,hourly,minutely&appid=48162e6e54a7867ee37d1371edce7b24&units=metric`
  return(
    fetch(API)
    .then(res => res.json())
    .then(response => response)
    .catch(res => console.log(res))
  )
}