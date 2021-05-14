import React, { useEffect, useRef, useState } from "react";
import "../assets/css/SearchPlaces.css";
export default function SearchPlaces({ active, handleData, setSearch }) {
  const [results, setResults] = useState([]);
  const inputSearch = useRef();
  const [value, setValue] = useState(null);

  useEffect(() => {
    if (value === null) {
      return null;
    }
    fetch(
      `http://api.positionstack.com/v1/forward?access_key=0085c19cdfc9b3f93ece07b3cb3fb2c1&query=${value}`
    )
      .then(res => res.json())
      .then(response => {
        const { data } = response;
        const filteredPlaces = data.filter((item, index, self) => {
          let value = 0;
          for (let i = index; i < self.length; i++) {
            if (self[i].name === item.name) {
              value++;
            }
          }
          if (value > 1) {
            return false;
          }
          return true;
        })
        return filteredPlaces
      })
      .then((data) => setResults(data))
      .catch((err) => console.log(err));
  }, [value]);

  const handleClick = (e) => {
    e.preventDefault();
    setValue(inputSearch.current.value);
  };
  return (
    <div className={active ? "search__container active" : "search__container"}>
      <i className="fas fa-times" onClick={() => setSearch(false)}></i>
      <form className="search__input">
        <div className="input__container">
          <i className="fas fa-search"></i>
          <input ref={inputSearch} type="text" placeholder="search location" />
        </div>
        <button onClick={handleClick}>Search</button>
      </form>
      <div className="search__results">
        {results.length > 0
          ? results.map((item) => (
              <div
                key={item.latitude}
                onClick={() => handleData(item)}
                className="result__container"
              >
                <h3>
                  {item.label}
                </h3>
                <p>&#62;</p>
              </div>
            ))
          : null}
      </div>
    </div>
  );
}
