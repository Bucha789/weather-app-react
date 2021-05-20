
export default function getPlaces(value) {
  const API_URL = `http://api.positionstack.com/v1/forward?access_key=0085c19cdfc9b3f93ece07b3cb3fb2c1&query=${value}`
  return(
  fetch(API_URL)
    .then(res => res.json())
    .then(response => {
      const { data } = response;
      if (Array.isArray(data)) {
        // console.log("Este es el valor de data: ", data)
        const filteredPlaces = data.filter((item, index, self) => {
          let value = 0;
          for (let i = index; i < self.length; i++) {
            if (self[i].label === item.label) {
              value++;
            }
          }
          if (value > 1) {
            return false;
          }
          return true;
        })
        // console.log("este es el valor de los usuarios filtrados: ", filteredPlaces)
        return filteredPlaces
      }
      return []
    })
    .catch((err) => console.log(err)));
}