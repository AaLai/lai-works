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
    .then(test => this.setState({ test }))
  }

  render() {
    const { test } = this.state;

    return (
      <div>
        <Navbar />
        <div className="App">
          <h1>Testing here</h1>
          {/* Check to see if any items are found*/}
          {test.city? (
            <div>
              {/* Render the list of items */}
              {test.city}
            </div>
          ) : (
            <div>
              <h2>No List Items Found</h2>
            </div>
          )
        }
        </div>
      </div>
    );
  }
}

export default Test;