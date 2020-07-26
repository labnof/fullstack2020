import React from 'react'

const SearchResults = (props) => {
  const list = props.contriesLst
  const filterList = list.filter(country => country.name.toLowerCase().includes(props.filterText.toLowerCase()))
  if (filterList.length > 10) {
    return <p> Too many matches, specify another filter. </p>
  } else {
    return (
      <ul>
        {filterList.map((filteredContries, i) => <p key={i}> {filteredContries.name} </p>)}
      </ul>)
  }
}
export default SearchResults
