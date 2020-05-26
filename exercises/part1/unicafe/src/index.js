import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Header =(props) => { 
  console.log(props)
  return(<h1>{props.title}</h1>)}

const Section =(props) => { 
    console.log(props)
    return(<h2>{props.title}</h2>)}
    
const Statistics =(props) =>{
  console.log(props)
  if (props.all === 0){ return (<div>No feeback given!</div>)}
  return (
    <table>
      <tbody>
        <Stat name="Good" stat={props.good}/>
        <Stat name="Neutral" stat={props.neutral}/>
        <Stat name="Bad" stat={props.bad}/>
        <Stat name="All" stat={props.all}/>
        <Stat name="Average" stat={props.average}/>
        <Stat name="Positve" stat={props.positive}/>
      </tbody>
    </table>
  )
}   

const Stat =(props) =>{
  console.log(props)
  return(<tr><td>{props.name}</td>
             <td>{props.stat}</td></tr>)
}

const Button = (props) => (
    <button onClick={props.handleClick}>
      {props.text}
    </button>
  )  



const App = () => {
  
  let all = 0
  let average= 0
  let positive = 0
  
  let pageTitle = "Give Feeback"
  // save clicks of each button to own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGood = () => setGood(good + 1)
  const handleNeutral = () => setNeutral(neutral + 1)
  const handleBad = () => setBad(bad + 1)

  all = good+neutral+bad
  average = (good-bad)/all
  positive = (good/all)*100

  return (
    <div>
      <Header title="Give Feedback"/>
      <Button handleClick={handleGood} text="Good" />
      <Button handleClick={handleNeutral} text="Neutral" />
      <Button handleClick={handleBad} text="Bad" />
      <Section title="Statistics"/>
      <Statistics good={good} neutral={neutral} bad={bad}
       all={all} average={average} positive={positive}/>

    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)