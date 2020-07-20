import React, { useState, useEffect} from 'react'
import axios from 'axios'

const App = () => {
  const [persons, setPersons] = useState([])
  useEffect(() => {
      console.log('effect')
      axios
        .get('http://localhost:3001/persons')
        .then(response => {
          console.log('promise fulfilled')
          setPersons(response.data)
        })
    }, [])
  console.log('render', persons.length, 'personss')

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
    setPersons(persons.filter(person => person.name.toLowerCase().includes(event.target.value.toLowerCase())))
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
      <div>
          Filter shown with: <input value={filter} onChange={handleFilterChange} />
      </div>
      <h2>Add new number</h2>
      <form onSubmit={addPerson}>
        <div>
          Name: <input value={newName} onChange={handleNameChange} />
        </div>
        <div>
          Number: <input value={newNumber} onChange={handleNumberChange} />
        </div>
        <div>
          <button type='submit'>add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        {persons.map((person, i) => <p key={i}> {person.name} {person.number} </p>)}
      </ul>
    </div>
  )
}

export default App
