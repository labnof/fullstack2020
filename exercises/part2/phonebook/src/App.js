import React, { useState } from 'react'
import Filter from './components/Filter'
import Form from './components/Form'
import Persons from './components/Persons'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ])

  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filtered, setFilter] = useState('')
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
  const addPerson = (event) => {
    event.preventDefault()
    const nameObject = { name: newName, number: newNumber }
    const contains = persons.find(nameOb => nameOb.name === newName)
    if (contains) { window.alert(`${newName} is already added to phonebook`) } else {
      if (newName !== '' && newNumber !== '') {
        setPersons(persons.concat(nameObject))
        setNewName('')
        setNewNumber('')
      }
    }
  }
  return (
    <div>
      <h2>Phonebook</h2>
      <Filter value={filtered} onValueChange={handleFilterChange} />
      <h2>Add new number</h2>
      <Form  addP = {addPerson} newNm = {newName} handleNmChange = {handleNameChange}
        newNumb={newNumber} handleNumbChange= {handleNumberChange} />
      <h2>Numbers</h2>
      <Persons contacts = {persons} filterText={filtered}/>
    </div>
  )
}

export default App
