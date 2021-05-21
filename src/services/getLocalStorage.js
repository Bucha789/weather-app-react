export function getLocalPlace() {
  const lastPlace = localStorage.getItem('lastPlace');
  if (lastPlace) {
    return JSON.parse(lastPlace);
  }
  return "";
}
export function setLocalPlace(latitude, longitude, name) {
  const lastPlace = {
    place: name,
    latitude: latitude,
    longitude: longitude,
  }
  localStorage.setItem('lastPlace', JSON.stringify(lastPlace))
}