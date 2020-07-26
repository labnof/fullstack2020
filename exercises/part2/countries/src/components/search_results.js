import React from 'react'

const SearchResults = (props) => {
  return (
    <ul>
      {props.contriesLst.filter(country => country.name.toLowerCase().includes(props.filterText.toLowerCase())).map((filteredContries, i) => <p key={i}> {filteredContries.name} </p>)}
    </ul>
  )
}
export default SearchResults
