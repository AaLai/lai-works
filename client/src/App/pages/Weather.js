import React, { Component } from 'react';
import Navbar from './Navbar'
import ErrorPage from './ErrorPage'

class Weather extends Component {
  // Initialize the state
  constructor(props){
    super(props);
    this.state = {
      Weather: null
    }

    this.getWeather = () => {
      fetch('/api/weather')
        .then(res => res.json())
        .then(Weather => this.setState({ Weather: Weather }))
        .catch(err => console.error(err))
    }

    this.getWeather();
  }


  render() {
    console.log(this.state.Weather)
    const Weather = this.state.Weather

    return (
      <div>
        <Navbar />
        <div className="App">
          {Weather? (
            <div>
              <h1>Current Weather</h1>
              <div>
                The current weather at {Weather.data.name}, {Weather.data.sys.country} is {Math.round((Weather.data.main.temp - 273.15) * 10) / 10}&deg;C ({Math.round(((Weather.data.main.temp - 273.15) * 9/5 + 32) * 10) / 10} &deg; F ), with {Weather.data.weather[0].main}
              </div>
            </div>
          ) : (
            <div>
              <ErrorPage/>
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default Weather;