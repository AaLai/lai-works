import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar'

class Home extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <div className="App-header">
          <div className="App">
            <h1>Welcome to Lai Works!</h1>
            {/* Link to test.js */}
            <Link to={'./Test'}>
              <button variant="raised">
                Test Button
              </button>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}
export default Home;