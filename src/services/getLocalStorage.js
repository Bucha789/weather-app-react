export function getLocalPlace() {
  const place = localStorage.getItem('place');
  return place;
}
export function setLocalPlace(place) {
  localStorage.setItem('place', place)
}