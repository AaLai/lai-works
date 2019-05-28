import React, { Component } from 'react';
import Navbar from './Navbar'

class Test extends Component {
  // Initialize the state
  constructor(props){
    super(props);
    this.state = {
      test: []
    }
  }

  // Fetch the list on first mount
  componentDidMount() {
    this.getTest();
  }

  // Retrieves the list of items from the Express app
  getTest = () => {
    fetch('http://ip-api.com/json/')
    .then(res => res.json())
    .then(data => fetch('/api/weather', {
                          method: 'POST',
                          headers: {'Content-Type': 'application/json'},
                          body: JSON.stringify(data)
                        })
    )
      .then(res => res.json())
      .then(test => this.setState({ test }))
  }

  render() {
    const { test } = this.state;
    console.log(this.state)

    return (
      <div>
        <Navbar />
        <div className="App">
          {test.data? (
            <div>
              <h1>Current Weather</h1>
              <div>
                The current weather at {test.data.name}, {test.data.sys.country} is {Math.round((test.data.main.temp - 273.15) * 10) / 10}&deg;C ({Math.round(((test.data.main.temp - 273.15) * 9/5 + 32) * 10) / 10}&deg;F), with {test.data.weather[0].main}
              </div>
            </div>
          ) : (
            <div>
              <h2>Something is not working right now.... Please try again later</h2>
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default Test;