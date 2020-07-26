import React from 'react'

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

const CountryDetails = ({ country }) => {
  return (
    <div>
      <h1>{country.name}</h1>
      <p>Capital: {country.capital}</p>
      <p>Population: {country.population}</p>
    </div>
  )
}

const SearchResults = (props) => {
  const list = props.contriesLst
  const filterList = list.filter(country => country.name.toLowerCase().includes(props.filterText.toLowerCase()))
  if (props.filterText === '') {
    return null
  } else if (filterList.length > 10) {
    return <p> Too many matches, specify another filter. </p>
  } else if (filterList.length === 1) {
    const country = filterList[0]
    return (
      <div>
        <CountryDetails country={country} />
        <Languages languages={country.languages} />
        <img src={country.flag} alt='Flag' width='100' height='100' />
      </div>
    )
  } else {
    return (
      <ul>
        {filterList.map((filteredCountry, i) => <p key={i}> {filteredCountry.name} </p>)}
      </ul>)
  }
}
export default SearchResults
