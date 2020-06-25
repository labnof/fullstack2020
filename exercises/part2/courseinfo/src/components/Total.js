import React from 'react'
const Total = (props) => {
  console.log(props.parts)
  const reducer = (accumulator, currentValue) => accumulator + currentValue.exercises
  const startValue = 0
  const total = props.parts.reduce(reducer, startValue)

  return (<p> <b>Total of {total} exercises </b></p>)
}
export default Total
