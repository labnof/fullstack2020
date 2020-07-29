import React, { useState, useEffect } from 'react'
import axios from 'axios'

const Weather = (props) => {
  const [weatherResult, setWeatherResult] = useState({
    loading: false,
    result: null
  })
  const request = `http://api.weatherstack.com/current?access_key=${process.env.REACT_APP_API_KEY}&query=${props.capital}`
  console.log('request', request)
  useEffect(() => {
    console.log('effect')
    axios
      .get(request)
      .then(response => {
        console.log('weather promise fulfilled')
        setWeatherResult({ loading: false, result: response.data })
      })
  }, [props.capital, request])
  console.log('weatherResult', weatherResult)

  const { loading, result } = weatherResult
  return (
    <div> {result &&
      <div>
        <h2>Weather in {result.location.name} </h2>
        <p>Temperature: {result.current.temperature} Celsius</p>
        <img src={result.current.weather_icons} alt='weather icons' width='100' height='100' />
        <p>Wind: {result.current.wind_speed} mph direction {result.current.wind_dir}</p>
      </div>}{loading && <p>Weather result is loading...</p>}
    </div>)
}

export default Weather
