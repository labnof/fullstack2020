import React, { useState } from 'react'
import Weather from './county_weather'

const Languages = (props) => {
  return (
    <div>
      <h2>Languages</h2>
      <ul>
        {props.languages.map((language, i) => <li key={i}> {language.name} </li>)}
      </ul>
    </div>
  )
}

const Details = ({ country }) => {
  return (
    <div>
      <h1>{country.name}</h1>
      <p>Capital: {country.capital}</p>
      <p>Population: {country.population}</p>
    </div>
  )
}

const CountryDetails = ({ country }) => {
  return (
    <div>
      <Details country={country} />
      <Languages languages={country.languages} />
      <img src={country.flag} alt='Flag' width='160' height='100' />
      <Weather capital={country.capital} />
    </div>)
}

const SearchResults = (props) => {
  const list = props.contriesLst
  const filterList = list.filter(country => country.name.toLowerCase().includes(props.filterText.toLowerCase()))
  const text = props.filterText
  const [filteredCountry, setFilteredCountry] = useState({})
  console.log('filteredCountry = ', filteredCountry)
  const countryList = filterList.map((filteredCountry, i) => {
    const handleButtonClick = () => {
      setFilteredCountry(filteredCountry)
    }
    return (
      <div key={i}>
        <> {filteredCountry.name} </>
        <input type='button' value='show' onClick={handleButtonClick} />
      </div>)
  }
  )
  return (
    <div> {text === '' && <p> Please enter country. </p>}
      <div>{filterList.length > 10 && text !== '' && <p> Too many matches, specify another filter. </p>}</div>
      <div>{filterList.length === 1 && <CountryDetails country={filterList[0]} />}</div>
      <div>{(filterList.length > 1 && filterList.length < 11) &&
        <ul>
          {countryList}
        </ul>}
      </div>
      <div>{!(filterList.length === 1) && !(filterList.length > 10) && text !== '' && filteredCountry.name && <CountryDetails country={filteredCountry} />}</div>
    </div>)
}
export default SearchResults
