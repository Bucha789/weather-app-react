import React, { useEffect, useRef, useState } from "react";
import "../assets/css/SearchPlaces.css";
import getPlaces from "../services/getPlaces";
export default function SearchPlaces({ active, handleData, setSearch }) {
  const [results, setResults] = useState([]);
  const inputSearch = useRef();
  const [value, setValue] = useState("");
  
  useEffect(() => {
    getPlaces(value).then((data) => {
      setResults(data)
      // console.log(results)
    });
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
          ? results.map((item) => 
            (
            <div
            key={item.label}
            onClick={() => handleData(item)}
            className="result__container"
            >
                <h3>{item.label}</h3>
                <p>&#62;</p>
              </div>
          ))
            : null}
          
            </div>
    </div>
  );
}
