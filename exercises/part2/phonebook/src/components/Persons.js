import React, { useState, useEffect } from 'react'
import phonebook from '../services/phonebook'

const Persons = (props) => {
  const [persons, setPersons] = useState([])
  const [filteredPersons, setfiltedPersons] = useState([])
  useEffect(() => {
    setPersons(props.contacts)
  }, [props.contacts])

  useEffect(() => {
    const filteredPersons = persons.filter(person => person.name
      .toLowerCase()
      .includes(props.filterText.toLowerCase()))
    setfiltedPersons(filteredPersons)
  }, [persons, props.filterText])

  const handleDelete = (deletedPerson) => {
    console.log('deletedPerson', deletedPerson)
    if (window.confirm(`Delete ${deletedPerson.name}?`)) {
      phonebook
        .remove(deletedPerson.id)
        .then(returnedPersons => {
          console.log('returnedPersons', returnedPersons)
          setPersons(persons.filter(n => n.id !== deletedPerson.id))
          window.alert(`${deletedPerson.name}' has been deleted.`)
        }).catch(_error => {
          setPersons(persons.filter(n => n.id !== deletedPerson.id))
          window.alert(`${deletedPerson.name}' was already deleted from server.`)
        })
    }
  }
  return (
    <ul>
      {filteredPersons
        .map((filteredPerson, i) =>
          <li key={i}> {filteredPerson.name} {filteredPerson.number}
            <button onClick={() => handleDelete(filteredPerson)}> Delete </button>
          </li>)}
    </ul>
  )
}
export default Persons
