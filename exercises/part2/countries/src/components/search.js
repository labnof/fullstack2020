import React from 'react'

const Search = (props) => {
  return (<div> Find countries <input type='search' value={props.countryNm} onChange={props.handleCountryNmChange} /></div>)
}

export default Search
