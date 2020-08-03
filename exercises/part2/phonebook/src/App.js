import React, { useState, useEffect } from 'react'
import Form from './components/Form'
import Filter from './components/Filter'
import Persons from './components/Persons'
import phonebook from './services/phonebook'

const App = () => {
  const [persons, setPersons] = useState([])
  useEffect(() => {
    console.log('effect')
    phonebook
      .getAll()
      .then(initialPhonebook => {
        console.log('promise fulfilled')
        setPersons(initialPhonebook)
      })
  }, [])
  console.log('sent', persons.length, 'persons for rendring')

  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('')
  const handleNameChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }
  const handleNumberChange = (event) => {
    console.log(event.target.value)
    setNewNumber(event.target.value)
  }
  const handleFilterChange = (event) => {
    console.log(event.target.value)
    setFilter(event.target.value)
  }
  const handleAddPerson = (event) => {
    event.preventDefault()
    const nameObject = { name: newName, number: newNumber }
    const contains = persons.find(nameOb => nameOb.name === newName)
    if (contains) { window.alert(`${newName} is already added to phonebook.`) } else {
      if (newName !== '' && newNumber !== '') {
        phonebook
          .create(nameObject)
          .then(returnedNote => {
            setPersons(persons.concat(returnedNote))
            setNewName('')
            setNewNumber('')
          })
      } else { window.alert('You have not entered the name or the number.') }
    }
  }
  return (
    <div>
      <h2>Phonebook</h2>
      <Filter value={filter} onValueChange={handleFilterChange} />
      <h2>Add new number</h2>
      <Form handleAddP={handleAddPerson} newNm={newName} handleNmChange={handleNameChange} newNumb={newNumber} handleNumbChange={handleNumberChange} />
      <h2>Numbers</h2>
      <Persons contacts={persons} filterText={filter} />
    </div>
  )
}

export default App
