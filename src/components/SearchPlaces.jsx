import React from 'react'
import '../assets/css/SearchPlaces.css'
export default function SearchPlaces({ active }) {
  
  
  return (
    <div className={active ? 'search__container active' : 'search__container'}>
      <div className='search__input'>
        <div className='input__container'>
        <i className="fas fa-search"></i>
        <input type="text" placeholder='search location' />
        </div>
        <button>Search</button>
      </div>
      <div className='search__results'>
        <div className='result__container'>
          <h3>London</h3>
          <p>&#62;</p>
        </div>
      </div>
    </div>
  )
}
