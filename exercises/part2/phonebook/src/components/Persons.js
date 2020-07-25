import React from 'react'

const Persons = (props) => {
  return (
    <ul>
      {props.contacts.filter(person => person.name.toLowerCase().includes(props.filterText.toLowerCase())).map((filteredPerson, i) => <p key={i}> {filteredPerson.name} {filteredPerson.number} </p>)}
    </ul>
  )
}
export default Persons
