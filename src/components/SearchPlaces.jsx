import React, { useEffect, useRef, useState } from "react";
import "../assets/css/SearchPlaces.css";
export default function SearchPlaces({ active }) {
  const [results, setResults] = useState([]);
  const inputSearch = useRef();
  const [value, setValue] = useState(null);

  useEffect(() => {
    if (value === null) {
      return null
    }
    fetch(
      `http://api.positionstack.com/v1/forward?access_key=0085c19cdfc9b3f93ece07b3cb3fb2c1&query=${value}`
    )
      .then((res) => res.json())
      .then((response) => {
        const { data } = response;
        return data;
      })
      .then((data) => setResults(data))
      .catch((err) => console.log(err));
  }, [value]);

  const handleClick = () => {
    setValue(inputSearch.current.value);
  };
  return (
    <div className={active ? "search__container active" : "search__container"}>
      <div className="search__input">
        <div className="input__container">
          <i className="fas fa-search"></i>
          <input ref={inputSearch} type="text" placeholder="search location" />
        </div>
        <button onClick={handleClick}>Search</button>
      </div>
      <div className="search__results">
        {results.length > 0 ? results.map((item) => (
          <div key={item.latitude} className="result__container">
            <h3>{item.locality}, {item.region}</h3>
            <p>&#62;</p>
          </div>
        )) : null}
      </div>
    </div>
  );
}
