import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Header = (props) => <h1>{props.title}</h1>
const Section = (props) => <h2>{props.title}</h2>
const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)

const Maxvote = (props) => {
  const v = props.votes
  console.log('votesz', props)
  const maxVote = Math.max(...v)
  const index = v.indexOf(maxVote)
  if (maxVote === 0) { return 'There are no votes available yet.' }
  return (<p> {anecdotes[index]} has {maxVote} votes. </p>)
}
const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

const App = (props) => {
  const [selected, setSelected] = useState(0)
  let randomNumber = Math.floor((Math.random() * (anecdotes.length)))
  const [votes, setVotes] = useState([0, 0, 0, 0, 0, 0])
  // const [votes, setVotes] = useState(new Uint8Array(anecdotes.length))

  const handleSelected = () => {
    if (randomNumber === selected) {
      randomNumber = Math.floor((Math.random() * (anecdotes.length)))
    }
    return setSelected(randomNumber)
  }

  const handleVotes = () => {
    const copy = [...votes]
    copy[selected] += 1
    setVotes(copy)
  }
  console.log('selected', selected)
  console.log('Length of anecdotes = ', anecdotes.length)
  console.log(votes)

  return (
    <div>
      <Header title='Anecdote of the day' />
      <p>{props.anecdotes[selected]}</p>
      <p>selected = {selected}</p>
      <p>rand= {randomNumber}</p>
      <Button handleClick={handleVotes} text='Vote' />
      <Button handleClick={handleSelected} text='Next Anecdote' />
      <Section title='Anecdote with most votes' />
      <Maxvote votes={votes} />
    </div>
  )
}

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)
