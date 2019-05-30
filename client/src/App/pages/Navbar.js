import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../logo.svg';


class Navbar extends Component {
  render() {
    return (
      <div style={{backgroundColor: '#282c34'}}>
        <img src={logo} alt='Logo' className="App-logo"/>
        <Link to={'/'}>
          <button variant="raised">
            Home
          </button>
        </Link>
        <Link to={'./Weather'}>
          <button variant="raised">
            Weather
          </button>
        </Link>
        <Link to={'./About'}>
          <button variant="raised">
            About
          </button>
        </Link>
      </div>
    )
  }
}

export default Navbar;