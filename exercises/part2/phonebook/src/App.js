import React, { useState, useEffect } from 'react'
import Form from './components/Form'
import Filter from './components/Filter'
import Persons from './components/Persons'
import Notification from './components/Notification'
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

  const [message, setMessage] = useState(null)
  const [messageStyle, setMessagestyle] = useState('')
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
    const contains = persons.find(nameOb =>
      nameOb.name === newName &&
      nameOb.number === newNumber)
    const hasDiffNum = persons.find(nameOb =>
      nameOb.name === newName &&
      nameOb.number !== newNumber)
    if (contains) { window.alert(`${newName} is already added to phonebook.`) } else if (hasDiffNum) {
      if (window.confirm(
      `${newName} is already in phonebook, do you want to replace the old number with the new number?`)) {
        phonebook
          .update(hasDiffNum.id, nameObject)
          .then(returnedUpdatedPerson => {
            setNewName('')
            setNewNumber('')
            setMessage(`${nameObject.name} has been updated`)
            setMessagestyle('add')
          })

        phonebook
          .getAll()
          .then(currentPhonebook => {
            console.log('promise fulfilled')
            setPersons(currentPhonebook)
          })
      }
    } else if (newName !== '' && newNumber !== '') {
      phonebook
        .create(nameObject)
        .then(returnPerson => {
          console.log('promise fulfilled')
          setNewName('')
          setNewNumber('')
          setMessage(`Added ${nameObject.name}`)
          setMessagestyle('add')

          setTimeout(() => {
            setMessage(null)
            setMessagestyle(null)
          }, 5000)
        })
      phonebook
        .getAll()
        .then(currentPhonebook => {
          console.log('promise fulfilled')
          setPersons(currentPhonebook)
        })
    } else { window.alert('You have not entered the name or the number.') }
  }
  return (
    <div>
      <Notification message={message} style={messageStyle} />
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
