import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Search from './components/search'
import SearchResults from './components/search_results'

function App () {
  const [countriesList, setCountriesList] = useState([])
  const [countryName, setcountryName] = useState('')
  const handleCountryNameChange = (event) => {
    console.log('Search', event.target.value)
    setcountryName(event.target.value)
  }

  useEffect(() => {
    console.log('effect')
    axios
      .get('https://restcountries.eu/rest/v2/all')
      .then(response => {
        console.log('promise fulfilled')
        setCountriesList(response.data)
      })
  }, [])
  console.log('Got', countriesList.length, 'Countries')
  return (
    <div>
      <h1>Find countries info here</h1>
      <Search countryNm={countryName} handleCountryNmChange={handleCountryNameChange} />
      <SearchResults contriesLst={countriesList} filterText={countryName} />
    </div>)
}
export default App
