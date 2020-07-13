import React, { useState } from 'react'

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
      <div>
          Filter shown with: <input value={filtered} onChange={handleFilterChange} />
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
        {persons.filter(person => person.name.toLowerCase().includes(filtered.toLowerCase())).map((filteredPerson, i) => <p key={i}> {filteredPerson.name} {filteredPerson.number} </p>)}
      </ul>
    </div>
  )
}

export default App
